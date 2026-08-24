"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}

      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          MY SKILLS
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Technical Skills
        </h2>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-7 md:leading-8 text-slate-400 px-4">
          Technologies and tools I'm currently using while continuously
          improving my software development skills.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">

        {skillGroups.map((group, index) => (

          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="glass-card p-6 md:p-8 group hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(34,211,238,.12)] transition-all duration-300"
          >

            {/* Title */}

            <div className="flex items-center justify-between flex-wrap gap-3">

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {group.title}
              </h3>

              <span className="glass-badge text-xs">
                {group.skills.length} Skills
              </span>

            </div>

            {/* Skills */}

            <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">

              {group.skills.map((skill) => (

                <span
                  key={skill}
                  className="glass-badge text-xs sm:text-sm hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}