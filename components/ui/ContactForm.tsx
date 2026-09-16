"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const ENDPOINT = "https://api.lazyforms.com/f/037f2e11-df0f-4d26-8cd0-57769cb9f9a7";

export function ContactForm() {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const form = e.currentTarget;
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact form" className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
      <input type="text" name="name" placeholder="Name" required className="bg-transparent border border-border rounded px-3 py-2 text-sm" />
      <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-border rounded px-3 py-2 text-sm" />
      <textarea name="message" placeholder="Message" rows={4} required className="bg-transparent border border-border rounded px-3 py-2 text-sm" />
      {status === "success" && <div className="text-green text-xs">Transmission sent successfully!</div>}
      {status === "error" && <div className="text-danger text-xs">Transmission failed. Try again.</div>}
      <button type="submit" className="px-5 py-2 bg-cyan text-void rounded font-medium self-start">
        {t("contact.send")}
      </button>
    </form>
  );
}
