import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { FadeIn } from "@/components/animations/fade-in";

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
