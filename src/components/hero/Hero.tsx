"use client";

import HeroInfo from "./HeroInfo";
import DeveloperScene from "./DeveloperScene";

export default function Hero() {
  return (
    <section
      id="hero"
      className="studio-hero relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT - Hero Info */}
          <div className="w-full">
            <HeroInfo />
          </div>

          {/* RIGHT - Hero Code */}
          <div className="w-full">
            <DeveloperScene />
          </div>

        </div>
      </div>
    </section>
  );
}
