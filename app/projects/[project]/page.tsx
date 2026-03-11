import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./project-client";

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

  return <ProjectClient project={project} />;
}
