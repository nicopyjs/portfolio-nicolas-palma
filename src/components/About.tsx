"use client";

import dynamic from "next/dynamic";
import { GraduationCap, Languages } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionDivider } from "./SectionDivider";
import { Reveal } from "./Reveal";
import { LazyCanvas } from "./LazyCanvas";
import { education, languages, profile } from "@/lib/data";

const AboutScene = dynamic(() => import("./AboutScene"), { ssr: false });

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-ink-900 py-28">
      <SectionDivider />
      <LazyCanvas className="pointer-events-none absolute inset-0 opacity-60">
        <AboutScene />
      </LazyCanvas>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Ingeniería, datos y automatización con propósito"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-ink-300">{profile.summary}</p>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={0.1} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 text-ledger">
                <GraduationCap size={20} />
                <span className="font-mono text-xs uppercase tracking-widest">Educación</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink-50">
                {education.degree}
              </h3>
              <p className="text-sm text-ink-500">
                {education.institution} · {education.period}
              </p>
              <p className="mt-3 text-sm text-ink-300">{education.detail}</p>
            </Reveal>

            <Reveal delay={0.2} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 text-ledger">
                <Languages size={20} />
                <span className="font-mono text-xs uppercase tracking-widest">Idiomas</span>
              </div>
              <ul className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-sm text-ink-50">
                      <span>{lang.name}</span>
                      <span className="text-ink-500">{lang.note ?? ""}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-ledger to-ledger-glow"
                        style={{ width: `${(lang.level / 5) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
