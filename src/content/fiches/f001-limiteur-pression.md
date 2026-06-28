---
code: "F001"
titre: "Comment régler un limiteur de pression à action directe"
niveau: "intermediaire"
module: "Régulation de pression"
resume: "Le limiteur de pression à action directe protège un circuit en limitant la pression maximale. Voici son principe et comment le régler."
tempsLecture: 4
ficheLiees: ["F005", "F012"]
datePublication: 2026-06-28
---

## Principe en 3 lignes
Un limiteur de pression à action directe s'ouvre dès que la pression dépasse la
force de tarage du ressort, renvoyant le surplus de débit vers le réservoir.
Il protège le circuit contre les surpressions.

## Formules clés
- Pression de tarage : `P = F / S` (F = force ressort, S = section du tiroir)
- Débit de fuite à l'ouverture : dépend de l'écart entre pression réelle et
  pression de tarage (ΔP).

## Fonctionnement détaillé
*(à compléter par le pôle B — fiche d'exemple pour tester le gabarit du site)*

## Pannes & diagnostic
| Symptôme | Cause probable |
|---|---|
| Pression instable | Ressort fatigué ou tiroir grippé |
| Pression trop basse | Tarage mal réglé ou fuite interne |

## ⚠️ Sécurité
Ne jamais régler un limiteur de pression au-delà de la pression maximale
admissible des composants du circuit (joints, flexibles, réservoir).

## À retenir
- Le limiteur de pression protège, il ne régule pas en continu.
- Toujours vérifier la pression maximale admissible avant réglage.
- Un tarage trop élevé annule la protection du circuit.

## Fiches liées
- F005 — Pression de tarage, pression de travail, pression de pointe
- F012 — Limiteur de pression à commande pilote
