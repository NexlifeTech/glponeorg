import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Callout } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProseParagraphs } from "@/components/content/ArticleBody";
import { Byline } from "@/components/content/Byline";
import { RelatedRail } from "@/components/content/RelatedRail";
import { NEWS, getNews } from "@/lib/data/news";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema } from "@/lib/schema";

const CATEGORY_LABEL: Record<string, string> = {
  regulatory: "Regulatory",
  clinical: "Clinical",
  market: "Market",
  rubric: "Rubric",
  industry: "Industry",
};

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.summary,
    alternates: { canonical: `/news/${n.slug}` },
    openGraph: {
      type: "article",
      title: n.title,
      description: n.summary,
      publishedTime: n.date,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();

  // Related: most recent 3 items in the same category, excluding this one.
  const related = NEWS.filter((x) => x.category === n.category && x.slug !== n.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "@id": `${SITE.url}/news/${n.slug}#article`,
            headline: n.title,
            description: n.summary,
            datePublished: n.date,
            dateModified: SITE.modified,
            articleSection: CATEGORY_LABEL[n.category] ?? n.category,
            mainEntityOfPage: `${SITE.url}/news/${n.slug}`,
            publisher: { "@id": `${SITE.url}/#organization` },
            author: { "@id": `${SITE.url}/about#dr-parmis` },
            isAccessibleForFree: true,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News", path: "/news" },
            { name: n.title, path: `/news/${n.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${CATEGORY_LABEL[n.category] ?? n.category} · ${n.date}`}
        title={n.title}
        intro={n.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: n.title, path: `/news/${n.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <article className="max-w-[68ch]">
          <Reveal>
            <div className="space-y-5 text-[1.04rem] leading-[1.78]" style={{ color: "var(--fg-soft)" }}>
              <ProseParagraphs text={n.body} />
            </div>
          </Reveal>

          {n.sources && n.sources.length > 0 && (
            <Reveal>
              <Callout label="Sources">
                <ul className="space-y-1">
                  {n.sources.map((s, i) => (
                    <li key={i}>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {s.label}
                        </a>
                      ) : (
                        s.label
                      )}
                    </li>
                  ))}
                </ul>
              </Callout>
            </Reveal>
          )}

          <Byline authorId="dr-parmis" reviewerId="adam-kennah" published={n.date} modified={SITE.modified} />
        </article>

        <RelatedRail
          items={related.map((r) => ({
            href: `/news/${r.slug}`,
            eyebrow: CATEGORY_LABEL[r.category] ?? r.category,
            title: r.title,
            meta: r.date,
          }))}
        />
      </section>
    </>
  );
}
