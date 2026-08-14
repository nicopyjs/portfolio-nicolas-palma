import { Briefcase, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          description="Cada puesto, registrado en orden — del piso de práctica al rol híbrido de datos e ingeniería que ocupo hoy."
        />

        <StaggerGroup className="relative border-l border-ink-700 pl-8 sm:pl-10">
          {experience.map((job, i) => {
            const entryNumber = experience.length - i;
            return (
              <StaggerItem key={job.company} className="relative mb-14 last:mb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-ledger to-ledger-glow shadow-[0_0_0_4px_rgba(47,158,99,0.15)] sm:-left-[calc(2.5rem+5px)]" />

                <div className="glass rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2 text-ink-50">
                      <Briefcase size={18} className="text-ledger" />
                      <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                        Reg. {String(entryNumber).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs text-ledger">{job.period}</span>
                    </div>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-500">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 font-medium text-ink-300 hover:text-ledger"
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
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ledger" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
