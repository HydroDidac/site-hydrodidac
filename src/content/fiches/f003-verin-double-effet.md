---
code: "F003"
titre: "Vérin double effet — force, vitesse, surface annulaire"
niveau: "debutant"
module: "Vérins hydrauliques"
resume: "Le vérin double effet est poussé ET tiré par l'huile : pas besoin de ressort. Comprendre pourquoi il pousse plus fort qu'il ne tire, mais tire plus vite."
tempsLecture: 4
ficheLiees: ["F005", "F004"]
datePublication: 2026-06-28
---

## Principe en 3 lignes
Un vérin double effet est poussé ET tiré par l'huile sous pression : aucun ressort de rappel n'est nécessaire. L'huile arrive alternativement côté fond (sortie de tige) ou côté tige (rentrée), via un distributeur.

## Formules clés
- `Force = Pression × Surface`
- Surface côté fond (pleine) : `S₁ = π·D²/4`
- Surface côté tige (annulaire, plus petite) : `S₂ = π·(D² − d²)/4`

## Fonctionnement détaillé
Imaginez une seringue avec deux entrées : pousser l'eau d'un côté fait avancer le piston, pousser de l'autre le fait reculer. À l'arrière du piston, toute la surface ronde est disponible pour pousser ; à l'avant, la tige prend de la place, donc la surface utile est plus petite (surface annulaire). Conséquence : **le vérin pousse plus fort qu'il ne tire, mais il tire plus vite qu'il ne pousse** (pour un même débit d'huile).

**Exemple terrain** : à 200 bar sur 50 cm², on obtient environ 10 tonnes de force en poussée.

## Pannes & diagnostic
| Symptôme | Cause probable |
|---|---|
| Vitesse de rétraction excessive et incontrôlée | Charge motrice (la charge "tire" le vérin), cavitation |
| Force insuffisante en extension | Fuite interne (joint de piston usé) |
| Choc en fin de course | Absence ou défaillance d'amortisseur |

## ⚠️ Sécurité
Ne jamais dépasser la pression maximale indiquée sur la plaque du vérin. Sur les grandes courses, vérifier le risque de flambage de la tige (comme une canne à pêche qui plie si on appuie trop fort sur un bâton trop long et trop fin).

## À retenir
- Le vérin double effet n'a pas besoin de ressort : l'huile fait tout le travail dans les deux sens.
- Force en poussée ≠ force en traction — ne jamais confondre les deux.
- Toujours prévoir un amortissement de fin de course sur les applications rapides.

## Fiches liées
- F004 — Vérin simple effet et retour par ressort
- F005 — Flambage des vérins
