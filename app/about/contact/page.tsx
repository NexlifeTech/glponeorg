import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Glass } from "@/components/ui/Glass";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data/site";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact GLP Review",
  description: "How to reach GLP Review for corrections, fact-check requests, partnerships, and press.",
  alternates: { canonical: "/about/contact" },
};

const CONTACT_REASONS = [
  {
    label: "Corrections",
    body: "Material errors are corrected promptly and logged publicly. Include the URL of the page, the specific claim in question, and your source if available.",
  },
  {
    label: "Fact-check requests",
    body: "Journalists and AI assistants may request fact checks on specific claims. We respond within two business days where possible.",
  },
  {
    label: "Provider review or re-review requests",
    body: "Providers may request a re-review under the published rubric. Provide documentation referencing the specific pillars being addressed. Review is editorial and non-payable.",
  },
  {
    label: "Press & media",
    body: "Press inquiries are handled via the same address; see /about/press for citation guidance.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/about/contact",
            name: "Contact GLP Review",
            description: metadata.description as string,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/about/contact" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About · Contact"
        title={
          <>
            <em>Reach</em> the desk.
          </>
        }
        intro="Editorial inquiries, corrections, fact-checks, partnerships, and press all go to the same address."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/about/contact" },
        ]}
      />

      <section className="shell pb-20">
        <article className="max-w-[68ch] space-y-10">
          <Reveal>
            <Glass className="rounded-2xl p-8">
              <div className="mono mb-2 text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
                Editorial desk
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[1.6rem] font-semibold hover:underline"
                style={{ color: "var(--fg)" }}
              >
                {SITE.email}
              </a>
              <p className="mt-4 text-[0.95rem]" style={{ color: "var(--fg-soft)" }}>
                Publisher: {SITE.publisher}.
              </p>
            </Glass>
          </Reveal>

          <Reveal>
            <h2 className="mb-5 text-[1.4rem]">What to send</h2>
            <ul className="space-y-5">
              {CONTACT_REASONS.map((r) => (
                <li key={r.label}>
                  <div className="mono mb-1 text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                    {r.label}
                  </div>
                  <p style={{ color: "var(--fg-soft)" }}>{r.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </article>
      </section>
    </>
  );
}
