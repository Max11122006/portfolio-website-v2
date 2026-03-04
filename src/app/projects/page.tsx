import type { Metadata } from "next";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";
import BreadboardBackground from "@/components/BreadboardBackground";
import ImageGallery from "@/components/ImageGallery";
import SectionHeading from "@/components/SectionHeading";
import TechTag from "@/components/TechTag";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

const detailedProjects = projects.filter(
  (p) => p.id === "car-project" || p.id === "3d-printer"
);
const otherProjects = projects.filter(
  (p) => p.id !== "car-project" && p.id !== "3d-printer"
);

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-24">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="From full vehicle builds to embedded systems — a look at what I've built and what I've learned."
          />
        </AnimatedSection>
      </section>

      {/* Detailed Project Sections */}
      {detailedProjects.map((project, i) => (
        <section
          key={project.id}
          id={project.id}
          className="relative scroll-mt-20 py-16"
        >
          {i % 2 === 0 && <BreadboardBackground />}
          <div className="relative mx-auto max-w-5xl px-6">
            <AnimatedSection>
              <div className="grid gap-10 lg:grid-cols-2">
                <ImageGallery
                  images={project.images ?? []}
                  alt={project.title}
                />
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-muted">{project.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.highlights && (
                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-accent hover:underline"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Other Builds */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <AnimatedSection>
          <SectionHeading
            title="Other Builds"
            subtitle="Smaller projects and explorations."
          />
        </AnimatedSection>
        <AnimatedSection
          staggered
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatedSection>
      </section>
    </>
  );
}
