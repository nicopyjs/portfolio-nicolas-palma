"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Stamp } from "./Stamp";

const SESSION_KEY = "np-intro-seen";
const HOLD_MS = 900;

export function PageIntro() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // One-time client bootstrap: decides whether to play the intro based on
    // browser-only state (matchMedia, sessionStorage), so it can't be derived
    // during render without risking a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const reduced = !window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (reduced || seen) return;

    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);

    const timer = setTimeout(() => setShow(false), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.7, 0, 0.84, 0] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
        >
          <motion.div
            initial={{ scale: 2.2, opacity: 0, rotate: 14 }}
            animate={{ scale: 1, opacity: 1, rotate: -8 }}
            transition={{ delay: 0.15, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <Stamp variant="sealed" size="lg" label="INGENIERO VERIFICADO · NICOLÁS PALMA MARÍN ·" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500">
              Cargando portafolio
            </span>
            <div className="h-px w-40 overflow-hidden bg-ink-700">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full origin-left bg-gradient-to-r from-ledger to-ledger-glow"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
