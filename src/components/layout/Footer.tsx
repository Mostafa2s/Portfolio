"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 md:mt-32 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 text-center">

        {/* Name */}

        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Mostafa Alasaad
        </h3>

        <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-7 md:leading-8 px-4">
          Android Developer based in Germany, passionate about building modern
          mobile applications, clean software and continuous learning.
        </p>

        {/* Socials */}

        <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5">

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

        <div className="mt-10 md:mt-12 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Copyright */}

        <p className="mt-6 md:mt-8 text-xs sm:text-sm text-slate-500">
          © {new Date().getFullYear()} Mostafa Alasaad · Built with Next.js, React & TypeScript
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
      className="glass-card p-3 md:p-4 text-lg sm:text-xl text-white group hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300"
    >
      <span className="transition-transform duration-300 group-hover:scale-110 inline-block">
        {icon}
      </span>
    </a>
  );
}