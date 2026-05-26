import Link from "next/link";
import { PROVIDERS } from "@/lib/data/providers";
import { scoreTier } from "@/lib/score";

// Titanium data table — sticky header, mono cells, #1 row subtly raised.
export function ComparisonMatrix() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--hairline)" }}>
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr style={{ background: "color-mix(in srgb, var(--fg) 4%, transparent)" }}>
            {["#", "Provider", "Score", "Pricing", "Pharmacy disclosure", "Clinician", "States"].map((h) => (
              <th
                key={h}
                className="mono px-4 py-3 text-[0.66rem] uppercase tracking-[0.14em]"
                style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--hairline)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PROVIDERS.map((p) => {
            const tier = scoreTier(p.score);
            return (
              <tr
                key={p.slug}
                style={{
                  borderBottom: "1px solid var(--hairline)",
                  background:
                    p.rank === 1 ? "color-mix(in srgb, var(--fg) 5%, transparent)" : "transparent",
                }}
              >
                <td className="mono px-4 py-3" style={{ color: "var(--fg-muted)" }}>
                  {p.rank}
                </td>
                <td className="px-4 py-3">
                  <Link href={`/providers/${p.slug}`} className="font-medium hover:underline" style={{ color: "var(--fg)" }}>
                    {p.name}
                  </Link>
                </td>
                <td className="mono px-4 py-3 font-semibold" style={{ color: tier.color, opacity: tier.strength }}>
                  {p.score}
                </td>
                <td className="px-4 py-3 text-[0.85rem]" style={{ color: "var(--fg-soft)" }}>{p.priceLabel}</td>
                <td className="px-4 py-3 text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>{p.pharmacy}</td>
                <td className="px-4 py-3 text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>{p.clinician}</td>
                <td className="px-4 py-3 text-[0.85rem]" style={{ color: "var(--fg-muted)" }}>{p.states}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
