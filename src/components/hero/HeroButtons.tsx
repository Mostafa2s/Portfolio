"use client";

import { FaGithub } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">

      <a
        href="/cv/Mostafa_Alasaad_CV.pdf"
        target="_blank"
        className="rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105"
      >
        Download CV
      </a>

      <a
        href="#projects"
        className="rounded-xl border border-white/20 px-7 py-4 text-white transition hover:border-cyan-400"
      >
        View Projects
      </a>

      <a
        href="https://github.com/Mostafa2s"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 text-xl transition hover:border-cyan-400"
      >
        <FaGithub />
      </a>

    </div>
  );
}