import HeroInfo from "./HeroInfo";
import HeroCode from "./HeroCode";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-40 pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
<div className="relative">
  <HeroInfo />
</div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="w-full max-w-xl">
              <HeroCode />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}