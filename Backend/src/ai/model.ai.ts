import { ChatGoogle } from "@langchain/google/node";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    model: "gemini-flash-lite-latest",
    apiKey: config.Google_API_KEY || "",
})

export const mistralModel = new ChatMistralAI({
    model: "open-mistral-7b",
    apiKey: config.Mistral_API_KEY || "",
})

export const cohereModel = new ChatCohere({
    model: "command-r7b-12-2024",
    apiKey: config.Cohere_API_KEY || ""
})


