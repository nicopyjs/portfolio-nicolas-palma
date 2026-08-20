"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Magnetic } from "./Magnetic";
import { Stamp } from "./Stamp";
import { SplitWords } from "./SplitWords";
import { LazyCanvas } from "./LazyCanvas";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const reducedMotion = usePrefersReducedMotion();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reducedMotion ? 1 : 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y: gridY }}
        className="bg-ledger-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <LazyCanvas className="absolute inset-0">
        <HeroScene />
      </LazyCanvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-6xl px-6 pt-24"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ledger"
        >
          Disponible para nuevos desafíos
        </motion.span>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink-50 sm:text-6xl">
            <SplitWords
              delay={0.3}
              words={[
                { text: "Hola," },
                { text: "soy" },
                { text: profile.name.split(" ")[0] },
                { text: `${profile.name.split(" ")[1]}.`, className: "text-gradient" },
              ]}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 1.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 1, duration: 0.55, type: "spring", stiffness: 220, damping: 16 }}
            className="hidden sm:block"
          >
            <Stamp
              variant="sealed"
              size="lg"
              label="INGENIERO VERIFICADO · NICOLÁS PALMA MARÍN ·"
            />
          </motion.div>
        </div>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-ink-300">
          {profile.role}. {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-ink-50 transition-colors hover:text-ledger"
          >
            <Mail size={16} className="text-ledger" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-ink-50 transition-colors hover:text-ledger"
          >
            <Phone size={16} className="text-ledger" /> {profile.phone}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-block rounded-full bg-ledger px-6 py-3 text-sm font-medium text-ink-950 shadow-lg shadow-ledger/20 transition-all duration-200 hover:bg-ledger-glow hover:shadow-ledger/40 active:scale-95"
            >
              Ver proyectos
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-block rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-ink-50 transition-all duration-200 hover:bg-ink-800 active:scale-95"
            >
              Contactarme
            </a>
          </Magnetic>

          <span className="mx-1 hidden h-8 w-px bg-ink-700 sm:block" />

          <Magnetic strength={22}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-block rounded-full border border-ink-700 p-3 text-ink-50 transition-colors hover:border-ledger/50 hover:text-ledger"
            >
              <GithubIcon size={18} />
            </a>
          </Magnetic>
          <Magnetic strength={22}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-block rounded-full border border-ink-700 p-3 text-ink-50 transition-colors hover:border-ledger/50 hover:text-ledger"
            >
              <LinkedinIcon size={18} />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-500 hover:text-ledger"
        aria-label="Bajar a la siguiente sección"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
