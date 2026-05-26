import { llmsFullTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });
}
