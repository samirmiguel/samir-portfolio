import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { navItems, siteCopy } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  // Ferme le menu mobile avec Échap ou lors du passage en affichage desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => media.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  const linkClass = (id: string) =>
    cn(
      "rounded-control px-3 py-2 text-sm font-medium transition-colors",
      activeId === id
        ? "text-accent-700 dark:text-accent-200"
        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="rounded-control text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? siteCopy.menu.close : siteCopy.menu.open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="border-t border-zinc-200/70 lg:hidden dark:border-zinc-800/70"
        >
          <Container>
            <ul className="flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(linkClass(item.id), "block py-3")}
                    aria-current={activeId === item.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
