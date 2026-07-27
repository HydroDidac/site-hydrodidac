---
code: "F004"
titre: "Équation de Bernoulli appliquée à l'hydraulique"
niveau: "debutant"
module: "Notions fondamentales"
resume: "Dans un fluide en mouvement, plus il va vite, moins il pousse fort : l'équation de Bernoulli explique la cavitation et les chutes de pression locales dans un circuit hydraulique."
tempsLecture: 4
ficheLiees: []
datePublication: 2026-07-27
refPoleB: "01.02"
---

## 1. Définition en une phrase
L'équation de Bernoulli dit que dans un liquide qui circule, plus il va vite, moins il pousse fort (moins il y a de pression) — et inversement.

## 2. Principe de fonctionnement
Imaginez une rivière qui passe dans un goulot étroit : l'eau doit accélérer pour faire passer le même débit dans un espace plus petit (comme quand vous pincez un tuyau d'arrosage, le jet sort plus vite). Bernoulli dit que cette accélération « coûte » de la pression : là où l'huile va vite (dans un passage étroit), la pression est plus basse ; là où elle va lentement (dans un passage large), la pression est plus haute.

C'est très différent de la loi de Pascal (fiche 01.01), qui parle d'un liquide immobile. Ici, le liquide circule, et c'est sa vitesse qui change la donne.

## 3. Schéma / Symbole ISO
Une conduite large qui se rétrécit puis se rouvre : dans la partie large, vitesse faible et pression haute ; dans la partie étroite, vitesse élevée et pression basse.

## 4. Formules et calculs clés
Pas de panique avec les formules — l'idée à retenir : **vitesse qui monte = pression qui descend**, et inversement, tant que le débit reste le même.

Comme le débit doit rester constant tout le long d'un même tuyau (ce qui entre doit ressortir), plus la section est petite, plus la vitesse doit être grande pour faire passer le même débit.

## 5. Paramètres importants
- La forme de la conduite (rétrécissements, orifices) — c'est ce qui fait varier la vitesse localement
- La vitesse de l'huile — trop rapide à certains endroits, et la pression peut chuter dangereusement
- Le débit, qui doit rester le même partout dans une conduite simple

## 6. Exemples concrets (terrain)
Sur une pompe, si le tuyau d'aspiration est trop fin ou bouché par un filtre encrassé, l'huile doit accélérer pour passer — et la pression chute localement, parfois jusqu'à provoquer des petites bulles de vapeur dans l'huile : c'est la cavitation, qui abîme la pompe de l'intérieur (un peu comme des micro-explosions).

## 7. Points de réglage / vigilance
- Toujours s'assurer que le tuyau d'aspiration de la pompe est assez gros et pas trop long : sinon, l'huile va trop vite à cet endroit et risque la cavitation
- Un filtre d'aspiration encrassé a le même effet qu'un tuyau trop fin : il accélère localement l'huile et fait chuter la pression

## 8. Erreurs fréquentes
- Confondre la chute de pression due à la vitesse (Bernoulli, réversible) avec la perte de pression due aux frottements dans les tuyaux (irréversible, voir fiche 01.04)
- Ne pas surveiller le bruit anormal d'une pompe, qui est souvent le premier signe de cavitation liée à ce phénomène

## 9. Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Débit | La quantité de liquide qui passe par seconde (ou par minute) |
| Vitesse d'écoulement | À quelle vitesse le liquide se déplace dans le tuyau |
| Cavitation | Formation de petites bulles de vapeur dans l'huile quand la pression chute trop, qui abîment les composants en éclatant |
| Section | La surface intérieure du tuyau à un endroit donné |
| Conservation du débit | Le fait que ce qui entre dans un tuyau doit en ressortir, donc le débit ne change pas le long d'une conduite simple |

## Pour aller plus loin
Voir la fiche 02.11 sur la cavitation et le bruit dans les pompes, qui est une conséquence directe de ce principe, et la fiche 01.04 sur les pertes de charge pour comprendre l'autre cause de chute de pression dans un circuit.
