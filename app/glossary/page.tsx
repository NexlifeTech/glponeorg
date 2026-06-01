import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { GLOSSARY } from "@/lib/data/glossary";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Glossary — GLP-1, regulatory, and clinical terms",
  description:
    "Definitions for 50+ GLP-1-related terms: 503A, 503B, AHI, BMI, GLP-1, GIP, HbA1c, MASH, USP <797>, and more.",
  alternates: { canonical: "/glossary" },
};

const CATEGORY_LABEL: Record<string, string> = {
  regulatory: "Regulatory",
  pharmacology: "Pharmacology",
  clinical: "Clinical",
  rubric: "Rubric",
  trial: "Trial",
};

const CATEGORY_ORDER = ["regulatory", "pharmacology", "clinical", "trial", "rubric"] as const;

export default function GlossaryPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    terms: GLOSSARY.filter((t) => t.category === cat).sort((a, b) =>
      a.term.localeCompare(b.term)
    ),
  })).filter((g) => g.terms.length > 0);

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/glossary",
            name: "GLP-1 Glossary",
            description: metadata.description as string,
          }),
          {
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "@id": `${SITE.url}/glossary#termset`,
            name: "GLP Review Glossary",
            hasDefinedTerm: GLOSSARY.map((t) => ({
              "@type": "DefinedTerm",
              "@id": `${SITE.url}/glossary#${t.slug}`,
              name: t.term,
              description: t.definition,
              termCode: t.slug,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Reference"
        title={
          <>
            The <em>glossary</em>.
          </>
        }
        intro="Fifty-plus defined terms across regulatory, pharmacology, clinical, trial, and rubric vocabularies. Linked across the site."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ]}
      />

      <section className="shell pb-20">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Glass className="rounded-2xl p-5">
                <div className="mono mb-3 text-[0.66rem] uppercase tracking-[0.18em]" style={{ color: "var(--fg-muted)" }}>
                  Categories
                </div>
                <ul className="space-y-2">
                  {grouped.map((g) => (
                    <li key={g.cat}>
                      <a
                        href={`#cat-${g.cat}`}
                        className="text-[0.9rem] hover:underline"
                        style={{ color: "var(--fg)" }}
                      >
                        {CATEGORY_LABEL[g.cat]}{" "}
                        <span className="mono text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                          ({g.terms.length})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Glass>
            </Reveal>
          </aside>

          <div className="space-y-14">
            {grouped.map((g) => (
              <section key={g.cat} id={`cat-${g.cat}`} className="scroll-mt-32">
                <Reveal>
                  <h2 className="mb-6 text-[1.5rem]" style={{ color: "var(--fg)" }}>
                    {CATEGORY_LABEL[g.cat]}
                  </h2>
                </Reveal>
                <dl className="space-y-7">
                  {g.terms.map((t) => (
                    <div key={t.slug} id={t.slug} className="scroll-mt-32 border-b pb-7" style={{ borderColor: "var(--hairline)" }}>
                      <dt className="text-[1.05rem] font-semibold" style={{ color: "var(--fg)" }}>
                        {t.term}
                      </dt>
                      <dd className="mt-2 text-[0.96rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
                        {t.definition}
                      </dd>
                      {t.related && t.related.length > 0 && (
                        <div className="mono mt-3 text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                          See also:{" "}
                          {t.related.map((r, i) => (
                            <span key={r}>
                              <Link href={`#${r}`} className="hover:underline" style={{ color: "var(--fg)" }}>
                                {r}
                              </Link>
                              {i < t.related!.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
