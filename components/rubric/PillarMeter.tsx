"use client";

import { motion, useReducedMotion } from "motion/react";
import { PILLARS } from "@/lib/data/rubric";
import { Shield, Vial, Dna, Scale, Microscope, Gear } from "@/components/icons/lab";
import type { ComponentType, SVGProps } from "react";

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [Shield, Vial, Dna, Scale, Microscope, Gear];

export function PillarMeter() {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className="space-y-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: 0.09 } } }}
    >
      {PILLARS.map((pillar, i) => {
        const Icon = ICONS[i];
        return (
          <motion.li
            key={pillar.id}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="mb-2 flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0" style={{ color: "var(--fg)" }} />
              <span className="flex-1 text-[0.98rem] font-medium" style={{ color: "var(--fg)" }}>
                {pillar.name}
              </span>
              <span className="mono shrink-0 text-[0.8rem]" style={{ color: "var(--fg-muted)" }}>
                {pillar.weight} pts
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--hairline)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--silver), var(--fg))" }}
                variants={{
                  hidden: { width: 0 },
                  show: { width: `${pillar.weight * 5}%`, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                }}
              />
            </div>
            <p className="mt-2 pl-8 text-[0.85rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              {pillar.measures}
            </p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
