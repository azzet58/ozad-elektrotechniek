import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-64">
      <div className="mx-auto max-w-[1700px] px-8">
        <div className="grid grid-cols-2 gap-48">
          <div className="space-y-24">
            <h2 className="text-5xl font-bold">
              Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie &
              brandveiligheid!
            </h2>
            <p className="text-2xl font-medium text-neutral-500">
              Wij zijn Özad Elektrotechniek B.V, een elektro-installatiebedrijf
              gevestigd in Rotterdam. Met jarenlange ervaring, meer dan 1000
              woningen gerealiseerd samen met onze top monteurs. Wij bieden
              passie voor techniek en betrouwbare en innovatieve oplossingen
              voor bedrijven.
            </p>
            <div className="grid grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-heading text-6xl">1.000+</h3>
                <p className="text-xl font-medium">Woningen</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-6xl">20+</h3>
                <p className="text-xl font-medium">Jaar</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-6xl">24/7</h3>
                <p className="text-xl font-medium">Beschikbaar</p>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute top-32 right-24 h-3/4 w-[45%]">
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
