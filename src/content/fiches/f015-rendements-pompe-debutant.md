---
code: "F015"
titre: "Rendements volumétrique, mécanique et global"
niveau: "debutant"
module: "Pompes hydrauliques"
resume: "Fuites internes et frottements expliquent l'écart entre puissance fournie et puissance utile : les trois rendements à connaître pour bien dimensionner un moteur d'entraînement."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.07"
---

## 1. Définition en une phrase
Le rendement d'une pompe, c'est le pourcentage d'énergie qu'on récupère vraiment en sortie, par rapport à ce qu'on a fourni en entrée — le reste se perd en petites fuites et en frottements.

## 2. Principe de fonctionnement
Il y a deux façons de perdre un peu d'énergie dans une pompe :
- Par **fuite interne** (rendement volumétrique) : une partie de l'huile repasse en sens inverse à l'intérieur de la pompe au lieu de sortir utilement. Une pompe qui aspire 100 L/min n'en refoule par exemple que 98 : elle a un rendement volumétrique de 98 %.
- Par **frottement** (rendement mécanique) : les pièces qui tournent et glissent les unes contre les autres consomment un peu d'énergie pour rien, sous forme de chaleur.

En multipliant ces deux rendements, on obtient le rendement global, qui dit combien d'énergie il faut vraiment fournir à la pompe (avec son moteur d'entraînement) pour obtenir l'énergie hydraulique réellement utile.

## 3. Schéma / Symbole ISO
Un schéma simple : l'énergie qui entre (côté moteur), l'énergie utile qui sort (côté hydraulique), et l'écart entre les deux qui représente ce qui s'est perdu en route.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **Rendement global = Rendement volumétrique × Rendement mécanique**, et plus ce rendement est bas, plus il faut un moteur puissant pour obtenir la même performance hydraulique utile.

## 5. Exemples concrets (terrain)
Si une pompe a un rendement global de 85 % et qu'on veut obtenir 20 kW de puissance hydraulique utile, il faut en réalité fournir environ 23,5 kW au moteur qui entraîne la pompe — la différence se perd en fuites et en frottements.

## 6. Points de réglage / vigilance
- Bien choisir un moteur d'entraînement un peu plus puissant que la puissance hydraulique utile théorique, pour compenser le rendement
- Surveiller le rendement volumétrique d'une pompe dans le temps : s'il baisse, c'est souvent le premier signe d'usure interne

## 7. Erreurs fréquentes
- Choisir un moteur d'entraînement juste assez puissant pour la puissance hydraulique utile, sans marge pour le rendement
- Ne pas surveiller la performance d'une pompe dans le temps, et découvrir trop tard qu'elle est usée

## 8. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Rendement volumétrique | Le pourcentage de débit réellement obtenu par rapport au débit théorique |
| Rendement mécanique | Le pourcentage d'énergie qui n'est pas perdue en frottements |
| Rendement global | Le rendement total, qui combine les deux pertes précédentes |
| Puissance absorbée | L'énergie qu'il faut vraiment fournir à la pompe |
| Puissance utile | L'énergie hydraulique réellement disponible pour le travail |

## 9. Pour aller plus loin
Voir la fiche 02.06 (cylindrée et débit) pour comprendre d'où vient le rendement volumétrique, et la fiche 15.05 pour savoir comment tester une pompe sur le terrain.
