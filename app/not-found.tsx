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
    <div data-nav-theme="light" className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pathname.slice(1)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-36 text-7xl">Pagina niet gevonden</h1>
        <div className="mx-auto max-w-4xl space-y-8 text-2xl font-medium text-neutral-500">
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
