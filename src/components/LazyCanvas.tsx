"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mounts heavy WebGL children only when they can actually pay off:
 * desktop-sized pointer-capable viewports, motion allowed, and in view.
 * Unmounting off-screen stops the r3f render loop instead of burning
 * GPU/CPU on a canvas nobody can see.
 */
export function LazyCanvas({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const mqWidth = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mqMotion.matches && mqWidth.matches);
    update();
    mqMotion.addEventListener("change", update);
    mqWidth.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqWidth.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return <div ref={ref} className={className}>{enabled && visible ? children : null}</div>;
}
