# HydroDidac — Site & Réseaux sociaux hydraulique industrielle
# Pôle A — Création & Branding (propriétaire : Damien, expert hydraulicien)

## Contexte
Ce projet construit le **site/application** et la **présence réseaux sociaux**
du projet HydroDidac : partage de connaissance en hydraulique industrielle via
des fiches didactiques. Le contenu technique des fiches est produit dans le
projet séparé `../equipe-fiches-hydraulique` (Pôle B) — ce projet-ci ne fait
qu'accueillir, mettre en forme et diffuser ce contenu.

## Stack et commandes
- Astro 7 (Node ≥ 22.12), recherche Pagefind, sitemap
- `npm run dev` — serveur local · `npm run build` — build + index Pagefind
- Déploiement : Cloudflare Pages (`wrangler.toml`) · repo GitHub `HydroDidac/site-hydrodidac`
- CMS : Decap (`public/admin/`), auth via Cloudflare Worker dans `cms-auth-worker/`

## Structure
- `src/pages/` — accueil, à-propos, `fiches/` (liste + page fiche)
- `src/components/` — composants dont animations SVG (`Animation*.astro`)
- `src/content/fiches/` — collection de contenu (fiches importées du Pôle B)
- `src/styles/global.css` — styles globaux · `src/remark-plugins/` — plugins markdown
- `CHARTE_GRAPHIQUE_HYDRODIDAC.md` — référence design (dont charte des schémas SVG)
- Ne jamais lire `node_modules/`, `dist/`, `.astro/`, `package-lock.json`

## Organisation de l'équipe (Pôle A)
- `directeur-creation` — lead, coordonne les agents ci-dessous
- `architecte-web` — structure technique (Astro + CMS + déploiement)
- `directeur-artistique` — design system et charte
- `dev-frontend` — pages et composants du site
- `dev-backend` — CMS, newsletter, recherche, SEO technique
- `illustrateur-svg` — illustrations techniques animées (SVG/CSS) des composants hydrauliques
- `generateur-visuels` — prompts pour outil d'image IA externe (logo, posts)
- `strategie-com` — déclinaison de chaque fiche en posts réseaux

## Charte de marque
- Couleurs : bleu hydraulique `#0E5AA7`, ambre `#F39200`, anthracite `#1C2B36`
- Typographies : `Space Grotesk` (titres), `Inter` (texte), `JetBrains Mono` (valeurs)
- Niveaux de fiche : 🟢 débutant · 🟠 intermédiaire · 🔴 avancé

## Handoff images (Damien → site)
1. Chaque fiche a un code `F001`, `F002`...
2. Images nommées `F0XX-cover.png`, `F0XX-schema.png`, `F0XX-schema-2.png`,
   `F0XX-illu-01.png`, déposées dans `public/assets/fiches/F0XX/`
3. Légendes renseignées dans `public/assets/fiches/images.csv`
   (colonnes : `code_fiche,fichier,titre_legende`)
4. `dev-backend`/`dev-frontend` placent les images automatiquement à partir de
   ce tableau — Damien ne touche jamais au code pour ça.

## Handoff contenu (Pôle B → Pôle A)
Les fiches finalisées par `equipe-fiches-hydraulique` (versions EXPERT et
DÉBUTANT) sont copiées/importées dans la collection de contenu Astro du site.
Le contenu technique n'est jamais modifié côté Pôle A — seule la mise en forme
peut être ajustée.

## Ordre de démarrage
1. `architecte-web` (structure) → `directeur-artistique` (design system)
2. `dev-frontend` + `dev-backend` (site + gabarit de fiche)
3. `generateur-visuels` (logo, identité visuelle réseaux)
4. `strategie-com` (diffusion, en parallèle dès les premières fiches publiées)

Toujours répondre en français.
