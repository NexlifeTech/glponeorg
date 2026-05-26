import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mono text-[5rem] font-semibold leading-none text-[var(--fg)]">
        404
      </span>
      <h1 className="mt-4 text-[2rem]">This page didn&apos;t make the cut.</h1>
      <p className="lede mt-3 max-w-md text-[var(--fg-soft)]">
        The page you&apos;re after isn&apos;t here. The 2026 rankings, however, are.
      </p>
      <Link
        href="/rankings"
        className="mt-8 rounded-full bg-[var(--fg)] px-7 py-3.5 text-[0.95rem] font-semibold text-[var(--bg)] transition-transform hover:scale-[1.02]"
      >
        See the rankings →
      </Link>
    </section>
  );
}
