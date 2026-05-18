import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "intern-2025",
    role: "Backend Developer Intern",
    company: "Công ty Công nghệ (Cập nhật)",
    period: "2025 — Hiện tại",
    description: [
      "Phát triển và bảo trì REST API cho sản phẩm nội bộ.",
      "Viết unit test, tham gia code review và tài liệu hóa API.",
      "Làm việc với PostgreSQL, Git và quy trình Agile/Scrum.",
    ],
    technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Git"],
  },
  {
    id: "personal-projects",
    role: "Personal Projects",
    company: "Self-directed",
    period: "2024 — 2025",
    description: [
      "AURA Retinal Screening System — full-stack healthcare với C#, TypeScript, Python.",
      "BookingsTickets — hệ thống đặt vé xem phim (PHP/JavaScript).",
      "CNPM-5 — dự án môn Công nghệ Phần mềm, deploy GitHub Pages.",
    ],
    technologies: ["C#", "TypeScript", "PHP", "Python", "Docker"],
  },
  {
    id: "education",
    role: "Information Technology",
    company: "Đại học (Cập nhật)",
    period: "2022 — 2026",
    description: [
      "Chuyên ngành Công nghệ Thông tin, tập trung phát triển phần mềm.",
      "Các môn: Cấu trúc dữ liệu, Cơ sở dữ liệu, Lập trình hướng đối tượng.",
    ],
    technologies: ["Java", "SQL", "Algorithms"],
  },
];
