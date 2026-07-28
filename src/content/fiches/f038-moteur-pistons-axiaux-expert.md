---
code: "F038"
titre: "Moteur à pistons axiaux"
niveau: "avance"
module: "Moteurs hydrauliques"
resume: "Le moteur hydraulique le plus compact et le plus performant en pression, utilisé partout où l'on veut beaucoup de puissance dans peu d'encombrement."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "05.02"
---

> Sources : `sources/pdf-cours/NL-17-Moteur-lent-rapide.pdf` (moteurs rapides,
> pressions, formules) · `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf`
> (§1.2, §1.3.4 — architectures axe droit / axe brisé).

## 1. Définition en une phrase
Le moteur à pistons axiaux est un moteur hydraulique de la famille des moteurs *rapides*, dans lequel l'huile sous pression pousse des pistons disposés parallèlement à l'arbre (ou selon un axe brisé) pour produire la rotation — c'est la technologie reine des hautes pressions et des puissances massiques élevées.

## 2. Principe de fonctionnement
Les pistons coulissent dans un barillet et s'appuient, via patins ou rotules, sur un plan incliné. L'huile sous pression pousse les pistons ; la composante tangentielle de l'effort sur le plan incliné fait tourner l'ensemble. La glace de distribution met alternativement chaque piston en communication avec la haute pression (poussée motrice) puis avec le retour (refoulement de l'huile détendue). Deux architectures :

- **Axe droit (pistons parallèles)** : le barillet est dans l'axe de l'arbre, les pistons s'appuient sur un plateau incliné. Existe en cylindrée fixe ou variable.
- **Axe brisé** : le barillet est incliné par rapport à l'arbre ; les pistons font office de cardan et entraînent directement le plateau d'arbre. Cette architecture est surtout utilisée en **moteur**, notamment pour les roues des engins mobiles. Le palier d'arbre à rouleaux coniques accepte des charges axiales et radiales importantes.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : cercle avec triangle plein pointé vers l'intérieur ; deux triangles pour les moteurs réversibles. La coupe montre : arbre, palier à rouleaux coniques, plateau ou tourillon, pistons avec patins-rotules, barillet, glace de distribution.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Couple théorique | M = (Cyl × Δp) / 628 | M en daNm, Cyl en cm³/tr, Δp en bar | Hors rendement (source NL-17) |
| Vitesse théorique | N = (Q × 1000) / Cyl | N en tr/min, Q en L/min, Cyl en cm³/tr | Hors fuites internes |
| Pression maxi | jusqu'à 420 bar | bar | Versions à pistons (source NL-17) — valeur exacte selon constructeur |
| Vitesse maxi | jusqu'à ~10 000 tr/min | tr/min | Pour certains moteurs rapides de petite cylindrée |

## 5. Paramètres importants
- Cylindrée : de quelques cm³/tr au litre/tour
- Pression de service élevée (MP & HP, jusqu'à 420 bar) → couples importants malgré des cylindrées modérées
- Puissance massique très élevée : c'est la caractéristique essentielle de cette famille
- Rendements et durée de vie importants (barillet/glace rodés, jeux fins) — en contrepartie, sensibilité à la pollution de l'huile supérieure aux moteurs à engrenages (information issue des connaissances générales)

## 6. Exemples concrets (terrain)
Moteur à axe brisé de 55 cm³/tr sous Δp = 350 bar :
- Couple théorique : M = 55 × 350 / 628 ≈ 30,7 daNm ≈ 307 Nm
- À 80 L/min : N = 80 × 1000 / 55 ≈ 1455 tr/min

Applications : entraînement de roues d'engins mobiles (axe brisé en cylindrée fixe ou variable), treuils, tourelles, ventilateurs, générateurs embarqués — partout où l'on veut beaucoup de puissance dans un encombrement réduit.

## 7. Points de réglage / vigilance
- Respecter la propreté d'huile exigée par le constructeur : les jeux barillet/glace sont fins
- Raccorder impérativement le drain de carter et respecter la pression de carter maxi (connaissance générale — vérifier la documentation)
- En charge motrice (treuil, translation en pente), le moteur ne retient pas la charge : prévoir des freins mécaniques statiques, voire dynamiques (source NL-17)
- Valider les couples de vitesse/cylindrée admissibles sur la documentation constructeur

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Usure prématurée glace/barillet | Pollution de l'huile au-delà de la classe ISO 4406 requise |
| Dérive de vitesse à chaud | Augmentation des fuites internes (baisse de η_vol avec la viscosité) |
| Charge qui dévire à l'arrêt | Absence de frein mécanique — un moteur hydraulique fuit toujours un peu et ne fait pas fonction de frein |
| Destruction du joint d'arbre | Drain non raccordé ou sous-dimensionné |

## 9. Liens avec d'autres composants
- Pompe à pistons axiaux (fiche 02.04) — même mécanique en fonctionnement générateur
- Moteur à cylindrée variable (fiche 05.06) — version à cylindrée variable de cette technologie
- Moteur à pistons radiaux (fiche 05.03) — l'alternative pour les très forts couples à basse vitesse
- Calcul du couple et de la vitesse (fiche 05.05) — application des formules avec rendements
