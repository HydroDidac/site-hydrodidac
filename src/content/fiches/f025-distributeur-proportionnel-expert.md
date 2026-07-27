---
code: "F025"
titre: "Distributeur proportionnel — contrôle en continu"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Un solénoïde dont la force est proportionnelle au courant appliqué : le distributeur qui remplace un réglage tout-ou-rien par une variation continue du débit."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.05"
---

> Source : `sources/pdf-cours/PROPORTIONNELLE.pdf` (Sami Rekik, leçons 1, 2 et
> 5) et `111-distributeur proportionnel.pdf` — principe du solénoïde
> proportionnel, recouvrement de tiroir, et distributeur à commande directe.

## 1. Définition en une phrase
Le distributeur proportionnel transpose un signal électrique d'entrée modulé en continu (courant 0 à ~800-1500 mA) en un débit hydraulique de sortie qui lui est proportionnel, permettant un réglage continu de la vitesse au lieu d'un fonctionnement tout-ou-rien.

## 2. Principe de fonctionnement
À la différence d'un distributeur conventionnel (deux positions fixes commandées par électroaimants TOR), le distributeur proportionnel utilise un solénoïde à action proportionnelle dont la force (ou la position, selon le type) est rigoureusement proportionnelle au courant appliqué. Ce solénoïde déplace le tiroir progressivement, ouvrant des sections de passage variables grâce à des fentes de progressivité usinées sur le tiroir. Le **recouvrement du tiroir** (position des arêtes par rapport aux orifices au repos) détermine le comportement : recouvrement nul pour les asservissements de position, recouvrement positif (environ 20 % de la course) pour les asservissements de vitesse, recouvrement négatif (découvrement, 10-30 % de la largeur d'orifice) pour les asservissements de pression. Sur les versions les plus précises, un capteur de position (souvent de type LVDT) recopie en continu la position réelle du tiroir vers la carte électronique, fermant une boucle de régulation qui élimine les erreurs dues aux frottements et aux forces hydrodynamiques.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : comme un distributeur conventionnel mais avec un triangle représentant le solénoïde proportionnel (au lieu du symbole d'électroaimant TOR classique), et souvent un repère de capteur de position associé.

## 4. Formules et calculs clés

| Grandeur | Principe | Remarques |
|----------|---------|------------------------|
| Précision en boucle ouverte (sans capteur) | Hystérésis ≈ 5-6 %, reproductibilité ≈ 2-3 % | Précision du calibre, valable sans capteur de recopie |
| Précision en boucle fermée (avec capteur LVDT) | Hystérésis et reproductibilité < 1 % | Nettement meilleure grâce à l'asservissement de position du tiroir |
| Recouvrement positif (tiroir) | ≈ 20 % de la course totale du tiroir | Standard pour les distributeurs proportionnels à tiroirs |

## 5. Paramètres importants
- Type de recouvrement du tiroir (nul, positif, négatif) — à choisir selon l'application (position, vitesse, pression)
- Présence ou non d'un capteur de position (LVDT) — détermine la précision finale (boucle ouverte vs fermée)
- Plage de courant de commande (souvent 0-800 mA, jusqu'à 1500 mA selon exécution)
- Classe de propreté du fluide requise — plus exigeante que pour un distributeur conventionnel en raison des jeux fonctionnels réduits

## 6. Exemples concrets (terrain)
Sur une machine où la vitesse d'un vérin doit varier en continu selon les phases du cycle, un distributeur proportionnel remplace avantageusement plusieurs distributeurs TOR et régulateurs de débit combinés en hydraulique conventionnelle : un seul composant, piloté par une carte amplificatrice, permet d'obtenir des rampes d'accélération et de décélération progressives, réduisant les coups de bélier et les pics de pression lors des changements de vitesse.

## 7. Points de réglage / vigilance
- Lors du raccordement d'un capteur LVDT, toujours respecter la polarité (signal de retour opposé au signal de consigne), sous peine de voir le tiroir filer en position d'ouverture maximale de façon incontrôlée
- Surveiller la filtration : un calibre proportionnel a des jeux fonctionnels plus fins qu'un distributeur conventionnel (de l'ordre de 8 à 20 µm), donc plus sensible à la pollution
- Vérifier périodiquement les réglages de la carte amplificatrice (zéro, gain, rampes) qui peuvent dériver dans le temps

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Tiroir qui part en grand ouvert dès la mise sous tension | Inversion de polarité du signal de retour du capteur de position |
| Imprécision croissante dans le temps | Pollution du fluide affectant les jeux fonctionnels fins du tiroir |
| Pas de réponse à la consigne | Carte amplificatrice non alimentée/déverrouillée, ou rupture de câble vers le solénoïde ou le capteur |

## 9. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01) — base commune aux deux technologies
- Distributeur servo-valve — précision et dynamique (fiche 03.06) — technologie plus précise et plus rapide encore
- Norme ISO 4406 (fiche 10.01) — niveau de propreté requis, plus exigeant pour le proportionnel
