"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-14 text-center">

        {/* Name */}

        <h3 className="text-3xl font-black text-white">
          Mostafa Alasaad
        </h3>

        <p className="mt-3 max-w-xl text-slate-400 leading-8">
          Android Developer based in Germany, passionate about building modern
          mobile applications, clean software and continuous learning.
        </p>

        {/* Socials */}

        <div className="mt-10 flex items-center gap-5">

          <SocialButton
            href="https://github.com/Mostafa2s"
            icon={<FaGithub />}
            label="GitHub"
          />

          <SocialButton
            href="https://www.linkedin.com/in/alasaad/"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />

          <SocialButton
            href="mailto:info@alasaad.de"
            icon={<FaEnvelope />}
            label="Email"
          />

        </div>

        {/* Divider */}

        <div className="mt-12 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Copyright */}

        <p className="mt-8 text-sm text-slate-500">
          © 2026 Mostafa Alasaad · Built with Next.js, React & TypeScript
        </p>

      </div>
    </footer>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        rounded-2xl
        border
        border-white/10
        p-4
        text-xl
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-400/10
        hover:text-cyan-300
      "
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}