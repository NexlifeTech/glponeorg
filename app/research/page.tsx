import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { STUDIES } from "@/lib/data/research";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 clinical research — trial syntheses",
  description:
    "Plain-language syntheses of the pivotal GLP-1 clinical trials: SURPASS, SURMOUNT, STEP, SUSTAIN, SELECT, and more.",
  alternates: { canonical: "/research" },
};

export default function ResearchIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/research",
            name: "GLP-1 Clinical Research",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/research#itemlist`,
            name: "Research",
            numberOfItems: STUDIES.length,
            itemListElement: STUDIES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/research/${s.slug}`,
              name: s.title,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Clinical research"
        title={
          <>
            The <em>trials</em> behind the prescriptions.
          </>
        }
        intro="Plain-language syntheses of the pivotal phase-3 trials that established GLP-1 receptor agonist therapy in type 2 diabetes, obesity, cardiovascular risk reduction, and sleep apnea."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STUDIES.map((s) => (
            <ArticleCard
              key={s.slug}
              href={`/research/${s.slug}`}
              eyebrow={s.trial}
              title={s.title}
              summary={s.summary}
              meta={`${s.year} · n=${s.sampleSize.toLocaleString()}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
