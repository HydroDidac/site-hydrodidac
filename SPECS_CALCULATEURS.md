# Specs — Calculateurs manquants pour HydroDidac

> ## ✅ TOUS IMPLÉMENTÉS (28 juillet 2026)
>
> Les 10 calculateurs de ce document sont en ligne : la page en compte 26.
> Ce fichier est conservé comme référence des formules et des choix retenus.
>
> **Trois écarts avec la spec, à valider par Damien :**
> 1. **Rigidité (n° 6)** — la spec annonce « ~17,6 N/mm », c'est **17,6 kN/mm**.
>    Erreur d'unité d'un facteur 1000 ; la fréquence propre de 30 Hz qu'elle
>    donne elle-même confirme la valeur en kN/mm. C'est la valeur correcte qui
>    est implémentée.
> 2. **Bilan thermique (n° 2)** — ses valeurs par défaut (Q=60, p=200, η=80 %)
>    donnent 4 kW dissipés, pas les 2,5 kW de ses exemples (qui correspondent à
>    η ≈ 87,5 %). Les défauts de la spec ont été gardés.
> 3. **Thermoplongeur (n° 8)** — la distinction standard / barillet **n'a pas
>    été chiffrée**, faute de valeurs confirmées. Les deux types utilisent les
>    mêmes seuils (1 et 1,5 W/cm²) ; choisir « à barillet » affiche un
>    avertissement disant que la densité admissible y est plus basse et qu'il
>    faut demander la valeur au fabricant. **En attente de vos chiffres.**

Note d'implémentation à destination de **Claude Code** (dépôt `site-hydrodidac`,
page `src/pages/calculateurs.astro`). Ces 7 calculateurs sont **réellement
absents** après inventaire des 16 déjà en place.

## Rappel de l'existant (ne pas recréer)

Déjà présents dans `calculateurs.astro` : puissance hydraulique, débit de pompe,
couple sur l'arbre, force de vérin, vitesse de vérin, vitesse en conduite,
nombre de Reynolds, viscosité selon la température, **temps de course d'un
vérin**, **diamètre de conduite conseillé**, **accumulateur volume utile**,
vitesse de moteur, pertes de charge en conduite, **diamètre de gicleur**, débit
à travers un orifice, **échauffement et puissance dissipée**.

## Conventions du site (à respecter)

Chaque calculateur est une `<section class="calc-carte" id="calc-XXX">` avec :

```html
<section class="calc-carte" id="calc-XXX">
  <h2>Titre</h2>
  <p class="calc-desc">Une phrase : à quoi ça sert.</p>
  <p class="calc-formule">Formule (avec unités)</p>
  <label>Libellé <span class="unite">unité</span>
    <input type="number" id="xx-var" value="défaut" min="0" step="any" inputmode="decimal" />
  </label>
  <!-- ... autres champs ... -->
  <div class="calc-resultat">
    <span class="resultat-label">Résultat</span>
    <span class="resultat-valeur" id="xx-res">—</span>
  </div>
  <p class="calc-note" id="xx-verdict"></p>
  <details class="calc-plus">
    <summary>💡 Pour aller plus loin</summary>
    <p><span class="pastille-niveau debutant">🟢 Débutant</span>…</p>
    <p><span class="pastille-niveau avance">🔴 Expert</span>…</p>
  </details>
</section>
```

Règles : convention d'ID à 2 lettres par calculateur (`re-`, `vi-`…) ; recalcul à
chaque `input` ; `toFixed` selon la grandeur ; `calc-verdict` affiche un message
contextuel coloré ; virgule décimale à l'affichage (format FR) ; ajouter la
carte à l'ancre de retour/sommaire et à la meta-description de la page.

Toutes les formules ci-dessous ont été **vérifiées numériquement** (cohérence
dimensionnelle + ordre de grandeur).

---

## 1. Dimensionnement du réservoir — `id="calc-reservoir"` (préfixe `rs-`)

