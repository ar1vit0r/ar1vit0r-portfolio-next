"use client";

import { useEffect, useRef } from "react";

export function useCounter(ref: React.RefObject<HTMLElement | null>, target: number, suffix = "") {
  const countedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !countedRef.current) {
            countedRef.current = true;
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, 30);
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix]);
}
