---
code: "F004"
titre: "Équation de Bernoulli appliquée à l'hydraulique"
niveau: "avance"
module: "Notions fondamentales"
resume: "Dans un fluide en mouvement, plus il va vite, moins il pousse fort : l'équation de Bernoulli explique la cavitation et les chutes de pression locales dans un circuit hydraulique."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.02"
---

> Sources : aucun PDF dédié trouvé dans `sources/pdf-cours/` pour ce sujet
> précis — fiche basée sur les connaissances générales de mécanique des
> fluides, cohérente avec les notions d'énergie hydraulique (potentielle,
> cinétique, de pression) déjà établies dans `PRINCIPES FONDAMENTAUX DE
> L'HYDR.pdf` (§3.3).

## 1. Définition en une phrase
L'équation de Bernoulli exprime la conservation de l'énergie totale d'un fluide en écoulement le long d'une ligne de courant : la somme de l'énergie de pression, de l'énergie cinétique et de l'énergie potentielle de position reste constante (en l'absence de pertes par frottement).

## 2. Principe de fonctionnement
Contrairement à la loi de Pascal qui s'applique à un fluide au repos, Bernoulli s'applique à un fluide en mouvement. Lorsque la section d'une conduite se réduit (rétrécissement, orifice), la vitesse du fluide augmente pour conserver le débit (continuité : Q = S·v = constante). Cette augmentation de vitesse se traduit par une augmentation d'énergie cinétique, qui se fait au détriment de l'énergie de pression : la pression chute localement au niveau du rétrécissement. C'est ce principe qui explique le fonctionnement des orifices calibrés, des venturis et des phénomènes d'aspiration dans certains composants hydrauliques. En toute rigueur, l'équation de Bernoulli théorique néglige les pertes de charge ; en pratique hydraulique industrielle, on lui ajoute un terme de pertes (voir fiche 01.04).

## 3. Schéma / Symbole ISO
Pas de symbole ISO 1219 (loi physique, non un composant) — représentation classique : une conduite à section variable (large puis étroite puis large), avec indication de la vitesse et de la pression à chaque section : vitesse faible/pression haute dans la partie large, vitesse élevée/pression basse dans la partie étroite.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Équation de Bernoulli | p₁ + ½·ρ·v₁² + ρ·g·h₁ = p₂ + ½·ρ·v₂² + ρ·g·h₂ | p en Pa, ρ en kg/m³, v en m/s, h en m | Fluide incompressible, écoulement sans pertes, le long d'une ligne de courant |
| Équation de continuité | Q = S₁·v₁ = S₂·v₂ | Q en m³/s, S en m², v en m/s | Débit conservé entre deux sections d'une même conduite |
| Forme pratique (conduites horizontales, h₁=h₂) | p₁ + ½·ρ·v₁² = p₂ + ½·ρ·v₂² | — | Cas le plus courant en hydraulique industrielle (conduites horizontales) |

*En négligeant le terme cinétique (souvent petit devant les pressions de travail en bar), on retombe sur la loi de Pascal — Bernoulli est la généralisation de Pascal au cas d'un fluide en mouvement.*

## 5. Paramètres importants
- Variation de section de passage (orifices, rétrécissements, raccords) — génère les variations locales de vitesse et donc de pression
- Masse volumique du fluide (ρ ≈ 850-900 kg/m³ pour une huile hydraulique minérale)
- Vitesse d'écoulement, à comparer aux vitesses recommandées dans les conduites (2 à 4,6 m/s en refoulement de pompe, valeurs usuelles constructeur)
- Différence de hauteur entre deux points du circuit (terme ρ·g·h, généralement négligeable en hydraulique de puissance sauf sur de grandes hauteurs)

## 6. Exemples concrets (terrain)
Le principe de Bernoulli explique le phénomène de cavitation à l'aspiration d'une pompe : si la section d'aspiration est trop faible ou la vitesse trop élevée, la pression locale peut chuter sous la pression de vapeur saturante de l'huile, provoquant la formation de bulles de vapeur (cavitation), destructrices pour la pompe (voir fiche 02.11).

De même, dans un distributeur ou un limiteur de pression, le passage de l'huile à travers un orifice calibré provoque une accélération locale et donc une chute de pression — c'est le principe même de fonctionnement des organes de réglage de débit (fiche 07.01).

## 7. Points de réglage / vigilance
- Toujours vérifier que la vitesse d'aspiration reste dans les plages recommandées (généralement < 1,5 à 2 m/s) pour éviter la cavitation, qui est directement liée à la chute de pression décrite par Bernoulli
- Sur les conduites de refoulement, une vitesse excessive (> 4,6 m/s) génère des pertes de charge importantes et des turbulences, au-delà du simple effet Bernoulli
- Ne pas confondre la chute de pression par effet Bernoulli (réversible, liée à la vitesse) avec la perte de charge par frottement (irréversible, liée à la viscosité — fiche 01.04)

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Cavitation à l'aspiration | Bruit caractéristique, érosion des pièces internes de la pompe | Conduite d'aspiration trop fine ou trop longue, filtre colmaté augmentant la vitesse locale |
| Pression mesurée différente de la pression théorique | Écart entre calcul Pascal simple et mesure réelle | Composante cinétique (vitesse) non négligeable, négligée dans un calcul Pascal simplifié |

## 9. Liens avec d'autres composants
- Cavitation et bruit dans les pompes (fiche 02.11) — application directe de la chute de pression liée à la vitesse
- Limiteur de débit (fiche 07.01) — fonctionne par création d'une restriction de section
- Pertes de charge — linéaires et singulières (fiche 01.04) — complète Bernoulli avec les pertes réelles par frottement
- Loi de Pascal (fiche 01.01) — cas particulier de Bernoulli pour un fluide au repos
