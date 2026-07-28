---
code: "F036"
titre: "Vérins sans tige et vérins câbles"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Un piston couplé magnétiquement ou mécaniquement à un chariot externe transmet le mouvement sans tige sortante, pour un encombrement réduit de moitié."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.08"
---

## 1. Définition en une phrase
Un vérin sans tige est un actionneur linéaire dont le mouvement est transmis à un chariot externe par un piston interne couplé magnétiquement ou mécaniquement (fente étanche), évitant l'encombrement longitudinal d'une tige sortante classique.

## 2. Principe de fonctionnement
Deux technologies dominent : le vérin sans tige à couplage magnétique (le piston interne porte des aimants permanents qui entraînent par attraction magnétique à travers la paroi du tube un chariot externe, sans liaison mécanique traversant le tube — étanchéité parfaite) et le vérin à fente étanche (le piston est relié mécaniquement au chariot externe via une fente longitudinale dans le tube, fermée par des bandes d'étanchéité internes et externes qui se soulèvent localement au passage du piston). Le vérin câble, variante différente, utilise un câble enroulé sur des poulies aux deux extrémités d'un vérin classique compact pour démultiplier ou transmettre le mouvement sur une distance plus grande que la course du piston lui-même.

## 3. Schéma / Symbole ISO
Représentation simplifiée : tube long avec un chariot symbolisé en surimpression sur le dessus (sans tige traversante visible), distinct du symbole classique du vérin à tige.

## 4. Formules et calculs clés

**Force transmissible (couplage magnétique) :** limitée par la force d'arrachement magnétique maximale F_mag, indépendante de la pression au-delà d'un certain seuil — si p·S > F_mag, le couplage « décroche » et le chariot ne suit plus le piston (sécurité intrinsèque contre les surcharges, mais à ne pas dépasser en fonctionnement normal).

**Force transmissible (fente étanche) :** F = p·S·ηm comme un vérin classique, sans limitation magnétique, mais avec une étanchéité plus sensible à la pression et à la contamination.

**Avantage d'encombrement :** pour une course L, un vérin sans tige nécessite un encombrement total ≈ L + marge de tête, contre 2×L pour un vérin à tige classique (corps + tige sortie) — gain d'environ 50 % d'encombrement longitudinal.

## 5. Paramètres importants
- Type de couplage (magnétique ou mécanique à fente) selon le besoin de force et d'étanchéité absolue
- Force d'arrachement magnétique maximale (couplage magnétique) — donnée constructeur critique
- Guidage du chariot (rails intégrés ou guidage externe additionnel selon les charges latérales et moments appliqués)
- Longueur maximale de course disponible selon le diamètre (les grandes courses nécessitent un diamètre suffisant pour limiter la flexion du tube lui-même, distinct du flambage de tige classique)

## 6. Exemples concrets (terrain)
Convoyage et manutention où l'encombrement longitudinal est contraint (machines compactes, lignes d'emballage) : le vérin sans tige magnétique permet un gain de place important. Applications nécessitant une étanchéité totale (salle blanche, agroalimentaire) : le couplage magnétique évite tout perçage du tube, supprimant le risque de fuite externe. Vérin câble : applications de levage ou de transfert où l'on souhaite démultiplier la course par rapport à la taille du vérin moteur.

## 7. Points de réglage / vigilance
- Ne jamais dépasser la force d'arrachement magnétique en fonctionnement normal (couplage magnétique) sous peine de décrochage et de perte de contrôle de position
- Vérifier le guidage et l'absence de charge latérale excessive sur le chariot, qui accélère l'usure des paliers
- Sur les fentes étanches, surveiller particulièrement l'état des bandes d'étanchéité, point sensible à la contamination

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Décrochage du chariot en cours de mouvement | Surcharge dépassant la force d'arrachement magnétique |
| Fuite le long de la fente étanche | Usure ou endommagement des bandes d'étanchéité, contamination |
| Usure prématurée du guidage | Charge latérale excessive non reprise par un guidage externe additionnel |

## 9. Liens avec d'autres composants
- Vérin double effet classique pour comparaison de principe (fiche 04.01)
- Étanchéité et joints, particulièrement critique sur les fentes étanches (fiche 04.07)
- Synchronisation de vérins pour les applications multi-axes utilisant plusieurs vérins sans tige en parallèle (fiche 12.06)
