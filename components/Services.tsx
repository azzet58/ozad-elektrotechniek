import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-64">
      <div className="mx-auto max-w-[1700px] px-8">
        <div className="grid grid-cols-2 gap-80">
          <div>
            <div className="absolute top-36 left-24 h-3/4 w-1/2">
              <Image
                src="/images/services/uitnodiging-ozad-elektrotechniek.webp"
                fill
                alt="Over Özad Elektrotechniek"
                className="rounded-md object-cover"
                priority
              />
            </div>
          </div>
          <div className="z-10 space-y-96">
            <h2 className="text-7xl leading-tight font-bold text-white">
              Sluit jij je aan bij Özad familie?
            </h2>
            <Button className="rounded-full bg-white p-6 text-lg font-bold text-black hover:bg-neutral-200">
              <Link href="/services" className="flex items-center gap-2">
                Bekijk onze vacatures <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="absolute top-12 right-0 h-9/10 w-1/2 rounded-md bg-blue-600"></div>
        </div>
      </div>
    </section>
  );
}
