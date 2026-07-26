import dotenv from "dotenv"
dotenv.config()


const config = {
    Google_API_KEY: process.env.GOOGLE_API_KEY,
    Mistral_API_KEY: process.env.MISTRAL_API_KEY,
    Cohere_API_KEY: process.env.COHERE_API_KEY,
    Tavily_API_KEY: process.env.TAVILY_API_KEY,
}

export default config;