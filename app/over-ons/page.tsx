import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FadeIn } from "@/components/animations/fade-in";
import { TypingText } from "@/components/animations/typing-text";
import { ParallaxImage } from "@/components/animations/parallax-image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons | Özad Elektrotechniek",
  description:
    "Maak kennis met Özad Elektrotechniek B.V. Met jarenlange ervaring en meer dan 1000 woningen opgeleverd, leveren wij betrouwbare elektrotechnische oplossingen.",
};

export default function About() {
  return (
    <div data-nav-theme="dark" className="bg-black py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm xl:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:text-white" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Over ons</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl text-white md:mb-24 md:text-5xl xl:mb-36 xl:text-7xl">
            Maak kennis met Özad Elektrotechniek
          </h1>
        </FadeIn>
        <div className="mx-auto mb-12 max-w-4xl space-y-12 font-medium text-neutral-500 md:mb-24 md:px-12 xl:mb-36 xl:space-y-24 xl:px-0 xl:text-2xl">
          <section className="space-y-4 xl:space-y-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-white md:text-2xl xl:text-4xl">
                <TypingText text="Focus op hoogwaardige diensten" />
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                Özad Elektrotechniek B.V. is opgericht met passie voor
                elektrische installaties, verlichtingssystemen en domotica
                oplossingen. Onze focus ligt op het leveren van hoogwaardige
                diensten en het bieden van op maat gemaakte oplossingen voor
                onze klanten. Met jarenlange ervaring en expertise zorgen wij
                voor betrouwbare en veilige elektrotechnische oplossingen. Ons
                team bestaat uit gepassioneerde professionals die streven naar
                perfectie in elk project dat we uitvoeren. Wij geloven in het
                leveren van kwaliteit en klanttevredenheid staat bij ons altijd
                voorop.
              </p>
            </FadeIn>
          </section>
          <section className="space-y-4 xl:space-y-8">
            <FadeIn delay={0.6}>
              <h2 className="text-xl font-bold text-white md:text-2xl xl:text-4xl">
                <TypingText delay={0.6} text="Ervaring die spreekt" />
              </h2>
            </FadeIn>
            <FadeIn delay={0.9}>
              <p>
                We hebben inmiddels meer dan 1000 woningen opgeleverd, en elk
                daarvan voelt als een belangrijk hoogtepunt. Het is bijzonder om
                te zien hoe onze klanten steeds weer tevreden zijn met het
                resultaat. Of het nu gaat om een compleet nieuwe elektrische
                installatie in een bedrijfspand of een slimme oplossing in een
                woning, we zetten ons altijd 100% in.
              </p>
            </FadeIn>
            <FadeIn delay={1.2}>
              <p>
                Bij elk project leren we weer iets nieuws, en die ervaring nemen
                we mee naar de volgende uitdaging. Wat ons het meest trots
                maakt? Dat klanten ons blijven aanbevelen vanwege onze
                betrouwbaarheid, kwaliteit en persoonlijke aanpak. Voor ons
                draait het niet alleen om techniek, maar vooral om het creëren
                van oplossingen waar mensen écht blij van worden.
              </p>
            </FadeIn>
          </section>
        </div>
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2 xl:gap-12">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md xl:aspect-[4/4]">
                <ParallaxImage
                  src="/images/about/over-ozad-elektrotechniek-2.webp"
                  alt="Özad Elektrotechniek team aan het werk"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md xl:aspect-[4/4]">
                <ParallaxImage
                  src="/images/about/over-ozad-elektrotechniek-3.webp"
                  alt="Özad Elektrotechniek team aan het werk"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
