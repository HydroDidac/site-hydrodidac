---
code: "F002"
titre: "Loi de Pascal — transmission de pression"
niveau: "avance"
module: "Notions fondamentales"
resume: "La loi de Pascal explique pourquoi une petite force sur un petit piston peut en soulever une énorme à l'autre bout d'un circuit hydraulique."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-06-28
refPoleB: "01.01"
---

> Sources : `sources/pdf-cours/PRINCIPES FONDAMENTAUX DE L'HYDR.pdf` (§3.2) et
> `sources/pdf-cours/Principe de l'hydraulique mars 2010.pdf` (p.6-7) — principe
> du « multiplicateur de Pascal » et formules de base. Le reste de la fiche
> (paramètres, erreurs fréquentes, liens) provient des connaissances générales.

## 1. Définition en une phrase
La loi de Pascal énonce que, dans un fluide incompressible au repos, toute variation de pression appliquée en un point se transmet intégralement et instantanément à tous les points du fluide et aux parois du contenant, quelle que soit la forme de celui-ci.

## 2. Principe de fonctionnement
Dans un liquide confiné, la pression ne dépend pas de la direction (elle est isotrope) : elle s'exerce perpendiculairement à toute surface en contact avec le fluide, avec la même intensité en tout point d'une même section, en négligeant la colonne de fluide (poids propre). C'est ce principe qui permet, dans un circuit hydraulique, de transmettre une force d'un point à un autre via deux pistons de surfaces différentes reliés par le même fluide : une petite force appliquée sur une petite surface génère une pression qui, appliquée sur une plus grande surface, produit une force plus importante. Aucune énergie n'est créée — c'est un rapport de surfaces qui multiplie la force au prix d'une réduction proportionnelle du déplacement (conservation de l'énergie : travail = force × déplacement, identique des deux côtés en théorie).

## 3. Schéma / Symbole ISO
Schéma de principe (pas un symbole ISO 1219 normalisé, car la loi de Pascal est un principe physique, pas un composant) : deux cylindres de diamètres différents reliés par une conduite remplie de fluide. Un piston de petite section S₁ reçoit une force F₁ ; un piston de grande section S₂, relié hydrauliquement au premier, développe une force F₂ plus grande. La pression p est identique dans tout le circuit (en négligeant les pertes de charge).

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Pression | p = F / S | p en bar (ou Pa), F en daN (ou N), S en cm² (ou m²) | Fluide au repos, incompressible |
| Égalité de pression | p₁ = p₂ → F₁/S₁ = F₂/S₂ | — | Les deux pistons sont reliés par le même fluide |
| Multiplication de force | F₂ = F₁ × (S₂/S₁) | F en daN, S en cm² | S₂/S₁ = rapport de multiplication |
| Conservation des volumes | V₁ = V₂ → S₁×d₁ = S₂×d₂ | d = déplacement | Le petit piston se déplace plus que le grand |

*Conversion utile : 1 bar = 10⁵ Pa ; F[daN] = p[bar] × S[cm²].*

## 5. Paramètres importants
- Rapport de surfaces S₂/S₁ entre les deux pistons — fixe le facteur de multiplication de force
- Étanchéité du circuit — toute fuite interne fait chuter la pression transmise et donc la force réellement disponible
- Compressibilité du fluide — la loi suppose un fluide incompressible ; en pratique l'huile hydraulique a une compressibilité faible mais non nulle (voir fiche 01.05), ce qui introduit un léger retard de transmission sur de grandes longueurs de conduite ou de gros volumes
- Pression maximale admissible des composants (joints, conduites, réservoir) — la multiplication de force ne doit jamais dépasser la limite mécanique du circuit

## 6. Exemples concrets (terrain)
Presse hydraulique d'atelier : piston de commande (vérin pilote) de section S₁ = 2 cm², actionné avec une force F₁ = 50 daN.
- Pression générée : p = 50/2 = 25 bar
- Piston de presse de section S₂ = 100 cm², soumis à cette même pression de 25 bar :
- Force développée : F₂ = 25 × 100 = 2 500 daN ≈ 2,5 tonnes

Rapport de multiplication : S₂/S₁ = 50 — pour 50 fois plus de force, le petit piston doit se déplacer 50 fois plus que le grand (conservation du volume déplacé).

## 7. Points de réglage / vigilance
- Vérifier que la pression maximale du circuit (limitée par le composant le plus faible) n'est jamais dépassée, même en cas de blocage en fin de course (le limiteur de pression — fiche 06.01 — sert justement à cela)
- Sur de longues distances de transmission ou de gros volumes de fluide, la compressibilité de l'huile (fiche 01.05) introduit un temps de réponse non négligeable, à anticiper sur les circuits de précision
- Ne pas confondre la loi de Pascal (transmission de pression dans un fluide au repos) avec l'équation de Bernoulli (fiche 01.02), qui s'applique aux fluides en mouvement et inclut les effets de vitesse

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Force de sortie plus faible que calculée | Presse ou vérin moins puissant que prévu | Fuite interne réduisant la pression réellement transmise, ou pertes de charge dans les conduites |
| Temps de réponse anormalement long | Retard entre commande et mouvement effectif | Volume de fluide important à comprimer/déplacer, conduites trop longues ou de diamètre insuffisant |
| Surpression et rupture d'un composant | Joint ou flexible qui éclate | Absence ou mauvais réglage du limiteur de pression face à la multiplication de force |

## 9. Liens avec d'autres composants
- Cylindrée et débit théorique (fiche 02.06) — relie le déplacement des pistons au débit nécessaire
- Limiteur de pression (fiche 06.01) — protège le circuit contre la surpression issue de la multiplication de force
- Intensificateur de pression (fiche 12.07) — application directe de la loi de Pascal pour démultiplier la pression elle-même
- Compressibilité de l'huile (fiche 01.05) — limite pratique de l'hypothèse "fluide incompressible"
