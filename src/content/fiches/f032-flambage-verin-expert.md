---
code: "F032"
titre: "Flambage des vérins — calcul et choix de tige"
niveau: "avance"
module: "Vérins hydrauliques"
resume: "Une tige de vérin trop longue et trop fine peut plier brutalement sous la poussée : la théorie d'Euler permet de calculer la charge critique et de choisir le bon diamètre."
tempsLecture: 5
ficheLiees: []
datePublication: 2026-07-28
refPoleB: "04.04"
---

## 1. Définition en une phrase
Le flambage est une instabilité mécanique qui fait fléchir brusquement et latéralement la tige (ou le tube) d'un vérin soumis à un effort de compression axial trop important par rapport à son élancement.

## 2. Principe de fonctionnement
Au-delà d'une charge critique, une pièce élancée comprimée axialement ne se déforme plus uniquement par compression : elle bascule en flexion latérale, de façon brutale et souvent destructive. Le risque concerne principalement les vérins longs (grande course) et fins (faible diamètre de tige) travaillant en poussée. La théorie d'Euler décrit la charge critique de flambage en fonction du module d'élasticité du matériau, du moment d'inertie de la section, de la longueur libre de flambement et des conditions d'appui aux extrémités.

## 3. Schéma / Symbole ISO
Sans symbole ISO spécifique (notion mécanique, non hydraulique pure) — représentation classique : tige en compression entre deux appuis, déformée en arc (mode de flambement fondamental, n=1).

## 4. Formules et calculs clés

**Charge critique d'Euler :** F_crit = (n²·π²·E·I) / Lf²

où :
- E = module d'élasticité du matériau (≈ 210 000 MPa pour acier)
- I = moment d'inertie de la section de la tige (I = π·d⁴/64 pour une tige pleine de diamètre d)
- Lf = longueur libre de flambement (dépend des conditions d'appui — voir coefficient k ci-dessous)
- n = coefficient lié au mode de fixation

**Longueur libre de flambement :** Lf = k·L, où L = longueur réelle entre appuis et k dépend des liaisons :
- Articulation-articulation (rotule aux deux bouts) : k = 1
- Encastrement-libre : k = 2
- Encastrement-articulation : k ≈ 0,7
- Encastrement-encastrement : k = 0,5

**Coefficient de sécurité :** Fs = F_crit / F_appliquée, viser Fs ≥ 3 à 5 selon les normes constructeur (Parker, Bosch Rexroth recommandent généralement Fs ≥ 3,5 pour les applications industrielles standards).

**Élancement :** λ = Lf/i, où i = rayon de giration = √(I/S). Pour une tige pleine de section circulaire, i = d/4, donc λ = 4·Lf/d.

**Formule de Tetmajer (zone d'élancement faible à moyen, tige courte/trapue) :** F_crit = π·d²·(335 − 0,62·λ) / (coef·4)

Au-delà d'un certain élancement critique, c'est la formule d'Euler (zone élastique) qui s'applique ; en deçà, pour les tiges courtes où la rupture par flambage intervient avant la limite élastique théorique d'Euler, les constructeurs utilisent la formule de Tetmajer, empirique et plus représentative dans ce domaine. *(Source : NL-53-flambage, sources/pdf-cours.)*

## 5. Paramètres importants
- Longueur de course et longueur totale tige sortie (cas le plus défavorable = tige totalement sortie)
- Diamètre de tige (le moment d'inertie varie en d⁴ : doubler le diamètre multiplie I par 16)
- Type de fixation aux deux extrémités du vérin (articulé, fixe, à chape, à tourillons)
- Nature du matériau de la tige (acier traité, chromé)
- Présence de charges latérales ou transversales additionnelles (aggrave le risque)

## 6. Exemples concrets (terrain)
Tige acier (E = 210 000 MPa), diamètre 50 mm, montage articulé-articulé (k=1), longueur sortie 2 m :
- I = π×0,05⁴/64 ≈ 3,07×10⁻⁷ m⁴
- F_crit = π²×210×10⁹×3,07×10⁻⁷ / 2² ≈ 159 000 N ≈ 16,2 t

Si la force de service appliquée est de 4 t, Fs ≈ 4 — acceptable selon les standards usuels (Fs ≥ 3,5).

*Référence : cours-hydraulique-78 et NL-53-flambage (sources/pdf-cours) pour les abaques constructeur complémentaires aux calculs analytiques.*

## 7. Points de réglage / vigilance
- Toujours calculer pour la position la plus défavorable : tige totalement sortie
- Vérifier les conditions réelles de fixation (un montage supposé articulé mal exécuté peut se comporter comme un encastrement partiel, ce qui change le coefficient k)
- Pour les vérins longs, envisager un guidage intermédiaire (patin, glissière) qui réduit la longueur libre de flambement
- Sur les vérins télescopiques, vérifier chaque étage individuellement, le dernier étage (le plus fin) étant souvent le plus critique

## 8. Erreurs fréquentes

| Symptôme | Cause probable |
|---|---|
| Tige pliée après un effort apparemment normal | Sous-estimation de la longueur libre réelle ou mauvaise évaluation du coefficient k |
| Flambage malgré un coefficient de sécurité calculé correct | Charge latérale parasite non prise en compte, défaut d'alignement |
| Flambage récurrent sur vérins identiques | Application systématiquement en limite de charge critique — revoir le dimensionnement du diamètre de tige |

## 9. Liens avec d'autres composants
- Vérin double effet : le flambage concerne principalement le mode poussée (extension sous charge) — fiche 04.01
- Vérin télescopique : chaque étage doit être vérifié séparément — fiche 04.03
- Choix de fixation et accessoires (chapes, tourillons) influençant directement le coefficient k
