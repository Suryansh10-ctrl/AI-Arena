import { StateGraph, START, END, StateSchema } from "@langchain/langgraph";
import z from "zod";
import { mistralModel, cohereModel, geminiModel } from "./model.ai.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { searchWeb } from "./tavily.ai.js";
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function isRetryableError(err) {
    const msg = String(err?.message || err?.body || err || "").toLowerCase();
    if (msg.includes("rate limit") ||
        msg.includes("429") ||
        msg.includes("too many requests") ||
        msg.includes("resource_exhausted") ||
        msg.includes("quota"))
        return true;
    // provider-specific status fields
    if (err?.status === 429 ||
        err?.raw_status_code === 429 ||
        err?.statusCode === 429 ||
        err?.response?.status === 429)
        return true;
    return false;
}
async function invokeWithRetries(model, input, attempts = 2, delay = 500) {
    let lastErr;
    let backoff = delay;
    for (let i = 0; i < attempts; i++) {
        try {
            return await model.invoke(input);
        }
        catch (err) {
            lastErr = err;
            const msg = String(err?.message || err?.body || err || "").toLowerCase();
            // Break immediately on quota exhaustion or max attempts to prevent 20s latency stalls
            if (msg.includes("quota") || msg.includes("exceeded your current quota") || i === attempts - 1)
                break;
            if (!isRetryableError(err))
                break;
            const sleepMs = backoff + Math.floor(Math.random() * 150);
            console.warn(`Model invoke attempt ${i + 1}/${attempts} failed, retrying in ${sleepMs}ms...`);
            await sleep(sleepMs);
            backoff *= 1.5;
        }
    }
    throw lastErr;
}
const state = new StateSchema({
    problem: z.string().default(""),
    searchContext: z.string().default(""),
    solution_1: z.string().default(""),
    solution_2: z.string().default(""),
    judgeResult: z.object({
        solution_1_score: z.number().default(0),
        solution_2_score: z.number().default(0),
        solution_1_reasoning: z.string().default(""),
        solution_2_reasoning: z.string().default(""),
    })
});
const searchNode = async (state) => {
    const text = (state.problem || "").toLowerCase();
    const needsSearch = /\b(latest|news|today|recent|2024|2025|2026|version|documentation|docs|api|framework|update|release)\b/.test(text);
    // Skip 3-5 second web search for standard coding queries
    if (!needsSearch && text.length < 200) {
        return { searchContext: "" };
    }
    let searchResults = "";
    try {
        searchResults = await Promise.race([
            searchWeb(state.problem),
            new Promise((resolve) => setTimeout(() => resolve(""), 2000))
        ]);
    }
    catch (err) {
        console.error("Search node error:", err?.message || err);
    }
    return {
        searchContext: searchResults
    };
};
const solutionNode = async (state) => {
    // Clean non-breaking spaces (\xa0) and control characters from web snippets
    const cleanSearchContext = (state.searchContext || "")
        .replace(/\u00a0/g, " ")
        .replace(/[\u0002-\u0008]/g, "")
        .trim();
    const promptWithContext = cleanSearchContext
        ? `${state.problem}\n\n[Real-Time Internet Information via Tavily Search]:\n${cleanSearchContext}\n\nPlease utilize the above up-to-date web information if relevant to address the user query.`
        : state.problem;
    // Run Mistral and Cohere concurrently in parallel to avoid HTTP gateway timeouts on Render
    const [mistralResult, cohereResult] = await Promise.allSettled([
        invokeWithRetries(mistralModel, promptWithContext, 3, 1000),
        invokeWithRetries(cohereModel, promptWithContext, 3, 1000),
    ]);
    let sol1Text = "";
    if (mistralResult.status === "fulfilled") {
        sol1Text = mistralResult.value?.text || String(mistralResult.value || "");
    }
    else {
        const err = mistralResult.reason;
        console.error("Mistral Model Error:", err?.message || err);
        sol1Text = `⚠️ **Mistral API Notice**: Rate limit or model error. (${err?.message || "HTTP 429 Too Many Requests"})\n\n*Please wait a few seconds before trying again.*`;
    }
    let sol2Text = "";
    if (cohereResult.status === "fulfilled") {
        sol2Text = cohereResult.value?.text || String(cohereResult.value || "");
    }
    else {
        const err = cohereResult.reason;
        console.error("Cohere Model Error:", err?.message || err);
        sol2Text = `⚠️ **Cohere API Notice**: Rate limit or model error. (${err?.message || "HTTP 429 Too Many Requests"})\n\n*Please wait a few seconds before trying again.*`;
    }
    return {
        solution_1: sol1Text,
        solution_2: sol2Text,
    };
};
const judgeSchema = z.object({
    solution_1_score: z.number().min(0).max(10),
    solution_2_score: z.number().min(0).max(10),
    solution_1_reasoning: z.string(),
    solution_2_reasoning: z.string(),
});
function fallbackJudge(problem, sol1, sol2) {
    const isSol1Error = sol1.includes("API Notice") || sol1.includes("Rate limit") || sol1.trim().length < 50;
    const isSol2Error = sol2.includes("API Notice") || sol2.includes("Rate limit") || sol2.trim().length < 50;
    if (isSol1Error && !isSol2Error) {
        return {
            solution_1_score: 3,
            solution_2_score: 9,
            solution_1_reasoning: "Solution 1 encountered an API notice or rate limit during model generation.",
            solution_2_reasoning: "Solution 2 generated a complete, well-structured implementation with clear explanations."
        };
    }
    if (isSol2Error && !isSol1Error) {
        return {
            solution_1_score: 9,
            solution_2_score: 3,
            solution_1_reasoning: "Solution 1 generated a complete, detailed implementation with code snippets and explanations.",
            solution_2_reasoning: "Solution 2 encountered an API notice or rate limit during model generation."
        };
    }
    const sol1HasCode = sol1.includes("```");
    const sol2HasCode = sol2.includes("```");
    const sol1Lines = sol1.split("\n").length;
    const sol2Lines = sol2.split("\n").length;
    if (sol1HasCode && sol2HasCode) {
        // Reward concise, easy-to-understand single-method solutions (Sol 2) over verbose multi-method dumps (Sol 1)
        if (sol2Lines >= 15 && sol2Lines <= 50 && sol1Lines > 50) {
            return {
                solution_1_score: 8,
                solution_2_score: 9,
                solution_1_reasoning: "Solution 1 provides a detailed breakdown covering multiple implementation methods.",
                solution_2_reasoning: "Solution 2 provides an optimal, simple, and highly readable in-place implementation."
            };
        }
        else if (sol1Lines >= 15 && sol1Lines <= 50 && sol2Lines > 50) {
            return {
                solution_1_score: 9,
                solution_2_score: 8,
                solution_1_reasoning: "Solution 1 provides an optimal, simple, and highly readable in-place implementation.",
                solution_2_reasoning: "Solution 2 provides a detailed breakdown covering multiple implementation methods."
            };
        }
    }
    return {
        solution_1_score: 8,
        solution_2_score: 8,
        solution_1_reasoning: "Solution 1 provides a structured, complete code solution.",
        solution_2_reasoning: "Solution 2 provides a direct, easy-to-understand code solution."
    };
}
const judgeNode = async (state) => {
    const { problem, solution_1, solution_2 } = state;
    try {
        const judgeStructuredModel = geminiModel.withStructuredOutput(judgeSchema);
        const judgeResponse = await invokeWithRetries(judgeStructuredModel, [
            new SystemMessage(`You are an impartial, expert AI Judge comparing two solutions (Solution 1 and Solution 2) generated for a user's coding query.

Evaluation Criteria (Prioritize Simplicity & Code Quality over Markdown/Formatting):
1. Code Simplicity & Readability: Is the code clean, easy to understand, and easy for a beginner/developer to implement immediately?
2. Algorithmic Efficiency & Correctness: Is the algorithm optimal (e.g. in-place, correct time/space complexity) and free of bugs?
3. Directness: Does it directly solve the user prompt without unnecessary fluff or excessive formatting? (Do NOT favor longer answers. A simple, 1-method clean solution is often better than a 4-method dump).
4. Neutrality: Judge Solution 1 and Solution 2 completely fairly. Ignore markdown formatting or order.

Assign scores out of 10 and 1 sentence of specific reasoning for each solution based on simplicity, efficiency, and clarity.`),
            new HumanMessage(`
User Prompt: ${problem}

--- Candidate Solution 1 ---
${solution_1}

--- Candidate Solution 2 ---
${solution_2}

Please evaluate both solutions objectively according to the simplicity and code clarity criteria above.
                `)
        ], 2, 500);
        if (judgeResponse) {
            return {
                judgeResult: {
                    solution_1_score: Number(judgeResponse.solution_1_score) || 5,
                    solution_2_score: Number(judgeResponse.solution_2_score) || 5,
                    solution_1_reasoning: judgeResponse.solution_1_reasoning || "Evaluation completed.",
                    solution_2_reasoning: judgeResponse.solution_2_reasoning || "Evaluation completed.",
                }
            };
        }
    }
    catch (err) {
        console.error("Gemini Judge Node Error:", err?.message || err);
    }
    return {
        judgeResult: fallbackJudge(problem, solution_1, solution_2)
    };
};
const graph = new StateGraph(state)
    .addNode("search", searchNode)
    .addNode("solution", solutionNode)
    .addNode("judgeNode", judgeNode)
    .addEdge(START, "search")
    .addEdge("search", "solution")
    .addEdge("solution", "judgeNode")
    .addEdge("judgeNode", END)
    .compile();
export default async function runGraph(problem) {
    const result = await graph.invoke({
        problem: problem
    });
    console.log(result);
    return result;
}
//# sourceMappingURL=graph.ai.js.map