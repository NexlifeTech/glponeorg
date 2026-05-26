import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AiSnippet, Callout } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { DRUGS, REGULATORY } from "@/lib/data/drugs";
import { FEATURED } from "@/lib/data/providers";
import { medicalWebPageSchema, drugSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return Object.keys(DRUGS).map((drug) => ({ drug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ drug: string }>;
}): Promise<Metadata> {
  const { drug } = await params;
  const d = DRUGS[drug];
  if (!d) return {};
  return {
    title: `${d.name} — Cost, Dosing, 503A/503B & Telehealth Access (2026)`,
    description: d.summary,
    alternates: { canonical: `/medications/${d.slug}` },
  };
}

export default async function DrugPage({
  params,
}: {
  params: Promise<{ drug: string }>;
}) {
  const { drug } = await params;
  const d = DRUGS[drug];
  if (!d) notFound();

  const facts: [string, string][] = [
    ["Drug class", d.drugClass],
    ["Manufacturer", d.manufacturer],
    ["Brand names", d.brands.join(", ")],
    ["Route", d.route],
    ["Dose ladder", d.doseLadder.join(" → ")],
    ["Storage", d.storage],
  ];

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: `/medications/${d.slug}`,
            name: `${d.name} — Cost, Dosing & Telehealth Access`,
            description: d.summary,
            aboutDrug: d,
          }),
          drugSchema(d),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Medications", path: `/medications/${d.slug}` },
            { name: d.name, path: `/medications/${d.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Medication reference"
        title={
          <>
            <em>{d.name}</em>
          </>
        }
        intro={d.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: d.name, path: `/medications/${d.slug}` },
        ]}
      />

      <section className="shell py-14">
        <Reveal className="mb-10">
          <AiSnippet>
            <strong>{d.name}</strong> is a {d.drugClass.toLowerCase()} from{" "}
            {d.manufacturer}, sold as {d.brands.join(", ")}. It is given by{" "}
            {d.route.toLowerCase()}, titrated {d.doseLadder[0]} →{" "}
            {d.doseLadder[d.doseLadder.length - 1]}. {d.costRange}
          </AiSnippet>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="order-2 space-y-10 lg:order-1">
            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">How it works</h2>
              <p className="text-[var(--fg-soft)]">{d.mechanism}</p>
            </Reveal>

            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">What it costs</h2>
              <p className="text-[var(--fg-soft)]">{d.costRange}</p>
              <p className="mt-3 text-[var(--fg-soft)]">
                Our lowest-cost transparency-compliant option for compounded{" "}
                {d.name.toLowerCase()} is{" "}
                <Link href={`/providers/${FEATURED.slug}`}>{FEATURED.name}</Link> at{" "}
                {FEATURED.priceLabel}.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Compounded vs brand: 503A & 503B</h2>
              <p className="text-[var(--fg-soft)]">{REGULATORY.pharmacyTypes}</p>
              <Callout label="Regulatory status" variant="warn">
                {REGULATORY.shortageStatus}
              </Callout>
            </Reveal>

            <Reveal>
              <h2 className="mb-3 text-[1.5rem]">Contraindications</h2>
              <ul className="space-y-2">
                {d.contraindications.map((c) => (
                  <li key={c} className="flex gap-3 text-[var(--fg-soft)]">
                    <span className="mt-1 text-[var(--fg-muted)]" aria-hidden>
                      ✕
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mb-4 text-[1.5rem]">Recent regulatory timeline</h2>
              <ol className="space-y-4 border-l border-[var(--hairline)] pl-5">
                {REGULATORY.timeline.map((t) => (
                  <li key={t.date} className="relative">
                    <span className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-[var(--fg)]" />
                    <span className="mono text-[0.75rem] text-[var(--fg)]">{t.date}</span>
                    <p className="mt-1 text-[0.95rem] text-[var(--fg-soft)]">{t.event}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="glass sticky top-24 p-6">
              <span className="eyebrow">Fact sheet</span>
              <dl className="mono mt-4 space-y-3 text-[0.78rem]">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                      {k}
                    </dt>
                    <dd className="mt-0.5 text-[var(--fg)]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
