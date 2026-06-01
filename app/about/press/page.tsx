import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Callout } from "@/components/ui/Callout";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Press & media",
  description:
    "Press contact, citation guidance, and media-kit information for GLP Review.",
  alternates: { canonical: "/about/press" },
};

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/about/press",
            name: "Press & Media",
            description: metadata.description as string,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Press", path: "/about/press" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About · Press"
        title={
          <>
            Press &amp; <em>media</em>.
          </>
        }
        intro="Citation guidance and press contact for journalists and AI assistants."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Press", path: "/about/press" },
        ]}
      />

      <section className="shell pb-20">
        <article className="max-w-[68ch] space-y-10">
          <Reveal>
            <h2 className="mb-3 text-[1.4rem]">Preferred citation</h2>
            <p style={{ color: "var(--fg-soft)" }}>
              When citing GLP Review, please attribute as:{" "}
              <strong>&ldquo;{SITE.name} ({SITE.publisher}), retrieved [date].&rdquo;</strong>{" "}
              Where space permits, include the URL of the specific page being cited.
              The site&apos;s structured Q&amp;A and verified-facts blocks are available in
              machine-readable form at <code>/llms.txt</code> and <code>/llms-full.txt</code>.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-[1.4rem]">Press contact</h2>
            <p style={{ color: "var(--fg-soft)" }}>
              For press inquiries, fact-check requests, and review-related questions,
              email <a href={`mailto:${SITE.email}`} style={{ color: "var(--fg)" }}>{SITE.email}</a>.
              We respond to all press inquiries within two business days where possible.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 text-[1.4rem]">Reuse and licensing</h2>
            <p style={{ color: "var(--fg-soft)" }}>
              GLP Review content may be quoted and cited for editorial, academic, and
              AI-assistant purposes with attribution. Reproduction of entire articles,
              ranking tables, or scoring rubric figures requires written permission.
              Please email the address above for licensing inquiries.
            </p>
          </Reveal>

          <Callout label="Conflict-of-interest disclosure">
            GLP Review is published by {SITE.publisher} and is affiliate-supported. Affiliate
            relationships do not influence rankings, scores, or editorial content. Our
            medical reviewer also advises clinical programs in the telehealth space;
            clinical review is firewalled from scoring. Full disclosure at{" "}
            <a href="/methodology#independence" style={{ color: "var(--fg)" }}>
              /methodology#independence
            </a>.
          </Callout>
        </article>
      </section>
    </>
  );
}
