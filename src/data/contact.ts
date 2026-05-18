import type { ContactField } from "@/types";
import { profile } from "./profile";

export const contactFields: ContactField[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Location",
    value: "Việt Nam",
  },
  {
    label: "Availability",
    value: "Open to internships & junior roles",
  },
];
