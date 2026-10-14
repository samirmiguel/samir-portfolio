import { Moon, Sun } from "lucide-react";
import { siteCopy } from "../../data/site";
import type { Theme } from "../../hooks/useTheme";
import { Button } from "../ui/Button";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const label = theme === "dark" ? siteCopy.theme.toLight : siteCopy.theme.toDark;

  return (
    <Button variant="ghost" size="icon" onClick={onToggle} aria-label={label} title={label}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
