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

export default function Projects() {
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
              <BreadcrumbPage>Projecten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-12 text-4xl md:text-5xl lg:mb-24 lg:text-7xl">
          Projecten
        </h1>
        <div className="flex flex-col gap-8 overflow-hidden lg:gap-12">
          {projects.map((project) => (
            <article key={project.href}>
              <Link href={project.href}>
                <div className="relative w-full overflow-hidden rounded-md">
                  <div className="relative aspect-[4/4] md:aspect-[16/9]">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover"
                      priority
                    />
                    {project.status && (
                      <div className="absolute">
                        <Badge className="rounded-none rounded-br-md bg-blue-600 p-1 lg:p-2">
                          {project.status}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 lg:space-y-2 lg:p-8">
                    <h2 className="text-xl font-medium text-white md:text-2xl lg:text-5xl">
                      {project.title}
                    </h2>
                    <ul className="flex items-center gap-2 md:gap-3 lg:items-end lg:gap-4">
                      {project.location && (
                        <li className="text-neutral-400 md:text-lg lg:text-4xl">
                          {project.location}
                        </li>
                      )}
                      {project.homes && (
                        <li className="text-sm text-neutral-400 md:text-base lg:text-3xl">
                          <span className="font-bold">{project.homes}</span>{" "}
                          <span className="font-semibold">Woningen</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
