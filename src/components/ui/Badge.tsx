import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-gradient bg-card/80 px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] text-muted uppercase backdrop-blur-sm",
        className,
      )}
    >
      <span className="glow-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-glow" />
      {children}
    </span>
  );
}
