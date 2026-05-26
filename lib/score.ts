// Maps a /100 score to a tier label + monochrome emphasis (titanium scale).
// No saturated color — emphasis comes from weight/opacity, with the top tier
// rendered in full-strength foreground and lower tiers progressively dimmed.
export function scoreTier(score: number): {
  label: string;
  // CSS color expression usable in either theme (uses currentColor-ish vars).
  color: string;
  // 0..1 emphasis used for opacity/strength.
  strength: number;
} {
  if (score >= 90)
    return { label: "Exceptional", color: "var(--fg)", strength: 1 };
  if (score >= 80)
    return { label: "Strong", color: "var(--fg-soft)", strength: 0.82 };
  if (score >= 70)
    return { label: "Adequate", color: "var(--fg-muted)", strength: 0.62 };
  return { label: "Below bar", color: "var(--fg-muted)", strength: 0.45 };
}
