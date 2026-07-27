---
code: "F027"
titre: "Temps de réponse et dynamique des distributeurs"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Le diagramme de Bode et la bande passante : comment caractériser la rapidité avec laquelle un distributeur proportionnel ou une servovalve suit réellement sa consigne."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.07"
---

> Source : `sources/pdf-cours/PROPORTIONNELLE.pdf` (leçon 2, notions de
> réponse en fréquence et diagramme de Bode) — concepts repris et appliqués
> de façon plus générale aux distributeurs.

## 1. Définition en une phrase
Le temps de réponse d'un distributeur caractérise la rapidité avec laquelle son tiroir atteint la position demandée après un changement de commande, paramètre déterminant pour la qualité d'un asservissement de vitesse ou de position.

## 2. Principe de fonctionnement
Pour un distributeur TOR, le temps de réponse se mesure simplement par le temps de commutation (temps entre l'ordre de commande et l'ouverture/fermeture complète). Pour un distributeur proportionnel ou une servovalve, on caractérise la dynamique par la **réponse en fréquence** : on applique un signal d'entrée sinusoïdal et on observe comment le signal de sortie (déplacement du tiroir) suit ce signal à mesure que sa fréquence augmente. À basse fréquence, la sortie suit fidèlement l'entrée. Au-delà d'une certaine fréquence, l'amplitude de la sortie diminue et un déphasage apparaît : le tiroir « prend du retard » sur la consigne, jusqu'à ne plus pouvoir suivre du tout. Le diagramme de Bode représente ce comportement : rapport d'amplitude (en dB) et déphasage en fonction de la fréquence. Une servovalve a une bande passante (plage de fréquences correctement suivies) bien plus large qu'une valve proportionnelle classique.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique — représentation graphique caractéristique : diagramme de Bode avec deux courbes (amplitude en dB, déphasage en degrés) en fonction de la fréquence en Hz, montrant la chute de performance au-delà d'une fréquence de coupure.

## 4. Formules et calculs clés

| Grandeur | Formule / Principe | Remarques |
|----------|---------|------------------------|
| Rapport d'amplitude | dB = 20 × log(Amplitude sortie / Amplitude entrée) | Indique la fidélité de la réponse à une fréquence donnée |
| Bande passante | Plage de fréquences où le rapport d'amplitude reste proche de 0 dB | Plus large = distributeur plus dynamique |
| Déphasage | Retard angulaire entre le signal de sortie et le signal d'entrée, en degrés | Augmente avec la fréquence jusqu'à inversion complète |

## 5. Paramètres importants
- Fréquence des variations de consigne réellement attendues dans l'application — à comparer à la bande passante du distributeur choisi
- Type de distributeur (TOR, proportionnel, servovalve) — déterminant de premier ordre sur la dynamique disponible
- Inertie de la charge entraînée — un distributeur très réactif perd son intérêt si la charge mécanique elle-même répond lentement

## 6. Exemples concrets (terrain)
Sur un système qui doit suivre une consigne de position variant plusieurs fois par seconde avec précision (asservissement dynamique), un distributeur proportionnel classique (bande passante de quelques Hz) ne suivra pas fidèlement la consigne au-delà d'une certaine fréquence — il faudra alors recourir à une servovalve, dont la bande passante est bien supérieure.

## 7. Points de réglage / vigilance
- Toujours vérifier la bande passante du distributeur (donnée constructeur) par rapport à la dynamique réellement requise par l'application avant de la choisir
- Ne pas surestimer les besoins : un distributeur trop dynamique pour l'application n'apporte rien et coûte plus cher
- Tenir compte de l'inertie de la charge mécanique entraînée, qui peut limiter la dynamique utile même avec un distributeur très réactif

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Asservissement instable ou imprécis à haute vitesse de commande | Distributeur sous-dimensionné en bande passante par rapport à l'application |
| Surcoût sans bénéfice perceptible | Servovalve choisie pour une application qui n'exigeait qu'un distributeur proportionnel classique |

## 9. Liens avec d'autres composants
- Distributeur proportionnel — contrôle en continu (fiche 03.05)
- Distributeur servo-valve — précision et dynamique (fiche 03.06)
- Asservissement servohydraulique — position et force (fiche 12.08)
