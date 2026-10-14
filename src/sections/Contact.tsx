import { Mail } from "lucide-react";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SocialIcon } from "../components/ui/SocialIcon";
import { profile } from "../data/profile";
import { siteCopy } from "../data/site";

export function Contact() {
  const { eyebrow, title } = siteCopy.sections.contact;

  return (
    <Section id="contact" eyebrow={eyebrow} title={title} muted>
      <Reveal className="max-w-2xl">
        <p className="text-lg leading-relaxed text-pretty text-zinc-700 dark:text-zinc-300">
          {profile.contactMessage}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail />
            {profile.email}
          </ButtonLink>
          {profile.socials.map((social) => (
            <ButtonLink
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <SocialIcon icon={social.icon} />
              {social.label}
            </ButtonLink>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
