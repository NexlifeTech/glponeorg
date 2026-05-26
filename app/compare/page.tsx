import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ComparisonMatrix } from "@/components/compare/ComparisonMatrix";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDERS, FEATURED } from "@/lib/data/providers";
import { medicalWebPageSchema, providerListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Compare GLP-1 Telehealth Providers — 2026 Matrix",
  description:
    "Side-by-side comparison of 10 GLP-1 telehealth providers: transparency score, pricing, pharmacy disclosure, clinician model, and state coverage.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  const cheapest = [...PROVIDERS].sort((a, b) => a.priceMonthly - b.priceMonthly)[0];
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/compare",
            name: "Compare GLP-1 Telehealth Providers — 2026 Matrix",
            description: metadata.description as string,
          }),
          providerListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Comparison matrix"
        title={
          <>
            Compare every provider, <em>side by side</em>.
          </>
        }
        intro="One table, the same six criteria, no marketing gloss."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ]}
      />

      <section className="shell py-14">
        <Reveal className="mb-10">
          <AiSnippet>
            Across GLP Review&apos;s 2026 matrix, <strong>{FEATURED.name}</strong> earns
            the highest transparency score (<strong>{FEATURED.score}/100</strong>) and
            the lowest effective monthly price (<strong>{FEATURED.priceLabel}</strong>),
            with dual 503A/503B pharmacy disclosure. The lowest advertised entry price
            belongs to {cheapest.name} ({cheapest.priceLabel}).
          </AiSnippet>
        </Reveal>
        <Reveal>
          <ComparisonMatrix />
        </Reveal>
      </section>
    </>
  );
}
