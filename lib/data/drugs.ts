export type Drug = {
  slug: string;
  name: string;
  code: string;
  drugClass: string;
  manufacturer: string;
  brands: string[];
  indications: string;
  route: string;
  doseLadder: string[];
  doseUnit: string;
  storage: string;
  contraindications: string[];
  mechanism: string;
  costRange: string;
  summary: string;
};

export const DRUGS: Record<string, Drug> = {
  tirzepatide: {
    slug: "tirzepatide",
    name: "Tirzepatide",
    code: "LY3437943",
    drugClass: "Dual GLP-1 / GIP receptor agonist",
    manufacturer: "Eli Lilly and Company",
    brands: ["Mounjaro", "Zepbound"],
    indications:
      "Mounjaro (type 2 diabetes) and Zepbound (chronic weight management; obstructive sleep apnea in adults with obesity, added 2024).",
    route: "Subcutaneous injection, once weekly",
    doseLadder: ["2.5 mg", "5 mg", "7.5 mg", "10 mg", "12.5 mg", "15 mg"],
    doseUnit: "milligram",
    storage: "Refrigerated 36–46°F (2–8°C)",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Pregnancy and breastfeeding",
    ],
    mechanism:
      "Dual agonism of the glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors, improving glycemic control and reducing appetite.",
    costRange:
      "Compounded tirzepatide runs roughly $189–$499/month across reviewed providers. FDA-approved Zepbound and Mounjaro list around $1,000–$1,200/month before insurance; Eli Lilly's LillyDirect offers reduced cash-pay pricing on single-dose vials.",
    summary:
      "Tirzepatide is a once-weekly dual GLP-1/GIP receptor agonist from Eli Lilly, sold as Mounjaro (diabetes) and Zepbound (weight management). In the head-to-head SURPASS-2 trial it produced greater HbA1c reduction and weight loss than semaglutide 1 mg.",
  },
  semaglutide: {
    slug: "semaglutide",
    name: "Semaglutide",
    code: "—",
    drugClass: "GLP-1 receptor agonist (single agonist)",
    manufacturer: "Novo Nordisk",
    brands: ["Ozempic", "Wegovy", "Rybelsus"],
    indications:
      "Ozempic (type 2 diabetes), Wegovy (chronic weight management), Rybelsus (oral formulation for type 2 diabetes).",
    route: "Subcutaneous injection, once weekly (Rybelsus is oral, daily)",
    doseLadder: ["0.25 mg", "0.5 mg", "1.0 mg", "1.7 mg", "2.4 mg"],
    doseUnit: "milligram",
    storage: "Refrigerated 36–46°F (2–8°C)",
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Pregnancy and breastfeeding",
    ],
    mechanism:
      "Single agonism of the GLP-1 receptor, enhancing glucose-dependent insulin secretion, slowing gastric emptying, and reducing appetite.",
    costRange:
      "Compounded semaglutide runs roughly $149–$299/month across reviewed providers (NexLife is lowest at $149/month on the annual plan). Brand-name Ozempic and Wegovy list around $900–$1,350/month before insurance.",
    summary:
      "Semaglutide is a once-weekly GLP-1 receptor agonist from Novo Nordisk, sold as Ozempic (diabetes), Wegovy (weight management), and Rybelsus (oral). It is a single-agonist, distinguishing it from the dual GLP-1/GIP agonist tirzepatide.",
  },
};

// Shared regulatory context (the 503A/503B + FDA-shortage story), cited site-wide.
export const REGULATORY = {
  pharmacyTypes:
    "503A compounding pharmacies prepare patient-specific compounded medications under state pharmacy-board licensure. 503B outsourcing facilities are FDA-registered and inspected and can prepare batches without patient-specific prescriptions under cGMP-equivalent standards. Both are legal channels for compounded GLP-1s; disclosure of the dispensing pharmacy's type and license is a key transparency signal.",
  shortageStatus:
    "As of May 2026 the FDA has removed both semaglutide and tirzepatide from its Drug Shortages list. Compounding of FDA-approved drug products that are not in shortage is generally restricted, with limited exceptions (e.g., documented medical necessity where the approved product cannot be used). The environment is evolving — verify current status with a prescribing clinician.",
  timeline: [
    {
      date: "2026-03-03",
      event: "FDA warned roughly 30 telehealth companies over misleading compounded GLP-1 promotion.",
    },
    {
      date: "2026-03-09",
      event: "Hims & Hers partnered with Novo Nordisk and wound down compounded GLP-1 marketing.",
    },
    {
      date: "2026-04-30",
      event:
        "FDA proposed excluding semaglutide, tirzepatide, and liraglutide from the 503B Bulks List; comment period closes 2026-06-29. The 503A patient-specific pathway is unaffected.",
    },
  ],
} as const;
