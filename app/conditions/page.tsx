import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONDITIONS } from "@/lib/data/conditions";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 indications — by condition",
  description:
    "Evidence summaries for GLP-1 receptor agonists across approved and emerging indications: T2D, obesity, OSA, cardiovascular risk, MASH, PCOS.",
  alternates: { canonical: "/conditions" },
};

const EV_LABEL: Record<string, string> = {
  high: "High evidence",
  moderate: "Moderate evidence",
  emerging: "Emerging evidence",
};

export default function ConditionsIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/conditions",
            name: "GLP-1 Conditions",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/conditions#itemlist`,
            name: "Conditions",
            numberOfItems: CONDITIONS.length,
            itemListElement: CONDITIONS.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/conditions/${c.slug}`,
              name: c.name,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Conditions", path: "/conditions" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="By condition"
        title={
          <>
            What GLP-1s <em>are for</em>.
          </>
        }
        intro="Evidence summaries for each FDA-approved and emerging GLP-1 indication, with the trial basis, label, and treatment-eligibility context."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c) => (
            <ArticleCard
              key={c.slug}
              href={`/conditions/${c.slug}`}
              eyebrow={EV_LABEL[c.evidenceLevel] ?? c.evidenceLevel}
              title={c.name}
              summary={c.summary}
            />
          ))}
        </div>
      </section>
    </>
  );
}
