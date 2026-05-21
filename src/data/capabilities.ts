import type { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Design and implement clear APIs with versioning, validation, and OpenAPI/Swagger documentation.",
    icon: "frontend",
    tags: ["Html", "Css", "JavaScript", "TypeScript"],
  },
  {
    id: "database",
    title: "Databases",
    description:
      "Data modeling, query optimization, migration, and relationships between SQL and NoSQL.",
    icon: "database",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Design and maintain high-performance backend services with scalability and security.",
    icon: "backend",
    tags: ["C#", "Python", "PHP"],
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Unit test, integration test and ensure code quality before merging.",
    icon: "testing",
    tags: ["Postman"],
  },
];
