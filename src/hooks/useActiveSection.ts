import { useEffect, useState } from "react";

/**
 * Scrollspy : id de la section située au centre du viewport, ou null en haut de page.
 */
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 120) setActiveId(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [key]);

  return activeId;
}
