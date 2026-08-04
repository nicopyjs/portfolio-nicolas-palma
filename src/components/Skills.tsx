import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Habilidades y tecnologías" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08} className="glass rounded-2xl p-6">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
