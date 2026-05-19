import type { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Thiết kế và triển khai API rõ ràng, có versioning, validation và tài liệu OpenAPI/Swagger.",
    icon: "frontend",
    tags: ["Html", "Css", "JavaScript", "TypeScript"],
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
    id: "backend",
    title: "Backend Development",
    description:
      "Xây dựng và duy trì các dịch vụ backend hiệu suất cao, có khả năng mở rộng và bảo mật.",
    icon: "backend",
    tags: ["C#", "Python", "PHP"],
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Unit test, integration test và đảm bảo chất lượng code trước khi merge.",
    icon: "testing",
    tags: ["Postman"],
  },
];
