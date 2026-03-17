"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";

export default function Services() {
  return (
    <section className="relative pt-24 pb-12 sm:py-24 lg:py-36 xl:py-64">
      <div className="mx-auto max-w-[1700px] px-4 lg:px-12">
        <div className="grid md:grid-cols-2 md:gap-36 lg:gap-48 xl:gap-80">
          <div>
            <div className="absolute top-12 right-4 left-4 h-2/5 overflow-hidden rounded-md sm:h-1/2 md:top-24 md:right-auto md:left-8 md:h-3/4 md:w-1/2 lg:h-3/4 xl:top-46">
              <ParallaxImage
                src="/images/services/uitnodiging-ozad-elektrotechniek.webp"
                alt="Over Özad Elektrotechniek"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
          <div className="z-10 space-y-12 md:space-y-36 md:py-0 xl:space-y-64">
            <FadeIn>
              <h2 className="pt-36 text-4xl leading-tight font-bold text-white md:pt-12 md:text-4xl xl:pt-12 xl:text-7xl">
                Sluit jij je aan bij Özad familie?
              </h2>
            </FadeIn>
            <FadeIn>
              <Button className="cursor-pointer rounded-full bg-white p-4 text-xs font-bold text-black hover:bg-neutral-100 md:text-sm xl:p-6 xl:text-lg">
                <Link
                  href="/diensten"
                  className="flex items-center gap-1 lg:gap-2"
                >
                  Bekijk onze vacatures{" "}
                  <ArrowRight className="size-3 md:size-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
          <div className="absolute right-0 bottom-0 h-3/5 w-full bg-blue-600/90 md:h-9/10 md:w-1/2 md:rounded-tl-md"></div>
        </div>
      </div>
    </section>
  );
}
