import type { Client } from "../types/content";

/**
 * Entreprises de la section "Ils m'ont fait confiance".
 * Les logos de la timeline des expériences sont résolus à partir de cette liste (champ `name`).
 *
 * Ajout d'une entreprise :
 *   1. Placer le logo dans public/logos/ (SVG recommandé, ou PNG à fond transparent).
 *   2. Ajouter une entrée au tableau :
 *
 *   {
 *     name: "Nom de l'entreprise",
 *     logo: "/logos/nom-entreprise.svg",
 *     url: "https://www.exemple.com", // optionnel
 *     relation: "client", // "employer" ou "client"
 *   },
 *
 * En l'absence de fichier logo, le nom de l'entreprise est affiché en texte.
 */
export const clients: Client[] = [
  {
    name: "Generali France",
    logo: "/logos/generali.png",
    url: "https://www.generali.fr",
    relation: "employer",
  },
  {
    name: "Centre Hospitalier Sud Francilien",
    logo: "/logos/chsf.png",
    url: "https://mtonstage.fr",
    relation: "employer",
  },
  {
    name: "Ange Global Business",
    logo: "/logos/agb-info.png",
    url: "https://www.agbinfo.com",
    relation: "client",
  },
];

export function findClient(name: string): Client | undefined {
  return clients.find((client) => client.name === name);
}
