import type { NavItem, SiteCopy } from "../types/content";

/** Liens de la navbar, dans l'ordre d'affichage. `id` = ancre de la section. */
export const navItems: NavItem[] = [
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "experiences", label: "Expériences" },
  { id: "references", label: "Références" },
  { id: "formation", label: "Formation" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/** Textes d'interface : titres de sections, libellés de boutons, textes d'accessibilité. */
export const siteCopy: SiteCopy = {
  skipLink: "Aller au contenu",
  hero: {
    contact: "Me contacter",
    downloadCv: "Télécharger mon CV",
    basedIn: "Basé à",
  },
  sections: {
    about: { eyebrow: "À propos", title: "Du code .NET aux indicateurs métier" },
    skills: {
      eyebrow: "Compétences",
      title: "Stack technique",
      description: "Les technologies que j'utilise au quotidien et en projet.",
    },
    experience: { eyebrow: "Expériences", title: "Parcours professionnel" },
    trustedBy: {
      eyebrow: "Références",
      title: "Ils m'ont fait confiance",
      description: "Entreprises où j'ai travaillé et pour lesquelles j'ai développé des outils.",
    },
    education: { eyebrow: "Formation", title: "Diplômes et projets marquants" },
    certifications: { eyebrow: "Certifications", title: "Formation continue" },
    contact: { eyebrow: "Contact", title: "Travaillons ensemble" },
  },
  about: { languages: "Langues", qualities: "Qualités" },
  trustedBy: { employer: "Employeur", client: "Client" },
  theme: { toDark: "Activer le thème sombre", toLight: "Activer le thème clair" },
  menu: { open: "Ouvrir le menu", close: "Fermer le menu" },
  footer: { rights: "Tous droits réservés." },
};
