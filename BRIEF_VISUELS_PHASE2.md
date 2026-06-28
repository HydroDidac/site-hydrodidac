# Brief visuels — Phase 2 (logo HydroDidac)

Colle un de ces prompts dans l'outil de ton choix. Pour un **logo**, privilégie
un outil qui gère bien le texte/les formes nettes : **Ideogram** ou **Recraft**
(meilleurs pour les logos) plutôt que Midjourney (plus orienté ambiance/photo).

## Format attendu
- Logo principal : fond transparent, carré 1:1, lisible en petit (favicon 32px)
- Variante horizontale (logo + nom) pour l'en-tête du site

## Charte couleur (à respecter dans les 3 prompts)
| Rôle | Couleur | Code |
|---|---|---|
| Couleur principale | Bleu hydraulique | `#0E5AA7` |
| Couleur d'accent | Ambre | `#F39200` |
| Contours / texte | Anthracite | `#1C2B36` |
| Fond | Blanc / transparent | `#FFFFFF` |

## Élément symbolique commun : triangle inversé
Les 3 prompts intègrent un **triangle inversé** (pointe vers le bas) comme
élément central du symbole — il évoque à la fois un symbole de vanne/débit en
hydraulique (ISO 1219) et une forme de "goutte" stylisée. C'est l'élément
graphique signature de la marque, à conserver dans toutes les déclinaisons
futures (favicon, posts réseaux, etc.).

## Prompt 1 — symbole abstrait
```
Minimalist abstract logo for an industrial hydraulics engineering brand called
"HydroDidac". A single clean geometric symbol built around an inverted
triangle (point facing down, like a hydraulic valve/flow symbol), merged with
a subtle hydraulic pressure gauge needle or a gear tooth detail, flat vector
style, color palette: primary deep blue #0E5AA7, accent amber #F39200, outline
anthracite #1C2B36, on a white or transparent background, no text, sharp clean
lines, professional B2B industrial branding, centered, high contrast,
scalable icon
```

## Prompt 2 — monogramme
```
Modern monogram logo combining the letters "H" and "D" into a single mark for
an industrial hydraulics brand called "HydroDidac", the negative space or
overall silhouette of the mark forming an inverted triangle (point facing
down), geometric sans-serif construction, color palette: primary deep blue
#0E5AA7, accent amber #F39200 as a small detail, anthracite #1C2B36 outline,
flat vector, no gradients, no text other than the monogram, white or
transparent background, clean engineering aesthetic
```

## Prompt 3 — pictogramme circuit
```
Flat vector icon logo representing a simplified hydraulic circuit symbol
(ISO 1219 style lines), centered on an inverted triangle (point facing down,
like a hydraulic valve symbol) forming a subtle "H" or "D" shape within it,
color palette: primary deep blue #0E5AA7 lines, accent amber #F39200 single
point, anthracite #1C2B36 outline, minimal, geometric, professional industrial
branding, white or transparent background, no text
```

## Après génération
1. Choisis la version qui reste lisible en petit (teste en réduisant l'image
   à 32×32 px mentalement).
2. Dépose le fichier final dans `public/` sous le nom `logo.svg` (ou `.png` si
   pas de version vectorielle) et `favicon.svg`/`favicon.ico` pour l'onglet du
   navigateur.
3. Préviens `dev-frontend` pour qu'il l'intègre dans le `<head>` et l'en-tête
   du site.

## Pour les visuels réseaux sociaux (plus tard, phase 5)
Mêmes couleurs de marque, mais demande à `strategie-com` de préciser le format
(1:1, 16:9 ou 9:16 selon le canal) avant de générer — `generateur-visuels`
adaptera le prompt fiche par fiche.
