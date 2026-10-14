import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Fond légèrement teinté pour alterner les sections */
  muted?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  muted = false,
  className,
  children,
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "py-20 sm:py-24",
        muted && "border-y border-zinc-100 bg-zinc-50/70 dark:border-zinc-900 dark:bg-zinc-900/30",
        className,
      )}
    >
      <Container>
        <Reveal>
          <SectionTitle id={titleId} eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
