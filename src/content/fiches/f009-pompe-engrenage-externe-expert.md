---
code: "F009"
titre: "Pompe à engrenages externes — principe et caractéristiques"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Deux pignons en prise qui aspirent puis refoulent l'huile : la pompe hydraulique la plus simple, la plus répandue et la plus tolérante à une huile peu propre."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.01"
---

> Source : `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf` (§1.3.1 et
> §1.2 — principe de fonctionnement, rendements, marchés).

## 1. Définition en une phrase
La pompe à engrenages externes est une pompe volumétrique à cylindrée fixe, constituée de deux pignons à denture externe en prise, dont la rotation aspire puis refoule l'huile en périphérie des dentures.

## 2. Principe de fonctionnement
Les deux pignons (un menant, un mené) tournent en sens inverse. D'un côté, les dents se séparent : le volume entre les dents augmente, créant une dépression qui aspire l'huile. De l'autre côté, les dents s'engrènent à nouveau : le volume diminue, ce qui refoule l'huile vers l'orifice de sortie. L'huile traverse donc la pompe en passant autour des pignons (dans les espaces inter-dents), et non au travers de l'axe. C'est une pompe à cylindrée fixe : le débit théorique ne dépend que de la vitesse de rotation et de la géométrie des engrenages, il ne peut pas être ajusté sans changer la vitesse d'entraînement.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : cercle avec triangle plein orienté dans le sens du débit (sens unique, cylindrée fixe). Coupe interne caractéristique : deux pignons en prise dans un corps généralement en aluminium, orifices d'aspiration et de refoulement diamétralement opposés, arbre excentré par rapport au corps.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min | Cylindrée fixe, dépend uniquement de la géométrie des pignons |
| Débit réel | Q_réel = Q_th × η_vol | η_vol ≈ 0,85 (85 %) | Rendement volumétrique typique pour ce type de pompe |
| Couple théorique | C_th = (Cyl × p) / (2π) | C en Nm, p en Pa | Pour l'usage en moteur (réversibilité partielle selon construction) |

## 5. Paramètres importants
- Cylindrée (cm³/tr) — fixe, déterminée par la géométrie des pignons
- Vitesse de rotation admissible — typiquement 500 à 2500 tr/min sans problème particulier
- Rendement volumétrique (≈ 85 %) et rendement mécanique (≈ 90 %) — parmi les plus modestes des technologies de pompes, mais largement compensés par le coût
- Plage de pression : basse et moyenne pression (BP & MP), certaines versions en haute pression (HP)

## 6. Exemples concrets (terrain)
Pompe à engrenages externes de cylindrée 20 cm³/tr entraînée à 1500 tr/min :
- Débit théorique : Q_th = 20 × 1500 / 1000 = 30 L/min
- Débit réel (η_vol = 0,85) : Q_réel = 30 × 0,85 = 25,5 L/min

Cette technologie est largement répandue sur les engins agricoles, les travaux publics et les applications mobiles, en raison de son coût faible et de sa robustesse face à la pollution de l'huile et à la cavitation.

## 7. Points de réglage / vigilance
- Aucun réglage de cylindrée possible (technologie à cylindrée fixe) : seule la vitesse de rotation permet d'ajuster le débit
- Vérifier le sens de rotation à l'installation — une pompe à engrenages externes est généralement non réversible en sens de débit sans modification
- Surveiller l'usure des paliers lisses et des joints de compensation axiale, principaux organes d'usure de cette technologie

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Débit insuffisant malgré une vitesse correcte | Usure des jeux internes (paliers, flasques), augmentant les fuites internes et réduisant le rendement volumétrique |
| Bruit de cavitation à l'aspiration | Conduite d'aspiration sous-dimensionnée ou filtre colmaté |
| Durée de vie réduite | Pollution de l'huile mal maîtrisée malgré la bonne tolérance de cette technologie, ou dépassement de la vitesse maximale admissible |

## 9. Liens avec d'autres composants
- Cylindrée et débit théorique (fiche 02.06) — formule générale applicable à toute pompe volumétrique
- Rendements volumétrique, mécanique et global (fiche 02.07) — détaille les pertes propres à cette technologie
- Pompe à engrenages internes (fiche 02.02) — technologie voisine, plus utilisée en moteur
- Cavitation et bruit dans les pompes (fiche 02.11) — risque accru en cas de conduite d'aspiration sous-dimensionnée
