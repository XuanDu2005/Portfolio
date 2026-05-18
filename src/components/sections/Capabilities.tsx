"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import {
  Boxes,
  Cloud,
  Database,
  FlaskConical,
  Lock,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  api: Network,
  database: Database,
  auth: Lock,
  architecture: Boxes,
  devops: Cloud,
  testing: FlaskConical,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="01"
          label="capabilities"
          title="Kỹ năng Backend"
          description="Các lĩnh vực tôi tập trung phát triển khi xây dựng hệ thống phía server."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => {
            const Icon = iconMap[cap.icon as keyof typeof iconMap] ?? Network;
            return (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel glass-panel-hover group rounded-xl p-6"
              >
                <div className="mb-4 inline-flex rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cap.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-accent/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
