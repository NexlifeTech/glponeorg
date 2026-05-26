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
    </>
  );
}
