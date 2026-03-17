import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./project-client";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project: projectSlug } = await params;
  const project = projects.find((p) => p.href === `/projecten/${projectSlug}`);

  if (!project) return {};

  return {
    title: `${project.title} | Özad Elektrotechniek`,
    description:
      project.description ??
      `Bekijk het project ${project.title} van Özad Elektrotechniek B.V.`,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectSlug } = await params;
  const project = projects.find((p) => p.href === `/projecten/${projectSlug}`);
  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
