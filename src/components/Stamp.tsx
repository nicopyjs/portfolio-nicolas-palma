"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

function scallopPath(cx: number, cy: number, rBase: number, amp: number, bumps: number) {
  const pts: string[] = [];
  const steps = 240;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = rBase + amp * Math.sin(bumps * t);
    pts.push(`${(cx + r * Math.cos(t)).toFixed(2)},${(cy + r * Math.sin(t)).toFixed(2)}`);
  }
  return `M ${pts.join(" L ")} Z`;
}

const SIZE = 120;
const CENTER = SIZE / 2;
const RING_PATH_ID = "stamp-ring-path";

const SIZES = {
  lg: 104,
  sm: 44,
} as const;

export function Stamp({
  variant = "sealed",
  size = "sm",
  label = "VERIFICADO · NICOLÁS PALMA ·",
  className,
}: {
  variant?: "sealed" | "pending";
  size?: "lg" | "sm";
  label?: string;
  className?: string;
}) {
  const px = SIZES[size];

  if (variant === "pending") {
    return (
      <div
        className={`relative flex items-center justify-center rounded-full border border-dashed border-ink-500/50 text-ink-500 ${className ?? ""}`}
        style={{ width: px, height: px }}
        aria-label="Certificación en curso, aún sin sello"
      >
        <Clock size={px * 0.32} strokeWidth={1.5} />
      </div>
    );
  }

  const outerD = scallopPath(CENTER, CENTER, 52, 4, 22);

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ width: px, height: px }}
      aria-label="Certificación verificada"
    >
      <motion.svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={px}
        height={px}
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        <path d={outerD} fill="none" stroke="var(--seal)" strokeWidth={2} />
        <defs>
          <path id={RING_PATH_ID} d={`M ${CENTER},${CENTER} m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0`} />
        </defs>
        <text fill="var(--seal)" fontSize="6.4" letterSpacing="1.5" className="font-mono uppercase">
          <textPath href={`#${RING_PATH_ID}`} startOffset="0%">
            {label}
          </textPath>
        </text>
      </motion.svg>

      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: px * 0.56,
          height: px * 0.56,
          background: "color-mix(in srgb, var(--seal) 14%, transparent)",
          border: "1px solid var(--seal)",
        }}
      >
        <Check size={px * 0.28} color="var(--seal)" strokeWidth={2.5} />
      </div>
    </div>
  );
}
