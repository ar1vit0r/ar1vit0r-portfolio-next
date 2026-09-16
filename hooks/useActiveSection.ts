"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "skills", "projects", "education", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    function update() {
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return active;
}
