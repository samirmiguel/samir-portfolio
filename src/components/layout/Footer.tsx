import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { siteCopy } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { SocialIcon } from "../ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {profile.name}. {siteCopy.footer.rights}
        </p>
        <div className="flex items-center gap-1">
          <ButtonLink
            href={`mailto:${profile.email}`}
            variant="ghost"
            size="icon"
            aria-label={profile.email}
          >
            <Mail />
          </ButtonLink>
          {profile.socials.map((social) => (
            <ButtonLink
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              aria-label={social.label}
            >
              <SocialIcon icon={social.icon} className="size-4" />
            </ButtonLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
