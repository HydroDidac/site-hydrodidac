---
code: "F022"
titre: "Lire un schéma de distributeur (3/2, 4/2, 4/3…)"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Compter les voies, les positions, suivre les flèches : la méthode pour comprendre comment l'huile circule dans chaque position d'un distributeur à partir de son symbole ISO."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.02"
---

> Source : `sources/pdf-cours/NL-49-lecture-schema-hydraulique.pdf` —
> méthode de lecture appliquée à un circuit avec distributeur, reprise pour
> la partie méthodologique.

## 1. Définition en une phrase
Lire un schéma de distributeur consiste à identifier le nombre de voies (orifices), le nombre de positions, le type de centre, et le mode de commande, pour comprendre comment le fluide circulera selon chaque position du tiroir.

## 2. Principe de fonctionnement
La notation X/Y indique toujours : X = nombre de voies (orifices de raccordement), Y = nombre de positions. Un 3/2 a 3 voies (souvent P, A, T) et 2 positions ; un 4/3 a 4 voies (P, T, A, B) et 3 positions (généralement repos + deux positions actives). Pour lire le symbole, on examine chaque case (chaque position) séparément : les flèches indiquent le sens de connexion entre les voies dans cette position précise, les traits en T (perpendiculaires) indiquent une voie bloquée. La case du milieu (position de repos pour un distributeur à 3 positions) renseigne le type de centre (fiche 03.03), déterminant le comportement par défaut du circuit hors commande.

## 3. Schéma / Symbole ISO
Méthode de lecture systématique : 1) compter les rectangles juxtaposés (= nombre de positions) ; 2) repérer les lettres aux orifices (P, T, A, B, parfois X, Y pour le pilotage) ; 3) pour chaque position, suivre les flèches internes pour établir les connexions ; 4) identifier le mode de commande aux extrémités (ressorts, électroaimants, leviers, pilotage hydraulique/pneumatique).

## 4. Formules et calculs clés

| Élément du symbole | Signification |
|---|---|
| Notation X/Y | X voies, Y positions |
| Flèche droite entre deux lettres | Connexion directe ouverte entre ces deux voies dans cette position |
| Trait en T (perpendiculaire à la voie) | Voie fermée/bloquée dans cette position |
| Ressort à une extrémité | Rappel automatique vers cette position en l'absence de commande |
| Triangle plein avec flèche diagonale | Solénoïde proportionnel (vs carré simple = électroaimant TOR) |

## 5. Paramètres importants
- Reconnaître la position de repos (généralement celle maintenue par les ressorts, dessinée au centre)
- Identifier si le distributeur a un pilotage externe (orifices X, Y supplémentaires) ou un drainage externe
- Repérer le sens des flèches : un schéma mal interprété peut inverser le sens de mouvement prévu lors du câblage

## 6. Exemples concrets (terrain)
Sur un schéma de distributeur 4/3 à centre fermé : en position repos, les quatre voies P, T, A, B sont représentées par des traits en T (toutes bloquées) ; en activant l'électroaimant gauche, une flèche connecte P→A et une autre B→T ; en activant l'électroaimant droit, l'inverse se produit (P→B, A→T) — ce qui permet de prévoir exactement le sens de sortie/rentrée d'un vérin raccordé sur A et B.

## 7. Points de réglage / vigilance
- Toujours vérifier la cohérence entre le symbole lu et le câblage réel des électroaimants avant la mise en service
- Ne pas confondre la position « repos » (ressorts) avec une position « maintenue » (pas de rappel automatique)
- Sur les schémas complexes, suivre une seule position à la fois pour éviter les erreurs de lecture

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Mouvement inversé par rapport à ce qui était prévu | Mauvaise lecture du sens des flèches dans le symbole, ou erreur de câblage A/B |
| Mauvaise interprétation du comportement à l'arrêt | Confusion entre les différents types de centre (fiche 03.03) |

## 9. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01)
- Les centres de distributeur (fiche 03.03)
- Commandes de distributeur (fiche 03.04)
