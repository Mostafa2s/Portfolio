"use client";

import { motion } from "framer-motion";

const code = `const developer = {

name: "Mostafa Alasaad",
location: "Germany",

languages: [
    "Arabic",
    "English",
    "German"
  ],

openTo: [
    "Ausbildung",
    "Internship",
    "Junior Developer"
],

interests: [
    "Android",
    "Full Stack",
    "Cyber Security"
]};`;

export default function HeroCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a]/95 shadow-[0_30px_80px_rgba(0,0,0,.45)] max-h-[340px] lg:max-h-none"
    >
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 lg:px-6 lg:py-4">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="text-sm text-slate-400">
          developer.ts
        </span>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          TypeScript
        </span>

      </div>

      {/* Code */}
      <pre className="max-h-[280px] overflow-auto p-5 lg:p-8 text-[13px] lg:text-[15px] leading-6 lg:leading-8">
        <code className="whitespace-pre text-slate-300">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}