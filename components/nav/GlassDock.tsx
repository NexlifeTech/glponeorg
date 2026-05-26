"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Scale, Gear, Microscope, Molecule, Capsule, Flask, Shield } from "@/components/icons/lab";

type Item = { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

const ITEMS: Item[] = [
  { label: "Rankings", href: "/rankings", Icon: Scale },
  { label: "Methodology", href: "/methodology", Icon: Gear },
  { label: "Providers", href: "/providers", Icon: Microscope },
  { label: "Compare", href: "/compare", Icon: Molecule },
  { label: "Medications", href: "/medications/tirzepatide", Icon: Capsule },
  { label: "FAQ", href: "/faq", Icon: Flask },
  { label: "About", href: "/about", Icon: Shield },
];

function Mark() {
  return (
    <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden>
      <span className="absolute inset-0 rotate-45 rounded-[3px] border border-current opacity-80" />
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}

export function GlassDock() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const expanded = hover; // desktop hover-expand

  const isActive = (href: string) => {
    const base = href.split("?")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/* Desktop: hover-expanding dock */}
      <nav
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="glass glass-sheen hidden items-center gap-1 rounded-full px-2 py-2 lg:flex"
        style={{ color: "var(--fg)" }}
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.9rem] font-semibold"
        >
          <Mark />
          <span className="tracking-tight">GLP Review</span>
        </Link>
        <span className="mx-1 h-5 w-px" style={{ background: "var(--hairline)" }} />
        {ITEMS.map(({ label, href, Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className="group relative flex items-center rounded-full px-3 py-2 transition-colors"
              style={{ color: active ? "var(--fg)" : "var(--fg-muted)" }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--hairline)" }}
              />
              <Icon className="relative h-[18px] w-[18px] shrink-0" />
              <motion.span
                className="relative overflow-hidden whitespace-nowrap text-[0.86rem]"
                initial={false}
                animate={{
                  width: expanded ? "auto" : 0,
                  opacity: expanded ? 1 : 0,
                  marginLeft: expanded ? 8 : 0,
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 38 }
                }
              >
                {label}
              </motion.span>
              {active && (
                <span
                  className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-current"
                  aria-hidden
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: compact pill + tap-to-open glass sheet */}
      <div className="w-full max-w-md lg:hidden">
        <nav
          className="glass flex items-center justify-between rounded-full px-3 py-2.5"
          style={{ color: "var(--fg)" }}
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center gap-2 px-2 text-[0.9rem] font-semibold">
            <Mark />
            <span>GLP Review</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--hairline)" }}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`h-px w-4 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-4 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-2 overflow-hidden rounded-3xl p-2"
              style={{ color: "var(--fg)" }}
            >
              {ITEMS.map(({ label, href, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3"
                  style={{ color: isActive(href) ? "var(--fg)" : "var(--fg-muted)" }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  <span className="text-[0.95rem]">{label}</span>
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
