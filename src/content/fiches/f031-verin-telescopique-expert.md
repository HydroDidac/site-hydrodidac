---
code: "F031"
titre: "Vérin télescopique — étages et course"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Plusieurs tubes emboîtés permettent une course très supérieure à la longueur rétractée, au prix d'une vitesse qui augmente à chaque étage déployé."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.03"
---

## 1. Définition en une phrase
Un vérin télescopique est un actionneur linéaire composé de plusieurs tubes concentriques (étages) coulissant les uns dans les autres, permettant une course totale très supérieure à la longueur du vérin rétracté.

## 2. Principe de fonctionnement
Chaque étage est lui-même un piston dans l'étage précédent. À la mise en pression, c'est généralement le tube de plus grand diamètre (surface la plus importante, donc rapport force/pression le plus favorable) qui sort en premier, puis les étages suivants se déploient successivement par diamètre décroissant, jusqu'à extension complète. La rétraction se fait en sens inverse, le plus souvent par gravité (simple effet) ou par alimentation hydraulique dédiée (double effet télescopique, plus complexe et coûteux).

## 3. Schéma / Symbole ISO
Représenté par plusieurs rectangles concentriques emboîtés avec une seule entrée d'huile commune ; le symbole simplifié ISO 1219-1 utilise des traits successifs en escalier pour indiquer le télescopage.

## 4. Formules et calculs clés

**Force par étage :** F_i = p·S_i, où S_i est la surface du i-ème étage (la plus grande surface = premier étage qui sort, génère la force la plus importante mais nécessite le plus de débit).

**Débit nécessaire par étage** (pour une vitesse constante v) : Q_i = v·S_i
→ Comme S_i diminue à chaque étage, le débit requis pour maintenir une vitesse identique diminue aussi : à débit pompe constant, la vitesse augmente à chaque étage successif (un vérin télescopique accélère en se déployant).

**Course totale :** L_totale ≈ n × L_étage (n = nombre d'étages, approximation, dépend du recouvrement nécessaire entre tubes pour la rigidité)

**Pression de levage variable** : pour les applications de benne, la pression nécessaire diminue progressivement car le bras de levier et l'angle de la charge évoluent — le calcul complet nécessite la cinématique du système (trigonométrie de l'angle d'attaque du vérin).

## 5. Paramètres importants
- Nombre d'étages (2 à 6 généralement pour les applications mobiles)
- Diamètre de chaque étage et ordre de sortie
- Rapport longueur rétractée / course totale (compacité)
- Guidage et étanchéité de chaque étage (autant de joints que d'étages)
- Pression de service souvent plus élevée en début de course (premier étage, plus grande surface, force max disponible mais débit max requis)

## 6. Exemples concrets (terrain)
Bennes de camions, grues de chargement, plateformes élévatrices : la compacité en position rétractée est essentielle (gabarit routier) alors que la course déployée doit être importante (plusieurs mètres). Un vérin télescopique 4 étages peut passer d'une longueur rétractée de 1,5 m à une longueur déployée de 5 m.

## 7. Points de réglage / vigilance
- Vérifier le recouvrement minimal entre étages en fin de course pour éviter le flambage local (chaque étage doit conserver un guidage suffisant)
- Attention à la séquence de sortie : un vérin mal purgé peut sortir les étages dans le désordre
- Contrôler l'étanchéité de chaque étage indépendamment (autant de points de fuite potentiels que d'étages)
- Vitesse d'extension croissante : prévoir une décélération en fin de course du dernier étage

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Sortie désordonnée des étages | Air emprisonné, défaut de friction inégale entre étages |
| Fuite externe sur un étage intermédiaire | Joint usé sur cet étage spécifiquement — diagnostic étage par étage nécessaire |
| Vibration ou jeu en fin d'extension | Recouvrement insuffisant entre tubes, usure des bagues de guidage |
| Force insuffisante en fin de déploiement | Dernier étage = plus petite surface, normal si non anticipé au dimensionnement |

## 9. Liens avec d'autres composants
- Distributeur de commande proportionné au débit crête du premier étage (fiche 03.01)
- Limiteur de débit pour contrôler la vitesse croissante en fin de course (fiche 07.01)
- Flambage et choix de tige, particulièrement critique pour les étages fins en extension maximale (fiche 04.04)
