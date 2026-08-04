"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Magnetic } from "./Magnetic";

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
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 pt-24"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-brand-cyan"
        >
          Disponible para nuevos desafíos
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink-50 sm:text-6xl"
        >
          Hola, soy {profile.name.split(" ")[0]}
          <span className="text-gradient"> {profile.name.split(" ")[1]}.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-ink-300">
          {profile.role}. {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap gap-5 text-sm text-ink-500">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-violet" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-brand-cyan"
          >
            <Mail size={16} className="text-brand-violet" /> {profile.email}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="inline-block rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan px-6 py-3 text-sm font-medium text-ink-950 shadow-lg shadow-brand-violet/20 transition-transform hover:scale-105"
            >
              Ver proyectos
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ink-50 transition-colors hover:bg-white/5"
            >
              Contactarme
            </a>
          </Magnetic>

          <span className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

          <Magnetic strength={22}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-block rounded-full border border-white/15 p-3 text-ink-50 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
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
              className="inline-block rounded-full border border-white/15 p-3 text-ink-50 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-500 hover:text-brand-cyan"
        aria-label="Bajar a la siguiente sección"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
