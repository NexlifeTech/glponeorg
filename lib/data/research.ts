export type Study = {
  slug: string;
  title: string;
  trial: string; // e.g. "SURMOUNT-1"
  drug: string;
  year: number;
  sampleSize: number;
  durationWeeks: number;
  primaryEndpoint: string;
  result: string; // 1-sentence outcome
  summary: string; // 1–2 sentence card summary
  body: { heading: string; text: string }[];
  citation: string;
};

export const STUDIES: Study[] = [
  {
    slug: "surmount-1",
    title: "Tirzepatide for chronic weight management: SURMOUNT-1",
    trial: "SURMOUNT-1",
    drug: "Tirzepatide",
    year: 2022,
    sampleSize: 2539,
    durationWeeks: 72,
    primaryEndpoint: "Percent change in body weight at 72 weeks",
    result:
      "Mean weight loss of 22.5% with tirzepatide 15 mg vs 2.4% with placebo — the largest effect ever observed in a non-surgical obesity trial.",
    summary:
      "Pivotal 72-week phase-3 RCT of tirzepatide in 2,539 adults with obesity. The 15 mg dose produced a mean total body weight reduction of 22.5%, and 36% of participants lost at least one quarter of their baseline body weight.",
    body: [
      {
        heading: "Design",
        text: "Double-blind, placebo-controlled, randomized phase-3 trial in adults with BMI ≥ 30 (or ≥ 27 with at least one weight-related complication, excluding diabetes). Participants were assigned 1:1:1:1 to tirzepatide 5, 10, 15 mg subcutaneous weekly, or placebo, for 72 weeks alongside lifestyle counseling.",
      },
      {
        heading: "Primary outcome",
        text: "Mean percentage change in body weight from baseline to week 72: tirzepatide 5 mg −15.0%, 10 mg −19.5%, 15 mg −20.9% to −22.5% (depending on analysis set), placebo −3.1%. All comparisons p < 0.001.",
      },
      {
        heading: "Secondary outcomes",
        text: "Weight loss of ≥ 5% achieved by 85–91% of tirzepatide groups vs 35% placebo. Weight loss of ≥ 20% achieved by 50% of the 15 mg group. Improvements in waist circumference, systolic/diastolic blood pressure, fasting glucose, HbA1c, lipids, and SF-36 physical-function scores.",
      },
      {
        heading: "Safety",
        text: "Most common adverse events were gastrointestinal (nausea, diarrhea, constipation), predominantly mild-to-moderate and during dose-escalation. Discontinuation due to AEs: 4.3–7.1% on tirzepatide vs 2.6% on placebo. No new safety signals.",
      },
    ],
    citation: "Jastreboff AM et al. Tirzepatide once weekly for the treatment of obesity. NEJM 2022;387:205–216.",
  },
  {
    slug: "step-1",
    title: "Semaglutide 2.4 mg for obesity: STEP-1",
    trial: "STEP-1",
    drug: "Semaglutide 2.4 mg",
    year: 2021,
    sampleSize: 1961,
    durationWeeks: 68,
    primaryEndpoint: "Percent change in body weight at 68 weeks",
    result:
      "Mean weight loss of 14.9% with semaglutide 2.4 mg vs 2.4% with placebo — the largest effect of any non-surgical obesity therapy at time of publication.",
    summary:
      "Pivotal phase-3 RCT of semaglutide 2.4 mg in 1,961 adults with obesity. Established the modern era of GLP-1 obesity pharmacotherapy and led to FDA approval of Wegovy in 2021.",
    body: [
      {
        heading: "Design",
        text: "Double-blind, placebo-controlled, randomized phase-3 trial in adults with BMI ≥ 30 (or ≥ 27 with at least one weight-related complication; no diabetes). 2:1 randomization to semaglutide 2.4 mg weekly or placebo for 68 weeks plus lifestyle counseling.",
      },
      {
        heading: "Primary outcome",
        text: "Mean change in body weight at week 68: −14.9% with semaglutide vs −2.4% with placebo (estimated difference −12.4 percentage points; p < 0.001). 86.4% achieved ≥ 5% loss; 50.5% achieved ≥ 15%.",
      },
      {
        heading: "Safety",
        text: "Nausea, diarrhea, vomiting, and constipation were the most common AEs, mostly transient and during titration. Discontinuation rate 7.0% on semaglutide vs 3.1% on placebo.",
      },
    ],
    citation: "Wilding JPH et al. Once-weekly semaglutide in adults with overweight or obesity. NEJM 2021;384:989–1002.",
  },
  {
    slug: "surpass-2",
    title: "Tirzepatide vs semaglutide in type 2 diabetes: SURPASS-2",
    trial: "SURPASS-2",
    drug: "Tirzepatide vs semaglutide 1 mg",
    year: 2021,
    sampleSize: 1879,
    durationWeeks: 40,
    primaryEndpoint: "Mean change in HbA1c from baseline at week 40",
    result:
      "All three tirzepatide doses produced larger reductions in HbA1c and body weight than semaglutide 1 mg in adults with T2D inadequately controlled on metformin.",
    summary:
      "Head-to-head 40-week trial of tirzepatide vs semaglutide in 1,879 adults with T2D. Tirzepatide 15 mg reduced HbA1c by 2.30 percentage points vs 1.86 for semaglutide 1 mg, and produced approximately twice the weight loss.",
    body: [
      {
        heading: "Design",
        text: "Open-label, active-comparator, phase-3 trial in adults with T2D on metformin monotherapy. 1:1:1:1 randomization to tirzepatide 5, 10, 15 mg weekly, or semaglutide 1 mg weekly, for 40 weeks.",
      },
      {
        heading: "Primary outcome",
        text: "Mean change in HbA1c from baseline: tirzepatide 5 mg −2.01%, 10 mg −2.24%, 15 mg −2.30%; semaglutide 1 mg −1.86% (p < 0.001 vs semaglutide for all tirzepatide doses).",
      },
      {
        heading: "Weight outcomes",
        text: "Mean weight change at 40 weeks: tirzepatide 5 mg −7.6 kg, 10 mg −9.3 kg, 15 mg −11.2 kg; semaglutide 1 mg −5.7 kg.",
      },
      {
        heading: "Implications",
        text: "First head-to-head head-to-head superiority trial establishing tirzepatide as more efficacious than semaglutide 1 mg at FDA-approved diabetes doses. SURPASS-2 underpinned the broad clinical preference for tirzepatide where weight loss is a co-objective.",
      },
    ],
    citation: "Frías JP et al. Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes. NEJM 2021;385:503–515.",
  },
  {
    slug: "select",
    title: "Semaglutide and cardiovascular outcomes: SELECT",
    trial: "SELECT",
    drug: "Semaglutide 2.4 mg",
    year: 2023,
    sampleSize: 17604,
    durationWeeks: 156,
    primaryEndpoint: "Time to first MACE (CV death, non-fatal MI, non-fatal stroke)",
    result:
      "20% relative reduction in major adverse cardiovascular events with semaglutide 2.4 mg vs placebo in adults with overweight/obesity and established CVD without diabetes.",
    summary:
      "Landmark CV outcomes trial of 17,604 adults establishing that semaglutide 2.4 mg reduces MACE in overweight/obese patients with pre-existing cardiovascular disease — independent of glycemic status.",
    body: [
      {
        heading: "Design",
        text: "Multicenter, double-blind, placebo-controlled, event-driven trial in 17,604 adults ≥ 45 years with BMI ≥ 27 and established CVD but no diabetes. Median follow-up 39.8 months.",
      },
      {
        heading: "Primary outcome",
        text: "First MACE event in 6.5% of semaglutide group vs 8.0% placebo (HR 0.80; 95% CI 0.72–0.90; p < 0.001). Number needed to treat over ~33 months: ~67.",
      },
      {
        heading: "Regulatory impact",
        text: "In March 2024, the FDA expanded Wegovy's label to include cardiovascular risk reduction in adults with established CVD and overweight or obesity — the first weight-management drug to carry a CV-risk-reduction indication.",
      },
    ],
    citation: "Lincoff AM et al. Semaglutide and cardiovascular outcomes in obesity without diabetes. NEJM 2023;389:2221–2232.",
  },
  {
    slug: "surmount-osa",
    title: "Tirzepatide for OSA in adults with obesity: SURMOUNT-OSA",
    trial: "SURMOUNT-OSA (Trials 1 & 2)",
    drug: "Tirzepatide",
    year: 2024,
    sampleSize: 469,
    durationWeeks: 52,
    primaryEndpoint: "Change in apnea-hypopnea index (AHI) at week 52",
    result:
      "Tirzepatide reduced AHI by 25–29 events per hour relative to placebo in adults with moderate-to-severe OSA and obesity — leading to the first-ever FDA approval of a medication for OSA (Dec 2024).",
    summary:
      "Two parallel 52-week phase-3 trials of tirzepatide in moderate-to-severe OSA: one without concurrent PAP therapy, one with. Both met their primary endpoints with substantial AHI reductions and adjunctive weight loss.",
    body: [
      {
        heading: "Trial 1 — without PAP",
        text: "234 adults with moderate-to-severe OSA, BMI ≥ 30, not on PAP. Mean AHI reduction at 52 weeks: tirzepatide −27.4 events/hour vs placebo −4.8 events/hour (between-group difference −20.0, p < 0.001).",
      },
      {
        heading: "Trial 2 — with PAP",
        text: "235 adults on stable PAP therapy. Mean AHI reduction: tirzepatide −29.3 vs placebo −5.5 (between-group difference −23.8, p < 0.001).",
      },
      {
        heading: "Disease-resolution rates",
        text: "Across both trials, roughly 40–50% of tirzepatide-treated participants achieved AHI < 5 events/hour (a threshold often used for clinical remission), vs 14–15% on placebo.",
      },
      {
        heading: "FDA approval",
        text: "On December 20, 2024, the FDA approved tirzepatide (Zepbound) for moderate-to-severe OSA in adults with obesity — the first medication ever approved for OSA.",
      },
    ],
    citation: "Malhotra A et al. Tirzepatide for the treatment of OSA in adults with obesity. NEJM 2024;391:1193–1205.",
  },
  {
    slug: "step-4",
    title: "Continued vs withdrawn semaglutide for weight maintenance: STEP-4",
    trial: "STEP-4",
    drug: "Semaglutide 2.4 mg",
    year: 2021,
    sampleSize: 803,
    durationWeeks: 68,
    primaryEndpoint: "Percent change in body weight from week 20 to week 68",
    result:
      "Continued semaglutide produced further weight loss; switching to placebo at week 20 led to regain of approximately two thirds of lost weight.",
    summary:
      "Withdrawal trial demonstrating that GLP-1 obesity therapy must be continued long-term to maintain weight loss. Discontinuation at week 20 led to substantial regain over the following 48 weeks.",
    body: [
      {
        heading: "Design",
        text: "803 adults completed a 20-week run-in of semaglutide 2.4 mg, achieving a mean weight reduction of −10.6%. They were then randomized 2:1 to continued semaglutide or switched to placebo for an additional 48 weeks.",
      },
      {
        heading: "Outcome",
        text: "Mean weight change from week 20 to week 68: −7.9% with continued semaglutide vs +6.9% with placebo switch. Roughly two thirds of the weight lost during the run-in was regained after withdrawal.",
      },
      {
        heading: "Clinical implication",
        text: "Like antihypertensives or statins, GLP-1 obesity pharmacotherapy is most appropriately framed as chronic therapy. This shapes both insurance-coverage policy debates and patient counseling about expectations.",
      },
    ],
    citation: "Rubino D et al. Effect of continued weekly subcutaneous semaglutide vs placebo on weight loss maintenance. JAMA 2021;325:1414–1425.",
  },
  {
    slug: "sustain-7",
    title: "Semaglutide vs dulaglutide in T2D: SUSTAIN-7",
    trial: "SUSTAIN-7",
    drug: "Semaglutide 0.5/1.0 mg vs dulaglutide 0.75/1.5 mg",
    year: 2018,
    sampleSize: 1199,
    durationWeeks: 40,
    primaryEndpoint: "Mean change in HbA1c from baseline at week 40",
    result:
      "Semaglutide outperformed dulaglutide at both low and high doses in HbA1c reduction and weight loss.",
    summary:
      "Head-to-head trial of two once-weekly GLP-1 receptor agonists in T2D inadequately controlled on metformin. Semaglutide produced larger HbA1c and body-weight reductions at matched dose pairs.",
    body: [
      {
        heading: "Outcomes",
        text: "Mean HbA1c reduction: semaglutide 0.5 mg −1.5% vs dulaglutide 0.75 mg −1.1%; semaglutide 1.0 mg −1.8% vs dulaglutide 1.5 mg −1.4%. Weight loss: semaglutide 1.0 mg −6.5 kg vs dulaglutide 1.5 mg −3.0 kg.",
      },
    ],
    citation: "Pratley RE et al. Semaglutide versus dulaglutide once weekly. Lancet Diabetes Endocrinol 2018;6:275–286.",
  },
  {
    slug: "surpass-cvot",
    title: "Tirzepatide cardiovascular outcomes (SURPASS-CVOT)",
    trial: "SURPASS-CVOT",
    drug: "Tirzepatide vs dulaglutide",
    year: 2025,
    sampleSize: 13299,
    durationWeeks: 260,
    primaryEndpoint: "Time to first MACE",
    result:
      "Tirzepatide non-inferior (and trended superior) vs dulaglutide for MACE in adults with T2D and elevated CV risk; full results read out 2025.",
    summary:
      "Active-comparator CV outcomes trial of tirzepatide vs dulaglutide in 13,299 adults with T2D and established CVD or high CV risk. Headline non-inferiority was met; superiority signals are being analyzed by indication subgroup.",
    body: [
      {
        heading: "Design",
        text: "Multicenter, double-blind, double-dummy, active-comparator trial in adults with T2D and either established atherosclerotic CVD or multiple CV risk factors. Median follow-up approximately 5 years.",
      },
      {
        heading: "Implications",
        text: "Strengthens the cardiometabolic positioning of tirzepatide as a foundational therapy alongside semaglutide, and informs payer coverage decisions for the higher-priced agent.",
      },
    ],
    citation: "Eli Lilly press release and conference presentations, 2025.",
  },
  {
    slug: "sustain-6",
    title: "Semaglutide and cardiovascular outcomes in T2D: SUSTAIN-6",
    trial: "SUSTAIN-6",
    drug: "Semaglutide",
    year: 2016,
    sampleSize: 3297,
    durationWeeks: 104,
    primaryEndpoint: "First MACE event",
    result:
      "26% relative reduction in MACE with semaglutide vs placebo in adults with T2D at high CV risk.",
    summary:
      "Original CV outcomes trial establishing the CV benefit of semaglutide in T2D. Underpinned the early indication-creep of GLP-1 receptor agonists from glycemic to cardiometabolic therapy.",
    body: [
      {
        heading: "Outcome",
        text: "MACE in 6.6% of semaglutide group vs 8.9% placebo (HR 0.74; 95% CI 0.58–0.95; p = 0.02 for superiority). Driven primarily by reductions in non-fatal stroke and non-fatal MI.",
      },
    ],
    citation: "Marso SP et al. Semaglutide and cardiovascular outcomes in patients with type 2 diabetes. NEJM 2016;375:1834–1844.",
  },
  {
    slug: "surmount-4",
    title: "Continued vs withdrawn tirzepatide: SURMOUNT-4",
    trial: "SURMOUNT-4",
    drug: "Tirzepatide",
    year: 2024,
    sampleSize: 783,
    durationWeeks: 88,
    primaryEndpoint: "Percent change in body weight from week 36 to week 88",
    result:
      "Continuing tirzepatide produced additional weight loss; switching to placebo led to a mean regain of approximately 14 percentage points of body weight.",
    summary:
      "Tirzepatide counterpart to STEP-4. Reinforces that GLP-1/GIP obesity therapy is chronic — discontinuation results in regain.",
    body: [
      {
        heading: "Outcome",
        text: "After a 36-week open-label lead-in (mean reduction −20.9%), patients were randomized to continue tirzepatide or switch to placebo. Continued therapy added another −5.5% over 52 weeks; placebo switch produced a regain of +14.0%. Net difference roughly 19.5 percentage points.",
      },
    ],
    citation: "Aronne LJ et al. Continued treatment with tirzepatide for maintenance of weight reduction. JAMA 2024;331:38–48.",
  },
];

export function getStudy(slug: string): Study | undefined {
  return STUDIES.find((s) => s.slug === slug);
}
