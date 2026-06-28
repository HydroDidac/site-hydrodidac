---
code: "F003"
titre: "Vérin double effet — force, vitesse, surface annulaire"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Le vérin double effet est poussé ET tiré par l'huile : pas besoin de ressort. Comprendre pourquoi il pousse plus fort qu'il ne tire, mais tire plus vite."
tempsLecture: 5
ficheLiees: ["F004", "F005"]
datePublication: 2026-06-28
formulesClefs:
  - "S₁ = π·D²/4 (surface côté fond)"
  - "S₂ = π·(D² − d²)/4 (surface annulaire, côté tige)"
  - "F₁ = p·S₁·ηm (extension) ; F₂ = p·S₂ (rétraction)"
  - "v₁ = Q/S₁ (extension) ; v₂ = Q/S₂ (rétraction)"
  - "k = S₁/S₂ (rapport de surfaces, 1,3 à 2 typiquement)"
securite: "Vérifier que la pression de service reste sous la pression nominale du vérin avec marge de sécurité (généralement 25 %). Attention à la cavitation côté tige lors de charges tractrices en descente rapide."
---

## Principe de fonctionnement
Le vérin se compose d'un corps cylindrique, d'un piston divisant le tube en deux chambres, et d'une tige solidaire du piston. L'envoi d'huile sous pression dans la chambre côté fond pousse le piston et fait sortir la tige (extension) ; le retour se fait par dépressurisation de cette chambre et mise en pression de la chambre côté tige (rétraction). Contrairement au vérin simple effet, les deux mouvements sont commandés par le fluide — aucun ressort de rappel n'est nécessaire. Un distributeur (souvent 4/3 ou 4/2) gère l'alimentation alternée des deux chambres.

Comme S₂ < S₁ (à cause de la tige), pour un même débit Q la vitesse de rétraction est supérieure à la vitesse d'extension, mais la force développée en rétraction est inférieure. *Unités : p en bar (1 bar = 10⁵ Pa), S en cm², F en daN si p en bar et S en cm² (F[daN] = p[bar]·S[cm²]).*

## Paramètres importants
- Diamètre d'alésage D et diamètre de tige d (norme ISO 7181 / DIN 24561 — séries courantes 25/18, 32/22, 40/28, 50/36, 63/45, 80/56, 100/70)
- Course (longueur de déplacement utile)
- Pression nominale (PN) et pression d'épreuve (1,5× PN typiquement)
- Vitesse maximale admissible (liée à l'amortissement de fin de course)
- Fixations (tourillons, brides, articulation, chape) selon ISO 6020/6022

## Exemples concrets (terrain)
Un vérin de levage D=80 mm, d=56 mm, alimenté à 200 bar :
- S₁ = π×8²/4 = 50,3 cm² ; S₂ = π×(8²−5,6²)/4 = 25,7 cm²
- F₁ = 200×50,3 = 10 060 daN ≈ 10 t en extension ; F₂ = 200×25,7 = 5 140 daN ≈ 5,1 t en rétraction

Pour un débit pompe de 40 L/min : v₁ ≈ 13,3 cm/s en extension, v₂ ≈ 25,9 cm/s en rétraction.

## Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Vitesse de rétraction anormalement élevée non maîtrisée | Charge motrice (effet de charge) + régulation absente côté retour, cavitation |
| Force insuffisante en extension malgré pression nominale | Fuites internes piston (joint usé), perte de charge excessive en amont |
| Choc en fin de course | Absence ou défaillance d'amortisseur, vitesse trop élevée |
| Déplacement irrégulier (stick-slip) | Frottement joints trop important, défaut d'alignement, air dans le circuit |

## Liens avec d'autres composants
- Distributeur 4/2 ou 4/3 pour la commande directionnelle (fiche 03.01)
- Limiteur de pression pour la protection du circuit (fiche 06.01)
- Circuit différentiel pour augmenter la vitesse d'extension (fiche 12.05)
- Régulateurs de débit meter-in/meter-out pour le contrôle de vitesse (fiche 07.06)
