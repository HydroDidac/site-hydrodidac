---
code: "F002"
titre: "Loi de Pascal — transmission de pression"
niveau: "debutant"
module: "Notions fondamentales"
resume: "La loi de Pascal explique pourquoi une petite force sur un petit piston peut en soulever une énorme à l'autre bout d'un circuit hydraulique."
tempsLecture: 3
ficheLiees: ["F005", "F012"]
datePublication: 2026-06-28
---

## Principe en 3 lignes
Dans un fluide enfermé, une pression appliquée en un point se retrouve identique partout dans le circuit. Comme la force dépend de la surface du piston (Force = Pression × Surface), un gros piston développe une force bien plus grande qu'un petit, pour la même pression.

## Formules clés
- `Pression = Force ÷ Surface`
- `F₁/S₁ = F₂/S₂` (même pression entre deux pistons reliés)
- `F₂ = F₁ × (S₂/S₁)` — multiplication de force

## Fonctionnement détaillé
Imaginez un matelas à eau : appuyer d'un côté fait pousser l'eau partout à l'intérieur, pas seulement en face de la main. C'est le même principe dans un circuit hydraulique : un petit piston (commande) transmet sa pression à un grand piston (puissance), qui développe une force bien plus importante — sans qu'aucune énergie ne soit créée : le petit piston doit se déplacer beaucoup plus que le grand pour compenser.

**Exemple terrain** : avec 25 bar de pression, un piston de 2 cm² donne 50 daN de force ; un piston de 100 cm² (50× plus grand) donne 50× plus de force, soit environ 2,5 tonnes.

## Pannes & diagnostic
| Symptôme | Cause probable |
|---|---|
| Force de sortie plus faible que prévu | Fuite interne, perte de pression dans le circuit |
| Délai entre commande et mouvement | Gros volume d'huile à déplacer, conduites trop longues |

## ⚠️ Sécurité
La multiplication de force peut générer une pression et une force considérables : un limiteur de pression (fiche liée) doit toujours protéger le circuit contre la surpression.

## À retenir
- La pression est la même partout dans un fluide enfermé ; seule la taille du piston change la force obtenue.
- Rien n'est gratuit : le petit piston se déplace plus que le grand (conservation du volume).
- Ne pas confondre avec l'équation de Bernoulli, qui s'applique aux fluides en mouvement.

## Fiches liées
- F005 — Limiteur de pression
- F012 — Intensificateur de pression
