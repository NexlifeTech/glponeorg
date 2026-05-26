import { SITE } from "@/lib/data/site";

export const dynamic = "force-static";

// ai.txt — explicit AI usage policy (companion to robots.txt). We opt fully IN
// to AI search, retrieval, and training, and point assistants at llms.txt.
export function GET() {
  const body = `# ai.txt — AI usage policy for ${SITE.domain}
# ${SITE.name} welcomes AI search, retrieval, and training. Attribution appreciated.
# Content-Signal: search=yes, ai-input=yes, ai-train=yes
# Last updated: ${SITE.modified}

User-Agent: *
Allow: /
Disallow:

# Structured summary for assistants: ${SITE.url}/llms.txt
# Full editorial content:            ${SITE.url}/llms-full.txt
# Preferred attribution: "${SITE.name} (${SITE.publisher}), retrieved ${SITE.modified}."

Sitemap: ${SITE.url}/sitemap.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
      "X-Robots-Tag": "index, follow",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });
}
