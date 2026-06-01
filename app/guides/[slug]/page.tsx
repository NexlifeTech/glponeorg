import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ArticleSection, ProseParagraphs, slugifyHeading } from "@/components/content/ArticleBody";
import { Byline } from "@/components/content/Byline";
import { RelatedRail } from "@/components/content/RelatedRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { GUIDES, getGuide } from "@/lib/data/guides";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

const CATEGORY_LABEL: Record<string, string> = {
  regulatory: "Regulatory",
  clinical: "Clinical",
  money: "Money",
  practical: "Practical",
};

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.summary,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", title: g.title, description: g.summary, modifiedTime: g.updated },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const tocEntries = g.sections.map((s) => ({
    id: slugifyHeading(s.heading),
    label: s.heading,
  }));

  const related = GUIDES.filter((x) => x.slug !== g.slug && x.category === g.category)
    .slice(0, 3)
    .concat(GUIDES.filter((x) => x.slug !== g.slug && x.category !== g.category).slice(0, 3))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: `/guides/${g.slug}`,
            headline: g.title,
            description: g.summary,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: g.title, path: `/guides/${g.slug}` },
          ]),
        ]}
      />

      <ArticleLayout
        eyebrow={`Guide · ${CATEGORY_LABEL[g.category] ?? g.category}`}
        title={g.title}
        intro={g.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: g.title, path: `/guides/${g.slug}` },
        ]}
        tocEntries={tocEntries}
        footer={
          <>
            <Byline
              authorId="dr-parmis"
              reviewerId="adam-kennah"
              published={g.updated}
              modified={SITE.modified}
              reading={g.reading}
            />
            <RelatedRail
              items={related.map((r) => ({
                href: `/guides/${r.slug}`,
                eyebrow: CATEGORY_LABEL[r.category] ?? r.category,
                title: r.title,
                meta: `${r.reading} min`,
              }))}
            />
          </>
        }
      >
        {g.sections.map((s) => (
          <ArticleSection key={s.heading} heading={s.heading} id={slugifyHeading(s.heading)}>
            <ProseParagraphs text={s.body} />
          </ArticleSection>
        ))}
      </ArticleLayout>
    </>
  );
}
