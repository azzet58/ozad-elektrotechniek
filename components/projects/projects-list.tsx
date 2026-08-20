"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

const PROJECTS_PER_PAGE = 9;

export default function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <div data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs md:text-sm 2xl:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projecten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <FadeIn>
          <h1 className="font-heading mb-12 text-4xl md:text-5xl 2xl:mb-24 2xl:text-7xl">
            Projecten
          </h1>
        </FadeIn>
        <div className="flex flex-col gap-4 overflow-hidden lg:gap-8 2xl:gap-12">
          {visibleProjects.map((project, index) => (
            <FadeIn key={project.href}>
              <article>
                <Link href={project.href} className="group">
                  <div className="relative w-full overflow-hidden rounded-md">
                    <div className="relative aspect-[4/4] md:aspect-[16/9] lg:aspect-[21/9] 2xl:aspect-[16/9]">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-800 group-hover:scale-105"
                        priority={index === 0}
                      />
                      {project.status && (
                        <div className="absolute">
                          <Badge className="rounded-none rounded-br-md bg-blue-600 p-1 2xl:p-2">
                            {project.status}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-800 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 p-4 lg:space-y-1 2xl:space-y-2 2xl:p-8">
                      <h2 className="text-xl font-medium text-white transition-colors duration-400 group-hover:text-blue-600 md:text-2xl lg:text-3xl 2xl:text-5xl">
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
                            <span className="font-bold">
                              {project.appartments}
                            </span>{" "}
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
                              )}{" "}
                              <span className="font-semibold">
                                {stat.label}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
        <Pagination className="mt-12 md:mt-24">
          <PaginationContent className="flex w-full justify-between">
            <PaginationItem className={currentPage === 1 ? "invisible" : ""}>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={`${
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                } font-bold hover:bg-transparent hover:text-neutral-600 xl:text-base 2xl:text-lg`}
              />
            </PaginationItem>

            <div className="flex gap-2 2xl:gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className={`cursor-pointer rounded-full text-xs md:text-sm lg:text-base xl:p-5 xl:text-lg 2xl:text-xl ${
                        currentPage === page
                          ? "bg-blue-600 font-bold text-white hover:bg-blue-700 hover:text-white"
                          : ""
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
            </div>

            <PaginationItem
              className={currentPage === totalPages ? "invisible" : ""}
            >
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className={`${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                } font-bold hover:bg-transparent hover:text-neutral-600 xl:text-base 2xl:text-lg`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
