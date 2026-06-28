---
code: "F003"
titre: "Vérin double effet — force, vitesse, surface annulaire"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Le vérin double effet est poussé ET tiré par l'huile : pas besoin de ressort. Comprendre pourquoi il pousse plus fort qu'il ne tire, mais tire plus vite."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-06-28
---

## 1. Définition en une phrase
Un vérin double effet est un actionneur linéaire hydraulique dont la tige peut être poussée et tirée par le fluide sous pression, alimenté alternativement sur les chambres avant (côté tige) et arrière (côté fond).

## 2. Principe de fonctionnement
Le vérin se compose d'un corps cylindrique, d'un piston divisant le tube en deux chambres, et d'une tige solidaire du piston. L'envoi d'huile sous pression dans la chambre côté fond pousse le piston et fait sortir la tige (extension) ; le retour se fait par dépressurisation de cette chambre et mise en pression de la chambre côté tige (rétraction). Contrairement au vérin simple effet, les deux mouvements sont commandés par le fluide — aucun ressort de rappel n'est nécessaire. Un distributeur (souvent 4/3 ou 4/2) gère l'alimentation alternée des deux chambres.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : rectangle représentant le corps, trait plein traversant pour la tige, deux orifices représentés par des traits perpendiculaires aux deux extrémités (un côté fond, un côté tige). Le piston est représenté par un trait transversal interne séparant les deux chambres.

## 4. Formules et calculs clés

**Surfaces :**
- Surface côté fond (piston plein) : S₁ = π·D²/4
- Surface côté tige (surface annulaire) : S₂ = π·(D² − d²)/4

où D = diamètre du piston (alésage), d = diamètre de la tige.

**Force développée :**
- En extension (poussée) : F₁ = p·S₁ (théorique) — F₁_réelle = p·S₁·ηm (ηm = rendement mécanique, souvent 0,90 à 0,97)
- En rétraction (tirée) : F₂ = p·S₂

**Vitesse :**
- En extension : v₁ = Q/S₁
- En rétraction : v₂ = Q/S₂

Comme S₂ < S₁ (à cause de la tige), pour un même débit Q la vitesse de rétraction est supérieure à la vitesse d'extension, mais la force développée en rétraction est inférieure.

**Rapport de surfaces** (utile pour les circuits différentiels) : k = S₁/S₂, typiquement entre 1,3 et 2 selon le ratio diamètre tige/alésage.

*Unités : p en bar (1 bar = 10⁵ Pa), S en cm², F en daN si p en bar et S en cm² (F[daN] = p[bar]·S[cm²]).*

## 5. Paramètres importants
- Diamètre d'alésage D et diamètre de tige d (norme ISO 7181 / DIN 24561 pour les vérins industriels — séries courantes 25/18, 32/22, 40/28, 50/36, 63/45, 80/56, 100/70)
- Course (longueur de déplacement utile)
- Pression nominale (PN) et pression d'épreuve (1,5× PN typiquement)
- Vitesse maximale admissible (liée à l'amortissement de fin de course)
- Fixations (tourillons, brides, articulation, chape) selon ISO 6020/6022

## 6. Exemples concrets (terrain)
Un vérin de levage D=80 mm, d=56 mm, alimenté à 200 bar :
- S₁ = π×8²/4 = 50,3 cm²
- S₂ = π×(8²−5,6²)/4 = 25,7 cm²
- F₁ = 200×50,3 = 10 060 daN ≈ 10 t en extension
- F₂ = 200×25,7 = 5 140 daN ≈ 5,1 t en rétraction

Pour un débit pompe de 40 L/min :
- v₁ = 40 000 cm³/min ÷ 50,3 cm² ≈ 795 cm/min ≈ 13,3 cm/s
- v₂ = 40 000 ÷ 25,7 ≈ 1 556 cm/min ≈ 25,9 cm/s

## 7. Points de réglage / vigilance
- Vérifier que la pression de service reste sous la pression nominale du vérin avec marge de sécurité (généralement 25 %)
- Contrôler le flambage pour les grandes courses (voir fiche 04.04)
- Prévoir l'amortissement de fin de course sur les applications à vitesse élevée (voir fiche 04.05)
- Attention à la cavitation côté tige lors de charges tractrices en descente rapide (charge qui entraîne le vérin plus vite que le débit fourni)

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Vitesse de rétraction anormalement élevée non maîtrisée | Charge motrice (effet de charge) + régulation absente côté retour, cavitation |
| Force insuffisante en extension malgré pression nominale | Fuites internes piston (joint usé), perte de charge excessive en amont |
| Choc en fin de course | Absence ou défaillance d'amortisseur, vitesse trop élevée |
| Déplacement irrégulier (stick-slip) | Frottement joints trop important, défaut d'alignement, air dans le circuit |

## 9. Liens avec d'autres composants
- Distributeur 4/2 ou 4/3 pour la commande directionnelle (fiche 03.01)
- Limiteur de pression pour la protection du circuit (fiche 06.01)
- Circuit différentiel pour augmenter la vitesse d'extension (fiche 12.05)
- Régulateurs de débit meter-in/meter-out pour le contrôle de vitesse (fiche 07.06)
