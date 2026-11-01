import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Robôs de buscadores e de IA liberados de forma explícita, para que o site possa
// ser lido e citado em respostas do ChatGPT, Gemini, Claude, Perplexity e Copilot.
const AI_AND_SEARCH_BOTS = [
  // OpenAI (ChatGPT)
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Google (Busca e Gemini)
  "Googlebot",
  "Google-Extended",
  // Anthropic (Claude)
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Microsoft (Bing e Copilot)
  "Bingbot",
  // Apple (Siri e Apple Intelligence)
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}

export const dynamic = "force-static";
