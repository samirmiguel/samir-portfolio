# Samir Miguel - Portfolio

Portfolio personnel de Samir Miguel, développeur C# / .NET & Data Analyst.

Site single page construit avec Vite, React, TypeScript, Tailwind CSS v4, lucide-react et motion,
déployé sur Netlify.

## Fonctionnalités

- Thème clair / sombre (préférence système par défaut, choix mémorisé)
- Navigation par ancres avec mise en évidence de la section active
- Animations d'apparition respectant `prefers-reduced-motion`
- Contenu entièrement piloté par des fichiers de données typés
- Responsive, accessible (WCAG AA) et optimisé pour le référencement

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Démarrage

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:5173.

## Scripts

| Commande               | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Serveur de développement                      |
| `npm run build`        | Vérification TypeScript et build dans `dist/` |
| `npm run preview`      | Prévisualisation du build de production       |
| `npm run lint`         | Analyse ESLint (aucun warning toléré)         |
| `npm run format`       | Formatage Prettier                            |
| `npm run format:check` | Vérification du formatage                     |

## Structure

```
public/
├── images/profile.jpg    # photo de profil (carrée, 800x800 px minimum)
├── logos/                # logos des entreprises
├── cv/                   # CV téléchargeable (CV_Samir_Miguel.pdf)
└── favicon.svg
src/
├── components/
│   ├── ui/               # composants génériques (Button, Badge, Card, Section...)
│   └── layout/           # Navbar, Footer, ThemeToggle
├── sections/             # sections de la page
├── data/                 # contenu du site
├── hooks/                # useTheme, useActiveSection
├── lib/                  # utilitaires
└── types/                # types du contenu
```

## Contenu

Le contenu est défini dans `src/data/` et typé dans `src/types/content.ts`. Les composants ne
contiennent aucun texte propre au profil.

| Fichier             | Contenu                                                |
| ------------------- | ------------------------------------------------------ |
| `profile.ts`        | Identité, accroche, présentation, chiffres clés, liens |
| `skills.ts`         | Compétences par catégorie                              |
| `experiences.ts`    | Expériences professionnelles                           |
| `clients.ts`        | Entreprises de la section "Ils m'ont fait confiance"   |
| `education.ts`      | Formation et projets                                   |
| `certifications.ts` | Certifications                                         |
| `site.ts`           | Navigation et textes d'interface                       |

### Ajouter une entreprise

1. Placer le logo dans `public/logos/` (SVG recommandé, ou PNG à fond transparent).
2. Ajouter une entrée dans `src/data/clients.ts` :

```ts
{
  name: "Acme",
  logo: "/logos/acme.svg",
  url: "https://www.acme.com", // optionnel
  relation: "client", // "employer" ou "client"
},
```

Si le fichier du logo est introuvable, le nom de l'entreprise est affiché à la place.

### Ajouter une expérience

Ajouter une entrée en tête du tableau de `src/data/experiences.ts`. Le champ `company` doit
correspondre au `name` d'une entrée de `clients.ts` pour afficher le logo dans la timeline.

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

## Déploiement

La configuration Netlify est définie dans `netlify.toml` (commande `npm run build`, dossier `dist`,
Node 22, cache long sur `/assets/*`).

### Netlify CLI

```bash
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --prod
```

### Déploiement continu

Importer le dépôt GitHub depuis [app.netlify.com](https://app.netlify.com)
(_Add new site > Import an existing project_). Chaque push sur `main` déclenche un déploiement.

### Partage sur les réseaux sociaux

Les balises `og:image` et `twitter:image` de `index.html` utilisent un chemin relatif. Une fois le
domaine connu, les remplacer par une URL absolue (ex. `https://<domaine>/images/profile.jpg`).
