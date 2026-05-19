import type { NavLink, Profile } from "@/types";

export const GITHUB_USERNAME = "IT-JuanDoo";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const siteConfig = {
  name: "CXD.DEV",
  handle: "Cao Xuan Du",
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
  name: "Cao Xuan Du",
  title: "Developer Intern",
  badge: "CXD · DEVELOPER",
  tagline: "Information Technology",
  typingPhrases: [
    "A student at University of Transport Ho Chi Minh City (UTH)",
    "Building APIs with C#, TypeScript & PHP.",
  ],
  focusLine: "Information Technology",
  email: "ducx5494@ut.edu.vn",
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    {
      label: "Email",
      href: "mailto:ducx5494@ut.edu.vn",
      icon: "email",
    },
  ],
};
