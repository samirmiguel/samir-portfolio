import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { profile } from "../data/profile";
import { siteCopy } from "../data/site";

export function About() {
  const { eyebrow, title } = siteCopy.sections.about;

  return (
    <Section id="a-propos" eyebrow={eyebrow} title={title} muted>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal className="space-y-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <dl className="grid gap-6 pt-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {siteCopy.about.languages}
              </dt>
              <dd className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {profile.languages.map((language) => (
                  <p key={language.name}>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {language.name}
                    </span>{" "}
                    - {language.level}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {siteCopy.about.qualities}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {profile.qualities.map((quality) => (
                  <Badge key={quality} variant="outline">
                    {quality}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {profile.keyFigures.map((figure, index) => (
            <Reveal as="li" key={figure.label} delay={index * 0.08}>
              <Card className="h-full p-5">
                <p className="text-3xl font-semibold tracking-tight text-accent-700 dark:text-accent-200">
                  {figure.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{figure.label}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
