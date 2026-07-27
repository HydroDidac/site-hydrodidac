---
code: "F006"
titre: "Pertes de charge — linéaires et singulières"
niveau: "debutant"
module: "Notions fondamentales"
resume: "Chaque mètre de tuyau, chaque coude et chaque composant traversé fait chuter un peu la pression : comprendre les pertes de charge pour bien dimensionner un circuit et lire un schéma."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.04"
---

## 1. Définition en une phrase
Une perte de charge, c'est de la pression qui se perd petit à petit dans les tuyaux et les composants, à cause des frottements — et cette pression perdue ne revient jamais.

## 2. Principe de fonctionnement
Imaginez l'eau qui coule dans un long tuyau d'arrosage : même sans rien fermer, l'eau qui sort au bout a un peu moins de pression qu'au robinet, simplement parce qu'elle a frotté contre les parois tout le long du trajet. C'est la même chose dans un circuit hydraulique : à chaque mètre de tuyau, à chaque coude, à chaque passage dans une vanne, l'huile perd un peu de pression. On distingue deux types de pertes : celles qui se produisent tout le long d'un tuyau droit (pertes « régulières », liées à la longueur), et celles qui se produisent à un endroit précis comme un coude ou une vanne (pertes « singulières », liées à la forme de l'obstacle).

## 3. Schéma / Symbole ISO
Un tuyau avec plusieurs manomètres placés à différents endroits : la pression affichée diminue petit à petit en avançant le long du tuyau, surtout après chaque coude ou composant traversé.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **toutes les petites pertes de pression s'additionnent** le long du trajet de l'huile. La pression à l'arrivée est toujours égale à la pression au départ, moins toutes les pertes rencontrées en chemin.

## 5. Paramètres importants
- Le diamètre des tuyaux : trop fin, et l'huile doit aller plus vite, donc plus de pertes
- La longueur totale des tuyaux et le nombre de coudes
- L'état des filtres : un filtre encrassé fait perdre beaucoup de pression à cet endroit précis
- La viscosité de l'huile : une huile froide et épaisse frotte davantage qu'une huile chaude et fluide

## 6. Exemples concrets (terrain)
Pour bien comprendre un schéma hydraulique, on part souvent du réservoir (0 bar) et on remonte chaque pression en ajoutant les pertes de charge rencontrées (un distributeur qui fait perdre 5 bar, par exemple) jusqu'à arriver à la pompe — c'est la méthode pratique utilisée pour vérifier qu'un circuit fonctionne comme prévu.

## 7. Points de réglage / vigilance
- Éviter les tuyaux trop fins ou trop longs, qui font perdre beaucoup de pression inutilement
- Limiter le nombre de coudes serrés et de raccords quand c'est possible
- Surveiller l'état des filtres : un filtre bouché crée une perte de charge importante à cet endroit

## 8. Erreurs fréquentes
- Constater qu'un vérin manque de force et chercher la cause uniquement côté pompe, alors que le problème vient parfois de pertes de charge excessives en chemin (tuyaux trop fins, filtre encrassé)
- Oublier de prendre en compte les pertes de charge des composants (distributeur, clapets) en plus des tuyaux eux-mêmes lors d'un calcul

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Perte de charge | Pression perdue à cause des frottements, qui ne revient jamais |
| Perte régulière | Perte qui se produit le long d'un tuyau droit, proportionnelle à sa longueur |
| Perte singulière | Perte localisée à un endroit précis (coude, vanne, filtre) |
| Régime d'écoulement | La façon dont l'huile circule : tranquillement (laminaire) ou en tourbillonnant (turbulent) |
| Manomètre | L'appareil qui mesure la pression à un endroit du circuit |

## Pour aller plus loin
Voir la fiche 01.02 (Bernoulli) qui explique l'autre cause de variation de pression liée à la vitesse, et la fiche sur les filtres hydrauliques pour comprendre l'impact d'un filtre encrassé sur les pertes de charge.
