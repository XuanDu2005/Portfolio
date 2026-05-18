import type { NavLink, Profile } from "@/types";

export const GITHUB_USERNAME = "IT-JuanDoo";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const siteConfig = {
  name: "CXD.DEV",
  handle: "cao xuân dự",
  monogram: "CXD",
  description:
    "Portfolio cá nhân của Cao Xuân Dự — Backend, APIs, databases & scalable architecture",
  url: "https://portfolio.vercel.app",
};

export const navLinks: NavLink[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "Cao Xuân Dự",
  nameHighlight: "Dự",
  title: "Backend Developer Intern",
  badge: "CXD · BACKEND ENGINEER",
  tagline:
    "Information Technology · Focused on APIs, databases & scalable architecture",
  typingPhrases: [
    "Passionate about clean code & system design.",
    "Building APIs with C#, TypeScript & PHP.",
    "Healthcare tech — AURA Retinal Screening System.",
    "Crafting experiences only on cxd.dev.",
  ],
  focusLine:
    "Information Technology · APIs · Databases · Scalable Architecture",
  email: "IT-JuanDoo@users.noreply.github.com",
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    {
      label: "Email",
      href: "mailto:IT-JuanDoo@users.noreply.github.com",
      icon: "email",
    },
  ],
};
