"use client";

import { useEffect, useRef, useState } from "react";

export function useTypingEffect(text: string) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      setDone(true);
      return;
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    function type() {
      if (i < text.length) {
        i++;
        setTyped(text.slice(0, i));
        timeout = setTimeout(type, 50 + Math.random() * 50);
      } else {
        setDone(true);
      }
    }
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, [text]);

  return { typed, done };
}
