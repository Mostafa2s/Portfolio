"use client";

import { projects } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import ProjectDepth from "./ProjectDepth";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const reduced = useReducedMotion();
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
            initial={false}
            whileInView={reduced ? {} : { y: [38, 0], rotateX: [6, 0], opacity: [.65, 1] }}
            viewport={{ once: true, amount: .15 }}
            transition={{ duration: .7, ease: [.22, 1, .36, 1] }}
            className="project-reveal group"
          >
            <ProjectDepth>

            {/* Preview */}

            <div className="project-dimensional-preview aspect-video flex flex-col items-center justify-center border-b border-white/10">
              <span className="project-index" aria-hidden="true">0{index + 1}</span>
              <div className="project-preview-orbit" aria-hidden="true" />

              <span className="project-floating-icon text-6xl" aria-hidden="true">
                💻
              </span>

              <p className="project-floating-title mt-6 text-2xl font-bold text-white">
                {project.title}
              </p>

              <p className="mt-2 text-center text-slate-400 px-5">
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

            </ProjectDepth>
          </motion.div>

        ))}

      </div>

    </section>
  );
}
