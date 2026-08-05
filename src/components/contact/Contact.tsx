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
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Let's Build Something Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I'm always interested in new opportunities, collaborations and
          Junior Android Developer positions.
          Feel free to get in touch.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          grid
          gap-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
          md:grid-cols-2
        "
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

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8">

          <h3 className="text-2xl font-bold text-white">
            Currently Open To
          </h3>

          <div className="mt-8 space-y-5">

            <p className="text-lg text-green-400">
              ✔ Junior Android Developer
            </p>

            <p className="text-lg text-green-400">
              ✔ Ausbildung
            </p>

            <p className="text-lg text-green-400">
              ✔ Internship
            </p>

            <p className="text-lg text-green-400">
              ✔ Freelance Projects
            </p>

          </div>

          <p className="mt-10 leading-8 text-slate-400">
            I'm passionate about learning, solving real-world problems and
            building modern software. If you think I'd be a good fit for your
            team, I'd love to hear from you.
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
    <div
      className="
        group
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-white/[0.07]
        hover:-translate-y-1
      "
    >

      <div className="text-2xl text-cyan-400 transition group-hover:scale-110">
        {icon}
      </div>

      <div>

        <p className="text-sm uppercase tracking-wider text-cyan-400">
          {title}
        </p>

        <p className="mt-1 text-lg text-white">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}