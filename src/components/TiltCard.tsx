"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function TiltCard({ children, className, href, target, rel, ariaLabel }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 28,
  });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const style = { rotateX, rotateY, transformPerspective: 900 };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        data-cursor-hover
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        style={style}
        className={`transition-colors duration-300 hover:border-ledger/30 ${className ?? ""}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={style}
      className={`transition-colors duration-300 hover:border-ledger/30 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
