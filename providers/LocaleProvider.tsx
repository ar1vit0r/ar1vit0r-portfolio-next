"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import en from "@/messages/en.json";
import pt from "@/messages/pt.json";

type Locale = "en" | "pt";
const messagesByLocale = { en, pt };

const LocaleToggleContext = createContext<{ locale: Locale; toggle: () => void } | null>(null);

export function useLocaleToggle() {
  const ctx = useContext(LocaleToggleContext);
  if (!ctx) throw new Error("useLocaleToggle must be used inside LocaleProvider");
  return ctx;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "pt") setLocale(stored);
  }, []);

  function toggle() {
    const next: Locale = locale === "en" ? "pt" : "en";
    setLocale(next);
    localStorage.setItem("lang", next);
  }

  return (
    <LocaleToggleContext.Provider value={{ locale, toggle }}>
      <NextIntlClientProvider locale={locale} messages={messagesByLocale[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleToggleContext.Provider>
  );
}
