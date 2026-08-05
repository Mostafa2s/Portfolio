"use client";

import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

export default function HeroInfo() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300"
      >
        Android Developer • Software Engineer
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-6xl font-black leading-[0.9] tracking-tight text-white md:text-7xl xl:text-[7rem]"
      >
        Building
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Modern Apps.
        </span>

        <br />
        
    
        
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 max-w-lg text-lg leading-8 text-slate-400 md:text-xl"
      >
        I'm <span className="text-white font-semibold">Mostafa Alasaad</span>,
        an Android Developer based in Germany, passionate about creating modern
        mobile applications, responsive websites and high-quality digital
        experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-wrap gap-4"
      >
        <a
          href="/Mostafa_Alasaad_CV.pdf"
          className="flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
        >
          <FaDownload />
          Download CV
        </a>

        <a
          href="#projects"
          className="flex items-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-white transition hover:border-cyan-400"
        >
          View Projects
          <FaArrowRight />
        </a>

        <a
          href="https://github.com/Mostafa2s"
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 text-xl transition hover:border-cyan-400"
        >
          <FaGithub />
        </a>
      </motion.div>

    </div>
  );
}