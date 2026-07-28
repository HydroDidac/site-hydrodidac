---
code: "F035"
titre: "Étanchéité des vérins — joints et matériaux"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Trois familles de joints (piston, tige, racleur) assurent l'étanchéité d'un vérin ; leur choix dépend de la température, du fluide et de la propreté de l'huile."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.07"
---

## 1. Définition en une phrase
L'étanchéité d'un vérin repose sur un ensemble de joints assurant la séparation des chambres (étanchéité interne/dynamique sur le piston), le confinement du fluide vers l'extérieur (étanchéité externe sur la tige) et la protection contre les contaminants (racleur).

## 2. Principe de fonctionnement
Trois familles de joints coexistent sur un vérin : les joints de piston (étanchéité dynamique interne entre les deux chambres, empêchant le passage d'huile de l'une à l'autre sous l'effet de la pression différentielle), les joints de tige (étanchéité dynamique externe, empêchant la fuite d'huile vers l'extérieur le long de la tige en mouvement), et les racleurs ou joints anti-poussière (empêchant l'entrée de contaminants extérieurs lors de la rentrée de la tige). Chaque joint travaille en frottement continu et doit concilier étanchéité, faible frottement et durabilité.

## 3. Schéma / Symbole ISO
Pas de symbole hydraulique dédié dans ISO 1219-1 (élément constructif, non fonctionnel au sens schéma de circuit) — représentation usuelle en coupe technique : joint piston (souvent profil chevron, U ou avec bague d'appui), joint de tige (profil composite PTFE/élastomère), racleur en sortie de tête de vérin.

## 4. Formules et calculs clés
Pas de formule physique unique dominante ; les grandeurs clés à vérifier sont :

**Vitesse linéaire de glissement** : v_glissement = v_tige (m/s), comparée à la vitesse maximale admissible du matériau de joint (souvent 0,5 à 1 m/s pour élastomères standards, jusqu'à plusieurs m/s pour joints PTFE basse friction).

**Pression de contact du joint** : doit rester dans la plage spécifiée par le fabricant — un serrage excessif augmente le frottement et l'usure, un serrage insuffisant cause des fuites.

**Température de fonctionnement admissible selon matériau** :
- NBR (nitrile) : -30°C à +100°C, bon usage général avec huiles minérales
- FKM (Viton) : -20°C à +200°C, hautes températures, compatibilité chimique étendue
- PTFE (souvent en garniture composite) : très large plage, faible coefficient de frottement, utilisé en combinaison avec joints toriques pour assurer l'étanchéité statique de précharge
- Polyuréthane (PU) : bonne résistance à l'abrasion et à l'extrusion, usage très répandu en hydraulique mobile

## 5. Paramètres importants
- Compatibilité chimique joint/fluide hydraulique (voir fiche 14.05)
- Plage de température de service
- Pression de service et pics de pression (chocs)
- Vitesse de glissement (course rapide = contrainte thermique accrue sur le joint par frottement)
- État de surface et tolérance de l'alésage et de la tige (rugosité, ovalisation)
- Qualité de filtration du fluide (particules abrasives = usure accélérée, voir fiche 10.01)

## 6. Exemples concrets (terrain)
Vérin mobile (engin agricole/BTP) exposé à des variations de température importantes (-20°C en hiver, +80°C en charge prolongée l'été) : choix fréquent de joints PU pour leur résistance à l'abrasion en milieu poussiéreux, combinés à un racleur renforcé. Vérin industriel en milieu propre et contrôlé : joints NBR standards suffisants, coût optimisé.

## 7. Points de réglage / vigilance
- Vérifier la propreté du fluide (classe ISO 4406) car la pollution particulaire est la première cause d'usure prématurée des joints
- Contrôler l'alignement mécanique du vérin (un défaut d'alignement génère un frottement latéral asymétrique qui détruit prématurément les joints d'un côté)
- Respecter les couples de serrage du fabricant lors du remontage des têtes de vérin
- Surveiller les premières fuites externes (suintement) comme signal précoce avant fuite franche

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Fuite externe le long de la tige | Joint de tige usé, racleur défaillant laissant entrer des contaminants abrasifs |
| Perte de force progressive sans fuite externe visible | Fuite interne par le joint de piston (bypass entre chambres) |
| Usure très rapide et répétée du même joint | Défaut d'alignement, fluide non compatible chimiquement, contamination particulaire |
| Durcissement et craquelures du joint | Incompatibilité thermique ou chimique, vieillissement (dépassement durée de vie) |

## 9. Liens avec d'autres composants
- Compatibilité fluide/joints — fiche 14.05
- Norme ISO 4406 sur la propreté du fluide, déterminante pour la durée de vie des joints — fiche 10.01
- Remplacement de joint — procédure de maintenance — fiche 15.04
