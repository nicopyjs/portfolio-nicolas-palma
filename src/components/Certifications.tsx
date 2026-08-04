import { Award, ExternalLink, Loader } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-white/5 bg-ink-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Aprendizaje continuo"
          title="Certificaciones"
          description="Formación complementaria, vigente y en curso."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <TiltCard
                href={cert.url}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noreferrer" : undefined}
                className="glass group flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-brand-cyan/40"
              >
                <span className="rounded-xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 p-3 text-brand-cyan">
                  <Award size={20} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-ink-50">{cert.name}</h3>
                    {cert.url ? (
                      <ExternalLink
                        size={14}
                        className="text-ink-500 transition-colors group-hover:text-brand-cyan"
                      />
                    ) : (
                      cert.inProgress && (
                        <span className="flex items-center gap-1 rounded-full border border-brand-amber/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand-amber">
                          <Loader size={10} /> En curso
                        </span>
                      )
                    )}
                  </div>
                  <p className="mt-1 text-xs text-ink-500">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.description && (
                    <p className="mt-2 text-sm text-ink-300">{cert.description}</p>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
