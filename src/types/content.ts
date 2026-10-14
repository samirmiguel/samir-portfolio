export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github";
};

export type KeyFigure = {
  value: string;
  label: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Profile = {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  photo: string;
  cv: string;
  /** QR code pointant vers le site (optionnel) */
  qrCode?: string;
  socials: SocialLink[];
  about: string[];
  keyFigures: KeyFigure[];
  languages: Language[];
  qualities: string[];
  contactMessage: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Client = {
  /** Nom affiché, utilisé aussi comme clé par Experience.company */
  name: string;
  /** Chemin public du logo, ex. "/logos/generali.png" */
  logo: string;
  /** Site web de l'entreprise */
  url?: string;
  /** "employer" : employeur ; "client" : entreprise cliente */
  relation: "employer" | "client";
};

export type Experience = {
  role: string;
  contract: string;
  period: string;
  /** Correspond au `name` d'une entrée de clients.ts (logo de la timeline) */
  company: string;
  location: string;
  department?: string;
  highlights: string[];
  technologies: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Certification = {
  issuer: string;
  name: string;
  date: string;
  details?: string;
};

export type NavItem = {
  id: string;
  label: string;
};

/** Textes d'interface (titres de sections, libellés de boutons) */
export type SiteCopy = {
  skipLink: string;
  hero: { contact: string; downloadCv: string; basedIn: string; qrCaption: string; qrAlt: string };
  sections: Record<
    "about" | "skills" | "experience" | "trustedBy" | "education" | "certifications" | "contact",
    { eyebrow: string; title: string; description?: string }
  >;
  about: { languages: string; qualities: string };
  trustedBy: { employer: string; client: string };
  theme: { toDark: string; toLight: string };
  menu: { open: string; close: string };
  footer: { rights: string };
};
