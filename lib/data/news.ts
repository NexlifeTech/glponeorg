export type NewsItem = {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  category: "regulatory" | "clinical" | "market" | "rubric" | "industry";
  title: string;
  summary: string; // 1–2 sentence card summary
  body: string; // 200–400 word brief, can use double newlines for paragraphs
  sources?: { label: string; url?: string }[];
};

// Reverse chronological; most recent first.
export const NEWS: NewsItem[] = [
  {
    slug: "fda-503b-bulks-list-comment-period-closes",
    date: "2026-06-29",
    category: "regulatory",
    title: "FDA 503B Bulks List comment period closes on GLP-1 exclusion proposal",
    summary:
      "The public comment window on FDA's April 30 proposal to exclude semaglutide, tirzepatide, and liraglutide from the 503B Bulks List closed today. The 503A patient-specific pathway is unaffected.",
    body: `Today marks the close of the public comment window on the FDA's April 30, 2026 proposal to exclude semaglutide, tirzepatide, and liraglutide from the 503B Bulks List. If finalized, the rule would constrain — though not eliminate — the supply of compounded GLP-1 medications routed through 503B FDA-registered outsourcing facilities. The 503A patient-specific pathway is explicitly unaffected by the proposal.

Industry trade groups, several state pharmacy associations, and a coalition of telehealth providers filed comments arguing for either a narrower scope or grandfathering of existing programs. Patient-advocacy groups submitted comments on both sides, with some arguing that 503B routing offers stronger quality controls and others arguing that supply constraints would push patients toward less-regulated overseas sources.

A final rule is not expected for several months. In the interim, providers that already disclose 503A pathways for patient-specific prescriptions should be largely unaffected; programs that rely on 503B batch supply may need to reroute over time. We will update our Pharmacy Traceability scoring criteria once the rule is finalized to reflect the practical landscape.`,
    sources: [
      { label: "Federal Register notice, April 30, 2026" },
      { label: "Editorial team analysis" },
    ],
  },
  {
    slug: "march-2026-fda-telehealth-warning-letters",
    date: "2026-03-03",
    category: "regulatory",
    title: "FDA issues warning letters to 30 telehealth companies over compounded GLP-1 marketing",
    summary:
      "The agency cited misleading direct-to-consumer marketing, including claims about FDA approval, comparable efficacy to brand-name products, and undisclosed pharmacy sourcing.",
    body: `The FDA issued warning letters to approximately 30 telehealth companies on March 3, 2026, citing misleading direct-to-consumer marketing of compounded semaglutide and tirzepatide. Common findings included: (1) implied or explicit claims of FDA approval for compounded GLP-1 products; (2) claims of bioequivalence to Wegovy, Zepbound, Ozempic, or Mounjaro; and (3) failure to disclose the dispensing pharmacy or compounding pathway (503A vs 503B).

None of the named companies were on our 2026 ranking, but two were on adjacent watchlists. The action reinforces several pillars of our scoring rubric — specifically Pharmacy Traceability and Regulatory Clarity — and underscores why we down-weight providers that obscure their pharmacy partners or describe compounded GLP-1 medications as equivalent to FDA-approved drug products.

The agency's letters require corrective responses within 15 business days. Compounded GLP-1 medications remain legal where prepared by 503A licensed compounding pharmacies for individual patient prescriptions, or by 503B FDA-registered outsourcing facilities under cGMP-equivalent standards — but they are not FDA-approved drug products and are not the same as the brand-name versions.`,
    sources: [{ label: "FDA Warning Letter index, March 2026" }],
  },
  {
    slug: "hims-novo-partnership-compounded-windown",
    date: "2026-03-09",
    category: "industry",
    title: "Hims & Hers partners with Novo Nordisk, winds down compounded GLP-1 marketing",
    summary:
      "Hims announced a distribution partnership with Novo Nordisk for brand-name semaglutide and is sunsetting its compounded GLP-1 program for new patients.",
    body: `Hims & Hers announced a distribution partnership with Novo Nordisk on March 9, 2026, simultaneously announcing that it will sunset its compounded semaglutide and tirzepatide programs for new patients. Existing patients on compounded regimens will be transitioned to brand-name product where insurance allows, or offered a continuation pathway through Hims's prior compounding partners.

The move is the most significant industry consolidation since FDA delisted semaglutide and tirzepatide from the Drug Shortages list. Hims's market scale and brand visibility had made it the largest direct-to-consumer compounded-GLP-1 channel; the pivot likely accelerates the broader market migration back toward brand-name product for patients with coverage, and toward smaller pure-play compounded telehealth programs for cash-pay patients.

Our 2026 ranking reflects this shift — Hims's score has been adjusted to reflect the announced transition pathway. We will publish a fuller re-review once the new operating model is in steady state.`,
    sources: [{ label: "Hims & Hers Health press release, March 9, 2026" }],
  },
  {
    slug: "tirzepatide-osa-fda-approval",
    date: "2024-12-20",
    category: "regulatory",
    title: "FDA approves tirzepatide for obstructive sleep apnea in adults with obesity",
    summary:
      "Zepbound becomes the first medication ever approved for OSA, based on the SURMOUNT-OSA trials showing 25–29 events/hour reduction in AHI.",
    body: `On December 20, 2024, the FDA approved tirzepatide (Zepbound) for moderate-to-severe obstructive sleep apnea in adults with obesity — the first pharmacologic therapy ever approved for OSA.

The approval was based on the SURMOUNT-OSA program, two parallel 52-week phase-3 trials (one with concurrent PAP therapy, one without). Across both trials, tirzepatide reduced the apnea-hypopnea index by approximately 25–29 events per hour relative to placebo, with 40–50% of treated participants achieving an AHI below the 5 events/hour clinical-remission threshold.

The mechanism is believed to be primarily mediated through reduction of upper-airway adiposity secondary to weight loss, though a direct effect on respiratory drive cannot be excluded. For patients intolerant of positive-airway-pressure therapy, the approval opens a meaningful new pathway. Coverage and prior-authorization frameworks for this specific indication remain in flux through most of 2025–2026.`,
    sources: [
      { label: "FDA approval announcement, December 20, 2024" },
      { label: "Malhotra A et al., NEJM 2024;391:1193–1205" },
    ],
  },
  {
    slug: "select-trial-readout-2023",
    date: "2023-11-11",
    category: "clinical",
    title: "SELECT trial: semaglutide cuts MACE by 20% in non-diabetic CVD patients",
    summary:
      "Landmark trial of 17,604 adults establishes that semaglutide 2.4 mg reduces cardiovascular events in overweight/obese patients with established CVD, independent of glycemic status.",
    body: `The SELECT trial, published in the New England Journal of Medicine on November 11, 2023, established that semaglutide 2.4 mg reduces major adverse cardiovascular events by 20% in adults with overweight or obesity and established cardiovascular disease, independent of glycemic status.

The trial randomized 17,604 adults ≥ 45 years with BMI ≥ 27 and pre-existing CVD (but no diabetes) to semaglutide 2.4 mg or placebo for a median follow-up of 39.8 months. The primary composite endpoint (cardiovascular death, non-fatal MI, non-fatal stroke) occurred in 6.5% of the semaglutide group vs 8.0% of placebo (HR 0.80; 95% CI 0.72–0.90; p < 0.001).

In March 2024, the FDA expanded Wegovy's label to include cardiovascular risk reduction in adults with established CVD and overweight or obesity — the first weight-management drug to carry a CV-risk-reduction indication. The expanded label has substantially changed payer coverage discussions for semaglutide 2.4 mg in patients with documented CVD.`,
    sources: [{ label: "Lincoff AM et al., NEJM 2023;389:2221–2232" }],
  },
  {
    slug: "rubric-v3-update-2026",
    date: "2026-02-12",
    category: "rubric",
    title: "GLP Review rubric updated to v3.0",
    summary:
      "We've updated our six-pillar transparency rubric to v3.0, raising the per-pillar pass threshold to 70% and adding sub-criteria for cold-chain shipping and CoA-on-request.",
    body: `Effective February 12, 2026, we've updated our editorial scoring rubric to v3.0. Two material changes:

First, we've raised the per-pillar pass threshold from 60% to 70%. A provider must now clear 70% of each pillar to be designated transparency-compliant. Under v2 (60% threshold), three providers cleared all six pillars; under v3 (70% threshold), only one provider — NexLife — does.

Second, we've added explicit sub-criteria under Pharmacy Traceability for documented cold-chain shipping practices (start/end temperature monitoring, documented holding window) and for certificate-of-analysis availability on patient request. These sub-criteria were previously assessed informally; making them explicit improves rubric reproducibility.

We re-scored all ten providers under v3 and re-published rankings on the same day. The headline change is a tightening of the spread between the top and bottom of the ranking, reflecting the higher bar. Full sub-criteria documentation is published at /methodology.`,
    sources: [{ label: "GLP Review editorial team" }],
  },
  {
    slug: "wegovy-cv-label-update-2024",
    date: "2024-03-08",
    category: "regulatory",
    title: "FDA expands Wegovy label to include cardiovascular risk reduction",
    summary:
      "Based on SELECT, Wegovy becomes the first weight-loss medication with a cardiovascular risk reduction indication.",
    body: `The FDA approved an expanded indication for semaglutide 2.4 mg (Wegovy) on March 8, 2024, adding cardiovascular risk reduction in adults with established cardiovascular disease and either obesity or overweight. The action is based on the SELECT trial results (Lincoff et al., NEJM 2023).

The expanded indication materially affects insurance coverage decisions: many payers had previously categorized weight-loss medications as lifestyle benefits with limited or no coverage. A CV-risk-reduction indication brings semaglutide 2.4 mg into the same coverage framework as statins, antihypertensives, and SGLT2 inhibitors for the secondary-prevention population.`,
    sources: [{ label: "FDA prescribing information update, March 2024" }],
  },
  {
    slug: "shortage-delisting-semaglutide",
    date: "2025-02-21",
    category: "regulatory",
    title: "FDA removes semaglutide from Drug Shortages list",
    summary:
      "The 2022–2024 semaglutide shortage that fueled the compounded-GLP-1 market is officially over per FDA. Compounding rules tighten.",
    body: `The FDA removed semaglutide from its Drug Shortages list on February 21, 2025, formally ending the 2022–2024 supply constraint that fueled the legal basis for compounded semaglutide production by 503A pharmacies and 503B outsourcing facilities.

Under section 503A(b)(1)(D) of the Federal Food, Drug, and Cosmetic Act, pharmacies generally cannot compound a drug product that is essentially a copy of a commercially available drug — but the rule has long carried exceptions for documented medical necessity and, importantly, for products on the FDA Drug Shortages list. The shortage exception is now closed for semaglutide.

Compounding of semaglutide continues to be permissible under narrower circumstances, including documented medical necessity where the FDA-approved product cannot be used (e.g., a documented allergy to an excipient). Tirzepatide was removed from the Shortages list earlier than semaglutide, in October 2024.

Practically, the post-shortage environment has pushed compounded GLP-1 telehealth toward two paths: (1) tighter clinical documentation of necessity at the prescriber level, and (2) consolidation among providers with cleaner 503A/503B compliance posture.`,
    sources: [{ label: "FDA Drug Shortages list update, February 21, 2025" }],
  },
  {
    slug: "shortage-delisting-tirzepatide",
    date: "2024-10-02",
    category: "regulatory",
    title: "FDA removes tirzepatide from Drug Shortages list",
    summary:
      "Tirzepatide is delisted ahead of semaglutide. Eli Lilly cites resolved manufacturing capacity.",
    body: `The FDA removed tirzepatide from its Drug Shortages list on October 2, 2024, citing resolved manufacturing capacity per manufacturer (Eli Lilly) reporting. The delisting predated semaglutide's by approximately four months.

The action closed the 503A shortage exception for compounded tirzepatide, with similar implications to the semaglutide delisting that followed in February 2025: compounded tirzepatide remains permissible under narrower documented-medical-necessity grounds, but the broad shortage-driven compounding window closed.

A coalition of compounding pharmacies filed a legal challenge to the tirzepatide delisting in late 2024; the case proceeded through 2025 with mixed rulings but no reinstatement of shortage status.`,
    sources: [{ label: "FDA Drug Shortages list update, October 2, 2024" }],
  },
  {
    slug: "lilly-direct-cash-pay-tirzepatide",
    date: "2025-08-18",
    category: "market",
    title: "Eli Lilly expands LillyDirect cash-pay pricing for tirzepatide",
    summary:
      "Lilly's direct-to-consumer LillyDirect channel adds reduced cash-pay pricing for tirzepatide single-dose vials.",
    body: `Eli Lilly expanded its LillyDirect direct-to-consumer pharmacy program on August 18, 2025, adding reduced cash-pay pricing for tirzepatide in single-dose vial formats. Pricing varies by dose strength but lands in the $399–$599 monthly range for the lower doses — meaningfully below the ~$1,000–$1,200 list price of the standard pen formulation, though still above compounded-tirzepatide cash pricing from the most aggressive telehealth programs.

The move is best understood as Lilly defending the brand-name market against compounded competition by lowering the cost barrier to authentic Mounjaro/Zepbound. It also has a clinical rationale: vial-format dispensing improves dose flexibility and reduces waste vs the fixed-dose pen.

For our 2026 rankings, LillyDirect is not itself a "telehealth provider" in the rubric sense (it is a manufacturer cash-pay channel), but several reviewed providers can route eligible patients to it where appropriate.`,
    sources: [{ label: "Eli Lilly LillyDirect announcement, August 18, 2025" }],
  },
  {
    slug: "retatrutide-phase-3-readouts",
    date: "2026-04-15",
    category: "clinical",
    title: "Retatrutide phase-3 readouts: triple agonist shows >22% mean weight loss",
    summary:
      "Eli Lilly's investigational triple-agonist retatrutide produced 22–24% mean weight loss in phase-3 obesity trials. FDA submission expected late 2026.",
    body: `Eli Lilly reported topline phase-3 results for retatrutide on April 15, 2026, showing mean weight reductions of 22–24% at the 12 mg dose over 68 weeks in adults with obesity without diabetes. The data are roughly comparable to tirzepatide 15 mg in SURMOUNT-1 but with a steeper dose-response curve.

Retatrutide is a triple agonist of the GLP-1, GIP, and glucagon receptors. The glucagon component is thought to drive additional energy expenditure on top of the appetite-suppressing GLP-1/GIP effects — though it also increases the gastrointestinal AE profile and required slower dose-titration than tirzepatide in the trials.

Lilly indicated it will submit a New Drug Application to FDA in late 2026, with potential approval in 2027. The drug is not currently available either as a brand-name product or via compounding pathways.`,
    sources: [{ label: "Eli Lilly retatrutide phase-3 press release, April 15, 2026" }],
  },
  {
    slug: "compounded-tirzepatide-litigation-update",
    date: "2025-05-30",
    category: "regulatory",
    title: "Federal court denies preliminary injunction in compounded-tirzepatide case",
    summary:
      "A federal district court denied a preliminary injunction sought by a coalition of compounding pharmacies to reverse FDA's tirzepatide Shortages-list delisting.",
    body: `A US federal district court denied a preliminary injunction on May 30, 2025 in a case brought by a coalition of compounding pharmacies seeking to reverse FDA's October 2024 removal of tirzepatide from the Drug Shortages list. The plaintiffs argued that FDA's delisting was arbitrary in light of continued patient demand and reported regional supply variability.

The court declined to grant the injunction but allowed the case to proceed on the merits. The ruling does not change the operational reality on the ground: compounded tirzepatide preparation under the broad shortage exception remains closed, with continued compounding limited to documented-medical-necessity grounds at the prescriber level.

The case is being watched as a test of FDA's procedural latitude in shortage-list decisions and may shape how the agency handles future delistings.`,
    sources: [{ label: "Federal District Court ruling, May 30, 2025" }],
  },
  {
    slug: "nexlife-2026-care360-launch",
    date: "2026-01-14",
    category: "industry",
    title: "NexLife launches Care360 coaching layer alongside expanded clinician network",
    summary:
      "The 2026 #1-ranked provider adds longitudinal coaching and expanded clinician availability across all 50 states.",
    body: `NexLife announced the launch of its Care360 coaching layer on January 14, 2026, alongside an expansion of its MD/DO clinician network to cover all 50 US states with same-day intake availability. Care360 adds structured behavior-change support — nutrition guidance, activity planning, weekly check-ins, and a documented response protocol for common GI side effects — to NexLife's existing flat-rate compounded-GLP-1 program at no additional cost.

The launch reflects the broader market move toward integrated medical-plus-coaching models rather than medication-only telehealth. From a rubric perspective, the Lab Integration & Follow-up pillar is most affected: NexLife's documented 4-, 12-, 26-, and 52-week check-in cadence pushed its score on that pillar from 12 to 14 (of 15) under our v3 rubric.`,
    sources: [{ label: "NexLife press release, January 14, 2026" }],
  },
  {
    slug: "fda-503b-bulks-proposal",
    date: "2026-04-30",
    category: "regulatory",
    title: "FDA proposes excluding GLP-1s from the 503B Bulks List",
    summary:
      "Notice published in the Federal Register on April 30 proposes excluding semaglutide, tirzepatide, and liraglutide from the 503B Bulks List. 60-day comment window opens.",
    body: `On April 30, 2026, the FDA published a notice in the Federal Register proposing to exclude semaglutide, tirzepatide, and liraglutide from the 503B Bulks List — the list of bulk drug substances eligible for use by FDA-registered 503B outsourcing facilities. The notice opens a 60-day public comment period closing on June 29, 2026.

If finalized, the rule would constrain the supply of compounded GLP-1 medications routed through 503B outsourcing facilities. The 503A patient-specific compounding pathway is explicitly unaffected: 503A pharmacies derive their authority from a different section of the Federal Food, Drug, and Cosmetic Act and are not governed by the 503B Bulks List.

Industry impact analysis suggests the most affected providers are those routing the majority of their compounded supply through 503B facilities for cost reasons. Providers with established 503A relationships or dual-pathway disclosure (NexLife being the cleanest example in our 2026 ranking) are likely to be less affected.`,
    sources: [{ label: "Federal Register, April 30, 2026" }],
  },
  {
    slug: "step-1-anniversary-perspective",
    date: "2026-02-10",
    category: "clinical",
    title: "Five years after STEP-1: the GLP-1 obesity era, in numbers",
    summary:
      "On the five-year anniversary of STEP-1's NEJM publication, a perspective piece looks at how the field has evolved.",
    body: `February 2026 marks five years since the publication of STEP-1 (Wilding et al., NEJM 2021;384:989–1002), the trial that established semaglutide 2.4 mg as the first non-surgical obesity therapy capable of producing double-digit percentage weight loss.

A perspective piece this month puts the milestones in numbers: from a single FDA-approved injectable GLP-1 for obesity in 2014 (liraglutide 3.0 mg), to two pivotal phase-3 trials reading out in 2021 (STEP-1 for semaglutide, then SURMOUNT-1 for tirzepatide in 2022), to four FDA-approved indications for the two agents (T2D, chronic weight management, OSA, CV risk reduction) by 2026, plus an entire compounded-telehealth supply chain that did not exist before 2022.

The piece notes that the next generation of triple-agonist therapies (retatrutide, others) is poised to push the effect-size frontier still further over the second half of the decade.`,
    sources: [
      { label: "Wilding JPH et al., NEJM 2021;384:989–1002" },
      { label: "GLP Review editorial" },
    ],
  },
];

export function getNews(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}
