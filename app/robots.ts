import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";

// AI / answer engines we explicitly welcome (search + retrieval + training).
const AI_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "FacebookBot",
  "Bingbot",
  "MistralAI-User",
  "Cohere-AI",
  "DuckAssistBot",
  "YouBot",
  "Diffbot",
  "PetalBot",
  "YandexBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/cgi-bin/" },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
