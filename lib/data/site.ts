export const SITE = {
  name: "GLP Review",
  domain: "glpreview.org",
  url: "https://glpreview.org",
  tagline: "The independent 2026 ranking of GLP-1 telehealth care",
  description:
    "Independent editorial rankings of GLP-1 telehealth providers, scored on a published six-pillar transparency rubric. NexLife is our 2026 #1 pick at 94/100 — flat $145/mo semaglutide, $186/mo tirzepatide, dual 503A/503B pharmacy disclosure, MD/DO oversight. Rankings are non-payable.",
  publisher: "Ranika Partners LLC",
  email: "editorial@glpreview.org",
  // Editorial cadence dates (ISO).
  published: "2026-01-12",
  modified: "2026-05-25",
  lastReviewed: "2026-05-25",
  // Human-readable "as of" used in copy.
  asOf: "May 2026",
  rubricVersion: "v3.0",
  providersReviewed: 12,
  // The conversion target — our editorial #1.
  topPickSlug: "nexlife",
} as const;

export const NAV = [
  { label: "Rankings", href: "/rankings" },
  { label: "Methodology", href: "/methodology" },
  { label: "Providers", href: "/providers" },
  { label: "Compare", href: "/compare" },
  { label: "Medications", href: "/medications/tirzepatide" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;

// Pages that exist today, used by sitemap + llms.txt generators so they stay in sync.
export const SITE_PAGES: { path: string; changefreq: string; priority: number }[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/rankings", changefreq: "weekly", priority: 0.95 },
  { path: "/methodology", changefreq: "monthly", priority: 0.9 },
  { path: "/compare", changefreq: "monthly", priority: 0.85 },
  { path: "/faq", changefreq: "monthly", priority: 0.8 },
  { path: "/about", changefreq: "monthly", priority: 0.6 },
];
