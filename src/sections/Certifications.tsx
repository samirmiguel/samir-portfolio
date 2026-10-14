import { Award } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { certifications } from "../data/certifications";
import { siteCopy } from "../data/site";

export function Certifications() {
  const { eyebrow, title } = siteCopy.sections.certifications;

  return (
    <Section id="certifications" eyebrow={eyebrow} title={title}>
      <Reveal>
        <Card className="p-0">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {certifications.map((certification) => (
              <li
                key={`${certification.issuer}-${certification.name}`}
                className="flex items-start gap-4 px-5 py-4 sm:items-center sm:px-6"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-control bg-accent-50 text-accent-700 dark:bg-accent-900/60 dark:text-accent-200">
                  <Award className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">
                    {certification.name}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {certification.issuer}
                    {certification.details && <> - {certification.details}</>}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
                  {certification.date}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
