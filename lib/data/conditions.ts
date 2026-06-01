export type Condition = {
  slug: string;
  name: string;
  shortName?: string;
  evidenceLevel: "high" | "moderate" | "emerging";
  drugs: string[]; // approved/used drugs
  summary: string; // 1–2 sentences for cards / metadata
  body: { heading: string; text: string }[]; // structured sections
  contraindications?: string[];
  citation?: string;
};

export const CONDITIONS: Condition[] = [
  {
    slug: "type-2-diabetes",
    name: "Type 2 diabetes",
    shortName: "T2D",
    evidenceLevel: "high",
    drugs: ["Semaglutide (Ozempic, Rybelsus)", "Tirzepatide (Mounjaro)", "Liraglutide (Victoza)"],
    summary:
      "GLP-1 receptor agonists (and the dual GLP-1/GIP tirzepatide) are first-line add-ons to metformin for adults with type 2 diabetes, with consistent HbA1c reduction and weight loss benefit.",
    body: [
      {
        heading: "Evidence",
        text: "Across SURPASS-1 through SURPASS-5 (tirzepatide) and SUSTAIN-1 through SUSTAIN-10 (semaglutide), GLP-1/GIP therapies have produced HbA1c reductions of roughly 1.6–2.4 percentage points relative to placebo and 0.4–0.8 points relative to active comparators (insulin glargine, dulaglutide, semaglutide). Tirzepatide 15 mg outperformed semaglutide 1 mg in the head-to-head SURPASS-2 trial.",
      },
      {
        heading: "Where it sits in guidelines",
        text: "The 2024 ADA Standards of Care recommend a GLP-1 receptor agonist (or tirzepatide) as a preferred second agent after metformin for adults with T2D and established cardiovascular disease, indicators of high CV risk, heart failure, or chronic kidney disease — independent of HbA1c level. Tirzepatide is increasingly used early when weight loss is a goal alongside glucose control.",
      },
      {
        heading: "What it doesn't do",
        text: "GLP-1 therapies do not replace insulin in type 1 diabetes and are not appropriate as monotherapy in advanced beta-cell failure. They do not address the underlying autoimmune destruction in T1D.",
      },
    ],
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Pregnancy and breastfeeding",
    ],
    citation: "ADA Standards of Care 2024; SURPASS-2 (NEJM 2021); SUSTAIN trial series.",
  },
  {
    slug: "obesity",
    name: "Obesity & chronic weight management",
    shortName: "Obesity",
    evidenceLevel: "high",
    drugs: ["Semaglutide 2.4 mg (Wegovy)", "Tirzepatide (Zepbound)", "Liraglutide 3.0 mg (Saxenda)"],
    summary:
      "GLP-1 and dual GLP-1/GIP therapies are the most effective approved pharmacotherapies for chronic weight management, with mean total body weight loss of 15–22.5% over 68–88 weeks.",
    body: [
      {
        heading: "Effect sizes",
        text: "In STEP-1, semaglutide 2.4 mg produced mean weight loss of 14.9% over 68 weeks vs 2.4% with placebo. In SURMOUNT-1, tirzepatide 15 mg produced 22.5% mean weight loss over 72 weeks vs 2.4% with placebo — the largest effect ever observed in a non-surgical obesity trial. Roughly 40% of tirzepatide-treated participants lost at least 25% of baseline body weight.",
      },
      {
        heading: "Maintenance",
        text: "STEP-4 (semaglutide) and SURMOUNT-4 (tirzepatide) demonstrated that withdrawal of therapy is followed by partial weight regain over 1–2 years. The clinical implication is that, like other chronic-disease medications, GLP-1 therapy for obesity is typically long-term — not a short course.",
      },
      {
        heading: "Who qualifies under labeling",
        text: "FDA labeling for Wegovy and Zepbound covers adults with BMI ≥ 30, or BMI ≥ 27 with at least one weight-related comorbidity (hypertension, dyslipidemia, T2D, OSA). Pediatric labeling exists for adolescents 12+ for both drugs.",
      },
    ],
    contraindications: [
      "Personal or family history of medullary thyroid carcinoma (MTC)",
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "Pregnancy and breastfeeding",
      "Severe gastrointestinal disease (relative)",
    ],
    citation: "STEP-1 (NEJM 2021); SURMOUNT-1 (NEJM 2022); STEP-4; SURMOUNT-4.",
  },
  {
    slug: "obstructive-sleep-apnea",
    name: "Obstructive sleep apnea (in adults with obesity)",
    shortName: "OSA",
    evidenceLevel: "high",
    drugs: ["Tirzepatide (Zepbound, FDA-approved for OSA Dec 2024)"],
    summary:
      "Tirzepatide became the first medication FDA-approved for moderate-to-severe OSA in adults with obesity (December 2024), based on the SURMOUNT-OSA trials.",
    body: [
      {
        heading: "What SURMOUNT-OSA showed",
        text: "In two pivotal trials (one with concurrent CPAP, one without), tirzepatide reduced the apnea–hypopnea index (AHI) by 27–30 events per hour relative to placebo over 52 weeks in adults with moderate-to-severe OSA and obesity. Roughly 40–50% of treated patients achieved an AHI of fewer than 5 events per hour — essentially a remission threshold.",
      },
      {
        heading: "Mechanism",
        text: "The benefit is thought to be primarily mediated through weight loss reducing upper-airway fat deposition and improving compliance of the pharyngeal airway — though a direct effect on respiratory drive cannot be excluded.",
      },
      {
        heading: "Clinical role",
        text: "Tirzepatide does not replace CPAP for all patients but offers a pharmacologic option for those intolerant of positive-airway-pressure therapy or seeking an adjunct. Coverage and prior-authorization pathways for this indication remain in flux.",
      },
    ],
    citation: "SURMOUNT-OSA (NEJM 2024); FDA approval December 20, 2024.",
  },
  {
    slug: "mash-nash",
    name: "MASH (formerly NASH)",
    shortName: "MASH",
    evidenceLevel: "moderate",
    drugs: ["Semaglutide (under investigation)", "Tirzepatide (under investigation)"],
    summary:
      "Metabolic dysfunction-associated steatohepatitis (MASH, formerly NASH) is a leading non-malignant cause of liver transplant; GLP-1 therapies show promise on liver histology and fibrosis markers, though no GLP-1 is FDA-approved for MASH as of 2026.",
    body: [
      {
        heading: "Evidence to date",
        text: "Phase-2 trials of semaglutide in biopsy-confirmed MASH (Newsome et al., NEJM 2021) showed MASH resolution without worsening fibrosis in 59% of treated patients vs 17% on placebo at 72 weeks. Phase-3 data are emerging. Tirzepatide is in active phase-2/3 evaluation for MASH with reported improvements in liver fat fraction.",
      },
      {
        heading: "Status of approvals",
        text: "Resmetirom (Rezdiffra) was the first FDA-approved MASH-specific drug (March 2024). No GLP-1 receptor agonist is approved for MASH yet, but use is increasingly off-label in patients with concurrent obesity or T2D.",
      },
    ],
    citation: "Newsome PN et al., NEJM 2021;384:1113–24.",
  },
  {
    slug: "cardiovascular-risk-reduction",
    name: "Cardiovascular risk reduction (with obesity)",
    shortName: "CV risk",
    evidenceLevel: "high",
    drugs: ["Semaglutide 2.4 mg (Wegovy — FDA-approved for CV risk reduction)"],
    summary:
      "The SELECT trial established that semaglutide 2.4 mg reduces major adverse cardiovascular events by 20% in adults with overweight/obesity and established cardiovascular disease, independent of glycemic status.",
    body: [
      {
        heading: "What SELECT showed",
        text: "SELECT (Lincoff et al., NEJM 2023) randomized 17,604 adults with BMI ≥ 27 and pre-existing CVD (without diabetes) to semaglutide 2.4 mg or placebo over a median of 33 months. The primary composite (CV death, non-fatal MI, non-fatal stroke) occurred in 6.5% on semaglutide vs 8.0% on placebo (HR 0.80; p < 0.001).",
      },
      {
        heading: "What it changed",
        text: "In March 2024, the FDA expanded Wegovy's label to include cardiovascular risk reduction in adults with established CVD and overweight or obesity — the first weight-loss medication to carry a CV-risk-reduction indication.",
      },
    ],
    citation: "SELECT (Lincoff AM et al., NEJM 2023;389:2221–32); FDA label update March 2024.",
  },
  {
    slug: "polycystic-ovary-syndrome",
    name: "Polycystic ovary syndrome",
    shortName: "PCOS",
    evidenceLevel: "emerging",
    drugs: ["Semaglutide (off-label)", "Liraglutide (off-label)"],
    summary:
      "GLP-1 therapies are used off-label in PCOS for weight management and insulin-resistance modulation; small trials show metabolic and reproductive benefits but no GLP-1 is FDA-approved for PCOS.",
    body: [
      {
        heading: "Evidence",
        text: "Small randomized trials of liraglutide and semaglutide in women with PCOS have shown reductions in body weight (4–7%), fasting insulin, free testosterone, and modest improvement in menstrual regularity. Cycle restoration rates of 30–50% have been reported in cohorts with concurrent weight loss.",
      },
      {
        heading: "Clinical use today",
        text: "Use is off-label and most commonly considered in PCOS patients with concurrent overweight/obesity, insulin resistance, or failed metformin. Contraception is recommended due to teratogenicity risk and the possibility of restored ovulation.",
      },
    ],
    contraindications: ["Active pregnancy or pregnancy planning"],
    citation: "Multiple small RCTs; no large definitive trial as of 2026.",
  },
];

export function getCondition(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
