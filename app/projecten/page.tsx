import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
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
  title: "Projecten | Özad Elektrotechniek",
  description:
    "Bekijk de uitgevoerde projecten van Özad Elektrotechniek B.V. in nieuwbouw, utiliteitsbouw en renovatie door heel Nederland.",
};

export default function Projects() {
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
              <BreadcrumbPage>Projecten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl md:text-5xl xl:mb-24 xl:text-7xl">
            Projecten
          </h1>
        </FadeIn>
        <div className="flex flex-col gap-4 overflow-hidden xl:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.href}>
              <article>
                <Link href={project.href} className="group">
                  <div className="relative w-full overflow-hidden rounded-md">
                    <div className="relative aspect-[4/4] md:aspect-[16/9]">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-800 group-hover:scale-105"
                        priority={index === 0}
                      />
                      {project.status && (
                        <div className="absolute">
                          <Badge className="rounded-none rounded-br-md bg-blue-600 p-1 xl:p-2">
                            {project.status}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-800 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 p-4 lg:space-y-1 xl:space-y-2 xl:p-8">
                      <h2 className="text-xl font-medium text-white transition-colors duration-400 group-hover:text-blue-600 md:text-2xl lg:text-3xl xl:text-5xl">
                        {project.title}
                      </h2>
                      <ul className="flex items-center gap-2 md:gap-3 xl:items-end xl:gap-4">
                        {project.location && (
                          <li className="text-neutral-400 md:text-lg lg:text-2xl xl:text-4xl">
                            {project.location}
                          </li>
                        )}
                        {project.homes && (
                          <li className="text-sm text-neutral-400 md:text-base lg:text-xl xl:text-3xl">
                            <span className="font-bold">{project.homes}</span>{" "}
                            <span className="font-semibold">Woningen</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
