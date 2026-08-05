"use client";

import { motion } from "framer-motion";
import { FaAward, FaCheckCircle } from "react-icons/fa";

const certificates = [
  {
    title: "B2 German for Professional Purposes",
    description:
      "Official professional German language certificate completed in Germany, focused on workplace communication.",
  },
  {
    title: "Deutsch-Test für Zuwanderer (DTZ B1)",
    description:
      "Successfully passed the official German language examination for immigrants (B1 level).",
  },
  {
    title: "Leben in Deutschland",
    description:
      "Successfully passed the official civic knowledge examination required for integration in Germany.",
  },
  {
    title: "German Integration Course",
    description:
      "Successfully completed the official German Integration Course.",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          ACHIEVEMENTS
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Certificates
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Official certificates earned throughout my educational and language
          learning journey in Germany.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {certificates.map((certificate, index) => (

          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 40 }}
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

            <div className="mb-6 flex items-center justify-between">

              <FaAward className="text-3xl text-cyan-400 transition duration-300 group-hover:scale-110" />

              <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                <FaCheckCircle />
                Verified
              </span>

            </div>

            <h3 className="text-2xl font-bold text-white">
              {certificate.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              {certificate.description}
            </p>

          </motion.div>

        ))}

      </div>

      {/* Bottom Note */}

      <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8 text-center">

        <p className="text-lg text-slate-300">
          Official certificates and supporting documents are available
          upon request during the recruitment or application process.
        </p>

      </div>

    </section>
  );
}