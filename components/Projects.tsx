import { projects } from "@/data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section className="bg-neutral-50 py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <h2 className="mb-12 text-5xl font-bold">Projecten</h2>
      </div>
      <div className="flex flex-row gap-4 overflow-hidden pl-64">
        {projects.map((project) => (
          <article key={project.href}>
            <Link href={project.href}>
              <div className="relative w-[1024px] overflow-hidden rounded-md">
                <AspectRatio ratio={4 / 4} className="relative p-4">
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
    </section>
  );
}
