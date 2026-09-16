"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.body.classList.add("custom-cursor");

    function onMove(e: MouseEvent) {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${e.clientX}px`;
        trailRef.current.style.top = `${e.clientY}px`;
      }
    }
    window.addEventListener("mousemove", onMove);

    function onEnter() { setHover(true); }
    function onLeave() { setHover(false); }
    const targets = document.querySelectorAll("a, button, .glass-card, .project-card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed z-[9999] w-2 h-2 rounded-full bg-cyan pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform ${hover ? "scale-[2.5]" : "scale-100"}`}
      />
      <div
        ref={trailRef}
        className="fixed z-[9998] w-8 h-8 rounded-full border border-cyan/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-150 ease-out"
      />
    </>
  );
}
