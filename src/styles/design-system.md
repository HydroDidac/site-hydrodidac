# Design system HydroDidac

Référence pour `dev-frontend`. Toutes les variables sont dans
`src/styles/global.css`, importé une fois dans le layout principal.

## Couleurs
| Usage | Variable | Valeur |
|---|---|---|
| Couleur de marque principale | `--color-bleu-hydraulique` | `#0E5AA7` |
| Couleur d'accent / appels à l'action | `--color-ambre` | `#F39200` |
| Texte / titres | `--color-anthracite` | `#1C2B36` |
| Fond clair (sections alternées) | `--color-gris-clair` | `#F4F6F8` |

## Typographie
- Titres (`h1`, `h2`, `h3`) → `--font-titres` (Space Grotesk)
- Texte courant → `--font-texte` (Inter)
- Valeurs numériques, formules, code → `--font-valeurs` (JetBrains Mono)

Police à charger via Google Fonts ou self-hosted dans le `<head>` du layout
(pas encore fait — à faire par `dev-frontend` à la prochaine itération, les
polices système servent de repli pour l'instant).

## Composants prêts à l'emploi (classes CSS)
| Classe | Usage |
|---|---|
| `.pastille-niveau.debutant/.intermediaire/.avance` | Pastille 🟢🟠🔴 à côté d'un titre de fiche |
| `.carte-fiche` | Carte cliquable dans la liste des fiches |
| `.encadre-formules` | Bloc bleu clair pour les formules clés d'une fiche |
| `.encadre-securite` | Bloc rouge clair, toujours visible, pour les avertissements sécurité |

## Règle pour dev-frontend
Toujours réutiliser ces classes/variables. Ne pas écrire de couleur ou de
police en dur dans un composant — passer par une variable CSS. Si un besoin
n'est pas couvert, l'ajouter ici d'abord, puis l'utiliser.
