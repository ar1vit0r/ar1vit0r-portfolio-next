"use client";

import { useRef } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";

export function SectionTitle({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useTextScramble(ref);
  return (
    <h2 ref={ref} className="font-display text-heading text-xl font-semibold mb-8">
      {children}
    </h2>
  );
}
