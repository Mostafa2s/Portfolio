"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          WHO I AM
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          About Me
        </h2>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          grid
          gap-10
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
          lg:grid-cols-2
        "
      >

        {/* Left */}

        <div>

          <h3 className="text-3xl font-bold text-white">
            Android Developer &
            <span className="block text-cyan-400">
              Software Engineering Student
            </span>
          </h3>

          <p className="mt-8 leading-8 text-slate-400">

            I'm Mostafa Alasaad, an Android Developer currently based in Germany.

            <br />
            <br />

            My My journey started with Java and Android development, and today I'm expanding my knowledge in Software Engineering, modern web technologies, and Cyber Security.

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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <p className="text-sm uppercase tracking-widest text-cyan-400">
        {title}
      </p>

      <h4 className="mt-2 text-lg font-semibold text-white">
        {value}
      </h4>

    </div>
  );
}