"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <div className="mb-20 text-center">

        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
          Portfolio
        </p>

        <h2 className="text-5xl font-black text-white">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          A selection of personal projects showcasing my journey in Android
          development, web technologies and software engineering.
        </p>

      </div>

      <div className="space-y-12">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
            "
          >

            {/* Preview */}

            <div className="aspect-video bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center border-b border-white/10">

              <span className="text-6xl transition duration-300 group-hover:scale-110">
                💻
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-center text-slate-400">
                {project.technologies.join(" • ")}
              </p>

            </div>

            {/* Content */}

            <div className="p-8">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Personal Project
                  </p>

                </div>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  {project.status}
                </span>

              </div>

              <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/5"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,.35)]"
                >
                  Live Demo
                  <FaArrowUpRightFromSquare />
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}