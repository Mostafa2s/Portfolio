"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          WHO I AM
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white">
          About Me
        </h2>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 md:p-8 lg:p-10 grid gap-8 md:gap-10 lg:grid-cols-2"
      >

        {/* Left */}

        <div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Software Engineering Student &
            <span className="block text-cyan-400">
              Android Developer
            </span>
          </h3>

          <p className="mt-6 md:mt-8 text-base sm:text-lg leading-7 md:leading-8 text-slate-400">

            I&apos;m Mostafa Alasaad, an Android Developer currently based in Germany.

            <br />
            <br />

            My journey started with Java and Android development, and today I&apos;m expanding my knowledge in Software Engineering, modern web technologies, and Cyber Security.

            <br />
            <br />

            I enjoy turning ideas into real-world applications with clean code, intuitive user experiences, and continuous learning.

          </p>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <Info
            title="Location"
            value="Essen, Germany"
          />

          <Info
            title="Languages"
            value="Arabic (Native) • English • German (B2) "
          />

          <Info
            title="Education"
            value="Software Engineering (Self Learning)"
          />

          <Info
            title="Current Focus"
            value="Android • Full Stack • Cyber Security"
          />

          <Info
            title="Goal"
            value="Junior Android Developer or Ausbildung"
          />

        </div>

      </motion.div>

    </section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="glass-card p-4 md:p-6">

      <p className="text-xs sm:text-sm uppercase tracking-widest text-cyan-400">
        {title}
      </p>

      <h4 className="mt-2 text-base sm:text-lg font-semibold text-white">
        {value}
      </h4>

    </div>
  );
}