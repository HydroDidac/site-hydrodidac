---
code: "F011"
titre: "Pompe à palettes — fonctionnement et usages"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Des palettes coulissantes plaquées contre un anneau à double lobe : un rendement volumétrique élevé et une cartouche interne remplaçable, technologie reine des presses industrielles."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.03"
---

> Source : `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf` (§1.3.3 et
> §1.2 — principe du rotor équilibré, compensation radiale, rendements).

## 1. Définition en une phrase
La pompe à palettes à cylindrée fixe utilise un rotor muni de palettes coulissantes plaquées contre un anneau statorique de forme adaptée, dont la géométrie crée la variation de volume nécessaire à l'aspiration et au refoulement.

## 2. Principe de fonctionnement
Le rotor comporte de multiples logements radiaux dans lesquels les palettes glissent librement. La force centrifuge plaque les palettes contre la paroi interne de l'anneau statorique, mais cette force seule ne suffit pas à maintenir l'étanchéité sous pression : un système de compensation radiale applique la pression de refoulement derrière chaque palette (dans le fond de son logement), ce qui équilibre les deux poussées (interne et externe) et garantit le contact. Dans la configuration à rotor équilibré, l'anneau présente une forme à deux lobes : il y a deux zones d'aspiration et deux zones de refoulement diamétralement opposées, ce qui annule les efforts radiaux nets sur le rotor (d'où le terme « équilibré ») et fait travailler chaque palette deux fois par tour.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 identique aux pompes à cylindrée fixe (cercle + triangle plein). Coupe interne caractéristique : rotor central à palettes radiales, anneau statorique à profil en double lobe, cartouche interchangeable regroupant glaces de distribution, anneau et lumières d'aspiration/refoulement.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min | Cylindrée fixe |
| Débit réel | Q_réel = Q_th × η_vol | η_vol ≈ 0,95 (95 %) | Rendement volumétrique élevé pour cette technologie |

## 5. Paramètres importants
- Rendement volumétrique élevé (≈ 95 %) et rendement mécanique (≈ 90 %) — supérieurs à la technologie à engrenages externes
- Possibilité de cartouches multiples (double ou triple) sur un même arbre, permettant une régulation de puissance « traditionnelle » par tout-ou-rien (technologie aujourd'hui plutôt remplacée par les pompes à débit variable)
- Cartouche interchangeable (glaces, anneau, lumières) — facilite la maintenance sans changer toute la pompe
- Marché privilégié : presses industrielles (cylindrée fixe)

## 6. Exemples concrets (terrain)
Sur une presse industrielle équipée d'une pompe à palettes à triple cartouche, on peut alimenter successivement un, deux ou trois étages de pompage selon le débit nécessaire à chaque phase du cycle (approche rapide, pressage, retour), une régulation simple mais efficace avant la généralisation des pompes à débit variable.

## 7. Points de réglage / vigilance
- La maintenance se fait souvent par simple remplacement de la cartouche interne (glaces, anneau, palettes), sans démonter tout le corps de pompe
- Vérifier la propreté de l'huile : bien que plus performante en rendement que la pompe à engrenages, la pompe à palettes est plus sensible à la pollution et à la cavitation
- Respecter le sens de rotation prescrit, déterminant pour l'orientation du profil de l'anneau

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Chute progressive du débit | Usure des palettes ou de l'anneau, jeu interne croissant |
| Bruit anormal et cavitation | Pollution de l'huile ou aspiration sous-dimensionnée — sensibilité plus marquée que pour les engrenages externes |
| Pompe qui chauffe anormalement | Compensation radiale défaillante, frottement excessif palette/anneau |

## 9. Liens avec d'autres composants
- Pompe à palettes à cylindrée variable (fiche 02.09 - compensation pression) — évolution naturelle de cette technologie
- Rendements volumétrique, mécanique et global (fiche 02.07)
- Cavitation et bruit dans les pompes (fiche 02.11) — sensibilité accrue pour cette technologie
