import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDERS, REVIEWED_SLUGS } from "@/lib/data/providers";
import { scoreTier } from "@/lib/score";
import { medicalWebPageSchema, providerListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 Telehealth Provider Directory",
  description:
    "Every GLP-1 telehealth provider in GLP Review's 2026 directory, with transparency scores, pricing, and pharmacy disclosure. NexLife leads at 94/100.",
  alternates: { canonical: "/providers" },
};

export default function ProvidersPage() {
  const reviewed = new Set<string>(REVIEWED_SLUGS);
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/providers",
            name: "GLP-1 Telehealth Provider Directory",
            description: metadata.description as string,
          }),
          providerListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Providers", path: "/providers" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Provider directory"
        title={
          <>
            Every provider we <em>scored</em>.
          </>
        }
        intro="Twelve U.S. GLP-1 telehealth providers, each measured against the same six-pillar rubric."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Providers", path: "/providers" },
        ]}
      />

      <section className="shell py-14">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((p) => {
            const tier = scoreTier(p.score);
            const hasReview = reviewed.has(p.slug);
            const card = (
              <article
                className={`group h-full rounded-2xl border bg-[var(--bg-elev)] p-6 transition-colors ${
                  hasReview
                    ? "border-[var(--hairline)] hover:border-[var(--fg)]"
                    : "border-[var(--hairline)] opacity-90"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                    #{p.rank}
                  </span>
                  <span className="mono text-[1.5rem] font-semibold" style={{ color: tier.color, opacity: tier.strength }}>
                    {p.score}
                  </span>
                </div>
                <h2 className="mt-2 text-[1.3rem] text-[var(--fg)] group-hover:text-[var(--fg)]">
                  {p.name}
                </h2>
                <p className="mt-1 text-[0.9rem] text-[var(--fg-muted)]">{p.tagline}</p>
                <p className="mono mt-4 text-[0.8rem] text-[var(--fg-soft)]">{p.priceLabel}</p>
                <span className="mono mt-4 inline-block text-[0.72rem] uppercase tracking-[0.14em] text-[var(--fg)]">
                  {hasReview ? "Read full review →" : "Profile →"}
                </span>
              </article>
            );
            return (
              <Reveal as="div" key={p.slug}>
                <Link href={`/providers/${p.slug}`} className="block h-full">
                  {card}
                </Link>
              </Reveal>
            );
          })}
        </RevealGroup>
      </section>
    </>
  );
}
