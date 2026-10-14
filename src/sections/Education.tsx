import { GraduationCap, MapPin } from "lucide-react";
import { Section } from "../components/ui/Section";
import { TimelineItem } from "../components/ui/TimelineItem";
import { education } from "../data/education";
import { siteCopy } from "../data/site";

export function Education() {
  const { eyebrow, title } = siteCopy.sections.education;

  return (
    <Section id="formation" eyebrow={eyebrow} title={title} muted>
      <ol>
        {education.map((item) => (
          <TimelineItem
            key={item.degree}
            period={item.period}
            marker={<GraduationCap className="size-6 text-accent-700" aria-hidden="true" />}
          >
            <h3 className="mt-1 text-lg font-semibold text-pretty text-zinc-900 dark:text-zinc-50">
              {item.degree}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.school}</span>
              <span aria-hidden="true">·</span>
              <MapPin className="size-3.5" aria-hidden="true" />
              {item.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-4 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full before:bg-accent-500 dark:before:bg-accent-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </ol>
    </Section>
  );
}
