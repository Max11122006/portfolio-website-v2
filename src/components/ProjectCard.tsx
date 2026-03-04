"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp, hoverLift } from "@/lib/animations";
import TechTag from "./TechTag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/projects#${project.id}`}>
        <motion.article
          className="overflow-hidden rounded-xl bg-card shadow-sm"
          initial="rest"
          whileHover="hover"
          variants={hoverLift}
        >
          <div className="aspect-[16/10] bg-gradient-to-br from-border to-background" />
          <div className="p-5">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            <p className="mt-3 line-clamp-2 text-sm text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <TechTag key={t} label={t} />
              ))}
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
