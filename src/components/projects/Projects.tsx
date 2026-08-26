"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}

      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          Portfolio
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Featured Projects
        </h2>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base sm:text-lg text-slate-400 px-4">
          A selection of personal projects showcasing my journey in Android
          development, web technologies and software engineering.
        </p>

      </div>

      <div className="space-y-8 md:space-y-12">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card overflow-hidden p-0 group hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)] transition-all duration-500"
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

            <div className="p-6 md:p-8">

              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">

                <div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-500">
                    Personal Project
                  </p>

                </div>

                <span className="glass-badge text-xs sm:text-sm">
                  {project.status}
                </span>

              </div>

              <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 md:leading-8 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="glass-badge text-xs sm:text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              {(project.github !== "#" || project.demo !== "#") && (
                <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button glass-button-primary"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}

                </div>
              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}