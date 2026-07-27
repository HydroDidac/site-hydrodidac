# HydroDidac — Site & Réseaux sociaux hydraulique industrielle
# Pôle A — Création & Branding (propriétaire : Damien, expert hydraulicien)

## Contexte
Ce projet construit le **site/application** et la **présence réseaux sociaux**
du projet HydroDidac : partage de connaissance en hydraulique industrielle.
Le site combine trois usages :
1. des **fiches didactiques** (contenu produit dans le projet séparé
   `../equipe-fiches-hydraulique`, Pôle B — jamais rédigé ici) ;
2. des **calculateurs hydrauliques** interactifs (produits ici) ;
3. un **forum** communautaire (produit ici, adossé aux GitHub Discussions).

Damien est expert métier, pas développeur : expliquer simplement, en français,
et éviter de lui demander de toucher au code.

## Stack et commandes
- Astro 7 (Node ≥ 22.12), recherche Pagefind, sitemap. Pas de framework JS
  côté client : tout l'interactif est en JavaScript natif inline dans la page.
- `npm run dev` — serveur local (port 4321) · `npm run build` — build + index Pagefind
- Déploiement : Cloudflare Pages (`wrangler.toml`) · repo GitHub `HydroDidac/site-hydrodidac`
- Domaine : `hydrodidac.com` (déclaré dans `astro.config.mjs`)
- CMS : Decap (`public/admin/`), auth via Cloudflare Worker dans `cms-auth-worker/`
- En-têtes de sécurité : `public/_headers` (Cloudflare Pages)

## Structure
- `src/pages/` — `index`, `a-propos`, `mentions-legales`, `404`,
  `fiches/` (liste + `[code]`), `calculateurs`, `forum` + `forum/[slug]`
- `src/components/` — `Layout`, `Header`, `Footer`, `Sommaire`,
  `ForumDiscussion`, animations SVG (`Animation*.astro`), `IllustrationBanniere`
- `src/content/fiches/` — collection de contenu (fiches importées du Pôle B)
- `src/data/` — données statiques JS : `huiles-hydrauliques.js`, `forum-categories.js`
- `src/lib/` — `fiches.ts` (regroupement des versions), `modules.ts` (les 15 modules),
  `images.ts` (lecture de `images.csv`)
- `src/remark-plugins/` — `remark-encadres` (encadrés auto-stylés),
  `remark-liens-fiches` (mentions `F0XX` → liens cliquables)
- `src/styles/global.css` — variables de design (couleurs, typo, espacements)
  et styles globaux · `src/styles/design-system.md` — documentation du design system
- `CHARTE_GRAPHIQUE_HYDRODIDAC.md` — référence design (dont charte des schémas SVG)
- `DEPLOIEMENT.md` — procédure de mise en ligne
- Ne jamais lire `node_modules/`, `dist/`, `.astro/`, `package-lock.json`

## État d'avancement (au 25 juillet 2026)
- ✅ Site en ligne : accueil, sommaire des 15 modules, liste et pages de fiches,
  à-propos, mentions légales, 404, recherche Pagefind, CMS Decap + Worker OAuth
