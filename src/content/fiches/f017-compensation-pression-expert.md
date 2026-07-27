---
code: "F017"
titre: "Compensateur de pression — pompe à cylindrée variable"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Le mécanisme qui réduit automatiquement la cylindrée d'une pompe dès que sa pression maximale est atteinte, pour ne jamais pousser pour rien."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.09"
---

> Source : `sources/pdf-cours/pompe piston PC, LS, CC.pdf` — principe de
> fonctionnement détaillé du compensateur à pression constante (version
> directe et version à action pilotée).

## 1. Définition en une phrase
Le compensateur de pression est le dispositif qui pilote l'inclinaison du plateau d'une pompe à pistons axiaux pour maintenir automatiquement une pression maximale de service constante, en réduisant la cylindrée dès que cette pression est atteinte.

## 2. Principe de fonctionnement
En pleine cylindrée, la pression de service (en sortie de pompe) est inférieure à la pression maximale réglée au ressort du compensateur : celui-ci maintient le piston de compensation dépressurisé (relié au carter), et le ressort de rappel maintient le plateau en inclinaison maximale, donc en cylindrée maximale. Lorsque la pression de service atteint la valeur réglée, le tiroir du compensateur s'écrase et bascule, mettant en communication la pression de pilotage avec le piston de compensateur. Celui-ci se déplace alors et redresse le plateau de la pompe, réduisant sa cylindrée. La pompe ne débite alors plus que ce qui est nécessaire pour compenser les fuites internes ou une faible consommation résiduelle — elle ne fournit jamais plus de pression que la valeur réglée. Il existe une version « action directe » (le tiroir réagit directement à la pression de service) et une version « action pilotée » (un clapet pilote à très faible raideur de ressort commande indirectement le déplacement du tiroir principal, ce qui permet en plus un pilotage à distance de la pression maximale, par exemple via un limiteur de pression à commande proportionnelle).

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : pompe à cylindrée variable (cercle + triangle avec flèche diagonale), avec un bloc de réglage représentant le compensateur (ressort réglable agissant sur un tiroir ou un clapet pilote).

## 4. Formules et calculs clés

| Grandeur | Principe | Remarques |
|----------|---------|------------------------|
| Pression maximale de service | Réglée par la tension du ressort principal du compensateur | Quelle que soit la complexité de l'asservissement (LS, compensation de puissance...), cette régulation de base reste toujours présente comme protection ultime |
| Débit en annulation de cylindrée | Q ≈ débit de compensation des fuites internes uniquement | La pompe consomme alors très peu de puissance, contrairement à une pompe à cylindrée fixe évacuant son débit par un limiteur de pression |

## 5. Paramètres importants
- Tarage du ressort de compensateur — fixe la pression maximale de service, présente sur toute pompe à cylindrée variable quel que soit le type d'asservissement additionnel
- Version à action directe vs action pilotée — la version pilotée permet un réglage à distance (automate, potentiomètre) de la pression maximale, entre une valeur proche de zéro et la valeur de tarage maximal du ressort pilote
- Possibilité d'ajouter une électrovanne de mise à l'échappement du circuit de pilotage, permettant une annulation de cylindrée à pression quasi nulle pendant les phases sans demande de débit (économie d'énergie et réduction de la fatigue de la pompe)

## 6. Exemples concrets (terrain)
Pendant une étape initiale de cycle (attente, pas de mouvement demandé), une pompe à compensateur pression constante, équipée d'une électrovanne de mise à l'échappement du pilotage, peut passer en annulation de cylindrée à pression quasiment nulle : aucune perte de chaleur, aucun coût énergétique inutile, et moins de fatigue mécanique — bien mieux qu'une pompe maintenue à sa pression maximale en attente.

## 7. Points de réglage / vigilance
- Régler systématiquement la pression maximale du compensateur en dessous de la limite mécanique des composants les plus faibles du circuit
- Sur la version à action pilotée, distinguer le réglage du ressort pilote (pression maximale absolue) du pilotage à distance (qui ne peut que réduire cette valeur, jamais la dépasser)
- Vérifier le bon fonctionnement du drain de la boîte à ressort (évacuation vers le réservoir), nécessaire au bon fonctionnement du compensateur

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Pompe qui ne réduit jamais sa cylindrée | Compensateur grippé ou mal réglé, ressort cassé |
| Pression instable, oscillations | Version à action directe avec ressort de raideur inadaptée, ou usure du tiroir |
| Pas d'effet du pilotage à distance | Défaut sur la commande proportionnelle du limiteur pilote, ou câblage défectueux |

## 9. Liens avec d'autres composants
- Pompe à pistons axiaux — plateau incliné (fiche 02.04) — technologie sur laquelle s'applique ce compensateur
- Load sensing — régulation de débit à la demande (fiche 02.08) — évolution plus sophistiquée de ce principe de base
- Compensation de puissance (fiche 02.10)
