"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-ink-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Soluciones reales aplicadas a finanzas corporativas, protección civil y análisis de negocio."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-violet/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

                <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                  {project.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-ink-300">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-ink-500">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-violet" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-ink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
