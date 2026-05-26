import type { Provider } from "@/lib/data/providers";
import { ScoreDial } from "./ScoreDial";
import { Pill } from "@/components/ui/Pill";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Glass } from "@/components/ui/Glass";

export function FeaturedProviderCard({ p }: { p: Provider }) {
  return (
    <Glass as="article" className="overflow-hidden rounded-[32px]">
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <Pill dot>Editor&apos;s #1 pick · 2026</Pill>
            <Pill>Scored on the v3.0 rubric</Pill>
          </div>

          <h3 className="text-[2.2rem] font-semibold leading-none sm:text-[2.8rem]" style={{ color: "var(--fg)", letterSpacing: "-0.04em" }}>
            {p.name}
          </h3>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {p.verdict}
          </p>

          <dl className="mono mt-7 grid gap-x-6 gap-y-4 text-[0.82rem] sm:grid-cols-2">
            {[
              ["Pricing", p.priceLabel],
              ["Pharmacy", p.pharmacy],
              ["Clinician", p.clinician],
              ["Coverage", p.states],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
                  {k}
                </dt>
                <dd className="mt-1" style={{ color: "var(--fg)" }}>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href={`/providers/${p.slug}`}>
              Read the full {p.name} review →
            </MagneticButton>
            <MagneticButton href={p.url} variant="ghost" external>
              Visit {p.name}
            </MagneticButton>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center gap-4 lg:pl-10"
          style={{ borderLeft: "1px solid var(--hairline)" }}
        >
          <ScoreDial score={p.score} size={150} />
          <div className="mono flex items-center gap-1.5 text-[0.78rem]" style={{ color: "var(--fg-muted)" }}>
            ★ {p.rating.toFixed(1)} · {p.reviewCount.toLocaleString()} reviews
          </div>
        </div>
      </div>
    </Glass>
  );
}
