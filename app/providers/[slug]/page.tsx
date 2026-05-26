import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ScoreDial } from "@/components/rankings/ScoreDial";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet, Callout } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDERS, getProvider } from "@/lib/data/providers";
import { PILLARS } from "@/lib/data/rubric";
import {
  medicalWebPageSchema,
  reviewSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) return {};
  return {
    title: `${p.name} Review 2026 — ${p.score}/100`,
    description: `${p.name} scores ${p.score}/100 in GLP Review's 2026 ranking. ${p.verdict}`,
    alternates: { canonical: `/providers/${p.slug}` },
  };
}

const PILLAR_MAX: Record<string, number> = Object.fromEntries(
  PILLARS.map((p) => [p.id, p.weight])
);

export default async function ProviderReview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) notFound();

  const pillarRows = PILLARS.map((pillar) => ({
    name: pillar.name,
    score: p.pillars[pillar.id as keyof typeof p.pillars],
    max: PILLAR_MAX[pillar.id],
  }));

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/providers/${p.slug}`,
            name: `${p.name} Review 2026`,
            description: p.verdict,
          }),
          reviewSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Providers", path: "/providers" },
            { name: p.name, path: `/providers/${p.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Provider review · Ranked #${p.rank}`}
        title={
          <>
            {p.name} <em>review</em>
          </>
        }
        intro={p.tagline}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Providers", path: "/providers" },
          { name: p.name, path: `/providers/${p.slug}` },
        ]}
      />

      <section className="shell grid gap-10 py-14 lg:grid-cols-[1fr_300px]">
        <div className="order-2 lg:order-1">
          <Reveal className="mb-10">
            <AiSnippet label="Verdict">
              <strong>
                {p.name} scores {p.score}/100
              </strong>{" "}
              in GLP Review&apos;s 2026 ranking (#{p.rank} of {PROVIDERS.length}).{" "}
              {p.verdict} Pricing: <strong>{p.priceLabel}</strong>.
            </AiSnippet>
          </Reveal>

          <Reveal className="mb-10">
            <h2 className="mb-4 text-[1.5rem]">Where it wins</h2>
            <ul className="space-y-3">
              {p.pros.map((pro) => (
                <li key={pro} className="flex gap-3 text-[var(--fg-soft)]">
                  <span className="mt-1 text-[var(--fg)]" aria-hidden>
                    ✦
                  </span>
                  {pro}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mb-10">
            <h2 className="mb-4 text-[1.5rem]">Trade-offs</h2>
            <ul className="space-y-3">
              {p.cons.map((con) => (
                <li key={con} className="flex gap-3 text-[var(--fg-soft)]">
                  <span className="mt-1 text-[var(--fg-muted)]" aria-hidden>
                    ▴
                  </span>
                  {con}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mb-10">
            <h2 className="mb-4 text-[1.5rem]">Pillar-by-pillar scorecard</h2>
            <div className="space-y-4">
              {pillarRows.map((row) => {
                const pct = (row.score / row.max) * 100;
                return (
                  <div key={row.name}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-4">
                      <span className="text-[0.92rem] text-[var(--fg-soft)]">{row.name}</span>
                      <span className="mono shrink-0 text-[0.8rem] text-[var(--fg-muted)]">
                        {row.score}/{row.max}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--hairline)]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background:
                            pct >= 70 ? "var(--fg)" : "var(--fg-muted)",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Callout label="Disclosure">
            Compounded GLP-1 medications are not FDA-approved drug products and are
            not the same as the brand-name versions. This review is editorial;
            rankings are non-payable. Consult a licensed clinician before starting
            treatment.
          </Callout>
        </div>

        {/* Sticky scorecard rail */}
        <aside className="order-1 lg:order-2">
          <div className="glass sticky top-24 p-6 text-center">
            <ScoreDial score={p.score} size={140} />
            <div className="mono mt-4 flex items-center justify-center gap-1.5 text-[0.78rem] text-[var(--fg-muted)]">
              <span className="text-[var(--fg-muted)]">★</span>
              {p.rating.toFixed(1)} · {p.reviewCount.toLocaleString()} reviews
            </div>
            <dl className="mono mt-5 space-y-3 text-left text-[0.78rem]">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Pricing
                </dt>
                <dd className="mt-0.5 text-[var(--fg)]">{p.priceLabel}</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Pharmacy
                </dt>
                <dd className="mt-0.5 text-[var(--fg-soft)]">{p.pharmacy}</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Coverage
                </dt>
                <dd className="mt-0.5 text-[var(--fg-soft)]">{p.states}</dd>
              </div>
            </dl>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 block rounded-full bg-[var(--fg)] px-5 py-2.5 text-[0.85rem] font-semibold text-[var(--bg)] transition-transform hover:scale-[1.02]"
            >
              Visit {p.name}
            </a>
            <Link
              href="/rankings"
              className="mono mt-4 block text-[0.72rem] uppercase tracking-[0.14em] text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              ← Back to rankings
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
