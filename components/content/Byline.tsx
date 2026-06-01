import Link from "next/link";
import { getMember } from "@/lib/data/team";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function fmt(iso: string): string {
  return DATE_FORMATTER.format(new Date(iso));
}

export function Byline({
  authorId,
  reviewerId,
  published,
  modified,
  reading,
}: {
  authorId?: string;
  reviewerId?: string;
  published: string;
  modified?: string;
  reading?: number;
}) {
  const author = authorId ? getMember(authorId) : undefined;
  const reviewer = reviewerId ? getMember(reviewerId) : undefined;

  return (
    <div
      className="mono mt-8 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t pt-5 text-[0.78rem]"
      style={{ borderColor: "var(--hairline)", color: "var(--fg-muted)" }}
    >
      {author && (
        <span>
          By{" "}
          <Link href={`/about#${author.id}`} className="hover:underline" style={{ color: "var(--fg)" }}>
            {author.name}
          </Link>
        </span>
      )}
      {reviewer && (
        <span>
          Reviewed by{" "}
          <Link href={`/about#${reviewer.id}`} className="hover:underline" style={{ color: "var(--fg)" }}>
            {reviewer.name}
          </Link>
        </span>
      )}
      <span>Published {fmt(published)}</span>
      {modified && modified !== published && <span>Updated {fmt(modified)}</span>}
      {reading != null && <span>{reading} min read</span>}
    </div>
  );
}