**Rôle.** Donner la contenance de réservoir conseillée à partir du débit de
pompe, selon la règle usuelle 3 à 5 fois le débit par minute.

**Formule.** `V (L) = k × Q (L/min)`, avec k = 3 (compact, avec refroidisseur),
4 (standard), 5 (sans refroidisseur / forte dissipation).

**Entrées.**
- `rs-q` — Débit de pompe Q [L/min], défaut 60.
- `rs-k` — `<select>` facteur : 3× compact / 4× standard (défaut) / 5× sans échangeur.

**Sorties.**
- `rs-res` — Volume conseillé [L]. Ex. Q=60, k=4 → **240 L**.
- Afficher aussi la fourchette 3×–5× (180–300 L) en note.

**Garde-fous.** Q>0. Rappeler que la règle vaut pour un circuit ouvert standard ;
pour un circuit fermé (transmission hydrostatique) le réservoir est bien plus
petit → note Expert.

**Verdict.** « Fourchette conseillée : {3Q} à {5Q} L. Volume retenu : {kQ} L. »

**Débutant.** Le réservoir laisse l'huile se reposer (désémulsion, dépôt des
impuretés, dégazage) et refroidir ; trop petit, l'huile chauffe et vieillit vite.
**Expert.** La règle du débit est un point de départ : le vrai critère est
thermique (voir *Bilan thermique*). Circuits fermés et groupes avec échangeur
dédié dérogent à la règle. Prévoir 10–15 % de ciel d'air au-dessus du niveau
maxi.

---

## 2. Bilan thermique / échangeur — `id="calc-bilan-thermique"` (préfixe `bt-`) — ✅ FAIT

> **Implémenté** (session du 28 juillet 2026). Deux écarts avec la spec ci-dessous,
> à trancher par Damien : (a) les valeurs par défaut proposées (Q=60, p=200,
> η=80 %) donnent **4 kW** dissipés, pas les 2,5 kW des exemples — ceux-ci
> correspondent à η ≈ 87,5 % ; (b) la surface d'échange à 6 faces a été
> **partagée** avec le calculateur d'échauffement existant, qui utilisait 5 faces
> (fonction commune `surfaceReservoir()`), sinon les deux se contredisaient sur
> le même réservoir.

**Rôle.** Assembler les pertes du circuit en une puissance dissipée totale, en
déduire la température d'équilibre de l'huile, et dire s'il faut un échangeur
(distinct du calculateur d'échauffement *local* existant, qui traite un seul
laminage).

**Formules.**
- Puissance dissipée totale : `P_diss (W) = P_hyd (W) × (1 − η_global)` où
  `P_hyd = Q × p / 600 × 1000` (W). Ou saisie directe de P_diss si connue.
- Surface d'échange réservoir (approx. cubique) : `S (m²) = 6 × (V/1000)^(2/3)`.
- Température d'équilibre : `T_eq = T_amb + P_diss / (k × S)`, k ≈ 12 W/m²·K
  (tôle, air calme) — proposer 10–15 en `<select>`.
- Besoin échangeur pour une cible T_c : `P_évac = P_diss − k × S × (T_c − T_amb)`
  (si >0, échangeur requis).

**Entrées.**
- `bt-q` [L/min] déf. 60, `bt-p` [bar] déf. 200, `bt-eta` rendement global %
  déf. 80 (ou basculer en saisie directe `bt-pdiss` [W]).
- `bt-v` volume réservoir [L] déf. 250.
- `bt-tamb` [°C] déf. 25, `bt-tcible` [°C] déf. 55, `bt-k` [W/m²·K] déf. 12.

**Sorties.**
- `bt-res-pdiss` — Puissance dissipée [kW]. Ex. 2,5 kW.
- `bt-res-teq` — T d'équilibre sans échangeur [°C]. Ex. V=250 → ~112 °C.
- `bt-res-echangeur` — Puissance à évacuer par l'échangeur [W] pour tenir T_cible.
  Ex. ~1 640 W.

