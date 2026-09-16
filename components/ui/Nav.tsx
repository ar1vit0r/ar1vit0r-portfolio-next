"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocaleToggle } from "@/providers/LocaleProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useGlitchHover } from "@/hooks/useGlitchHover";

const LINKS = [
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
] as const;

function NavLink({
  id,
  label,
  active,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  const { ref, displayText } = useGlitchHover<HTMLAnchorElement>(label);
  return (
    <a
      ref={ref}
      href={`#${id}`}
      onClick={(e) => onClick(e, id)}
      className={`text-xs ${active ? "text-cyan" : "text-body"}`}
    >
      {displayText}
    </a>
  );
}

export function Nav() {
  const t = useTranslations();
  const { locale, toggle } = useLocaleToggle();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
      const top = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (top / height) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-cyan z-50 transition-[width]"
        style={{ width: `${progress}%` }}
      />
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 inset-x-0 z-40 transition-colors ${scrolled ? "bg-void/90 backdrop-blur" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" onClick={(e) => handleLinkClick(e, "hero")} className="font-mono text-heading">
            ar1vit0r
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 w-6"
          >
            <span className="h-0.5 bg-heading" />
            <span className="h-0.5 bg-heading" />
            <span className="h-0.5 bg-heading" />
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 items-center`}>
            {LINKS.map((link) => (
              <NavLink
                key={link.id}
                id={link.id}
                label={t(link.key)}
                active={active === link.id}
                onClick={handleLinkClick}
              />
            ))}
            <button onClick={toggle} className="text-xs border border-border px-2 py-1 rounded">
              {locale === "en" ? "PT" : "EN"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
