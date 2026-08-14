import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionDivider } from "./SectionDivider";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { TiltCard } from "./TiltCard";
import { Stamp } from "./Stamp";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 bg-ink-900 py-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Aprendizaje continuo"
          title="Certificaciones"
          description="Cada credencial completada queda sellada; las que están en curso, todavía no."
        />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <TiltCard
                href={cert.url}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noreferrer" : undefined}
                className="glass group relative flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-seal/40"
              >
                {cert.url && (
                  <ExternalLink
                    size={13}
                    className="absolute right-5 top-5 text-ink-500 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                )}
                <Stamp
                  variant={cert.url ? "sealed" : "pending"}
                  size="sm"
                  label={`${cert.issuer.toUpperCase()} · VERIFICADO ·`}
                  className="mt-0.5 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-ink-50">{cert.name}</h3>
                  <p className="mt-1 text-xs text-ink-500">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.description && (
                    <p className="mt-2 text-sm text-ink-300">{cert.description}</p>
                  )}
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