**Garde-fous.** Tous >0 ; T_cible > T_amb. Formule d'équilibre = régime établi,
convection naturelle seule : le préciser (ordre de grandeur, pas un calcul
normatif).

**Verdict (couleur).**
- T_eq ≤ T_cible : vert « L'huile se stabilise vers {T_eq} °C, sous la cible.
  Pas d'échangeur nécessaire. »
- T_eq > T_cible : rouge « Sans échangeur l'huile monterait à {T_eq} °C.
  Prévoir un refroidisseur d'au moins {P_évac} W. »

**Débutant.** Toute l'énergie perdue (rendements, laminages, pertes de charge)
finit en chaleur dans l'huile. Le réservoir évacue une partie ; au-delà, il faut
un échangeur. Au-dessus de ~60 °C l'huile s'oxyde plus vite.
**Expert.** k dépend fortement de la ventilation et de la propreté des parois ;
un réservoir encrassé ou encoffré évacue bien moins. Pour un dimensionnement
sérieux, distinguer puissance crête et puissance moyenne sur le cycle machine.

---

## 3. Puissance du moteur d'entraînement — `id="calc-moteur-entrainement"` (préfixe `me-`)

**Rôle.** Donner la puissance mécanique à installer sur l'arbre de pompe (choix
du moteur électrique ou thermique) à partir de la puissance hydraulique utile et
du rendement global du groupe.

**Formules.**
- `P_hyd (kW) = Q (L/min) × p (bar) / 600`.
- `P_moteur (kW) = P_hyd / η_global`.
- Couple sur l'arbre au régime N : `C (Nm) = P_moteur (W) / (2π × N/60)`.

**Entrées.**
- `me-q` [L/min] déf. 60, `me-p` [bar] déf. 200.
- `me-eta` rendement global % déf. 80.
- `me-n` régime moteur [tr/min] déf. 1500 (pour le couple).

**Sorties.**
- `me-res-hyd` — Puissance hydraulique [kW]. Ex. 20 kW.
- `me-res-mot` — Puissance moteur mini [kW]. Ex. 25 kW.
- `me-res-couple` — Couple arbre [Nm].

**Garde-fous.** >0. Rappeler que la puissance moteur doit être ≥ (marge de
démarrage à froid, où la viscosité est élevée).

**Verdict.** « Prévoir un moteur d'au moins {P_moteur} kW à {N} tr/min. »
Suggérer d'arrondir à la puissance normalisée supérieure (série 0,75 / 1,1 / 1,5
/ 2,2 / 3 / 4 / 5,5 / 7,5 / 11 / 15 / 18,5 / 22 / 30 kW).

**Débutant.** La pompe consomme plus que ce qu'elle transmet à l'huile : le
moteur doit couvrir la puissance hydraulique **plus** les pertes.
**Expert.** Au démarrage à froid, la viscosité élevée augmente le couple
résistant : garder une marge, surtout en thermique. Vérifier la compatibilité
couple de démarrage / protection thermique du moteur électrique.

---

## 4. Flambage de tige de vérin (Euler) — `id="calc-flambage"` (préfixe `fl-`)

**Rôle.** Vérifier qu'une tige longue et fine ne flambe pas sous la charge de
poussée. Mentionné en note Expert du calculateur de force, mais sans outil.

**Formules.**
- Inertie tige pleine : `I = π × d⁴ / 64` (d = diamètre de tige).
- Charge critique d'Euler : `F_crit = π² × E × I / L_f²`, avec E = 210 000 MPa
  (acier), `L_f = μ × L` (L = longueur libre / course sortie tige).
- Facteur μ selon montage (`<select>`) : rotule-rotule μ=1 ; encastré-rotule
  μ=0,7 ; **encastré-libre μ=2 (cas défavorable, à proposer par défaut pour un
  vérin en poussée)**.
- Charge admissible : `F_adm = F_crit / s`, s = coefficient de sécurité (déf. 3,5).

