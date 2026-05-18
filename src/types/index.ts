export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface Profile {
  name: string;
  nameHighlight?: string;
  title: string;
  tagline: string;
  badge: string;
  typingPhrases: string[];
  focusLine: string;
  email: string;
  socials: SocialLink[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ContactField {
  label: string;
  value: string;
  href?: string;
}
