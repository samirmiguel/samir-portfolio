type SectionTitleProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="text-sm font-semibold tracking-wide text-accent-700 uppercase dark:text-accent-300">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 text-2xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-3xl dark:text-zinc-50"
      >
        {title}
      </h2>
      {description && <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>}
    </div>
  );
}