**Entrées.**
- `fl-d` diamètre de tige [mm] déf. 36.
- `fl-l` longueur libre / course [mm] déf. 800.
- `fl-mu` `<select>` montage (déf. encastré-libre 2).
- `fl-s` coefficient de sécurité déf. 3,5.
- `fl-f` (optionnel) charge de service réelle [kN] pour comparaison.

**Sorties.**
- `fl-res-crit` — Charge critique F_crit [kN]. Ex. d=36, L=800, μ=2 → ~67 kN.
- `fl-res-adm` — Charge admissible [kN]. Ex. ~19 kN.

**Garde-fous.** d>0, L>0, s≥1. Attention aux unités : convertir mm→m dans le
calcul (I en m⁴, E en Pa) ou travailler en système cohérent MPa/mm (E=210000
MPa, I en mm⁴, F en N).

**Verdict (couleur).** Si `fl-f` renseigné :
- F_service ≤ F_adm : vert « OK, marge {F_adm/F_service:.1f}×. »
- F_service > F_adm : rouge « Risque de flambage : charge {F_service} kN >
  admissible {F_adm} kN. Augmenter le diamètre de tige ou réduire la course
  libre. »

**Débutant.** Une tige fine et longue peut plier d'un coup sous la poussée
(flambage), bien avant d'atteindre sa limite en compression pure. Plus la course
sortie est grande, plus le risque augmente.
**Expert.** Le montage conditionne tout via μ : un vérin articulé aux deux bouts
(rotule-rotule) tient bien mieux qu'un montage encastré-libre. Pour les grandes
courses, envisager tige de plus fort diamètre, tube-guide, ou vérin à double
tige. Tenir compte du poids propre et des efforts latéraux.

---

## 5. Pertes de charge dans les accessoires — `id="calc-pertes-accessoires"` (préfixe `pa-`)

**Rôle.** Estimer la perte de charge des singularités (coudes, raccords,
distributeurs, clapets) que le calculateur de pertes en *conduite droite*
existant ne couvre pas.

**Formule.** `Δp = K_tot × ρ × v² / 2` (méthode des coefficients de perte K),
avec `K_tot = Σ (n_i × K_i)`. Résultat en Pa → convertir en bar (÷ 1e5).

**Coefficients K typiques à proposer** (champs quantité par type) :
- Coude 90° : K ≈ 0,9 · Coude 45° : K ≈ 0,4 · Té (passage) : K ≈ 0,4 ·
  Té (dérivation) : K ≈ 1,3 · Raccord/union : K ≈ 0,1 · Entrée/sortie
  réservoir : K ≈ 0,5–1,0 · Distributeur (passage) : K ≈ 2–5 (variable, laisser
  saisissable).

**Entrées.**
- `pa-v` vitesse du fluide [m/s] déf. 4 (ou dériver de Q et d comme le fait
  `calc-vitesse-conduite` : `v = 21,2 Q / d²`).
- `pa-rho` masse volumique huile [kg/m³] déf. 870.
- Un champ quantité par type d'accessoire (`pa-coude90`, `pa-coude45`, `pa-te`,
  `pa-raccord`…) + un champ `pa-kdiv` pour distributeur avec K saisissable.

**Sorties.**
- `pa-res-k` — K total cumulé.
- `pa-res-dp` — Perte de charge [bar]. Ex. 2 coudes + 1 distributeur (K=3,8),
  v=4 m/s, ρ=870 → ~0,26 bar.

**Garde-fous.** v>0. Rappeler que K est indicatif et dépend du composant réel
(privilégier la donnée constructeur si disponible).

**Verdict.** Cumuler avec la perte en conduite droite pour le bilan total ; si
Δp accessoires domine, revoir le tracé (moins de coudes, rayons plus larges).

