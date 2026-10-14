import type { SkillCategory } from "../types/content";

export const skillCategories: SkillCategory[] = [
  {
    name: "Langages",
    skills: ["C#", "SQL", "Python (Pandas, NumPy)", "JavaScript", "PHP", "Bash/Linux", "Scala"],
  },
  {
    name: "Back-end",
    skills: [
      ".NET Core",
      "ASP.NET Core (Web API, MVC)",
      "WinForms",
      "Entity Framework",
      "LINQ",
      "Swagger/OpenAPI",
      "API REST",
      "Traitements batch",
      "Node.js (Express)",
    ],
  },
  {
    name: "Front-end",
    skills: ["JavaScript", "jQuery", "Angular", "React", "Next.js", "Vue.js", "HTML/CSS"],
  },
  {
    name: "Data & BI",
    skills: [
      "Power BI (Power Query, DAX)",
      "Modélisation de données",
      "ETL",
      "KPI",
      "Apache Spark",
      "Apache Kafka",
      "Apache NiFi",
    ],
  },
  {
    name: "Bases de données",
    skills: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB"],
  },
  {
    name: "DevOps & outils",
    skills: ["Git", "GitHub Copilot", "Docker", "Azure", "Selenium", "Linux"],
  },
  {
    name: "Méthodologies",
    skills: ["Scrum / Agile", "Jira", "Confluence", "UML", "Merise"],
  },
];
