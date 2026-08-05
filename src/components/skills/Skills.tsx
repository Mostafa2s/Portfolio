"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          MY SKILLS
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Technical Skills
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Technologies and tools I'm currently using while continuously
          improving my software development skills.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

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
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:bg-white/[0.07]
              hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
            "
          >

            {/* Title */}

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold text-white">
                {group.title}
              </h3>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {group.skills.length} Skills
              </span>

            </div>

            {/* Skills */}

            <div className="mt-8 flex flex-wrap gap-3">

              {group.skills.map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-cyan-300
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-cyan-400/50
                    hover:bg-cyan-500/20
                  "
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