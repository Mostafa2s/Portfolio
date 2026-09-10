"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaDownload } from "react-icons/fa";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
 const [active, setActive] = useState("");
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  let frame = 0;
  const update = () => {
    frame = 0;
    setScrolled(window.scrollY > 40);
    const marker = Math.min(window.innerHeight * .3, 220);
    let current = "";
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section.id;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections.at(-1)?.id ?? current;
    setActive(current);
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  window.addEventListener("resize", onScroll);
  const observer = new ResizeObserver(onScroll);
  observer.observe(document.body);
  onScroll();

  return () => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", onScroll);
    window.removeEventListener("scroll", onScroll);
  };
}, []);

useEffect(() => {
  if (!mobileOpen) return;
  const dialog = menu.current;
  const opener = trigger.current;
  const previousOverflow = document.body.style.overflow;
  dialog?.showModal();
  document.body.style.overflow = "hidden";
  const desktop = window.matchMedia("(min-width: 1024px)");
  const onResize = () => { if (desktop.matches) setMobileOpen(false); };
  desktop.addEventListener("change", onResize);
  onResize();

  return () => {
    desktop.removeEventListener("change", onResize);
    dialog?.close();
    document.body.style.overflow = previousOverflow;
    if (!desktop.matches) opener?.focus({ preventScroll: true });
  };
}, [mobileOpen]);

return (
  <>
      <motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: scrollYProgress }} />
      <motion.nav
        aria-label="Main navigation"
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: reduced ? 0 : 0.6 }}
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
  scrolled ? "top-3 sm:top-4" : "top-6 sm:top-8"
}`}
      >
        <div className={`studio-nav-shell glass-card rounded-full flex items-center gap-4 md:gap-6 px-4 sm:px-6 py-3 ${scrolled ? "shadow-2xl backdrop-blur-2xl" : ""}`}>

          <Link
            href="/"
            className="-my-2 flex items-center py-2 text-sm sm:text-base font-bold text-white tracking-wide"
          >
            Mostafa
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {links.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`studio-nav-link -my-2 py-2 text-sm xl:text-base transition ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {isActive && <motion.span className="nav-active-marker" layoutId="active-navigation" transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 32 }} />}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}

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
              aria-label="Mostafa on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2.5 xl:p-3 hover:bg-white/10 transition"
            >
              <FaGithub className="text-base xl:text-lg" />
            </a>

          </div>

          <button
            ref={trigger}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden -my-2 -mr-1 flex h-11 w-11 items-center justify-center text-white text-lg sm:text-xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

        </div>
      </motion.nav>

      <dialog ref={menu} id="mobile-navigation" className="studio-mobile-dialog" aria-labelledby="mobile-menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const targets = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
          const first = targets[0];
          const last = targets[targets.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }}
        onCancel={(event) => { event.preventDefault(); setMobileOpen(false); }} onClose={() => setMobileOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setMobileOpen(false); }}>
        {mobileOpen && (
          <motion.div className="studio-mobile-panel" initial={reduced ? false : { opacity: 0, rotateX: -12, y: -24, scale: .97 }} animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : .4, ease: [.22, 1, .36, 1] }}>

            <div className="flex items-center justify-between p-4 sm:p-6">
              <h2 id="mobile-menu-title" className="mobile-menu-title">EXPLORE / MOSTAFA</h2>

              <button
                type="button"
                autoFocus
                onClick={() => setMobileOpen(false)}
                className="glass-card p-3 text-2xl sm:text-3xl text-white"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

            </div>

            <nav aria-label="Mobile navigation" className="mobile-menu-links">

              {links.map((link, index) => (

                <a
                  key={link.name}
                  href={link.href}
                  aria-current={active === link.href.slice(1) ? "location" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="mobile-menu-link"
                >
                  <span className="mobile-link-number">0{index + 1}</span><span>{link.name}</span><span className="mobile-link-arrow" aria-hidden="true">↗</span>
                </a>

              ))}

              <a
                href="/Mostafa_Alasaad_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-primary mt-4 sm:mt-6 text-base sm:text-lg"
              >
                Download CV
              </a>

            </nav>

          </motion.div>

        )}

      </dialog>
    </>
  );
}
