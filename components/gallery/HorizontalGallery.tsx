"use client";

import Link from "next/link";
import { PROVIDERS } from "@/lib/data/providers";
import { scoreTier } from "@/lib/score";
import { Glass } from "@/components/ui/Glass";

// Apple-gallery feel: a horizontally-scrollable rail of provider cards with
// snap. Native overflow scroll (works on touch + trackpad), no scroll-jacking.
export function HorizontalGallery() {
  return (
    <div className="no-scrollbar -mx-[5vw] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[5vw] pb-4">
      {PROVIDERS.map((p) => {
        const tier = scoreTier(p.score);
        return (
          <Link
            key={p.slug}
            href={`/providers/${p.slug}`}
            className="snap-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <Glass className="flex h-full w-[78vw] flex-col rounded-[28px] p-7 sm:w-[340px]">
              <div className="flex items-start justify-between">
                <span className="mono text-[0.72rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
                  Rank #{p.rank}
                </span>
                <span
                  className="text-[2.4rem] font-semibold leading-none"
                  style={{ color: tier.color, opacity: tier.strength, letterSpacing: "-0.04em" }}
                >
                  {p.score}
                </span>
              </div>
              <h3 className="mt-5 text-[1.5rem] font-semibold" style={{ color: "var(--fg)" }}>
                {p.name}
              </h3>
              <p className="mt-1 text-[0.92rem]" style={{ color: "var(--fg-muted)" }}>
                {p.tagline}
              </p>
              <p className="mono mt-auto pt-6 text-[0.8rem]" style={{ color: "var(--fg-soft)" }}>
                {p.priceLabel}
              </p>
            </Glass>
          </Link>
        );
      })}
    </div>
  );
}