**Débutant.** Chaque coude, raccord ou appareil freine l'huile et « mange » de
la pression, transformée en chaleur. Multiplier les singularités = multiplier les
pertes.
**Expert.** Méthode K valable en régime turbulent ; en laminaire ou pour les
composants normalisés, préférer la courbe Δp = f(Q) du constructeur. La longueur
équivalente (L_eq = K·d/λ) est une alternative pour additionner directement aux
mètres de tube.

---

## 6. Rigidité hydraulique / fréquence propre — `id="calc-rigidite"` (préfixe `rg-`)

**Rôle.** Chiffrer l'élasticité de la colonne d'huile (raideur du « ressort
hydraulique ») et la fréquence propre de l'axe, utile pour comprendre les
à-coups, oscillations et la stabilité des asservissements.

**Formules.**
- Raideur hydraulique : `k_h = β × A² / V` (β = module de compressibilité de
  l'huile ≈ 1,4×10⁹ Pa ; A = section piston ; V = volume d'huile sous
  compression = A × longueur de colonne).
- Fréquence propre (masse mobile m) : `f = (1 / 2π) × √(k_h / m)`.
- Cas double chambre : additionner les raideurs des deux volumes
  (`k_h = β A²(1/V₁ + 1/V₂)`), à mentionner en Expert.

**Entrées.**
- `rg-d` diamètre piston [mm] déf. 80.
- `rg-l` longueur de colonne d'huile [mm] déf. 400.
- `rg-m` masse mobile ramenée [kg] déf. 500.
- `rg-beta` module de compressibilité [MPa] déf. 1400.

**Sorties.**
- `rg-res-k` — Raideur [N/mm]. Ex. d=80, L=400 → ~17,6 N/mm (pour A=50,3 cm²).
- `rg-res-f` — Fréquence propre [Hz]. Ex. m=500 kg → ~30 Hz.

