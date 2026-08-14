"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="ledger-tear absolute inset-x-0 top-0"
    />
  );
}
