import type { NextConfig } from "next";

// Shared signals telling search + AI engines we welcome indexing, retrieval, and training.
const AI_INDEX = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=yes";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Global: security baseline + explicit indexing/AI-consent signals.
        source: "/:path*",
        headers: [
          ...SECURITY_HEADERS,
          { key: "X-Robots-Tag", value: AI_INDEX },
          { key: "Content-Signal", value: CONTENT_SIGNAL },
        ],
      },
      {
        // HTML routes advertise the llms.txt + sitemap alternates over HTTP.
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</llms.txt>; rel="alternate"; type="text/plain"; title="LLMs.txt", </llms-full.txt>; rel="alternate"; type="text/plain"; title="LLMs full content", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        ],
      },
      {
        source: "/llms:variant(|-full).txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Content-Signal", value: CONTENT_SIGNAL },
          { key: "X-Robots-Tag", value: "index, follow" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