**Garde-fous.** Tous >0. Préciser que β réel chute fortement si de l'air est
dissous/entraîné (quelques % d'air divisent la raideur).

**Verdict.** « Fréquence propre ≈ {f} Hz : la bande passante d'un
asservissement doit rester bien en-dessous. » Signaler si f < 10 Hz (système mou,
sujet aux oscillations).

**Débutant.** L'huile n'est pas parfaitement incompressible : la colonne se
comporte comme un ressort. Plus la colonne est longue, plus c'est « mou » et plus
l'axe oscille aux démarrages/arrêts.
**Expert.** L'air entraîné est l'ennemi n°1 de la raideur (β effectif s'effondre).
Position de vérin, volume mort et flexibles longs abaissent f. En asservissement,
viser une bande passante ≤ 1/3 de la fréquence propre.

---

## 7. Convertisseur d'unités hydrauliques — `id="calc-conversions"` (préfixe `cv-`)

**Rôle.** Conversions courantes, notamment face à la documentation anglo-saxonne.
Calculateur « utilitaire » : plusieurs paires, conversion bidirectionnelle.

**Facteurs (vérifiés).**
- Pression : 1 bar = 14,5038 psi ; 1 MPa = 10 bar = 145,038 psi.
- Débit : 1 L/min = 0,264172 US gpm.
- Viscosité : SUS ≈ cSt × 4,635 (valable pour ν > ~70 cSt ; sous ce seuil,
  formule non linéaire — le signaler).
- Cylindrée : 1 cm³/tr = 0,061024 in³/rev.
- Bonus utiles : 1 L = 0,264172 US gal ; température °C ↔ °F ;
  1 kW = 1,34102 hp ; 1 Nm = 0,737562 lbf·ft.

**Interface.** Une ligne par grandeur avec deux `<input>` couplés (saisie d'un
côté → met à jour l'autre), ou un `<select>` de grandeur + un facteur. IDs type
`cv-bar`/`cv-psi`, `cv-lmin`/`cv-gpm`, etc. Format FR à l'affichage.

**Garde-fous.** Éviter la boucle infinie de mise à jour (drapeau « en cours de
saisie »). Pour SUS<70, afficher « approximation non valable sous 70 cSt ».

**Débutant.** Beaucoup de fiches et de matériels utilisent les unités
américaines (psi, gpm, SUS) : ce convertisseur évite les erreurs de lecture.
**Expert.** La conversion cSt↔SUS n'est pas un simple facteur en dessous de
70 cSt ; utiliser la table ASTM D2161 pour les basses viscosités.

---

## 8. Puissance de thermoplongeur — `id="calc-thermoplongeur"` (préfixe `tp-`)

**Rôle.** Dimensionner le réchauffeur d'huile d'un réservoir : puissance pour
monter l'huile à température de service en un temps donné, puissance de maintien,
et surtout vérification de la **densité de puissance surfacique**, qui est le
vrai critère de choix.

**Formules.**
- Énergie de chauffe : `P_chauffe (kW) = V(L) × ρ(kg/L) × c(kJ/kg·K) × ΔT(K) / (3600 × t(h))`
  avec c ≈ 1,9 kJ/(kg·K) pour une huile minérale (1,8–2,1 selon la famille).
- Puissance de maintien (compense les pertes du réservoir) :
  `P_maintien (W) = k × S × (T_huile − T_amb)` — réutiliser `surfaceReservoir()`
  et les valeurs de k du calculateur de bilan thermique.
- Puissance à installer : `P_chauffe + P_maintien`.
- **Densité de puissance surfacique** : `w (W/cm²) = P(W) / S_chauffante(cm²)`,
  avec `S_chauffante = π × d_élément(cm) × L_immergée(cm) × nb_épingles`.

**Entrées.**
- `tp-v` volume d'huile [L] déf. 200 · `tp-rho` [kg/L] déf. 0,87 · `tp-c` [kJ/kg·K] déf. 1,9.
- `tp-tdep` température de départ [°C] déf. 5 · `tp-tcible` [°C] déf. 40 · `tp-t` durée [h] déf. 2.
- `tp-type` `<select>` : **standard (éléments immergés)** / **à barillet (éléments sous fourreau)**.
- `tp-d` diamètre d'élément [mm] déf. 8 · `tp-l` longueur immergée [mm] déf. 400 ·
  `tp-n` nombre d'épingles déf. 3.

**Sorties.** `tp-res-chauffe` [kW] · `tp-res-maintien` [kW] · `tp-res-total` [kW] ·
`tp-res-densite` [W/cm²].

**Verdict (le point critique).** L'huile hydraulique se craque au contact d'un
élément trop chaud (vernis, cokéfaction, colmatage des filtres). Seuils usuels :
- w ≤ 1 W/cm² : vert, sans risque pour une huile minérale.
- 1 < w ≤ 1,5 W/cm² : orange, acceptable seulement si la circulation est assurée.
- w > 1,5 W/cm² : rouge — rallonger ou multiplier les éléments, ne pas monter en puissance.

> ⚠️ **À faire confirmer par Damien avant implémentation** : la distinction
> *standard* / *à barillet* n'est pas traitée de la même façon partout. Le
> raisonnement retenu ici est qu'un élément sous fourreau ajoute une résistance
> thermique entre la résistance et l'huile, donc que **la densité admissible y
> est plus basse** (à chiffrer). Ne pas coder de seuil « barillet » tant que
> Damien n'a pas donné les valeurs de sa pratique.

**Débutant.** Une huile froide est épaisse : la pompe peine, cavite, et le
rendement s'effondre. Le thermoplongeur amène l'huile à température avant le
démarrage en charge.
**Expert.** Ne jamais raisonner qu'en kilowatts : c'est la densité de puissance
surfacique qui décide de la durée de vie de l'huile. Prévoir un thermostat de
régulation **et** un thermostat de sécurité indépendant, et ne jamais alimenter
un élément non immergé (asservir au niveau bas).

---

## 9. Catégorie « Moteur » — regrouper et compléter

**Rôle.** Créer un groupe `⚙️ Moteur` dans le sommaire, rassemblant ce qui sert à
définir un moteur — électrique d'entraînement comme hydraulique récepteur.

**Contenu du groupe.**
1. `calc-moteur-entrainement` — **la spec n° 3 ci-dessus** (puissance du moteur
   d'entraînement). ⚠️ Ne pas créer de calculateur « puissance de moteur
   électrique » séparé : c'est le même calcul, il suffit de le ranger ici.
2. `calc-vitesse-moteur` — vitesse d'un moteur hydraulique (**déjà en ligne**,
   à déplacer de « Pompe & puissance » vers ce groupe).
3. `calc-moteur-electrique` (préfixe `el-`) — **nouveau**, caractéristiques
   électriques du moteur d'entraînement :
   - Vitesse de synchronisme : `N_s (tr/min) = 120 × f(Hz) / nb_pôles`
     (50 Hz → 3000 / 1500 / 1000 / 750 pour 2 / 4 / 6 / 8 pôles), puis
     `N_réel = N_s × (1 − g)` avec g ≈ 3 à 5 %.
   - Couple nominal : `C (Nm) = 9550 × P(kW) / N(tr/min)`.
   - Courant absorbé en triphasé : `I (A) = P(W) / (√3 × U × cos φ × η)`.
   - Courant de démarrage : 5 à 7 × I_n en direct, ≈ 1/3 en étoile-triangle.
   - Sortie : proposer la puissance normalisée immédiatement supérieure
     (0,75 / 1,1 / 1,5 / 2,2 / 3 / 4 / 5,5 / 7,5 / 11 / 15 / 18,5 / 22 / 30 kW).
4. `calc-choix-moteur-hydraulique` (préfixe `cm-`) — **nouveau**, aide au choix
   selon le type. Plutôt un comparateur qu'un calcul : à partir de la vitesse et
   du couple visés, indiquer la famille adaptée (engrenages : rapide, couple
   modeste, bon marché · palettes : intermédiaire, silencieux · pistons :
   couple élevé, haute pression, rendement supérieur · moteur lent à came :
   très fort couple à très basse vitesse, entraînement direct sans réducteur).
   Afficher la cylindrée nécessaire : `Cyl (cm³/tr) = Q × 1000 × η_v / N`.

**Débutant.** Le moteur électrique fait tourner la pompe ; le moteur hydraulique
fait l'inverse, il transforme le débit en rotation. Les deux se dimensionnent en
couple et en vitesse.
**Expert.** Le vrai piège est le démarrage à froid : couple résistant élevé par
viscosité et courant d'appel du moteur électrique se cumulent. Vérifier la
courbe couple/vitesse du moteur et le calibre de la protection.

---

## 10. Accumulateur : résoudre n'importe quelle inconnue — `id="calc-accu"` (préfixe `ac-`)

**Rôle.** Faire évoluer le calculateur d'accumulateur **existant** : aujourd'hui
il ne calcule que le volume utile ΔV. Il doit permettre de calculer **n'importe
laquelle des cinq grandeurs** à partir des quatre autres — c'est ainsi qu'on
travaille en pratique (« j'ai un accumulateur de 10 L, il me faut 2 L utiles,
à quelle pression le gonfler ? »).

**Interface.** Un `<select>` `ac-inconnue` en tête de carte : « Que voulez-vous
calculer ? » → Volume utile ΔV (défaut, comportement actuel) / Volume de
l'accumulateur V₀ / Pression de gonflage p₀ / Pression mini / Pression maxi.
Le champ correspondant est masqué et remplacé par le bloc résultat.

**Formules** (pressions **absolues**, = relatives + 1 ; cycle isotherme) à partir
de `ΔV = V₀ × p₀ × (1/p_min − 1/p_max)` :
- `V₀ = ΔV / (p₀ × (1/p_min − 1/p_max))`
- `p₀ = ΔV / (V₀ × (1/p_min − 1/p_max))`
- `p_min = 1 / (ΔV/(V₀ p₀) + 1/p_max)`
- `p_max = 1 / (1/p_min − ΔV/(V₀ p₀))` — **n'existe que si** `1/p_min > ΔV/(V₀ p₀)`,
  sinon afficher « ce volume utile est impossible avec ce gonflage » (l'accumulateur
  serait vidé avant d'atteindre p_max).

**Garde-fous.** Conserver la règle `p₀ < p_min < p_max` et la vérifier sur le
résultat calculé, pas seulement sur les saisies. Rappeler p₀ ≈ 0,9 × p_min.
Le cycle adiabatique (exposant 1,4) ne s'inverse pas analytiquement pour toutes
les inconnues : soit le résoudre numériquement (dichotomie, 30 itérations
suffisent), soit n'afficher la colonne adiabatique que dans le sens direct.

**Débutant.** Les cinq grandeurs sont liées par une seule relation : en connaître
quatre suffit toujours à trouver la cinquième.
**Expert.** Attention à la pression de gonflage mesurée à chaud : elle monte avec
la température du gaz. Un p₀ relevé en service surestime le gonflage réel à
froid, et fausse le calcul du volume utile disponible.

---

## Récapitulatif d'intégration

| # | Calculateur | id section | préfixe | Sorties clés | État |
|---|---|---|---|---|---|
| 1 | Réservoir | `calc-reservoir` | `rs-` | Volume conseillé (L) | à faire |
| 2 | Bilan thermique / échangeur | `calc-bilan-thermique` | `bt-` | P_diss, T_eq, P_échangeur | ✅ fait |
| 3 | Moteur d'entraînement | `calc-moteur-entrainement` | `me-` | P_moteur, couple | à faire (→ groupe Moteur) |
| 4 | Flambage tige (Euler) | `calc-flambage` | `fl-` | F_crit, F_adm | à faire |
| 5 | Pertes accessoires | `calc-pertes-accessoires` | `pa-` | K_tot, Δp (bar) | à faire |
| 6 | Rigidité hydraulique | `calc-rigidite` | `rg-` | raideur, fréquence propre | à faire |
| 7 | Convertisseur d'unités | `calc-conversions` | `cv-` | conversions bidirectionnelles | à faire — voir aussi `site-hydrodidac/BRIEF_PAGE_UNITES.md` |
| 8 | Thermoplongeur | `calc-thermoplongeur` | `tp-` | P chauffe/maintien, densité W/cm² | à faire |
| 9 | Groupe « Moteur » | `calc-moteur-electrique`, `calc-choix-moteur-hydraulique` | `el-`, `cm-` | N, couple, courant, cylindrée | à faire |
| 10 | Accumulateur : toute inconnue | `calc-accu` (existant) | `ac-` | V₀, p₀, p_min, p_max ou ΔV | à faire (évolution) |

**À ne pas oublier côté intégration :** ajouter chaque carte à la navigation /
ancre de retour (`calc-retour`), compléter la meta-description de la page,
respecter le format décimal FR à l'affichage, et vérifier le rendu mobile
(cartes en colonne). Recalcul sur `input` pour chaque champ.

**Ordre de priorité conseillé** (valeur pédagogique + usage réel), mis à jour :
~~2 (bilan thermique)~~ ✅ → **10 (accumulateur toute inconnue, évolution d'un
calculateur déjà en place, gros gain pour peu de travail)** → 1 (réservoir) →
9 + 3 (groupe Moteur) → 8 (thermoplongeur) → 4 (flambage) → 5 (accessoires) →
7 (conversions) → 6 (rigidité).

**Liens entre calculateurs** : chaque carte affiche un bloc « Voir aussi » vers
les calculateurs voisins. Tout nouveau calculateur doit être déclaré dans
`site-hydrodidac/src/data/calculateurs-nav.js` — à la fois dans `sommaire`
(groupe + libellé) et dans `liens` (2 à 3 calculateurs connexes), et être ajouté
aux `liens` des calculateurs existants qui le concernent.
