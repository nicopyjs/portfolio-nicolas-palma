import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ledger/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-ledger">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
            ¿Conversamos sobre tu próximo proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">
            Abierto a nuevas oportunidades en desarrollo de software, ingeniería de datos y
            Business Intelligence. Escríbeme y respondo a la brevedad.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-ledger px-6 py-3 text-sm font-medium text-ink-950 shadow-lg shadow-ledger/20 transition-all duration-200 hover:bg-ledger-glow hover:shadow-ledger/40 active:scale-95"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-ink-50 transition-all duration-200 hover:bg-ink-800 active:scale-95"
          >
            <Phone size={16} /> {profile.phone}
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-500">
          <MapPin size={14} className="text-ledger" /> {profile.location}
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-ink-700 p-3 text-ink-50 transition-colors hover:border-ledger/50 hover:text-ledger"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-ink-700 p-3 text-ink-50 transition-colors hover:border-ledger/50 hover:text-ledger"
          >
            <LinkedinIcon size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
