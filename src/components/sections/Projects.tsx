"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="02"
          label="projects"
          title="Featured Projects"
          description="Backend projects I have built to practice and demonstrate my skills."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 font-mono text-xs tracking-widest text-muted uppercase">
              Other Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`glass-panel glass-panel-hover flex flex-col rounded-xl p-6 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      <div className="mb-3 font-mono text-[10px] tracking-widest text-accent uppercase">
        {featured ? "★ featured" : "repo"}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/8 px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        {project.github && (
          <Button
            href={project.github}
            variant="outline"
            external
            className="px-3 py-1.5 text-xs"
          >
            <Github size={14} />
            Code
          </Button>
        )}
        {project.demo && (
          <Button
            href={project.demo}
            variant="ghost"
            external
            className="px-3 py-1.5 text-xs"
          >
            <ExternalLink size={14} />
            Demo
          </Button>
        )}
      </div>
    </motion.article>
  );
}
