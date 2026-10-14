import type { Client } from "../types/content";

/**
 * Entreprises affichées dans la section "Ils m'ont fait confiance".
 * La timeline des expériences réutilise ces entrées (via le champ `name`) pour afficher les logos.
 *
 * Pour ajouter une entreprise :
 *   1. Déposer le logo dans public/logos/ (SVG de préférence, sinon PNG à fond transparent).
 *   2. Ajouter une entrée dans le tableau ci-dessous, par exemple :
 *
 *   {
 *     name: "Nom de l'entreprise",
 *     logo: "/logos/nom-entreprise.svg",
 *     url: "https://www.exemple.com", // optionnel
 *     relation: "client", // "employer" : j'y ai travaillé / "client" : j'ai développé des outils pour elle
 *   },
 *
 * Si le fichier du logo est absent, le nom de l'entreprise s'affiche proprement à la place.
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
    url: "https://www.chsf.fr",
    relation: "employer",
  },
  {
    name: "Ange Global Business",
    logo: "/logos/agb-info.png",
    relation: "client",
  },
];

export function findClient(name: string): Client | undefined {
  return clients.find((client) => client.name === name);
}
