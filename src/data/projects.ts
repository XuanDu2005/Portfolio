import type { Project } from "@/types";
import { GITHUB_URL } from "./profile";

const repo = (name: string) => `${GITHUB_URL}/${name}`;

export const projects: Project[] = [
  {
    id: "aura-retinal",
    title: "AURA — Retinal Screening System",
    description:
      "Retinal Screening System: a full-stack project with a C# backend, TypeScript frontend, and Python/Docker integration for the medical image processing pipeline.",
    tags: ["TypeScript", "C#", "Python", "Docker"],
    github: repo("AURA-Retinal-Screening-System"),
    featured: true,
  },
  {
    id: "bookings-tickets",
    title: "BookingsTickets",
    description:
      "Movie ticket booking website — manages showtimes, seating, and user booking flows, primarily built with PHP and JavaScript.",
    tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    github: repo("BookingsTickets"),
    featured: true,
  },
  {
    id: "cnpm-5",
    title: "CNPM-5",
    description:
      "Software Engineering Project (Group 5): Django (Python) web application for podcast management — runs locally via Docker.",
    tags: ["Python", "Django", "Docker", "HTML", "CSS"],
    github: repo("CNPM-5"),
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Personal CV/portfolio website — built with Next.js, TypeScript, Tailwind CSS, and Framer Motion; data separated into files for easy updates.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: repo("Portfolio"),
    featured: false,
  },
];
