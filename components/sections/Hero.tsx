"use client";

import { useTranslations } from "next-intl";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useMagneticHover } from "@/hooks/useMagneticHover";

export function Hero() {
  const t = useTranslations();
  const { typed, done } = useTypingEffect(t("hero.role"));
  const ctaRef1 = useMagneticHover<HTMLAnchorElement>();
  const ctaRef2 = useMagneticHover<HTMLAnchorElement>();
  const ctaRef3 = useMagneticHover<HTMLAnchorElement>();

  return (
    <section id="hero" tabIndex={-1} className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
      <p className="font-mono text-cyan text-xs">{t("hero.tag")}</p>
      <h1 className="font-display text-heading text-2xl md:text-[4rem] font-bold">{t("hero.name")}</h1>
      <p className="text-lg text-body">
        {typed}
        {!done && <span className="border-r border-cyan animate-pulse">&nbsp;</span>}.
      </p>
      <div className="flex items-center gap-2 mt-4">
        <span className="w-2 h-2 rounded-full bg-green" />
        <span className="text-xs text-dim">{t("hero.status")}</span>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <a ref={ctaRef1} href="#projects" className="px-5 py-2 bg-cyan text-void rounded font-medium">
          {t("hero.projects")}
        </a>
        <a ref={ctaRef2} href="/resume.pdf" target="_blank" className="px-5 py-2 border border-border rounded">
          {t("hero.resume")}
        </a>
        <a ref={ctaRef3} href="#contact" className="px-5 py-2 border border-border rounded">
          {t("hero.contact")}
        </a>
      </div>
    </section>
  );
}
