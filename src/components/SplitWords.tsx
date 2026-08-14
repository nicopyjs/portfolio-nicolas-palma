"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: (delayChildren: number) => ({
    transition: { staggerChildren: 0.07, delayChildren },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function SplitWords({
  words,
  className,
  delay = 0,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      custom={delay}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span variants={word} className={`inline-block ${w.className ?? ""}`}>
            {w.text}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
