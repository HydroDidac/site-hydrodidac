---
code: "F033"
titre: "Amortissement de fin de course"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Un dispositif qui ralentit le piston avant sa butée mécanique, pour éviter les chocs hydrauliques et l'usure prématurée du vérin."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.05"
---

## 1. Définition en une phrase
L'amortissement de fin de course est un dispositif intégré au vérin (ou ajouté en externe) qui ralentit progressivement le piston avant qu'il n'atteigne sa butée mécanique, afin d'éviter les chocs hydrauliques et mécaniques.

## 2. Principe de fonctionnement
Sans amortissement, un piston se déplaçant à vitesse constante percute brutalement le fond ou la tête du vérin, générant un pic de pression (coup de bélier) et une contrainte mécanique importante sur l'ensemble du vérin et de la structure portée. L'amortisseur intégré fonctionne généralement par restriction progressive : une douille profilée (ou un pointeau conique) vient obturer progressivement l'orifice d'échappement du fluide sur les derniers millimètres de course, forçant le fluide à s'évacuer par un passage calibré (souvent réglable par une vis pointeau), ce qui crée une contre-pression freinant le piston avant le contact métal-métal final.

## 3. Schéma / Symbole ISO
Représenté sur le symbole du vérin par un trait supplémentaire en pointillé ou un petit cercle aux extrémités, indiquant la présence d'un amortisseur réglable (souvent noté « damping » ou avec le symbole d'un clapet/orifice réglable intégré).

## 4. Formules et calculs clés

**Énergie cinétique à dissiper :** Ec = ½·m·v²

où m = masse en mouvement (piston + tige + charge entraînée ramenée à l'axe du vérin) et v = vitesse en fin de course juste avant amortissement.

**Pression de freinage générée :** liée à la restriction de l'orifice calibré (loi des orifices) : Q = Cd·A·√(2·ΔP/ρ)
→ Pour un débit Q imposé par la vitesse du piston (Q = v·S), la section d'orifice A déterminera la contre-pression ΔP générée, donc la décélération.

**Décélération moyenne souhaitable :** a = v²/(2·d), où d = longueur de la zone d'amortissement (souvent 10 à 50 mm selon le diamètre du vérin) — permet de vérifier que la décélération reste dans les limites mécaniques acceptables pour la structure.

## 5. Paramètres importants
- Longueur de la zone d'amortissement (course sur laquelle l'effet se produit)
- Vitesse d'arrivée en début de zone d'amortissement
- Masse totale en mouvement (inertie à absorber)
- Réglage du débit de fuite résiduel via vis pointeau (réglage fin disponible sur de nombreux vérins industriels)
- Amortissement symétrique (les deux sens) ou asymétrique (un seul sens) selon le modèle

## 6. Exemples concrets (terrain)
Vérin de presse à grande vitesse d'approche puis amorti sur les derniers centimètres avant contact avec la pièce, pour éviter un choc qui endommagerait l'outillage. Vérin de manutention rapide (cycle court) où l'amortissement évite la fatigue prématurée des fixations et des paliers.

## 7. Points de réglage / vigilance
- Régler le pointeau d'amortissement progressivement, en partant d'une position fermée et en ouvrant légèrement jusqu'à obtenir un arrêt souple sans à-coup ni trop de lenteur
- Vérifier que la vitesse d'approche n'est pas excessive par rapport à la capacité d'absorption de l'amortisseur (au-delà d'une certaine énergie cinétique, l'amortisseur intégré ne suffit plus — prévoir une décélération externe via régulateur de débit en amont)
- Sur charge variable, anticiper que l'amortissement optimal pour une charge légère peut être insuffisant pour une charge lourde

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Choc persistant en fin de course malgré amortisseur | Vitesse d'arrivée trop élevée pour la capacité de l'amortisseur, réglage du pointeau insuffisant |
| Vérin qui s'arrête avant la fin de course complète | Amortisseur trop fermé (restriction excessive) |
| Usure prématurée du joint d'amortisseur | Cycles trop fréquents à vitesse élevée, dépassement de la capacité thermique de l'amortisseur |

## 9. Liens avec d'autres composants
- Vérin double effet, principal bénéficiaire de ce dispositif (fiche 04.01)
- Régulateur de débit externe en complément pour les fortes inerties (fiche 07.01)
- Décélération et rampe hydraulique en amont du circuit pour réduire la vitesse avant l'amortisseur intégré (fiche 07.05)
