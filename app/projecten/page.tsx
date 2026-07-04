import ProjectsList from "@/components/projects/projects-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten | Özad Elektrotechniek",
  description:
    "Bekijk de uitgevoerde projecten van Özad Elektrotechniek B.V. in nieuwbouw, utiliteitsbouw en renovatie door heel Nederland.",
};

export default function Projects() {
  return <ProjectsList />;
}
