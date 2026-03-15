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
import { TypingText } from "@/components/animations/typing-text";
import { ParallaxImage } from "@/components/animations/parallax-image";

type Project = (typeof projects)[number];

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <main data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm xl:text-base">
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
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl text-black md:text-5xl xl:mb-24 xl:text-7xl">
            {project.title}
          </h1>
          <div className="relative aspect-[4/4] overflow-hidden rounded-t-md md:aspect-[16/9]">
            <ParallaxImage
              src={project.image}
              alt=""
              className="absolute inset-0 rounded-t-md object-cover"
              priority
            />
            {project.status && (
              <div className="absolute">
                <Badge className="rounded-none rounded-br-md bg-blue-600 p-1 xl:p-2">
                  {project.status}
                </Badge>
              </div>
            )}
          </div>
          <div className="rounded-b-md bg-blue-600 p-4 lg:p-8 xl:p-12">
            <div className="grid grid-cols-2 text-xs md:grid-cols-3 md:text-sm lg:text-base xl:text-xl">
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
            <div className="mt-12 lg:mt-24">
              {project.description && (
                <p className="text-lg text-white md:text-2xl xl:text-4xl">
                  {project.description}
                </p>
              )}
            </div>
          </div>
          {project.sections?.some(
            (section) => section.heading || section.paragraph || section.list,
          ) && (
            <div className="mx-auto mt-12 max-w-4xl space-y-12 font-medium text-neutral-500 md:mt-24 md:space-y-24 md:px-12 xl:mt-36 xl:px-0 xl:text-2xl">
              {project.sections.map((section, index) => (
                <section key={index} className="space-y-4 xl:space-y-8">
                  {section.heading && (
                    <h2 className="text-xl font-bold text-black md:text-2xl xl:text-4xl">
                      <TypingText text={section.heading} />
                    </h2>
                  )}
                  {section.paragraph && (
                    <FadeIn>
                      <p>{section.paragraph}</p>
                    </FadeIn>
                  )}
                  {section.list && (
                    <FadeIn>
                      <ul className="list-inside list-disc">
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex}>{item}</li>
                        ))}
                      </ul>
                    </FadeIn>
                  )}
                </section>
              ))}
            </div>
          )}
          {project.sections?.some(
            (section) => section.images && section.images.length > 0,
          ) && (
            <div className="mt-12 md:mt-24 xl:mt-36">
              {project.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="mb-8 grid gap-4 md:grid-cols-2 xl:gap-12"
                >
                  {section.images?.map((image, imageIndex) => (
                    <div key={imageIndex}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md xl:aspect-[4/4]">
                        <ParallaxImage
                          src={image}
                          alt=""
                          className="absolute inset-0 rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </main>
  );
}
