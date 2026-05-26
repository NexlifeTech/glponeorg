"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// Types `text` out once on mount. SEO-safe: initial render shows the full text
// (matches SSR / no-JS / reduced-motion), then re-types after paint.
export function TypeLine({ text, speed = 42 }: { text: string; speed?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(text.length);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let id: ReturnType<typeof setInterval> | undefined;
    // Defer the reset to an async frame so no setState runs synchronously in
    // the effect body (avoids cascading renders); SSR still ships full text.
    const raf = requestAnimationFrame(() => {
      setCount(0);
      setDone(false);
      id = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speed);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (id) clearInterval(id);
    };
  }, [text, speed, reduce]);

  return (
    <>
      {text.slice(0, count)}
      {!done && <span className="caret" aria-hidden>&nbsp;</span>}
    </>
  );
}

// Decorative: types and deletes through a loop of phrases. aria-hidden.
export function RotatingType({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (reduce) return;
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = phrases[phrase];
      char += deleting ? -1 : 1;
      setText(full.slice(0, char));

      let delay = deleting ? 34 : 64;
      if (!deleting && char === full.length) {
        delay = 1500;
        deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1500);
    return () => clearTimeout(timer);
  }, [phrases, reduce]);

  return (
    <span className={className} aria-hidden>
      {text}
      <span className="caret">&nbsp;</span>
    </span>
  );
}
