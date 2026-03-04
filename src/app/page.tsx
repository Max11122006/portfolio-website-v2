import Link from "next/link";
import { siteMetadata } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";
import BreadboardBackground from "@/components/BreadboardBackground";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const philosophyPillars = [
  {
    title: "Systems Thinking",
    description:
      "Every component exists within a larger system. Understanding interfaces, dependencies, and failure modes is how you build things that actually work.",
  },
  {
    title: "Precision",
    description:
      "Whether it's a tolerance on a machined part or a calibration parameter in firmware, the details matter. Close enough isn't engineering.",
  },
  {
    title: "Operational Decision-Making",
    description:
      "Engineering is applied under constraints. Making sound calls with incomplete information, under time pressure, is what separates design from delivery.",
  },
  {
    title: "Ownership",
    description:
      "From first sketch to final test, owning the full lifecycle of a build teaches more than any single specialisation ever could.",
  },
  {
    title: "Real Responsibility",
    description:
      "Working on systems where failure has consequences — vehicles, structures, flight paths — demands a level of rigour that toy projects never teach.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
        <AnimatedSection>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {siteMetadata.title}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {siteMetadata.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {siteMetadata.description}
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View Projects
            </Link>
            <Link
              href="/github"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
            >
              GitHub
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20">
        <BreadboardBackground />
        <div className="relative mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionHeading
              title="Featured Projects"
              subtitle="Hands-on builds spanning mechanical, electrical, and software engineering."
            />
          </AnimatedSection>
          <AnimatedSection
            staggered
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <AnimatedSection>
          <SectionHeading
            title="Engineering Philosophy"
            subtitle="The principles behind how I approach every build."
          />
        </AnimatedSection>
        <AnimatedSection
          staggered
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {philosophyPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </section>
    </>
  );
}
