"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const fallbackTheme = root.classList.contains("dark") ? "dark" : "light";
    const themeToApply = resolvedTheme || fallbackTheme;
    root.setAttribute("data-theme", themeToApply);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const domTheme = root.getAttribute("data-theme") || (root.classList.contains("dark") ? "dark" : "light");
    const activeTheme = resolvedTheme || domTheme;
    const next = activeTheme === "dark" ? "light" : "dark";

    setTheme(next);
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    window.localStorage.setItem("theme", next);
  };

  if (!mounted) {
    return (
      <button className="aiden-theme-toggle" type="button" aria-label="Toggle theme">
        <span aria-hidden="true">◐</span>
      </button>
    );
  }

  return (
    <button
      className="aiden-theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title="Toggle dark and light mode"
    >
      <span aria-hidden="true">{currentTheme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
