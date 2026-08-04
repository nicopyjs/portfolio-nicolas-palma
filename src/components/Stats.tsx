import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { certifications, experience, projects, skillGroups } from "@/lib/data";

const techCount = new Set(
  skillGroups.filter((g) => g.title !== "Habilidades blandas").flatMap((g) => g.skills)
).size;

const stats = [
  { label: "Proyectos destacados", value: projects.length, suffix: "" },
  { label: "Certificaciones", value: certifications.length, suffix: "" },
  { label: "Tecnologías", value: techCount, suffix: "+" },
  { label: "Experiencias profesionales", value: experience.length, suffix: "" },
];

export function Stats() {
  return (
    <section className="relative border-y border-ink-700 bg-ink py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-500">
          <span>Balance profesional</span>
          <span>Al cierre de este mes</span>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-ink-700 pt-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center sm:text-left">
              <div className="text-gradient tabular-nums font-display text-4xl font-semibold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-ink-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
