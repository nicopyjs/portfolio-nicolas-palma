import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { SectionDivider } from "./SectionDivider";

export function Footer() {
  return (
    <footer className="relative bg-ink-900 py-8">
      <SectionDivider />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-ink-500 sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</span>
        <span className="font-mono order-last sm:order-none">
          Diseñado y desarrollado con Next.js, Three.js & Framer Motion
        </span>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ledger"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ledger"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
