"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

export default function ProjectDepth({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 25 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 25 });
  function reset() { x.set(0); y.set(0); }
  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse" || !window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - rect.top) / rect.height - .5) * 5);
    y.set(((event.clientX - rect.left) / rect.width - .5) * 7);
  }
  return (
    <div className="project-depth-stage" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset} onBlur={reset}>
      <motion.article className="project-depth-card" style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}>{children}</motion.article>
    </div>
  );
}
