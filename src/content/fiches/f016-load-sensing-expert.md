---
code: "F016"
titre: "Load sensing — régulation de débit à la demande"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Une pompe qui adapte en permanence son débit à la charge réelle du circuit, en maintenant un écart de pression constant : le principe qui économise le plus d'énergie sur les circuits multi-fonctions."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.08"
---

> Source : `sources/pdf-cours/pompe piston PC, LS, CC.pdf` (schémas de
> principe pompe à pistons axiaux, régulation Load Sensing).

## 1. Définition en une phrase
Le Load Sensing (LS) est un mode de régulation de pompe à cylindrée variable qui adapte automatiquement le débit fourni à la demande réelle des récepteurs, en maintenant une différence de pression constante entre la sortie pompe et la charge la plus exigeante du circuit.

## 2. Principe de fonctionnement
Contrairement à la régulation à pression constante (fiche 02.09), qui ne fait qu'annuler la cylindrée au-delà d'une pression maximale fixe, le Load Sensing pilote en permanence l'inclinaison du plateau de la pompe en comparant la pression de sortie pompe à la pression de charge réelle du récepteur le plus exigeant (remontée par une ligne de pilotage dédiée, le "LS"). Le compensateur maintient un écart de pression constant (typiquement 15 à 25 bar) entre ces deux valeurs, juste suffisant pour faire passer le débit demandé à travers le distributeur. Si la charge diminue, la pompe réduit sa cylindrée (et donc son débit) en conséquence ; si la charge augmente, elle l'augmente — la pompe ne fournit jamais plus de puissance que ce qui est strictement nécessaire, contrairement à une régulation à pression constante qui maintient toujours la pression maximale même quand un faible débit suffirait.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : pompe à cylindrée variable (cercle + triangle avec flèche diagonale) avec une ligne de pilotage supplémentaire (LS) remontant l'information de pression de charge depuis le distributeur ou le récepteur. Compensateur représenté par un bloc à deux ressorts opposés (ressort de pilotage LS face à la pression de sortie pompe).

## 4. Formules et calculs clés

| Grandeur | Formule / Principe | Remarques |
|----------|---------|------------------------|
| Pression de sortie pompe régulée | P_pompe = P_charge + ΔP_LS | ΔP_LS = différence de pression Load Sensing, réglée au ressort du compensateur (typiquement 15-25 bar) |
| Puissance dissipée en excédent | P_dissipée ≈ ΔP_LS × Q_demandé / 600 (kW, bar, L/min) | Comparée à une régulation à pression constante : ΔP_LS << P_max, donc dissipation bien moindre |

## 5. Paramètres importants
- Réglage du ΔP du compensateur LS — détermine la marge de pression disponible pour vaincre les pertes de charge du distributeur
- Réactivité du système face aux variations rapides de charge — paramètre dynamique critique sur les applications multi-fonctions
- Compatibilité avec les distributeurs à centre fermé compensés en pression, qui exploitent pleinement ce principe

## 6. Exemples concrets (terrain)
Sur un engin de travaux publics équipé d'une pompe Load Sensing alimentant plusieurs fonctions (godet, flèche, translation) via des distributeurs proportionnels, chaque fonction peut avoir une charge différente : le système Load Sensing s'assure que la pompe fournit toujours juste la pression nécessaire à la fonction la plus exigeante à un instant donné, plutôt que de maintenir systématiquement la pression maximale du circuit — d'où un gain de rendement énergétique important par rapport à une régulation à pression constante simple.

## 7. Points de réglage / vigilance
- Vérifier que la ligne de pilotage LS n'est pas obstruée ou endommagée : une perte de signal LS fait basculer la pompe en régulation de sécurité (souvent pleine pression), annulant le bénéfice énergétique
- S'assurer de la compatibilité entre la pompe LS et les distributeurs du circuit (centre fermé compensé en pression requis)
- Sur les circuits multi-fonctions, le ΔP du compensateur doit rester suffisant pour la fonction la plus défavorisée, sous peine de manque de débit sur certains mouvements simultanés

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Pompe qui reste à pression maximale en permanence | Ligne de pilotage LS coupée, bouchée, ou mal raccordée |
| Mouvements lents lors de fonctions simultanées | ΔP du compensateur insuffisant pour le débit total demandé |
| Échauffement malgré régulation LS | Distributeur non compatible avec la technologie LS (centre ouvert au lieu de centre fermé compensé) |

## 9. Liens avec d'autres composants
- Compensateur de pression — pompe à cylindrée variable (fiche 02.09) — régulation de base sur laquelle s'appuie le Load Sensing
- Régulation de pression en Load Sensing (fiche 06.09) — approfondit le sujet côté distribution
- Pression de standby et pression de coupure (fiche 06.10) — notions complémentaires au fonctionnement LS
