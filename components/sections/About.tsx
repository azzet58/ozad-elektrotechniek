import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function About() {
  return (
    <section
      data-nav-theme="dark"
      className="relative pt-12 pb-48 md:pt-24 md:pb-96 lg:py-64"
    >
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="grid gap-24 lg:grid-cols-2 lg:gap-48">
          <div className="space-y-12 lg:space-y-24">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie &
              brandveiligheid!
            </h2>
            <p className="font-medium text-neutral-500 lg:text-2xl">
              Wij zijn Özad Elektrotechniek B.V, een elektro-installatiebedrijf
              gevestigd in Rotterdam. Met jarenlange ervaring, meer dan 1000
              woningen gerealiseerd samen met onze top monteurs. Wij bieden
              passie voor techniek en betrouwbare en innovatieve oplossingen
              voor bedrijven.
            </p>
            <div className="flex place-content-between md:place-content-start md:space-x-24 lg:place-content-between">
              <div className="md:space-y-1 lg:space-y-2">
                <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl">
                  1.000+
                </h3>
                <p className="text-xs font-medium md:text-sm lg:text-xl">
                  Woningen
                </p>
              </div>
              <div className="md:space-y-1 lg:space-y-2">
                <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl">
                  20+
                </h3>
                <p className="text-xs font-medium md:text-sm lg:text-xl">
                  Jaar
                </p>
              </div>
              <div className="md:space-y-1 lg:space-y-2">
                <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl">
                  24/7
                </h3>
                <p className="text-xs font-medium md:text-sm lg:text-xl">
                  Beschikbaar
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute bottom-12 h-1/5 w-[90%] md:bottom-24 md:h-1/3 md:w-[60%] lg:top-32 lg:right-24 lg:h-3/4 lg:w-[45%]">
              <Image
                src="/images/about/over-ozad-elektrotechniek.webp"
                fill
                alt="Over Özad Elektrotechniek"
                className="rounded-md object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
