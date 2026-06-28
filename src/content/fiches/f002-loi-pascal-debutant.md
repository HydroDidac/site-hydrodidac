---
code: "F002"
titre: "Loi de Pascal — transmission de pression"
niveau: "debutant"
module: "Notions fondamentales"
resume: "La loi de Pascal explique pourquoi une petite force sur un petit piston peut en soulever une énorme à l'autre bout d'un circuit hydraulique."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-06-28
---

## 1. Définition en une phrase
La loi de Pascal dit simplement que quand on appuie sur un liquide enfermé, cette pression se retrouve partout dans le liquide, exactement pareille, peu importe la forme du tuyau ou du réservoir.

## 2. Principe de fonctionnement
Imaginez un matelas à eau : si vous appuyez d'un côté, l'eau pousse de partout à l'intérieur, pas seulement en face de votre main. C'est pareil dans un circuit hydraulique : on enferme de l'huile dans des tuyaux et des cylindres, et si on appuie sur l'huile à un endroit (avec un petit piston), cette pression se retrouve identique partout ailleurs dans le circuit — y compris sur un autre piston, plus gros, situé loin de là. Et voilà l'astuce géniale de l'hydraulique : si ce deuxième piston est plus gros, la même pression appuie sur une plus grande surface, donc elle développe une force beaucoup plus grande. C'est exactement comme ça qu'un petit geste sur un vérin de commande peut soulever plusieurs tonnes ailleurs dans la machine.

## 3. Schéma / Symbole ISO
Sur un schéma simple : deux cylindres reliés par un tuyau rempli d'huile. Le petit cylindre a un petit piston, le grand cylindre a un grand piston. La pression dans le tuyau est la même partout — seule la taille des pistons change la force obtenue à chaque bout.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **la pression est la même partout dans le circuit, mais la force dépend de la taille du piston.**

Formule de base : **Pression = Force ÷ Surface**

Et donc, comme la pression est partagée entre les deux pistons : **plus le piston est gros, plus la force qu'il développe est grande**, pour la même pression.

Exemple simple : avec 25 bar de pression, un piston de 2 cm² donne 50 daN de force, alors qu'un piston de 100 cm² (50 fois plus grand) donne 50 fois plus de force, soit 2 500 daN — environ 2,5 tonnes !

## 5. Paramètres importants
- Le rapport entre la taille du petit piston et celle du grand piston (plus l'écart est grand, plus la force est multipliée)
- L'étanchéité des joints (une fuite fait perdre de la pression, donc de la force)
- La pression maximale que les tuyaux et joints peuvent supporter sans casser

## 6. Exemples concrets (terrain)
Une presse hydraulique d'atelier fonctionne exactement sur ce principe : on actionne une petite pompe à main (petit piston), et cette pression se transmet jusqu'au gros piston de la presse, qui écrase ou plie une pièce métallique avec une force énorme — bien plus grande que la force qu'on a fournie à la main.

## 7. Points de réglage / vigilance
- Toujours s'assurer qu'un limiteur de pression protège le circuit : comme la force peut être très multipliée, une surpression peut faire éclater un joint ou un flexible
- Sur les gros circuits avec beaucoup d'huile, il peut y avoir un petit délai entre le moment où on appuie et le moment où le mouvement se produit réellement (l'huile n'est pas parfaitement incompressible, voir fiche 01.05)

## 8. Erreurs fréquentes
- Croire que la force est gratuite : en réalité, le petit piston doit se déplacer beaucoup plus que le grand pour le faire bouger (rien ne se crée, tout se transforme)
- Oublier qu'une fuite, même petite, fait baisser la pression transmise et donc la force disponible à l'autre bout
- Confondre cette loi (le fluide est immobile) avec les lois qui s'appliquent quand le fluide circule (voir fiche 01.02 sur Bernoulli)

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Pression | La force qu'exerce le fluide sur chaque cm² de surface |
| Piston | Disque qui coulisse dans un cylindre et transmet la force |
| Surface | La taille de la face du piston en contact avec le fluide |
| Fluide incompressible | Un liquide qu'on ne peut quasiment pas tasser, contrairement à un gaz |
| Multiplication de force | Le fait d'obtenir une force plus grande en sortie qu'en entrée, grâce à des pistons de tailles différentes |
| Limiteur de pression | Composant qui empêche la pression de dépasser une valeur dangereuse |

## Pour aller plus loin
Voir la fiche 12.07 (intensificateur de pression) qui utilise directement ce principe, et la fiche 06.01 (limiteur de pression) pour comprendre comment protéger un circuit qui multiplie les forces.
