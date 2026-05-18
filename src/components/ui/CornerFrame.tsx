import { cn } from "@/lib/utils";

interface CornerFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerFrame({ children, className }: CornerFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-accent/50" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t border-r border-accent-2/40" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-accent-2/40" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-r border-b border-accent-warm/30" />
      {children}
    </div>
  );
}
