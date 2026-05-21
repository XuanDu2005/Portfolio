import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "intern-2023",
    role: "Developer Intern",
    company: "UTH",
    period: "2025 — nay",
    description: [
      "Developed and maintained REST APIs for internal products.",
      "Wrote unit tests, participated in code reviews, and documented APIs",
      "Worked with PostgreSQL, Git, and the Agile/Scrum development process.",
    ],
    technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Git"],
  },
  {
    id: "personal-projects",
    role: "Personal Projects",
    company: "Self-directed",
    period: "2024 — 2025",
    description: [
      "AURA Retinal Screening System — a full-stack healthcare project using C#, TypeScript, and Python.",
      "BookingsTickets — a movie ticket booking system built with PHP and JavaScript.",
      "CNPM-5 — a software engineering project, deployed on GitHub Pages.",
    ],
    technologies: ["C#", "TypeScript", "PHP", "Python", "Docker"],
  },
  {
    id: "education",
    role: "Information Technology",
    company: "UTH",
    period: "2022 — 2026",
    description: [
      "Specializing in Software Engineering, focusing on backend development.",
      "Key courses: Data Structures, Database Systems, Object-Oriented Programming.",
    ],
    technologies: ["Java", "SQL", "Algorithms"],
  },
];
