import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FadeIn } from "@/components/animations/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacatures | Özad Elektrotechniek",
  description:
    "Özad Elektrotechniek B.V. is op zoek naar elektromonteurs. Sluit je aan bij ons team in Rotterdam.",
};

export default function Services() {
  return (
    <div data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm 2xl:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Vacatures</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl md:text-5xl 2xl:mb-36 2xl:text-7xl">
            Sluit je aan bij de Özad familie
          </h1>
          <div className="grid md:grid-cols-2">
            <div className="space-y-12 rounded-t-md bg-zinc-800 px-12 py-12 md:rounded-t-none md:rounded-l-md md:py-24 lg:py-36 2xl:space-y-24 2xl:py-64">
              <h2 className="text-center text-xl font-semibold text-black text-white md:text-2xl lg:text-3xl 2xl:text-5xl">
                Elektromonteur
              </h2>
              <div className="flex justify-center gap-2 lg:gap-4">
                <Button className="cursor-pointer self-start rounded-full bg-blue-600 p-5 font-bold hover:bg-blue-700 md:text-sm lg:p-6 2xl:p-7 2xl:text-lg">
                  <Link
                    href="https://api.whatsapp.com/send?phone=31686297002"
                    className="flex items-center gap-2"
                  >
                    <FaWhatsapp className="size-4 lg:size-6 2xl:size-7" />
                  </Link>
                </Button>
                <Button className="cursor-pointer self-start rounded-full bg-blue-600 p-5 font-bold hover:bg-blue-700 md:text-sm lg:p-6 2xl:p-7 2xl:text-lg">
                  <Link
                    href="tel:31626324551"
                    className="flex items-center gap-2"
                  >
                    <FaPhoneAlt className="size-3 lg:size-4 2xl:size-5" />
                  </Link>
                </Button>
                <Button className="cursor-pointer self-start rounded-full bg-blue-600 p-5 font-bold hover:bg-blue-700 md:text-sm lg:p-6 2xl:p-7 2xl:text-lg">
                  <Link
                    href="mailto:info@ozadelektrotechniek.nl"
                    className="flex items-center gap-2"
                  >
                    <FaEnvelope className="size-3 lg:size-4 2xl:size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-b-md md:rounded-tr-md md:rounded-b-none md:rounded-br-md">
              <div className="relative aspect-[4/4]">
                <Image
                  src="/images/services/elektromonteur.webp"
                  fill
                  alt="Elektromonteur bij Özad Elektrotechniek"
                  className="h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
