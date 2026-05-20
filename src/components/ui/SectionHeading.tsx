"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mb-12 max-w-2xl", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex items-center gap-4">
        {index && (
          <span className="font-display text-3xl font-bold text-white md:text-4xl">
            {index}
          </span>
        )}
        <div className="flex flex-1 flex-col gap-2">
          <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
            {label}
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-accent via-accent-2 to-transparent" />
        </div>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
