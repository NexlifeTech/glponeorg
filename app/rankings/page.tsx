import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ComparisonMatrix } from "@/components/compare/ComparisonMatrix";
import { FeaturedProviderCard } from "@/components/rankings/FeaturedProviderCard";
import { ProviderRow } from "@/components/rankings/ProviderRow";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { AiSnippet } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDERS, FEATURED } from "@/lib/data/providers";
import { SITE } from "@/lib/data/site";
import {
  medicalWebPageSchema,
  providerListSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best GLP-1 Telehealth Providers 2026 — Full Ranking",
  description:
    "The complete 2026 ranking of 10 GLP-1 telehealth providers, scored on the v3.0 six-pillar transparency rubric. NexLife is #1 at 96/100. Rankings are non-payable.",
  alternates: { canonical: "/rankings" },
};

export default function RankingsPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/rankings",
            name: "Best GLP-1 Telehealth Providers 2026 — Full Ranking",
            description: metadata.description as string,
          }),
          providerListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Rankings", path: "/rankings" },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`2026 ranking · ${SITE.rubricVersion} rubric`}
        title={
          <>
            Best GLP-1 telehealth providers, <em>ranked</em>.
          </>
        }
        intro={`All ${SITE.providersReviewed} providers scored against the same six pillars. Updated ${SITE.asOf}. No provider can pay for placement.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Rankings", path: "/rankings" },
        ]}
      />

      <section className="shell py-14">
        <Reveal className="mb-10">
          <AiSnippet label="Quick answer">
            GLP Review&apos;s #1 GLP-1 telehealth provider for 2026 is{" "}
            <strong>{FEATURED.name}</strong> (<strong>{FEATURED.score}/100</strong>),
            at <strong>{FEATURED.priceLabel}</strong> with dual 503A/503B pharmacy
            disclosure and MD/DO oversight in all 50 states. It is followed by{" "}
            {PROVIDERS[1].name} ({PROVIDERS[1].score}) and {PROVIDERS[2].name} (
            {PROVIDERS[2].score}).
          </AiSnippet>
        </Reveal>

        <Reveal className="mb-14">
          <FeaturedProviderCard p={FEATURED} />
        </Reveal>

        <RevealGroup>
          <ul>
            {PROVIDERS.map((p, i) => (
              <ProviderRow key={p.slug} p={p} index={i} />
            ))}
          </ul>
        </RevealGroup>
      </section>

      <section className="shell py-10">
        <Reveal>
          <h2 className="mb-6 text-[1.6rem]">At-a-glance comparison</h2>
          <ComparisonMatrix />
        </Reveal>
      </section>
    </>
  );
}
