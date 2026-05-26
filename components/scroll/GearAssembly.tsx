"use client";

import { useRef, type ComponentType, type SVGProps } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { PILLARS } from "@/lib/data/rubric";
import { Glass } from "@/components/ui/Glass";
import { Shield, Vial, Dna, Scale, Microscope, Gear } from "@/components/icons/lab";

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Shield,
  Vial,
  Dna,
  Scale,
  Microscope,
  Gear,
];

// Where each piece flies in from (px / deg), keyed by index.
const FROM = [
  { x: -340, y: -120, r: -14 },
  { x: 340, y: -150, r: 12 },
  { x: -420, y: 80, r: 10 },
  { x: 420, y: 60, r: -10 },
  { x: -200, y: 260, r: -8 },
  { x: 260, y: 280, r: 14 },
];

function PillarPiece({
  progress,
  index,
  reduce,
}: {
  progress: MotionValue<number>;
  index: number;
  reduce: boolean | null;
}) {
  const from = FROM[index];
  // Pieces converge over the first ~60% of the scroll track, staggered.
  const start = 0.06 * index;
  const end = 0.55 + 0.04 * index;
  const x = useTransform(progress, [start, end], [from.x, 0]);
  const y = useTransform(progress, [start, end], [from.y, 0]);
  const rotate = useTransform(progress, [start, end], [from.r, 0]);
  const opacity = useTransform(progress, [start, start + 0.12], [0, 1]);

  const pillar = PILLARS[index];
  const Icon = ICONS[index];

  return (
    <motion.div
      style={reduce ? undefined : { x, y, rotate, opacity }}
      className="w-full"
    >
      <Glass className="h-full rounded-3xl p-6">
        <Icon className="h-7 w-7" style={{ color: "var(--fg)" }} />
        <div className="mono mt-5 text-[0.7rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
          {pillar.weight} points
        </div>
        <h3 className="mt-1 text-[1.12rem] font-semibold leading-tight" style={{ color: "var(--fg)" }}>
          {pillar.name}
        </h3>
        <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
          {pillar.measures}
        </p>
      </Glass>
    </motion.div>
  );
}

export function GearAssembly() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const bigGear = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const bigGearRev = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12], [0.3, 1]);

  const grid = (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PILLARS.map((p, i) => (
        <PillarPiece key={p.id} progress={scrollYProgress} index={i} reduce={reduce} />
      ))}
    </div>
  );

  if (reduce) {
    return (
      <section data-theme-section="light" className="py-24">
        <div className="shell">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">The methodology</span>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.2rem)]" style={{ color: "var(--fg)" }}>
              Six pillars, one score.
            </h2>
          </div>
          {grid}
        </div>
      </section>
    );
  }

  return (
    <section
      data-theme-section="light"
      ref={trackRef}
      className="relative"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Interlocking background gears */}
        <motion.div aria-hidden style={{ rotate: bigGear }} className="pointer-events-none absolute -left-40 top-10">
          <Gear className="h-[520px] w-[520px] opacity-[0.06]" style={{ color: "var(--fg)" }} />
        </motion.div>
        <motion.div
          aria-hidden
          style={{ rotate: bigGearRev }}
          className="pointer-events-none absolute -right-32 bottom-0"
        >
          <Gear className="h-[400px] w-[400px] opacity-[0.05]" style={{ color: "var(--fg)" }} />
        </motion.div>

        <div className="shell relative">
          <motion.div style={{ opacity: headingOpacity }} className="mb-10 text-center">
            <span className="eyebrow">The methodology</span>
            <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(2rem,5.5vw,3.6rem)]" style={{ color: "var(--fg)" }}>
              Six pillars lock into one score.
            </h2>
          </motion.div>
          {grid}
        </div>
      </div>
    </section>
  );
}
