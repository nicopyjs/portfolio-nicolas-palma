import { BarChart3, LineChart, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionDivider } from "./SectionDivider";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { ProjectPreview } from "./ProjectPreview";
import { projects } from "@/lib/data";

const ICONS = [LineChart, Smartphone, BarChart3];
const PREVIEWS = ["dashboard", "mobile", "bi"] as const;

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-ink-900 py-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Soluciones reales aplicadas a finanzas corporativas, protección civil y análisis de negocio."
        />

        <StaggerGroup className="flex flex-col">
          {projects.map((project, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={project.name}>
                {i > 0 && <div className="ledger-tear my-2" />}
                <article className="group grid gap-6 py-8 transition-colors md:grid-cols-[8rem_1fr] md:gap-10 lg:grid-cols-[8rem_1fr_20rem]">
                  <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-3">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-ink-700 text-ledger transition-colors duration-300 group-hover:border-ledger/50 group-hover:bg-ledger/5">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest text-ink-500">
                      <div className="text-ledger">N.º {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-1">{project.period}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink-50 transition-colors group-hover:text-ledger-glow sm:text-[1.75rem]">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-ink-300">{project.description}</p>

                    <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex max-w-md gap-2 text-sm text-ink-500">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ledger" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-ink-700 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-300 transition-colors group-hover:border-ink-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 lg:col-span-1 lg:self-center">
                    <ProjectPreview variant={PREVIEWS[i % PREVIEWS.length]} />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
