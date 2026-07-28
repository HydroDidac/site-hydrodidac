---
code: "F030"
titre: "Vérin simple effet et retour par ressort"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Le vérin simple effet n'est poussé que dans un sens par l'huile ; le retour est assuré par un ressort ou par le poids de la charge, toujours avec une force plus faible qu'à la poussée."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.02"
---

## 1. Définition en une phrase
Un vérin simple effet est un actionneur dont la tige n'est commandée hydrauliquement que dans un seul sens (généralement la sortie), le retour étant assuré par un ressort interne ou par la charge elle-même (gravité).

## 2. Principe de fonctionnement
Une seule chambre est alimentée en huile sous pression : la mise en pression pousse le piston et fait sortir la tige. Lorsque le distributeur (souvent 3/2) coupe l'alimentation et relie la chambre au réservoir, le ressort (ou le poids de la charge) repousse le piston et la tige rentre. Il existe deux familles : à ressort de rappel intégré (souvent pour les petites courses, type vérin de serrage) et à rappel par gravité/charge (vérins de levage où la charge redescend en évacuant l'huile).

## 3. Schéma / Symbole ISO
Symbole ISO 1219-1 : rectangle avec un seul orifice d'alimentation à une extrémité ; un ressort est représenté par un zigzag du côté opposé à l'arrivée d'huile lorsqu'il s'agit d'un retour par ressort.

## 4. Formules et calculs clés

**Force de sortie :** F_sortie = p·S − F_ressort − F_frottement

où S = π·D²/4 (surface pleine du piston côté alimenté), F_ressort = force de rappel du ressort (variable selon la compression, F = k·x avec k = raideur du ressort).

**Force de retour (vérin à ressort) :** F_retour = F_ressort (à pression nulle dans la chambre)
→ la force de retour est limitée et décroissante en fin de fiche selon la loi du ressort ; toujours plus faible que la force de poussée hydraulique.

**Vitesse de sortie :** v = Q/S

**Vitesse de retour (ressort) :** dépend de la raideur du ressort et de la résistance opposée — non maîtrisée précisément sans régulateur de débit en sortie de chambre (frein hydraulique de fuite contrôlée).

## 5. Paramètres importants
- Raideur du ressort (N/mm) et précontrainte
- Course utile disponible (souvent plus réduite que sur un double effet de même encombrement, à cause du logement du ressort)
- Pression maximale côté chambre active
- Pour les versions à rappel gravitaire : masse de la charge et accélération admissible

## 6. Exemples concrets (terrain)
Vérins de serrage de pièces sur machine-outil (course courte, quelques mm à cm, ressort de rappel rapide). Vérins de benne basculante où la charge redescend par gravité, le circuit hydraulique servant uniquement à lever et à freiner la descente via un limiteur de débit en sortie.

## 7. Points de réglage / vigilance
- Toujours réguler le débit de retour (meter-out) sur les rappels gravitaires pour éviter une chute incontrôlée
- Vérifier que la force du ressort reste suffisante en fin de vie (fatigue, corrosion)
- Dimensionner pour que F_sortie reste positive avec une marge suffisante même à pression minimale du circuit

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Retour incomplet ou lent | Ressort fatigué ou affaibli, frottement excessif des joints |
| Chute brutale de la charge | Absence de régulation de débit en sortie de chambre |
| Force de poussée insuffisante | Sous-dimensionnement face à la résistance du ressort + charge |

## 9. Liens avec d'autres composants
- Distributeur 3/2 pour la commande (fiche 03.02)
- Limiteur/régulateur de débit pour maîtriser la vitesse de retour (fiche 07.01)
- Clapet de maintien de charge pour les applications de levage (fiche 08.06)
