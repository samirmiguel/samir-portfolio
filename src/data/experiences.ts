import type { Experience } from "../types/content";

/**
 * Expériences professionnelles, de la plus récente à la plus ancienne.
 * Le champ `company` doit correspondre au `name` d'une entrée de clients.ts pour afficher le logo.
 */
export const experiences: Experience[] = [
  {
    role: "Développeur C# .NET & Data Analyst",
    contract: "Alternance",
    period: "Sept. 2024 - Sept. 2026",
    company: "Generali France",
    location: "Saint-Denis (93)",
    department: "DSI / Pilotage de la Qualité de Services IT",
    highlights: [
      "Conception et développement d'applications ASP.NET Core (Web API et MVC + Angular) pour le pilotage de la qualité des services IT : calcul d'impact des incidents majeurs en jours-hommes et gestion des demandes de changement (C#, SQL Server, Swagger).",
      "Développement de batchs C# .NET Core automatisant la collecte multi-sources (ServiceNow, Splunk, SharePoint) via API REST, avec fallback en scraping (Selenium), et alimentation d'une base SQL Server.",
      "Développement de pipelines ETL et de traitements batch planifiés avec chargement vers SQL Server.",
      "Création de data flows Apache NiFi pour la collecte de données de sources externes au format JSON : chaînage de processeurs pour l'ingestion, la transformation et le routage des FlowFiles.",
      "Utilisation de GitHub Copilot en mode agent dans Visual Studio avec différents modèles Claude (Anthropic) et OpenAI pour assister le développement.",
      "Rédaction de documentations techniques et fonctionnelles (Confluence) et travail en méthodologie Agile (Jira).",
      "Recueil des besoins métier, conception et maintenance de dashboards Power BI (Power Query, DAX, SQL) transformant les données opérationnelles en indicateurs stratégiques.",
      "Création de dashboards Power BI pour le suivi et le pilotage de la qualité des données dans les entités Finance et Investissement & Trésorerie.",
    ],
    technologies: [
      "C#",
      ".NET Core",
      "ASP.NET Core",
      "Angular",
      "SQL Server",
      "Apache NiFi",
      "Power BI",
      "Selenium",
      "Jira",
      "Confluence",
    ],
  },
  {
    role: "Développeur Full-stack",
    contract: "Stage",
    period: "Janv. 2024 - Juil. 2024",
    company: "Centre Hospitalier Sud Francilien",
    location: "Corbeil-Essonnes (91)",
    highlights: [
      "Conception et développement d'une plateforme web de partage de ressources de tutorat (stack MERN) : API REST Node.js (Express) et dashboard React utilisé par plus de 800 utilisateurs.",
      "Mise en place d'un pipeline CI/CD avec tests unitaires et d'intégration (Jest, GitHub Actions).",
      "Déploiement et mise en production de l'application sur un serveur Windows (VPS OVHcloud) avec IIS.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Jest", "GitHub Actions", "IIS"],
  },
];
