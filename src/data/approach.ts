import type { ApproachStep } from "@/types";

export const approachSteps: ApproachStep[] = [
  {
    step: 1,
    title: "Understand Requirements",
    description:
      "Làm rõ business logic, edge cases và ràng buộc kỹ thuật trước khi viết code.",
  },
  {
    step: 2,
    title: "Design First",
    description:
      "Vẽ schema DB, API contract và kiến trúc layer để tránh refactor tốn kém sau này.",
  },
  {
    step: 3,
    title: "Build Incrementally",
    description:
      "Triển khai theo từng feature nhỏ, test sớm và tích hợp liên tục.",
  },
  {
    step: 4,
    title: "Review & Optimize",
    description:
      "Code review, profiling truy vấn và tối ưu khi có metrics thực tế.",
  },
];
