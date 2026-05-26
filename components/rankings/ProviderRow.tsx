"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Provider } from "@/lib/data/providers";
import { scoreTier } from "@/lib/score";

export function ProviderRow({ p, index }: { p: Provider; index: number }) {
  const reduce = useReducedMotion();
  const tier = scoreTier(p.score);

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      <Link
        href={`/providers/${p.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <span
          className="mono w-10 text-right text-[1.6rem] font-medium tabular-nums sm:w-14 sm:text-[2.2rem]"
          style={{ color: "var(--fg)", opacity: p.rank === 1 ? 1 : 0.4, letterSpacing: "-0.03em" }}
        >
          {p.rank}
        </span>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className="truncate text-[1.05rem] font-semibold transition-opacity group-hover:opacity-70"
              style={{ color: "var(--fg)" }}
            >
              {p.name}
            </span>
            {p.rank === 1 && (
              <span
                className="mono hidden shrink-0 rounded-full border px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.14em] sm:inline"
                style={{ color: "var(--fg-muted)", borderColor: "var(--hairline-strong)" }}
              >
                Editor&apos;s pick
              </span>
            )}
          </div>
          <p className="mt-0.5 truncate text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>
            {p.tagline}
          </p>
          <div
            className="mt-2 h-1 w-full max-w-[260px] overflow-hidden rounded-full"
            style={{ background: "var(--hairline)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--fg)", opacity: tier.strength }}
              variants={{
                hidden: { width: 0 },
                show: {
                  width: `${p.score}%`,
                  transition: { duration: 1, delay: 0.12 + index * 0.04, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            />
          </div>
        </div>

        <div className="text-right">
          <span
            className="text-[1.5rem] font-semibold tabular-nums"
            style={{ color: tier.color, opacity: tier.strength, letterSpacing: "-0.03em" }}
          >
            {p.score}
          </span>
          <span className="mono block text-[0.6rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
            /100
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
