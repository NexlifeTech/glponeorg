import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { JOURNAL } from "@/lib/data/journal";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Journal — Editorial essays on GLP-1 care",
  description:
    "Analytical and investigative essays on GLP-1 telehealth, pricing, regulation, and rubric design — by the GLP Review editorial team.",
  alternates: { canonical: "/journal" },
};

const CATEGORY_LABEL: Record<string, string> = {
  analysis: "Analysis",
  opinion: "Opinion",
  investigation: "Investigation",
  perspective: "Perspective",
};

export default function JournalIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/journal",
            name: "Journal",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/journal#itemlist`,
            name: "GLP Review Journal",
            numberOfItems: JOURNAL.length,
            itemListElement: JOURNAL.map((j, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/journal/${j.slug}`,
              name: j.title,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Editorial"
        title={
          <>
            The <em>Journal</em>.
          </>
        }
        intro="Long-form analysis and perspective on the GLP-1 access landscape — how pricing models work, what disclosure actually proves, why outcomes data matters."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNAL.map((j) => (
            <ArticleCard
              key={j.slug}
              href={`/journal/${j.slug}`}
              eyebrow={CATEGORY_LABEL[j.category] ?? j.category}
              title={j.title}
              summary={j.dek}
              date={j.datePublished}
              meta={`${j.reading} min`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
