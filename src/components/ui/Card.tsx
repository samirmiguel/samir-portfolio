import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Ombre légère au survol */
  interactive?: boolean;
};

export function Card({ interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-zinc-200 bg-white p-6 shadow-card dark:border-zinc-800 dark:bg-zinc-900/60",
        interactive &&
          "transition-shadow duration-300 hover:shadow-card-hover dark:hover:border-zinc-700",
        className,
      )}
      {...props}
    />
  );
}
