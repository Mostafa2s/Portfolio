"use client";

import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaArrowRight } from "react-icons/fa";

export default function HeroInfo() {
  return (
    <div className="w-full max-w-2xl mx-auto lg:mx-0">

      {/* Glass Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-badge mb-6 md:mb-8"
      >
        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
        <span className="text-xs md:text-sm">Software Engineering Student • Android Developer</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
      >
        Ideas into{" "}
        <span className="gradient-text">
          interfaces.
        </span>
        <br />
        Code into impact.
      </motion.h1>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="glass-card p-5 md:p-6 mb-6 md:mb-8"
      >
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I&apos;m <span className="font-semibold gradient-text">Mostafa Alasaad</span>, an Android Developer & Software Engineering Student based in{" "}
          <span className="text-cyan-400 font-semibold">Germany</span>.
          I create modern mobile applications and responsive websites with clean code and intuitive user experiences.
        </p>

        {/* Status Indicators */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-medium">Open to Work</span>
          </div>
                    <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Searching for &quot;Ausbildung&quot;</span>
          </div>

        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap gap-3 md:gap-4"
      >
        <a
          href="/Mostafa_Alasaad_CV.pdf"
          className="glass-button glass-button-primary glow-effect flex-shrink-0"
        >
          <FaDownload className="text-sm md:text-base" />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>

        <a
          href="#projects"
          className="glass-button flex-shrink-0"
        >
          <span className="hidden sm:inline">View Projects</span>
          <span className="sm:hidden">Projects</span>
          <FaArrowRight className="text-sm md:text-base" />
        </a>

        <a
          href="https://github.com/Mostafa2s"
          aria-label="View Mostafa's GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button flex-shrink-0"
        >
          <FaGithub className="text-lg md:text-xl" />
        </a>
      </motion.div>

    </div>
  );
}
