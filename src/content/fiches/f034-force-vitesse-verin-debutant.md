---
code: "F034"
titre: "Calcul force / vitesse en extension et rétraction"
niveau: "debutant"
module: "Vérins hydrauliques"
resume: "À partir de la pression et du débit disponibles, calculer la force et la vitesse d'un vérin dans les deux sens de déplacement."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.06"
---

## 1. Définition en une phrase
Calculer la force et la vitesse d'un vérin permet de savoir, avant même de l'utiliser, à quelle puissance il va pousser ou tirer, et à quelle rapidité sa tige va se déplacer.

## 2. Principe de fonctionnement
Pensez à une pompe à vélo : si vous appuyez très fort, vous gonflez le pneu en force mais lentement ; si vous pompez vite, vous allez plus vite mais avec moins de force à chaque coup. Pour un vérin, c'est pareil : la force dépend de la pression de l'huile, et la vitesse dépend du débit (la quantité d'huile envoyée par minute). On ne peut pas avoir le maximum des deux en même temps avec la même pompe — il faut choisir un compromis.

## 3. Schéma / Symbole ISO
On utilise le même schéma que pour le vérin double effet (voir fiche 04.01), mais on s'intéresse ici aux deux surfaces internes du piston pour comprendre pourquoi la force et la vitesse changent selon le sens du mouvement.

## 4. Formules et calculs clés
Deux règles simples à retenir :
- **Force = Pression × Surface** (plus la surface est grande, plus la force est grande)
- **Vitesse = Débit ÷ Surface** (plus la surface est grande, plus la vitesse est faible pour le même débit)

C'est pour cette raison qu'un vérin pousse plus fort qu'il ne tire (la surface côté poussée est plus grande), mais qu'il tire plus vite qu'il ne pousse.

## 5. Paramètres importants
- La pression disponible dans le circuit (en bar)
- Le débit fourni par la pompe (en litres par minute)
- La taille du vérin (son diamètre)
- Le poids ou la résistance de ce qu'on déplace

## 6. Exemples concrets (terrain)
Sur un engin de chantier, le bras qui doit soulever une charge lourde a besoin de force : on privilégie donc le sens « poussée ». Sur une machine où il faut juste ramener un outil rapidement en position, on privilégie la vitesse de rétraction, plus rapide.

## 7. Points de réglage / vigilance
- Ne pas oublier que la pression réellement disponible au vérin est toujours un peu inférieure à celle réglée sur la pompe, à cause des pertes dans les tuyaux
- Vérifier que la pompe fournit assez de débit pour obtenir la vitesse souhaitée
- Tenir compte du poids réel de la charge, pas seulement de la force théorique du vérin

## 8. Erreurs fréquentes
- Penser qu'un vérin peut pousser et tirer avec la même force — c'est faux, la force diffère selon le sens
- Oublier les pertes de pression dans les tuyaux lors d'un calcul rapide
- Confondre vitesse théorique (calculée) et vitesse réelle (toujours un peu plus faible à cause des fuites internes et frottements)

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Pression | Force exercée par l'huile sur une surface, mesurée en bar |
| Débit | Quantité d'huile qui circule par minute, mesuré en litres/minute |
| Surface annulaire | Surface plus petite côté tige, qui réduit la force au retrait |
| Rendement | Part de la force ou du débit réellement utile, après pertes |
| Perte de charge | Diminution de pression due aux frottements dans les tuyaux |

## Pour aller plus loin
Voir la fiche 04.01 sur le vérin double effet pour revoir les notions de surface, et la fiche 01.04 sur les pertes de charge pour comprendre pourquoi la pression réelle est toujours un peu plus faible que prévu.
