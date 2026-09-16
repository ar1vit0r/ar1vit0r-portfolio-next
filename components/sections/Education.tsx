"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";

const TIMELINE = [
  { dot: "cyan", title: "M.Sc. in Computer Science", place: "Federal University of Pelotas (UFPel)", date: "2024 — Present" },
  { dot: "magenta", title: "B.Sc. in Computer Science", place: "Federal University of Pelotas (UFPel)", date: "2017 — 2023" },
  { dot: "green", title: "Technical Diploma in Electronics", place: "Instituto Federal Sul-Rio-Grandense", date: "2014 — 2016" },
] as const;

const DOT_COLOR = { cyan: "bg-cyan", magenta: "bg-magenta", green: "bg-green" } as const;

export function Education() {
  const t = useTranslations();
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle>{t("education.title")}</SectionTitle>
      <div className="space-y-4 mb-12">
        {TIMELINE.map((item) => (
          <div key={item.title} className="flex gap-4 bg-card border border-border rounded-lg p-6">
            <span className={`w-3 h-3 rounded-full mt-1 ${DOT_COLOR[item.dot]}`} />
            <div>
              <h3 className="text-heading font-medium">{item.title}</h3>
              <p className="text-xs text-dim">{item.place}</p>
              <p className="text-xs text-dim">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-heading text-sm mb-4">Certifications</h3>
      <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
        <span className="text-2xl">🏆</span>
        <div>
          <h3 className="text-heading text-sm font-medium">LangGraph Foundation: Introduction to LangGraph - Python</h3>
          <p className="text-xs text-dim">LangChain Academy</p>
          <p className="text-xs text-dim">Jun 2026 — ID: 7inmi475ao</p>
        </div>
      </div>
    </section>
  );
}
