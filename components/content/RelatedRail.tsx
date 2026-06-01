import Link from "next/link";
import { Glass } from "@/components/ui/Glass";

export type RelatedItem = {
  href: string;
  eyebrow: string;
  title: string;
  meta?: string;
};

export function RelatedRail({ heading = "Related", items }: { heading?: string; items: RelatedItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-16 border-t pt-12" style={{ borderColor: "var(--hairline)" }}>
      <h2 className="mb-7 text-[1.4rem]" style={{ color: "var(--fg)" }}>
        {heading}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block h-full">
            <Glass className="h-full rounded-2xl p-5">
              <div className="mono text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
                {item.eyebrow}
              </div>
              <div className="mt-3 text-[1.02rem] font-medium leading-snug" style={{ color: "var(--fg)" }}>
                {item.title}
              </div>
              {item.meta && (
                <div className="mono mt-3 text-[0.72rem]" style={{ color: "var(--fg-muted)" }}>
                  {item.meta}
                </div>
              )}
            </Glass>
          </Link>
        ))}
      </div>
    </section>
  );
}
