import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type BadgeVariant = "neutral" | "accent" | "outline";

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300",
  accent: "bg-accent-50 text-accent-700 dark:bg-accent-900/60 dark:text-accent-200",
  outline: "border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs leading-none font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
