---
code: "F026"
titre: "Distributeur servo-valve — précision et dynamique"
niveau: "avance"
module: "Distributeurs et valves directionnelles"
resume: "La version haute couture du distributeur proportionnel : jeux fonctionnels extrêmement réduits, boucle fermée systématique, réservée aux asservissements les plus exigeants."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "03.06"
---

> Source : `sources/pdf-cours/PROPORTIONNELLE.pdf` (leçon 2, diagramme de
> Bode comparant valve proportionnelle et servovalve) pour la comparaison
> dynamique. Reste de la fiche : connaissances générales.

## 1. Définition en une phrase
La servovalve est un distributeur à très haute précision et grande dynamique, fonctionnant systématiquement en boucle fermée (asservissement de position du tiroir), réservé aux applications exigeant la meilleure réactivité et la meilleure exactitude (asservissements de position, de force ou de vitesse de haute performance).

## 2. Principe de fonctionnement
Comme le distributeur proportionnel, la servovalve transpose un signal électrique en débit hydraulique proportionnel, mais avec une conception nettement plus précise : jeux fonctionnels extrêmement réduits, plusieurs étages d'amplification hydraulique pilotés par un premier étage électromécanique de très faible puissance (souvent un moteur-couple), et un asservissement de position en boucle fermée systématique (jamais en boucle ouverte, contrairement à certaines valves proportionnelles d'entrée de gamme). Cette construction permet une réponse en fréquence beaucoup plus élevée (la servovalve répond fidèlement à des signaux variant beaucoup plus rapidement que la valve proportionnelle) et une précision bien supérieure (hystérésis et reproductibilité largement inférieures à 1 %), au prix d'une sensibilité à la pollution beaucoup plus grande et d'un coût nettement plus élevé.

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 proche du distributeur proportionnel (triangle de commande), mais accompagné systématiquement d'un capteur de recopie de position représenté sur le schéma, signalant le fonctionnement en boucle fermée permanent.

## 4. Formules et calculs clés

| Grandeur | Servovalve | Valve proportionnelle |
|---|---|---|
| Hystérésis / reproductibilité | < 1 %, souvent << 1 % | 1 à 6 % selon boucle ouverte/fermée |
| Bande passante (réponse en fréquence) | Plusieurs dizaines à centaines de Hz | Quelques Hz à ~30 Hz |
| Classe de propreté requise (ISO 4406) | 13/10 (très exigeante) | 17/14 |

*Comparaison qualitative établie à partir du diagramme de Bode présenté dans la source — les valeurs précises dépendent du modèle et du fabricant.*

## 5. Paramètres importants
- Classe de propreté de l'huile (ISO 4406, 13/10 typique) — exigence nettement supérieure à celle des distributeurs proportionnels, à respecter scrupuleusement
- Bande passante requise par l'application — seule une servovalve permet de suivre des consignes variant très rapidement (asservissements dynamiques)
- Coût et complexité de maintenance — nettement supérieurs à la valve proportionnelle, à réserver aux applications qui le justifient réellement

## 6. Exemples concrets (terrain)
Les servovalves équipent typiquement les bancs d'essai dynamiques, les simulateurs de mouvement, certaines presses de précision ou les systèmes d'asservissement de position en robotique industrielle lourde — partout où la réactivité et la précision de la valve proportionnelle classique deviennent insuffisantes.

## 7. Points de réglage / vigilance
- Respecter impérativement la classe de propreté requise : une pollution même modeste dégrade rapidement la précision, voire bloque la servovalve
- Ne pas substituer une valve proportionnelle classique à une servovalve sur une application qui exige une dynamique élevée, sous peine de dégradation de performance non visible immédiatement mais limitant le système
- Prévoir une filtration dédiée et un suivi rigoureux de la pollution de l'huile sur tout circuit comportant une servovalve

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Comportement erratique ou blocage du tiroir | Pollution de l'huile dépassant la classe de propreté requise |
| Performance dynamique décevante malgré l'investissement | Servovalve sous-dimensionnée ou mal accordée à l'application |
| Coût de maintenance élevé | Filtration insuffisante entraînant une usure prématurée |

## 9. Liens avec d'autres composants
- Distributeur proportionnel — contrôle en continu (fiche 03.05) — technologie intermédiaire moins exigeante
- Norme ISO 4406 — niveau de propreté du fluide (fiche 10.01)
- Asservissement servohydraulique — position et force (fiche 12.08) — application typique des servovalves
