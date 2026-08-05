"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        inline-flex
        max-w-full
        flex-wrap
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        px-4
        py-2
        text-[11px]
        sm:px-5
        sm:text-sm
        tracking-[0.25em]
        uppercase
        text-cyan-300
        backdrop-blur-xl
        shadow-[0_0_35px_rgba(0,255,255,.08)]
      "
    >
      <span>Android Developer</span>

      <span className="opacity-40 hidden sm:inline">•</span>

      <span>Web Designer</span>

      <span className="opacity-40 hidden sm:inline">•</span>

      <span>Gamer</span>
    </motion.div>
  );
}