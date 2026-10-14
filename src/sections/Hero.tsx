import { Download, Mail, MapPin } from "lucide-react";
import * as m from "motion/react-m";
import { useState } from "react";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { SocialIcon } from "../components/ui/SocialIcon";
import { profile } from "../data/profile";
import { siteCopy } from "../data/site";

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative size-36 shrink-0 overflow-hidden rounded-3xl border border-zinc-200 bg-accent-50 shadow-card sm:size-44 lg:size-56 dark:border-zinc-800 dark:bg-accent-900/50">
      {failed ? (
        <span
          role="img"
          aria-label={profile.name}
          className="flex size-full items-center justify-center text-4xl font-semibold tracking-tight text-accent-700 lg:text-6xl dark:text-accent-200"
        >
          {profile.initials}
        </span>
      ) : (
        <img
          src={profile.photo}
          alt={`Portrait de ${profile.name}`}
          width={448}
          height={448}
          fetchPriority="high"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-6">
              <MapPin className="size-3.5" aria-hidden="true" />
              {siteCopy.hero.basedIn} {profile.location}
            </Badge>
            <h1
              id="hero-title"
              className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
            >
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-pretty text-accent-700 dark:text-accent-200">
              {profile.title}
            </p>
            <p className="mt-5 text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#contact">
                <Mail />
                {siteCopy.hero.contact}
              </ButtonLink>
              <ButtonLink href={profile.cv} variant="secondary" download>
                <Download />
                {siteCopy.hero.downloadCv}
              </ButtonLink>
              <div className="flex items-center gap-1">
                {profile.socials.map((social) => (
                  <ButtonLink
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="icon"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon icon={social.icon} className="size-5" />
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>

          <ProfilePhoto />
        </m.div>
      </Container>
    </section>
  );
}
