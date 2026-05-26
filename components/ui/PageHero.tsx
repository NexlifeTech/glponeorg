import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { name: string; path: string };

// Inner-page header. Light theme; sits below the floating dock (pt for clearance).
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
}) {
  return (
    <header data-theme-section="light" className="relative overflow-hidden pt-32 pb-14 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(120,124,130,0.14), transparent 65%)" }}
      />
      <div className="shell relative">
        <nav className="mono mb-6 flex flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: "var(--fg-muted)" }}>
          {crumbs.map((c, i) => (
            <span key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === crumbs.length - 1 ? (
                <span style={{ color: "var(--fg)" }}>{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:underline">
                  {c.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display mt-3 max-w-4xl text-[clamp(2.4rem,6vw,4.2rem)]" style={{ color: "var(--fg)" }}>
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
