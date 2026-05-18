import { siteConfig } from "@/data/profile";
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-lg border-gradient opacity-80 transition-opacity group-hover:opacity-100" />
        <span className="font-display text-sm font-bold tracking-tighter text-gradient-brand">
          {siteConfig.monogram}
        </span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-foreground">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 font-mono text-[9px] tracking-widest text-muted uppercase">
            {siteConfig.handle}
          </span>
        </span>
      )}
    </Link>
  );
}
