"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";

const navLinks = [
  {
    title: "Vacatures",
    href: "/vacatures",
    hasDropdown: false,
  },
  { title: "Projecten", href: "/projecten" },
  { title: "Over ons", href: "/over-ons" },
  { title: "Neem contact op", href: "/contact", isButton: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const checkNavTheme = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const navRect = navbar.getBoundingClientRect();
      const checkPoint = navRect.top + navRect.height / 2;

      const sections = document.querySelectorAll("[data-nav-theme]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
          const theme = section.getAttribute("data-nav-theme");
          setIsDark(theme === "dark");
        }
      });
    };

    checkNavTheme();
    window.addEventListener("scroll", checkNavTheme);
    window.addEventListener("resize", checkNavTheme);

    return () => {
      window.removeEventListener("scroll", checkNavTheme);
      window.removeEventListener("resize", checkNavTheme);
    };
  }, [pathname]);

  return (
    <>
      <nav className="absolute top-0 z-50 h-24 w-full">
        <div className="mx-auto h-full max-w-[1700px] px-4 md:px-8">
          <div className="flex h-full items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logos/ozad-elektrotechniek-logo-black.webp"
                width={150}
                height={150}
                alt="Özad Elektrotechniek Logo"
                priority
                className={
                  isDark || mobileOpen
                    ? "w-26 brightness-0 invert 2xl:w-36"
                    : "w-26 2xl:w-36"
                }
              />
            </Link>
            <ul className="flex hidden items-center gap-6 font-medium md:flex 2xl:gap-8 2xl:text-xl">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <li key={item.href}>
                    {item.isButton ? (
                      <Button
                        asChild
                        className="h-full cursor-pointer rounded-full bg-blue-600 text-xs font-bold hover:bg-blue-700 md:text-sm 2xl:text-lg"
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 transition-colors ${
                          isActive
                            ? "text-blue-600"
                            : isDark
                              ? "text-white hover:text-blue-600"
                              : "text-black hover:text-blue-600"
                        }`}
                      >
                        {item.title}
                        {item.hasDropdown && <ChevronDown />}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              className={
                isDark || mobileOpen
                  ? "text-white md:hidden"
                  : "text-black md:hidden"
              }
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {mobileOpen && (
        <div className="font-heading fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-black px-6 md:hidden">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <div key={item.href}>
                {item.isButton ? (
                  <FadeIn>
                    <Button
                      asChild
                      className="mt-6 w-full rounded-full bg-blue-600 font-sans font-bold hover:bg-black"
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-3xl font-medium text-white transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-black hover:text-blue-600"
                      }`}
                    >
                      {item.title}
                      {item.hasDropdown && <ChevronDown />}
                    </Link>
                  </FadeIn>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
