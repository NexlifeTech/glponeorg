import Link from "next/link";

// GLP REVIEW wordmark — titanium diamond node + minimal type.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="GLP Review — home"
      style={{ color: "var(--fg)" }}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center" aria-hidden>
        <span className="absolute inset-0 rotate-45 rounded-[3px] border border-current opacity-80 transition-transform duration-300 group-hover:rotate-[135deg]" />
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight">GLP Review</span>
    </Link>
  );
}
