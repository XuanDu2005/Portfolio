"use client";

import { motion } from "framer-motion";

const items = [
  { label: "AURA", x: "6%", y: "15%", delay: 0 },
  { label: "CXD", x: "88%", y: "22%", delay: 0.4 },
  { label: "C#", x: "82%", y: "68%", delay: 0.9 },
  { label: "API", x: "10%", y: "72%", delay: 1.2 },
  { label: "PHP", x: "93%", y: "48%", delay: 0.6 },
  { label: "{ }", x: "14%", y: "42%", delay: 1.5 },
];

export function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item) => (
        <motion.span
          key={item.label}
          className="absolute font-mono text-[10px] tracking-widest text-accent/20 md:text-xs"
          style={{ left: item.x, top: item.y }}
          animate={{ opacity: [0.08, 0.22, 0.08], y: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.label}
        </motion.span>
      ))}
    </div>
  );
}
