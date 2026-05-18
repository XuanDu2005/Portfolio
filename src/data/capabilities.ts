import type { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    id: "api",
    title: "RESTful APIs",
    description:
      "Thiết kế và triển khai API rõ ràng, có versioning, validation và tài liệu OpenAPI/Swagger.",
    icon: "api",
    tags: ["ASP.NET Core", "Express", "Swagger"],
  },
  {
    id: "database",
    title: "Databases",
    description:
      "Mô hình hóa dữ liệu, tối ưu truy vấn, migration và quan hệ giữa SQL và NoSQL.",
    icon: "database",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "auth",
    title: "Authentication",
    description:
      "JWT, refresh token, role-based access và các pattern bảo mật phổ biến cho backend.",
    icon: "auth",
    tags: ["JWT", "OAuth2", "RBAC"],
  },
  {
    id: "architecture",
    title: "System Design",
    description:
      "Layered architecture, dependency injection, caching và chuẩn bị cho mở rộng theo module.",
    icon: "architecture",
    tags: ["Clean Architecture", "DDD", "Redis"],
  },
  {
    id: "devops",
    title: "DevOps Basics",
    description:
      "Docker, CI/CD cơ bản và triển khai lên cloud để đưa sản phẩm lên production.",
    icon: "devops",
    tags: ["Docker", "GitHub Actions", "Vercel"],
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Unit test, integration test và đảm bảo chất lượng code trước khi merge.",
    icon: "testing",
    tags: ["xUnit", "Jest", "Postman"],
  },
];
