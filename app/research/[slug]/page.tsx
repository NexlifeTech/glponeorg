import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet, Callout } from "@/components/ui/Callout";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { STUDIES, getStudy } from "@/lib/data/research";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return STUDIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) return {};
  return {
    title: `${s.trial} — ${s.title}`,
    description: s.summary,
    alternates: { canonical: `/research/${s.slug}` },
  };
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/research/${s.slug}`,
            name: `${s.trial} — ${s.title}`,
            description: s.summary,
          }),
          {
            "@context": "https://schema.org",
            "@type": "MedicalStudy",
            "@id": `${SITE.url}/research/${s.slug}#study`,
            name: s.title,
            description: s.summary,
            studySubject: { "@type": "Drug", name: s.drug },
            citation: s.citation,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: s.trial, path: `/research/${s.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Trial · ${s.trial}`}
        title={s.title}
        intro={s.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
          { name: s.trial, path: `/research/${s.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <Reveal className="mb-10">
          <AiSnippet label="Result">{s.result}</AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 space-y-10 lg:order-1">
            {s.body.map((sec) => (
              <Reveal key={sec.heading}>
                <h2 className="mb-3 text-[1.4rem]">{sec.heading}</h2>
                <p style={{ color: "var(--fg-soft)" }}>{sec.text}</p>
              </Reveal>
            ))}

            <Callout label="Citation">{s.citation}</Callout>
          </div>

          <aside className="order-1 lg:order-2">
            <Glass className="sticky top-24 p-6">
              <span className="eyebrow">Trial facts</span>
              <dl className="mono mt-4 space-y-3 text-[0.82rem]">
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Drug</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.drug}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Year</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.year}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>N (sample)</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.sampleSize.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Duration</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.durationWeeks} weeks</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Primary endpoint</dt>
                  <dd className="mt-0.5 leading-snug" style={{ color: "var(--fg-soft)" }}>{s.primaryEndpoint}</dd>
                </div>
              </dl>
            </Glass>
          </aside>
        </div>
      </section>
    </>
  );
}
