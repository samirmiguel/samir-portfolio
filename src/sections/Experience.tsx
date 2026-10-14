import { MapPin } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { CompanyLogo } from "../components/ui/CompanyLogo";
import { Section } from "../components/ui/Section";
import { TimelineItem } from "../components/ui/TimelineItem";
import { findClient } from "../data/clients";
import { experiences } from "../data/experiences";
import { siteCopy } from "../data/site";

export function Experience() {
  const { eyebrow, title } = siteCopy.sections.experience;

  return (
    <Section id="experiences" eyebrow={eyebrow} title={title} muted>
      <ol>
        {experiences.map((experience) => (
          <TimelineItem
            key={`${experience.company}-${experience.period}`}
            period={experience.period}
            marker={
              <CompanyLogo
                name={experience.company}
                src={findClient(experience.company)?.logo}
                width={48}
                height={48}
                className="max-h-full max-w-full"
                fallbackClassName="text-[10px] text-zinc-700"
              />
            }
          >
            <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {experience.role}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                - {experience.contract}
              </span>
            </h3>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">{experience.company}</span>
              {experience.department && <> · {experience.department}</>}
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="size-3.5" aria-hidden="true" />
              {experience.location}
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full before:bg-accent-500 dark:before:bg-accent-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <li key={technology}>
                  <Badge variant="accent">{technology}</Badge>
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </ol>
    </Section>
  );
}
