"use client";

import { useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function useTextScramble(ref: React.RefObject<HTMLElement | null>) {
  const scrambledRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !scrambledRef.current) {
            scrambledRef.current = true;
            scramble(el, el.textContent ?? "");
          }
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function scramble(el: HTMLElement, newText: string) {
  const oldText = el.textContent ?? "";
  const length = Math.max(oldText.length, newText.length);
  const queue = Array.from({ length }, (_, i) => {
    const from = oldText[i] ?? "";
    const to = newText[i] ?? "";
    const start = Math.floor(Math.random() * 40);
    const end = start + Math.floor(Math.random() * 40);
    return { from, to, start, end, char: "" };
  });

  let frame = 0;
  function update() {
    let output = "";
    let complete = 0;
    for (const q of queue) {
      if (frame >= q.end) {
        complete++;
        output += q.to;
      } else if (frame >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        output += `<span class="text-dim">${q.char}</span>`;
      } else {
        output += q.from;
      }
    }
    el.innerHTML = output;
    if (complete < queue.length) {
      frame++;
      requestAnimationFrame(update);
    }
  }
  update();
}
