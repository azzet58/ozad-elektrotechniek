import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Project({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectSlug } = await params;
  const project = projects.find((p) => p.href === `/projects/${projectSlug}`);
  if (!project) {
    notFound();
  }
  return (
    <div className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projecten</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-24 text-7xl text-black">
          {project.title}
        </h1>
        <div>
          <AspectRatio ratio={16 / 9} className="relative p-4">
            <Image
              src={project.image}
              fill
              alt=""
              className="rounded-t-md object-cover"
              priority
            />
            {project.status && (
              <div className="absolute">
                <Badge className="bg-blue-600 p-2">{project.status}</Badge>
              </div>
            )}
          </AspectRatio>
          <div className="rounded-b-md bg-blue-600 p-12">
            <div className="grid grid-cols-3 text-xl">
              <div className="space-y-12">
                {project.client && (
                  <div>
                    <p className="text-neutral-300">Opdrachtgever</p>
                    <p className="text-white">{project.client}</p>
                  </div>
                )}
                {project.contractor && (
                  <div>
                    <p className="text-neutral-300">Aannemer</p>
                    <p className="text-white">{project.contractor}</p>
                  </div>
                )}
              </div>
              <div className="space-y-12">
                {project.location && (
                  <div>
                    <p className="text-neutral-300">Locatie</p>
                    <p className="text-white">{project.location}</p>
                  </div>
                )}
                {project.homes && (
                  <div>
                    <p className="text-neutral-300">Woningen</p>
                    <p className="text-white">{project.homes}</p>
                  </div>
                )}
              </div>
              <div className="space-y-12">
                {project.term && (
                  <div>
                    <p className="text-neutral-300">Looptijd</p>
                    <p className="text-white">{project.term}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-24">
              {project.description && (
                <p className="text-4xl text-white">{project.description}</p>
              )}
            </div>
          </div>
        </div>
        {project.sections?.some(
          (section) => section.heading || section.paragraph || section.list,
        ) && (
          <div className="mx-auto mt-36 max-w-4xl space-y-24 text-2xl font-medium text-neutral-500">
            {project.sections.map((section, index) => (
              <section key={index} className="space-y-8">
                {section.heading && (
                  <h2 className="text-4xl font-bold text-black">
                    {section.heading}
                  </h2>
                )}
                {section.paragraph && <p>{section.paragraph}</p>}
                {section.list && (
                  <ul className="list-inside list-disc">
                    {section.list.map((item, listIndex) => (
                      <li key={listIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
        {project.sections?.some(
          (section) => section.images && section.images.length > 0,
        ) && (
          <div className="mt-36">
            {project.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8 grid grid-cols-2 gap-12">
                {section.images?.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <AspectRatio ratio={4 / 4}>
                      <Image
                        src={image}
                        fill
                        alt=""
                        className="rounded-md object-cover"
                        priority
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
