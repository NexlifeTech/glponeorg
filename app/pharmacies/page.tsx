import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { PHARMACIES } from "@/lib/data/pharmacies";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 compounding pharmacies — 503A & 503B partners",
  description:
    "Profiles of the named compounding pharmacies (503A and 503B) that supply GLP-1 medications to telehealth programs.",
  alternates: { canonical: "/pharmacies" },
};

export default function PharmaciesIndex() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/pharmacies",
            name: "GLP-1 Compounding Pharmacies",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${SITE.url}/pharmacies#itemlist`,
            name: "Pharmacies",
            numberOfItems: PHARMACIES.length,
            itemListElement: PHARMACIES.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE.url}/pharmacies/${p.slug}`,
              name: p.name,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pharmacies", path: "/pharmacies" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Pharmacy directory"
        title={
          <>
            The <em>pharmacies behind</em> compounded GLP-1.
          </>
        }
        intro="Profiles of the named 503A compounding pharmacies and 503B FDA-registered outsourcing facilities that supply the compounded-GLP-1 telehealth industry."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pharmacies", path: "/pharmacies" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHARMACIES.map((p) => (
            <Reveal key={p.slug} as="div">
              <Link href={`/pharmacies/${p.slug}`} className="block h-full">
                <Glass className="flex h-full flex-col rounded-2xl p-6">
                  <span className="mono text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
                    {p.type}
                  </span>
                  <h2 className="mt-3 text-[1.15rem] font-semibold" style={{ color: "var(--fg)" }}>
                    {p.name}
                  </h2>
                  <p className="mt-2 text-[0.9rem]" style={{ color: "var(--fg-soft)" }}>
                    {p.summary}
                  </p>
                </Glass>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
