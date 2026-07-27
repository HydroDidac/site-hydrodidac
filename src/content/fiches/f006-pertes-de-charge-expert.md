---
code: "F006"
titre: "Pertes de charge — linéaires et singulières"
niveau: "avance"
module: "Notions fondamentales"
resume: "Chaque mètre de tuyau, chaque coude et chaque composant traversé fait chuter un peu la pression : comprendre les pertes de charge pour bien dimensionner un circuit et lire un schéma."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.04"
---

> Source : `sources/pdf-cours/PRINCIPES FONDAMENTAUX DE L'HYDR.pdf` (§3.7,
> Pertes de charge ΔP et régimes d'écoulement) et `NL-49-lecture-schema-
> hydraulique.pdf` (exemple numérique de perte de charge dans un
> distributeur). Reste de la fiche : connaissances générales.

## 1. Définition en une phrase
Une perte de charge est une chute de pression irréversible le long de l'écoulement d'un fluide, due aux frottements internes du fluide et aux turbulences provoquées par les parois, les composants et les obstacles à l'écoulement.

## 2. Principe de fonctionnement
Il est impossible de transporter un fluide sans consommer d'énergie par frottement. On distingue deux familles de pertes de charge : les pertes **régulières** (ou linéaires), dues aux frottements du fluide contre les parois d'une tuyauterie rectiligne, proportionnelles à la longueur de la conduite et dépendantes du régime d'écoulement (laminaire ou turbulent) ; et les pertes **singulières**, localisées au niveau des coudes, raccords, rétrécissements et composants (distributeurs, clapets, filtres). En série, les pertes de charge s'additionnent : la pression en sortie de circuit est égale à la pression en entrée diminuée de la somme de toutes les pertes rencontrées. Le régime d'écoulement (laminaire, transitoire ou turbulent) se détermine grâce au nombre de Reynolds, qui dépend de la vitesse du fluide, du diamètre de la conduite et de la viscosité.

## 3. Schéma / Symbole ISO
Pas de symbole ISO spécifique — schéma de principe : une conduite avec plusieurs manomètres successifs (P1, ΔP1, ΔP2... P2), montrant la pression qui diminue progressivement à chaque frottement, rétrécissement ou coude rencontré.

## 4. Formules et calculs clés

| Grandeur | Formule | Unités | Conditions / Remarques |
|----------|---------|--------|------------------------|
| Cumul des pertes en série | P1 = P2 + Σ ΔPi | bar (ou Pa) | Les pertes de charge s'additionnent le long de l'écoulement |
| Nombre de Reynolds | Re = (Ø·v) / ν | Ø en m, v en m/s, ν en m²/s (viscosité cinématique) | Re < 2500 : laminaire ; Re > 3000 : turbulent ; entre les deux : transitoire |
| Pertes singulières (forme générale) | ΔP = k · ½·ρ·v² | k = coefficient de perte de charge du composant (sans dimension) | k dépend de la géométrie (coude, rétrécissement, raccord) — donné par le constructeur |

*Les pertes régulières (linéaires) sont proportionnelles à la longueur de conduite et à la vitesse (au carré en régime turbulent) ; les pertes singulières dépendent essentiellement de la géométrie du composant traversé et du débit.*

## 5. Paramètres importants
- Diamètre intérieur de la conduite — une conduite sous-dimensionnée augmente fortement la vitesse, donc les pertes de charge
- Longueur totale de tuyauterie et nombre de coudes/raccords — chaque mètre et chaque singularité ajoute une perte
- Viscosité du fluide (dépend de la température) — une huile froide et visqueuse génère davantage de pertes de charge régulières
- Débit traversant chaque composant — les pertes de charge des distributeurs et clapets sont données par le constructeur sous forme de courbes ΔP/débit

## 6. Exemples concrets (terrain)
Reprise d'un exemple de lecture de schéma : un circuit avec une pompe fournissant 18 L/min, dont 10 L/min traversent un régulateur de débit vers un moteur hydraulique. À la sortie du moteur, le retour de 9,9 L/min traverse un distributeur générant 5 bar de perte de charge avant le réservoir. En remontant les pressions depuis le réservoir (0 bar), on obtient ainsi successivement les pressions à chaque point du circuit — c'est la méthode standard de lecture de schéma pour calculer les pressions réelles en tenant compte des pertes de charge cumulées.

## 7. Points de réglage / vigilance
- Dimensionner les conduites pour rester dans les vitesses recommandées (généralement 2 à 4,6 m/s en refoulement, plus faible à l'aspiration) afin de limiter les pertes régulières
- Limiter le nombre de coudes et de raccords inutiles : chaque singularité ajoute une perte de charge, donc de la puissance dissipée en chaleur
- Vérifier l'état des filtres : un filtre colmaté augmente fortement la perte de charge localement, avec un risque de cavitation en amont (voir fiche 01.02 sur Bernoulli)

## 8. Erreurs fréquentes

| Erreur / Défaut | Symptôme observé | Cause probable |
|----------------|-----------------|----------------|
| Pression insuffisante au récepteur malgré une pression correcte en sortie de pompe | Force ou vitesse insuffisante du vérin/moteur | Pertes de charge cumulées trop importantes (conduites trop longues/fines, composants sous-dimensionnés) |
| Échauffement anormal de l'huile | Température élevée sans surcharge apparente | Pertes de charge excessives transformées en chaleur tout le long du circuit |
| Calcul de pression erroné en lecture de schéma | Valeurs incohérentes entre points de mesure | Oubli d'une perte de charge singulière (distributeur, filtre, coude) dans le calcul |

## 9. Liens avec d'autres composants
- Équation de Bernoulli (fiche 01.02) — les pertes de charge complètent Bernoulli pour décrire l'écoulement réel (non idéal)
- Abaque dimensionnement conduites — pour choisir un diamètre de tuyauterie limitant les pertes de charge
- Puissance hydraulique (fiche 01.03) — les pertes de charge réduisent la puissance utile réellement disponible au récepteur
- Filtres hydrauliques — un filtre colmaté est une cause fréquente de perte de charge anormale
