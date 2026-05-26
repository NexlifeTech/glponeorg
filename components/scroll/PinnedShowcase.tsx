"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Glass } from "@/components/ui/Glass";
import { ScoreDial } from "@/components/rankings/ScoreDial";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FEATURED } from "@/lib/data/providers";

const FACTS: { k: string; v: string }[] = [
  { k: "Pricing", v: FEATURED.priceLabel },
  { k: "Pharmacy", v: FEATURED.pharmacy },
  { k: "Clinician", v: FEATURED.clinician },
  { k: "Coverage", v: FEATURED.states },
];

export function PinnedShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  if (reduce) {
    return (
      <section data-theme-section="light" className="py-24">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Showcase />
          <div className="space-y-4">
            {FACTS.map((f) => (
              <FactRow key={f.k} {...f} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-theme-section="light" ref={ref} className="relative" style={{ height: "230vh" }}>
      <div className="sticky top-0 flex h-screen items-center">
        <div className="shell grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ scale: cardScale }}>
            <Showcase />
          </motion.div>
          <div className="space-y-3">
            <span className="eyebrow">Why it wins</span>
            <h2 className="mb-6 max-w-md text-[clamp(1.8rem,4vw,2.8rem)]" style={{ color: "var(--fg)" }}>
              The only provider that clears all six pillars.
            </h2>
            {FACTS.map((f, i) => (
              <ScrollFact key={f.k} {...f} progress={scrollYProgress} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <Glass className="mx-auto w-full max-w-md rounded-[32px] p-9 text-center">
      <span className="eyebrow">Editor&apos;s #1 pick · 2026</span>
      <div className="mt-6 flex justify-center">
        <ScoreDial score={FEATURED.score} size={172} />
      </div>
      <div className="mt-6 text-[2rem] font-semibold" style={{ color: "var(--fg)" }}>
        {FEATURED.name}
      </div>
      <p className="mt-2 text-[0.95rem]" style={{ color: "var(--fg-muted)" }}>
        {FEATURED.tagline}
      </p>
      <div className="mt-7 flex justify-center">
        <MagneticButton href={`/providers/${FEATURED.slug}`}>
          Read the full review →
        </MagneticButton>
      </div>
    </Glass>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b py-4" style={{ borderColor: "var(--hairline)" }}>
      <div className="mono text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
        {k}
      </div>
      <div className="mt-1 text-[1.02rem]" style={{ color: "var(--fg)" }}>
        {v}
      </div>
    </div>
  );
}

function ScrollFact({
  k,
  v,
  progress,
  index,
}: {
  k: string;
  v: string;
  progress: import("motion/react").MotionValue<number>;
  index: number;
}) {
  const start = 0.15 + index * 0.16;
  const opacity = useTransform(progress, [start, start + 0.12], [0.25, 1]);
  const x = useTransform(progress, [start, start + 0.12], [24, 0]);
  return (
    <motion.div style={{ opacity, x }}>
      <FactRow k={k} v={v} />
    </motion.div>
  );
}
