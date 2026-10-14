import type { Profile } from "../types/content";

export const profile: Profile = {
  name: "Samir Miguel",
  initials: "SM",
  title: "Développeur C# / .NET & Data Analyst Power BI | Data Integration Apache NiFi",
  tagline:
    "Je conçois des applications ASP.NET Core, j'automatise la collecte de données multi-sources et je transforme les données opérationnelles en indicateurs de pilotage.",
  location: "Paris",
  email: "samirmiguel31@gmail.com",
  photo: "/images/profile.jpg",
  cv: "/cv/CV_Samir_Miguel.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samir-miguel-88740a173",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/samirmiguel", icon: "github" },
  ],
  about: [
    "Développeur C# / .NET avec plus de deux ans d'expérience (alternance incluse) en conception d'applications ASP.NET Core (Web API, MVC), automatisation de traitements batch et intégration multi-sources via API REST.",
    "Double compétence en analyse de données (Power BI, SQL) pour concevoir des applications orientées métier, et en intégration de données avec Apache NiFi couplé à Kafka pour le streaming et le stockage de données au format JSON.",
    "Maîtrise de C#, du framework .NET, de SQL Server et des bonnes pratiques de développement (Git, tests, documentation).",
  ],
  keyFigures: [
    { value: "2+ ans", label: "d'expérience en développement C# / .NET" },
    { value: "800+", label: "utilisateurs sur une plateforme livrée" },
    { value: "MSc", label: "Architecture des SI - Big Data & IA" },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "C1" },
    { name: "Portugais", level: "Scolaire" },
  ],
  qualities: [
    "Esprit d'analyse",
    "Excellente communication",
    "Autonomie",
    "Adaptation rapide",
    "Esprit d'équipe",
  ],
  contactMessage:
    "Un poste, une mission ou un projet autour de .NET, de la data ou de l'intégration de données ? Écrivez-moi, je vous réponds rapidement.",
};
