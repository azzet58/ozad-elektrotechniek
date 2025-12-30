import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <p className="mb-12">Breadcrumb</p>
        <h1 className="font-heading mb-36 text-8xl">Projecten</h1>
        <div className="flex flex-col gap-4 overflow-hidden">
          {projects.map((project) => (
            <article key={project.href}>
              <Link href={project.href}>
                <div className="relative w-full overflow-hidden rounded-md">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover"
                      priority
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                  <div className="absolute bottom-0 space-y-2 p-8">
                    <h2 className="text-6xl font-medium text-white">
                      {project.title}
                    </h2>
                    <ul className="flex items-end gap-4">
                      <li className="text-5xl text-neutral-400">
                        {project.location}
                      </li>
                      <li className="text-3xl text-neutral-400">
                        <span className="font-">{project.homes}</span> Woningen
                      </li>
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
