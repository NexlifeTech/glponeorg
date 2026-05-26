"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

type Props = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

// Counts up to `value` when scrolled into view. Static under reduced-motion.
export function AnimatedNumber({
  value,
  decimals = 0,
  duration = 1.4,
  className,
  suffix = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = value.toFixed(decimals) + suffix;
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, suffix, reduce, mv]);

  return (
    <span ref={ref} className={className}>
      {reduce ? value.toFixed(decimals) + suffix : "0".padEnd(1) + suffix}
    </span>
  );
}
