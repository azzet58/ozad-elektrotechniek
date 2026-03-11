"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/animations/fade-in";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm xl:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pathname.slice(1)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl md:mb-24 md:text-5xl xl:mb-36 xl:text-7xl">
            Pagina niet gevonden
          </h1>
          <div className="mx-auto max-w-4xl space-y-4 font-medium text-neutral-500 md:px-12 xl:space-y-8 xl:px-0 xl:text-2xl">
            <p>
              Helaas, de pagina die u zocht is niet gevonden of beschikbaar.
            </p>
            <ul className="list-inside list-disc">
              <p>Ga direct naar:</p>
              <li>
                <Link
                  className="text-blue-600 transition-colors hover:text-black"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-600 transition-colors hover:text-black"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
