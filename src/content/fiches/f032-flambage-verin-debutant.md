---
code: "F032"
titre: "Flambage des vérins — calcul et choix de tige"
niveau: "debutant"
module: "Vérins hydrauliques"
resume: "Une tige de vérin trop longue et trop fine peut plier brutalement sous la poussée : la théorie d'Euler permet de calculer la charge critique et de choisir le bon diamètre."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.04"
---

## 1. Définition en une phrase
Le flambage, c'est quand une tige de vérin trop longue et trop fine se plie brusquement sur le côté au lieu de résister tout droit à la poussée — un peu comme une règle en plastique qu'on pousse trop fort par les deux bouts.

## 2. Principe de fonctionnement
Prenez une paille en plastique et essayez de la comprimer entre vos deux mains : à un moment, elle ne se contente plus de se raccourcir, elle plie brutalement sur le côté. C'est exactement ce qui peut arriver à la tige d'un vérin si elle est trop longue par rapport à son diamètre et qu'on lui demande de pousser trop fort. Plus la tige est longue et fine, plus ce risque est grand. Plus elle est courte et épaisse, plus elle résiste.

## 3. Schéma / Symbole ISO
Il n'y a pas de symbole hydraulique particulier pour le flambage — on le représente simplement par une tige droite qui se courbe en arc de cercle sous l'effet d'une poussée trop forte.

## 4. Formules et calculs clés
Pas besoin de formule pour comprendre l'essentiel : le risque de flambage dépend de trois choses :
- **La longueur de la tige sortie** : plus c'est long, plus c'est risqué
- **Le diamètre de la tige** : plus c'est fin, plus c'est risqué (et l'effet est très important : doubler le diamètre rend la tige beaucoup plus résistante, pas juste deux fois plus)
- **La façon dont le vérin est fixé** : un vérin bien fixé aux deux bouts résiste mieux qu'un vérin fixé d'un seul côté

Les bureaux d'études utilisent une formule (dite « formule d'Euler ») pour calculer la force maximale que la tige peut supporter avant de plier, et on prend toujours une marge de sécurité confortable (la charge réelle doit être nettement inférieure à cette limite calculée).

## 5. Paramètres importants
- La longueur maximale de la tige une fois complètement sortie (c'est la position la plus fragile)
- Le diamètre de la tige
- Le type de fixation aux deux extrémités
- Le matériau de la tige (généralement acier)

## 6. Exemples concrets (terrain)
Un vérin de vérinage de structure avec une grande course (par exemple 2 mètres de tige sortie) doit avoir une tige bien plus épaisse qu'un petit vérin de manutention de 20 cm de course, même si la force demandée est identique — c'est uniquement à cause du risque de flambage.

## 7. Points de réglage / vigilance
- Toujours vérifier le risque de flambage quand la tige est longue, pas seulement la force nécessaire
- Vérifier que les fixations sont bien faites comme prévu par le fabricant (mal fixé = plus de risque)
- Sur les vérins très longs, on ajoute parfois un guide intermédiaire pour soutenir la tige

## 8. Erreurs fréquentes
- Choisir un vérin uniquement en fonction de la force nécessaire, sans vérifier le flambage pour les grandes courses
- Mal fixer le vérin, ce qui le rend plus fragile que prévu par le calcul
- Oublier de vérifier le risque sur chaque étage d'un vérin télescopique

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Flambage | Flexion brutale et latérale d'une tige sous une trop forte poussée |
| Élancement | Rapport entre la longueur de la tige et son diamètre |
| Coefficient de sécurité | Marge prise entre la force maximale calculée et la force réellement utilisée |
| Fixation articulée | Fixation qui permet une petite rotation, comme une charnière |
| Encastrement | Fixation rigide qui empêche toute rotation |

## Pour aller plus loin
Voir la fiche 04.01 sur le vérin double effet pour comprendre les efforts en jeu, et la fiche 04.03 sur le vérin télescopique, particulièrement concerné par ce risque sur son dernier étage.
