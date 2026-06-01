"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Scale,
  Gear,
  Microscope,
  Molecule,
  Capsule,
  Flask,
  Shield,
  Pipette,
  Vial,
  Dna,
} from "@/components/icons/lab";

type Item = { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; blurb?: string };

// Primary dock items (visible compact, labels expand on hover).
const PRIMARY: Item[] = [
  { label: "Rankings", href: "/rankings", Icon: Scale },
  { label: "Methodology", href: "/methodology", Icon: Gear },
  { label: "Providers", href: "/providers", Icon: Microscope },
  { label: "Compare", href: "/compare", Icon: Molecule },
  { label: "Medications", href: "/medications/tirzepatide", Icon: Capsule },
  { label: "About", href: "/about", Icon: Shield },
];

// Library mega-menu — three categorized columns.
type LibraryColumn = { title: string; items: Item[] };

const LIBRARY: LibraryColumn[] = [
  {
    title: "Read",
    items: [
      { label: "Journal", href: "/journal", Icon: Pipette, blurb: "Analytical essays" },
      { label: "Guides", href: "/guides", Icon: Flask, blurb: "How GLP-1 access actually works" },
      { label: "News", href: "/news", Icon: Dna, blurb: "Regulatory and market briefs" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "Glossary", href: "/glossary", Icon: Scale, blurb: "50+ defined terms" },
      { label: "Research", href: "/research", Icon: Microscope, blurb: "Trial summaries" },
      { label: "Conditions", href: "/conditions", Icon: Capsule, blurb: "T2D, obesity, OSA, more" },
      { label: "Pharmacies", href: "/pharmacies", Icon: Vial, blurb: "503A and 503B partners" },
      { label: "FAQ", href: "/faq", Icon: Shield, blurb: "Snippet-ready answers" },
    ],
  },
  {
    title: "Geo",
    items: [
      { label: "States", href: "/states", Icon: Gear, blurb: "50 states + DC" },
      { label: "Cities", href: "/cities", Icon: Molecule, blurb: "30 major metros" },
    ],
  },
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
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const expanded = hover; // desktop hover-expand for labels

  const isActive = (href: string) => {
    const base = href.split("?")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const libraryActive = LIBRARY.some((col) => col.items.some((i) => isActive(i.href)));

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/* ── Desktop ──────────────────────────────────────────── */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center"
        onMouseLeave={() => {
          setHover(false);
          setLibraryOpen(false);
        }}
        onMouseEnter={() => setHover(true)}
      >
        <nav
          className="glass glass-sheen flex items-center gap-1 rounded-full px-2 py-2"
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

          {PRIMARY.map(({ label, href, Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setLibraryOpen(false)}
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
                    reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }
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

          {/* Library mega-menu trigger */}
          <button
            type="button"
            onMouseEnter={() => setLibraryOpen(true)}
            className="group relative flex items-center rounded-full px-3 py-2 transition-colors"
            style={{ color: libraryActive ? "var(--fg)" : "var(--fg-muted)" }}
            aria-haspopup="true"
            aria-expanded={libraryOpen}
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: "var(--hairline)" }}
            />
            <Flask className="relative h-[18px] w-[18px] shrink-0" />
            <motion.span
              className="relative overflow-hidden whitespace-nowrap text-[0.86rem]"
              initial={false}
              animate={{
                width: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0,
                marginLeft: expanded ? 8 : 0,
              }}
              transition={
                reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }
              }
            >
              Library
            </motion.span>
            {libraryActive && (
              <span
                className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-current"
                aria-hidden
              />
            )}
          </button>
        </nav>

        {/* Library mega-menu panel */}
        <AnimatePresence>
          {libraryOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-2 w-[760px] rounded-[28px] p-7"
              style={{ color: "var(--fg)" }}
              role="menu"
            >
              <div className="grid grid-cols-3 gap-7">
                {LIBRARY.map((col) => (
                  <div key={col.title}>
                    <div
                      className="mono mb-3 text-[0.66rem] uppercase tracking-[0.18em]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {col.title}
                    </div>
                    <ul className="space-y-0.5">
                      {col.items.map(({ label, href, Icon, blurb }) => {
                        const active = isActive(href);
                        return (
                          <li key={href}>
                            <Link
                              href={href}
                              onClick={() => setLibraryOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-2.5 py-2 transition-colors"
                              style={{
                                background: active ? "var(--hairline)" : "transparent",
                              }}
                              role="menuitem"
                            >
                              <Icon
                                className="mt-0.5 h-[18px] w-[18px] shrink-0"
                                style={{ color: "var(--fg)" }}
                              />
                              <span className="flex flex-col">
                                <span className="text-[0.92rem] font-medium leading-tight" style={{ color: "var(--fg)" }}>
                                  {label}
                                </span>
                                {blurb && (
                                  <span
                                    className="mt-0.5 text-[0.78rem] leading-snug"
                                    style={{ color: "var(--fg-muted)" }}
                                  >
                                    {blurb}
                                  </span>
                                )}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile ──────────────────────────────────────────── */}
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
              className="glass mt-2 max-h-[78vh] overflow-y-auto rounded-3xl p-3"
              style={{ color: "var(--fg)" }}
            >
              <div
                className="mono mb-2 px-2 text-[0.62rem] uppercase tracking-[0.18em]"
                style={{ color: "var(--fg-muted)" }}
              >
                Primary
              </div>
              {PRIMARY.map(({ label, href, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5"
                  style={{ color: isActive(href) ? "var(--fg)" : "var(--fg-muted)" }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  <span className="text-[0.95rem]">{label}</span>
                </Link>
              ))}

              {LIBRARY.map((col) => (
                <div key={col.title}>
                  <div
                    className="mono mb-2 mt-4 px-2 text-[0.62rem] uppercase tracking-[0.18em]"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {col.title}
                  </div>
                  {col.items.map(({ label, href, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-2.5"
                      style={{ color: isActive(href) ? "var(--fg)" : "var(--fg-muted)" }}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                      <span className="text-[0.95rem]">{label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
