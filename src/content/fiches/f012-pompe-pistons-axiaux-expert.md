---
code: "F012"
titre: "Pompe à pistons axiaux — plateau incliné"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "L'inclinaison d'un plateau commande la course des pistons, donc la cylindrée : le principe qui rend possibles les pompes à débit variable et les meilleurs rendements du marché."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.04"
---

> Source : `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf` (§1.3.4) et
> `pompe piston PC, LS, CC.pdf` (régulation à pression constante et Load
> Sensing, repris en détail en fiches 01.08 et 01.09).

## 1. Définition en une phrase
La pompe à pistons axiaux (plateau incliné) utilise un barillet de pistons parallèles à l'axe de rotation, dont la course est imposée par l'inclinaison d'un plateau fixe contre lequel les pistons s'appuient via des patins articulés.

## 2. Principe de fonctionnement
Le barillet, entraîné en rotation par l'arbre, porte plusieurs pistons logés axialement. Chaque piston s'appuie, via une tête articulée, sur un plateau dont l'inclinaison définit la course du piston au cours de la rotation. Pendant la première moitié de la rotation, les chambres des pistons communiquent avec l'aspiration via la glace de distribution (pièce fixe assurant l'interface étanche entre le barillet tournant et le corps fixe) ; pendant la seconde moitié, elles communiquent avec le refoulement. L'inclinaison du plateau détermine directement la cylindrée : à inclinaison nulle, la cylindrée est nulle (pas de course des pistons) ; plus l'inclinaison est grande, plus la course — et donc la cylindrée — est importante. C'est ce principe qui permet de réaliser des pompes à cylindrée variable, en pilotant l'inclinaison du plateau via un compensateur hydraulique (voir fiches 01.08 et 01.09).

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : pour une cylindrée fixe, cercle + triangle plein ; pour une cylindrée variable, le même symbole est complété d'une flèche diagonale traversant le triangle. Coupe interne caractéristique : arbre, barillet, pistons avec patins articulés en appui sur le plateau, glace de distribution, et pour les versions à cylindrée variable, un mécanisme de compensateur agissant sur l'inclinaison du plateau.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min | Cyl dépend de l'inclinaison du plateau pour les versions variables |
| Débit réel | Q_réel = Q_th × η_vol | η_vol typiquement 0,92 à 0,97 selon la qualité de fabrication | Rendement volumétrique élevé, parmi les meilleurs de toutes les technologies de pompe |

## 5. Paramètres importants
- Inclinaison du plateau — paramètre déterminant de la cylindrée, fixe ou variable selon le modèle
- Plage de pression : moyenne à haute pression (MP & HP), supérieure aux engrenages et palettes
- Coût élevé, mais durée de vie très bonne — technologie privilégiée pour les applications industrielles exigeantes et les engins mobiles haut de gamme
- Existe en version « axe droit » (plateau incliné, la plus courante) et « axe brisé » (barillet lui-même incliné par rapport à l'arbre, plutôt utilisée en moteur)

## 6. Exemples concrets (terrain)
Une pompe à pistons axiaux à cylindrée variable, pilotée par un compensateur de pression constante (fiche 02.09), maintient automatiquement sa pression de service en réduisant son inclinaison de plateau (donc sa cylindrée) dès que la pression de tarage est atteinte — elle ne débite alors plus que pour compenser les fuites internes, ce qui limite fortement la puissance dissipée inutilement par rapport à une pompe à cylindrée fixe couplée à un limiteur de pression classique.

## 7. Points de réglage / vigilance
- Sur les versions à cylindrée variable, bien distinguer le réglage de la cylindrée maximale (vis mécanique limitant l'inclinaison maxi du plateau) du réglage de la pression maximale (tarage du ressort du compensateur)
- Respecter scrupuleusement les préconisations de filtration : cette technologie de haute précision est plus sensible à la pollution que les engrenages ou les palettes
- Vérifier le drainage du carter (évacuation des fuites internes vers le réservoir), indispensable pour éviter une montée en pression du carter

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Pompe qui n'atteint pas sa pression nominale | Inclinaison maxi du plateau mal réglée, ou compensateur défaillant |
| Échauffement excessif et usure rapide | Pollution de l'huile au-delà des classes de propreté admissibles pour cette technologie de précision |
| Cylindrée qui ne varie plus | Grippage du mécanisme de compensateur ou du plateau |

## 9. Liens avec d'autres composants
- Compensateur de pression — pompe à cylindrée variable (fiche 02.09)
- Load sensing — régulation de débit à la demande (fiche 02.08)
- Compensation de puissance (fiche 02.10)
- Rendements volumétrique, mécanique et global (fiche 02.07)
