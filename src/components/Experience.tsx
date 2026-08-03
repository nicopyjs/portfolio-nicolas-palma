import { Briefcase, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          description="Del piso de práctica al rol híbrido de datos e ingeniería que ocupo hoy."
        />

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan shadow-[0_0_0_4px_rgba(139,92,246,0.15)] sm:-left-[calc(2.5rem+5px)]" />

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-ink-50">
                    <Briefcase size={18} className="text-brand-violet" />
                    <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  </div>
                  <span className="font-mono text-xs text-brand-cyan">{job.period}</span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-500">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-medium text-ink-300 hover:text-brand-cyan"
                    >
                      {job.company} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="font-medium text-ink-300">{job.company}</span>
                  )}
                  <span>·</span>
                  <span>{job.location}</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-300">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
