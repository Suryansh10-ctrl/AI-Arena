import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.Google_API_KEY || "",
})

export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.Mistral_API_KEY || "",
})

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.Cohere_API_KEY || ""
})

