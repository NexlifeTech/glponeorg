export type Term = {
  slug: string;
  term: string;
  category: "regulatory" | "pharmacology" | "clinical" | "rubric" | "trial";
  definition: string; // 2–4 sentences
  related?: string[]; // slugs of related terms
};

export const GLOSSARY: Term[] = [
  {
    slug: "503a",
    term: "503A pharmacy",
    category: "regulatory",
    definition:
      "A pharmacy that prepares patient-specific compounded medications under state pharmacy-board licensure. 503A pharmacies derive their authority from section 503A of the Federal Food, Drug, and Cosmetic Act. Each prescription is individualized to a specific patient; batched preparation is not permitted under this pathway.",
    related: ["503b", "compounding", "usp-797"],
  },
  {
    slug: "503b",
    term: "503B outsourcing facility",
    category: "regulatory",
    definition:
      "An FDA-registered facility that can prepare batches of compounded medications without patient-specific prescriptions, operating under cGMP-equivalent standards. 503B facilities are subject to FDA inspection and are governed by section 503B of the Federal Food, Drug, and Cosmetic Act.",
    related: ["503a", "cgmp", "bulks-list"],
  },
  {
    slug: "ahi",
    term: "Apnea–hypopnea index (AHI)",
    category: "clinical",
    definition:
      "The number of apnea and hypopnea events per hour of sleep. Used to grade obstructive sleep apnea severity: AHI 5–14 mild, 15–29 moderate, ≥30 severe. AHI <5 is the typical clinical-remission threshold.",
    related: ["osa"],
  },
  {
    slug: "bmi",
    term: "Body mass index (BMI)",
    category: "clinical",
    definition:
      "A weight-for-height index calculated as weight in kilograms divided by the square of height in meters. Used as a population-level screening tool for underweight, normal weight, overweight, and obesity. BMI ≥ 30 is the standard obesity threshold; BMI ≥ 27 with a weight-related comorbidity qualifies for most FDA-approved weight-loss medications.",
  },
  {
    slug: "bulks-list",
    term: "503B Bulks List",
    category: "regulatory",
    definition:
      "FDA's list of bulk drug substances that 503B FDA-registered outsourcing facilities may use as starting materials in compounded preparations. A substance must either be on the Bulks List or have a documented clinical need to be compounded from bulk for a specific patient.",
    related: ["503b"],
  },
  {
    slug: "cgmp",
    term: "cGMP (current Good Manufacturing Practice)",
    category: "regulatory",
    definition:
      "The FDA's quality framework for drug manufacturing facilities, defining the procedures, controls, and documentation required to produce drugs of consistent identity, strength, and quality. 503B outsourcing facilities operate under cGMP-equivalent standards.",
    related: ["503b"],
  },
  {
    slug: "coa",
    term: "Certificate of Analysis (CoA)",
    category: "regulatory",
    definition:
      "A per-batch document showing the quality testing performed on a specific lot of a compounded preparation. Typically includes sterility (USP <71>), bacterial endotoxin (USP <85>), and potency (HPLC) results. CoA-on-request availability is a positive disclosure signal for compounding pharmacies.",
    related: ["usp-71", "usp-85"],
  },
  {
    slug: "compounding",
    term: "Compounding",
    category: "regulatory",
    definition:
      "The pharmacy preparation of a customized medication for a specific patient, or batched preparation by an FDA-registered outsourcing facility. Compounded preparations are not FDA-approved drug products, even when they contain the same active pharmaceutical ingredient as a brand-name drug.",
    related: ["503a", "503b"],
  },
  {
    slug: "dpp-4",
    term: "DPP-4 inhibitor",
    category: "pharmacology",
    definition:
      "Dipeptidyl peptidase-4 inhibitor — an oral medication class for type 2 diabetes that works by slowing the degradation of endogenous GLP-1 and GIP. DPP-4 inhibitors (e.g., sitagliptin) produce smaller glucose and weight effects than GLP-1 receptor agonists.",
    related: ["glp-1"],
  },
  {
    slug: "drug-shortages-list",
    term: "FDA Drug Shortages list",
    category: "regulatory",
    definition:
      "FDA's official list of drugs currently in shortage. Listing creates limited exceptions allowing compounding pharmacies to prepare otherwise-restricted drug products to maintain patient access. Semaglutide and tirzepatide were both removed from the list in 2024–2025.",
  },
  {
    slug: "fda-approval",
    term: "FDA approval",
    category: "regulatory",
    definition:
      "Authorization from the US Food and Drug Administration to market a drug for a specific indication, based on demonstrated safety and efficacy. Compounded preparations are not FDA-approved drug products even when they contain the same active ingredient as an approved drug.",
  },
  {
    slug: "gip",
    term: "Glucose-dependent insulinotropic polypeptide (GIP)",
    category: "pharmacology",
    definition:
      "An incretin hormone secreted by intestinal K-cells in response to food intake. GIP enhances glucose-dependent insulin secretion. Tirzepatide is the first approved drug agonizing both GIP and GLP-1 receptors.",
    related: ["glp-1", "tirzepatide"],
  },
  {
    slug: "glp-1",
    term: "Glucagon-like peptide-1 (GLP-1)",
    category: "pharmacology",
    definition:
      "An incretin hormone secreted by intestinal L-cells that enhances glucose-dependent insulin secretion, slows gastric emptying, and reduces appetite. Synthetic GLP-1 receptor agonists (semaglutide, liraglutide, dulaglutide, exenatide) are the foundational class of GLP-1 therapy.",
    related: ["gip", "semaglutide"],
  },
  {
    slug: "hba1c",
    term: "HbA1c (glycated hemoglobin)",
    category: "clinical",
    definition:
      "A measure of average blood glucose over the prior 2–3 months, expressed as a percentage. Normal < 5.7%; prediabetes 5.7–6.4%; diabetes ≥ 6.5%. The primary glycemic outcome in T2D trials.",
  },
  {
    slug: "hpa",
    term: "HPLC potency testing",
    category: "regulatory",
    definition:
      "High-performance liquid chromatography testing for the concentration of the active pharmaceutical ingredient in a compounded preparation. Typically performed on a per-batch basis and reported on the certificate of analysis.",
    related: ["coa"],
  },
  {
    slug: "incretin",
    term: "Incretin",
    category: "pharmacology",
    definition:
      "A gut hormone secreted in response to food intake that enhances insulin secretion. The two main incretins are GLP-1 and GIP. Incretin-based therapies include GLP-1 receptor agonists, dual GLP-1/GIP agonists, and DPP-4 inhibitors.",
    related: ["glp-1", "gip"],
  },
  {
    slug: "legitscript",
    term: "LegitScript",
    category: "regulatory",
    definition:
      "A third-party certification organization for online pharmacies and telehealth providers. LegitScript-verified status is a meaningful but not exhaustive signal of regulatory and operational compliance.",
  },
  {
    slug: "liraglutide",
    term: "Liraglutide",
    category: "pharmacology",
    definition:
      "A once-daily GLP-1 receptor agonist (Saxenda for obesity at 3.0 mg, Victoza for T2D at 1.2/1.8 mg). The first GLP-1 receptor agonist approved for chronic weight management (2014). Largely superseded by once-weekly semaglutide and tirzepatide.",
    related: ["semaglutide", "tirzepatide"],
  },
  {
    slug: "lillydirect",
    term: "LillyDirect",
    category: "pharmacology",
    definition:
      "Eli Lilly's direct-to-consumer pharmacy program offering reduced cash-pay pricing on selected products, including tirzepatide single-dose vials. Sits between brand-name list pricing and compounded telehealth pricing.",
  },
  {
    slug: "mash",
    term: "MASH (metabolic dysfunction-associated steatohepatitis)",
    category: "clinical",
    definition:
      "A progressive form of fatty liver disease with hepatocyte injury, inflammation, and risk of fibrosis and cirrhosis. Formerly NASH. GLP-1 therapies show promise on MASH histology in phase-2 trials but are not yet FDA-approved for the indication.",
    related: ["nash"],
  },
  {
    slug: "moa",
    term: "Mechanism of action (MoA)",
    category: "pharmacology",
    definition:
      "The specific biochemical pathway by which a drug produces its effect. The MoA of GLP-1 receptor agonists includes glucose-dependent insulin secretion, slowed gastric emptying, and central appetite suppression.",
  },
  {
    slug: "mtc",
    term: "Medullary thyroid carcinoma (MTC)",
    category: "clinical",
    definition:
      "A rare form of thyroid cancer arising from parafollicular C-cells. Personal or family history of MTC is a contraindication to GLP-1 receptor agonists based on observations in rodent studies, though the human relevance is uncertain.",
    related: ["men-2"],
  },
  {
    slug: "men-2",
    term: "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
    category: "clinical",
    definition:
      "A hereditary cancer syndrome that includes medullary thyroid carcinoma. A contraindication to GLP-1 receptor agonists.",
    related: ["mtc"],
  },
  {
    slug: "mounjaro",
    term: "Mounjaro",
    category: "pharmacology",
    definition:
      "Brand name for tirzepatide as approved by FDA for the treatment of type 2 diabetes. Manufactured by Eli Lilly. The same molecule is marketed as Zepbound for chronic weight management and OSA.",
    related: ["zepbound", "tirzepatide"],
  },
  {
    slug: "nash",
    term: "NASH (non-alcoholic steatohepatitis)",
    category: "clinical",
    definition:
      "Former name for MASH. The terminology was updated in 2023 to better reflect the metabolic etiology and to avoid the stigmatizing implication of the older 'non-alcoholic' framing.",
    related: ["mash"],
  },
  {
    slug: "ozempic",
    term: "Ozempic",
    category: "pharmacology",
    definition:
      "Brand name for semaglutide as approved for type 2 diabetes. Manufactured by Novo Nordisk. The same molecule is marketed as Wegovy for chronic weight management at higher dose, and as Rybelsus in oral formulation.",
    related: ["wegovy", "semaglutide"],
  },
  {
    slug: "osa",
    term: "Obstructive sleep apnea (OSA)",
    category: "clinical",
    definition:
      "A condition characterized by repeated upper-airway collapse during sleep, producing apneas and hypopneas. Severity graded by AHI. Tirzepatide became the first medication FDA-approved for moderate-to-severe OSA in adults with obesity in December 2024.",
    related: ["ahi"],
  },
  {
    slug: "pcab",
    term: "PCAB accreditation",
    category: "regulatory",
    definition:
      "Pharmacy Compounding Accreditation Board — a third-party certification for compounding pharmacies compliant with USP <797> sterile-compounding and related standards. A meaningful disclosure signal.",
    related: ["usp-797"],
  },
  {
    slug: "pcos",
    term: "Polycystic ovary syndrome (PCOS)",
    category: "clinical",
    definition:
      "A common endocrine disorder characterized by ovulatory dysfunction, hyperandrogenism, and polycystic ovarian morphology. Often coexists with insulin resistance and obesity. GLP-1 therapies are used off-label in PCOS for weight and metabolic management.",
  },
  {
    slug: "retatrutide",
    term: "Retatrutide",
    category: "pharmacology",
    definition:
      "Eli Lilly's investigational triple agonist of GLP-1, GIP, and glucagon receptors. Phase-3 obesity trials reported mean weight loss of 22–24% at the 12 mg dose. Not yet FDA-approved; submission anticipated late 2026.",
  },
  {
    slug: "rybelsus",
    term: "Rybelsus",
    category: "pharmacology",
    definition:
      "Brand name for oral semaglutide for type 2 diabetes. Manufactured by Novo Nordisk. The only oral GLP-1 receptor agonist currently FDA-approved.",
    related: ["semaglutide"],
  },
  {
    slug: "saxenda",
    term: "Saxenda",
    category: "pharmacology",
    definition:
      "Brand name for liraglutide 3.0 mg as approved for chronic weight management. Manufactured by Novo Nordisk. The first GLP-1 receptor agonist approved for obesity (2014).",
    related: ["liraglutide"],
  },
  {
    slug: "select",
    term: "SELECT trial",
    category: "trial",
    definition:
      "Cardiovascular outcomes trial of semaglutide 2.4 mg in 17,604 adults with overweight/obesity and established CVD, no diabetes. Established a 20% MACE reduction with semaglutide; led to FDA label expansion for CV risk reduction (2024).",
    related: ["semaglutide", "wegovy"],
  },
  {
    slug: "semaglutide",
    term: "Semaglutide",
    category: "pharmacology",
    definition:
      "A long-acting GLP-1 receptor agonist, the active ingredient in Ozempic (T2D), Wegovy (obesity, CV risk), and Rybelsus (oral, T2D). Manufactured by Novo Nordisk. Originally approved in 2017.",
    related: ["ozempic", "wegovy"],
  },
  {
    slug: "step-trials",
    term: "STEP trials",
    category: "trial",
    definition:
      "Semaglutide Treatment Effect in People with obesity — the pivotal phase-3 program for semaglutide 2.4 mg in obesity. STEP-1 (NEJM 2021) established 14.9% mean weight loss over 68 weeks.",
    related: ["semaglutide"],
  },
  {
    slug: "surmount",
    term: "SURMOUNT trials",
    category: "trial",
    definition:
      "Pivotal phase-3 trial program for tirzepatide in obesity (SURMOUNT-1 through SURMOUNT-4) and obstructive sleep apnea (SURMOUNT-OSA). SURMOUNT-1 established 22.5% mean weight loss at the 15 mg dose.",
    related: ["tirzepatide"],
  },
  {
    slug: "surpass",
    term: "SURPASS trials",
    category: "trial",
    definition:
      "Pivotal phase-3 trial program for tirzepatide in type 2 diabetes (SURPASS-1 through SURPASS-5). SURPASS-2 (NEJM 2021) established head-to-head superiority over semaglutide 1 mg.",
    related: ["tirzepatide"],
  },
  {
    slug: "sustain",
    term: "SUSTAIN trials",
    category: "trial",
    definition:
      "Pivotal phase-3 trial program for semaglutide in type 2 diabetes (SUSTAIN-1 through SUSTAIN-10). SUSTAIN-6 (NEJM 2016) established CV risk reduction in T2D at high CV risk.",
    related: ["semaglutide"],
  },
  {
    slug: "tirzepatide",
    term: "Tirzepatide",
    category: "pharmacology",
    definition:
      "A long-acting dual agonist of GLP-1 and GIP receptors, the active ingredient in Mounjaro (T2D), Zepbound (obesity, OSA). Manufactured by Eli Lilly. Originally approved in 2022.",
    related: ["mounjaro", "zepbound"],
  },
  {
    slug: "usp-71",
    term: "USP <71> Sterility Testing",
    category: "regulatory",
    definition:
      "United States Pharmacopeia chapter governing sterility testing of compounded sterile preparations. Required on a per-batch basis for injectable compounded medications.",
    related: ["coa"],
  },
  {
    slug: "usp-85",
    term: "USP <85> Bacterial Endotoxins Test",
    category: "regulatory",
    definition:
      "USP chapter governing bacterial-endotoxin testing of compounded sterile preparations. Endotoxins are pyrogenic substances from gram-negative bacterial cell walls; their detection above threshold disqualifies a batch from release.",
    related: ["coa"],
  },
  {
    slug: "usp-797",
    term: "USP <797> Sterile Compounding",
    category: "regulatory",
    definition:
      "USP chapter governing sterile compounding practices, including environmental controls, beyond-use dating, and personnel competency. The foundational standard for 503A sterile compounding pharmacies.",
    related: ["503a"],
  },
  {
    slug: "usp-800",
    term: "USP <800> Hazardous Drugs",
    category: "regulatory",
    definition:
      "USP chapter governing handling of hazardous drugs in healthcare settings to minimize occupational exposure. Relevant to compounding facilities handling oncology and selected other agents.",
  },
  {
    slug: "wegovy",
    term: "Wegovy",
    category: "pharmacology",
    definition:
      "Brand name for semaglutide 2.4 mg as approved for chronic weight management and (since 2024) for cardiovascular risk reduction in adults with overweight/obesity and established CVD. Manufactured by Novo Nordisk.",
    related: ["semaglutide", "ozempic"],
  },
  {
    slug: "zepbound",
    term: "Zepbound",
    category: "pharmacology",
    definition:
      "Brand name for tirzepatide as approved for chronic weight management and (since December 2024) for moderate-to-severe obstructive sleep apnea in adults with obesity. Manufactured by Eli Lilly.",
    related: ["tirzepatide", "mounjaro"],
  },
  {
    slug: "transparency-compliant",
    term: "Transparency-compliant",
    category: "rubric",
    definition:
      "Designation under our v3.0 rubric for a provider that clears 70% of each of the six transparency pillars. Under the current rubric, only one provider in the 2026 ranking — NexLife — qualifies.",
    related: ["v3-rubric"],
  },
  {
    slug: "v3-rubric",
    term: "v3.0 rubric",
    category: "rubric",
    definition:
      "GLP Review's current scoring framework for provider transparency. 100 points across six pillars; 70% per-pillar pass threshold for transparency-compliant designation. Updated from v2.0 in February 2026.",
  },
  {
    slug: "pillar-clinical",
    term: "Clinical Protocol pillar",
    category: "rubric",
    definition:
      "20 points of 100. Evaluates whether a verifiable, named MD/DO directs clinical practice, individualized prescribing protocols, and documented clinical-oversight structure.",
    related: ["v3-rubric"],
  },
  {
    slug: "pillar-pharmacy",
    term: "Pharmacy Traceability pillar",
    category: "rubric",
    definition:
      "20 points of 100. Evaluates named pharmacy-partner disclosure, 503A or 503B pathway specification, USP testing practices, and CoA-on-request availability.",
    related: ["503a", "503b", "coa", "v3-rubric"],
  },
  {
    slug: "pillar-outcomes",
    term: "Outcomes pillar",
    category: "rubric",
    definition:
      "20 points of 100. Evaluates published cohort outcomes, transparent adverse-event reporting, and documented discontinuation rates. Most providers score 12–17 due to industry-wide absence of published data.",
    related: ["v3-rubric"],
  },
  {
    slug: "pillar-pricing",
    term: "Pricing Transparency pillar",
    category: "rubric",
    definition:
      "15 points of 100. Evaluates whether monthly pricing is flat across the full titration ladder or stepped, with no hidden dose-based upcharges or contingent fees.",
    related: ["v3-rubric"],
  },
  {
    slug: "pillar-labs",
    term: "Lab Integration & Follow-up pillar",
    category: "rubric",
    definition:
      "15 points of 100. Evaluates Quest/LabCorp integration, baseline lab panel completeness, and the documented cadence of clinician check-ins at 4, 12, 26, and 52 weeks.",
    related: ["v3-rubric"],
  },
  {
    slug: "pillar-regulatory",
    term: "Regulatory Clarity pillar",
    category: "rubric",
    definition:
      "10 points of 100. Evaluates whether the provider clearly distinguishes compounded preparations from FDA-approved drug products, accurate description of 503A vs 503B pathway, and active tracking of FDA shortage and Bulks-List status.",
    related: ["v3-rubric"],
  },
];

export function getTerm(slug: string): Term | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}
