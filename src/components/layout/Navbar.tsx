"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaDownload } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
 const [active, setActive] = useState("");
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", onScroll);

  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onScroll);
  };
}, []);

return (
  <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
  scrolled ? "top-3 sm:top-4" : "top-6 sm:top-8"
}`}
      >
        <div className={`glass-card rounded-full flex items-center gap-4 md:gap-6 px-4 sm:px-6 py-3 ${scrolled ? "shadow-2xl backdrop-blur-2xl" : ""}`}>

          <Link
            href="/"
            className="-my-2 flex items-center py-2 text-sm sm:text-base font-bold text-white tracking-wide"
          >
            Mostafa
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`-my-2 py-2 text-sm xl:text-base transition ${
                  active === link.href.replace("#", "")
                    ? "text-cyan-400 font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">

            <a
              href="/Mostafa_Alasaad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button-primary flex items-center gap-2 px-4 py-2 text-sm"
            >
              <FaDownload />
              <span className="hidden xl:inline">CV</span>
            </a>

            <a
              href="https://github.com/Mostafa2s"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2.5 xl:p-3 hover:bg-white/10 transition"
            >
              <FaGithub className="text-base xl:text-lg" />
            </a>

          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden -my-2 -mr-1 flex h-11 w-11 items-center justify-center text-white text-lg sm:text-xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

        </div>
      </motion.nav>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-xl lg:hidden"
          >

            <div className="flex justify-end p-4 sm:p-6">

              <button
                onClick={() => setMobileOpen(false)}
                className="glass-card p-3 text-2xl sm:text-3xl text-white"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

            </div>

            <div className="mt-8 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8 px-4 pb-12">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center px-4 py-2 text-xl sm:text-2xl text-white font-medium hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>

              ))}

              <a
                href="/Mostafa_Alasaad_CV.pdf"
                className="glass-button glass-button-primary mt-4 sm:mt-6 text-base sm:text-lg"
              >
                Download CV
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}