"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/ui/ContactForm";

const LINKS = [
  { href: "https://github.com/ar1vit0r", icon: "💻", label: "GitHub" },
  { href: "https://linkedin.com/in/ar1vit0r", icon: "🔗", label: "LinkedIn" },
  { href: "mailto:avdslazzarotto@inf.ufpel.edu.br", icon: "✉", label: "Email" },
];

export function Contact() {
  const t = useTranslations();
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle>{t("contact.title")}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-body mb-6">{t("contact.text")}</p>
          <div className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm">
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
