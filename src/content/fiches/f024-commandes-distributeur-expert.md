---
code: "F024"
titre: "Commandes : manuelle, pneumatique, électrique, hydraulique"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Électroaimant, commande mécanique ou fluidique : le choix du mode de commande d'un distributeur dépend de l'environnement d'installation, de la distance et de la précision recherchée."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.04"
---

> Source : `sources/pdf-cours/NL-45-commandes-de-distributeurs.pdf` (In
> Situ, newsletter n°45, juillet 2014) — typologie des commandes TOR et
> progressives reprise directement de cette source.

## 1. Définition en une phrase
La commande d'un distributeur est le moyen physique (mécanique, électrique ou fluidique) utilisé pour déplacer son tiroir, à choisir selon l'environnement d'installation, la précision requise et la fréquence d'utilisation.

## 2. Principe de fonctionnement
On distingue les commandes **TOR** (tout ou rien) et les commandes **progressives**. Parmi les commandes TOR : les électroaimants à bain d'huile (les plus répandus, en courant continu ou alternatif, avec des limites de fonctionnement dépendantes du type de tiroir, du débit, de la pression, de la contre-pression au retour et de la qualité de l'alimentation électrique) ; les commandes mécaniques (poussoirs à galet, manuelles, boutons rotatifs), limitées par la force du ressort de rappel, intéressantes en milieu explosif (ATEX) ou pour simplifier la partie électrique, mais avec un point faible : l'entrée de pollution possible par la liaison mécanique sur le tiroir ; les commandes fluidiques (pneumatique ou hydraulique), permettant une commande déportée, utiles en milieu explosif où l'automatisme est déjà géré pneumatiquement — il faut alors veiller à ce que la pression de pilotage retombe suffisamment bas et vite pour permettre au ressort de recentrer le tiroir. Les commandes **progressives** (levier, électroaimant proportionnel, pilotage hydraulique à pression variable) permettent un réglage continu plutôt qu'un basculement brutal.

## 3. Schéma / Symbole ISO
Symboles ISO 1219-1 aux extrémités du distributeur : carré simple = électroaimant TOR ; triangle avec flèche diagonale = solénoïde proportionnel ; trait avec galet = commande mécanique à poussoir ; flèche courbée = commande manuelle ; petit rectangle relié par pointillés = pilotage par pression (pneumatique ou hydraulique).

## 4. Paramètres importants
- Environnement d'installation : zone explosive (ATEX) → privilégier mécanique ou fluidique ; milieu marin → les distributeurs ATEX, plus étanches, résistent mieux au brouillard salin
- Distance entre l'opérateur et le distributeur : commande par levier nécessite la proximité (sauf tringlerie/câbles, au détriment de la sensibilité) ; commande électrique ou par pression variable permet l'éloignement
- Calibre du distributeur : pour les gros calibres à action pilotée, un manipulateur hydraulique (joystick) est préféré à un électroaimant à action directe qui consommerait trop de courant
- Précision recherchée : la commande électrique avec capteurs et carte de traitement permet les plus hauts niveaux de précision

## 5. Exemples concrets (terrain)
Sur les engins de travaux publics et de manutention, la commande par pression de pilotage variable issue d'un manipulateur hydraulique (joystick) est très répandue pour les distributeurs de gros calibre à action pilotée, car un électroaimant à action directe consommerait un courant trop important pour ce calibre. En milieu explosif (raffinerie, mine), la commande pneumatique ou mécanique ATEX est privilégiée pour éviter tout risque électrique.

## 6. Points de réglage / vigilance
- Sur une commande fluidique (pneumatique/hydraulique), vérifier que la pression de pilotage retombe assez bas et assez vite pour permettre le recentrage du tiroir par le ressort à l'arrêt de la consigne
- Sur une commande mécanique, surveiller l'entrée possible de pollution par la liaison externe sur le tiroir, point faible connu de cette technologie
- Adapter le type de tension (continu/alternatif) et la fréquence (50/60 Hz) de l'électroaimant aux caractéristiques du réseau électrique disponible

## 7. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Tiroir qui ne recentre pas correctement après pilotage pneumatique | Pression de pilotage qui ne retombe pas assez vite ou assez bas |
| Pollution interne progressive sur une commande mécanique | Défaut d'étanchéité au niveau de la liaison externe sur le tiroir |
| Surconsommation électrique sur un gros distributeur | Électroaimant à action directe utilisé sur un calibre qui aurait nécessité un pilotage |

## 8. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01)
- Distributeur proportionnel — contrôle en continu (fiche 03.05)
- Distributeur CETOP — montage sur embase (fiche 03.08)
