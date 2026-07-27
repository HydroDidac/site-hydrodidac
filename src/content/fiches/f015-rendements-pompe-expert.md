---
code: "F015"
titre: "Rendements volumétrique, mécanique et global"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Fuites internes et frottements expliquent l'écart entre puissance fournie et puissance utile : les trois rendements à connaître pour bien dimensionner un moteur d'entraînement."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.07"
---

> Source : `sources/pdf-cours/cours-hydraulique-73-rendements.pdf` (In Situ,
> newsletter n°73, mars 2018) — définitions et formules reprises directement
> de cette source.

## 1. Définition en une phrase
Les rendements d'une pompe (ou d'un moteur) quantifient les pertes d'énergie entre ce qui est absorbé et ce qui est restitué, sous deux formes distinctes — volumétrique (fuites internes) et mécanique (frottements) — dont le produit donne le rendement global.

## 2. Principe de fonctionnement
Le **rendement volumétrique** correspond à l'ensemble des fuites internes d'un composant : une pompe qui aspire 100 L/min peut n'en refouler que 98 L/min, les 2 L/min restants étant des fuites internes redirigées vers le réservoir par un drain (interne ou externe). Ce rendement évolue significativement avec la pression et la température de service, et a une influence directe sur la vitesse finale de l'actionneur alimenté. Le **rendement mécanique** correspond aux pertes par frottement lors du fonctionnement des composants : à pression de refoulement donnée, le couple d'entraînement réel doit être supérieur au couple théorique pour compenser ces frottements. Le **rendement global**, produit des deux précédents, permet de déterminer directement la puissance réellement nécessaire à l'entraînement d'une pompe (puissance absorbée) pour obtenir la puissance hydraulique utile souhaitée.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique (notion de performance, non un composant) — représentation schématique : flux d'énergie entrant (puissance absorbée), flux d'énergie utile en sortie (puissance hydraulique), écart représentant les pertes (volumétriques + mécaniques).

## 4. Formules et calculs clés

| Grandeur | Formule | Unités / Remarques |
|----------|---------|------------------------|
| Rendement volumétrique | η_vol = Q_refoulé / Q_aspiré | Exemple : 98/100 = 98 % |
| Couple réel d'entraînement (pompe) | Couple = (1,59 × Cylindrée × ΔP) / η_méc | Couple en Nm, cylindrée en cm³/tr, ΔP en bar |
| Rendement global | η_global = η_vol × η_méc | Produit des deux rendements |
| Puissance absorbée | P_absorbée = P_utile / η_global | Permet de dimensionner le moteur d'entraînement de la pompe |

## 5. Paramètres importants
- Niveau de pression et de température de service — font évoluer significativement le rendement volumétrique
- Vitesse d'entraînement et température — font évoluer le rendement mécanique
- État de pollution de l'huile — cause principale de dégradation du rendement volumétrique dans le temps
- Pour un moteur hydraulique : les deux rendements (volumétrique et mécanique) sont à prendre en compte simultanément ; pour un vérin, la fuite est généralement considérée comme nulle, mais les frottements des joints réduisent l'effort réellement fourni (équivalent d'un rendement mécanique)

## 6. Exemples concrets (terrain)
Une pompe qui aspire 100 L/min et refoule 98 L/min a un rendement volumétrique de 98 %. Si l'on souhaite obtenir 100 L/min utiles en sortie de pompe avec un rendement volumétrique de 95 %, il faut prévoir une cylindrée légèrement supérieure pour compenser cet écart. Pour le rendement global, si la puissance hydraulique utile nécessaire est de 20 kW avec un rendement global de 0,85 (= 0,95 × 0,90), la puissance absorbée — donc la puissance du moteur d'entraînement à prévoir — doit être d'au moins 20/0,85 ≈ 23,5 kW.

## 7. Points de réglage / vigilance
- Surveiller la baisse du rendement volumétrique dans le temps comme indicateur de maintenance préventive (test de rendement, fiche 15.05)
- Lorsque le rendement volumétrique devient trop faible pour assurer la performance minimum requise, une maintenance curative (remplacement ou réparation de la pompe) devient nécessaire
- Bien dimensionner le moteur d'entraînement en tenant compte du rendement global, pas seulement de la puissance hydraulique utile théorique

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Sous-dimensionnement du moteur d'entraînement | Calcul de puissance basé uniquement sur la puissance hydraulique utile, sans tenir compte du rendement global |
| Diagnostic tardif d'une pompe usée | Absence de suivi périodique du rendement volumétrique en maintenance préventive |

## 9. Liens avec d'autres composants
- Cylindrée, débit théorique et débit réel (fiche 02.06) — base du calcul du rendement volumétrique
- Test de rendement volumétrique pompe in situ (fiche 15.05) — méthode pratique de mesure
- Puissance hydraulique (fiche 01.03) — le rendement global relie puissance absorbée et puissance utile
