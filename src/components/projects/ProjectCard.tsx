import GlassCard from "@/ui/GlassCard";
import Badge from "@/ui/Badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
  github,
  demo,
}: Props) {
  return (
    <GlassCard className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

      {/* Preview */}
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center border border-white/5">

        <span className="text-5xl">💻</span>

        <h3 className="mt-4 text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Project Preview
        </p>

      </div>

      {/* Content */}
      <div className="mt-8">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              {description}
            </p>

          </div>

          <Badge>{status}</Badge>

        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-cyan-400/40 px-5 py-3 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </GlassCard>
  );
}