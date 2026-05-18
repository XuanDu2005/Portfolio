import type { Project } from "@/types";
import { GITHUB_URL } from "./profile";

const repo = (name: string) => `${GITHUB_URL}/${name}`;

export const projects: Project[] = [
  {
    id: "aura-retinal",
    title: "AURA — Retinal Screening System",
    description:
      "Hệ thống sàng lọc võng mạc (Retinal Screening): full-stack với backend C#, frontend TypeScript và tích hợp Python/Docker cho pipeline xử lý ảnh y khoa.",
    tags: ["TypeScript", "C#", "Python", "Docker"],
    github: repo("AURA-Retinal-Screening-System"),
    featured: true,
  },
  {
    id: "bookings-tickets",
    title: "BookingsTickets",
    description:
      "Website đặt vé xem phim — quản lý suất chiếu, ghế ngồi và luồng booking cho người dùng, xây dựng chủ yếu với PHP và JavaScript.",
    tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    github: repo("BookingsTickets"),
    featured: true,
  },
  {
    id: "cnpm-5",
    title: "CNPM-5",
    description:
      "Dự án môn Công nghệ Phần mềm (nhóm 5): ứng dụng web Django (Python), quản lý podcast — chạy local qua Docker.",
    tags: ["Python", "Django", "Docker", "HTML", "CSS"],
    github: repo("CNPM-5"),
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Website CV/portfolio cá nhân — Next.js, TypeScript, Tailwind CSS và Framer Motion; dữ liệu tách file để cập nhật dễ dàng.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: repo("Portfolio"),
    featured: false,
  },
];
