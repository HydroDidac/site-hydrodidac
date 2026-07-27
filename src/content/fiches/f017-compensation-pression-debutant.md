---
code: "F017"
titre: "Compensateur de pression — pompe à cylindrée variable"
niveau: "debutant"
module: "Pompes hydrauliques"
resume: "Le mécanisme qui réduit automatiquement la cylindrée d'une pompe dès que sa pression maximale est atteinte, pour ne jamais pousser pour rien."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.09"
---

## 1. Définition en une phrase
Le compensateur de pression est le mécanisme qui réduit automatiquement le débit d'une pompe dès qu'elle atteint sa pression maximale réglée, pour éviter qu'elle ne pousse pour rien.

## 2. Principe de fonctionnement
Tant que la pression reste en dessous d'une valeur réglée d'avance (au moyen d'un ressort), la pompe fonctionne à pleine puissance. Mais dès que cette pression maximale est atteinte — par exemple parce que le mouvement demandé est terminé et que rien ne « consomme » plus l'huile — un mécanisme interne réduit automatiquement l'inclinaison du plateau de la pompe, donc sa cylindrée. La pompe ne débite alors presque plus rien : juste ce qu'il faut pour compenser ses petites fuites internes. C'est beaucoup plus économique qu'une pompe qui continuerait à pousser à fond pour rien, l'excédent étant alors évacué (et perdu en chaleur) par un simple limiteur de pression.

## 3. Schéma / Symbole ISO
Le symbole d'une pompe à cylindrée variable, avec un petit bloc représentant le réglage du ressort qui définit la pression maximale.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : cette pompe ne dépasse jamais la pression réglée au ressort, et elle réduit elle-même son débit pour ne jamais la dépasser.

## 5. Exemples concrets (terrain)
Pendant une pause dans le cycle d'une machine (par exemple le temps que l'opérateur place une nouvelle pièce), une pompe équipée de ce système peut se mettre quasiment au repos, sans consommer d'énergie inutilement — contrairement à une pompe classique qui continuerait à pousser à fond pour rien.

## 6. Points de réglage / vigilance
- Le réglage de la pression maximale doit toujours rester inférieur à ce que peuvent supporter les composants les plus fragiles du circuit
- Si la pompe ne semble jamais réduire son débit même à l'arrêt, le compensateur est probablement défectueux

## 7. Erreurs fréquentes
- Régler la pression maximale trop haute, au-delà de ce que peuvent supporter les autres composants du circuit
- Ne pas remarquer qu'une pompe reste bloquée à pleine cylindrée alors qu'elle devrait se mettre au repos

## 8. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Compensateur | Le mécanisme qui ajuste automatiquement le débit de la pompe selon la pression |
| Cylindrée variable | La capacité d'une pompe à régler elle-même sa quantité d'huile envoyée |
| Annulation de cylindrée | L'état où la pompe ne fournit presque plus rien, car la pression maximale est atteinte |
| Tarage | Le réglage de la pression maximale, fait au niveau du ressort du compensateur |

## 9. Pour aller plus loin
Voir la fiche 02.08 (Load Sensing), qui est une version plus évoluée de cette même idée d'économie d'énergie.
