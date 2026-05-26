"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "ghost";
  external?: boolean;
};

// Pill button that subtly leans toward the cursor (Apple-ish micro-interaction).
export function MagneticButton({ children, href, variant = "solid", external }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "solid"
      ? "bg-[var(--fg)] text-[var(--bg)]"
      : "border border-[var(--hairline-strong)] text-[var(--fg)] hover:border-[var(--fg)]";

  const inner = (
    <motion.span
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-colors ${styles}`}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {inner}
    </Link>
  );
}
