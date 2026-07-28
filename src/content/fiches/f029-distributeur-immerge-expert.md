---
code: "F029"
titre: "Distributeurs immergés et montage en sous-plaque"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Un distributeur peut fonctionner plongé dans l'huile du réservoir ou monté en sous-plaque : gain de place et de refroidissement, au prix d'un accès plus difficile pour la maintenance."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "03.09"
---

> Aucun PDF dédié précisément aux distributeurs immergés n'a été trouvé dans
> `sources/pdf-cours/` — fiche basée sur les connaissances générales. Le
> document `distributeur mobile.pdf` (distributeurs sectionnels à centre à
> suivre pour engins mobiles) traite un montage voisin mais distinct,
> mentionné en lien.

## 1. Définition en une phrase
Un distributeur immergé (ou « submersible ») est conçu pour fonctionner directement plongé dans le réservoir d'huile, tandis que le montage en sous-plaque désigne une installation où le distributeur est fixé sous une embase ou un bloc, orientation inversée par rapport au montage classique en surface.

## 2. Principe de fonctionnement
Le distributeur immergé profite du bain d'huile du réservoir pour assurer un refroidissement naturel et une lubrification continue de ses parties mobiles, réduisant l'usure et limitant les risques de prise d'air. Cette disposition est surtout répandue sur certains groupes hydrauliques compacts où le réservoir intègre directement les composants de distribution, réduisant l'encombrement et la longueur de tuyauterie (donc les pertes de charge et les points de fuite externes). Le montage en sous-plaque, quant à lui, consiste à fixer le distributeur sous un bloc ou une embase plutôt que dessus, ce qui peut faciliter l'accès aux connexions électriques tout en gardant le corps hydraulique protégé, ou s'adapter à des contraintes d'implantation spécifiques sur la machine.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique pour ces variantes de montage (la fonction de distribution reste identique, seule l'implantation change) — le symbole fonctionnel est identique à celui d'un distributeur classique de même type (X/Y).

## 4. Paramètres importants
- Étanchéité renforcée des connexions électriques (bobines, capteurs) — indispensable sur un distributeur immergé en permanence dans l'huile
- Accessibilité pour la maintenance — un composant immergé ou en sous-plaque est souvent moins accessible qu'un montage classique en surface, à anticiper dès la conception
- Compatibilité des matériaux et des joints avec une immersion permanente dans le fluide hydraulique

## 5. Exemples concrets (terrain)
Certains groupes hydrauliques compacts pour machines-outils intègrent directement le distributeur dans le couvercle du réservoir, immergé dans l'huile : cela simplifie le câblage hydraulique (suppression de tuyauteries externes) au prix d'un accès plus difficile pour la maintenance, qui nécessite parfois une vidange partielle du réservoir.

## 6. Points de réglage / vigilance
- Vérifier la compatibilité des bobines électriques et de leurs connecteurs avec un fonctionnement en immersion permanente (étanchéité IP adaptée)
- Anticiper les opérations de maintenance : prévoir un accès facilité ou un protocole de vidange partielle si le composant est difficile d'accès
- S'assurer que le montage en sous-plaque ne crée pas de poche d'air ou de difficulté de purge lors du remplissage du circuit

## 7. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Défaillance électrique précoce sur un distributeur immergé | Connecteurs ou bobines non adaptés à l'immersion permanente |
| Maintenance difficile et coûteuse | Accès non anticipé lors de la conception du groupe hydraulique |

## 8. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01)
- Standard CETOP — montage sur embase (fiche 03.08) — alternative de montage plus classique
- Réservoir hydraulique — conception et volume (fiche 11.04) — directement concerné par l'intégration d'un distributeur immergé
