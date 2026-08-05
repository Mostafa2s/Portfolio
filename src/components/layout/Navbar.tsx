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
  scrolled ? "top-4" : "top-8"
}`}
      >
        <div className={`
glass
flex
items-center
gap-6
rounded-full
border
border-white/10
transition-all
duration-300
px-6
py-3

${scrolled ? "shadow-2xl backdrop-blur-2xl" : ""}
`}>

          <Link
            href="/"
            className="font-bold text-white tracking-wide"
          >
            Mostafa
          </Link>

          <div className="hidden lg:flex items-center gap-7">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition ${
                  active === link.href.replace("#", "")
                    ? "text-cyan-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

          </div>

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="/Mostafa_Alasaad_CV.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:scale-105 transition"
            >
              <FaDownload />
              CV
            </a>

            <a
              href="https://github.com/Mostafa2s"
              target="_blank"
              className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition"
            >
              <FaGithub />
            </a>

          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white text-xl"
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
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-lg lg:hidden"
          >

            <div className="flex justify-end p-6">

              <button
                onClick={() => setMobileOpen(false)}
                className="text-3xl text-white"
              >
                <FaTimes />
              </button>

            </div>

            <div className="mt-12 flex flex-col items-center gap-8">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-white"
                >
                  {link.name}
                </a>

              ))}

              <a
                href="/cv/Mostafa_Alasaad_CV.pdf"
                className="mt-6 rounded-full bg-cyan-500 px-7 py-4 text-black font-semibold"
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