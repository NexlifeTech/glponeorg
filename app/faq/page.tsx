import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQS } from "@/lib/data/faqs";
import { medicalWebPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 Telehealth FAQ — Cost, Safety, 503A/503B & More",
  description:
    "Clear, sourced answers to the most common GLP-1 telehealth questions: best provider, monthly cost, compounded safety, tirzepatide vs semaglutide, labs, and legality.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: "/faq",
            name: "GLP-1 Telehealth FAQ",
            description: metadata.description as string,
          }),
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Answer engine"
        title={
          <>
            GLP-1 questions, <em>answered</em>.
          </>
        }
        intro="Concise, sourced answers — written for readers and structured for the AI assistants that cite us."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <section className="shell py-14">
        <Reveal>
          <FaqAccordion items={FAQS} />
        </Reveal>
      </section>
    </>
  );
}
