---
code: "F013"
titre: "Pompe à pistons radiaux"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Des pistons disposés en étoile autour d'un excentrique : la technologie des très hautes pressions, là où les pistons axiaux atteignent leurs limites."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.05"
---

> Aucun PDF dédié spécifiquement aux pompes à pistons radiaux (par opposition
> aux pistons axiaux/axe brisé) n'a été trouvé dans `sources/pdf-cours/` —
> fiche basée sur les connaissances générales, cohérente avec les principes
> volumétriques déjà établis dans `POMPES ET MOTEURS HYDRAULIQUES.pdf`.

## 1. Définition en une phrase
La pompe à pistons radiaux utilise des pistons disposés perpendiculairement à l'axe de rotation (en étoile, rayonnant depuis le centre), entraînés par une came ou un excentrique central, principalement utilisée pour les très hautes pressions.

## 2. Principe de fonctionnement
Contrairement aux pistons axiaux (parallèles à l'axe), les pistons radiaux sont disposés comme les rayons d'une roue, logés dans un bloc-cylindres fixe ou tournant autour d'un excentrique central. La rotation de l'excentrique (ou du bloc autour d'un axe fixe excentré) impose à chaque piston un mouvement de va-et-vient radial : vers l'extérieur pour l'aspiration, vers l'intérieur pour le refoulement, via un système de clapets ou de glace de distribution selon la conception. Cette géométrie permet d'atteindre des pressions de service très élevées (plusieurs centaines de bars), au prix d'un encombrement radial plus important et d'un coût élevé.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 identique aux autres pompes volumétriques (cercle + triangle plein, ou avec flèche diagonale si cylindrée variable). Représentation interne typique : plusieurs pistons disposés en étoile autour d'un excentrique central ou d'une came.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min | Identique au principe général des pompes volumétriques |
| Débit réel | Q_réel = Q_th × η_vol | η_vol typiquement élevé (> 0,95) | Très bon rendement volumétrique, technologie de précision |

## 5. Paramètres importants
- Nombre de pistons (souvent impair pour limiter les irrégularités de débit instantané)
- Pression nominale très élevée — domaine d'application privilégié de cette technologie
- Vitesse de rotation généralement plus faible que les pistons axiaux pour cette même raison d'inertie des pistons radiaux

## 6. Exemples concrets (terrain)
Les pompes à pistons radiaux sont privilégiées sur les applications nécessitant des pressions extrêmes (presses de très forte puissance, bancs d'essai, certaines applications offshore), là où les pistons axiaux atteignent leurs limites de pression.

## 7. Points de réglage / vigilance
- Vérifier la filtration de l'huile avec la même rigueur que pour les pistons axiaux : technologie de précision sensible à la pollution
- Respecter les plages de vitesse de rotation prescrites, généralement plus restrictives que pour d'autres technologies

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Irrégularités de débit perceptibles | Nombre de pistons insuffisant ou usure des éléments de distribution |
| Usure prématurée | Pollution de l'huile, dépassement de la vitesse de rotation maximale admissible |

## 9. Liens avec d'autres composants
- Pompe à pistons axiaux — plateau incliné (fiche 02.04) — technologie alternative, plus courante pour les pressions moyennes à hautes
- Rendements volumétrique, mécanique et global (fiche 02.07)
- Comment choisir une pompe hydraulique (fiche 02.12) — comparatif entre les différentes technologies
