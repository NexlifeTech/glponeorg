import type { SVGProps } from "react";

// Minimal lab line-icons. currentColor, 1.5 stroke, 24-grid.
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Flask(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3L14 9.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

export function Molecule(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="17" r="2" />
      <circle cx="19" cy="17" r="2" />
      <path d="M12 7 6.5 15.5M12 7l5.5 8.5M7 17h10" />
    </svg>
  );
}

export function Vial(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 3h8M9.5 3v15a2.5 2.5 0 0 0 5 0V3" />
      <path d="M9.5 11h5" />
    </svg>
  );
}

export function Pipette(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M18.5 3.5a2.1 2.1 0 0 1 0 3L9 16l-3 1 1-3 9.5-9.5a2.1 2.1 0 0 1 2-1z" />
      <path d="M12 16v4M9 19h6" />
    </svg>
  );
}

export function Microscope(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 21h12M9 21v-3M9 18a5 5 0 0 0 8-4" />
      <path d="M9.5 4.5 13 8l-2 2-3.5-3.5z" />
      <path d="M11 6 7 10" />
    </svg>
  );
}

export function Capsule(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-25 12 12)" />
      <path d="M9.5 6.8 14.5 17.2" />
    </svg>
  );
}

export function Dna(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9" />
      <path d="M8.5 6h7M8.5 18h7M7.5 9.5h9M7.5 14.5h9" />
    </svg>
  );
}

export function Shield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Gear(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  );
}

export function Scale(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6a3 3 0 0 0 5 0L19 7z" />
    </svg>
  );
}
