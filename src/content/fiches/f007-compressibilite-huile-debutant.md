---
code: "F007"
titre: "Compressibilité de l'huile et module de compressibilité"
niveau: "debutant"
module: "Notions fondamentales"
resume: "L'huile n'est pas parfaitement incompressible : sur de grands volumes ou en présence d'air, ce léger tassement crée des retards, des oscillations et des surpressions."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.05"
---

## 1. Définition en une phrase
La compressibilité, c'est le fait que l'huile se tasse très légèrement quand on augmente la pression — un peu, mais pas autant qu'un gaz.

## 2. Principe de fonctionnement
On dit souvent que l'huile hydraulique « ne se compresse pas », et c'est vrai en première approximation : contrairement à l'air, son volume varie très peu sous l'effet de la pression. Mais « très peu » n'est pas « zéro » : sur de grands volumes d'huile (longs tuyaux, gros vérins), ce léger tassement peut suffire à créer un petit délai avant que le mouvement commence vraiment, ou à provoquer des petits chocs si la pression change brutalement.

Et ce phénomène s'aggrave beaucoup si de l'air se retrouve mélangé à l'huile : l'air, contrairement à l'huile, se compresse facilement (comme dans une pompe à vélo), donc même une petite quantité d'air rend tout le système beaucoup plus « élastique » qu'il ne devrait l'être.

## 3. Schéma / Symbole ISO
Un cylindre fermé rempli d'huile, sur lequel on applique une pression : le volume diminue très légèrement (quelques millilitres sur plusieurs litres).

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **plus on augmente la pression, plus il faut un (tout petit) peu plus d'huile pour la maintenir**, et cet effet est démultiplié si de l'air est présent dans le circuit.

Exemple donné par les experts en hydraulique : pour faire monter la pression de 0 à 200 bar dans un tuyau de 3 mètres, il faut environ 5 millilitres d'huile supplémentaires juste pour compenser ce tassement.

## 5. Paramètres importants
- La présence d'air dans l'huile : c'est le facteur qui aggrave le plus ce phénomène
- Le volume total d'huile sous pression dans le circuit (plus il y en a, plus l'effet est sensible)
- La température : l'huile se dilate légèrement quand elle chauffe, exactement comme elle se tasse légèrement sous la pression

## 6. Exemples concrets (terrain)
Sur une machine où la précision compte (positionnement fin, asservissement), un circuit avec beaucoup d'air dans l'huile ou de longs flexibles peut devenir « mou » : on a l'impression que le vérin répond avec un léger retard ou un peu d'élasticité, exactement comme un ressort, alors que techniquement ce sont de l'huile et de l'air qui se compressent légèrement avant de transmettre tout l'effort.

## 7. Points de réglage / vigilance
- Bien dégazer l'huile (laisser sortir l'air) lors du remplissage et de l'entretien d'un circuit
- Vérifier l'étanchéité à l'aspiration de la pompe : un défaut peut faire entrer de l'air sans qu'on s'en rende compte
- Sur un vérin bloqué dans un circuit fermé, surveiller que la dilatation de l'huile avec la chaleur ne fasse pas monter la pression dangereusement

## 8. Erreurs fréquentes
- Croire que l'huile ne se compresse jamais, et négliger ce paramètre sur les applications qui demandent de la précision
- Sous-estimer l'effet de l'air entraîné, qui peut rendre un circuit beaucoup plus « élastique » que prévu
- Oublier qu'un circuit fermé (vérin bloqué) peut monter en pression tout seul simplement parce que l'huile chauffe et se dilate

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Compressibilité | La capacité d'un fluide à voir son volume diminuer sous la pression |
| Module de compressibilité | Le chiffre qui mesure à quel point l'huile résiste à se tasser (plus il est grand, moins l'huile se tasse) |
| Air entraîné | De l'air mélangé accidentellement à l'huile, qui rend le système beaucoup plus compressible |
| Coup de bélier | Un choc brutal de pression dans une conduite, lié à un arrêt ou une variation très rapide du débit |
| Dilatation thermique | L'augmentation de volume d'un liquide quand il chauffe |

## Pour aller plus loin
Voir la fiche 01.01 (loi de Pascal) qui suppose un fluide parfaitement incompressible — cette fiche en montre les limites pratiques, et la fiche sur la désaération de l'huile pour savoir comment limiter la présence d'air.
