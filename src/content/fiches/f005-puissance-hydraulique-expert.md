---
code: "F005"
titre: "Puissance hydraulique — P = p × Q"
niveau: "avance"
module: "Notions fondamentales"
resume: "La puissance hydraulique, produit de la pression et du débit, est la formule centrale pour dimensionner une installation et comprendre d'où vient la chaleur perdue."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.03"
---

> Source : `sources/pdf-cours/PRINCIPES FONDAMENTAUX DE L'HYDR.pdf` (§3.5-3.6,
> Travail et Puissance hydraulique) et `Principe de l'hydraulique mars 2010.pdf`
> (p.12-14, mêmes notions). Reste de la fiche : connaissances générales.

## 1. Définition en une phrase
La puissance hydraulique transmise par un fluide en mouvement est le produit de la pression par le débit volumique : c'est la grandeur centrale qui résume toute transmission de puissance hydraulique, qu'il s'agisse de produire, transporter ou utiliser cette énergie.

## 2. Principe de fonctionnement
Le travail hydraulique se définit comme W = p·V (pression × volume déplacé), exactement comme un travail mécanique classique W = F·L. La puissance étant un travail divisé par un temps, on obtient P = p·Q (pression × débit). Cette formule est le pilier de toute la conception d'un circuit hydraulique : une pompe produit un débit, et c'est la résistance rencontrée (charge sur un vérin ou un moteur, pertes de charge) qui détermine la pression nécessaire, et donc la puissance réellement consommée. Un circuit bien conçu cherche à faire correspondre au mieux la puissance absorbée (fournie par la pompe) à la puissance utile (réellement employée par les récepteurs) : tout écart se traduit par de la chaleur dissipée inutilement (à travers le limiteur de pression notamment), au détriment du rendement.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique (notion physique) — schéma de principe : un bloc « génération de puissance » (groupe motopompe) alimentant, via les « valves de pression, de débit et de distribution », un bloc « récepteurs de puissance » (vérins, moteurs hydrauliques).

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Puissance hydraulique (unités SI) | P = p·Q | P en W, p en Pa, Q en m³/s | Formulation théorique de référence |
| Puissance hydraulique (unités usuelles) | P (kW) = (p[bar] × Q[L/min]) / 600 | P en kW, p en bar, Q en L/min | Formule pratique la plus utilisée en hydraulique industrielle |
| Travail hydraulique | W = p·V = F·L | W en J, V en m³, F en N, L en m | Équivalence travail mécanique / travail hydraulique |
| Puissance (mouvement linéaire) | P = F·v | F en N, v en m/s | Côté récepteur (vérin) |
| Puissance (mouvement rotatif) | P = C·ω | C en Nm, ω en rad/s | Côté récepteur (moteur hydraulique) |

## 5. Paramètres importants
- Pression de tarage du limiteur de pression — fixe la pression maximale, donc la puissance maximale transmissible côté charge
- Cylindrée et vitesse de rotation de la pompe — déterminent le débit disponible
- Rendement global de l'installation (volumétrique × mécanique) — la puissance hydraulique réelle utile est toujours inférieure à la puissance théorique
- Adéquation entre puissance absorbée et puissance utile — un mauvais dimensionnement (pompe à débit fixe sur charge variable) génère un excédent de débit évacué par le limiteur de pression, donc de la chaleur perdue

## 6. Exemples concrets (terrain)
Une pompe alimentant un vérin à 200 bar avec un débit de 40 L/min :
- Puissance hydraulique = (200 × 40) / 600 = 13,3 kW

Si seuls 25 L/min sont réellement nécessaires pour le mouvement et que la pompe est à débit fixe (40 L/min), l'excédent de 15 L/min s'évacue par le limiteur de pression à 200 bar, soit (200×15)/600 = 5 kW dissipés en chaleur — d'où l'intérêt d'une pompe à débit variable ou d'un système Load Sensing (fiche 02.08) pour adapter le débit fourni au besoin réel et améliorer le rendement.

## 7. Points de réglage / vigilance
- Un circuit qui chauffe anormalement traduit presque toujours un mauvais rapport entre puissance absorbée et puissance utile (schéma mal conçu et/ou composants mal dimensionnés)
- Toujours vérifier la cohérence entre la pression de tarage du limiteur et la pression réellement nécessaire à l'application : un tarage trop élevé n'apporte rien et accentue les pertes en cas de débit excédentaire
- Sur les engins mobiles, la puissance hydraulique disponible est limitée par la puissance du moteur thermique d'entraînement — un sous-dimensionnement du moteur limite la puissance hydraulique réellement exploitable

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Échauffement excessif de l'huile | Température réservoir anormalement élevée | Puissance absorbée largement supérieure à la puissance utile (pompe à débit fixe surdimensionnée) |
| Rendement global décevant | Consommation énergétique élevée pour un travail mécanique modeste | Pertes de charge importantes, fuites internes, mauvais dimensionnement des conduites |

## 9. Liens avec d'autres composants
- Load sensing (fiche 02.08) — adapte le débit pompe à la puissance réellement utile, limitant les pertes
- Limiteur de pression (fiche 06.01) — évacue l'excédent de débit, donc de puissance non utilisée, sous forme de chaleur
- Pertes de charge (fiche 01.04) — réduisent la puissance hydraulique réellement disponible côté récepteur
- Rendements volumétrique, mécanique et global (fiche 02.07) — quantifient l'écart entre puissance théorique et puissance réellement utile
