import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  download?: string | boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-accent text-background font-semibold shadow-[0_0_32px_rgba(46,232,197,0.35)] hover:shadow-[0_0_40px_rgba(46,232,197,0.5)] hover:brightness-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
  outline:
    "border-gradient bg-transparent text-foreground hover:text-accent hover:shadow-[0_0_24px_rgba(46,232,197,0.1)]",
  ghost: "text-muted hover:text-accent",
};

export function Button({
  className,
  variant = "primary",
  href,
  external,
  download,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300",
    variants[variant],
    className,
  );

  const content = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          download={download || undefined}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
