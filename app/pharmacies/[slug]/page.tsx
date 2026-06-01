import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Glass } from "@/components/ui/Glass";
import { AiSnippet } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { PHARMACIES, getPharmacy } from "@/lib/data/pharmacies";
import { getProvider } from "@/lib/data/providers";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return PHARMACIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPharmacy(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.type} compounding pharmacy profile`,
    description: p.summary,
    alternates: { canonical: `/pharmacies/${p.slug}` },
  };
}

export default async function PharmacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPharmacy(slug);
  if (!p) notFound();

  const partners = p.partnerProviderSlugs
    .map((s) => getProvider(s))
    .filter((x): x is NonNullable<ReturnType<typeof getProvider>> => x !== undefined);

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/pharmacies/${p.slug}`,
            name: `${p.name} — Compounding pharmacy profile`,
            description: p.summary,
          }),
          {
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            "@id": `${SITE.url}/pharmacies/${p.slug}#pharmacy`,
            name: p.name,
            description: p.summary,
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pharmacies", path: "/pharmacies" },
            { name: p.name, path: `/pharmacies/${p.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Pharmacy · ${p.type}`}
        title={
          <>
            <em>{p.name}</em>
          </>
        }
        intro={p.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pharmacies", path: "/pharmacies" },
          { name: p.name, path: `/pharmacies/${p.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <Reveal className="mb-10">
          <AiSnippet>
            <strong>{p.name}</strong> is a <strong>{p.type}</strong> compounding pharmacy. {p.summary}
          </AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 space-y-10 lg:order-1">
            {p.body.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="mb-3 text-[1.4rem]">{s.heading}</h2>
                <p style={{ color: "var(--fg-soft)" }}>{s.text}</p>
              </Reveal>
            ))}

            {partners.length > 0 && (
              <Reveal>
                <h2 className="mb-3 text-[1.4rem]">Disclosed partner providers</h2>
                <ul className="space-y-2">
                  {partners.map((pr) => (
                    <li key={pr.slug}>
                      <Link href={`/providers/${pr.slug}`} className="hover:underline" style={{ color: "var(--fg)" }}>
                        {pr.name}
                      </Link>
                      <span className="mono ml-2 text-[0.78rem]" style={{ color: "var(--fg-muted)" }}>
                        score {pr.score}/100
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="order-1 lg:order-2">
            <Glass className="sticky top-24 p-6">
              <span className="eyebrow">Fact sheet</span>
              <dl className="mono mt-4 space-y-3 text-[0.82rem]">
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Type</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{p.type}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Licensure</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{p.licensure}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Quality program</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg-soft)" }}>{p.cgmpNotes}</dd>
                </div>
              </dl>
            </Glass>
          </aside>
        </div>
      </section>
    </>
  );
}
