import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { TableOfContents } from "./TableOfContents";
import type { Crumb } from "@/components/ui/PageHero";

export type TocEntry = { id: string; label: string };

/**
 * Long-form article shell. Server component. Receives structured ToC entries
 * (built from the article's section list at build time) and renders a 2-col
 * layout: article body on the left, sticky ToC on the right (desktop only).
 */
export function ArticleLayout({
  eyebrow,
  title,
  intro,
  crumbs,
  tocEntries,
  children,
  footer,
  tag,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
  tocEntries: TocEntry[];
  children: ReactNode;
  footer?: ReactNode;
  tag?: { label: string; href?: string };
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} crumbs={crumbs} />
      <section className="shell pb-20">
        {tag && (
          <div className="mono mb-8 text-[0.72rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
            {tag.href ? (
              <Link href={tag.href} className="hover:underline">
                {tag.label}
              </Link>
            ) : (
              tag.label
            )}
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
          <article className="max-w-[68ch]">
            {children}
            {footer}
          </article>
          <aside className="order-first lg:order-last">
            <TableOfContents entries={tocEntries} />
          </aside>
        </div>
      </section>
    </>
  );
}
