---
code: "F010"
titre: "Pompe à engrenages internes (Gerotor)"
niveau: "avance"
module: "Pompes hydrauliques"
resume: "Un rotor tournant dans un anneau à denture interne : la technologie des orbitrols de direction, plus utilisée en moteur qu'en pompe."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.02"
---

> Source : `sources/pdf-cours/POMPES ET MOTEURS HYDRAULIQUES.pdf` (§1.3.2 et
> §1.2 — principe, marchés, applications type orbitrol Danfoss).

## 1. Définition en une phrase
La pompe (ou moteur) à engrenages internes met en œuvre un pignon intérieur entraînant un pignon extérieur à denture interne légèrement décalé, créant des chambres de volume variable lors de la rotation — technologie plus utilisée en moteur qu'en pompe.

## 2. Principe de fonctionnement
Contrairement à la pompe à engrenages externes (deux pignons côte à côte), la pompe à engrenages internes utilise un petit pignon (rotor) tournant à l'intérieur d'un pignon à denture interne (stator), avec un nombre de dents différent entre les deux. Cette différence de denture crée des chambres dont le volume varie au cours de la rotation : croissant côté aspiration, décroissant côté refoulement. Cette technologie, plus coûteuse à fabriquer que les engrenages externes, offre une large gamme de cylindrées et une bonne durée de vie. Elle est très répandue sous forme de moteur (notamment les célèbres orbitrols de direction type Danfoss) plutôt que sous forme de pompe.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 identique à toute pompe/moteur à cylindrée fixe (cercle + triangle plein). Coupe interne caractéristique : un rotor interne à denture externe tournant à l'intérieur d'un anneau à denture interne, légèrement excentré.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Débit théorique (en pompe) | Q_th = Cyl × N | Q en L/min, Cyl en cm³/tr, N en tr/min | Cylindrée fixe |
| Couple théorique (en moteur) | C_th = (Cyl × p) / (2π) | C en Nm, Cyl en cm³/tr, p en Pa | Application typique : orbitrol de direction |

## 5. Paramètres importants
- Cylindrée — large gamme disponible, fixe
- Usage privilégié en moteur plutôt qu'en pompe (notamment pompes de gavage chez certains constructeurs comme Rexroth)
- Application typique : direction assistée hydrostatique (orbitrol), mouvements rotatifs sur engins agricoles (fonds mouvants, hérissons d'épandeurs, rotors de débroussailleuses)

## 6. Exemples concrets (terrain)
L'orbitrol Danfoss (gamme OMV, OMT, OMR, OMP, OMM...) équipe la direction de très nombreux engins mobiles : le volant entraîne un distributeur rotatif qui dose précisément le débit envoyé vers un moteur à engrenages internes, lequel actionne le vérin de direction — la cylindrée du moteur orbitrol détermine la précision et l'effort au volant.

## 7. Points de réglage / vigilance
- Sur les applications de direction (orbitrol), ne jamais intervenir sur le réglage sans connaître précisément la cylindrée prescrite par le constructeur : un mauvais choix affecte directement la sécurité de conduite
- Vérifier l'étanchéité interne sur les applications de pompe de gavage, où une fuite interne réduit l'efficacité de la pré-pressurisation

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Direction dure ou imprécise | Usure interne du moteur orbitrol, fuites internes croissantes |
| Mouvement rotatif irrégulier (hérisson, rotor) | Usure du moteur à engrenages internes, pollution de l'huile |

## 9. Liens avec d'autres composants
- Pompe à engrenages externes (fiche 02.01) — technologie voisine, plus utilisée en pompe pure
- Cylindrée et débit théorique (fiche 02.06)
- Gavage des pompes et moteurs — application fréquente de cette technologie en pompe de gavage
