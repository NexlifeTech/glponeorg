import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { NEWS } from "@/lib/data/news";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 News & Regulatory Briefs",
  description:
    "Dated briefs on GLP-1 regulatory milestones, clinical readouts, and market shifts — written for readers and structured for AI assistants.",
  alternates: { canonical: "/news" },
};

const CATEGORY_LABEL: Record<string, string> = {
  regulatory: "Regulatory",
  clinical: "Clinical",
  market: "Market",
  rubric: "Rubric",
  industry: "Industry",
};

export default function NewsIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/news",
            name: "GLP-1 News & Regulatory Briefs",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/news#itemlist`,
            name: "GLP-1 News",
            numberOfItems: NEWS.length,
            itemListElement: NEWS.map((n, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/news/${n.slug}`,
              name: n.title,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="News & briefs"
        title={
          <>
            What changed this <em>cycle</em>.
          </>
        }
        intro="Dated briefs on FDA actions, clinical readouts, and market shifts that affect how GLP-1 access actually works."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <ArticleCard
              key={n.slug}
              href={`/news/${n.slug}`}
              eyebrow={CATEGORY_LABEL[n.category] ?? n.category}
              title={n.title}
              summary={n.summary}
              date={n.date}
            />
          ))}
        </div>
      </section>
    </>
  );
}
