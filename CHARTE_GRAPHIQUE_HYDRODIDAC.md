# Charte graphique — HydroDidac

> Document de référence à fournir à NotebookLM (ou tout autre outil) pour que
> toute génération de contenu, visuel ou texte respecte l'identité du projet
> HydroDidac (hydraulique industrielle).

## Instruction pour l'IA

Respecte strictement les règles ci-dessous pour toute production associée à
HydroDidac : couleurs, typographies, ton éditorial et symboles de niveau. Ne
jamais introduire d'autres couleurs, polices ou pictogrammes que ceux listés
ici sans le demander explicitement.

## Couleurs

| Usage | Nom | Code hex |
|---|---|---|
| Couleur de marque principale | Bleu hydraulique | `#0E5AA7` |
| Couleur d'accent / appels à l'action | Ambre | `#F39200` |
| Texte / titres | Anthracite | `#1C2B36` |
| Fond clair (sections alternées) | Gris clair | `#F4F6F8` |

Règle : le bleu hydraulique reste la couleur dominante (logo, liens, éléments
de marque). L'ambre est réservé aux actions/accents, jamais utilisé en masse.
L'anthracite remplace le noir pur pour tout texte.

## Typographie

| Rôle | Police |
|---|---|
| Titres (h1, h2, h3) | Space Grotesk |
| Texte courant | Inter |
| Valeurs numériques, formules, code | JetBrains Mono |

## Niveaux de difficulté (fiches techniques)

| Symbole | Niveau | Public |
|---|---|---|
| 🟢 / ⭐ | Débutant / Fondamental | Accessible à tous |
| 🟠 / ⭐⭐ | Intermédiaire | Technicien hydraulicien |
| 🔴 / ⭐⭐⭐ | Avancé | Ingénieur / spécialiste |

## Charte des schémas techniques animés (SVG)

Convention de couleurs pour les traits de circuit dans les illustrations
techniques (vérins, distributeurs, valves...), inspirée des usages courants en
hydraulique pédagogique — à respecter dans tout nouveau composant SVG.

| Type de ligne | Couleur | Style de trait | Code hex |
|---|---|---|---|
| Pression / refoulement (P) | Rouge | Plein | `#C0392B` |
| Retour / réservoir (T) | Bleu hydraulique | Plein | `#0E5AA7` |
| Pilotage (X) | Orange | Pointillé | `#F39200` |
| Drain / fuite interne (Y) | Vert | Pointillé fin | `#2E8B57` |
| Corps fixe / mécanique (culasses, tiroir au repos) | Anthracite, hachures | — | `#1C2B36` |
| Pièce mobile (piston, tige, tiroir) | Gris/anthracite plein | — | `#1C2B36` / `#DDE3E8` |

Règles :
- Une ligne de circuit garde toujours la même couleur sur tout son parcours,
  même si elle traverse plusieurs composants.
- Le pointillé est réservé aux lignes de pilotage et de drain — jamais à une
  ligne de puissance (P ou T), qui reste toujours en trait plein.
- Ces couleurs sont définies en variables CSS (`--color-ligne-pression`,
  `--color-ligne-retour`, `--color-ligne-pilotage`, `--color-ligne-drain`)
  dans `src/styles/global.css` — toujours les utiliser, jamais de couleur en
  dur dans un fichier `.astro`.
- Ne pas confondre avec les couleurs de marque (bleu hydraulique, ambre) :
  une ligne de retour bleue et le bleu de marque partagent le même ton par
  cohérence visuelle, mais leur rôle reste distinct (fonction du circuit vs
  identité de marque).

## Composants visuels du site (référence, pour cohérence de ton)

| Élément | Usage |
|---|---|
| Pastille de niveau | Accolée au titre d'une fiche, couleur selon le tableau ci-dessus |
| Carte fiche | Carte cliquable dans les listes de fiches |
| Encadré formules | Bloc bleu clair pour mettre en valeur les formules clés |
| Encadré sécurité | Bloc rouge clair, toujours visible, pour les avertissements sécurité |

## Ton éditorial

- Contenu technique, précis, jamais approximatif (domaine : hydraulique
  industrielle professionnelle).
- Vocabulaire adapté au niveau affiché (⭐ simple et concret, ⭐⭐⭐ rigoureux et
  normé).
- Pas d'emphase marketing exagérée — la crédibilité technique prime.
- Les schémas hydrauliques techniques ne sont jamais générés par IA : ils
  viennent toujours d'une source humaine/experte. Une IA générative peut
  produire des visuels d'illustration (logo, posts), jamais des schémas
  techniques normés (ISO 1219).
