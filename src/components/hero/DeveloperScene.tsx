"use client";

import { useRef, useState, type PointerEvent } from "react";
import { FaAndroid, FaCode, FaPause, FaPlay } from "react-icons/fa";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function DeveloperScene() {
  const scene = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, .82]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const [paused, setPaused] = useState(false);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    scene.current?.style.setProperty("--tilt-x", `${-(event.clientY - bounds.top - bounds.height / 2) / 45}deg`);
    scene.current?.style.setProperty("--tilt-y", `${(event.clientX - bounds.left - bounds.width / 2) / 45}deg`);
  }
  function reset() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div ref={stage} className={`developer-stage${paused ? " scene-paused" : ""}`} onPointerMove={move} onPointerLeave={reset}>
      <div className="stage-caption"><span>THE DEVELOPER&apos;S WORKSPACE</span><span>LIVE / 3D</span></div>
      <motion.div className="scene-scroll-layer" style={paused || reduced ? {} : { scale, rotate, y }}>
      <div ref={scene} className="developer-scene" role="img" aria-label="Three-dimensional illustration of an Android phone and a developer code editor">
        <div className="scene-floor" />
        <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
        <div className="scene-editor">
          <div className="editor-bar"><span>● ● ●</span><span>hello-world.kt</span><FaCode /></div>
          <div className="editor-code">
            <p><em>01</em><span className="code-muted">{"// Small details. Better experiences."}</span></p>
            <p><em>02</em><span className="code-peach">class</span> Developer {"{"}</p>
            <p><em>03</em>{"  "}<span className="code-peach">val</span> name = <span className="code-mint">&quot;Mostafa&quot;</span></p>
            <p><em>04</em>{"  "}<span className="code-peach">val</span> focus = <span className="code-mint">&quot;Android&quot;</span></p>
            <p><em>05</em></p>
            <p><em>06</em>{"  "}<span className="code-peach">fun</span> build() {"{"}</p>
            <p><em>07</em>{"    "}idea.<span className="code-mint">bringToLife</span>()</p>
            <p><em>08</em>{"  }"}</p>
            <p><em>09</em>{"}"}<span className="editor-cursor" /></p>
          </div>
          <div className="editor-status"><span>● Kotlin</span><span>Made with curiosity ↗</span></div>
        </div>
        <div className="scene-phone"><div className="phone-screen"><div className="phone-island" /><div className="phone-top"><span>09:41</span><span>••• ▰</span></div><div className="phone-content"><FaAndroid className="phone-android" /><p>FROM AN IDEA</p><h2>Make<br />something<br /><i>matter.</i></h2><div className="phone-art"><span /><span /><span /></div><div className="phone-footer">Built for real life <span>↗</span></div></div><div className="phone-home" /></div></div>
        <div className="scene-chip chip-kotlin">K<span>KOTLIN</span></div><div className="scene-chip chip-code">&lt;/&gt;</div>
      </div>
      </motion.div>
      <div className="scene-controls"><span>MOVE YOUR CURSOR TO EXPLORE</span><button type="button" aria-label={paused ? "Enable scene motion" : "Pause scene motion"} aria-pressed={paused} onClick={() => { reset(); setPaused(!paused); }}>{paused ? <FaPlay /> : <FaPause />}</button></div>
    </div>
  );
}
