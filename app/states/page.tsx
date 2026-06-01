import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Glass } from "@/components/ui/Glass";
import { STATES, type StateRegion } from "@/lib/data/states";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 telehealth by state — all 50 + DC",
  description:
    "GLP-1 telehealth availability, regulatory notes, and provider routing for every US state plus the District of Columbia.",
  alternates: { canonical: "/states" },
};

const REGION_ORDER: StateRegion[] = [
  "Northeast",
  "Mid-Atlantic",
  "Southeast",
  "Midwest",
  "Southwest",
  "Mountain",
  "Pacific",
  "Non-contiguous",
];

export default function StatesIndex() {
  const byRegion = REGION_ORDER.map((r) => ({
    region: r,
    states: STATES.filter((s) => s.region === r),
  })).filter((g) => g.states.length > 0);

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/states",
            name: "GLP-1 telehealth by state",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/states#itemlist`,
            name: "States",
            numberOfItems: STATES.length,
            itemListElement: STATES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/states/${s.slug}`,
              name: s.name,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "States", path: "/states" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="State directory"
        title={
          <>
            GLP-1 telehealth, <em>state by state</em>.
          </>
        }
        intro="Telehealth practice rules, regulatory context, and provider routing notes for every US state plus the District of Columbia."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "States", path: "/states" },
        ]}
      />

      <section className="shell pb-20">
        {byRegion.map((g) => (
          <Reveal key={g.region} className="mb-12">
            <h2 className="mb-5 text-[1.4rem]" style={{ color: "var(--fg)" }}>
              {g.region}
            </h2>
            <Glass className="rounded-2xl p-2">
              <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
                {g.states.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/states/${s.slug}`}
                      className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-[color:var(--hairline)]"
                    >
                      <span style={{ color: "var(--fg)" }}>{s.name}</span>
                      <span className="mono text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                        {s.abbr}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>
        ))}
      </section>
    </>
  );
}
