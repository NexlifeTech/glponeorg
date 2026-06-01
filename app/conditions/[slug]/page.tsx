import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet, Callout } from "@/components/ui/Callout";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONDITIONS, getCondition } from "@/lib/data/conditions";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

const EV_LABEL: Record<string, string> = {
  high: "High evidence",
  moderate: "Moderate evidence",
  emerging: "Emerging evidence",
};

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return {};
  return {
    title: `GLP-1s for ${c.name}`,
    description: c.summary,
    alternates: { canonical: `/conditions/${c.slug}` },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) notFound();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/conditions/${c.slug}`,
            name: `GLP-1s for ${c.name}`,
            description: c.summary,
          }),
          {
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "@id": `${SITE.url}/conditions/${c.slug}#condition`,
            name: c.name,
            description: c.summary,
            possibleTreatment: c.drugs.map((d) => ({ "@type": "Drug", name: d })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Conditions", path: "/conditions" },
            { name: c.name, path: `/conditions/${c.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Condition · ${EV_LABEL[c.evidenceLevel] ?? c.evidenceLevel}`}
        title={
          <>
            GLP-1s for <em>{c.shortName ?? c.name}</em>
          </>
        }
        intro={c.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
          { name: c.name, path: `/conditions/${c.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <Reveal className="mb-10">
          <AiSnippet>{c.summary}</AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 space-y-10 lg:order-1">
            {c.body.map((sec) => (
              <Reveal key={sec.heading}>
                <h2 className="mb-3 text-[1.4rem]">{sec.heading}</h2>
                <p style={{ color: "var(--fg-soft)" }}>{sec.text}</p>
              </Reveal>
            ))}

            {c.contraindications && c.contraindications.length > 0 && (
              <Reveal>
                <h2 className="mb-3 text-[1.4rem]">Contraindications</h2>
                <ul className="space-y-2">
                  {c.contraindications.map((x) => (
                    <li key={x} className="flex gap-3" style={{ color: "var(--fg-soft)" }}>
                      <span className="mt-1" style={{ color: "var(--fg-muted)" }} aria-hidden>✕</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {c.citation && <Callout label="Citation">{c.citation}</Callout>}
          </div>

          <aside className="order-1 lg:order-2">
            <Glass className="sticky top-24 p-6">
              <span className="eyebrow">Used drugs</span>
              <ul className="mt-4 space-y-2 text-[0.88rem]">
                {c.drugs.map((d) => (
                  <li key={d} style={{ color: "var(--fg)" }}>{d}</li>
                ))}
              </ul>
            </Glass>
          </aside>
        </div>
      </section>
    </>
  );
}