- ✅ **Calculateurs** (`/calculateurs`) : 17 calculateurs, sommaire latéral en
  7 groupes — puissance, débit de pompe, couple, vitesse de moteur hydraulique,
  force / vitesse / temps de course de vérin, vitesse en conduite, Reynolds,
  diamètre de conduite, pertes de charge, diamètre de gicleur, débit d'orifice,
  viscosité selon température, bilan thermique et échangeur, échauffement,
  volume utile d'accumulateur.
  Chaque carte affiche la formule et un bloc dépliable « Pour aller plus loin »
  à deux niveaux (🟢 débutant / 🔴 expert).
  Le sommaire **filtre** l'affichage : cliquer une entrée n'affiche que ce
  calculateur (état porté par l'ancre `#calc-xxx`, donc partageable) ;
  l'entrée « Tous les calculateurs » revient à la grille complète.
- ✅ **Forum** (`/forum`) : page d'index avec 6 catégories + une page par
  catégorie portant son propre fil de discussion (voir section dédiée).
- ✅ **Mesure d'audience** : Cloudflare Web Analytics, beacon posé dans
  `Layout.astro` (donc valable pour toutes les pages). Sans cookie ni
  identifiant de visiteur → aucun bandeau de consentement à prévoir, mais toute
  nouvelle brique qui collecterait des données doit être ajoutée à la page
  Mentions légales. Consultation : dash.cloudflare.com → Analytics & Logs →
  Web Analytics. **Google Search Console** : propriété `sc-domain:hydrodidac.com`
  vérifiée par DNS, sitemap `sitemap-index.xml` déclaré (26 juillet 2026).
- ⚠️ **Seules 3 fiches sont publiées sur le site** (F001 limiteur de pression,
  F002 loi de Pascal, F003 vérin double effet) alors que le Pôle B en a produit
  **59 sur 119**. Le rattrapage d'import est le principal chantier de contenu.
- ⚠️ `public/assets/fiches/images.csv` ne contient encore qu'une ligne d'exemple :
  aucune image de fiche réelle n'est en place.
- ⏸️ Newsletter : jamais branchée (ni compte Brevo/MailerLite créé).
- ⏸️ Réseaux sociaux : aucun compte créé, `strategie-com` n'a pas encore tourné.

## Le forum
Choix technique : **giscus** adossé aux **GitHub Discussions** du dépôt
`HydroDidac/site-hydrodidac`. Aucun serveur ni base de données à maintenir,
modération faite depuis GitHub, lecture ouverte à tous, écriture avec un compte
GitHub gratuit (ce qui limite le spam mais reste une friction assumée).

- Composant `src/components/ForumDiscussion.astro` — encapsule le script giscus
  (repo-id `R_kgDOTHsNjA`, catégorie `FORUM` / `DIC_kwDOTHsNjM4DB88V`,
  `data-mapping="pathname"`, `data-lang="fr"`, thème `light` forcé car le site
  n'a pas de mode sombre).
- `src/data/forum-categories.js` — la **seule** source de vérité des catégories.
  Ajouter une entrée y crée automatiquement la carte sur `/forum` **et** la page
  `/forum/<slug>` avec son propre fil (grâce au mapping par pathname) : rien à
  configurer côté GitHub.
- Catégories actuelles : composants · fluides-filtration · depannage ·
  dimensionnement · securite-normes · site-hydrodidac. Volontairement peu
  nombreuses — un forum qui démarre avec trop de catégories paraît vide.
- Page `/forum` = index des catégories + règles « avant de poster ».
  Page `/forum/[slug]` = résumé, exemples de sujets, fil giscus, liens vers les
  autres catégories.

**Points de vigilance forum**
- Le fil est lié à l'URL : renommer un `slug` fait perdre le fil existant
  (le nouveau chemin crée une discussion vide). Ne renommer que si le fil est vide.
- Les Discussions GitHub doivent rester activées sur le dépôt, avec la catégorie
  `FORUM` — si elle est supprimée côté GitHub, le widget affiche une erreur.
- `public/_headers` ne définit pas de CSP `frame-src` : l'iframe giscus passe.
  Si une CSP est ajoutée un jour, autoriser `https://giscus.app`.
- Modération : tout se fait depuis l'onglet Discussions de GitHub (masquer,
  verrouiller, épingler). Voir l'agent `anim-forum`.

## Les calculateurs
- Une page unique (`src/pages/calculateurs.astro`), une `<section class="calc-carte">`
  par calculateur, calcul en JavaScript natif inline, recalcul à chaque `input`.
- Chaque calculateur affiche **la formule utilisée** : l'objectif est autant de
  faire comprendre que de calculer. Garder cette règle pour tout nouvel ajout.
- Le calculateur « viscosité selon la température » s'appuie sur
  `src/data/huiles-hydrauliques.js` : ~200 huiles réelles (marque, nom, grade ISO,
  viscosités à 40 et 100 °C, indice VI, famille HM/HV/HEES/Turbine-UTTO), avec
  filtres marque / famille / grade. Source : les fiches techniques collectées
  dans `../collecte/documents/Fabricants/`, consolidées dans
  `../collecte/documents/base_de_donnees_huiles_hydrauliques_integrale.md`.
  N'ajouter une huile que si **les deux** viscosités (40 °C et 100 °C) sont
  connues : l'interpolation Walther/ASTM D341 a besoin de deux points.
- `src/data/huiles-standard.js` ajoute une marque **« Standard »** (18 huiles
  génériques du type « Huile minérale standard 46 cSt »), pour l'utilisateur qui
  ignore la marque de son huile mais connaît son type et son grade. Ces valeurs
  sont **dérivées du catalogue réel**, jamais inventées : pour chaque couple
  famille + grade ISO comptant au moins 3 huiles, on retient celle qui est la
  plus proche des viscosités médianes du groupe, ce qui garde les trois valeurs
  (40 °C, 100 °C, VI) cohérentes entre elles. Le module exporte `catalogue`
  (standard puis marques) et `libelleHuile()` — c'est `catalogue` qu'utilisent
  les pages, pas `huiles` directement.
- Ajouter un calculateur = ajouter la section + l'entrée correspondante dans le
  tableau `sommaire` en tête de fichier.
- Le sélecteur d'huile (filtres marque/type/grade + liste) est **mutualisé** :
  les fonctions `construireOptionsHuiles(p)` et `majHuile(p)` prennent un
  préfixe d'identifiants (`vi` = viscosité, `gi` = gicleur). Pour brancher le
  catalogue d'huiles sur un nouveau calculateur, dupliquer le bloc de filtres
  avec un nouveau préfixe, poser `class="calc-filtre"` / `class="calc-huile-select"`
  et `data-prefixe="<préfixe>"`, plus les champs cachés `<préfixe>-n1` / `-n2`.
- Reste 6 calculateurs à intégrer, spécifiés dans
  `../SPECS_CALCULATEURS_MANQUANTS.md` : réservoir, moteur d'entraînement,
  flambage de tige (Euler), pertes dans les accessoires, rigidité hydraulique,
  convertisseur d'unités. Le n° 2 de cette spec (bilan thermique) est fait.
- Les fonctions physiques partagées sont en tête du script : `viscositeA()`
  (Walther/ASTM D341), `masseVolumiqueA()` (densité par famille d'huile, corrigée
  en température), `verdictOrifice()` (validité du coefficient de débit selon
  le régime d'écoulement) et `surfaceReservoir()` (surface d'échange d'un
  réservoir assimilé à un cube, 6 faces — **partagée par les deux calculateurs
  thermiques** pour qu'ils ne se contredisent pas sur le même réservoir).
  Les réutiliser plutôt que de recopier le calcul.

## Organisation de l'équipe (Pôle A)
- `directeur-creation` — lead, coordonne les agents ci-dessous
- `architecte-web` — structure technique (Astro + CMS + déploiement)
- `directeur-artistique` — design system et charte
- `dev-frontend` — pages et composants du site (fiches, calculateurs, forum)
- `dev-backend` — CMS, recherche, SEO technique, intégrations tierces (giscus)
- `illustrateur-svg` — illustrations techniques animées (SVG/CSS) des composants
- `generateur-visuels` — prompts pour outil d'image IA externe (logo, posts)
- `strategie-com` — déclinaison de chaque fiche en posts réseaux
- `anim-forum` — animation et modération du forum communautaire

## Charte de marque
- Couleurs : bleu hydraulique `#0E5AA7`, ambre `#F39200`, anthracite `#1C2B36`
- Typographies : `Space Grotesk` (titres), `Inter` (texte), `JetBrains Mono` (valeurs)
  — auto-hébergées dans `public/fonts/`, jamais de Google Fonts en ligne
- Niveaux de fiche : 🟢 débutant · 🟠 intermédiaire · 🔴 avancé
- Toujours passer par les variables CSS de `global.css` (`--color-*`, `--espace-*`,
  `--taille-*`) — ne jamais coder une couleur ou une taille en dur.

## Conventions de code
- Contenu affiché : **français** (y compris les commentaires de code, qui doivent
  rester lisibles par Damien et expliquer le *pourquoi*, pas le *comment*).
  Noms de variables et de fichiers : sans accents.
- Pas de nouvelle dépendance sans raison forte : le site doit rester un site
  statique simple, réparable par quelqu'un qui n'est pas développeur.
- Accessibilité : `alt` sur les images, contrastes suffisants, navigation au
  clavier, `id="contenu"` sur le `<main>` pour le lien d'évitement.
- Classe `no-print` sur les éléments à masquer à l'impression (une fiche doit
  s'imprimer proprement pour l'atelier).

## Handoff images (Damien → site)
1. Chaque fiche a un code `F001`, `F002`...
2. Images nommées `F0XX-cover.png`, `F0XX-schema.png`, `F0XX-schema-2.png`,
   `F0XX-illu-01.png`, déposées dans `public/assets/fiches/F0XX/`
3. Légendes renseignées dans `public/assets/fiches/images.csv`
   (colonnes : `code_fiche,fichier,titre_legende`)
4. `dev-backend`/`dev-frontend` placent les images automatiquement à partir de
   ce tableau (`src/lib/images.ts`) — Damien ne touche jamais au code pour ça.

## Handoff contenu (Pôle B → Pôle A)
Les fiches finalisées par `equipe-fiches-hydraulique` (versions EXPERT et
DÉBUTANT) sont copiées dans `src/content/fiches/`, une par version, nommées
`f0XX-<sujet>-expert.md` / `-debutant.md`. Le frontmatter suit le schéma de
`src/content.config.ts` (`code`, `titre`, `niveau`, `module`, `resume`,
`ficheLiees`, `datePublication`, `refPoleB`). Le champ `refPoleB` garde le
numéro de la fiche source (ex. `04.01`).
**Le contenu technique est repris mot pour mot** — seule la mise en forme peut
être ajustée (encadrés, liens entre fiches, illustrations).

## Prochaines étapes suggérées
1. Importer les fiches du Pôle B déjà produites (56 en attente) — chantier
   répétitif, à traiter par lots de module.
2. Remplir `images.csv` et les dossiers `public/assets/fiches/F0XX/`.
3. Annoncer le forum (encart sur l'accueil, lien dans les fiches) et l'amorcer
   avec quelques sujets — voir `anim-forum`.
4. Trancher la newsletter (Brevo/MailerLite) si Damien la veut toujours.
5. Ménage : `_tmp_deltest.txt` à la racine est un fichier de test à supprimer,
   et le travail forum/calculateurs n'est pas encore commité.

Toujours répondre en français.
