"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Counter({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });

    return () => controls.stop();
  }, [inView, from, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("nl-NL")}
      {suffix}
    </span>
  );
}
