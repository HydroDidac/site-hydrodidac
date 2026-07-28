---
code: "F034"
titre: "Calcul force / vitesse en extension et rétraction"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "À partir de la pression et du débit disponibles, calculer la force et la vitesse d'un vérin dans les deux sens de déplacement."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.06"
---

## 1. Définition en une phrase
Le calcul force/vitesse d'un vérin permet de déterminer, pour une pression et un débit donnés, la force développée et la vitesse de déplacement de la tige, en extension comme en rétraction.

## 2. Principe de fonctionnement
La force développée par un vérin résulte directement de la pression appliquée sur la surface active du piston (F = p·S), tandis que la vitesse de déplacement résulte du débit injecté dans la chambre active divisé par cette même surface (v = Q/S). Ces deux grandeurs sont liées par la puissance hydraulique disponible (P = p·Q) : à puissance constante, on peut privilégier la force (haute pression, faible débit) ou la vitesse (faible pression, fort débit), mais jamais maximiser les deux simultanément avec la même puissance d'entrée.

## 3. Schéma / Symbole ISO
Pas de symbole dédié — il s'agit d'un calcul appliqué au symbole standard du vérin double effet (fiche 04.01), distinguant la chambre côté fond (S₁) et côté tige (S₂).

## 4. Formules et calculs clés

**Force :**
- Extension : F₁ = p·S₁·ηm
- Rétraction : F₂ = p·S₂·ηm

avec ηm = rendement mécanique (frottement des joints), typiquement 0,90 à 0,97.

**Vitesse :**
- Extension : v₁ = Q/S₁ (en tenant compte du rendement volumétrique ηv, souvent proche de 1 pour un vérin neuf sans fuite interne significative : v₁_réelle = Q·ηv/S₁)
- Rétraction : v₂ = Q/S₂

**Puissance hydraulique consommée :** Ph = p·Q (en W si p en Pa et Q en m³/s ; en kW pratique : Ph[kW] = p[bar]×Q[L/min]/600)

**Puissance mécanique utile :** Pm = F·v = (p·S)·(Q/S) = p·Q → cohérent avec la puissance hydraulique (à rendement près).

**Relation pratique unités terrain :** F[daN] = p[bar] × S[cm²] ; v[cm/s] = Q[L/min] × 1000/(60×S[cm²])

## 5. Paramètres importants
- Pression disponible en sortie de pompe et pertes de charge en ligne (la pression réellement disponible au vérin est inférieure à la pression de tarage du limiteur)
- Débit fourni par la pompe (fixe ou variable selon le type de pompe)
- Surfaces S₁ et S₂ du vérin concerné
- Charge résistante (force nécessaire pour le mouvement, incluant frottements, inertie, gravité)

## 6. Exemples concrets (terrain)
Vérin D=63 mm, d=45 mm, alimenté à 150 bar avec un débit de 25 L/min :
- S₁ = π×6,3²/4 = 31,2 cm² ; S₂ = π×(6,3²−4,5²)/4 = 15,3 cm²
- F₁ = 150×31,2 ≈ 4 680 daN ; F₂ = 150×15,3 ≈ 2 295 daN
- v₁ = 25 000/(60×31,2) ≈ 13,4 cm/s ; v₂ = 25 000/(60×15,3) ≈ 27,2 cm/s

On observe le compromis classique : rétraction deux fois plus rapide mais deux fois moins puissante.

## 7. Points de réglage / vigilance
- Toujours vérifier la pression réellement disponible au vérin (pertes de charge dans flexibles, distributeurs, raccords) et non uniquement la pression de tarage du limiteur
- Prendre en compte le rendement mécanique réel du vérin (catalogue constructeur) pour un dimensionnement précis, pas seulement la formule théorique
- Vérifier la cohérence entre le débit disponible (pompe) et la vitesse souhaitée — un débit insuffisant limite la vitesse même à pression suffisante

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Vitesse réelle inférieure au calcul théorique | Pertes de charge non comptabilisées, fuites internes (rendement volumétrique surestimé) |
| Force insuffisante malgré pression nominale atteinte | Frottements sous-estimés, joints usés, mauvais alignement de charge |
| Confusion entre force statique et force dynamique | Oubli des effets d'inertie et d'accélération de la charge |

## 9. Liens avec d'autres composants
- Vérin double effet pour les définitions de surface (fiche 04.01)
- Pompe et débit théorique/réel pour la source du débit Q (fiche 02.06)
- Pertes de charge linéaires et singulières à intégrer dans le calcul de pression disponible (fiche 01.04)
