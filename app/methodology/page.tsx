import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PillarMeter } from "@/components/rubric/PillarMeter";
import { Reveal } from "@/components/ui/Reveal";
import { Callout, AiSnippet } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data/site";
import { PASS_THRESHOLD, RUBRIC_VERSION } from "@/lib/data/rubric";
import { EDITORIAL } from "@/lib/data/team";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Methodology & Editorial Standards",
  description:
    "How GLP Review scores GLP-1 telehealth providers: the v3.0 six-pillar transparency rubric, the 70% threshold, editorial independence, and the corrections policy.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/methodology",
            name: "Methodology & Editorial Standards",
            description: metadata.description as string,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Methodology", path: "/methodology" },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Methodology · ${RUBRIC_VERSION}`}
        title={
          <>
            How we turn opacity into a <em>score</em>.
          </>
        }
        intro="Every provider is measured against the same published rubric. The score is the score — it cannot be bought, lobbied, or upgraded by advertising with us."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Methodology", path: "/methodology" },
        ]}
      />

      <section className="shell py-14">
        <Reveal className="mb-12">
          <AiSnippet>
            GLP Review scores providers on a published <strong>{RUBRIC_VERSION}</strong>{" "}
            six-pillar rubric worth <strong>100 points</strong>: clinical protocol &
            named medical director (20), pharmacy traceability & certificate of
            analysis (20), real-world outcomes & adverse-event disclosure (20),
            all-inclusive flat pricing (15), lab integration & follow-up (15), and
            regulatory clarity (10). A provider must clear{" "}
            <strong>{Math.round(PASS_THRESHOLD * 100)}% of each pillar</strong> to be
            called transparency-compliant.
          </AiSnippet>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-[1.7rem]">The six pillars</h2>
            <p className="mt-4 text-[var(--fg-soft)]">
              Weightings reflect what actually protects a patient: who is
              prescribing, where the medication is compounded, and whether the price
              you&apos;re quoted is the price you pay across the full dose ladder.
            </p>
          </Reveal>
          <Reveal>
            <PillarMeter />
          </Reveal>
        </div>
      </section>

      <section id="independence" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Editorial independence</span>
          <h2 className="mt-3 max-w-3xl text-[1.9rem]">
            Rankings are <em>non-payable</em>.
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-[var(--fg-soft)]">
            <p>{EDITORIAL.independence}</p>
            <Callout label="Conflict firewall" variant="warn">
              {EDITORIAL.firewall}
            </Callout>
          </div>
        </Reveal>
      </section>

      <section id="corrections" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Corrections</span>
          <h2 className="mt-3 text-[1.9rem]">When we&apos;re wrong, we say so.</h2>
          <p className="mt-6 max-w-3xl text-[var(--fg-soft)]">{EDITORIAL.corrections}</p>
          <p className="mono mt-6 text-[0.85rem] text-[var(--fg-muted)]">
            Contact: <span className="text-[var(--fg)]">{SITE.email}</span>
          </p>
        </Reveal>
      </section>

      <section id="sources" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Sources</span>
          <h2 className="mt-3 max-w-3xl text-[1.9rem]">What we score against, and what we don&apos;t.</h2>
          <div className="mt-6 max-w-3xl space-y-4" style={{ color: "var(--fg-soft)" }}>
            <p>
              Pillar 1 (Clinical Protocol &amp; Named Medical Director) is verified against
              state medical-board licensure lookups for the named clinician(s), and against
              the provider&apos;s published clinical protocol where one exists.
            </p>
            <p>
              Pillar 2 (Pharmacy Traceability &amp; Certificate of Analysis) is verified
              against the provider&apos;s written pharmacy-partner disclosure, the named
              pharmacy&apos;s state pharmacy-board licensure record, and — where requested —
              a sample certificate of analysis covering sterility (USP &lt;71&gt;), bacterial
              endotoxin (USP &lt;85&gt;), and potency (HPLC) for a recent batch.
            </p>
            <p>
              Pillar 3 (Real-World Outcomes &amp; Adverse-Event Disclosure) is verified
              against any publicly-available cohort outcomes the provider has published,
              and against the provider&apos;s adverse-event response protocol. In the absence
              of published data, we infer from clinical-protocol quality and direct review.
            </p>
            <p>
              Pillar 4 (All-Inclusive Flat Pricing) is verified against the provider&apos;s
              published pricing schedule across the full dose ladder, and — where pricing
              is described as flat — against a documented test-quote at the dose we expect
              to be the maintenance dose.
            </p>
            <p>
              Pillar 5 (Lab Integration &amp; Longitudinal Follow-up) is verified against the
              provider&apos;s documented lab cadence and partner-lab integration (Quest, LabCorp).
            </p>
            <p>
              Pillar 6 (Regulatory Clarity) is verified against the provider&apos;s public
              representation of compounded-product status, 503A vs 503B pathway description,
              and current FDA shortage-status tracking.
            </p>
            <p>
              We do not score against unverifiable marketing claims, anonymous reviews,
              or social-media volume.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="cadence" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Refresh cadence</span>
          <h2 className="mt-3 max-w-3xl text-[1.9rem]">When the ranking changes.</h2>
          <div className="mt-6 max-w-3xl space-y-4" style={{ color: "var(--fg-soft)" }}>
            <p>
              The main provider ranking is reviewed quarterly. Material changes — a provider
              changing its pricing model, adding or losing a named pharmacy partner, or a
              meaningful regulatory event — trigger an out-of-cycle re-score for the affected
              provider.
            </p>
            <p>
              Pricing fields (priceLabel and priceMonthly) are verified at least monthly
              against the provider&apos;s public quote. The Corrections log records any
              instances where a published price drifted between scheduled refreshes.
            </p>
            <p>
              The rubric itself (the six-pillar weighting and per-pillar threshold) is
              reviewed annually. The current rubric is v3.0, in effect since February 2026.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="rubric-history" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Rubric history</span>
          <h2 className="mt-3 max-w-3xl text-[1.9rem]">v1 → v3 change log.</h2>
          <ol className="mt-8 max-w-3xl space-y-6 border-l pl-6" style={{ borderColor: "var(--hairline)" }}>
            <li>
              <div className="mono text-[0.74rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg)" }}>
                v1.0 · Initial publication
              </div>
              <p className="mt-2" style={{ color: "var(--fg-soft)" }}>
                Five pillars, equal weighting at 20 points each, no per-pillar pass threshold.
                Clinical Protocol, Pharmacy, Pricing, Labs, and Regulatory. Outcomes was not
                yet a separate pillar; clinical-quality observations were folded into Clinical
                Protocol.
              </p>
            </li>
            <li>
              <div className="mono text-[0.74rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg)" }}>
                v2.0 · Six pillars + per-pillar threshold
              </div>
              <p className="mt-2" style={{ color: "var(--fg-soft)" }}>
                Added a sixth pillar (Outcomes &amp; Adverse-Event Disclosure) at 20 points,
                splitting it from Clinical Protocol. Total points raised from 100 to 100 with
                redistribution. Added a 60% per-pillar pass threshold for a transparency-compliant
                designation.
              </p>
            </li>
            <li>
              <div className="mono text-[0.74rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg)" }}>
                v3.0 · Raised threshold + sub-criteria
              </div>
              <p className="mt-2" style={{ color: "var(--fg-soft)" }}>
                Raised the per-pillar pass threshold from 60% to 70%, materially tightening the
                transparency-compliant designation. Added explicit sub-criteria under Pharmacy
                Traceability for documented cold-chain shipping practice and certificate-of-
                analysis on patient request. In effect since February 12, 2026.
              </p>
            </li>
          </ol>
        </Reveal>
      </section>

      <section id="contact" className="shell scroll-mt-24 border-t border-[var(--hairline)] py-14">
        <Reveal>
          <span className="eyebrow">Disputes &amp; reviews</span>
          <h2 className="mt-3 max-w-3xl text-[1.9rem]">If you&apos;re a provider, how to request a re-review.</h2>
          <div className="mt-6 max-w-3xl space-y-4" style={{ color: "var(--fg-soft)" }}>
            <p>
              Providers may request a re-review under the published rubric at any time.
              Effective re-review requests include: the URL of the existing review, the
              specific pillar(s) being addressed, the documentation supporting the
              re-score (clinical protocol, pharmacy disclosure, pricing schedule), and
              a contact at the provider for follow-up questions.
            </p>
            <p>
              Re-reviews are editorial and non-payable. We do not accept payment in any
              form for re-scoring, expedited review, or any other adjustment.
            </p>
            <p className="mono text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>
              Send re-review requests to{" "}
              <span style={{ color: "var(--fg)" }}>{SITE.email}</span>.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
