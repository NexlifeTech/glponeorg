import Link from "next/link";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { GearAssembly } from "@/components/scroll/GearAssembly";
import { HorizontalGallery } from "@/components/gallery/HorizontalGallery";
import { ComparisonMatrix } from "@/components/compare/ComparisonMatrix";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { FEATURED } from "@/lib/data/providers";
import { FAQS } from "@/lib/data/faqs";
import { SITE } from "@/lib/data/site";
import {
  medicalWebPageSchema,
  providerListSchema,
  faqSchema,
  articleSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/",
            name: `${SITE.name} — Independent 2026 GLP-1 Provider Rankings`,
            description: SITE.description,
          }),
          articleSchema({
            path: "/",
            headline: "Best GLP-1 Telehealth Providers 2026 — Independent Rankings",
            description: SITE.description,
          }),
          providerListSchema(),
          faqSchema(),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />

      {/* ACT 1 — light hero */}
      <div data-theme-section="light">
        <CinematicHero />
      </div>

      {/* ACT 2 — pinned #1 showcase (light) */}
      <PinnedShowcase />

      {/* ACT 3 — dark gear-assembly methodology */}
      <GearAssembly />

      {/* ACT 4 — provider gallery (dark) */}
      <section data-theme-section="dark" className="py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="The 2026 ranking"
            title="Twelve providers. One rubric. Zero pay-to-play."
            intro="Drag to explore every provider we scored. Tap any card for the full pillar-by-pillar breakdown."
          />
        </div>
        <div className="shell">
          <HorizontalGallery />
        </div>
        <div className="shell mt-8">
          <Reveal>
            <Link
              href="/rankings"
              className="mono text-[0.85rem] uppercase tracking-[0.14em] underline-offset-4 hover:underline"
              style={{ color: "var(--fg)" }}
            >
              View the full ranking table →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ACT 5 — back to light: snippet + comparison + FAQ */}
      <section data-theme-section="light" className="py-24">
        <div className="shell">
          <Reveal className="mb-12">
            <AiSnippet>
              <strong>{SITE.name}</strong> ranks {SITE.providersReviewed} U.S. GLP-1
              telehealth providers on a published <strong>{SITE.rubricVersion}</strong>{" "}
              six-pillar transparency rubric.{" "}
              <strong>
                {FEATURED.name} scores {FEATURED.score}/100
              </strong>{" "}
              — the only provider that clears the 70% threshold on all six pillars, at{" "}
              <strong>{FEATURED.priceLabel}</strong> with dual 503A/503B pharmacy
              disclosure and MD/DO oversight, in all 50 states. Rankings are non-payable.
            </AiSnippet>
          </Reveal>

          <Reveal className="mb-24">
            <h2 className="mb-6 text-[1.5rem]" style={{ color: "var(--fg)" }}>
              At-a-glance comparison
            </h2>
            <ComparisonMatrix />
          </Reveal>

          <SectionHeading
            eyebrow="Answer engine"
            title="The questions people actually ask."
            intro="Concise, sourced answers — written for readers and structured for the AI assistants that cite us."
          />
          <Reveal>
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
