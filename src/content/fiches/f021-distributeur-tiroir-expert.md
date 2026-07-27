---
code: "F021"
titre: "Distributeur à tiroir — principe et notations ISO"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Un tiroir coulissant qui dirige l'huile vers les voies P, T, A, B selon sa position : le composant central de toute distribution hydraulique, et sa notation X/Y."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.01"
---

> Source : `sources/pdf-cours/Distributeur à tiroir CETOP.pdf` — principe de
> fonctionnement d'un distributeur 4/3 illustré pas à pas (position centrale,
> commutation à gauche, commutation à droite).

## 1. Définition en une phrase
Le distributeur à tiroir est un composant qui dirige le débit hydraulique vers différentes voies (orifices P, T, A, B) en fonction de la position d'un tiroir coulissant, actionné par des électroaimants ou un autre mode de commande, et rappelé en position centrale par des ressorts.

## 2. Définition de la notation X/Y
La notation s'écrit "nombre de voies / nombre de positions". Exemple : un distributeur "4/3" a 4 voies (P = pression, T = retour réservoir, A et B = utilisations vers le récepteur) et 3 positions (centrale + deux positions de commutation). Le tiroir, en se déplaçant axialement à l'intérieur du corps, connecte ou isole ces voies selon sa position.

## 3. Principe de fonctionnement
Au repos, les ressorts de chaque côté du tiroir le maintiennent en position centrale : selon le type de centre (voir fiche 03.03), les voies P, T, A, B sont alors isolées, reliées au retour, ou bloquées. Lorsqu'un électroaimant est activé d'un côté, il déplace le tiroir, ouvrant une communication P→A et B→T (ou l'inverse selon le sens). Le tiroir comporte des gorges et des portées calibrées qui, en se déplaçant devant les orifices percés dans le corps, ouvrent ou ferment progressivement le passage du fluide selon sa position axiale exacte.

## 4. Schéma / Symbole ISO
Symbole ISO 1219-1 : rectangles juxtaposés représentant chaque position (3 cases pour un 4/3), avec des flèches à l'intérieur indiquant le sens des connexions internes pour chaque position, des traits en T pour les voies bloquées, et des ressorts/électroaimants représentés aux extrémités du symbole.

## 5. Paramètres importants
- Nombre de voies et de positions (notation X/Y) — détermine les fonctions possibles
- Type de centre (ouvert, fermé, tandem, flottant — fiche 03.03)
- Type de commande (manuelle, électrique, hydraulique, pneumatique — fiche 03.04)
- Débit nominal et perte de charge associée (donnée constructeur, fonction du calibre)

## 6. Exemples concrets (terrain)
Un distributeur 4/3 à centre fermé, au repos (ressorts centrés), isole P, T, A et B les uns des autres. Lorsque l'électroaimant gauche est activé, le tiroir se déplace et connecte P→B et A→T (selon le câblage du dessin de référence) : la tige du vérin associé sort ou rentre selon le branchement. Lorsque l'électroaimant droit est activé, le mouvement s'inverse (P→A, B→T).

## 7. Points de réglage / vigilance
- Vérifier la cohérence entre le calibre du distributeur (débit nominal) et le débit réel du circuit, sous peine de pertes de charge excessives
- Contrôler le bon retour en position centrale à la coupure de commande (ressorts non grippés)
- Surveiller l'étanchéité interne (jeu tiroir/corps), source de fuites internes avec l'usure

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Mouvement inversé par rapport à la commande | Erreur de câblage des électroaimants ou de raccordement A/B |
| Tiroir qui ne revient pas au centre | Ressort de rappel grippé, pollution dans les jeux internes |
| Pertes de charge excessives | Distributeur sous-dimensionné par rapport au débit réel du circuit |

## 9. Liens avec d'autres composants
- Lire un schéma de distributeur (fiche 03.02)
- Les centres de distributeur (fiche 03.03)
- Commandes : manuelle, pneumatique, électrique, hydraulique (fiche 03.04)
