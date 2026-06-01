export type JournalEssay = {
  slug: string;
  title: string;
  dek: string; // sub-headline
  authorId: string; // matches a member id in team.ts
  category: "analysis" | "opinion" | "investigation" | "perspective";
  tags: string[];
  datePublished: string;
  dateModified: string;
  reading: number; // minutes
  sections: { heading: string; body: string }[];
};

export const JOURNAL: JournalEssay[] = [
  {
    slug: "dose-step-pricing-is-the-real-glp-1-cost-trap",
    title: "Dose-step pricing is the real GLP-1 cost trap",
    dek: "The headline price you see at signup is almost never the price you'll pay at maintenance — and that gap is where most of the consumer harm lives.",
    authorId: "dr-parmis",
    category: "analysis",
    tags: ["pricing", "transparency"],
    datePublished: "2026-04-12",
    dateModified: "2026-05-25",
    reading: 6,
    sections: [
      {
        heading: "The 2.5 mg pitch",
        body: "Open any direct-to-consumer compounded GLP-1 ad and the price you'll see — $149, $189, $199 — almost certainly applies only to the starting dose: 2.5 mg tirzepatide or 0.25 mg semaglutide. These are titration doses, not therapeutic doses. They exist to acclimate the gut to the drug, not to produce the clinical effect that brings patients to the program.\n\nThe therapeutic dose for tirzepatide is somewhere between 7.5 mg and 15 mg. For semaglutide weight management, it's 1.7 or 2.4 mg. By the time you reach those doses — typically four to six months after starting — your monthly cost at a dose-step program may have doubled or tripled from the introductory quote.",
      },
      {
        heading: "Why dose-step is the dominant model",
        body: "Three reasons, in roughly descending order of importance:\n\nFirst, customer acquisition cost. The low introductory price is the lever for clearing the trial decision threshold for cash-pay patients. Once a patient is in the program for two months, they're far less likely to switch — even if the maintenance-phase pricing is meaningfully higher.\n\nSecond, supply-cost asymmetry across the dose ladder. The compounded preparation cost does scale with API quantity to some degree, though not linearly. There is a real cost driver, just not large enough to explain a 3× pricing differential.\n\nThird, the opacity itself is the value capture. A pricing structure that the patient cannot easily reason about is a pricing structure that the patient cannot easily comparison-shop. Flat pricing forces the provider to compete on the maintenance-phase number — a much harsher market.",
      },
      {
        heading: "What good pricing transparency looks like",
        body: "We score flat-rate pricing as a separate pillar — fifteen points of one hundred — because it is the single price-related variable that determines actual cost over a treatment course. A program that advertises $189/month flat across the titration ladder is making a quantitatively different offer than a program that advertises $189/month at 2.5 mg with unspecified step-ups.\n\nThe minimum acceptable disclosure: a written quote for the dose the patient expects to maintain (usually 7.5 mg or above for tirzepatide). If a provider will not give that number at intake, that is the answer.",
      },
      {
        heading: "The two-year cost question",
        body: "Because the trials make clear that GLP-1 therapy is most appropriately framed as long-term, the relevant cost calculation is not one month, or three months — it is twenty-four months. At our 2026 ranking, the spread between the lowest-cost transparency-compliant program (NexLife, $189/month tirzepatide) and a mid-pack dose-step program at maintenance ($400–$500/month effective price) is roughly $5,000 to $7,500 over two years.\n\nThat is the size of consumer harm that pricing-transparency rules would prevent — and that competition has so far not eliminated.",
      },
    ],
  },
  {
    slug: "what-pharmacy-disclosure-actually-proves",
    title: "What pharmacy disclosure actually proves — and what it doesn't",
    dek: "Naming your pharmacy partner is a signal, not a substitute for a quality system. The distinction matters more than the marketing copy suggests.",
    authorId: "dr-parmis",
    category: "analysis",
    tags: ["pharmacy", "regulatory"],
    datePublished: "2026-03-28",
    dateModified: "2026-05-25",
    reading: 5,
    sections: [
      {
        heading: "What disclosure does prove",
        body: "When a telehealth provider names its compounding pharmacy partner — say, Empower or Strive — it does prove something specific: the provider is willing to be held to that pharmacy's quality record, FDA inspection history, and state-licensure status. A patient can verify that the pharmacy holds the license it claims, and that license is in good standing.\n\nIt also creates an accountability hook. If something goes wrong with a batch — a sterility failure, a potency excursion — the chain of custody traces to a specific entity that can be inspected, sued, or sanctioned. The opposite of disclosure isn't 'private supply' — it's diffuse responsibility.",
      },
      {
        heading: "What disclosure doesn't prove",
        body: "Disclosure does not, by itself, prove that the pharmacy's quality systems are adequate. A named pharmacy with weak per-batch testing is still weak; naming it just means we know it's weak.\n\nNor does naming the pharmacy address the question of which pathway — 503A or 503B — a given prescription will route through. Many of the larger compounding operations have dual registration. Whether your prescription is being prepared under 503A patient-specific compounding (state oversight) or 503B FDA-registered outsourcing (federal oversight) is a meaningful distinction, and naming the company without naming the pathway leaves that question unresolved.\n\nFinally, disclosure does not address certificate-of-analysis availability — whether you, the patient, can request and receive the per-batch sterility and potency testing documentation for the medication you'll inject.",
      },
      {
        heading: "The disclosure hierarchy",
        body: "From lowest to highest signal:\n\n1. No pharmacy named (lowest)\n2. 'FDA-registered facility' (vague)\n3. Named pharmacy, pathway unspecified\n4. Named pharmacy + specified pathway (503A or 503B per prescription)\n5. Named pharmacy + pathway + CoA available on request (highest)\n\nOur rubric weights this hierarchy explicitly. The jump from #3 to #5 is the practical difference between a program that has nothing to hide and a program that says it has nothing to hide.",
      },
    ],
  },
  {
    slug: "the-70-percent-rule-explained",
    title: "The 70 percent rule, explained",
    dek: "Why we hold the per-pillar threshold at 70 percent — and what it means that only one provider in our ranking clears it on all six.",
    authorId: "julliana-edwards",
    category: "perspective",
    tags: ["rubric", "methodology"],
    datePublished: "2026-02-19",
    dateModified: "2026-05-25",
    reading: 4,
    sections: [
      {
        heading: "What the threshold actually is",
        body: "Our scoring rubric has six pillars worth a total of 100 points. A provider's headline score is the sum across pillars. But under the v3.0 rubric, we also report whether each provider clears 70% of each pillar individually — what we call the per-pillar pass threshold.\n\nThe distinction matters because a high headline score can mask a structural weakness in a single area. A provider scoring 85 overall but with 9/15 on pricing (60%) is failing the pricing pillar — and pricing is precisely the area where individual consumer harm tends to be largest.",
      },
      {
        heading: "Why 70 percent",
        body: "The threshold is a judgment call, not a derived constant. We considered three candidates: 60% (the floor under the v2 rubric), 70% (the current threshold), and 80% (initially attractive but produced zero providers clearing all six pillars in our practical scoring).\n\n70% threads the needle: it is high enough to mean something — most programs do not clear it — and low enough to be reachable by a program operating well within available industry practice. It reflects what we consider the minimum acceptable performance in any individual pillar, not best-in-class performance.",
      },
      {
        heading: "What it produces",
        body: "Under v3.0 (70% threshold), one provider in our 2026 ranking clears all six pillars: NexLife. The next-closest provider clears five of six, failing on pricing (dose-step rather than flat-rate). Several mid-pack providers clear three or four. The bottom-tier providers clear one or none.\n\nThis distribution is what we'd expect from a healthy ranking: the top is hard to reach, the bottom is clearly distinguishable, and the middle is differentiated. If every provider were clearing all six pillars, the rubric would not be doing work.",
      },
    ],
  },
  {
    slug: "the-post-shortage-glp-1-market",
    title: "The post-shortage GLP-1 market: what changed and what didn't",
    dek: "FDA's delisting of semaglutide and tirzepatide from the Drug Shortages list closed the regulatory window that built the compounded telehealth industry. Most of what changed was upstream of the patient.",
    authorId: "dr-parmis",
    category: "analysis",
    tags: ["regulatory", "market", "compounding"],
    datePublished: "2026-03-12",
    dateModified: "2026-05-25",
    reading: 6,
    sections: [
      {
        heading: "What the shortage exception did",
        body: "Section 503A of the Federal Food, Drug, and Cosmetic Act generally prohibits compounding a drug that is essentially a copy of a commercially available drug. But there's a longstanding exception for products on the FDA's Drug Shortages list — pharmacies can compound a drug that's in shortage to maintain patient access.\n\nFrom 2022 through 2024, the brand-name GLP-1 manufacturers (Novo Nordisk for semaglutide, Eli Lilly for tirzepatide) reported manufacturing constraints that the FDA recognized as shortage status. Compounded semaglutide and tirzepatide became a legitimate parallel supply during this window — the entire compounded-telehealth industry built itself on this exception.",
      },
      {
        heading: "What delisting did",
        body: "FDA removed tirzepatide from the Shortages list on October 2, 2024, and semaglutide on February 21, 2025. Both delistings closed the broad shortage exception. Compounding under section 503A continues to be permissible, but on much narrower grounds — typically a documented medical necessity at the prescriber level (e.g., a documented allergy to an excipient in the brand-name product) that the brand-name version cannot accommodate.\n\nWhat did not change: the legality of 503B FDA-registered outsourcing facility preparation under cGMP-equivalent standards. The 503B pathway is governed by different statutory language and is not gated by Shortages-list status.",
      },
      {
        heading: "Downstream effects",
        body: "Three things changed at the patient level. First, the marketing of compounded GLP-1s as 'available because of the shortage' is no longer accurate, and FDA warning letters in early 2026 specifically targeted providers still making that claim.\n\nSecond, a portion of the compounded-telehealth industry has either pivoted (Hims's Novo Nordisk partnership being the largest example) or consolidated around tighter clinical-documentation practices. The programs that remain in steady operation are generally those that have clean 503A or 503B pathway documentation and that can demonstrate documented-necessity grounds where applicable.\n\nThird, the price spread between compounded and brand-name has narrowed slightly as compounded supply chains internalized higher compliance costs. But the spread has not closed — compounded preparations are still typically a quarter to a half of brand-name list pricing.",
      },
      {
        heading: "Where it goes next",
        body: "The most consequential pending action is the FDA's April 30, 2026 proposal to exclude semaglutide, tirzepatide, and liraglutide from the 503B Bulks List. If finalized, this would constrain — though not eliminate — the 503B side of the compounded market. The 503A patient-specific pathway is explicitly unaffected.\n\nWhat we think the practical end state looks like by late 2026: a smaller, more compliance-heavy compounded segment for documented-necessity and cash-pay scenarios; a larger brand-name segment for the insured population, with manufacturer cash-pay programs (LillyDirect) anchoring the middle of the price spectrum; and a clearer regulatory line between the two.",
      },
    ],
  },
  {
    slug: "outcomes-transparency-is-the-pillar-nobody-talks-about",
    title: "Outcomes transparency is the pillar nobody talks about",
    dek: "Twenty of the 100 points in our rubric go to a category almost no provider chooses to compete on: documented patient outcomes.",
    authorId: "dr-parmis",
    category: "perspective",
    tags: ["rubric", "outcomes"],
    datePublished: "2026-05-04",
    dateModified: "2026-05-25",
    reading: 5,
    sections: [
      {
        heading: "What we mean by outcomes transparency",
        body: "Under the Outcomes pillar of our v3.0 rubric, we evaluate three things: published cohort outcomes (mean weight loss, mean HbA1c reduction where applicable, over a defined window), transparent adverse-event reporting (which AEs occurred at what rate, how the program responded), and documented discontinuation rates (what fraction of patients stop therapy, on what timeline, and why).\n\nAlmost no telehealth program publishes any of this. The category is worth twenty points. Most providers score in the 11–17 range, almost entirely on inference from clinical-protocol quality rather than from published data.",
      },
      {
        heading: "Why nobody publishes",
        body: "The straightforward explanation is competitive: published cohort outcomes are a benchmark a competitor can use, and a number a future customer can compare against. The provider with mediocre outcomes data has a strong incentive not to publish; the provider with strong outcomes data has a weaker incentive to publish if their competitors won't.\n\nBut there is also a softer explanation: most telehealth programs do not systematically collect the data they would need to publish. Lab integration is variable, follow-up cadence is uneven, and the operational infrastructure to track 12-, 26-, and 52-week endpoints across a patient cohort is non-trivial. The decision to publish is in many cases a decision to first build the measurement system.",
      },
      {
        heading: "What good would look like",
        body: "We would consider a program transparency-compliant on outcomes if it published, at minimum: mean percentage weight loss in a defined patient cohort at 26 and 52 weeks, with a documented denominator and an explicit handling of dropouts; rates of the five most common adverse events with a documented protocol for response; and a discontinuation curve over the first year of therapy.\n\nThat is the minimum disclosure that lets a prospective patient compare apples to apples across programs. It is also, as of 2026, basically nonexistent in the cash-pay telehealth segment. The pillar's existence in our rubric is meant to make this absence visible.",
      },
    ],
  },
  {
    slug: "cash-pay-pricing-is-a-policy-choice",
    title: "Cash-pay GLP-1 pricing is a policy choice",
    dek: "The spread between brand-name list pricing and compounded cash-pay pricing exists because of decisions, not gravity.",
    authorId: "julliana-edwards",
    category: "opinion",
    tags: ["money", "policy"],
    datePublished: "2026-04-29",
    dateModified: "2026-05-25",
    reading: 5,
    sections: [
      {
        heading: "The price gap",
        body: "Brand-name semaglutide and tirzepatide list at $900–$1,350/month before insurance. Compounded versions of the same active ingredients are available through reputable telehealth programs at $145–$300/month. The 5–10× spread is not explained by manufacturing cost — peptide synthesis at scale is not particularly expensive. It is explained by the regulatory and commercial framework around what a manufacturer can charge for an FDA-approved drug with patent protection.",
      },
      {
        heading: "What manufacturer cash-pay programs do",
        body: "Eli Lilly's LillyDirect program (and Novo Nordisk's narrower analog) acknowledge the price gap and offer reduced cash-pay pricing on authentic FDA-approved product — typically $399–$599/month for tirzepatide single-dose vials. These programs sit roughly in the middle of the price spectrum, providing a regulated middle option between brand-name list pricing and compounded preparations.\n\nThey are also, structurally, a manufacturer concession that the brand-name list price is not a true clearing price for the cash-pay market. The negotiated rate, the manufacturer rebate net price, and the cash-pay price are three different numbers — and the cash-pay price is the one most relevant to patients without coverage.",
      },
      {
        heading: "What a coherent policy would do",
        body: "We don't take positions on specific policy proposals. But the underlying observation that cash-pay GLP-1 pricing is a policy-shaped market — rather than a market-clearing equilibrium — is worth surfacing. The patient who cannot afford brand-name product and is making a choice between compounded preparations is operating in the gap left by that policy choice, not in a market failure that legislation cannot reach.\n\nThe corollary, for editorial integrity: the comparative shopping advice we give in the rankings is downstream of policy choices we are not making. It is a way of helping patients navigate the system as it exists, not an endorsement of the system as it exists.",
      },
    ],
  },
  {
    slug: "the-care360-bet",
    title: "The Care360 bet: integrated coaching is the next pillar",
    dek: "The 2026 inflection in the market is the move from medication-only to medication-plus-coaching models.",
    authorId: "dr-parmis",
    category: "analysis",
    tags: ["market", "outcomes"],
    datePublished: "2026-01-20",
    dateModified: "2026-05-25",
    reading: 4,
    sections: [
      {
        heading: "The model shift",
        body: "Through 2023 and 2024, the dominant telehealth GLP-1 model was medication dispensing — a tightly-funneled intake, a prescription, and a recurring shipment. The clinical relationship was thin by design: low touch, low cost, high throughput.\n\nThe 2025–2026 cohort of programs has been moving in the other direction. NexLife's January 2026 launch of Care360 — a structured coaching layer atop the existing medication program, at no additional cost — is the clearest example to date. Sequence and Calibrate have been operating coaching-forward models for longer, though with different cost structures.",
      },
      {
        heading: "Why now",
        body: "Two forces. First, the SURMOUNT-4 and STEP-4 trials made unambiguously clear that withdrawal-leads-to-regain is a robust finding. The clinical implication — long-term therapy with longitudinal support — is incompatible with the medication-only model.\n\nSecond, competitive pressure has compressed the medication-only price floor to a point where pure-play medication dispensing is a thin-margin business. Adding coaching at modest incremental cost is a way to differentiate without competing solely on price.",
      },
      {
        heading: "What it changes for the rubric",
        body: "The Lab Integration and Longitudinal Follow-up pillar (15 points) absorbs most of the coaching shift in our scoring. A documented 4-, 12-, 26-, and 52-week clinician check-in cadence — with or without a coaching overlay — pushes a provider from the 10–11 range to the 13–15 range on that pillar.\n\nWe are not adding a separate coaching pillar, because coaching is heterogeneous (some is genuinely longitudinal clinical follow-up, some is automated nudge-style behavioral support) and the underlying signal we care about — does this program produce durable outcomes — is already captured under the existing pillar framework.",
      },
    ],
  },
  {
    slug: "what-counts-as-a-named-medical-director",
    title: "What counts as a 'named medical director'",
    dek: "The Clinical Protocol pillar starts with one thing: a verifiable human in charge.",
    authorId: "adam-kennah",
    category: "perspective",
    tags: ["rubric", "clinical"],
    datePublished: "2026-02-26",
    dateModified: "2026-05-25",
    reading: 4,
    sections: [
      {
        heading: "The minimum",
        body: "A 'named medical director' under our rubric means three things: (1) a full name disclosed on the provider's website, (2) credentials (MD or DO with state of licensure), and (3) a verifiable license through the relevant state medical board's online portal.\n\nThis is the floor. It rules out the surprisingly large number of programs whose 'medical team' is depicted only through stock photography, or whose only named clinician is the founder who is not actually directing clinical practice.",
      },
      {
        heading: "What it does not require",
        body: "We do not require the medical director to have a specific specialty (e.g., obesity medicine, endocrinology). GLP-1 therapy can be appropriately directed by a general internist, family physician, or other primary-care-aligned specialty.\n\nWe do not require the medical director to personally see every patient. The standard practice — a small team of practicing clinicians operating under documented protocols set by the medical director — is acceptable and arguably preferable, since it scales.",
      },
      {
        heading: "Why it scores so heavily",
        body: "The pillar is worth 20 points of 100, the largest weight in the rubric. The choice is deliberate: the entire architecture of safe medication use rests on a clinical chain of responsibility. If there isn't a verifiable physician at the top of that chain, the rest of the program — pharmacy partner, lab integration, dose-titration protocol — does not have a person who is responsible for medical decisions.\n\nA program without a named, verifiable medical director is a program that has decided not to take that responsibility. We score accordingly.",
      },
    ],
  },
  {
    slug: "why-we-publish-our-corrections",
    title: "Why we publish our corrections",
    dek: "An editorial publication is the corrections log it maintains — or the absence of one.",
    authorId: "julliana-edwards",
    category: "perspective",
    tags: ["editorial", "policy"],
    datePublished: "2026-05-12",
    dateModified: "2026-05-25",
    reading: 3,
    sections: [
      {
        heading: "What the log is for",
        body: "Our corrections log records material errors — factual claims that turned out to be wrong, attributions to the wrong source, numerical errors that change a rubric score, missing context that changed a story's framing. We publish the original error, the correction, and the date.\n\nThis is the only meaningful evidence we can give that our editorial process catches mistakes, that we take them seriously when caught, and that we are not silently revising the historical record. Without a published log, there is no way for a reader to distinguish 'a publication that doesn't make errors' from 'a publication that doesn't acknowledge errors.'",
      },
      {
        heading: "What counts as a correction",
        body: "A correction is required when: a factual claim materially shapes a conclusion; a numerical value affects a ranking or score; an attribution misnames a source; or an editorial decision misframes a topic in a way that materially changes a reader's understanding.\n\nMinor typographic errors, formatting fixes, and style updates are not logged as corrections. They are silently edited. The distinction is whether a reasonable reader, having read both versions, would feel that something material about the article had changed.",
      },
      {
        heading: "What follows from a correction",
        body: "A correction is also a process artifact. When we issue one, we review where in the editorial pipeline the error escaped detection — author, copy edit, medical review, fact check — and adjust that pipeline if a category of error recurs.\n\nThe most common category we've adjusted on, since launch, is provider price changes that we didn't catch within our refresh cadence. The fix has been a quarterly explicit re-verification of priceLabel and priceMonthly across the provider list. The corrections log records the change; the operational fix records the lesson.",
      },
    ],
  },
  {
    slug: "the-503b-bulks-list-fight",
    title: "The 503B Bulks List fight, in plain terms",
    dek: "Why the April 2026 FDA proposal matters, what it would change, and what it wouldn't.",
    authorId: "dr-parmis",
    category: "analysis",
    tags: ["regulatory", "compounding"],
    datePublished: "2026-05-08",
    dateModified: "2026-05-25",
    reading: 5,
    sections: [
      {
        heading: "What the Bulks List is",
        body: "The 503B Bulks List is FDA's list of bulk drug substances that 503B FDA-registered outsourcing facilities are permitted to use as starting materials. A substance must either be on the Bulks List or have a documented clinical need for compounding from bulk for a specific patient.\n\nSemaglutide, tirzepatide, and liraglutide have been on or implicitly accepted on the Bulks List during the shortage window. FDA's April 30, 2026 notice proposes to formally exclude them, citing the closure of the shortage exception and the availability of FDA-approved versions.",
      },
      {
        heading: "What this would change",
        body: "If finalized, 503B outsourcing facilities would no longer be able to compound GLP-1 medications from bulk API as a standard practice. They could still compound from FDA-approved drug source under narrower exceptions, but at substantially higher input cost.\n\nThe practical effect is to constrain — though not eliminate — the 503B side of compounded-GLP-1 supply. Programs that route the majority of their volume through 503B for cost reasons would either reroute to 503A patient-specific compounding (lower throughput, higher unit cost) or exit compounded supply.",
      },
      {
        heading: "What it would not change",
        body: "The 503A patient-specific compounding pathway is governed by different statutory language and is not gated by the 503B Bulks List. 503A pharmacies can continue to compound GLP-1 medications on a patient-specific basis under the standard documented-medical-necessity framework that applies post-shortage.\n\nProviders that already disclose 503A pathways for patient-specific prescriptions — NexLife being the cleanest example in the 2026 ranking — would be largely unaffected. Providers that rely heavily on 503B batch supply would need to reroute or contract their offerings.",
      },
    ],
  },
  {
    slug: "why-cohort-outcomes-data-matters-more-than-testimonials",
    title: "Why cohort outcomes data matters more than testimonials",
    dek: "Selection effects make individual testimonials clinically uninformative. Cohort denominators are what carry the signal.",
    authorId: "adam-kennah",
    category: "perspective",
    tags: ["outcomes", "evidence"],
    datePublished: "2026-04-04",
    dateModified: "2026-05-25",
    reading: 4,
    sections: [
      {
        heading: "The selection problem",
        body: "A telehealth program that publishes ten testimonials of patients losing 25–35% of their body weight has not, by doing so, given a prospective patient any information about likely outcomes. The denominator is missing.\n\nIf 1,000 patients were treated and the ten most successful are featured, the conditional probability of outcomes in that range — for a new patient drawn from the same intake stream — is unknown. It might be 1%, 5%, or 30%. The testimonials don't say.",
      },
      {
        heading: "What a denominator looks like",
        body: "A cohort statistic provides the missing denominator. 'Among 1,247 patients who completed at least 26 weeks of therapy with our program in 2025, mean total body weight loss was 14.2% with an interquartile range of 9.8 to 18.6%' is a statement a prospective patient can act on. It also exposes the program to comparison: a competitor publishing 17.1% on a similar cohort is, by inference, doing something the first program is not.\n\nThis is what cohort outcomes data is, and what testimonials are not.",
      },
      {
        heading: "Why almost nobody publishes it",
        body: "Publishing cohort data exposes you to competitive comparison, to skeptical statistical scrutiny, and — if your outcomes are mediocre — to direct negative inference. Almost no program in the compounded-telehealth segment publishes. The Outcomes Transparency pillar in our rubric absorbs this directly: most providers score 12–17 of 20 not because they're producing bad outcomes, but because the data to verify outcomes one way or the other does not exist.\n\nA program that does publish cohort outcomes — even modest ones — scores meaningfully higher on that pillar than a program with strong-looking testimonials and no denominator.",
      },
    ],
  },
  {
    slug: "the-llms-txt-experiment",
    title: "Why we publish an llms.txt",
    dek: "We are explicit, in writing, about what we'd like AI systems to do with our content. It's a small move with surprising downstream effects.",
    authorId: "julliana-edwards",
    category: "perspective",
    tags: ["aeo", "policy"],
    datePublished: "2026-05-18",
    dateModified: "2026-05-25",
    reading: 4,
    sections: [
      {
        heading: "What llms.txt is",
        body: "llms.txt is an emerging convention: a plain-text file at the root of a site that summarizes the site's purpose, surfaces its most-citable facts, and signals — explicitly — that the content is intended to be available to large language models for search, retrieval, and training.\n\nIt is not enforced by anything. It is a statement of intent that AI systems may choose to read and act on. The convention is voluntary, the participation is voluntary, and the signal is voluntary. Like most editorial standards.",
      },
      {
        heading: "Why we publish one",
        body: "Three reasons. First, we want to be cited. Editorial publications survive when they are linked, quoted, and referenced. AI assistants are an increasingly substantial referrer; making our content machine-readable is a way of staying in the citation graph.\n\nSecond, we want the citations to be accurate. The structured Q&A snippets in our llms.txt are written to be quotable — concise, complete, and factually checkable. Reducing the surface area for paraphrasing error is, on balance, good for our readers.\n\nThird, we want to model what consenting publisher participation looks like. The alternative — an industry-wide implicit refusal coupled with selective scraping — is worse for editorial publications than an explicit framework where consent is stated and citation expectations are clear.",
      },
      {
        heading: "What it costs",
        body: "Almost nothing on the technical side: a few text files generated from the same content model as the website. Editorially, it costs a clear policy decision and the willingness to be explicit about it.\n\nWe've made that decision. It is articulated, again, in the llms.txt file itself, and in this essay.",
      },
    ],
  },
];

export function getEssay(slug: string): JournalEssay | undefined {
  return JOURNAL.find((j) => j.slug === slug);
}
