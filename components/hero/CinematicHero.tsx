"use client";

import { motion, useReducedMotion } from "motion/react";
import { TypeLine, RotatingType } from "./TypeLine";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScoreDial } from "@/components/rankings/ScoreDial";
import { Gear } from "@/components/icons/lab";
import { FEATURED } from "@/lib/data/providers";
import { SITE } from "@/lib/data/site";

export function CinematicHero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Atmosphere: soft titanium blooms + faint oversized gears */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[-10%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(120,124,130,0.16), transparent 65%)" }}
        />
        <Gear className="gear-cw absolute -right-24 top-20 h-[420px] w-[420px] opacity-[0.05]" style={{ color: "var(--fg)" }} />
        <Gear className="gear-ccw absolute -left-28 bottom-0 h-[320px] w-[320px] opacity-[0.04]" style={{ color: "var(--fg)" }} />
      </div>

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <motion.div {...rise(0)} className="mb-7 flex items-center gap-3">
            <span className="eyebrow">Independent · Non-payable</span>
            <span className="h-px w-12" style={{ background: "var(--hairline-strong)" }} />
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="display text-[clamp(2.6rem,7vw,5.6rem)]"
            style={{ color: "var(--fg)" }}
          >
            The most transparent{" "}
            <span
              style={{
                background: "linear-gradient(120deg, var(--fg), var(--silver))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                // inline-block + right padding keeps background-clip:text from
                // cropping the final glyph (the "w"); negative margin keeps the
                // comma snug.
                display: "inline-block",
                paddingRight: "0.14em",
                marginRight: "-0.14em",
              }}
            >
              GLP-1 review
            </span>
            ,{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <TypeLine text="period." />
            </span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-7 max-w-xl text-[1.18rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            We score {SITE.providersReviewed} U.S. telehealth providers on one published
            six-pillar rubric. No provider can pay for placement.
          </motion.p>

          <motion.div {...rise(0.24)} className="mono mt-4 h-6 text-[0.95rem]" style={{ color: "var(--fg-muted)" }}>
            <RotatingType
              phrases={[
                "10 providers scored.",
                "6 transparency pillars.",
                "0 pay-to-play.",
                "NexLife: 96 / 100.",
              ]}
            />
          </motion.div>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="/rankings">See the 2026 rankings →</MagneticButton>
            <MagneticButton href="/methodology" variant="ghost">
              How we score
            </MagneticButton>
          </motion.div>
        </div>

        {/* Floating liquid-glass score card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40, rotate: reduce ? 0 : -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="justify-self-center"
        >
          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass glass-sheen w-[300px] rounded-[28px] p-7 text-center"
          >
            <span className="eyebrow">Editor&apos;s #1 · 2026</span>
            <div className="mt-4 flex justify-center">
              <ScoreDial score={FEATURED.score} size={150} />
            </div>
            <div className="mt-5 text-[1.5rem] font-semibold" style={{ color: "var(--fg)" }}>
              {FEATURED.name}
            </div>
            <div className="mono mt-1 text-[0.8rem]" style={{ color: "var(--fg-muted)" }}>
              {FEATURED.priceLabel}
            </div>
            <div className="mt-5 h-px w-full" style={{ background: "var(--hairline)" }} />
            <div className="mono mt-4 flex items-center justify-center gap-1.5 text-[0.78rem]" style={{ color: "var(--fg-muted)" }}>
              ★ {FEATURED.rating.toFixed(1)} · {FEATURED.reviewCount.toLocaleString()} reviews
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.5)}
        className="shell absolute inset-x-0 bottom-8 hidden items-center justify-center gap-2 sm:flex"
      >
        <span className="mono text-[0.66rem] uppercase tracking-[0.2em]" style={{ color: "var(--fg-muted)" }}>
          Scroll
        </span>
        <span className="h-8 w-px" style={{ background: "var(--hairline-strong)" }} />
      </motion.div>
    </section>
  );
}
