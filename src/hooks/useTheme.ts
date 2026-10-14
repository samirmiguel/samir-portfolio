import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function getInitialTheme(): Theme {
  return readStoredTheme() ?? (window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light");
}

/**
 * Thème clair / sombre. Suit la préférence système tant qu'aucun choix
 * n'est enregistré dans localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(MEDIA_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme() === null) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage indisponible : le choix n'est pas persisté.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
