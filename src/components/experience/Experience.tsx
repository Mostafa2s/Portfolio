"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}

      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          MY JOURNEY
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Experience
        </h2>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-7 md:leading-8 text-slate-400 px-4">
          My journey from tourism to software development, driven by continuous
          learning, determination and passion for technology.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative mx-auto max-w-4xl">

        {/* Vertical Line */}

        <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent" />

        {experience.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="group relative mb-16 pl-20"
          >

            {/* Timeline Dot */}

            <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-cyan-500 bg-[#0f172a] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,.4)]">

              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

            </div>

            {/* Year */}

            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              {item.year}
            </span>

            {/* Card */}

            <div className="glass-card mt-4 p-5 md:p-7 group-hover:border-cyan-400/30 group-hover:bg-white/[0.07] transition-all duration-300">

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-medium text-cyan-300">
                {item.company}
              </p>

              <p className="mt-4 md:mt-5 text-base sm:text-lg leading-7 md:leading-8 text-slate-400">
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}