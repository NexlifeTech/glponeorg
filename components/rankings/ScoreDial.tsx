"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { scoreTier } from "@/lib/score";

type Props = { score: number; size?: number; label?: boolean };

// Monochrome titanium dial — graphite ring on a silver track, no glow.
export function ScoreDial({ score, size = 132, label = true }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [counted, setCounted] = useState(0);

  const shown = reduce ? score : counted;
  const tier = scoreTier(score);
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = shown / 100;
  const gid = `dial-${score}`;

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setCounted(Math.round(eased * score));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, score, reduce]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg ref={ref} width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--fg)" />
            <stop offset="100%" stopColor="var(--silver)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--hairline)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          opacity={tier.strength}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[2rem] font-semibold leading-none" style={{ color: "var(--fg)", letterSpacing: "-0.03em" }}>
          {shown}
        </span>
        <span className="mono mt-0.5 text-[0.6rem] uppercase tracking-[0.18em]" style={{ color: "var(--fg-muted)" }}>
          / 100
        </span>
        {label && (
          <span className="mono mt-1 text-[0.58rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
            {tier.label}
          </span>
        )}
      </div>
    </div>
  );
}
