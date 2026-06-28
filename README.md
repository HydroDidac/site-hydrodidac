# HydroDidac — Site

Site de fiches didactiques sur l'hydraulique industrielle, construit avec
**Astro** (un outil qui génère des pages web statiques, rapides et bien
référencées sur Google).

## Comment ça marche, en simple
- Chaque fiche est un fichier dans `src/content/fiches/` (format Markdown : du
  texte normal + un peu de mise en forme).
- Le site lit automatiquement ce dossier et génère une page par fiche, plus
  une page qui liste toutes les fiches (`/fiches`).
- Tes images vont dans `public/assets/fiches/<CODE>/` et sont décrites dans
  `public/assets/fiches/images.csv`.
- Pas besoin de toucher au code pour ajouter une fiche une fois le CMS branché
  (dossier `public/admin/`) : tu remplis un formulaire, le fichier Markdown est
  créé automatiquement.

## Commandes utiles (à lancer dans ce dossier, dans un terminal)
| Commande | Effet |
|---|---|
| `npm run dev` | Lance le site en local pour le voir évoluer en direct (`http://localhost:4321`) |
| `npm run build` | Construit la version finale du site dans `dist/` (inclut la recherche) |
| `npm run preview` | Prévisualise la version finale avant mise en ligne |

## État actuel (Phase 1 — fondations)
- ✅ Projet Astro initialisé
- ✅ Collection de contenu "fiches" avec le gabarit en 10 points
- ✅ Une fiche d'exemple (`F001`) pour vérifier que tout s'affiche
- ✅ Page d'accueil et page liste des fiches
- ✅ Recherche statique (Pagefind) générée au build
- 🔄 Decap CMS configuré (`public/admin/`) — l'authentification reste à brancher
  par `dev-backend` selon ton hébergeur final (Netlify Identity ou GitHub OAuth)
- ⬜ Design system réel (couleurs/typographie de la charte) — prochaine étape
  avec `directeur-artistique` puis `dev-frontend`
- ⬜ Déploiement automatique (Cloudflare Pages ou Vercel)

## Prochaine étape
Parler à `directeur-artistique` pour poser le design system, puis à
`dev-frontend` pour habiller les pages selon la charte HydroDidac.
