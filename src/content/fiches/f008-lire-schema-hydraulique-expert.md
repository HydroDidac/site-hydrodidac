---
code: "F008"
titre: "Lire un schéma hydraulique — symboles ISO 1219"
niveau: "avance"
module: "Notions fondamentales"
resume: "Retrouver les pressions et les débits en chaque point d'un circuit à partir des symboles ISO 1219 et des valeurs de réglage : la méthode de lecture de schéma, base du diagnostic."
tempsLecture: 6
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.06"
---

> Source : `sources/pdf-cours/NL-49-lecture-schema-hydraulique.pdf` (In Situ,
> newsletter n°49, janvier 2015) — méthode et exemple numérique repris
> directement de cette source. Symboles ISO 1219 : connaissances générales.

## 1. Définition en une phrase
Lire un schéma hydraulique consiste à déterminer les pressions et débits en chaque point du circuit à partir des valeurs de réglage des composants (tarages, débits réglés) et de leurs tailles (cylindrées, sections), afin de comprendre le fonctionnement du circuit ou d'effectuer un diagnostic de panne.

## 2. Principe de fonctionnement
La méthode consiste à identifier d'abord les valeurs connues — tarage du limiteur de pression, débit réglé d'un régulateur, cylindrée de la pompe — puis à propager ces valeurs le long du circuit en appliquant les lois de conservation du débit (ce qui entre dans une branche en ressort, sauf fuite) et de cumul des pertes de charge. La méthode la plus fiable consiste à partir du réservoir (pression de référence 0 bar) et à remonter les pressions point par point en ajoutant chaque perte de charge rencontrée (distributeur, ligne de retour), plutôt que de partir de la pompe où la pression dépend de la charge en aval — souvent inconnue a priori. Il faut systématiquement vérifier la cohérence de la charge réelle supportée par chaque récepteur avant de valider les débits déduits, car un récepteur bloqué (charge ≥ pression de tarage) invalide tous les calculs de répartition de débit.

## 3. Schéma / Symbole ISO
Principaux symboles ISO 1219-1 à connaître pour la lecture de schéma :
- Pompe : cercle avec triangle plein orienté dans le sens du débit
- Moteur hydraulique : cercle avec triangle plein orienté en sens inverse (entrant)
- Vérin : rectangle traversé par un trait (tige), avec orifices aux extrémités
- Distributeur : carrés juxtaposés représentant chaque position, avec flèches indiquant les connexions internes
- Limiteur de pression : carré avec flèche diagonale (ressort réglable) et symbole de mise à l'échappement
- Manomètre : cercle avec aiguille, point de mesure ponctuel sur le schéma

## 4. Formules et calculs clés

| Grandeur | Formule / Méthode | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Conservation du débit à un nœud | Q_entrant = Σ Q_sortants | L/min | Sauf fuite interne (rendement volumétrique < 1) |
| Pression en remontant depuis le réservoir | P(n) = P(n-1) + ΔP(composant n) | bar | Méthode recommandée : partir de 0 bar au réservoir |
| Débit utile après fuite interne | Q_utile = Q_théorique × η_volumétrique | L/min | Exemple : moteur à 0,9 de rendement → fuite de 10 % du débit |

## 5. Paramètres importants
- Tarage de chaque limiteur de pression — détermine la pression maximale en amont de ce composant
- Débit réglé de chaque régulateur de débit — fixe le débit dans la branche correspondante, l'excédent partant ailleurs (limiteur, autre branche)
- Charge réelle sur chaque récepteur (vérin, moteur) — condition de validité de tout le calcul de répartition
- Pertes de charge de chaque composant traversé (distributeur, filtre, ligne de retour), généralement données par le constructeur sous forme de courbes ΔP/débit

## 6. Exemples concrets (terrain)
Circuit limité à 200 bar, avec un moteur hydraulique réglé en vitesse par un régulateur de débit 2 voies tarés à 10 L/min, pompe fournissant Q1 = 18 L/min :
- Le débit excédentaire (Q1 − débit régulé = 18 − 10 = 8 L/min) s'évacue par le limiteur de pression taré à 200 bar
- Après le régulateur : Q4 = 10 L/min alimente le moteur
- La charge sur le moteur correspond à une ΔP de 60 bar : aucun blocage, le moteur tourne normalement
- Le moteur ayant un rendement volumétrique de 0,9, sa fuite interne est de 0,1 × 10 = 1 L/min, donc le débit de retour réel est de 9 L/min (et non 10)
- En remontant les pressions depuis le réservoir (0 bar) : pression en sortie moteur (ligne retour) = 5 bar (perte de charge distributeur), pression en entrée moteur = 5 + 60 (charge) = 65 bar

## 7. Points de réglage / vigilance
- Toujours vérifier la charge réelle sur chaque récepteur avant de valider une répartition de débit : si la charge atteint ou dépasse la pression de tarage du limiteur, tout le débit s'échappe par celui-ci et le récepteur reste bloqué
- Procéder par itérations : la lecture de schéma nécessite souvent plusieurs allers-retours entre les points du circuit pour valider l'ensemble des valeurs
- Bien distinguer le débit théorique (déduit de la cylindrée) du débit réellement transmis (après prise en compte des fuites internes et du rendement volumétrique)

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Valeurs de pression incohérentes en lecture de schéma | Calculs contradictoires entre deux points | Oubli d'une perte de charge singulière (distributeur, filtre) ou erreur de sens de propagation des calculs |
| Récepteur bloqué non identifié | Toutes les valeurs de débit calculées sont fausses | Charge réelle ≥ pression de tarage du limiteur, non vérifiée avant le calcul |
| Débit mal réparti entre deux branches parallèles | Vitesse différente de celle attendue sur un récepteur | Oubli de la prise en compte des charges respectives de chaque branche (la répartition dépend toujours des charges, pas uniquement des sections) |

## 9. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01) — base de la lecture des symboles de distribution
- Pertes de charge — linéaires et singulières (fiche 01.04) — indispensables pour remonter les pressions correctement
- Limiteur de pression (fiche 06.01) — élément clé déterminant la pression maximale et le devenir du débit excédentaire
- Rendements volumétrique, mécanique et global (fiche 02.07) — nécessaires pour passer du débit théorique au débit réel
