"use client";

import { useEffect, useState } from "react";

type Entry = { id: string; label: string };

/**
 * Sticky table of contents with scroll-spy. Client component because it needs
 * to track which section is currently in view. The entries are passed as
 * structured data from the parent (the article page already has the section
 * list) so we don't need to scan the DOM at hydration.
 */
export function TableOfContents({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState<string>(entries[0]?.id ?? "");

  useEffect(() => {
    if (entries.length === 0) return;
    const elements = entries
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entriesList) => {
        // Pick the entry closest to the top that's intersecting.
        const visible = entriesList.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const topId = visible[0].target.id;
        setActive(topId);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav aria-label="In this article" className="sticky top-24 hidden text-[0.85rem] lg:block">
      <div className="mono mb-3 text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: "var(--fg-muted)" }}>
        In this article
      </div>
      <ul className="space-y-2">
        {entries.map((e) => {
          const isActive = active === e.id;
          return (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                className="block border-l-2 py-1 pl-3 transition-colors"
                style={{
                  borderColor: isActive ? "var(--fg)" : "var(--hairline)",
                  color: isActive ? "var(--fg)" : "var(--fg-muted)",
                }}
              >
                {e.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
