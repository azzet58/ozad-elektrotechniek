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

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs lg:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pathname.slice(1)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-12 text-4xl md:mb-24 md:text-5xl lg:mb-36 lg:text-7xl">
          Pagina niet gevonden
        </h1>
        <div className="mx-auto max-w-4xl space-y-4 font-medium text-neutral-500 md:px-12 lg:space-y-8 lg:px-0 lg:text-2xl">
          <p>Helaas, de pagina die u zocht is niet gevonden of beschikbaar.</p>
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
      </div>
    </div>
  );
}
