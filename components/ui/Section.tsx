import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)]" style={{ color: "var(--fg)" }}>
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-[1.08rem] leading-relaxed" style={{ color: "var(--fg-soft)" }}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
