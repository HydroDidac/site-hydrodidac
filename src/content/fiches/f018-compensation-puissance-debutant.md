---
code: "F018"
titre: "Compensation de puissance (hyperbole de puissance)"
niveau: "debutant"
module: "Pompes hydrauliques"
resume: "Un système qui limite le produit pression × débit d'une pompe à cylindrée variable pour ne jamais dépasser la puissance que peut fournir son moteur d'entraînement."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.10"
---

## 1. Définition en une phrase
La compensation de puissance, c'est un système qui empêche une pompe de demander plus de puissance que ce que son moteur peut réellement fournir, quelle que soit la combinaison de pression et de débit utilisée.

## 2. Principe de fonctionnement
Rappelez-vous : Puissance = Pression × Débit. Le problème, c'est qu'une pompe pourrait techniquement fournir beaucoup de débit ET beaucoup de pression en même temps, ce qui demanderait trop de puissance au moteur qui l'entraîne — et le ferait caler, comme une voiture qui monte une pente trop raide avec la mauvaise vitesse engagée. La compensation de puissance ajuste automatiquement le débit de la pompe selon la pression : si la pression demandée est élevée, le débit est automatiquement réduit pour ne jamais dépasser ce que le moteur peut fournir ; si la pression est basse, la pompe peut au contraire donner beaucoup de débit.

## 3. Schéma / Symbole ISO
Un graphique avec la pression sur un axe et le débit sur l'autre, et une courbe qui montre la limite à ne jamais dépasser : plus la pression monte, plus le débit maximal autorisé descend.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : la pompe ne dépassera jamais une certaine puissance totale, peu importe comment elle se répartit entre pression et débit.

## 5. Exemples concrets (terrain)
Un moteur thermique limité à 100 kW : sa pompe peut délivrer beaucoup de pression avec peu de débit, ou peu de pression avec beaucoup de débit, mais jamais les deux en même temps au maximum — exactement comme un moteur de voiture ne peut pas rouler à la fois très vite et tracter une charge énorme en même temps.

## 6. Points de réglage / vigilance
- Ne pas confondre ce réglage avec le simple réglage de pression maximale, qui est différent
- Après un changement de moteur d'entraînement, vérifier que ce réglage correspond bien à la nouvelle puissance disponible

## 7. Erreurs fréquentes
- Caler le moteur d'une machine en lui demandant trop de pression et de débit en même temps, signe d'une mauvaise compensation de puissance
- Confondre ce réglage avec le réglage de pression maximale (compensateur classique)

## 8. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Hyperbole de puissance | La courbe qui limite la combinaison pression/débit autorisée |
| Calage moteur | Le fait qu'un moteur s'arrête car on lui demande trop d'effort |
| Compensation de puissance | Le système qui ajuste automatiquement le débit selon la pression pour protéger le moteur |

## 9. Pour aller plus loin
Voir la fiche 02.09 (compensateur de pression) et la fiche 01.03 (puissance hydraulique) pour bien comprendre la formule de base derrière ce système.
