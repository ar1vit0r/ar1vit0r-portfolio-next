"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function useGlitchHover<T extends HTMLElement>(original: string) {
  const ref = useRef<T>(null);
  const [displayText, setDisplayText] = useState(original);

  useEffect(() => {
    setDisplayText(original);
    const el = ref.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval>;

    function onEnter() {
      let iterations = 0;
      interval = setInterval(() => {
        setDisplayText(
          original
            .split("")
            .map((char, i) => (i < iterations ? original[i] : CHARS[Math.floor(Math.random() * CHARS.length)]))
            .join("")
        );
        iterations += 0.5;
        if (iterations >= original.length) {
          clearInterval(interval);
          setDisplayText(original);
        }
      }, 30);
    }
    function onLeave() {
      clearInterval(interval);
      setDisplayText(original);
    }
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [original]);

  return { ref, displayText };
}
