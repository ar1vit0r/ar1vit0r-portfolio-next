"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useCounter } from "@/hooks/useCounter";

export function About() {
  const t = useTranslations();
  const yearsRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);
  useCounter(yearsRef, 5, "+");
  useCounter(projectsRef, 20, "+");

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle>{t("about.title")}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="mb-4">
            {t.rich("about.p1", { cyan: (chunks) => <span className="text-cyan">{chunks}</span> })}
          </p>
          <p>{t("about.p2")}</p>
        </div>
        <div className="flex gap-8">
          <div>
            <span ref={yearsRef} className="text-2xl font-display text-cyan block">0+</span>
            <span className="text-xs text-dim">{t("about.statYears")}</span>
          </div>
          <div>
            <span ref={projectsRef} className="text-2xl font-display text-cyan block">0+</span>
            <span className="text-xs text-dim">{t("about.statProjects")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
