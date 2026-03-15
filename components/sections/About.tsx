"use client";

import { Counter } from "@/components/ui/counter";
import { FadeIn } from "@/components/animations/fade-in";
import { TypingText } from "@/components/animations/typing-text";
import { ParallaxImage } from "@/components/animations/parallax-image";

export default function About() {
  return (
    <section
      data-nav-theme="dark"
      className="relative pt-12 pb-12 md:pt-24 md:pb-24 lg:py-36 xl:py-64"
    >
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 xl:gap-48">
          <div className="space-y-12 xl:space-y-24">
            <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">
              <TypingText text="Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie & brandveiligheid!" />
            </h2>
            <FadeIn>
              <p className="font-medium text-neutral-500 xl:text-2xl">
                Wij zijn Özad Elektrotechniek B.V, een
                elektro-installatiebedrijf gevestigd in Rotterdam. Met
                jarenlange ervaring, meer dan 1000 woningen gerealiseerd samen
                met onze top monteurs. Wij bieden passie voor techniek en
                betrouwbare en innovatieve oplossingen voor bedrijven.
              </p>
            </FadeIn>
            <div className="flex place-content-between md:place-content-start md:space-x-24 lg:place-content-between">
              <div className="md:space-y-1 xl:space-y-2">
                <h3 className="font-heading text-3xl md:w-12 md:text-4xl xl:w-36 xl:text-6xl">
                  <Counter to={1000} suffix="+" />
                </h3>
                <p className="text-xs font-medium md:text-sm xl:text-xl">
                  Woningen
                </p>
              </div>
              <div className="md:space-y-1 xl:space-y-2">
                <h3 className="font-heading text-3xl md:w-12 md:text-4xl xl:w-36 xl:text-6xl">
                  <Counter to={20} suffix="+" />
                </h3>
                <p className="text-xs font-medium md:text-sm xl:text-xl">
                  Jaar
                </p>
              </div>
              <div className="md:space-y-1 xl:space-y-2">
                <h3 className="font-heading text-3xl md:w-12 md:text-4xl xl:w-36 xl:text-6xl">
                  <Counter to={24} />
                  <span>/</span>
                  <Counter to={7} />
                </h3>
                <p className="text-xs font-medium md:text-sm xl:text-xl">
                  Beschikbaar
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-80 md:h-96 lg:absolute lg:top-36 lg:right-8 lg:h-3/4 lg:w-[45%]">
              <ParallaxImage
                src="/images/about/over-ozad-elektrotechniek.webp"
                alt="Over Özad Elektrotechniek"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
