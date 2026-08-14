"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });
  const springY = useSpring(y, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const canAnimate =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!canAnimate) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-30 hidden h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ledger/8 blur-[110px] mix-blend-screen sm:block"
    />
  );
}
