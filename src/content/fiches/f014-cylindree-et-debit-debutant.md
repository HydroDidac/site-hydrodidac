---
code: "F014"
titre: "Cylindrée, débit théorique et débit réel"
niveau: "debutant"
module: "Pompes hydrauliques"
resume: "La cylindrée fixe le volume déplacé par tour ; le débit réel, toujours inférieur au débit théorique à cause des fuites internes, est la valeur à utiliser pour dimensionner un circuit."
tempsLecture: 3
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "02.06"
---

## 1. Définition en une phrase
La cylindrée, c'est la quantité d'huile qu'une pompe déplace à chaque tour — et le débit réel est toujours un peu inférieur à ce qu'on pourrait calculer en théorie, à cause des petites fuites internes.

## 2. Principe de fonctionnement
Imaginez une pompe à vélo : à chaque coup de piston, elle envoie une certaine quantité d'air. C'est pareil pour une pompe hydraulique, sauf qu'elle tourne en continu : à chaque tour, elle déplace toujours le même volume d'huile (sa cylindrée). En multipliant cette cylindrée par le nombre de tours par minute, on obtient le débit théorique. Mais en réalité, une pompe n'est jamais parfaitement étanche à l'intérieur : une petite partie de l'huile repasse en sens inverse à travers les jeux internes, ce qui réduit légèrement le débit réellement disponible.

## 3. Schéma / Symbole ISO
Un schéma simple : l'huile entre dans la pompe (débit aspiré), et il en ressort un peu moins (débit refoulé), la différence repartant vers le réservoir par une petite fuite interne.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **Débit = Cylindrée × Vitesse**, mais le débit réel est toujours un peu inférieur au débit théorique calculé.

## 5. Exemples concrets (terrain)
Une pompe qui devrait théoriquement envoyer 144 L/min n'en envoie en réalité que 137 L/min environ, les 7 L/min restants se perdant en petites fuites internes inévitables.

## 6. Points de réglage / vigilance
- Toujours prévoir une petite marge quand on calcule la vitesse d'un vérin ou d'un moteur, car le débit réel est toujours un peu inférieur au débit théorique
- Si une machine devient progressivement plus lente avec le temps, c'est souvent le signe que les fuites internes de la pompe augmentent avec l'usure

## 7. Erreurs fréquentes
- Calculer la vitesse d'un actionneur avec le débit théorique, sans tenir compte des fuites internes inévitables
- Ne pas surveiller la baisse progressive de performance d'une pompe, qui est un bon indicateur d'usure

## 8. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Cylindrée | La quantité d'huile déplacée à chaque tour de la pompe |
| Débit théorique | Le débit calculé sans tenir compte des fuites |
| Débit réel | Le débit réellement disponible, toujours un peu inférieur |
| Rendement volumétrique | Le pourcentage du débit théorique réellement obtenu |
| Drain | Le petit circuit qui évacue les fuites internes vers le réservoir |

## 9. Pour aller plus loin
Voir la fiche 02.07 (rendements) pour comprendre en détail d'où viennent ces pertes.
