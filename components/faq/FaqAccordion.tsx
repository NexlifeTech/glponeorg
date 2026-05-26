import type { QA } from "@/lib/data/faqs";

// Accessible accordion using native <details>. No JS required.
export function FaqAccordion({ items }: { items: QA[] }) {
  return (
    <div className="border-y" style={{ borderColor: "var(--hairline)" }}>
      {items.map((item) => (
        <details key={item.q} className="group border-b" style={{ borderColor: "var(--hairline)" }}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[1.05rem] font-medium" style={{ color: "var(--fg)" }}>
              {item.q}
            </span>
            <span
              className="shrink-0 text-[1.3rem] leading-none transition-transform duration-300 group-open:rotate-45"
              style={{ color: "var(--fg-muted)" }}
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="pb-6 pr-8 text-[0.97rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
