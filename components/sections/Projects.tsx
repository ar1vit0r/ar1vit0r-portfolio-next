"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTiltCard } from "@/hooks/useTiltCard";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import { FEATURED_PROJECTS, COMPACT_PROJECTS, type ProjectCategory } from "@/data/projects";

const FILTERS: { key: ProjectCategory | "all"; labelKey: string | null; label?: string }[] = [
  { key: "all", labelKey: "projects.filterAll" },
  { key: "ai", labelKey: null, label: "AI/ML" },
  { key: "systems", labelKey: null, label: "Systems" },
  { key: "web", labelKey: null, label: "Web" },
  { key: "oss", labelKey: null, label: "Open Source" },
];

const TITLE_COLOR = { cyan: "text-cyan", magenta: "text-magenta", green: "text-green" } as const;

function FeaturedCard({ project }: { project: (typeof FEATURED_PROJECTS)[number] }) {
  const t = useTranslations();
  const tiltRef = useTiltCard<HTMLAnchorElement>();
  return (
    <a
      ref={tiltRef}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="block bg-card border border-border rounded-lg p-6"
    >
      <h3 className={`font-display text-md font-semibold mb-2 ${TITLE_COLOR[project.titleColor]}`}>{project.title}</h3>
      <p className="text-xs text-body mb-4">{t(project.descKey)}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-2xs border border-border rounded px-2 py-1 text-dim">{tag}</span>
        ))}
      </div>
    </a>
  );
}

function FilterButton({
  filterKey,
  label,
  active,
  onClick,
}: {
  filterKey: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useMagneticHover<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded border ${active ? "border-cyan text-cyan" : "border-border text-dim"}`}
    >
      {label}
    </button>
  );
}

export function Projects() {
  const t = useTranslations();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visibleFeatured = FEATURED_PROJECTS.filter((p) => filter === "all" || p.categories.includes(filter));
  const visibleCompact = COMPACT_PROJECTS.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle>{t("projects.title")}</SectionTitle>
      <div role="group" aria-label="Project filters" className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <FilterButton
            key={f.key}
            filterKey={f.key}
            label={f.labelKey ? t(f.labelKey) : f.label!}
            active={filter === f.key}
            onClick={() => setFilter(f.key)}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {visibleFeatured.map((p) => <FeaturedCard key={p.title} project={p} />)}
      </div>
      <h3 className="text-heading text-sm mb-4">More projects</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {visibleCompact.map((p) => (
          <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="border border-border rounded p-3 text-xs">
            <span className="block text-heading mb-1">{p.title}</span>
            <span className="text-2xs text-dim">{p.tags.join(" · ")}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
