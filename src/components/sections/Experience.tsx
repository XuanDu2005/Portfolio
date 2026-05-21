"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="04"
          label="experience"
          title="Experience & Education"
          description="My journey in learning and working in the field of backend development."
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted before:text-accent before:content-['>']"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-accent/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
