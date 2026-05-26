export type Pillar = {
  id: string;
  name: string;
  weight: number; // points out of 100
  measures: string;
};

// The v3.0 six-pillar transparency rubric. 100 points total; 70% per pillar
// is the threshold for a "transparency-compliant" designation.
export const PILLARS: Pillar[] = [
  {
    id: "clinical",
    name: "Clinical Protocol & Named Medical Director",
    weight: 20,
    measures:
      "A verifiable MD/DO with state licensure, individualized prescribing over standing orders, and a documented clinical-oversight structure.",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Traceability & Certificate of Analysis",
    weight: 20,
    measures:
      "Named 503A/503B pharmacy partners disclosed in writing, with USP <71> sterility, USP <85> endotoxin, and HPLC potency CoA available on request.",
  },
  {
    id: "outcomes",
    name: "Real-World Cohort Outcomes & Adverse-Event Disclosure",
    weight: 20,
    measures:
      "Published cohort outcomes, transparent adverse-event reporting, and documented discontinuation rates rather than marketing testimonials.",
  },
  {
    id: "pricing",
    name: "All-Inclusive Flat Pricing",
    weight: 15,
    measures:
      "A flat monthly rate across the full titration ladder (2.5 → 15 mg for tirzepatide) with no dose-based upcharges and no hidden fees.",
  },
  {
    id: "labs",
    name: "Lab Integration & Longitudinal Follow-Up",
    weight: 15,
    measures:
      "Quest/Labcorp integration and scheduled clinician check-ins at 4, 12, 26, and 52 weeks — not a one-time intake form.",
  },
  {
    id: "regulatory",
    name: "Regulatory Clarity",
    weight: 10,
    measures:
      "Semaglutide/tirzepatide base only (no FDA-flagged salt forms), an explicitly stated 503A vs 503B pathway, and active FDA-shortage-status tracking.",
  },
];

export const PASS_THRESHOLD = 0.7;
export const RUBRIC_VERSION = "v3.0";
