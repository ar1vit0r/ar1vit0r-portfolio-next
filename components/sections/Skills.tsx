"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTiltCard } from "@/hooks/useTiltCard";

const SKILL_GROUPS = [
  { icon: "</>", title: "Languages", tags: ["Python", "C/C++", "Haskell", "SQL", "GraphQL"] },
  { icon: "⚙", title: "AI / ML", tags: ["LangGraph", "LangChain", "Claude/GPT", "Ollama", "Prompt Eng."] },
  { icon: "☁", title: "MLOps & Cloud", tags: ["MLflow", "Azure ML", "AWS", "Docker", "CI/CD"] },
  { icon: "⚙", title: "Backend & Security", tags: ["FastAPI", "Rails", "PostgreSQL", "Keycloak", "RBAC", "Git"] },
] as const;

function SkillCard({ icon, title, tags }: (typeof SKILL_GROUPS)[number]) {
  const ref = useTiltCard<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-card border border-border rounded-lg p-6">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-heading font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-2xs border border-border rounded px-2 py-1 text-dim">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const t = useTranslations();
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle>{t("skills.title")}</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_GROUPS.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
