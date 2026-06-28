# Déployer HydroDidac sur Cloudflare Pages (gratuit)

Ce guide suppose que tu n'as jamais utilisé Git/GitHub/Cloudflare — chaque
étape est détaillée. Tu dois avoir un compte GitHub et un compte Cloudflare
(les deux gratuits, à créer si tu ne les as pas).

## Étape 1 — Mettre le projet sur GitHub

1. Va sur [github.com/new](https://github.com/new), crée un dépôt nommé
   `site-hydrodidac` (peut être privé ou public, peu importe).
2. Dans un terminal, à la racine de `site-hydrodidac/` :
   ```
   git init
   git add .
   git commit -m "Première version du site"
   git branch -M main
   git remote add origin https://github.com/TON-COMPTE/site-hydrodidac.git
   git push -u origin main
   ```
   (remplace `TON-COMPTE` par ton pseudo GitHub)

## Étape 2 — Connecter le dépôt à Cloudflare Pages

1. Va sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Créer une application** → **Pages** → **Connecter à Git**.
2. Choisis ton dépôt `site-hydrodidac`.
3. Paramètres de build :
   - Framework preset : **Astro**
   - Commande de build : `npm run build`
   - Dossier de sortie : `dist`
4. Valide — Cloudflare déploie automatiquement, et redéploiera à chaque `git push`.
5. Une fois déployé, Cloudflare te donne une URL du type `site-hydrodidac.pages.dev`. Tu pourras brancher ton vrai domaine `hydrodidac.com` ensuite dans l'onglet "Custom domains" de ce projet Pages.

## Étape 3 — Créer une application OAuth GitHub (pour le CMS)

1. Va sur [github.com/settings/developers](https://github.com/settings/developers) → **OAuth Apps** → **New OAuth App**.
2. Renseigne :
   - **Application name** : HydroDidac CMS
   - **Homepage URL** : `https://hydrodidac.com`
   - **Authorization callback URL** : `https://hydrodidac-cms-auth.TON-SOUS-DOMAINE.workers.dev/callback`
     (tu complèteras cette URL exacte à l'étape suivante, une fois le Worker créé — tu peux revenir modifier cette valeur après coup)
3. Une fois créée, GitHub te donne un **Client ID** et te permet de générer un **Client Secret**. Garde-les precieusement, tu en as besoin à l'étape 4.

## Étape 4 — Déployer le Worker d'authentification

Ce petit programme (déjà écrit dans `cms-auth-worker/`) fait le lien entre
Decap CMS et GitHub. Il est gratuit sur Cloudflare Workers (largement dans le
quota gratuit pour ce volume d'utilisation).

1. Installe l'outil Cloudflare en local :
   ```
   npm install -g wrangler
   wrangler login
   ```
   (ouvre ton navigateur pour te connecter à ton compte Cloudflare)
2. Déploie le Worker :
   ```
   cd cms-auth-worker
   wrangler deploy
   ```
3. Configure les secrets (les valeurs récupérées à l'étape 3) :
   ```
   wrangler secret put GITHUB_CLIENT_ID
   wrangler secret put GITHUB_CLIENT_SECRET
   ```
   (Wrangler te demandera de coller chaque valeur)
4. Note l'URL donnée par `wrangler deploy` (du type
   `https://hydrodidac-cms-auth.TON-SOUS-DOMAINE.workers.dev`).
5. Retourne dans ton application OAuth GitHub (étape 3) et mets à jour
   l'**Authorization callback URL** avec cette URL exacte + `/callback`.

## Étape 5 — Finaliser la configuration du CMS

Dans `public/admin/config.yml`, vérifie/complète ces deux lignes avec tes
vraies valeurs :

```yaml
backend:
  name: github
  repo: TON-COMPTE/site-hydrodidac
  branch: main
  base_url: https://hydrodidac-cms-auth.TON-SOUS-DOMAINE.workers.dev
```

Commit et push ce changement (`git add`, `git commit`, `git push`) —
Cloudflare Pages redéploiera automatiquement.

## Étape 6 — Utiliser le CMS

Une fois tout en ligne, va sur `https://hydrodidac.com/admin/` : tu devrais
voir un bouton de connexion GitHub. Connecte-toi avec ton compte GitHub
(celui propriétaire du dépôt), et tu pourras ajouter/modifier des fiches
directement depuis cette interface, sans toucher au code.

## Récapitulatif des coûts
Tout ce guide reste **100% gratuit** dans les quotas standards (Cloudflare
Pages, Cloudflare Workers, GitHub) pour un site de cette taille. Le seul
coût réel est le nom de domaine, déjà acheté.
