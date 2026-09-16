"use client";

import { useEffect, useRef } from "react";

export function useTiltCard<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el!.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-6px)`;
      el!.style.transition = "none";
    }
    function onLeave() {
      el!.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
      el!.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
