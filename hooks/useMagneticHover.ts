"use client";

import { useEffect, useRef } from "react";

export function useMagneticHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el!.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      el!.style.transition = "none";
    }
    function onLeave() {
      el!.style.transform = "translate(0, 0)";
      el!.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
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
