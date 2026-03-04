import type { Metadata } from "next";
import { reposByCategory } from "@/data/github-repos";
import AnimatedSection from "@/components/AnimatedSection";
import CategorySection from "@/components/CategorySection";
import GitHubRepoCard from "@/components/GitHubRepoCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "GitHub",
};

const categories = [
  {
    key: "university" as const,
    title: "University Projects",
    subtitle: "Academic work and course-related builds.",
  },
  {
    key: "hackathon" as const,
    title: "Hackathon Projects",
    subtitle: "Built under time pressure at hackathon events.",
  },
  {
    key: "personal" as const,
    title: "Personal Projects",
    subtitle: "Self-directed explorations and tools.",
  },
];

export default function GitHubPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-24">
      <AnimatedSection>
        <SectionHeading
          title="GitHub"
          subtitle="Open-source work and public repositories, organised by context."
        />
      </AnimatedSection>

      {categories.map(
        (cat) =>
          reposByCategory[cat.key].length > 0 && (
            <CategorySection
              key={cat.key}
              title={cat.title}
              subtitle={cat.subtitle}
            >
              <AnimatedSection
                staggered
                className="grid gap-6 sm:grid-cols-2"
              >
                {reposByCategory[cat.key].map((repo) => (
                  <GitHubRepoCard key={repo.name} repo={repo} />
                ))}
              </AnimatedSection>
            </CategorySection>
          )
      )}

      {/* Empty state for categories with no repos yet */}
      {categories.every((cat) => reposByCategory[cat.key].length === 0) && (
        <p className="py-20 text-center text-muted">
          No repositories to show yet. Check back soon.
        </p>
      )}
    </div>
  );
}
