---
code: "F005"
titre: "Puissance hydraulique — P = p × Q"
niveau: "debutant"
module: "Notions fondamentales"
resume: "La puissance hydraulique, produit de la pression et du débit, est la formule centrale pour dimensionner une installation et comprendre d'où vient la chaleur perdue."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.03"
---

## 1. Définition en une phrase
La puissance hydraulique, c'est simplement : pression multipliée par débit — c'est la formule qui résume tout ce qu'une installation hydraulique peut fournir comme « force de travail ».

## 2. Principe de fonctionnement
Imaginez deux façons de transporter de l'énergie avec de l'eau : soit avec beaucoup de pression mais peu de débit, soit avec beaucoup de débit mais peu de pression. Dans les deux cas, on peut obtenir la même puissance ! C'est exactement ce que dit la formule **Puissance = Pression × Débit**. Une pompe fournit un débit, et c'est la résistance qu'elle rencontre (la charge à soulever, les frottements) qui fait monter la pression — et donc la puissance réellement utilisée.

Un circuit bien conçu, c'est un circuit où la puissance que fournit la pompe correspond presque exactement à ce dont la machine a vraiment besoin. Si la pompe fournit plus que nécessaire, l'excédent doit s'évacuer quelque part — et il se transforme en chaleur, ce qui chauffe l'huile pour rien.

## 3. Schéma / Symbole ISO
Un schéma simple : un groupe pompe en bas qui fournit la puissance, des vannes au milieu (pression, débit, distribution) qui la contrôlent, et les vérins ou moteurs en haut qui l'utilisent pour faire le travail.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **Puissance = Pression × Débit**.

Formule pratique : **Puissance (en kW) = (Pression en bar × Débit en L/min) ÷ 600**

Exemple : une pompe à 200 bar et 40 L/min fournit 13,3 kW de puissance.

## 5. Paramètres importants
- Le réglage du limiteur de pression (la pression maximale autorisée)
- Le débit que peut fournir la pompe
- Le rendement de l'installation : une partie de la puissance se perd toujours en frottements

## 6. Exemples concrets (terrain)
Si une machine n'a vraiment besoin que de 25 L/min pour fonctionner, mais que la pompe (à débit fixe) en fournit 40, les 15 L/min en trop doivent s'évacuer par le limiteur de pression — et cette énergie inutilisée se transforme en chaleur. C'est pour éviter ce gaspillage qu'on utilise des pompes à débit variable, qui n'envoient que ce qui est réellement nécessaire.

## 7. Points de réglage / vigilance
- Si une machine chauffe anormalement, c'est presque toujours le signe que la pompe fournit plus de puissance que nécessaire
- Vérifier que le réglage du limiteur de pression correspond bien au besoin réel, ni trop bas (la machine n'a pas assez de force), ni trop haut (gaspillage et risque pour les composants)

## 8. Erreurs fréquentes
- Croire qu'une pompe plus puissante rendra toujours la machine plus performante : si le surplus n'est pas utilisé, il ne fait que chauffer l'huile
- Oublier que le rendement n'est jamais parfait : la puissance utile est toujours un peu inférieure à la puissance fournie par la pompe

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Puissance hydraulique | La quantité de travail que peut fournir le circuit par seconde |
| Débit | Le volume d'huile déplacé par minute (en L/min) |
| Pression | La force exercée par l'huile sur chaque cm² de surface |
| Rendement | Le rapport entre la puissance réellement utile et la puissance fournie |
| Pompe à débit variable | Une pompe capable d'adapter son débit au besoin réel, pour éviter le gaspillage |

## Pour aller plus loin
Voir la fiche 02.08 (Load Sensing) qui explique comment une pompe peut adapter automatiquement son débit, et la fiche 06.01 (limiteur de pression) qui évacue l'excédent quand il y en a.
