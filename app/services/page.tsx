import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Services() {
  return (
    <div className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <p className="mb-12">Breadcrumb</p>
        <h1 className="font-heading mb-36 text-8xl">
          Sluit je aan bij de Özad familie
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-36 py-36">
            <h2 className="text-center text-6xl font-bold text-black">
              Elektromonteur
            </h2>
            <div className="flex flex-col gap-12">
              <Button
                asChild
                className="h-full self-center rounded-full bg-blue-600 text-2xl font-bold hover:bg-black"
              >
                <Link href="https://api.whatsapp.com/send?phone=31686297002">
                  <FaWhatsapp className="size-8" />
                  Neem nu contact op
                </Link>
              </Button>
              <Button
                asChild
                className="h-full self-center rounded-full bg-blue-600 text-2xl font-bold hover:bg-black"
              >
                <Link href="tel:31626324551">
                  <FaPhoneAlt className="size-6" />
                  Neem nu contact op
                </Link>
              </Button>
              <Button
                asChild
                className="h-full self-center rounded-full bg-blue-600 text-2xl font-bold hover:bg-black"
              >
                <Link href="mailto:info@ozadelektrotechniek.nl">
                  <FaEnvelope className="size-6" />
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
