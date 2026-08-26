"use client";

import { motion } from "framer-motion";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      {/* Heading */}

      <div className="mb-12 sm:mb-16 md:mb-20 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
          ACHIEVEMENTS
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Certificates
        </h2>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base sm:text-lg leading-7 md:leading-8 text-slate-400 px-4">
          Official certificates earned throughout my educational and language
          learning journey in Germany.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">

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
            className="glass-card p-6 md:p-8 group hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_35px_rgba(34,211,238,.12)] transition-all duration-300"
          >

            <div className="mb-6 flex items-center justify-between flex-wrap gap-3">

              <FaAward className="text-2xl sm:text-3xl text-cyan-400 transition duration-300 group-hover:scale-110" />

              <span className="glass-badge text-xs sm:text-sm bg-green-500/10 text-green-400 flex items-center gap-2">
                <FaCheckCircle />
                Verified
              </span>

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {certificate.title}
            </h3>

            <p className="mt-4 md:mt-5 text-base sm:text-lg leading-7 md:leading-8 text-slate-400">
              {certificate.description}
            </p>

          </motion.div>

        ))}

      </div>

      {/* Bottom Note */}

      <div className="glass-card mt-12 md:mt-16 p-6 md:p-8 text-center border-cyan-400/20 bg-cyan-500/5">

        <p className="text-base sm:text-lg text-slate-300">
          Official certificates and supporting documents are available
          upon request during the recruitment or application process.
        </p>

      </div>

    </section>
  );
}