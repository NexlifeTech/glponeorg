import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { SITE } from "@/lib/data/site";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Rankings",
    links: [
      { label: "2026 Rankings", href: "/rankings" },
      { label: "Comparison matrix", href: "/compare" },
      { label: "NexLife review", href: "/providers/nexlife" },
      { label: "All providers", href: "/providers" },
    ],
  },
  {
    title: "Medications",
    links: [
      { label: "Tirzepatide", href: "/medications/tirzepatide" },
      { label: "Semaglutide", href: "/medications/semaglutide" },
    ],
  },
  {
    title: "Editorial",
    links: [
      { label: "Methodology", href: "/methodology" },
      { label: "Editorial independence", href: "/methodology#independence" },
      { label: "Corrections", href: "/methodology#corrections" },
      { label: "About the team", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      data-theme-section="dark"
      className="relative mt-24"
      style={{ borderTop: "1px solid var(--hairline)" }}
    >
      <div className="shell py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Independent editorial rankings of GLP-1 telehealth providers, scored on
              a published six-pillar transparency rubric. Rankings are non-payable.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.9rem] transition-opacity hover:opacity-70"
                      style={{ color: "var(--fg-soft)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-7" style={{ borderTop: "1px solid var(--hairline)" }}>
          <p className="mono mb-3 text-[0.72rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            MEDICAL DISCLAIMER — GLP Review is an editorial publication, not a medical
            provider or pharmacy. Content is for general information only and is not
            medical advice. Compounded GLP-1 medications are not FDA-approved drug
            products. Consult a licensed clinician before starting any treatment.
          </p>
          <div className="flex flex-col items-start justify-between gap-2 text-[0.8rem] sm:flex-row sm:items-center" style={{ color: "var(--fg-muted)" }}>
            <span>
              © {new Date().getFullYear()} {SITE.publisher}. All rights reserved.
            </span>
            <span className="mono">
              Affiliate-supported · Editorially independent · Rankings non-payable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
