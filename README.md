# Portfolio - Samir Miguel

Site personnel single page : Vite + React + TypeScript (strict), Tailwind CSS v4, lucide-react et motion.
Déployé sur Netlify.

## 1. Installation et lancement local

Prérequis : Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev        # http://localhost:5173
```

Autres scripts :

| Commande               | Rôle                                       |
| ---------------------- | ------------------------------------------ |
| `npm run build`        | Vérification TypeScript + build dans dist/ |
| `npm run preview`      | Sert le build de production en local       |
| `npm run lint`         | ESLint (zéro warning toléré)               |
| `npm run format`       | Formate le code avec Prettier              |
| `npm run format:check` | Vérifie le formatage sans modifier         |

## 2. Fichiers à déposer

Le site s'affiche correctement sans ces fichiers (initiales "SM" à la place de la photo, nom de
l'entreprise à la place d'un logo manquant), mais pensez à les ajouter :

| Fichier             | Emplacement                     | Conseils                                                        |
| ------------------- | ------------------------------- | --------------------------------------------------------------- |
| Photo de profil     | `public/images/profile.jpg`     | Format carré, 800x800 px minimum. Sert aussi d'image de partage |
| CV                  | `public/cv/CV_Samir_Miguel.pdf` | Lien "Télécharger mon CV" du Hero                               |
| Logos d'entreprises | `public/logos/`                 | SVG de préférence, sinon PNG à fond transparent                 |

Logos déjà présents : `generali.png`, `chsf.png`, `agb-info.png` (fonds rendus transparents).
Pour les remplacer par des SVG, déposez le fichier puis mettez à jour le chemin dans `src/data/clients.ts`.

## 3. Modifier le contenu

Tout le contenu vit dans `src/data/`, typé dans `src/types/content.ts`. Les composants ne contiennent
aucun texte lié au profil.

| Fichier             | Contenu                                                     |
| ------------------- | ----------------------------------------------------------- |
| `profile.ts`        | Identité, accroche, à propos, chiffres clés, langues, liens |
| `skills.ts`         | Compétences par catégorie                                   |
| `experiences.ts`    | Expériences (timeline)                                      |
| `clients.ts`        | Entreprises de la section "Ils m'ont fait confiance"        |
| `education.ts`      | Formation et projets marquants                              |
| `certifications.ts` | Certifications                                              |
| `site.ts`           | Liens de navigation et textes d'interface (titres, boutons) |

### Ajouter une entreprise

1. Déposer le logo dans `public/logos/` (ex. `public/logos/acme.svg`).
2. Ajouter une entrée dans `src/data/clients.ts` :

```ts
{
  name: "Acme",
  logo: "/logos/acme.svg",
  url: "https://www.acme.com", // optionnel
  relation: "client", // "employer" : j'y ai travaillé / "client" : j'ai développé des outils pour elle
},
```

### Ajouter une expérience

Ajouter un objet en tête du tableau de `src/data/experiences.ts` (ordre antéchronologique).
Le champ `company` doit être identique au `name` d'une entrée de `clients.ts` pour que le logo
s'affiche dans la timeline :

```ts
{
  role: "Développeur .NET",
  contract: "CDI",
  period: "Oct. 2026 - Aujourd'hui",
  company: "Acme",
  location: "Paris",
  highlights: ["Réalisation 1", "Réalisation 2"],
  technologies: ["C#", "ASP.NET Core", "SQL Server"],
},
```

## 4. Déploiement Netlify

La configuration est dans `netlify.toml` (build `npm run build`, dossier `dist`, Node 22, cache long
sur `/assets/*`).

**Option A - en ligne de commande**

```bash
npx netlify-cli login
npx netlify-cli init          # crée ou lie le site Netlify
npx netlify-cli deploy --prod
```

**Option B - déploiement continu depuis GitHub**

1. Pousser le dépôt sur GitHub.
2. Sur [app.netlify.com](https://app.netlify.com) : _Add new site > Import an existing project_, choisir
   le dépôt. Les réglages de build sont lus depuis `netlify.toml`.
3. Chaque push sur `main` déclenche un nouveau déploiement.

> Une fois le domaine connu, remplacez dans `index.html` les chemins relatifs `og:image` et
> `twitter:image` par une URL absolue (ex. `https://votre-site.netlify.app/images/profile.jpg`) :
> certains réseaux sociaux l'exigent pour afficher l'aperçu.
