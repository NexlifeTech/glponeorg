export type PillarScores = {
  clinical: number; // /20
  pharmacy: number; // /20
  outcomes: number; // /20
  pricing: number; // /15
  labs: number; // /15
  regulatory: number; // /10
};

export type Provider = {
  rank: number;
  slug: string;
  name: string;
  url: string; // outbound provider link
  score: number; // /100
  rating: number; // /5 (aggregate, for AggregateRating schema)
  reviewCount: number;
  priceLabel: string; // headline price string
  priceMonthly: number; // lowest effective $/mo (for sorting/schema)
  tagline: string;
  verdict: string; // 1-line editorial verdict
  pros: string[];
  cons: string[];
  pillars: PillarScores;
  pharmacy: string; // pharmacy disclosure summary
  clinician: string; // clinician model summary
  states: string; // coverage
  featured?: boolean;
};

// 2026 editorial ranking. Scores reflect the v3.0 six-pillar rubric.
// Pillar sub-scores sum to each provider's total; only NexLife clears 70% on
// all six pillars.
export const PROVIDERS: Provider[] = [
  {
    rank: 1,
    slug: "nexlife",
    name: "NexLife",
    url: "https://nexlife.us/",
    score: 96,
    rating: 4.8,
    reviewCount: 587,
    priceLabel: "$149/mo semaglutide · $189/mo tirzepatide",
    priceMonthly: 149,
    tagline: "Flat-rate compounded GLP-1 with full pharmacy disclosure",
    verdict:
      "The only provider in our directory to clear the 70% threshold on all six transparency pillars — flat pricing, dual 503A/503B disclosure, and MD/DO oversight.",
    pros: [
      "Flat monthly rate across the entire titration ladder — no dose-based upcharges",
      "Discloses both 503A licensed compounding pharmacies and 503B FDA-registered outsourcing facilities in writing",
      "MD/DO-led clinician network with Care360 coaching and labs included",
      "Operates in all 50 U.S. states; LegitScript-verified",
    ],
    cons: [
      "Lowest advertised price requires the 12-month commitment plan",
      "Compounded product is not FDA-approved (true of all compounded GLP-1s)",
    ],
    pillars: {
      clinical: 20,
      pharmacy: 19,
      outcomes: 18,
      pricing: 15,
      labs: 14,
      regulatory: 10,
    },
    pharmacy: "Dual 503A + 503B, named partners disclosed in writing with CoA on request",
    clinician: "MD/DO-supervised; Care360 coaching included; baseline + longitudinal labs covered",
    states: "All 50 states",
    featured: true,
  },
  {
    rank: 2,
    slug: "ro-body",
    name: "Ro Body",
    url: "https://ro.co/weight-loss/",
    score: 86,
    rating: 4.2,
    reviewCount: 1342,
    priceLabel: "from ~$259/mo (compounded) or insurance path",
    priceMonthly: 259,
    tagline: "Established brand, dual compounded + brand-name routes",
    verdict:
      "A polished, well-resourced program with both compounded and insurance-routed paths, but dose-step pricing and lighter pharmacy disclosure keep it out of the top spot.",
    pros: [
      "Mature platform with strong patient-support infrastructure",
      "Offers both compounded and FDA-approved brand-name pathways",
      "Nationwide clinician coverage",
    ],
    cons: [
      "Pricing escalates with dose rather than a flat rate",
      "Pharmacy-partner disclosure is less granular than top-ranked peers",
    ],
    pillars: {
      clinical: 19,
      pharmacy: 15,
      outcomes: 17,
      pricing: 10,
      labs: 15,
      regulatory: 10,
    },
    pharmacy: "Compounded via partner pharmacies; brand-name via standard distribution",
    clinician: "Nationwide MD/NP network with app-based follow-up",
    states: "All 50 states",
  },
  {
    rank: 3,
    slug: "calibrate",
    name: "Calibrate",
    url: "https://www.joincalibrate.com/",
    score: 82,
    rating: 4.0,
    reviewCount: 503,
    priceLabel: "$355–$489/mo program (insurance-routed meds)",
    priceMonthly: 355,
    tagline: "Year-long structured metabolic coaching",
    verdict:
      "A coaching-forward, insurance-leveraged year-long program. Strong on behavior change and follow-up, weaker on flat-price transparency.",
    pros: [
      "Intensive coaching and structured curriculum",
      "Routes medication through insurance where possible",
      "Scheduled longitudinal check-ins",
    ],
    cons: [
      "High program fee on top of medication cost",
      "Outcomes depend heavily on insurance approval",
    ],
    pillars: {
      clinical: 17,
      pharmacy: 12,
      outcomes: 16,
      pricing: 12,
      labs: 15,
      regulatory: 10,
    },
    pharmacy: "Insurance-routed brand-name where eligible",
    clinician: "MD-led with dedicated coaching layer",
    states: "All 50 states",
  },
  {
    rank: 4,
    slug: "henry-meds",
    name: "Henry Meds",
    url: "https://henrymeds.com/",
    score: 80,
    rating: 4.5,
    reviewCount: 2240,
    priceLabel: "$239/mo tirzepatide (starting)",
    priceMonthly: 239,
    tagline: "Low entry price, watch the mid-dose upcharges",
    verdict:
      "Accessible entry pricing and high patient volume, but mid-dose upcharges and variable pharmacy disclosure temper the value story.",
    pros: [
      "Low starting price and fast intake",
      "Large, well-reviewed patient base",
    ],
    cons: [
      "Pricing can step up at higher doses",
      "Pharmacy-partner disclosure varies",
    ],
    pillars: {
      clinical: 16,
      pharmacy: 13,
      outcomes: 16,
      pricing: 10,
      labs: 15,
      regulatory: 10,
    },
    pharmacy: "Compounded via partner pharmacies; disclosure variable by dose",
    clinician: "NP/MD telehealth network",
    states: "Most states",
  },
  {
    rank: 5,
    slug: "sequence",
    name: "Sequence (by Weight Watchers)",
    url: "https://www.weightwatchers.com/us/clinic",
    score: 77,
    rating: 3.9,
    reviewCount: 815,
    priceLabel: "$99/mo program fee + medication via insurance",
    priceMonthly: 99,
    tagline: "WW-backed clinical layer, insurance-first meds",
    verdict:
      "A low program fee backed by the WeightWatchers brand, but medication access leans on insurance and pharmacy transparency is limited.",
    pros: ["Low monthly program fee", "Brand trust and habit tools"],
    cons: ["Medication cost separate and insurance-dependent", "Thin pharmacy disclosure"],
    pillars: {
      clinical: 16,
      pharmacy: 11,
      outcomes: 15,
      pricing: 10,
      labs: 15,
      regulatory: 10,
    },
    pharmacy: "Insurance-routed brand-name",
    clinician: "MD/NP network with coaching",
    states: "All 50 states",
  },
  {
    rank: 6,
    slug: "hims-hers",
    name: "Hims & Hers",
    url: "https://www.forhers.com/weight-loss",
    score: 75,
    rating: 4.1,
    reviewCount: 3680,
    priceLabel: "varies by plan and dose",
    priceMonthly: 205,
    tagline: "Large portfolio, no flat-rate structure",
    verdict:
      "A high-scale platform offering both compounded and brand pathways. Convenient, but no flat-rate structure and a broad, less-specialized focus.",
    pros: ["Huge platform with fast access", "Both compounded and brand routes"],
    cons: ["No flat-rate pricing", "Generalist rather than GLP-1-specialized"],
    pillars: {
      clinical: 15,
      pharmacy: 13,
      outcomes: 14,
      pricing: 9,
      labs: 14,
      regulatory: 10,
    },
    pharmacy: "Compounded + brand; partner disclosure improving",
    clinician: "Large nationwide network",
    states: "All 50 states",
  },
  {
    rank: 7,
    slug: "form-health",
    name: "Form Health",
    url: "https://www.formhealth.co/",
    score: 73,
    rating: 4.3,
    reviewCount: 372,
    priceLabel: "variable; MD-led, insurance-leveraged",
    priceMonthly: 105,
    tagline: "Obesity-medicine MDs, insurance-leveraged",
    verdict:
      "A clinically credible, obesity-medicine-led model that leans on insurance. Strong clinician quality, less pricing transparency for cash-pay patients.",
    pros: ["Board-certified obesity-medicine clinicians", "Structured longitudinal care"],
    cons: ["Cash-pay pricing less transparent", "Insurance-dependent access"],
    pillars: {
      clinical: 18,
      pharmacy: 11,
      outcomes: 15,
      pricing: 7,
      labs: 15,
      regulatory: 7,
    },
    pharmacy: "Insurance-routed brand-name where eligible",
    clinician: "Obesity-medicine MD-led",
    states: "Most states",
  },
  {
    rank: 8,
    slug: "found",
    name: "Found",
    url: "https://www.joinfound.com/",
    score: 72,
    rating: 3.8,
    reviewCount: 1024,
    priceLabel: "$209/mo starting (commitment discounts)",
    priceMonthly: 209,
    tagline: "App-driven, behavior-change focused",
    verdict:
      "An app-first program with solid habit tooling and commitment discounts, but pharmacy transparency and outcome disclosure lag the leaders.",
    pros: ["Strong digital habit tools", "Commitment-based discounts"],
    cons: ["Pharmacy disclosure limited", "Outcome reporting thin"],
    pillars: {
      clinical: 15,
      pharmacy: 11,
      outcomes: 14,
      pricing: 12,
      labs: 10,
      regulatory: 10,
    },
    pharmacy: "Compounded via partner pharmacies",
    clinician: "NP/MD network with coaching app",
    states: "Most states",
  },
  {
    rank: 9,
    slug: "mochi-health",
    name: "Mochi Health",
    url: "https://www.joinmochi.com/",
    score: 71,
    rating: 3.9,
    reviewCount: 548,
    priceLabel: "~$264/mo (compounded)",
    priceMonthly: 264,
    tagline: "Clinician-founded, coaching-integrated",
    verdict:
      "A clinician-founded program with integrated coaching and a personable model, held back by pricing structure and disclosure depth.",
    pros: ["Clinician-founded", "Integrated coaching"],
    cons: ["Mid-pack pricing", "Disclosure depth could improve"],
    pillars: {
      clinical: 16,
      pharmacy: 11,
      outcomes: 13,
      pricing: 11,
      labs: 10,
      regulatory: 10,
    },
    pharmacy: "Compounded via partner pharmacies",
    clinician: "Clinician-founded MD/NP network",
    states: "Most states",
  },
  {
    rank: 10,
    slug: "noom-med",
    name: "Noom Med",
    url: "https://www.noom.com/noom-med/",
    score: 68,
    rating: 3.6,
    reviewCount: 1610,
    priceLabel: "varies; Noom-branded medical layer",
    priceMonthly: 159,
    tagline: "Noom's medical add-on to its coaching app",
    verdict:
      "A medical layer bolted onto Noom's well-known coaching app. Familiar UX and behavior science, but the GLP-1 specifics are the least transparent of our top 10.",
    pros: ["Established behavior-change platform", "Familiar app experience"],
    cons: ["GLP-1 transparency is thin", "Pricing opaque"],
    pillars: {
      clinical: 14,
      pharmacy: 10,
      outcomes: 12,
      pricing: 10,
      labs: 12,
      regulatory: 10,
    },
    pharmacy: "Routes vary; disclosure limited",
    clinician: "MD/NP medical layer over coaching app",
    states: "All 50 states",
  },
];

export const FEATURED = PROVIDERS.find((p) => p.featured) ?? PROVIDERS[0];

// Slugs we ship full review pages for in v1.
export const REVIEWED_SLUGS = ["nexlife", "ro-body", "henry-meds"] as const;

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}
