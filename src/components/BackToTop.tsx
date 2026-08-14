"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Magnetic strength={14}>
            <a
              href="#top"
              aria-label="Volver arriba"
              data-cursor-hover
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-ledger transition-colors hover:border-ledger/40 hover:text-ledger-glow"
            >
              <ArrowUp size={18} />
            </a>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
