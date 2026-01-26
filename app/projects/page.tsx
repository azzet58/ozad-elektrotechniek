import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    <div data-nav-theme="light" className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projecten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-24 text-7xl">Projecten</h1>
        <div className="flex flex-col gap-12 overflow-hidden">
          {projects.map((project) => (
            <article key={project.href}>
              <Link href={project.href}>
                <div className="relative w-full overflow-hidden rounded-md">
                  <AspectRatio ratio={16 / 9} className="relative p-4">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover"
                      priority
                    />
                    {project.status && (
                      <div className="absolute">
                        <Badge className="bg-blue-600 p-2">
                          {project.status}
                        </Badge>
                      </div>
                    )}
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                  <div className="absolute bottom-0 space-y-2 p-8">
                    <h2 className="text-5xl font-medium text-white">
                      {project.title}
                    </h2>
                    <ul className="flex items-end gap-4">
                      {project.location && (
                        <li className="text-4xl text-neutral-400">
                          {project.location}
                        </li>
                      )}
                      {project.homes && (
                        <li className="text-3xl text-neutral-400">
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
