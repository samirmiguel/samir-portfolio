import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type TimelineItemProps = {
  period: string;
  /** Logo ou icône affiché dans la pastille de la timeline */
  marker: ReactNode;
  children: ReactNode;
};

/** Entrée de timeline verticale, partagée par Expériences et Formation. */
export function TimelineItem({ period, marker, children }: TimelineItemProps) {
  return (
    <Reveal as="li" className="relative pb-12 pl-16 last:pb-0 sm:pl-20">
      <span
        aria-hidden="true"
        className="absolute top-12 bottom-0 left-6 w-px bg-zinc-200 sm:left-7 dark:bg-zinc-800"
      />
      <div className="absolute top-0 left-0 flex size-12 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 sm:size-14 dark:border-zinc-700 dark:bg-zinc-100">
        {marker}
      </div>
      <p className="text-sm font-medium text-accent-700 dark:text-accent-300">{period}</p>
      {children}
    </Reveal>
  );
}
