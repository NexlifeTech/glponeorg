export type GuideSection = { heading: string; body: string };

export type Guide = {
  slug: string;
  title: string;
  summary: string; // 1–2 sentence card summary
  reading: number; // minutes
  category: "regulatory" | "clinical" | "money" | "practical";
  updated: string; // ISO YYYY-MM-DD
  sections: GuideSection[]; // structured long-form
};

export const GUIDES: Guide[] = [
  {
    slug: "503a-vs-503b-pharmacies",
    title: "503A vs 503B pharmacies: what the difference actually means for your medication",
    summary:
      "503A and 503B are two different regulatory pathways under which a compounding pharmacy can prepare your medication. The difference matters for safety, quality, and what your provider should be willing to disclose.",
    reading: 7,
    category: "regulatory",
    updated: "2026-05-25",
    sections: [
      {
        heading: "The two pathways at a glance",
        body: "There are two distinct sections of the US Federal Food, Drug, and Cosmetic Act that authorize compounding — section 503A and section 503B. They are very different.\n\nA 503A pharmacy prepares patient-specific compounded medications. That means a licensed prescriber writes a prescription for an individual patient, and the pharmacy compounds that specific preparation for that specific person. 503A pharmacies are licensed by their state pharmacy board and operate under state oversight.\n\nA 503B outsourcing facility is registered with the FDA (not just the state) and can prepare batches of compounded medications without patient-specific prescriptions. 503B facilities operate under cGMP-equivalent standards — the same quality framework as a small manufacturer — and are subject to FDA inspection.",
      },
      {
        heading: "Why this matters for compounded GLP-1s",
        body: "Compounded semaglutide and tirzepatide can legally be prepared via either pathway, but the practical implications differ. 503A patient-specific compounding is more flexible (it can accommodate documented allergies, custom dosing, etc.) but operates under lighter oversight than 503B. 503B batch preparation is more standardized, with per-batch sterility and potency testing typical, but offers less individualization.\n\nNeither pathway produces an FDA-approved drug product. A compounded GLP-1 from either a 503A or a 503B is not Wegovy, Zepbound, Ozempic, or Mounjaro — it is a separately-prepared preparation that happens to contain the same active ingredient. The brand-name versions go through FDA's drug-approval process; compounded preparations do not.",
      },
      {
        heading: "What good disclosure looks like",
        body: "Reputable telehealth providers disclose, in writing: (1) which pathway your medication will be prepared under (503A, 503B, or either depending on the patient and dose), (2) the named pharmacy partner(s) they use, and (3) whether a certificate of analysis is available on request.\n\nThe certificate of analysis (CoA) is a per-batch document showing sterility testing (USP <71>), bacterial endotoxin testing (USP <85>), and potency analysis (typically by HPLC) for the specific batch your medication came from. If your provider can't or won't produce one on request, that's a meaningful negative signal.",
      },
      {
        heading: "Common misconceptions",
        body: "Compounded GLP-1s are sometimes marketed as 'FDA-registered' because the 503B pathway involves FDA registration. That phrasing is accurate but easily misleading — the facility is FDA-registered, but the compounded preparation itself is not an FDA-approved drug product.\n\nSimilarly, some marketing implies that 503B preparations are 'the same as' brand-name product because both are cGMP-equivalent. They are not. The brand-name product is a specific, FDA-reviewed drug with documented bioequivalence, stability, and a specific labeled formulation. A 503B compounded preparation is a separately-produced preparation that the FDA has not reviewed or approved as a drug.",
      },
      {
        heading: "What to ask your provider",
        body: "Three questions that produce more signal than almost any marketing copy:\n\n1. Which pharmacy will dispense my medication, and is that pharmacy 503A, 503B, or both?\n2. Can I see a certificate of analysis for the batch my medication is from, if I request one?\n3. If FDA action changes the compounding landscape (e.g., a Bulks List change), what is the contingency for continuing my treatment?\n\nA provider that can answer all three clearly is operating with a level of transparency that materially exceeds the industry median.",
      },
    ],
  },
  {
    slug: "tirzepatide-vs-semaglutide",
    title: "Tirzepatide vs semaglutide: the head-to-head, simplified",
    summary:
      "The two dominant GLP-1 therapies differ in mechanism, magnitude of effect, and side-effect profile. Here's how to think about which one fits.",
    reading: 8,
    category: "clinical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Different mechanisms",
        body: "Semaglutide is a single-agonist GLP-1 receptor agonist. It mimics the effect of the body's own glucagon-like peptide-1 — slowing gastric emptying, enhancing glucose-dependent insulin secretion, and reducing appetite.\n\nTirzepatide is a dual agonist of both the GLP-1 receptor and the glucose-dependent insulinotropic polypeptide (GIP) receptor. The added GIP activity appears to contribute additional metabolic effect, including on energy expenditure, lipid handling, and possibly central appetite regulation. The result is a larger effect size in most outcomes that have been measured head-to-head.",
      },
      {
        heading: "How they compare in trials",
        body: "In SURPASS-2 (Frías et al., NEJM 2021), tirzepatide 15 mg produced a mean HbA1c reduction of 2.30 percentage points vs 1.86 for semaglutide 1 mg in adults with type 2 diabetes — a roughly 0.45-point greater reduction at the highest doses. Mean weight loss was 11.2 kg with tirzepatide 15 mg vs 5.7 kg with semaglutide 1 mg.\n\nIn obesity-focused trials, SURMOUNT-1 (tirzepatide 15 mg) produced mean weight loss of 22.5% over 72 weeks vs STEP-1 (semaglutide 2.4 mg) at 14.9% over 68 weeks. The trials weren't direct head-to-head at obesity doses, but the effect-size differential is consistent with the SURPASS-2 head-to-head at diabetes doses.",
      },
      {
        heading: "Side-effect profile",
        body: "Both drugs share the same major side-effect category — gastrointestinal symptoms, primarily nausea, diarrhea, vomiting, and constipation — predominantly during dose escalation. Discontinuation rates in trials are broadly similar (4–8% on either drug vs 2–3% on placebo).\n\nTirzepatide may produce slightly more pronounced GI symptoms at the highest doses, consistent with its larger effect size, though the head-to-head data are mixed. There is no clear differential in serious adverse events.",
      },
      {
        heading: "Cost and access",
        body: "FDA-approved brand-name versions of both drugs list in similar ranges: Ozempic and Wegovy (semaglutide) at roughly $900–$1,350/month list before insurance; Mounjaro and Zepbound (tirzepatide) at $1,000–$1,200/month. Eli Lilly's LillyDirect cash-pay program offers reduced pricing on tirzepatide single-dose vials.\n\nCompounded versions of both drugs are substantially less expensive — typically $145–$300/month for semaglutide and $185–$500/month for tirzepatide via legitimate telehealth programs. Compounded versions are not FDA-approved and are not the same as the brand-name drugs.",
      },
      {
        heading: "How to choose",
        body: "For pure weight-loss magnitude with no comorbid indication, tirzepatide has the larger effect size in trials and is the more probable first choice if cost permits. For patients with established cardiovascular disease and obesity, semaglutide 2.4 mg (Wegovy) is the only weight-loss drug with an FDA cardiovascular-risk-reduction indication, based on the SELECT trial.\n\nFor patients on a tight cash budget, the compounded semaglutide price floor is lower than compounded tirzepatide, though both are accessible through reputable telehealth programs. Insurance coverage varies meaningfully between the two, especially for the obesity indication.",
      },
    ],
  },
  {
    slug: "choosing-a-telehealth-provider",
    title: "How to choose a GLP-1 telehealth provider: a six-pillar checklist",
    summary:
      "The factors that actually distinguish a good GLP-1 telehealth program from a marketing-heavy one — distilled into a practical checklist.",
    reading: 6,
    category: "practical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Pillar 1: Clinical protocol and named medical director",
        body: "Look for a provider that names its medical director by full name and credentials, with a verifiable state license. The clinical model should describe individualized prescribing (your dose ladder based on your response and tolerance), not a fixed standing-order protocol applied uniformly to all patients.\n\nRed flag: a website that names no clinician, or where the 'medical team' is depicted only with stock photography. Green flag: a named MD or DO with a state license verifiable through the relevant state medical board's online portal.",
      },
      {
        heading: "Pillar 2: Pharmacy traceability",
        body: "Get this in writing: which compounding pharmacy will dispense your medication, is it 503A or 503B, and is a certificate of analysis (CoA) available on request? Reputable providers disclose this upfront. Marketing copy alone — e.g., 'FDA-registered facility' — is not adequate disclosure. You want a pharmacy name and a pathway.\n\nThe single best disclosure pattern is dual 503A/503B disclosure, where the provider explains which pathway will route your specific prescription and why.",
      },
      {
        heading: "Pillar 3: Outcomes transparency",
        body: "Has the provider published cohort outcomes — mean weight loss, discontinuation rates, common adverse events — for its patient population? Almost no telehealth provider publishes this, which is itself a signal about industry maturity. The few that do tend to be in the higher-transparency tier of our rubric.\n\nIn the absence of published outcomes, ask your provider what their typical discontinuation rate is and how they support patients through GI side effects in weeks 4–12 of titration. The clarity of the answer is informative.",
      },
      {
        heading: "Pillar 4: Flat pricing across the dose ladder",
        body: "GLP-1 dose ladders go from 2.5 mg to 15 mg over 4–6 months. If your $189/month tirzepatide quote applies only to the starting dose, your real cost at maintenance will be substantially higher.\n\nLook for flat-rate pricing that explicitly applies across the entire titration ladder. If pricing is not flat, ask for a written quote at the dose you expect to maintain (typically 7.5–15 mg for tirzepatide, 1.0–2.4 mg for semaglutide).",
      },
      {
        heading: "Pillar 5: Lab integration and longitudinal follow-up",
        body: "Initial labs (CBC, comprehensive metabolic panel, lipid panel, HbA1c, TSH) should be required before starting and typically included in the program cost. Beyond initial labs, ask about scheduled clinician check-ins at 4, 12, 26, and 52 weeks — not just an intake visit and a refill flow.\n\nA program that describes itself as 'medication-only' is making a transactional pitch. A program that emphasizes a 12-month relationship with documented check-ins is making a clinical pitch. The latter is what produces durable outcomes in the published trials.",
      },
      {
        heading: "Pillar 6: Regulatory clarity",
        body: "Does the provider clearly explain that compounded GLP-1 medications are not FDA-approved drug products and are not the same as the brand-name versions? Or does it describe its product as 'the same as' or 'equivalent to' Mounjaro, Zepbound, Ozempic, or Wegovy?\n\nMisleading equivalence claims have been the subject of FDA warning letters to multiple telehealth companies. A provider that's clear about what compounded medications are — and what they are not — is operating with the regulatory clarity our rubric requires.",
      },
    ],
  },
  {
    slug: "labs-before-starting-glp-1",
    title: "What labs you'll need before starting GLP-1 treatment",
    summary:
      "The standard baseline lab panel before starting a GLP-1, what each test screens for, and what to expect for follow-up.",
    reading: 5,
    category: "clinical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "The standard baseline panel",
        body: "Most reputable GLP-1 telehealth programs require five baseline tests before starting therapy:\n\n• Complete blood count (CBC) — screens for anemia and infection\n• Comprehensive metabolic panel (CMP) — kidney function, liver enzymes, electrolytes, glucose\n• Lipid panel — total cholesterol, LDL, HDL, triglycerides\n• HbA1c — three-month average blood glucose; flags diabetes or prediabetes\n• TSH — screens for thyroid dysfunction, which can mimic or coexist with metabolic disorders\n\nSome programs additionally request fasting insulin, C-peptide, or hs-CRP as part of a more detailed metabolic workup.",
      },
      {
        heading: "Why each one matters",
        body: "Renal function (from the CMP) matters because GLP-1 receptor agonists can rarely cause acute kidney injury, particularly in the setting of dehydration from GI side effects. Liver enzymes provide a baseline against which to interpret any post-treatment elevations.\n\nHbA1c distinguishes patients with overt diabetes (who may need a different starting protocol) from non-diabetic patients seeking treatment for obesity. TSH catches a meaningful minority of patients whose 'weight problem' is actually under-treated hypothyroidism.\n\nLipid panel and CBC provide the baseline against which longitudinal improvements can be measured — most patients see lipid improvements after sustained weight loss on GLP-1 therapy.",
      },
      {
        heading: "Where labs get drawn",
        body: "Most telehealth programs partner with Quest Diagnostics or LabCorp, allowing you to walk into any of their locations. Some programs offer at-home phlebotomy for an added fee. The order is placed by your prescribing clinician under their state license.\n\nLabs are typically included in the program cost at established providers. If a program charges separately for labs without clear pricing, that's a transparency signal worth noting.",
      },
      {
        heading: "Follow-up labs",
        body: "Typical follow-up cadence at well-run programs: repeat CMP and HbA1c at 12 weeks (catches early renal or hepatic changes; documents glucose response), repeat lipid panel at 26 weeks (documents lipid improvements that often emerge with sustained weight loss), and an annual repeat of the full baseline panel.\n\nIf your program does not have a documented follow-up lab cadence, that's a signal that you're in a transactional medication-dispensing relationship rather than a longitudinal clinical relationship.",
      },
    ],
  },
  {
    slug: "managing-glp-1-side-effects",
    title: "Managing GLP-1 side effects: a practical playbook",
    summary:
      "Most GLP-1 side effects are GI, predictable, and manageable. Here's the practical playbook for getting through dose escalation.",
    reading: 6,
    category: "practical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "What to expect, and when",
        body: "The dominant side effects of GLP-1 therapy are gastrointestinal: nausea, vomiting, diarrhea, constipation, abdominal pain, and reduced appetite. These are most pronounced during dose escalation — typically the first 4–12 weeks — and tend to attenuate at any given dose after 2–3 weeks of exposure to it.\n\nIn the pivotal phase-3 trials, the most common AEs were nausea (in roughly 35–50% of treated patients), diarrhea (10–20%), and vomiting (5–15%). Most events were mild to moderate. Discontinuation due to AEs was in the range of 4–8% across the trials.",
      },
      {
        heading: "Day-to-day GI management",
        body: "Practical tactics that help most patients:\n\n• Smaller, more frequent meals — large meals are most likely to provoke nausea because the drug slows gastric emptying.\n• Lower-fat meals during the first few days after each dose escalation — high-fat meals sit in the stomach longer.\n• Hydration — many patients reduce fluid intake along with food intake, which exacerbates fatigue, dizziness, and constipation.\n• Plain electrolyte beverages on days when nausea is worst.\n• Eating early in the day if injection day causes evening nausea.\n\nFor constipation: stool softeners (docusate) and bulk fiber (psyllium) are typically first-line. For diarrhea: loperamide for symptomatic relief is acceptable in the absence of fever or bloody stools.",
      },
      {
        heading: "When to slow down dose escalation",
        body: "If GI symptoms at a given dose persist beyond 2–3 weeks and meaningfully impair your daily function, work with your prescriber to delay the next titration step — or to step back down to the previous dose. There is no clinical advantage to rushing through the titration ladder, and considerable downside in terms of tolerability and adherence.\n\nMost reputable programs build pause-and-step-back logic into their dose-escalation protocols. If your program treats the titration ladder as a fixed automatic schedule, that's worth flagging with your clinician.",
      },
      {
        heading: "Red flags that need clinical attention",
        body: "Some symptoms warrant prompt clinician contact and may require pausing therapy:\n\n• Severe upper-abdominal pain radiating to the back (possible pancreatitis)\n• Persistent vomiting that prevents fluid intake (dehydration risk; acute kidney injury risk)\n• Severe right-upper-quadrant pain (possible gallbladder issues)\n• Visual disturbances or persistent headaches\n• Signs of acute kidney injury (decreased urination, swelling, fatigue)\n\nMost programs have a documented escalation pathway for these situations. Knowing how to reach a clinician outside business hours is worth confirming during intake.",
      },
    ],
  },
  {
    slug: "switching-glp-1-providers",
    title: "Switching telehealth providers without disrupting your treatment",
    summary:
      "How to switch from one GLP-1 telehealth program to another while maintaining dose continuity and avoiding the common transition pitfalls.",
    reading: 5,
    category: "practical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Why patients switch",
        body: "The most common reasons patients switch GLP-1 telehealth providers, in our reviewer experience: (1) the dose-step pricing model at the original provider raised the maintenance-phase cost meaningfully above the introductory quote; (2) the original provider's clinical relationship is thin (no follow-up, hard to reach a clinician); (3) pharmacy disclosure turned out to be weaker than implied at signup; (4) the original provider sunset its compounded program, leaving the patient to find a continuation pathway.",
      },
      {
        heading: "Get your medical records first",
        body: "Before switching, obtain a copy of your medical records from the current program. This typically includes the clinical intake notes, prescribed regimen, lab results, and any documented adverse events. Most programs will provide this on request under HIPAA at no charge.\n\nHaving documentation of the dose you're currently on, the pharmacy partner that's been dispensing, and the date of your last dose lets the new program continue your regimen without restarting the titration ladder — assuming clinical appropriateness.",
      },
      {
        heading: "Plan the timing of the switch",
        body: "GLP-1s are dosed weekly. The cleanest switch timing is so that your new program's first shipment arrives before your last vial from the prior program runs out. Build in a 1–2 week buffer for intake delays.\n\nIf you must pause therapy briefly, a 1–2 week gap is usually tolerated — though some patients report a brief return of appetite. A gap of more than 4 weeks typically warrants stepping back one dose level when resuming, due to loss of GI tolerance.",
      },
      {
        heading: "What to ask the new provider during intake",
        body: "Three questions that surface most of what matters: (1) Can you continue me on my current dose, or do I need to step back? (2) Which named pharmacy will be dispensing, and is it 503A or 503B? (3) What's the price at the dose I expect to maintain — not just the introductory dose?\n\nA program that answers all three clearly during intake is operating at a transparency level meaningfully above the industry median.",
      },
    ],
  },
  {
    slug: "insurance-coverage-glp-1",
    title: "Insurance coverage for GLP-1s: the realistic landscape",
    summary:
      "Coverage for GLP-1s varies dramatically by indication, payer, and employer benefit design. Here's the realistic landscape.",
    reading: 7,
    category: "money",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Coverage depends on the indication",
        body: "Insurance coverage for GLP-1 receptor agonists varies enormously by what they're prescribed for. The four FDA-approved indications break out very differently:\n\n• Type 2 diabetes (Ozempic, Mounjaro): broadly covered, often as a preferred second-line agent after metformin. Prior authorization is common but routinely approved.\n• Chronic weight management (Wegovy, Zepbound, Saxenda): coverage is highly variable. Many commercial plans explicitly exclude weight-loss medications; many state Medicaid programs do not cover them; Medicare does not currently cover them for weight management alone.\n• Cardiovascular risk reduction (Wegovy): since the March 2024 label expansion, coverage has improved for the secondary-prevention population (established CVD + obesity), often through clinical-policy alignment with statin coverage.\n• Obstructive sleep apnea (Zepbound, approved December 2024): coverage frameworks are still being built; expect prior-authorization complexity through 2026.",
      },
      {
        heading: "How to read your benefits",
        body: "Look in your plan documents for these terms: 'anti-obesity medications' (often explicitly excluded), 'weight-loss drugs' (often excluded), 'GLP-1 receptor agonists for type 2 diabetes' (often covered with PA). The presence or absence of an explicit weight-loss exclusion is the most important signal.\n\nIf your plan covers weight-loss medications, expect prior authorization that typically requires documented BMI ≥ 30 (or BMI ≥ 27 with a weight-related comorbidity), and often documented prior attempts at lifestyle modification.",
      },
      {
        heading: "When compounded is the bridge",
        body: "Compounded GLP-1s through telehealth programs are by definition cash-pay — insurance does not reimburse for compounded preparations. The compounded route is most useful as a bridge in two specific situations: (1) you have no coverage for weight-loss medications and brand-name cost is prohibitive; (2) you have a documented allergy to an excipient in the brand-name product where compounded preparation can substitute.\n\nFor patients with strong coverage for brand-name GLP-1s under a diabetes or CV-risk indication, compounded routes are rarely the right answer.",
      },
      {
        heading: "Manufacturer cash-pay programs",
        body: "Eli Lilly's LillyDirect program offers reduced cash-pay pricing on tirzepatide single-dose vials, typically $399–$599/month depending on dose. Novo Nordisk has historically maintained narrower cash-pay programs.\n\nThese sit between brand-name list pricing and compounded pricing, with the advantage of being authentic FDA-approved product. For patients who can stretch to that price band, they're often the right answer.",
      },
    ],
  },
  {
    slug: "compounded-vs-brand-name",
    title: "Compounded vs brand-name GLP-1: what you're actually buying",
    summary:
      "A direct comparison of what compounded and brand-name GLP-1 medications are — and what they aren't.",
    reading: 6,
    category: "regulatory",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Different products, same active ingredient",
        body: "Brand-name GLP-1s — Mounjaro, Zepbound, Ozempic, Wegovy, Rybelsus, Saxenda, Victoza — are FDA-approved drug products. They went through the FDA's drug-approval process, including bioequivalence and stability data, clinical trials documenting safety and efficacy at specific doses, and ongoing post-marketing surveillance.\n\nCompounded versions of semaglutide or tirzepatide are not FDA-approved drug products. They are preparations made by licensed compounding pharmacies (503A) or FDA-registered outsourcing facilities (503B) that contain the same active pharmaceutical ingredient — but as separately-prepared preparations, not as the FDA-reviewed drug product.",
      },
      {
        heading: "Why the distinction matters",
        body: "Practically: the FDA-approved versions have a specific labeled formulation (with inactive ingredients chosen for stability), known shelf life under specific storage conditions, and bioequivalence data supporting their dose-response curves. Compounded preparations may have different inactive ingredients, different stability profiles, and have not been individually evaluated for bioequivalence to the brand-name product.\n\nFor most patients on legitimate programs with reputable pharmacy partners, the active drug behaves clinically similarly to the brand-name version. But 'similarly' is not 'identically,' and the regulatory framing matters legally and clinically.",
      },
      {
        heading: "When compounded is the right answer",
        body: "Compounded GLP-1s are the right answer when: (1) the cost differential is large enough to materially affect treatment access, (2) you've selected a provider with documented pharmacy disclosure and CoA availability, (3) your clinical picture is straightforward (no complicating allergies, no unusual dose requirements).\n\nCompounded is not the right answer when: insurance coverage for brand-name product is robust; you have allergies to excipients common in compounded preparations; you have a clinical situation requiring tight bioavailability predictability (e.g., advanced T2D with brittle glycemic control).",
      },
      {
        heading: "What about safety?",
        body: "Reputable 503A and 503B preparations have safety profiles broadly similar to the brand-name products at equivalent doses, based on aggregate post-market experience and on quality testing of compounded preparations.\n\nUnsafe outliers exist — and have been the subject of FDA warning letters and state pharmacy-board actions — typically in pharmacies that don't perform per-batch sterility and potency testing, or in telehealth programs that source from offshore APIs of unverified provenance. Disclosure of pharmacy partner and CoA availability are the two best practical signals of safety posture.",
      },
    ],
  },
  {
    slug: "glp-1-dosing-ladder-explained",
    title: "The GLP-1 dose ladder, explained",
    summary:
      "Why GLP-1 dosing starts low and climbs slowly — and what the typical schedule looks like for semaglutide and tirzepatide.",
    reading: 5,
    category: "clinical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "Why dose escalation is slow",
        body: "GLP-1 receptor agonists are dose-escalated over 4–6 months rather than started at the maintenance dose, for one main reason: GI tolerance. The dominant side effects — nausea, vomiting, diarrhea, constipation — are most pronounced during dose increases and largely attenuate within 2–3 weeks at any given dose.\n\nStarting at the maintenance dose would produce severe GI symptoms in a majority of patients and high discontinuation rates. The slow ladder gives the gut time to adapt to each step and improves long-term tolerability.",
      },
      {
        heading: "Tirzepatide: 2.5 → 15 mg over 24 weeks",
        body: "The standard tirzepatide titration schedule, per FDA labeling for both Mounjaro and Zepbound:\n\n• Weeks 1–4: 2.5 mg weekly (initiation dose; not therapeutic)\n• Weeks 5–8: 5 mg weekly\n• Weeks 9–12: 7.5 mg weekly\n• Weeks 13–16: 10 mg weekly\n• Weeks 17–20: 12.5 mg weekly\n• Week 21+: 15 mg weekly (maintenance)\n\nSome patients reach their effective dose at 7.5 or 10 mg and don't need to climb further. Others tolerate 15 mg well and stay there. The maintenance dose is set by clinical effect and tolerability, not a fixed target.",
      },
      {
        heading: "Semaglutide: 0.25 → 2.4 mg over ~16 weeks (obesity dose)",
        body: "The Wegovy (semaglutide for obesity) titration schedule:\n\n• Weeks 1–4: 0.25 mg weekly\n• Weeks 5–8: 0.5 mg weekly\n• Weeks 9–12: 1.0 mg weekly\n• Weeks 13–16: 1.7 mg weekly\n• Week 17+: 2.4 mg weekly (maintenance)\n\nFor Ozempic (semaglutide for T2D), maintenance doses are typically 0.5, 1.0, or 2.0 mg weekly depending on glycemic response.",
      },
      {
        heading: "Pause-and-step-back",
        body: "If symptoms at a given dose persist beyond 2–3 weeks and meaningfully impair daily function, the right move is usually to stay at the current dose for another 4 weeks before re-attempting escalation — or to step back one level.\n\nThere is no clinical advantage to rushing through the ladder. Reaching maintenance dose three months later than the standard schedule with good tolerance is a meaningfully better outcome than reaching it on schedule but discontinuing therapy because of intolerable GI symptoms.",
      },
    ],
  },
  {
    slug: "cold-chain-shipping-glp-1",
    title: "Cold-chain shipping: how your GLP-1 actually gets to you",
    summary:
      "GLP-1 medications require refrigeration. How cold-chain shipping works, what can go wrong, and what to look for.",
    reading: 5,
    category: "practical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "The temperature window",
        body: "All GLP-1 receptor agonists — brand-name and compounded — are required to be stored refrigerated, typically at 36–46°F (2–8°C). The labeling for Wegovy, Zepbound, Ozempic, and Mounjaro all specify refrigeration as the standard storage condition, with limited windows of room-temperature exposure permitted (typically 21 or 28 days at room temperature, depending on product, before discarding).\n\nCompounded preparations should follow the same storage parameters; the active ingredient's stability profile is similar.",
      },
      {
        heading: "How cold-chain shipping works",
        body: "Shipments are packed in insulated containers with refrigerated gel packs (sometimes phase-change material) calibrated to maintain the 36–46°F window for the documented transit time — typically 24–72 hours. Reputable pharmacy partners include a temperature indicator strip or QR-coded temperature log inside the package, allowing you to verify that the cold chain was maintained in transit.\n\nShipping is typically scheduled for early-week delivery to avoid weekend warehouse holds. Most programs require a signature on delivery to prevent doorstep heat exposure.",
      },
      {
        heading: "What to do if a shipment arrives warm",
        body: "If your package arrives with a clearly broken cold chain — gel packs fully thawed and warm, the temperature indicator showing excursion, or the medication itself notably warm — do not inject. Contact the pharmacy or telehealth provider immediately to request a replacement.\n\nReputable providers will replace mishandled shipments at no charge and route the next shipment via expedited delivery. The replacement policy is worth confirming at intake.",
      },
      {
        heading: "Home storage",
        body: "Once received, store in your refrigerator — not the freezer. Freezing destroys peptide drugs. The vegetable or middle shelf is typically ideal; door storage is acceptable but exposes the medication to more temperature swings.\n\nIf you need to travel with your medication, insulated cooler bags with frozen gel packs maintain temperature for 12–24 hours. For longer travel, request a written letter from your prescribing clinician documenting the medical necessity of refrigerated medication — useful at airport security and at some border crossings.",
      },
    ],
  },
  {
    slug: "maintenance-after-goal-weight",
    title: "Maintaining results after reaching goal weight on GLP-1",
    summary:
      "Stopping GLP-1 therapy after reaching goal weight typically leads to regain. Here's what the data show and how to plan.",
    reading: 6,
    category: "clinical",
    updated: "2026-05-25",
    sections: [
      {
        heading: "What the withdrawal trials show",
        body: "STEP-4 (semaglutide) and SURMOUNT-4 (tirzepatide) both addressed the same question: what happens when patients who reach a substantial weight loss withdraw from GLP-1 therapy?\n\nIn STEP-4, patients who completed a 20-week run-in losing a mean 10.6% of body weight were randomized to continue semaglutide or switch to placebo. Over the next 48 weeks, the continuation group lost an additional 7.9% on average; the placebo group regained 6.9%. Roughly two-thirds of the weight lost during the run-in was regained after withdrawal.\n\nSURMOUNT-4 produced similar results for tirzepatide, with continued therapy adding modest further loss and placebo switch producing a regain of approximately 14 percentage points of body weight.",
      },
      {
        heading: "The clinical implication",
        body: "GLP-1 therapy for obesity is, like most therapies for chronic conditions, best understood as a long-term intervention rather than a short course. The metabolic adaptations that follow weight loss — reduced leptin, increased ghrelin, lowered resting energy expenditure — push the body back toward its prior set point in the absence of ongoing pharmacologic support.\n\nThis is not a failure of the patient, the drug, or the discipline framework. It is a consistent feature of obesity physiology that the trials make unusually clear.",
      },
      {
        heading: "Maintenance dosing strategies",
        body: "Several maintenance patterns are in clinical use, though none have head-to-head outcomes data:\n\n• Continuation at the same effective dose indefinitely\n• Step-down to the next-lower dose once goal weight is achieved\n• Extended interval dosing (e.g., every 10–14 days instead of weekly) in selected patients\n\nThe step-down approach is most common in clinical practice and is supported by the SURMOUNT-4 design (which compared continuation vs withdrawal, not step-down). The intensity of any maintenance regimen should be calibrated to the individual patient's regain trajectory.",
      },
      {
        heading: "Cost planning for the long term",
        body: "If maintenance is the realistic expectation, the cost-over-time calculation differs meaningfully from a short-course framing. At $189/month compounded tirzepatide, ten years of maintenance is roughly $22,700; at $1,000/month brand-name pricing, it's $120,000.\n\nThis is part of why pharmacy traceability and pricing-transparency disclosure matter so much at provider selection — you're making a multi-year decision, not a one-year one.",
      },
    ],
  },
  {
    slug: "bmi-eligibility-criteria",
    title: "BMI eligibility for GLP-1 weight-loss treatment",
    summary:
      "The BMI thresholds in FDA labeling, how clinicians actually apply them, and what to do if you're close to a threshold.",
    reading: 4,
    category: "regulatory",
    updated: "2026-05-25",
    sections: [
      {
        heading: "FDA labeling thresholds",
        body: "Wegovy (semaglutide 2.4 mg) and Zepbound (tirzepatide) are FDA-approved for chronic weight management in adults with:\n\n• BMI ≥ 30, OR\n• BMI ≥ 27 with at least one weight-related comorbidity (hypertension, dyslipidemia, type 2 diabetes, obstructive sleep apnea, cardiovascular disease)\n\nSaxenda (liraglutide 3.0 mg) carries the same thresholds. The pediatric labels for Wegovy and Zepbound extend treatment eligibility to adolescents 12+ with BMI ≥ 95th percentile for age.",
      },
      {
        heading: "How clinicians apply them",
        body: "Most telehealth and brick-and-mortar programs treat the FDA labels as floor criteria rather than ceiling criteria. Almost all reputable programs will treat at BMI ≥ 30 without further qualification, and at BMI ≥ 27 if a weight-related comorbidity is documented.\n\nSome programs will treat at BMI 25–27 in the presence of strong metabolic features (impaired fasting glucose, high triglycerides, hepatic steatosis) — off-label but clinically defensible. Programs that treat freely at BMI < 25 are operating outside both label and clinical consensus, and warrant skepticism.",
      },
      {
        heading: "If you're close to a threshold",
        body: "If your BMI is 26–27 without a comorbidity, the path to coverage is typically through documenting one of the qualifying conditions — most commonly prediabetes (HbA1c 5.7–6.4%), dyslipidemia, or hypertension. A baseline lab panel often surfaces qualifying findings.\n\nIf your BMI is 25–26 without comorbidities, GLP-1 therapy is harder to justify both clinically and from a payer perspective. Lifestyle-first approaches are typically more appropriate at this level.",
      },
      {
        heading: "BMI is a flawed but useful gate",
        body: "BMI is a population-level screening tool, not an individual clinical measure of body composition. Muscular individuals may have BMI ≥ 30 without adverse metabolic features; thin individuals may have BMI < 25 with high visceral adiposity and metabolic dysfunction.\n\nClinicians vary in how strictly they apply BMI cutoffs. A program that lets you submit your own height/weight without any verification is operating at lower diligence; a program that requires a documented in-office measurement is operating at higher diligence.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
