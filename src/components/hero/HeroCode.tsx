"use client";

import { motion } from "framer-motion";

export default function HeroCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="glass-card p-0 overflow-hidden float-animation w-full max-w-2xl mx-auto lg:mx-0"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs md:text-sm text-gray-400 font-mono">
          developer.ts
        </div>
        <div className="glass-badge py-1 px-2 md:px-3 text-[10px] md:text-xs">
          TypeScript
        </div>
      </div>

      {/* Code Content */}
      <pre className="p-4 md:p-6 overflow-auto text-xs sm:text-sm md:text-base font-mono leading-relaxed max-h-[400px] md:max-h-none">
        <code className="text-gray-300">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-300">developer</span>{" "}
          <span className="text-gray-400">=</span>{" "}
          <span className="text-yellow-400">{"{"}</span>
          {"\n"}
          {"  "}<span className="text-blue-300">name</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-green-300">"Mostafa Alasaad"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"  "}<span className="text-blue-300">location</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-green-300">"Germany"</span>
          <span className="text-gray-400">,</span>
          {"\n\n"}
          {"  "}<span className="text-blue-300">languages</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-yellow-400">[</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Arabic"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"English"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"German"</span>
          {"\n"}
          {"  "}<span className="text-yellow-400">]</span>
          <span className="text-gray-400">,</span>
          {"\n\n"}
          {"  "}<span className="text-blue-300">openTo</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-yellow-400">[</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Ausbildung"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Internship"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Junior Developer"</span>
          {"\n"}
          {"  "}<span className="text-yellow-400">]</span>
          <span className="text-gray-400">,</span>
          {"\n\n"}
          {"  "}<span className="text-blue-300">interests</span>
          <span className="text-gray-400">:</span>{" "}
          <span className="text-yellow-400">[</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Android"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Full Stack"</span>
          <span className="text-gray-400">,</span>
          {"\n"}
          {"    "}<span className="text-green-300">"Cyber Security"</span>
          {"\n"}
          {"  "}<span className="text-yellow-400">]</span>
          {"\n"}
          <span className="text-yellow-400">{"}"}</span>
          <span className="text-gray-400">;</span>
        </code>
      </pre>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3 border-t border-white/10 text-[10px] md:text-xs">
        <div className="flex items-center gap-2 md:gap-4 text-gray-400">
          <span>✓ Compiled</span>
          <span className="hidden sm:inline">23 Lines</span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-medium">Ready</span>
        </div>
      </div>
    </motion.div>
  );
}
