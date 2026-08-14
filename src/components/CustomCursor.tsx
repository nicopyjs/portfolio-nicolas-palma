"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    const canHover =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!canHover) return;

    document.documentElement.classList.add("custom-cursor");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest?.(
        "a, button, [data-cursor-hover]"
      );
      setHovering(Boolean(target));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ left: ringX, top: ringY }}
      animate={{
        scale: hovering ? 2.1 : 1,
        opacity: hovering ? 1 : 0.55,
        backgroundColor: hovering ? "rgba(47, 158, 99, 0.12)" : "rgba(47, 158, 99, 0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="cursor-ring pointer-events-none fixed z-[70] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ledger"
    />
  );
}
