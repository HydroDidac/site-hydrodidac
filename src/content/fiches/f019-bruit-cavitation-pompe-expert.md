---
code: "F019"
titre: "Cavitation et bruit dans les pompes"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Quand la pression locale chute sous la pression de vapeur saturante de l'huile, des bulles se forment et implosent : bruit caractéristique et érosion destructrice des pièces internes."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.11"
---

> Source : `sources/pdf-cours/cours-hydraulique-98-cavitation-3.pdf` (In Situ,
> newsletter n°98, avril 2021) — mécanisme physique, conséquences et zones
> d'apparition repris directement de cette source.

## 1. Définition en une phrase
La cavitation est le phénomène par lequel un liquide, lorsque sa pression chute jusqu'à atteindre la pression de vapeur saturante, change localement de phase et forme des bulles de gaz qui implosent violemment en rejoignant une zone à plus forte pression, provoquant bruit, érosion et dégradation de l'huile.

## 2. Principe de fonctionnement
Lorsque la pression locale d'un fluide chute en-dessous de sa pression de vapeur saturante (qui augmente elle-même avec la température), le liquide change de phase et forme des bulles de gaz. Lorsque ces bulles atteignent une zone de pression plus élevée, elles implosent. Si cette implosion se produit près d'une paroi, elle génère un micro-jet et une onde de choc, provoquant une érosion locale par arrachement de matière — phénomène particulièrement destructeur car généralement très localisé (chocs répétés toujours au même endroit). L'huile contenant de l'air dissous, l'implosion peut également libérer cet air et déclencher un « effet micro-diesel » (compression rapide de l'air libéré, dégradant l'huile, les composants et les étanchéités). La cavitation peut apparaître dans trois zones principales : à l'aspiration d'une pompe (filtre colmaté, conduite sous-dimensionnée), au niveau d'une restriction de section (effet Bernoulli : la vitesse élevée fait chuter la pression statique), ou dans les vérins/moteurs si la vitesse de déplacement est trop élevée par rapport au débit disponible.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique — schéma de principe : diagramme de phase pression/température montrant la zone de cavitation entre liquide et gaz, et schéma d'implosion d'une bulle près d'une paroi (formation d'un jet rentrant, émission d'une onde de choc, zone d'érosion résultante).

## 4. Formules et calculs clés

| Grandeur | Formule / Principe | Remarques |
|----------|---------|------------------------|
| Équation de Bernoulli (cause de cavitation par restriction) | p + ρ·v²/2 = constante | p en Pa, ρ en kg/m³, v en m/s — quand v augmente, p chute |
| Condition d'apparition | p_locale ≤ p_vapeur_saturante(T) | La pression de vapeur saturante augmente avec la température : plus l'huile est chaude, plus le risque de cavitation est élevé |
| Pression minimale d'aspiration | Donnée par le constructeur de pompe | Valeur seuil à ne jamais franchir, sous peine de cavitation |

## 5. Paramètres importants
- Pression minimale au port d'aspiration, spécifiée par le constructeur — référence absolue à respecter
- Température de l'huile — une huile chaude a une pression de vapeur saturante plus élevée, donc un risque de cavitation accru
- État du filtre d'aspiration — un colmatage progressif augmente la perte de charge et fait chuter la pression d'aspiration
- Vitesse d'écoulement dans les restrictions de section (orifices, rétrécissements) — toute vitesse excessive chute la pression locale (Bernoulli)

## 6. Exemples concrets (terrain)
Un filtre d'aspiration progressivement colmaté augmente la perte de charge entre le réservoir et l'entrée de pompe. Si cette perte de charge devient telle que la pression au port d'aspiration descend sous la valeur minimale constructeur, des bulles de cavitation apparaissent et implosent à l'intérieur de la pompe, provoquant un bruit caractéristique et une érosion progressive des pièces internes (engrenages, palettes, pistons selon la technologie) — l'examen d'une pièce érodée montre typiquement des cratères localisés, signature caractéristique de chocs répétés au même endroit.

## 7. Points de réglage / vigilance
- Respecter scrupuleusement la pression minimale d'aspiration indiquée par le constructeur de la pompe
- Surveiller l'état de colmatage des filtres d'aspiration (indicateur de colmatage, fiche 10.04) avant que la pression d'aspiration ne devienne critique
- Dimensionner les conduites d'aspiration suffisamment larges et courtes pour limiter les pertes de charge et la vitesse d'écoulement
- Être attentif à tout bruit anormal et caractéristique (grésillement, crépitement) à l'aspiration : c'est le premier signe de cavitation, avant la dégradation matérielle visible

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Bruit caractéristique de cavitation à l'aspiration | Filtre colmaté, conduite d'aspiration sous-dimensionnée ou trop longue |
| Érosion localisée constatée sur des pièces internes lors d'une intervention | Cavitation chronique non détectée à temps |
| Dégradation accélérée de l'huile | Effet micro-diesel répété, lié à la libération d'air dissous lors des implosions |

## 9. Liens avec d'autres composants
- Équation de Bernoulli appliquée à l'hydraulique (fiche 01.02) — base physique du phénomène
- Indicateur de colmatage — différentiel de pression (fiche 10.04) — outil de prévention
- Pompe à pistons axiaux — plateau incliné (fiche 02.04) — technologie de précision particulièrement sensible à la cavitation
