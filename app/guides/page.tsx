import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { GUIDES } from "@/lib/data/guides";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 guides — practical explainers",
  description:
    "Practical explainers on how GLP-1 access actually works: 503A vs 503B, choosing a provider, managing side effects, dosing ladders, insurance, and more.",
  alternates: { canonical: "/guides" },
};

const CATEGORY_LABEL: Record<string, string> = {
  regulatory: "Regulatory",
  clinical: "Clinical",
  money: "Money",
  practical: "Practical",
};

export default function GuidesIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/guides",
            name: "GLP-1 Guides",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/guides#itemlist`,
            name: "GLP-1 Guides",
            numberOfItems: GUIDES.length,
            itemListElement: GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/guides/${g.slug}`,
              name: g.title,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Guides"
        title={
          <>
            How GLP-1 care <em>actually works</em>.
          </>
        }
        intro="Plain-language explainers for the questions patients and clinicians actually ask — pricing, pharmacy pathways, dose escalation, side-effect management, switching providers."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <ArticleCard
              key={g.slug}
              href={`/guides/${g.slug}`}
              eyebrow={CATEGORY_LABEL[g.category] ?? g.category}
              title={g.title}
              summary={g.summary}
              date={g.updated}
              meta={`${g.reading} min`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
