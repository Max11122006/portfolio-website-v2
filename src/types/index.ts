export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  email: string;
  socials: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  tech: string[];
  images?: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  tech: string[];
  category: "university" | "hackathon" | "personal";
  url: string;
  demo?: string;
  stars?: number;
}
