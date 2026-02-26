import { projects } from "@/data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section className="bg-neutral-50 py-12 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl lg:mb-12 lg:text-5xl">
          Projecten
        </h2>
      </div>
      <div className="flex flex-row gap-4 overflow-hidden pl-4 md:pl-8 lg:pl-64">
        {projects.map((project) => (
          <article key={project.href}>
            <Link href={project.href}>
              <div className="relative w-[256px] overflow-hidden rounded-md md:w-[400px] lg:w-[1024px]">
                <div className="relative aspect-[4/4]">
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
                  <h2 className="text-lg font-medium text-white md:text-2xl lg:text-5xl">
                    {project.title}
                  </h2>
                  <ul className="flex items-center gap-2 md:items-center md:gap-3 lg:gap-4">
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
    </section>
  );
}
