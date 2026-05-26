"use client";

import { useEffect } from "react";

/**
 * Drives the adaptive light→dark→light journey — but *gradually*.
 *
 * Instead of snapping [data-theme] at a trigger (which felt jumpy) and
 * paint-tweening the body background (which felt laggy), we continuously map
 * scroll position to a 0..1 `--dark` amount. A fixed gradient overlay reads
 * that value as opacity (GPU-composited, frame-accurate, tied to the scroll),
 * easing in as dark sections approach the viewport center and out as they
 * leave. It tops out at a dark slate gray — never pure black.
 *
 * [data-theme] still flips (for text/glass tokens) but only once the overlay
 * is already mostly dark, so the text swap is hidden inside the gradient.
 */
export function ScrollTheme() {
  useEffect(() => {
    const darks = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme-section="dark"]')
    );
    const root = document.documentElement;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    let ticking = false;
    let curTheme = "";

    const compute = () => {
      ticking = false;
      const vh = window.innerHeight;
      const mid = vh / 2;
      const ramp = vh * 0.62; // distance over which dark eases in/out

      let amount = 0;
      for (const s of darks) {
        const r = s.getBoundingClientRect();
        let a: number;
        if (r.top <= mid && r.bottom >= mid) a = 1; // center inside a dark section
        else if (r.bottom < mid) a = 1 - (mid - r.bottom) / ramp; // section above
        else a = 1 - (r.top - mid) / ramp; // section below
        if (a > amount) amount = a;
      }
      amount = Math.max(0, Math.min(1, amount));
      root.style.setProperty("--dark", amount.toFixed(3));

      const theme = amount > 0.55 ? "dark" : "light";
      if (theme !== curTheme) {
        curTheme = theme;
        root.setAttribute("data-theme", theme);
        if (meta) meta.setAttribute("content", theme === "dark" ? "#23262c" : "#fbfbfd");
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        opacity: "var(--dark, 0)",
        background:
          "linear-gradient(170deg, #2b2f36 0%, #25282f 55%, #1f2228 100%)",
        pointerEvents: "none",
        willChange: "opacity",
      }}
    />
  );
}
