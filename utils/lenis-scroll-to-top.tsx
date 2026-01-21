"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function LenisScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(0, {
          immediate: true,
          duration: 0,
          force: true,
        });
      }
      window.scrollTo(0, 0);
    });
  }, [pathname, lenis]);

  return null;
}
