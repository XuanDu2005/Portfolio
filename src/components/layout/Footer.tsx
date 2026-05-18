import { Logo } from "@/components/ui/Logo";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <Logo compact />
          <div className="text-center md:text-left">
            <p className="text-sm text-muted">
              © {year}{" "}
              <span className="text-foreground">{profile.name}</span>
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-wider text-muted/70">
              Designed & built by CXD · Next.js
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover rounded-xl p-2.5 text-muted"
                aria-label={social.label}
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
