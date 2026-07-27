---
code: "F023"
titre: "Les centres de distributeur — ouvert, fermé, tandem, flottant"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "Ce qui se passe quand le distributeur est au repos : centre ouvert, fermé, tandem ou flottant, quatre comportements très différents pour la pompe et pour le récepteur."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.03"
---

> Aucun PDF dédié spécifiquement aux types de centre n'a été trouvé dans
> `sources/pdf-cours/` — fiche basée sur les connaissances générales,
> cohérente avec le principe du distributeur à tiroir déjà sourcé
> (`Distributeur à tiroir CETOP.pdf`, fiche 03.01).

## 1. Définition en une phrase
Le « centre » d'un distributeur 3 positions désigne la configuration des voies P, T, A, B lorsque le tiroir est en position médiane (repos), ce qui détermine le comportement du circuit dès que la commande est relâchée.

## 2. Principe de fonctionnement
- **Centre fermé** : toutes les voies P, T, A, B sont isolées entre elles au repos. La pompe reste en pression (nécessite une pompe à cylindrée variable ou un limiteur de pression pour éviter la surchauffe), et le récepteur (vérin) est verrouillé hydrauliquement, bloqué dans sa position.
- **Centre ouvert** : P et T sont reliés directement au repos, ainsi que A et B (parfois). La pompe travaille à vide (pas de pression), adapté aux pompes à cylindrée fixe sur circuits simples, mais le récepteur n'est pas verrouillé : il peut légèrement « flotter ».
- **Centre tandem** : P est relié à T au repos (pompe déchargée, comme le centre ouvert), mais A et B restent isolés (récepteur verrouillé) — combine les avantages des deux précédents : pompe au repos sans pression ET vérin bloqué.
- **Centre flottant** : A et B sont reliés entre eux au repos (souvent aussi reliés à T), permettant au récepteur de se déplacer librement sous l'effet d'une force extérieure (utile par exemple pour un outil qui doit suivre le relief du terrain).

## 3. Schéma / Symbole ISO
Représentation ISO 1219-1 de la case centrale du symbole (position de repos) : flèches/traits différents selon le centre — centre fermé : tous les traits en T (tout bloqué) ; centre ouvert : flèche P-T et flèche A-B ; tandem : flèche P-T uniquement, A et B en T ; flottant : flèche A-B uniquement, P et T en T (ou P bloqué selon variante).

## 4. Paramètres importants
- Type de pompe associée : centre fermé → pompe à cylindrée variable recommandée (sinon limiteur de pression sollicité en permanence) ; centre ouvert/tandem → compatible pompe à cylindrée fixe
- Besoin de verrouillage du récepteur à l'arrêt : centre fermé ou tandem si oui, centre ouvert ou flottant si non
- Application nécessitant un suivi libre (terrain, charge externe) : centre flottant

## 5. Exemples concrets (terrain)
Sur un tracteur agricole avec plusieurs distributeurs en série alimentés par une seule pompe à cylindrée fixe, le centre tandem est très utilisé : chaque distributeur non actionné laisse passer le débit de la pompe vers le distributeur suivant (P→T en cascade), tout en gardant son propre récepteur verrouillé. Pour une charrue qui doit suivre les irrégularités du sol, un distributeur à centre flottant permet à l'outil de monter et descendre librement.

## 6. Points de réglage / vigilance
- Ne jamais associer un centre fermé à une pompe à cylindrée fixe sans limiteur de pression correctement dimensionné, sous peine de surchauffe permanente
- Vérifier la compatibilité du centre avec le besoin de verrouillage de chaque récepteur avant de remplacer un distributeur
- Sur les circuits avec plusieurs distributeurs en cascade (tandem), l'ordre d'installation influence le débit disponible pour les distributeurs en aval

## 7. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Échauffement chronique de l'huile | Centre fermé associé à une pompe à cylindrée fixe sans régulation adaptée |
| Vérin qui « s'affaisse » lentement à l'arrêt | Centre ouvert ou flottant utilisé alors qu'un verrouillage était nécessaire (centre fermé ou tandem requis) |
| Débit insuffisant sur les distributeurs en aval d'une cascade tandem | Mauvais dimensionnement ou ordre d'installation des distributeurs |

## 8. Liens avec d'autres composants
- Distributeur à tiroir — principe et notations ISO (fiche 03.01)
- Lire un schéma de distributeur (fiche 03.02)
- Compensateur de pression — pompe à cylindrée variable (fiche 02.09) — pertinent pour les circuits à centre fermé
