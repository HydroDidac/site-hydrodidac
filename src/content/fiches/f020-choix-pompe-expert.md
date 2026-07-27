---
code: "F020"
titre: "Comment choisir une pompe hydraulique"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Engrenages, palettes ou pistons : le compromis entre coût, rendement, plage de pression et tolérance à la pollution de l'huile pour choisir la bonne technologie de pompe."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.12"
---

> Fiche de synthèse comparative, basée sur les caractéristiques techniques
> déjà établies fiche par fiche (sources : `POMPES ET MOTEURS
> HYDRAULIQUES.pdf` pour les rendements et marchés par technologie). Aucune
> donnée numérique nouvelle n'est introduite ici.

## 1. Définition en une phrase
Choisir une pompe hydraulique consiste à arbitrer entre cylindrée (fixe ou variable), plage de pression, rendement, coût et robustesse face à la pollution, en fonction du profil d'utilisation réel de l'application (débit constant ou variable, pression de service, criticité énergétique).

## 2. Principe de fonctionnement
Le choix d'une technologie de pompe résulte d'un compromis entre plusieurs critères souvent antagonistes : coût d'achat, rendement (donc coût d'exploitation), tolérance à la pollution de l'huile, plage de pression atteignable, et possibilité de cylindrée variable pour économiser l'énergie. Les engrenages externes dominent sur les applications à faible coût et tolérance à la pollution ; les palettes offrent un meilleur rendement pour un usage industriel à cylindrée fixe (presses) ; les pistons axiaux s'imposent dès que la pression de service ou le besoin d'économie d'énergie (cylindrée variable, Load Sensing) deviennent prioritaires, au prix d'un coût plus élevé et d'une plus grande sensibilité à la pollution.

## 3. Schéma / Symbole ISO
Pas de symbole spécifique — tableau de synthèse comparatif (voir formules ci-dessous), reprenant les symboles ISO 1219-1 déjà vus pour chaque technologie (cercle + triangle plein pour cylindrée fixe, avec flèche diagonale pour cylindrée variable).

## 4. Formules et calculs clés

| Technologie | Rendement vol. | Rendement méc. | Plage de pression | Coût | Sensibilité pollution |
|---|---|---|---|---|---|
| Engrenages externes | ≈ 85 % | ≈ 90 % | BP & MP (parfois HP) | Faible | Faible (bonne tolérance) |
| Engrenages internes | Bon | Bon | MP | Moyen | Moyenne |
| Palettes à cylindrée fixe | ≈ 95 % | ≈ 90 % | MP | Élevé | Moyenne |
| Pistons axiaux | 92-97 % | Élevé | MP & HP | Élevé | Élevée (précision) |

*Synthèse construite à partir des caractéristiques déjà détaillées dans les fiches 01.01 à 01.04.*

## 5. Paramètres importants
- Débit constant requis ou besoin d'adaptation dynamique (→ cylindrée fixe vs variable, Load Sensing)
- Pression de service maximale de l'application
- Budget d'investissement vs coût d'exploitation visé (rendement, consommation énergétique)
- Niveau de propreté réellement atteignable sur l'installation (classe ISO 4406 — fiche 10.01) : une pompe à pistons exige une huile bien plus propre qu'une pompe à engrenages
- Criticité du bruit et de la fiabilité (engins mobiles, environnements sensibles)

## 6. Exemples concrets (terrain)
Pour un engin agricole avec un budget contraint et une exposition fréquente à une huile moyennement propre : pompe à engrenages externes, robuste et économique. Pour une presse industrielle à cylindrée fixe et pression modérée : pompe à palettes, meilleur rendement. Pour un engin de travaux publics multi-fonctions avec exigence d'économie d'énergie : pompe à pistons axiaux avec régulation Load Sensing, malgré le coût plus élevé, justifié par le gain de rendement et la durée de vie.

## 7. Points de réglage / vigilance
- Ne jamais sous-estimer l'exigence de propreté de l'huile imposée par la technologie choisie (notamment pour les pistons axiaux) — un mauvais appariement pompe/filtration réduit drastiquement la durée de vie
- Vérifier la cohérence entre la pression nominale de la pompe choisie et la pression réellement nécessaire à l'application, avec une marge de sécurité raisonnable
- Anticiper le coût total de possession (achat + maintenance + énergie), pas seulement le coût d'achat initial

## 8. Erreurs fréquentes

| Erreur | Conséquence |
|---|---|
| Choisir une pompe à pistons sans filtration adaptée | Usure prématurée, perte de rendement rapide |
| Sous-dimensionner la pression nominale par excès d'économie | Limiteur de pression sollicité en permanence, échauffement, usure accélérée |
| Privilégier systématiquement le coût d'achat le plus bas | Coût d'exploitation supérieur sur la durée de vie de la machine (rendement, consommation énergétique) |

## 9. Liens avec d'autres composants
- Pompe à engrenages externes (fiche 02.01), pompe à palettes (fiche 02.03), pompe à pistons axiaux (fiche 02.04) — comparatif détaillé des trois technologies principales
- Norme ISO 4406 — niveau de propreté du fluide (fiche 10.01) — critère de choix souvent décisif
- Rendements volumétrique, mécanique et global (fiche 02.07) — base du calcul de coût d'exploitation
