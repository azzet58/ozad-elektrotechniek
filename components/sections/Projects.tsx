"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  });

  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["0%", "-40%"] : ["0%", "0%"],
  );

  const goTo = (index: number) => {
    if (index < 0 || index >= projects.length) return;
    setCurrent(index);
    if (carouselRef.current) {
      const cards = (carouselRef.current as HTMLElement).querySelectorAll(
        "article",
      );
      cards[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section className="bg-neutral-50 py-12 lg:py-24 xl:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="mb-8 items-center justify-between space-y-4 md:flex lg:mb-12">
          <h2 className="text-2xl font-bold md:text-3xl xl:text-5xl">
            Projecten
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-xs font-bold hover:text-neutral-600 md:text-sm lg:gap-2 xl:text-lg"
          >
            Bekijk alle projecten <ArrowRight className="size-3 md:size-4" />
          </Link>
        </div>
      </div>
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex flex-col gap-4 pl-4 will-change-transform md:pl-8 lg:flex-row lg:pl-64"
        >
          {projects
            .slice(0, mounted && isDesktop ? projects.length : 3)
            .map((project) => (
              <article key={project.href}>
                <Link href={project.href} className="group">
                  <div className="relative w-[290px] overflow-hidden rounded-md sm:w-[395px] md:w-[705px] lg:w-[600px] xl:w-[1024px]">
                    <div className="relative aspect-[4/4] md:aspect-[16/10] lg:aspect-[4/4]">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-800 group-hover:scale-105"
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
                    <div className="absolute bottom-0 p-4 lg:space-y-1 xl:space-y-2 xl:p-8">
                      <h2 className="text-lg font-medium text-white transition-colors duration-400 group-hover:text-blue-600 md:text-2xl lg:text-3xl xl:text-5xl">
                        {project.title}
                      </h2>
                      <ul className="flex items-center gap-2 md:gap-3 xl:items-end xl:gap-4">
                        {project.location && (
                          <li className="text-neutral-400 md:text-lg lg:text-2xl xl:text-4xl">
                            {project.location}
                          </li>
                        )}
                        {project.homes && (
                          <li className="text-sm text-neutral-400 md:text-base lg:text-xl xl:text-3xl">
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
        </motion.div>
      </div>
    </section>
  );
}
