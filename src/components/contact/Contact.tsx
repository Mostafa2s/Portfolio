"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}

      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Let&apos;s Build Something Together
        </h2>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-7 md:leading-8 text-slate-400 px-4">
          I&apos;m always interested in new opportunities, collaborations and
          Junior Android Developer positions.
          Feel free to get in touch.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-10 grid gap-6 md:gap-8 md:grid-cols-2"
      >

        {/* Contact Info */}

        <div className="space-y-6">

          <Item
            icon={<FaEnvelope />}
            title="Email"
            value="info@alasaad.de"
            href="mailto:info@alasaad.de"
          />

          <Item
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/Mostafa2s"
            href="https://github.com/Mostafa2s"
          />

          <Item
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/alasaad"
            href="https://www.linkedin.com/in/alasaad/"
          />

          <Item
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Essen, Germany"
          />

        </div>

        {/* Right Card */}

        <div className="glass-card p-6 md:p-8 border-cyan-400/20 bg-cyan-500/5">

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Currently Open To
          </h3>

          <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">

            <p className="text-base sm:text-lg text-green-400">
              ✔ Junior Android Developer
            </p>

            <p className="text-base sm:text-lg text-green-400">
              ✔ Ausbildung
            </p>

            <p className="text-base sm:text-lg text-green-400">
              ✔ Internship
            </p>

            <p className="text-base sm:text-lg text-green-400">
              ✔ Freelance Projects
            </p>

          </div>

          <p className="mt-8 md:mt-10 text-base sm:text-lg leading-7 md:leading-8 text-slate-400">
            I&apos;m passionate about learning, solving real-world problems and
            building modern software. If you think I&apos;d be a good fit for your
            team, I&apos;d love to hear from you.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

function Item({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass-card p-4 md:p-5 flex items-center gap-4 md:gap-5 group hover:border-cyan-400 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">

      <div className="text-xl sm:text-2xl text-cyan-400 transition group-hover:scale-110">
        {icon}
      </div>

      <div>

        <p className="text-xs sm:text-sm uppercase tracking-wider text-cyan-400">
          {title}
        </p>

        <p className="mt-1 text-base sm:text-lg text-white break-all">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    const external = href.startsWith("http");

    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return content;
}