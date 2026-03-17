import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { FadeIn } from "@/components/animations/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özad Elektrotechniek | Elektro-installatiebedrijf Rotterdam",
  description:
    "Özad Elektrotechniek B.V. is een elektro-installatiebedrijf gevestigd in Rotterdam. Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie en brandveiligheid.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FadeIn>
        <Projects />
      </FadeIn>
      <Services />
    </>
  );
}
