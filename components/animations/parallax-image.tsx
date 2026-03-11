"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export function ParallaxImage({
  src,
  alt,
  className,
  offset = ["start end", "end start"],
  from = "-20%",
  to = "-5%",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  offset?: [
    "start end" | "start start" | "end start" | "end end",
    "start end" | "start start" | "end start" | "end end",
  ];
  from?: string;
  to?: string;
  priority?: boolean;
}) {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    mounted && isDesktop ? [from, to] : ["0%", "0%"],
  );

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className={`absolute inset-0 will-change-transform ${isDesktop ? "h-[140%]" : "h-full"}`}
      >
        <Image
          src={src}
          fill
          alt={alt}
          className="object-cover"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
