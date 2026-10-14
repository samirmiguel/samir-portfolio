import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { skillCategories } from "../data/skills";
import { siteCopy } from "../data/site";

export function Skills() {
  const { eyebrow, title, description } = siteCopy.sections.skills;

  return (
    <Section id="competences" eyebrow={eyebrow} title={title} description={description}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal as="li" key={category.name} delay={(index % 3) * 0.06}>
            <Card interactive className="h-full">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
