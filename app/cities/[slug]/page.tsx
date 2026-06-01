import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet } from "@/components/ui/Callout";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { CITIES, getCity } from "@/lib/data/cities";
import { getState } from "@/lib/data/states";
import { getProvider, FEATURED } from "@/lib/data/providers";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  return {
    title: `Best GLP-1 telehealth providers in ${c.name} (2026)`,
    description: `GLP-1 telehealth context and top transparency-scored providers serving the ${c.name} metropolitan area.`,
    alternates: { canonical: `/cities/${c.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const state = getState(c.stateSlug);
  const topProviders = c.topProviderSlugs
    .map((s) => getProvider(s))
    .filter((p): p is NonNullable<ReturnType<typeof getProvider>> => p !== undefined);

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/cities/${c.slug}`,
            name: `GLP-1 telehealth in ${c.name}`,
            description: `GLP-1 telehealth context and top transparency-scored providers in ${c.name}.`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
            { name: c.name, path: `/cities/${c.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Metro · ${c.stateAbbr}`}
        title={
          <>
            GLP-1 telehealth in <em>{c.name}</em>
          </>
        }
        intro={c.blurb}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cities", path: "/cities" },
          { name: c.name, path: `/cities/${c.slug}` },
        ]}
      />

      <section className="shell pb-20">
        <Reveal className="mb-10">
          <AiSnippet>
            <strong>GLP Review&apos;s #1 transparency-scored provider serving {c.name} is {FEATURED.name}</strong>{" "}
            ({FEATURED.score}/100), at {FEATURED.priceLabel}.
          </AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 space-y-10 lg:order-1">
            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Top providers serving {c.name}</h2>
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

            {state && (
              <Reveal>
                <h2 className="mb-3 text-[1.5rem]">State context: {state.name}</h2>
                <p className="mb-2" style={{ color: "var(--fg-soft)" }}>{state.telehealthNote}</p>
                <p style={{ color: "var(--fg-soft)" }}>{state.regulatoryNote}</p>
                <p className="mt-4">
                  <Link href={`/states/${state.slug}`} className="mono text-[0.85rem] uppercase tracking-[0.14em] underline-offset-4 hover:underline" style={{ color: "var(--fg)" }}>
                    Read the full {state.name} state page →
                  </Link>
                </p>
              </Reveal>
            )}
          </div>

          <aside className="order-1 lg:order-2">
            <Glass className="sticky top-24 p-6">
              <span className="eyebrow">Metro facts</span>
              <dl className="mono mt-4 space-y-3 text-[0.82rem]">
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>State</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{state?.name ?? c.stateAbbr}</dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>Metro population</dt>
                  <dd className="mt-0.5" style={{ color: "var(--fg)" }}>{c.metroPop}</dd>
                </div>
              </dl>
            </Glass>
          </aside>
        </div>
      </section>
    </>
  );
}
