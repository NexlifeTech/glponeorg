import type { ReactNode } from "react";

type Variant = "info" | "warn";

export function Callout({
  children,
  variant = "info",
  label,
}: {
  children: ReactNode;
  variant?: Variant;
  label?: string;
}) {
  return (
    <aside
      className="rounded-r-xl border-l-2 py-4 pl-5 pr-4 text-[0.95rem] leading-relaxed"
      style={{
        borderColor: variant === "warn" ? "var(--silver)" : "var(--fg)",
        background: "color-mix(in srgb, var(--fg) 4%, transparent)",
        color: "var(--fg-soft)",
      }}
    >
      {label && <span className="eyebrow mr-2">{label}</span>}
      {children}
    </aside>
  );
}

// Citation-ready block. `.ai-snippet` is targeted by SpeakableSpecification.
export function AiSnippet({
  children,
  label = "Editorial summary",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <aside className="ai-snippet glass rounded-[22px] p-6 sm:p-7" data-ai-citable="true">
      <span className="eyebrow mb-2 block">{label}</span>
      <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--fg)" }}>
        {children}
      </p>
    </aside>
  );
}
