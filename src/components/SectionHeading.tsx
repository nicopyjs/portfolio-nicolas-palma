import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-300">{description}</p>
      )}
    </Reveal>
  );
}
