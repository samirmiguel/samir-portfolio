import { CompanyLogo } from "../components/ui/CompanyLogo";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { clients } from "../data/clients";
import { siteCopy } from "../data/site";
import type { Client } from "../types/content";

function LogoCell({ client }: { client: Client }) {
  const content = (
    <>
      <span className="flex h-14 max-w-full items-center justify-center rounded-control px-3 py-1 sm:h-16 dark:bg-zinc-100">
        <CompanyLogo
          name={client.name}
          src={client.logo}
          className="h-10 max-w-full sm:h-12"
          fallbackClassName="dark:text-zinc-700"
        />
      </span>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {siteCopy.trustedBy[client.relation]}
      </span>
    </>
  );

  const cellClass =
    "group flex h-32 flex-col items-center justify-center gap-3 rounded-card border border-zinc-200 bg-white px-6 transition-shadow duration-300 hover:shadow-card-hover dark:border-zinc-800 dark:bg-zinc-900/60";

  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cellClass}
      aria-label={`${client.name} (${siteCopy.trustedBy[client.relation]})`}
    >
      {content}
    </a>
  ) : (
    <div className={cellClass}>{content}</div>
  );
}

export function TrustedBy() {
  const { eyebrow, title, description } = siteCopy.sections.trustedBy;

  return (
    <Section id="references" eyebrow={eyebrow} title={title} description={description}>
      <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3">
        {clients.map((client, index) => (
          <Reveal as="li" key={client.name} delay={index * 0.06}>
            <LogoCell client={client} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
