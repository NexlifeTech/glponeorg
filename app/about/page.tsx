import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { Callout } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { TEAM, EDITORIAL } from "@/lib/data/team";
import { SITE } from "@/lib/data/site";
import { medicalWebPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About GLP Review — Editorial Team & Independence",
  description:
    "GLP Review is an independent editorial publication scoring GLP-1 telehealth providers. Meet the team, our credentials, and our non-payable ranking policy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/about",
            name: "About GLP Review — Editorial Team & Independence",
            description: metadata.description as string,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About"
        title={
          <>
            An independent <em>editorial</em> publication.
          </>
        }
        intro={`${SITE.name} is published by ${SITE.publisher}. We score GLP-1 telehealth providers against a public rubric — and we don't sell our verdicts.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="shell py-14">
        <Reveal className="mb-14 max-w-3xl space-y-5">
          <h2 className="text-[1.7rem]">Our mission</h2>
          <p className="text-[var(--fg-soft)]">
            GLP Review exists to make GLP-1 telehealth scoring legible. The cash-pay
            compounded-GLP-1 market grew rapidly in 2022–2024 under the FDA Drug
            Shortages list exception; the post-shortage market that followed is more
            heterogeneous in quality than its marketing copy suggests. Our published
            v3.0 six-pillar rubric is our attempt to make the differences that matter —
            who is prescribing, where the medication is compounded, what the maintenance
            price actually is — visible enough that a patient can use them.
          </p>
          <p className="text-[var(--fg-soft)]">
            We are an editorial publication, not a clinical practice. Rankings are
            non-payable. Affiliate relationships exist; they do not influence scores.
          </p>
        </Reveal>

        <Reveal className="mb-12 max-w-3xl">
          <h2 id="team" className="scroll-mt-24 mb-4 text-[1.7rem]">The team</h2>
          <p className="text-[var(--fg-soft)]">
            Our research and review work is led by named people with verifiable
            credentials. Clinical review is advisory and firewalled from scoring.
            Fact-checking is independent of editorial and is not employed by any
            reviewed provider.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {TEAM.map((m) => (
            <Reveal as="article" key={m.id}>
              <div id={m.id} className="glass scroll-mt-24 h-full p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline-strong)] text-[var(--fg)]"
                  aria-hidden
                >
                  <span className="mono text-[0.9rem]">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <h3 className="text-[1.2rem] text-[var(--fg)]">{m.name}</h3>
                <p className="mono mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-[var(--fg)]">
                  {m.role}
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--fg-soft)]">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 max-w-3xl space-y-5">
          <h2 className="text-[1.7rem]">How we stay independent</h2>
          <p className="text-[var(--fg-soft)]">{EDITORIAL.independence}</p>
          <Callout label="Conflict firewall" variant="warn">
            {EDITORIAL.firewall}
          </Callout>
          <Callout label="Corrections">{EDITORIAL.corrections}</Callout>
        </Reveal>

        <Reveal className="mt-14 max-w-3xl space-y-5">
          <h2 className="text-[1.7rem]">Funding model</h2>
          <p className="text-[var(--fg-soft)]">
            GLP Review is affiliate-supported. When a reader selects a provider through
            a link on our site, the provider may compensate us for the referral. This
            does not change the scores, the ranking order, the verdict text, or any
            editorial recommendation. Affiliate arrangements exist with several providers
            in our directory at varying terms; the highest-paying affiliate is not the
            top-ranked provider, and ranking changes are not coordinated with affiliate
            negotiations. We do not run programmatic display advertising.
          </p>
          <p className="text-[var(--fg-soft)]">
            We do not accept payment for placement, scoring adjustments, or favorable
            coverage of any kind. This is not a stylistic preference; it is the design
            of the publication.
          </p>
        </Reveal>

        <Reveal className="mt-14 max-w-3xl">
          <h2 className="mb-4 text-[1.7rem]">Reach us</h2>
          <p className="text-[var(--fg-soft)]">
            Editorial inquiries, corrections, fact-checks, press, and partnership
            questions all go to{" "}
            <a href={`mailto:${SITE.email}`} style={{ color: "var(--fg)" }}>{SITE.email}</a>.
            See also our{" "}
            <Link href="/about/press" style={{ color: "var(--fg)" }}>press page</Link>{" "}
            for citation guidance and the{" "}
            <Link href="/about/contact" style={{ color: "var(--fg)" }}>contact page</Link>{" "}
            for full inquiry triage.
          </p>
          <p className="mono mt-4 text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>
            Publisher: {SITE.publisher}
          </p>
        </Reveal>
      </section>
    </>
  );
}
