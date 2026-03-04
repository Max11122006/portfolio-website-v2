"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  staggered?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  staggered = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <motion.div
      ref={ref}
      variants={staggered ? stagger : fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {staggered ? children : children}
    </motion.div>
  );
}
