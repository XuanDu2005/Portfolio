"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CornerFrame } from "@/components/ui/CornerFrame";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { GridBackground } from "@/components/ui/GridBackground";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { TypingText } from "@/components/ui/TypingText";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

function splitName(fullName: string, highlight?: string) {
  if (!highlight || !fullName.endsWith(highlight)) {
    return { prefix: fullName, suffix: "" };
  }
  return {
    prefix: fullName.slice(0, -highlight.length).trimEnd(),
    suffix: highlight,
  };
}

export function Hero() {
  // Hiển thị tên trên một dòng

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <GridBackground />
      <FloatingIcons />

      <motion.div
        className="pointer-events-none absolute top-28 left-1/2 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>{profile.badge}</Badge>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            <span className="text-gradient-hero">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg text-accent md:text-xl">{profile.title}</p>

          <TypingText phrases={profile.typingPhrases} />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              <Mail size={16} />
              Contact Me
            </Button>
          </div>

          <CornerFrame className="mt-10 inline-block px-8 py-6">
            <p className="font-mono text-base text-muted md:text-lg">
              <span className="text-accent">~</span> {profile.focusLine}
            </p>
          </CornerFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <InteractiveCard />
        </motion.div>
      </div>
    </section>
  );
}
