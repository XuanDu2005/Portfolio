"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingTextProps {
  phrases: string[];
}

export function TypingText({ phrases }: TypingTextProps) {
  const text = useTypingEffect({ phrases });

  return (
    <p className="mt-5 font-mono text-sm text-muted md:text-base">
      <span className="mr-2 text-accent">❯</span>
      <span className="text-foreground/90">{text}</span>
      <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-accent align-middle" />
    </p>
  );
}
