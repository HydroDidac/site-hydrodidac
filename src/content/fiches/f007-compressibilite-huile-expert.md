---
code: "F007"
titre: "Compressibilité de l'huile et module de compressibilité"
niveau: "avance"
module: "Notions fondamentales"
resume: "L'huile n'est pas parfaitement incompressible : sur de grands volumes ou en présence d'air, ce léger tassement crée des retards, des oscillations et des surpressions."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.05"
---

> Source : `sources/pdf-cours/cours-hydraulique-82-la-compressibilite.pdf`
> (In Situ, newsletter n°82, avril 2019) — formules, valeurs numériques et
> exemple de calcul repris directement de cette source.

## 1. Définition en une phrase
La compressibilité de l'huile hydraulique quantifie sa variation de volume sous l'effet de la pression (et, secondairement, de la température) ; bien que souvent considérée comme négligeable en première approche, elle devient significative dans les systèmes exigeant précision, dynamique rapide ou grands volumes d'huile.

## 2. Principe de fonctionnement
Lorsqu'on augmente la pression dans un volume d'huile, celle-ci se comprime légèrement : il faut fournir un léger surplus de volume (ΔV) pour obtenir l'augmentation de pression souhaitée (ΔP). Cette relation est gouvernée par le module de compressibilité K (ou module de Bulk), de l'ordre de 15 000 bar pour une huile hydraulique minérale. La présence d'air dissous ou entraîné dans le circuit réduit fortement le module de compressibilité effectif, en particulier à basse pression — un système contenant 10 % d'air se comprime beaucoup plus facilement qu'un système à 0,1 % d'air. La compressibilité est également à l'origine des phénomènes de coup de bélier (ondes de choc) lors de détentes ou compressions rapides d'un volume d'huile, pouvant détériorer conduites et composants.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique (propriété physique du fluide, non un composant) — représentation classique : un volume d'huile V₀ dans un cylindre fermé, soumis à une augmentation de pression ΔP, avec réduction du volume ΔV résultante.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Variation de volume avec la pression | ΔV/V₀ = −ΔP/K | ΔV, V₀ en L (ou m³), ΔP, K en bar | K ≈ 15 000 bar pour une huile minérale pure (sans air) |
| Variation de volume avec la température | ΔV = V₀ × B × ΔT | ΔV, V₀ en L, B sans dimension (≈ 0,00075), ΔT en °C | B = coefficient de dilatation thermique de l'huile |

*Le module de compressibilité effectif chute fortement en présence d'air entraîné, surtout aux basses pressions (effet amplifié sous 20-40 bar).*

## 5. Paramètres importants
- Quantité d'air dissous ou entraîné dans le circuit — paramètre dominant sur la compressibilité réelle, bien plus que la nature de l'huile elle-même
- Volume total d'huile sous pression (longueur de tuyauterie, volume des vérins) — plus le volume est grand, plus l'effet de la compressibilité est sensible en absolu
- Rigidité des tuyauteries (flexibles vs rigides) — les flexibles ajoutent leur propre élasticité à l'effet de compressibilité de l'huile
- Débit disponible — à débit faible, le temps nécessaire pour « charger » en pression un grand volume compressible devient non négligeable sur le temps de cycle

## 6. Exemples concrets (terrain)
Augmentation de pression de 0 à 200 bar dans une tuyauterie de 1/2" (12,7 mm) de 3 m de longueur (volume d'huile V₀ = 0,38 L), avec K = 15 000 bar :
- ΔV = V₀ × ΔP / K = 0,38 × 200 / 15 000 ≈ 5,1 mL

Il faut donc fournir 5,1 mL d'huile supplémentaire uniquement pour comprimer l'huile déjà présente dans cette portion de circuit, avant même que le mouvement utile du récepteur ne commence — un effet généralement négligeable sur une petite portion, mais qui devient significatif sur de grands volumes ou de longs flexibles.

Autre exemple (dilatation thermique) : une augmentation de 20°C d'un volume d'huile de 200 L entraîne une augmentation de volume d'environ 3 L (200 × 0,00075 × 20).

## 7. Points de réglage / vigilance
- Privilégier les tuyauteries rigides plutôt que les flexibles lorsque la précision ou la dynamique du système l'exige
- Placer la régulation de débit/pression au plus près de l'actionneur, pour limiter le volume d'huile compressible entre la régulation et le mouvement utile
- Soigner la désaération de l'huile dans le réservoir et l'étanchéité à l'aspiration des pompes, pour limiter la présence d'air qui dégrade fortement le module de compressibilité effectif
- Anticiper les effets de dilatation thermique sur un circuit fermé (vérin bloqué, pas de retour réservoir) : prévoir un limiteur de pression ou un accumulateur de compensation

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Temps de réponse anormalement long | Délai entre commande et mouvement effectif | Grand volume d'huile compressible à « charger » avant le mouvement utile, aggravé par la présence d'air |
| Surpression dans un circuit fermé à l'arrêt | Pression qui monte sans commande, parfois jusqu'à rupture | Dilatation thermique de l'huile dans un volume fermé sans échappatoire (vérin bloqué entre deux clapets) |
| Précision insuffisante sur un asservissement | Oscillations, dépassement de consigne | Compressibilité non prise en compte dans le dimensionnement de la régulation (effet ressort de l'huile) |

## 9. Liens avec d'autres composants
- Loi de Pascal (fiche 01.01) — la loi de Pascal suppose un fluide rigoureusement incompressible ; cette fiche en précise les limites pratiques
- Désaération de l'huile — paramètre clé pour limiter la dégradation du module de compressibilité effectif
- Accumulateurs hydrauliques — utilisés notamment pour absorber les effets de dilatation thermique ou les coups de bélier
- Asservissement servohydraulique (fiche 12.08) — la compressibilité de l'huile est un paramètre de premier ordre dans la dynamique de ces systèmes de précision
