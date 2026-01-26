"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    title: "Diensten",
    href: "/services",
    hasDropdown: false,
  },
  { title: "Projecten", href: "/projects" },
  { title: "Over ons", href: "/about" },
  { title: "Neem contact op", href: "/contact", isButton: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

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
    <nav className="absolute top-0 z-20 h-24 w-full">
      <div className="mx-auto h-full max-w-[1700px] px-8">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logos/ozad-elektrotechniek-logo-black.png"
              width={150}
              height={150}
              alt="Özad Elektrotechniek Logo"
              priority
              className={isDark ? "brightness-0 invert" : ""}
            />
          </Link>
          <ul className="flex items-center gap-8 text-xl font-medium">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== "/");
              return (
                <li key={item.href}>
                  {item.isButton ? (
                    <Button
                      asChild
                      className="h-full rounded-full bg-blue-600 text-lg font-bold hover:bg-black"
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
        </div>
      </div>
    </nav>
  );
}
