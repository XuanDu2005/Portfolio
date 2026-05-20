import type { ApproachStep } from "@/types";

export const approachSteps: ApproachStep[] = [
  {
    step: 1,
    title: "Understand Requirements",
    description:
      "Clarify business logic, edge cases, and technical constraints before writing code.",
  },
  {
    step: 2,
    title: "Design First",
    description:
      "Design database schema, API contracts, and layer architecture to avoid costly refactors later.",
  },
  {
    step: 3,
    title: "Build Incrementally",
    description:
      "Implement features incrementally, test early, and integrate continuously.",
  },
  {
    step: 4,
    title: "Review & Optimize",
    description:
      "Code review, profiling queries, and optimization based on actual metrics .",
  },
];
