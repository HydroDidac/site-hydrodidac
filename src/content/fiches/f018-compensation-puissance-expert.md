---
code: "F018"
titre: "Compensation de puissance (hyperbole de puissance)"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Un système qui limite le produit pression × débit d'une pompe à cylindrée variable pour ne jamais dépasser la puissance que peut fournir son moteur d'entraînement."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.10"
---

> Aucun PDF dédié spécifiquement à la compensation de puissance n'a été
> trouvé dans `sources/pdf-cours/` — fiche basée sur les connaissances
> générales, cohérente avec le principe du compensateur de pression déjà
> sourcé (`pompe piston PC, LS, CC.pdf`, fiche 02.09) et la formule de
> puissance hydraulique (fiche 01.03, sourcée).

## 1. Définition en une phrase
La compensation de puissance limite automatiquement le produit pression × débit d'une pompe à cylindrée variable, pour ne jamais dépasser la puissance maximale que peut fournir le moteur d'entraînement (thermique ou électrique), quelle que soit la combinaison pression/débit demandée.

## 2. Principe de fonctionnement
La compensation à pression constante (fiche 02.09) limite uniquement la pression maximale, sans tenir compte du débit ; or la puissance consommée par la pompe est le produit pression × débit (P = p×Q/600 en unités usuelles). Si la pompe peut fournir un débit important même à haute pression, elle peut dépasser la puissance maximale admissible par son moteur d'entraînement, provoquant un calage moteur ou une surcharge. La compensation de puissance résout ce problème en pilotant la cylindrée de la pompe selon une courbe hyperbolique p×Q = constante : à haute pression, la cylindrée (donc le débit) est automatiquement réduite, et inversement à basse pression la cylindrée peut être maximale. Le point de fonctionnement de la pompe reste ainsi toujours sous (ou sur) cette hyperbole de puissance constante, garantissant que la puissance absorbée ne dépasse jamais la capacité du moteur d'entraînement.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique — représentation graphique caractéristique : un repère pression (axe horizontal) / débit (axe vertical), avec une courbe hyperbolique p×Q = constante délimitant la zone de fonctionnement admissible ; le point de fonctionnement de la pompe doit toujours rester sous cette courbe.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Remarques |
|----------|---------|--------|------------------------|
| Puissance maximale admissible | P_max = (p × Q) / 600 = constante | P en kW, p en bar, Q en L/min | Hyperbole de puissance : à p donné, Q maximal admissible = 600 × P_max / p |
| Débit maximal à une pression donnée | Q_max(p) = 600 × P_max / p | Q en L/min, p en bar | Plus la pression augmente, plus le débit maximal autorisé diminue |

## 5. Paramètres importants
- Puissance maximale du moteur d'entraînement (thermique ou électrique) — référence de la courbe de compensation
- Réglage de l'hyperbole de puissance, généralement effectué en usine ou par un spécialiste, distinct du simple réglage de pression maximale
- Compatible et souvent combinée avec d'autres régulations (pression constante, Load Sensing) pour une protection à plusieurs niveaux

## 6. Exemples concrets (terrain)
Une pompe entraînée par un moteur thermique de 100 kW maximum : sans compensation de puissance, la pompe pourrait théoriquement délivrer 300 bar et 200 L/min simultanément, soit 100 kW — mais si la charge ne nécessite que 100 bar, la même pompe pourrait délivrer jusqu'à 600 L/min, soit 100 kW également (sur la même hyperbole), ce qui caractérise bien le principe : quelle que soit la combinaison pression/débit, la puissance ne dépasse jamais la limite du moteur.

## 7. Points de réglage / vigilance
- Ne jamais confondre le réglage de l'hyperbole de puissance avec le simple réglage de pression maximale (compensateur pression constante, fiche 02.09) — ce sont deux protections différentes et complémentaires
- Vérifier que le réglage de l'hyperbole correspond bien à la puissance réelle disponible du moteur d'entraînement, notamment après un remplacement de moteur
- Sur les engins mobiles, anticiper que la puissance disponible varie avec le régime moteur — certains systèmes adaptent dynamiquement l'hyperbole selon le régime réel

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Calage du moteur d'entraînement en charge | Absence ou mauvais réglage de la compensation de puissance |
| Pompe qui ne délivre jamais sa pleine cylindrée même à basse pression | Hyperbole de puissance mal réglée, trop restrictive |

## 9. Liens avec d'autres composants
- Compensateur de pression — pompe à cylindrée variable (fiche 02.09) — régulation de base complémentaire
- Load sensing — régulation de débit à la demande (fiche 02.08)
- Puissance hydraulique — P = p × Q (fiche 01.03) — formule fondamentale sur laquelle repose cette régulation
