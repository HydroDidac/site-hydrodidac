---
code: "F014"
titre: "Cylindrée, débit théorique et débit réel"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "La cylindrée fixe le volume déplacé par tour ; le débit réel, toujours inférieur au débit théorique à cause des fuites internes, est la valeur à utiliser pour dimensionner un circuit."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.06"
---

> Source : `sources/pdf-cours/cours-hydraulique-73-rendements.pdf` (notion de
> débit aspiré vs refoulé) et `PRINCIPES FONDAMENTAUX DE L'HYDR.pdf` (§3.4,
> définition générale du débit).

## 1. Définition en une phrase
La cylindrée d'une pompe ou d'un moteur est le volume de fluide déplacé par tour de rotation ; elle permet de calculer le débit théorique, toujours supérieur au débit réellement disponible une fois les fuites internes déduites.

## 2. Principe de fonctionnement
Chaque tour de rotation d'une pompe volumétrique déplace un volume fixe (ou variable selon la technologie) de fluide : c'est la cylindrée, exprimée en cm³/tour. En multipliant la cylindrée par la vitesse de rotation, on obtient le débit théorique. Mais toute pompe présente des jeux internes inévitables (entre pistons et alésages, entre palettes et anneau, etc.) à travers lesquels une partie du fluide refoulé fuit en retour vers l'aspiration ou le carter : c'est cette fuite qui explique l'écart entre débit théorique et débit réel, quantifié par le rendement volumétrique.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique — schéma de principe : un débit Q1 aspiré, un débit Q2 refoulé légèrement inférieur, la différence (Q1 − Q2) étant évacuée par un drain interne ou externe vers le réservoir.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min (diviser par 1000 pour la conversion cm³→L) |
| Débit réel | Q_réel = Q_th × η_vol | η_vol = rendement volumétrique (sans dimension) |
| Cylindrée réelle nécessaire | Cyl_réelle = Cyl_théorique / η_vol | Pour garantir un débit cible malgré les fuites, il faut surdimensionner légèrement la cylindrée |

## 5. Paramètres importants
- Cylindrée (fixe ou variable selon la technologie de pompe)
- Vitesse de rotation d'entraînement
- Rendement volumétrique, qui évolue de façon significative avec la pression et la température de service
- Pollution de l'huile, qui dégrade le rendement volumétrique au fil du temps (jeux internes qui s'usent)

## 6. Exemples concrets (terrain)
Une pompe de cylindrée 80 cm³/tr entraînée à 1800 tr/min : débit théorique = 80 × 1800 / 1000 = 144 L/min. Avec un rendement volumétrique de 95 %, le débit réel disponible n'est plus que de 136,8 L/min — c'est cette valeur, et non le débit théorique, qu'il faut utiliser pour dimensionner la vitesse réelle d'un vérin ou d'un moteur alimenté par cette pompe.

## 7. Points de réglage / vigilance
- Toujours dimensionner un circuit avec le débit réel (après rendement), jamais avec le débit théorique seul
- Le rendement volumétrique chute avec l'augmentation de la pression et de la température : un point de fonctionnement testé à vide ne reflète pas le comportement en charge
- Surveiller l'évolution du rendement volumétrique dans le temps comme indicateur de maintenance préventive : une baisse progressive annonce une usure interne

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Vitesse d'actionneur plus faible que calculée | Calcul effectué avec le débit théorique au lieu du débit réel |
| Baisse progressive de performance sur une pompe vieillissante | Diminution du rendement volumétrique liée à l'usure et à la pollution |

## 9. Liens avec d'autres composants
- Rendements volumétrique, mécanique et global (fiche 02.07) — détaille les deux composantes du rendement
- Pompe à engrenages externes (fiche 02.01) et pompe à pistons axiaux (fiche 02.04) — exemples de technologies aux rendements volumétriques différents
- Test de rendement volumétrique pompe in situ (fiche 15.05) — méthode de vérification pratique
