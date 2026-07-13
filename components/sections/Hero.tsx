"use client";

import { HeroTitle } from "@/components/animations/hero-title";

export default function Hero() {
  return (
    <section
      data-nav-theme="dark"
      className="relative h-[50vh] w-full overflow-hidden lg:h-screen"
    >
      <video
        src="/videos/hero/hero-banner.mp4"
        poster="/images/hero/hero-banner.webp"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
      <div className="mx-auto h-full max-w-[1700px] px-4 md:px-8">
        <div className="relative z-10 flex h-full max-w-5xl items-end py-12 md:max-w-lg lg:max-w-2xl lg:py-24 2xl:max-w-5xl 2xl:py-36">
          <HeroTitle>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl 2xl:text-8xl">
              Uw <span className="text-blue-600">Betrouwbare</span> Partner in
              Stroom & Techniek
            </h1>
          </HeroTitle>
        </div>
      </div>
    </section>
  );
}
