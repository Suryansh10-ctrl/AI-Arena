import { ChatGoogle } from "@langchain/google/node";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere";
import config from "../config/config.js";
export const geminiModel = new ChatGoogle({
    model: "gemini-3.7-flash",
    apiKey: config.Google_API_KEY || "",
});
export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.Mistral_API_KEY || "",
});
export const cohereModel = new ChatCohere({
    model: "command-r-08-2024",
    apiKey: config.Cohere_API_KEY || ""
});
//# sourceMappingURL=model.ai.js.map