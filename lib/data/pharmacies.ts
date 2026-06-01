export type Pharmacy = {
  slug: string;
  name: string;
  type: "503A" | "503B" | "503A + 503B";
  licensure: string; // jurisdictions / certifications
  cgmpNotes: string; // testing / quality summary
  partnerProviderSlugs: string[]; // glpreview providers known to use this pharmacy
  summary: string; // 1–2 sentence card summary
  body: { heading: string; text: string }[];
  notes?: string;
};

export const PHARMACIES: Pharmacy[] = [
  {
    slug: "empower-pharmacy",
    name: "Empower Pharmacy",
    type: "503A + 503B",
    licensure: "Texas State Board of Pharmacy; 503B registration with FDA",
    cgmpNotes:
      "Operates 503B outsourcing facility under cGMP-equivalent standards. Sterility (USP <71>), endotoxin (USP <85>), and potency (HPLC) testing on every batch; certificates of analysis available on request via partner providers.",
    partnerProviderSlugs: ["nexlife"],
    summary:
      "Houston-based dual-registered compounding pharmacy with a large 503B outsourcing footprint. A common backbone for the higher-disclosure compounded-GLP-1 telehealth programs.",
    body: [
      {
        heading: "Footprint",
        text: "Empower runs both a 503A patient-specific compounding pharmacy and a 503B FDA-registered outsourcing facility — meaning they can fill individualized prescriptions as well as prepare batched compounded medications under cGMP-equivalent standards. The 503B side is regularly inspected by FDA.",
      },
      {
        heading: "Quality systems",
        text: "Compounded sterile injectables undergo per-batch sterility (USP <71>), bacterial-endotoxin (USP <85>), and potency (HPLC) testing. Empower publishes its 503B Bulks List participation status and FDA inspection observations.",
      },
      {
        heading: "Why it matters for patients",
        text: "Providers that disclose Empower as a named partner are a positive signal for the Pharmacy Traceability pillar of our rubric, especially when paired with CoA-on-request and a documented 503A vs 503B routing policy by patient.",
      },
    ],
  },
  {
    slug: "strive-pharmacy",
    name: "Strive Pharmacy",
    type: "503A",
    licensure: "Arizona State Board of Pharmacy; multi-state non-resident pharmacy licenses",
    cgmpNotes:
      "503A patient-specific compounding; sterility and potency testing on a per-batch basis with third-party validation.",
    partnerProviderSlugs: ["nexlife"],
    summary:
      "Arizona-headquartered 503A compounding pharmacy with multi-state non-resident licenses. Frequent named partner for compounded semaglutide and tirzepatide programs.",
    body: [
      {
        heading: "Footprint",
        text: "Strive prepares patient-specific compounded medications under state pharmacy-board licensure rather than the FDA-registered 503B outsourcing-facility pathway. Non-resident pharmacy licenses allow shipping into most US states.",
      },
      {
        heading: "Quality systems",
        text: "Per-batch sterility and potency testing with third-party validation. Cold-chain shipping with temperature monitoring. CoAs available on request through prescribing providers.",
      },
    ],
  },
  {
    slug: "olympia-pharmacy",
    name: "Olympia Pharmacy",
    type: "503A",
    licensure: "Florida Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes:
      "Patient-specific compounded preparations; documented sterility and endotoxin testing.",
    partnerProviderSlugs: [],
    summary:
      "Orlando-area 503A compounding pharmacy specializing in injectables and peptides. Used by a number of telehealth weight-management programs.",
    body: [
      {
        heading: "Footprint",
        text: "Florida-licensed 503A pharmacy with extensive non-resident licensure footprint, allowing patient-specific compounded preparations to be shipped to most states subject to local pharmacy-board rules.",
      },
      {
        heading: "Notes for patients",
        text: "Because Olympia is 503A rather than 503B, every prescription is individualized to the patient on file. Confirm with your prescribing provider that the formulation matches what they've described.",
      },
    ],
  },
  {
    slug: "belmar-pharmacy",
    name: "Belmar Pharmacy",
    type: "503A",
    licensure: "Colorado State Board of Pharmacy; PCAB-accredited",
    cgmpNotes:
      "Pharmacy Compounding Accreditation Board (PCAB) accredited; per-batch sterility testing and documented stability data on file.",
    partnerProviderSlugs: [],
    summary:
      "Colorado 503A pharmacy with long-standing PCAB accreditation and a reputation for transparent quality documentation.",
    body: [
      {
        heading: "Quality signals",
        text: "PCAB accreditation is a meaningful third-party signal of compliance with USP <797> sterile compounding standards. Belmar is among the more established and public-facing of the named 503A partners.",
      },
    ],
  },
  {
    slug: "hallandale-pharmacy",
    name: "Hallandale Pharmacy",
    type: "503A",
    licensure: "Florida Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes:
      "Patient-specific compounded injectables; documented sterility procedures.",
    partnerProviderSlugs: [],
    summary:
      "South Florida 503A compounding pharmacy commonly cited as a partner by direct-to-consumer telehealth weight programs.",
    body: [
      {
        heading: "Profile",
        text: "Hallandale is a mid-size 503A pharmacy with a focus on injectable preparations. Disclosure depth varies by telehealth partner, so confirm CoA availability through your provider.",
      },
    ],
  },
  {
    slug: "red-rock-pharmacy",
    name: "Red Rock Pharmacy",
    type: "503A",
    licensure: "Utah State Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes: "503A patient-specific compounding; documented sterility procedures.",
    partnerProviderSlugs: [],
    summary:
      "Utah-based 503A compounding pharmacy serving multiple telehealth networks.",
    body: [
      {
        heading: "Profile",
        text: "Patient-specific compounded preparations under state licensure. Provider-side disclosure of Red Rock as a named partner satisfies part of the Pharmacy Traceability rubric.",
      },
    ],
  },
  {
    slug: "medivera-pharmacy",
    name: "Medivera Compounding Pharmacy",
    type: "503A",
    licensure: "Missouri Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes: "503A patient-specific compounding; sterility and stability documentation.",
    partnerProviderSlugs: [],
    summary:
      "Missouri-based 503A compounding pharmacy with national shipping reach.",
    body: [
      {
        heading: "Profile",
        text: "Patient-specific compounding under state licensure. Used by a number of direct-to-consumer programs in the lower-priced tier.",
      },
    ],
  },
  {
    slug: "absolute-pharmacy",
    name: "Absolute Pharmacy",
    type: "503A",
    licensure: "Ohio State Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes: "503A compounding; documented quality program.",
    partnerProviderSlugs: [],
    summary:
      "Ohio 503A compounding pharmacy with multi-state non-resident licensure.",
    body: [
      {
        heading: "Profile",
        text: "Patient-specific compounded medications under state licensure. Mid-market positioning among telehealth program partners.",
      },
    ],
  },
  {
    slug: "pinetree-pharmacy",
    name: "Pinetree Pharmacy",
    type: "503A",
    licensure: "Multi-state pharmacy licensure",
    cgmpNotes: "Patient-specific compounding under USP <797> sterile-compounding standards.",
    partnerProviderSlugs: [],
    summary:
      "Compounding pharmacy partner for select telehealth weight-management programs.",
    body: [
      {
        heading: "Profile",
        text: "Patient-specific 503A compounding under state pharmacy-board licensure. Disclosure depth varies by telehealth partner.",
      },
    ],
  },
  {
    slug: "tailor-made-compounding",
    name: "Tailor Made Compounding",
    type: "503A",
    licensure: "Kentucky Board of Pharmacy; multi-state non-resident licenses",
    cgmpNotes: "503A patient-specific compounding; documented sterility and stability program.",
    partnerProviderSlugs: [],
    summary:
      "Kentucky 503A compounding pharmacy with broad national shipping reach.",
    body: [
      {
        heading: "Profile",
        text: "Patient-specific compounded preparations under state licensure. Frequently used in lower-priced telehealth programs.",
      },
    ],
  },
];

export function getPharmacy(slug: string): Pharmacy | undefined {
  return PHARMACIES.find((p) => p.slug === slug);
}
