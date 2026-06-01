import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Glass } from "@/components/ui/Glass";
import { CITIES } from "@/lib/data/cities";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 telehealth by metro — 30 major US cities",
  description:
    "GLP-1 telehealth context, regulatory notes, and top transparency-scored providers for 30 major US metros.",
  alternates: { canonical: "/cities" },
};

export default function CitiesIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/cities",
            name: "GLP-1 telehealth by metro",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/cities#itemlist`,
            name: "Cities",
            numberOfItems: CITIES.length,
            itemListElement: CITIES.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/cities/${c.slug}`,
              name: c.name,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="City directory"
        title={
          <>
            GLP-1 telehealth, <em>metro by metro</em>.
          </>
        }
        intro="Local clinical, payer, and pharmacy-supply context for 30 major US metropolitan areas."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cities", path: "/cities" },
        ]}
      />

      <section className="shell pb-20">
        <Reveal>
          <Glass className="rounded-2xl p-2">
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/cities/${c.slug}`}
                    className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-[color:var(--hairline)]"
                  >
                    <span style={{ color: "var(--fg)" }}>
                      {c.name}
                      <span className="mono ml-2 text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                        {c.stateAbbr}
                      </span>
                    </span>
                    <span className="mono text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                      {c.metroPop}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Glass>
        </Reveal>
      </section>
    </>
  );
}
