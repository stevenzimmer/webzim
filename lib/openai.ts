import "server-only";
import OpenAI from "openai";

function getOpenAIKey() {
  return process.env.OPENAI_API_KEY || process.env.OPEN_AI_KEY;
}

export function getOpenAIClient() {
  const apiKey = getOpenAIKey();

  if (!apiKey) {
    throw new Error(
      "Missing OpenAI API key. Set OPENAI_API_KEY or OPEN_AI_KEY.",
    );
  }

  return new OpenAI({ apiKey });
}
