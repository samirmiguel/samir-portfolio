import type { Education } from "../types/content";

export const education: Education[] = [
  {
    degree: "Master of Science Pro - Architecture des Systèmes d'Information (Big Data & IA)",
    school: "Epitech",
    location: "Paris",
    period: "2023 - 2026",
    highlights: [
      "Projet Big Data : streaming temps réel de cryptomonnaies - pipeline Kafka / Python conteneurisé avec Docker, alimentant un dashboard React / Node.js.",
      "Projet IA : analyse de radiographies thoraciques pour la détection de pneumonie via réseaux de neurones et régression logistique (Python).",
    ],
  },
  {
    degree: "Licence Professionnelle - Système Informatique et Logiciel",
    school: "HECM",
    location: "Cotonou",
    period: "2019 - 2022",
    highlights: [
      "Programmation procédurale et orientée objet ; modélisation de systèmes (Merise, UML).",
    ],
  },
];
