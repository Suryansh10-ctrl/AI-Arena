import express from "express"
import runGraph from "./ai/graph.ai.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import passport from "./config/passport.js"

import jwt from "jsonwebtoken";
import chatModel from "./model/chat.model.js";

import authRouter from "./routes/auth.routes.js"
import chatRouter from "./routes/chat.routes.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174"
];

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (like mobile apps or curl)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // Allow during local development
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))


app.get("/", async(req,res) => {
    const result = await runGraph("what an code for factorial function? ")

    res.json(result)
})

app.post("/invoke", async(req,res) => {
    const { input, chatId } = req.body

    try {
        const result = await runGraph(input)

        // Optional database persistence if user is logged in
        try {
            const token = req.cookies.token;
            if (token && process.env.JWT_SECRET) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
                if (decoded && decoded.id) {
                    const messageItem = {
                        problem: input,
                        solution_1: typeof result.solution_1 === "object" ? JSON.stringify(result.solution_1) : String(result.solution_1 || ""),
                        solution_2: typeof result.solution_2 === "object" ? JSON.stringify(result.solution_2) : String(result.solution_2 || ""),
                        judgeResult: result.judgeResult || null,
                    };

                    let savedChat;
                    if (chatId) {
                        savedChat = await chatModel.findOne({ _id: chatId, user: decoded.id } as any);
                    }
                    if (savedChat) {
                        savedChat.messages.push(messageItem);
                        await savedChat.save();
                    } else {
                        savedChat = await chatModel.create({
                            user: decoded.id,
                            title: input,
                            messages: [messageItem],
                        });
                    }
                    return res.status(200).json({
                        message: "Graph executed successfully",
                        success: true,
                        result,
                        savedChatId: savedChat._id,
                    });
                }
            }
        } catch (e) {
            console.error("Non-fatal error persisting chat:", e);
        }

        return res.status(200).json({
            message: "Graph executed successfully",
            success: true,
            result
        })
    } catch (err: any) {
        console.error("Graph execution error:", err);
        return res.status(200).json({
            message: "AI model rate limit or API error occurred.",
            success: false,
            result: {
                problem: input || "",
                solution_1: `⚠️ **Rate Limit Notice**: API rate limit or service quota was reached (${err?.message || 'HTTP 429'}). Please wait 30-60 seconds before trying again.`,
                solution_2: `⚠️ **Rate Limit Notice**: API rate limit or service quota was reached (${err?.message || 'HTTP 429'}). Please wait 30-60 seconds before trying again.`,
                judgeResult: {
                    solution_1_score: 5,
                    solution_2_score: 5,
                    solution_1_reasoning: "Evaluation fallback: AI provider API limit exceeded.",
                    solution_2_reasoning: "Evaluation fallback: AI provider API limit exceeded."
                }
            }
        });
    }
})

import googleAuthRouter from "../../Google_Auth/index.js"

app.use('/api/auth', authRouter)
app.use('/api/chats', chatRouter)
app.use('/auth', googleAuthRouter)
app.use(googleAuthRouter)

export default app;