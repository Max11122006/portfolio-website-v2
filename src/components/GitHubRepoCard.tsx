"use client";

import { motion } from "motion/react";
import { fadeUp, hoverLift } from "@/lib/animations";
import TechTag from "./TechTag";
import type { GitHubRepo } from "@/types";

interface GitHubRepoCardProps {
  repo: GitHubRepo;
}

export default function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <motion.article
        className="flex h-full flex-col rounded-xl bg-card p-5 shadow-sm"
        initial="rest"
        whileHover="hover"
        variants={hoverLift}
      >
        <span className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
          {repo.category}
        </span>
        <h3 className="font-semibold">{repo.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{repo.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {repo.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            View on GitHub
          </a>
          {repo.demo && (
            <a
              href={repo.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
