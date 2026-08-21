import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function FeaturedProject() {
  const project = projects.find((project) => project.featured);

  if (!project) return null;

  return (
    <section className="bg-neutral-50 py-12 lg:py-24 2xl:pt-36 2xl:pb-24">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="mb-8 items-center justify-between space-y-4 md:flex lg:mb-12">
          <h2 className="text-2xl font-bold md:text-3xl 2xl:text-5xl">
            Uitgelicht project
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-[2200px] px-4 md:px-8">
        <article>
          <Link href={project.href} className="group">
            <div className="relative w-full overflow-hidden rounded-md">
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover transition-transform duration-800 group-hover:scale-105"
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
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-800 group-hover:scale-x-100" />
              <div className="absolute bottom-0 p-4 lg:space-y-1 2xl:space-y-2 2xl:p-8">
                <h2 className="text-lg font-medium text-white transition-colors duration-400 group-hover:text-blue-600 md:text-2xl lg:text-3xl 2xl:text-5xl">
                  {project.title}
                </h2>
                <ul className="flex flex-wrap items-center gap-x-2 gap-y-0 md:gap-3 2xl:items-end 2xl:gap-4">
                  {project.location && (
                    <li className="whitespace-nowrap text-neutral-400 md:text-lg lg:text-2xl 2xl:text-4xl">
                      {project.location}
                    </li>
                  )}
                  {project.homes && (
                    <li className="text-sm whitespace-nowrap text-neutral-400 md:text-base lg:text-xl 2xl:text-3xl">
                      <span className="font-bold">{project.homes}</span>{" "}
                      <span className="font-semibold">Woningen</span>
                    </li>
                  )}
                  {project.appartments && (
                    <li className="text-sm whitespace-nowrap text-neutral-400 md:text-base lg:text-xl 2xl:text-3xl">
                      <span className="font-bold">{project.appartments}</span>{" "}
                      <span className="font-semibold">Appartementen</span>
                    </li>
                  )}
                  {project.stats &&
                    project.stats.map((stat, index) => (
                      <li
                        key={index}
                        className="text-sm whitespace-nowrap text-neutral-400 md:text-base lg:text-xl 2xl:text-3xl"
                      >
                        {stat.value && (
                          <span className="font-bold">{stat.value} </span>
                        )}
                        <span className="font-semibold">{stat.label}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
