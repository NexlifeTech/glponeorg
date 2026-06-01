import Link from "next/link";
import { Glass } from "@/components/ui/Glass";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function fmtDate(iso?: string): string | null {
  if (!iso) return null;
  return DATE_FORMATTER.format(new Date(iso));
}

/**
 * Generic list-page card used for News, Journal, Guides, Research, Pharmacies.
 * Server component — pure data → markup. The card is a glass tile with eyebrow,
 * title, summary, and an optional meta line (date / read time / category).
 */
export function ArticleCard({
  href,
  eyebrow,
  title,
  summary,
  date,
  meta,
}: {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  date?: string;
  meta?: string;
}) {
  const formatted = fmtDate(date);
  return (
    <Link href={href} className="group block h-full">
      <Glass className="flex h-full flex-col rounded-3xl p-7 transition-transform group-hover:-translate-y-0.5">
        <div className="mono text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
          {eyebrow}
        </div>
        <h3
          className="mt-4 text-[1.18rem] font-semibold leading-snug group-hover:opacity-80"
          style={{ color: "var(--fg)" }}
        >
          {title}
        </h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
          {summary}
        </p>
        {(formatted || meta) && (
          <div
            className="mono mt-5 flex items-center gap-3 pt-4 text-[0.72rem]"
            style={{ color: "var(--fg-muted)", borderTop: "1px solid var(--hairline)" }}
          >
            {formatted && <span>{formatted}</span>}
            {meta && (
              <>
                {formatted && <span aria-hidden>·</span>}
                <span>{meta}</span>
              </>
            )}
          </div>
        )}
      </Glass>
    </Link>
  );
}
