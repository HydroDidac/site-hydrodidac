---
code: "F037"
titre: "Moteur à engrenages — couple et vitesse"
niveau: "avance"
module: "Moteurs hydrauliques"
resume: "Le moteur à engrenages est une pompe à engrenages fonctionnant à l'envers : la pression fait le couple, le débit fait la vitesse."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "05.01"
---

> Sources : `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf` (§1.2, §1.3.2) ·
> `sources/pdf-cours/NL-17-Moteur-lent-rapide.pdf` (classification, formules).

## 1. Définition en une phrase
Le moteur à engrenages est un récepteur volumétrique à cylindrée fixe qui transforme l'énergie hydraulique (pression × débit) en énergie mécanique de rotation (couple × vitesse), en faisant tourner deux pignons — ou un ensemble rotor/couronne à denture interne — sous l'effet de l'huile sous pression.

## 2. Principe de fonctionnement
C'est la réversibilité de la pompe à engrenages : l'huile sous pression admise à l'orifice d'entrée pousse sur les flancs des dents ; le déséquilibre des forces de pression entre l'entrée et la sortie crée un couple sur l'arbre. On distingue deux familles :

- **Denture externe** : deux pignons en prise, technologie de la famille des moteurs *rapides*. Simple, économique, tolérante à la pollution.
- **Denture interne à mouvement hypocycloïdal** (dit « orbital » ou gérotor) : un rotor à n dents tourne dans une couronne à n+1 dents. Famille des moteurs *semi-rapides* (N < ~1000 tr/min), forte cylindrée sous faible encombrement, donc couple élevé à vitesse modérée. C'est la technologie la plus utilisée en moteur — plus qu'en pompe — avec un choix étendu de cylindrées, de distributions et de paliers, et un avantage prix marqué (gammes type Danfoss OM).

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : cercle avec triangle plein pointé **vers l'intérieur** (l'énergie hydraulique entre dans le composant — c'est l'inverse de la pompe). Deux triangles opposés pour un moteur réversible deux sens de rotation. Le drain externe, fréquent sur les moteurs, se représente en trait interrompu vers le réservoir.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Couple théorique | M = (Cyl × Δp) / 628 | M en daNm, Cyl en cm³/tr, Δp en bar | Hors rendement (source NL-17) |
| Vitesse théorique | N = (Q × 1000) / Cyl | N en tr/min, Q en L/min, Cyl en cm³/tr | Hors fuites internes |
| Couple réel | M_réel = M_th × η_hm | η_hm ≈ 0,90 | Rendement hydromécanique typique de la technologie engrenages |
| Vitesse réelle | N_réel = N_th × η_vol | η_vol ≈ 0,85 | Une partie du débit fuit sans produire de rotation |

## 5. Paramètres importants
- Cylindrée (cm³/tr) — fixe, non réglable
- Vitesse : 500 à 2500 tr/min pour la denture externe ; < ~1000 tr/min pour l'orbital
- Pression : BP et MP, certaines exécutions HP (valeur exacte à valider sur la documentation constructeur)
- Rendements modestes (η_vol ≈ 85 %) — le couple de démarrage est sensiblement inférieur au couple théorique (information issue des connaissances générales, à vérifier sur la courbe constructeur)

## 6. Exemples concrets (terrain)
Moteur orbital de 200 cm³/tr alimenté sous Δp = 140 bar avec 30 L/min :
- Couple théorique : M = 200 × 140 / 628 ≈ 44,6 daNm ≈ 446 Nm
- Vitesse théorique : N = 30 × 1000 / 200 = 150 tr/min

Applications typiques des moteurs orbitaux : fonds mouvants de déssileuses-pailleuses, hérissons d'épandeurs, rotors de débroussailleuses, et l'orbitrol de direction des engins (même principe hypocycloïdal).

## 7. Points de réglage / vigilance
- Aucun réglage de cylindrée : le couple disponible se règle par la pression (limiteur), la vitesse par le débit
- Raccorder le drain externe quand il existe — une pression de carter excessive détruit le joint d'arbre (connaissance générale, vérifier la pression de carter admissible constructeur)
- Vérifier la capacité de charge radiale/axiale du palier avant de monter pignon ou poulie en bout d'arbre

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Le moteur ne démarre pas en charge alors que le calcul de couple semble bon | Couple de démarrage < couple théorique (rendement hydromécanique dégradé à vitesse nulle) — dimensionner avec marge |
| Vitesse inférieure à la valeur calculée | Fuites internes (η_vol) aggravées par l'usure ou une huile trop chaude |
| Fuite au joint d'arbre | Drain absent, bouché ou contre-pression de carter excessive |
| Rotation en sens inverse du souhait | Orifices A/B inversés au raccordement |

## 9. Liens avec d'autres composants
- Calcul du couple et de la vitesse (fiche 05.05) — formules détaillées avec rendements
- Moteur à pistons radiaux (fiche 05.03) — l'alternative « moteur lent » pour les très forts couples
- Pompe à engrenages internes (fiche 02.02) — même mécanique, utilisée en générateur
- Rendements (fiche 02.07) — définitions η_vol, η_hm, η_global applicables aux moteurs
