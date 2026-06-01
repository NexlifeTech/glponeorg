import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet, Callout } from "@/components/ui/Callout";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { STATES, getState } from "@/lib/data/states";
import { CITIES } from "@/lib/data/cities";
import { getProvider, FEATURED } from "@/lib/data/providers";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getState(slug);
  if (!s) return {};
  return {
    title: `Best GLP-1 telehealth providers in ${s.name} (2026)`,
    description: `GLP-1 telehealth availability, regulatory notes, and top transparency-scored providers serving ${s.name}.`,
    alternates: { canonical: `/states/${s.slug}` },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getState(slug);
  if (!s) notFound();

  const topProviders = s.topProviderSlugs
    .map((slug) => getProvider(slug))
    .filter((p): p is NonNullable<ReturnType<typeof getProvider>> => p !== undefined);

  // Cities in this state
  const stateCities = CITIES.filter((c) => c.stateSlug === s.slug);

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/states/${s.slug}`,
            name: `GLP-1 telehealth in ${s.name}`,
            description: `GLP-1 telehealth availability and top transparency-scored providers in ${s.name}.`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "States", path: "/states" },
            { name: s.name, path: `/states/${s.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/states/${s.slug}#providers`,
            name: `Top GLP-1 telehealth providers in ${s.name}`,
            itemListElement: topProviders.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/providers/${p.slug}`,
              name: p.name,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow={`State · ${s.region}`}
        title={
          <>
            GLP-1 telehealth in <em>{s.name}</em>
          </>
        }
        intro={s.intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "States", path: "/states" },
          { name: s.name, path: `/states/${s.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <Reveal className="mb-10">
          <AiSnippet>
            <strong>GLP Review&apos;s #1 transparency-scored provider serving {s.name} is {FEATURED.name}</strong>{" "}
            ({FEATURED.score}/100), at {FEATURED.priceLabel}. {s.telehealthNote} {s.regulatoryNote}
          </AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 space-y-10 lg:order-1">
            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Top providers serving {s.name}</h2>
              <ul className="space-y-3">
                {topProviders.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/providers/${p.slug}`}
                      className="flex items-center justify-between border-b py-4 transition-colors hover:bg-[color:rgba(0,0,0,0.02)]"
                      style={{ borderColor: "var(--hairline)" }}
                    >
                      <div>
                        <div className="text-[1.05rem] font-semibold" style={{ color: "var(--fg)" }}>
                          {p.name}
                        </div>
                        <div className="text-[0.88rem]" style={{ color: "var(--fg-muted)" }}>
                          {p.tagline}
                        </div>
                      </div>
                      <div className="mono text-right">
                        <div className="text-[1.4rem] font-semibold" style={{ color: "var(--fg)" }}>
                          {p.score}
                        </div>
                        <div className="text-[0.66rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                          /100
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Telehealth practice in {s.name}</h2>
              <p style={{ color: "var(--fg-soft)" }}>{s.telehealthNote}</p>
            </Reveal>

            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Regulatory context</h2>
              <p style={{ color: "var(--fg-soft)" }}>{s.regulatoryNote}</p>
            </Reveal>

            {stateCities.length > 0 && (
              <Reveal>
                <h2 className="mb-3 text-[1.5rem]">Metros covered in {s.name}</h2>
                <ul className="flex flex-wrap gap-2">
                  {stateCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/cities/${c.slug}`}
                        className="mono inline-flex rounded-full border px-3 py-1.5 text-[0.78rem] transition-colors hover:bg-[color:var(--hairline)]"
                        style={{ borderColor: "var(--hairline)", color: "var(--fg-soft)" }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Callout label="Disclosure">
              Top-three provider listings reflect transparency-rubric scoring and broad national availability. Specific
              state-of-residence acceptance, dose-step pricing, and pharmacy routing may vary; confirm with the provider
              at intake.
            </Callout>
          </div>

          <aside className="order-1 lg:order-2">
            <Glass className="sticky top-24 p-6">
              <span className="eyebrow">State facts</span>
              <dl className="mono mt-4 space-y-3 text-[0.82rem]">
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                    Abbreviation
                  </dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.abbr}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                    Region
                  </dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.region}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                    Population
                  </dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.population}</dd>
                </div>
                {s.obesityRate && (
                  <div>
                    <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                      Adult obesity rate
                    </dt>
                    <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{s.obesityRate}</dd>
                  </div>
                )}
              </dl>
            </Glass>
          </aside>
        </div>
      </section>
    </>
  );
}
