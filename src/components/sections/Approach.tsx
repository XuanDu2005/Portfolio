"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachSteps } from "@/data/approach";
import { motion } from "framer-motion";

export function Approach() {
  return (
    <section id="approach" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-warm/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="03"
          label="approach"
          title="Cách tiếp cận"
          description="Quy trình làm việc khi nhận task hoặc xây dựng feature mới."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block" />

          <div className="space-y-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 md:pl-12"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent md:absolute md:left-0">
                  {String(step.step).padStart(2, "0")}
                </div>
                <div className="glass-panel flex-1 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
