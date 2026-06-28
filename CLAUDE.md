# HydroDidac — Site & Réseaux sociaux hydraulique industrielle
# Pôle A — Création & Branding (propriétaire : Damien, expert hydraulicien)

## Contexte
Ce projet construit le **site/application** et la **présence réseaux sociaux**
du projet HydroDidac : partage de connaissance en hydraulique industrielle via
des fiches didactiques. Le contenu technique des fiches est produit dans le
projet séparé `../equipe-fiches-hydraulique` (Pôle B) — ce projet-ci ne fait
qu'accueillir, mettre en forme et diffuser ce contenu.

## Organisation de l'équipe (Pôle A)
- `directeur-creation` — lead, coordonne les agents ci-dessous
- `architecte-web` — structure technique (Astro + CMS + déploiement)
- `directeur-artistique` — design system et charte
- `dev-frontend` — pages et composants du site
- `dev-backend` — CMS, newsletter, recherche, SEO technique
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
