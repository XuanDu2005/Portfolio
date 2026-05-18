"use client";

import { siteConfig } from "@/data/profile";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function InteractiveCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    setActive(true);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setActive(false);
  }

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className={cn(
          "glass-panel border-gradient relative h-72 w-full max-w-md cursor-pointer overflow-hidden rounded-2xl p-8 md:h-80",
          active && "shadow-[0_0_80px_rgba(46,232,197,0.12)]",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-accent-2/[0.04]" />
        <div className="absolute top-3 right-3 font-mono text-[9px] text-muted/60">
          v1.0 · {siteConfig.name}
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="relative">
            <motion.div
              className="absolute inset-[-28px] rounded-full border border-dashed border-accent/20 animate-orbit"
              aria-hidden
            />
            <motion.div
              className="absolute inset-[-14px] rounded-full border border-accent-2/15"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              aria-hidden
            />
            <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-accent/15 to-accent-2/10 shadow-[0_0_60px_rgba(46,232,197,0.2)]">
              <span className="font-display text-4xl font-bold tracking-tighter text-gradient-brand">
                {siteConfig.monogram}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 left-4 rounded-lg border border-white/5 bg-background/40 p-3 font-mono text-[10px] text-white/35 backdrop-blur-sm">
          <span className="text-accent">const</span> dev = {"{"}
          <br />
          &nbsp;&nbsp;name: <span className="text-accent-warm/90">&quot;Cao Xuân Dự&quot;</span>,
          <br />
          &nbsp;&nbsp;alias: <span className="text-accent-2/90">&quot;{siteConfig.monogram}&quot;</span>,
          <br />
          &nbsp;&nbsp;stack: <span className="text-accent/90">&quot;backend&quot;</span>
          <br />
          {"}"};
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-2 hidden -translate-y-1/2 md:block lg:-right-14"
        animate={{ scale: active ? 1.08 : [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: active ? 0 : Infinity }}
      >
        <div className="relative flex flex-col items-center">
          <div className="glow-dot h-3 w-3 rounded-full bg-accent" />
          <motion.div
            className="absolute inset-0 rounded-full border border-accent/50"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="mt-3 max-w-[90px] text-center font-mono text-[8px] leading-tight tracking-[0.15em] text-accent/70 uppercase">
            Di chuột để xoay
          </p>
        </div>
      </motion.div>
    </div>
  );
}
