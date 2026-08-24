import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { Marquee } from "./Marquee";
import { skillGroups } from "@/lib/data";

export function Skills() {
  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Habilidades y tecnologías" />

        <div className="mb-8 flex flex-col gap-2 opacity-90">
          <Marquee items={allSkills} />
          <Marquee items={[...allSkills].reverse()} reverse muted />
        </div>

        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-500">
          Detalle completo por categoría
        </p>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ledger">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-ink-700 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-ink-50 transition-colors hover:border-ledger/40 hover:text-ledger"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
