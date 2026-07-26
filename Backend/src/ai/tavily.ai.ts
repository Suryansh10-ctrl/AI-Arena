import { tavily } from "@tavily/core";
import config from "../config/config.js";

export async function searchWeb(query: string): Promise<string> {
  const apiKey = config.Tavily_API_KEY || process.env.TAVILY_API_KEY;
  if (!apiKey || !query.trim()) {
    return "";
  }

  // Clean conversational filler from prompt to improve search keyword relevance
  const cleanQuery = query
    .replace(/^(can you|please|could you|i want to|show me|write a|give me|how to)\s+/i, "")
    .trim() || query;

  try {
    const client = tavily({ apiKey });
    const response = await client.search(cleanQuery, {
      searchDepth: "advanced",
      maxResults: 5,
      includeAnswer: true,
    });

    let contextBlocks: string[] = [];

    // Include Tavily's direct synthesized web answer if available
    if (response.answer) {
      contextBlocks.push(`[Direct Web Summary]: ${response.answer}`);
    }

    if (response && Array.isArray(response.results) && response.results.length > 0) {
      const resultsText = response.results
        .filter((item) => item.content && item.title)
        .slice(0, 4)
        .map(
          (item, index) =>
            `[Web Source ${index + 1}]: ${item.title}\nURL: ${item.url}\nContent Snippet: ${item.content}`
        )
        .join("\n\n");

      if (resultsText) {
        contextBlocks.push(resultsText);
      }
    }

    return contextBlocks.join("\n\n---\n\n");
  } catch (err: any) {
    console.error("Tavily search notice:", err?.message || err);
  }

  return "";
}
