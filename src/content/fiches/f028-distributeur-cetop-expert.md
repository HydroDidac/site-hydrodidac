---
code: "F028"
titre: "Standard CETOP — montage sur embase, NG3 à NG32"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "La norme qui permet de monter des distributeurs de marques différentes sur une même embase, avec une taille NG qui fixe le débit admissible."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.08"
---

> Source : `sources/pdf-cours/DISTRIBUTEUR CETOP 3 et 7.pdf` et
> `Distributeur à tiroir CETOP.pdf` — principe du montage modulaire CETOP et
> exemples de distributeurs 4/3 normalisés.

## 1. Définition en une phrase
Le standard CETOP (Comité Européen des Transmissions Oléohydrauliques et Pneumatiques) normalise les dimensions et l'interface de montage des distributeurs hydrauliques sur embase, permettant d'installer des composants de marques différentes sur un même plan de pose sans adaptation.

## 2. Principe de fonctionnement
Plutôt que de raccorder chaque distributeur par tuyauterie et raccords individuels, le standard CETOP définit un plan de pose normalisé (disposition et dimensions des orifices P, T, A, B) sur lequel le distributeur se boulonne directement, l'étanchéité étant assurée par des joints toriques entre les orifices du distributeur et ceux de l'embase. Cette embase peut être un simple bloc de raccordement individuel ou un bloc foré complexe regroupant plusieurs fonctions (limiteur de pression, distributeur, clapets). Les tailles normalisées sont désignées par un numéro NG (ou taille CETOP), allant typiquement de NG3 (petit débit) à NG32 (très gros débit), chaque taille correspondant à un débit nominal et un plan de pose dimensionnel précis. Les distributeurs CETOP existent en commande directe (électroaimant agissant directement sur le tiroir principal, pour les petits calibres) ou en commande pilotée (un étage pilote, plus petit, commande hydrauliquement un étage principal de plus gros calibre — voir l'exemple de l'hydrovalve, où un petit distributeur 4/3 piloté commande un gros tiroir principal via les voies X et Y).

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 identique aux distributeurs classiques pour la partie fonctionnelle ; la mention CETOP ou NG figure dans la désignation commerciale et la documentation technique, pas sur le symbole lui-même. Sur les schémas de circuits pilotés, on retrouve les voies X (pilotage) et Y (drainage) en plus de P, T, A, B.

## 4. Paramètres importants
- Taille NG (CETOP) — détermine le débit nominal admissible et les dimensions du plan de pose, doit être choisie selon le débit réel du circuit
- Commande directe vs pilotée — la commande directe est limitée en débit (la force de l'électroaimant doit déplacer seul le tiroir contre la pression) ; au-delà d'une certaine taille, le pilotage devient nécessaire
- Compatibilité du joint d'étanchéité entre le distributeur et l'embase — point de vigilance lors du remplacement d'un composant par un autre fabricant

## 5. Exemples concrets (terrain)
Un distributeur 4/3 CETOP NG6 à commande électrique directe convient pour de petits débits (quelques dizaines de L/min). Pour un débit plus important nécessitant un gros tiroir difficile à déplacer directement par un électroaimant, on utilisera un distributeur piloté : un petit étage pilote (lui-même un distributeur CETOP de petite taille) commande hydrauliquement le grand tiroir principal via les voies X et Y, avec une étanchéité assurée par les mêmes principes de joints toriques sur plan de pose.

## 6. Points de réglage / vigilance
- Vérifier que le débit nominal de la taille NG choisie est cohérent avec le débit réel du circuit, sous peine de pertes de charge excessives
- Lors du remplacement d'un distributeur par un modèle d'un autre fabricant, vérifier la compatibilité exacte du plan de pose (CETOP normalise les cotes principales, mais des détails peuvent varier)
- Sur les versions pilotées, vérifier l'alimentation correcte du circuit de pilotage (interne ou externe selon le montage)

## 7. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Pertes de charge excessives sur un distributeur CETOP | Taille NG sous-dimensionnée par rapport au débit réel |
| Fuite externe au niveau du plan de pose | Joint toriques endommagés ou mal positionnés lors du remontage |
| Distributeur piloté qui ne commute pas | Défaut d'alimentation du circuit de pilotage (X) ou de drainage (Y) |

## 8. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01)
- Commandes : manuelle, pneumatique, électrique, hydraulique (fiche 03.04)
- Distributeurs immergés et montage en sous-plaque (fiche 03.09) — alternative au montage CETOP classique
