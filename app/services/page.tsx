import { AspectRatio } from "@/components/ui/aspect-ratio";
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

export default function Services() {
  return (
    <div data-nav-theme="light" className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Diensten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-36 text-7xl">
          Sluit je aan bij de Özad familie
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-36 py-36">
            <h2 className="text-center text-5xl font-bold text-black">
              Elektromonteur
            </h2>
            <div className="flex flex-col gap-12">
              <Button className="self-center rounded-full bg-blue-600 p-6 text-lg font-bold hover:bg-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=31686297002"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="size-6" />
                  Neem nu contact op
                </Link>
              </Button>
              <Button className="self-center rounded-full bg-blue-600 p-6 text-lg font-bold hover:bg-black">
                <Link
                  href="tel:31626324551"
                  className="flex items-center gap-2"
                >
                  <FaPhoneAlt className="size-4" />
                  Neem nu contact op
                </Link>
              </Button>
              <Button className="self-center rounded-full bg-blue-600 p-6 text-lg font-bold hover:bg-black">
                <Link
                  href="mailto:info@ozadelektrotechniek.nl"
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="size-4" />
                  Neem nu contact op
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <AspectRatio ratio={4 / 4}>
              <Image
                src="/images/services/elektromonteur.webp"
                fill
                alt=""
                className="rounded-md object-cover"
                priority
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
}
