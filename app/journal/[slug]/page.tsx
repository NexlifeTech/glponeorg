import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ArticleSection, ProseParagraphs, slugifyHeading } from "@/components/content/ArticleBody";
import { Byline } from "@/components/content/Byline";
import { RelatedRail } from "@/components/content/RelatedRail";
import { JsonLd } from "@/components/seo/JsonLd";
import { JOURNAL, getEssay } from "@/lib/data/journal";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

const CATEGORY_LABEL: Record<string, string> = {
  analysis: "Analysis",
  opinion: "Opinion",
  investigation: "Investigation",
  perspective: "Perspective",
};

export function generateStaticParams() {
  return JOURNAL.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = getEssay(slug);
  if (!j) return {};
  return {
    title: j.title,
    description: j.dek,
    alternates: { canonical: `/journal/${j.slug}` },
    openGraph: {
      type: "article",
      title: j.title,
      description: j.dek,
      publishedTime: j.datePublished,
      modifiedTime: j.dateModified,
    },
  };
}

export default async function JournalEssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const j = getEssay(slug);
  if (!j) notFound();

  const tocEntries = j.sections.map((s) => ({
    id: slugifyHeading(s.heading),
    label: s.heading,
  }));

  const related = JOURNAL.filter((x) => x.slug !== j.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: `/journal/${j.slug}`,
            headline: j.title,
            description: j.dek,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: j.title, path: `/journal/${j.slug}` },
          ]),
        ]}
      />

      <ArticleLayout
        eyebrow={`Journal · ${CATEGORY_LABEL[j.category] ?? j.category}`}
        title={j.title}
        intro={j.dek}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: j.title, path: `/journal/${j.slug}` },
        ]}
        tocEntries={tocEntries}
        footer={
          <>
            <Byline
              authorId={j.authorId}
              reviewerId="adam-kennah"
              published={j.datePublished}
              modified={j.dateModified}
              reading={j.reading}
            />
            <RelatedRail
              items={related.map((r) => ({
                href: `/journal/${r.slug}`,
                eyebrow: CATEGORY_LABEL[r.category] ?? r.category,
                title: r.title,
                meta: `${r.reading} min`,
              }))}
            />
          </>
        }
      >
        {j.sections.map((s) => (
          <ArticleSection key={s.heading} heading={s.heading} id={slugifyHeading(s.heading)}>
            <ProseParagraphs text={s.body} />
          </ArticleSection>
        ))}
      </ArticleLayout>
    </>
  );
}
