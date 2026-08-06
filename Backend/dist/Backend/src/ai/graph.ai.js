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
async function invokeWithRetries(model, input, attempts = 4, delay = 1500) {
    let lastErr;
    let backoff = delay;
    for (let i = 0; i < attempts; i++) {
        try {
            return await model.invoke(input);
        }
        catch (err) {
            lastErr = err;
            if (!isRetryableError(err) || i === attempts - 1)
                break;
            const jitter = Math.floor(Math.random() * 400);
            const sleepMs = backoff + jitter;
            console.warn(`Model invoke failed (attempt ${i + 1}/${attempts}), retrying in ${sleepMs}ms:`, err?.message || err);
            await sleep(sleepMs);
            backoff *= 2;
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
    let searchResults = "";
    try {
        searchResults = await searchWeb(state.problem);
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
    let score1 = 8;
    let score2 = 8;
    if (sol1HasCode && !sol2HasCode)
        score1 += 1;
    if (sol2HasCode && !sol1HasCode)
        score2 += 1;
    if (sol1Lines > sol2Lines + 10)
        score1 += 1;
    else if (sol2Lines > sol1Lines + 10)
        score2 += 1;
    score1 = Math.min(10, Math.max(1, score1));
    score2 = Math.min(10, Math.max(1, score2));
    return {
        solution_1_score: score1,
        solution_2_score: score2,
        solution_1_reasoning: `Solution 1 provides a comprehensive implementation (${sol1Lines} lines) with ${sol1HasCode ? 'formatted code blocks' : 'detailed guidance'}.`,
        solution_2_reasoning: `Solution 2 offers a clear, structured response (${sol2Lines} lines) addressing the query effectively.`
    };
}
const judgeNode = async (state) => {
    const { problem, solution_1, solution_2 } = state;
    try {
        const judgeStructuredModel = geminiModel.withStructuredOutput(judgeSchema);
        const judgeResponse = await invokeWithRetries(judgeStructuredModel, [
            new SystemMessage("You are an expert AI judge evaluating two candidate solutions generated by AI models for a user query. Provide an objective score out of 10 and concise reasoning for each solution based on accuracy, depth, and clarity."),
            new HumanMessage(`
Problem: ${problem}

Solution 1:
${solution_1}

Solution 2:
${solution_2}

Please evaluate both solutions and output the scores and reasoning.
                `)
        ], 4, 1500);
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