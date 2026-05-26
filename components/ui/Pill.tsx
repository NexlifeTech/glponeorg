import type { ReactNode } from "react";

export function Pill({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return (
    <span
      className="mono inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em]"
      style={{
        color: "var(--fg-muted)",
        borderColor: "var(--hairline-strong)",
        background: "color-mix(in srgb, var(--fg) 3%, transparent)",
      }}
    >
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--fg)" }}
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
