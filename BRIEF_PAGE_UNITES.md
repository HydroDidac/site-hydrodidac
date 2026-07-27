# Brief — Page « Unités & conversions » pour HydroDidac

> **À qui s'adresse ce document** : à Claude Code, ouvert dans le dossier
> `hydraulique/site-hydrodidac/`. Il contient tout le nécessaire pour créer la
> page sans avoir à poser de questions à Damien.
>
> **Résumé en une phrase** : créer `/unites`, une page de conversion d'unités
> hydrauliques bâtie exactement sur le même moule visuel et technique que
> `/calculateurs`.

---

## 1. Objectif

Un hydraulicien passe son temps à jongler entre unités : un débit noté en
cm³/min sur une fiche de gicleur, en L/min sur le débitmètre, en GPM sur la
documentation d'un fabricant américain. Une pression en bar, en PSI, en MPa.
Une cylindrée en cm³/tr ou en in³/rev.

La page doit permettre de **taper une valeur dans n'importe quelle unité d'une
famille et voir immédiatement toutes les autres unités de cette famille**.

Deux principes non négociables, hérités de l'esprit du site :

1. **Comprendre autant que convertir.** Chaque famille d'unités affiche le
   facteur de conversion utilisé et une explication à deux niveaux
   (🟢 débutant / 🔴 expert), comme les calculateurs.
2. **Zéro friction.** Pas de bouton « Convertir » : tout se recalcule à la
   frappe, comme sur `/calculateurs`.

---

## 2. Emplacement et intégration

| Élément | Valeur |
|---|---|
| Fichier à créer | `src/pages/unites.astro` |
| URL publique | `https://hydrodidac.com/unites` |
| Lien de navigation | ajouter `<a href="/unites" class={actif("/unites")}>Unités</a>` dans `src/components/Header.astro`, **entre** « Calculateurs » et « Forum » |
| Sitemap | automatique (plugin sitemap Astro), rien à faire |
| Recherche Pagefind | automatique au build, rien à faire |

Ajouter aussi, dans l'intro de `src/pages/calculateurs.astro`, une phrase avec
un lien vers `/unites` (« Besoin de convertir une unité ? Voir la page
Unités & conversions ») — et réciproquement un lien vers `/calculateurs` depuis
`/unites`. Les deux pages sont complémentaires.

`<Layout>` doit recevoir :

```
title="Unités et conversions hydrauliques — HydroDidac"
description="Convertisseur d'unités pour l'hydraulique industrielle : débit (L/min, cm³/min, GPM), pression (bar, PSI, MPa), cylindrée, viscosité, force, couple, puissance, température, longueur, volume. Facteurs de conversion expliqués."
```

---

## 3. Codes visuels à reprendre — à l'identique

**Ne pas inventer de nouveau style.** Toute la page réutilise les classes CSS
déjà écrites dans `src/pages/calculateurs.astro`. Le plus simple et le plus sûr :
copier le bloc `<style>` de `calculateurs.astro` (lignes ~716 à ~1080) dans
`unites.astro`, puis y ajouter uniquement les quelques classes nouvelles
listées au § 3.4. Les styles Astro sont scopés par page : il n'y a donc pas de
conflit, juste une duplication assumée pour rester simple.

### 3.1 Structure de page (copie conforme du gabarit calculateurs)

```
<main id="contenu" class="calc-page">
  <div class="calc-layout">
    <nav class="calc-sommaire" aria-label="Sommaire des convertisseurs">
      <p class="calc-sommaire-titre">Sommaire</p>
      <a href="#tous" data-cible="tous" class="calc-sommaire-tous">📋 Toutes les unités</a>
      <ul> … groupes et items … </ul>
    </nav>
    <div class="calc-contenu">
      <h1>Unités et conversions</h1>
      <p class="calc-intro"> … </p>
      <p class="calc-retour" id="calc-retour" hidden>
        <a href="#tous" data-cible="tous">← Toutes les unités</a>
      </p>
      <div class="calc-grille">
        <section class="calc-carte" id="u-debit"> … </section>
        …
      </div>
    </div>
  </div>
</main>
```

### 3.2 Anatomie d'une carte

Chaque famille d'unités est une `<section class="calc-carte" id="u-xxx">`
contenant, **dans cet ordre** :

1. `<h2>` — nom de la famille (ex. « Débit »)
2. `<p class="calc-desc">` — une phrase de contexte métier
3. `<p class="calc-formule">` — la relation de référence
   (ex. `1 L/min = 1000 cm³/min = 0,2642 US gal/min`)
4. Les champs de saisie : une `<label>` par unité, contenant un
   `<input type="number" step="any" inputmode="decimal">`
5. `<p class="calc-note">` — piège ou précision métier
6. `<details class="calc-plus"><summary>💡 Pour aller plus loin</summary>` avec
   deux `<p>`, l'un préfixé `<span class="pastille-niveau debutant">🟢 Débutant</span>`,
   l'autre `<span class="pastille-niveau avance">🔴 Expert</span>`

**Différence assumée avec les calculateurs** : ici il n'y a pas de bloc
`.calc-resultat` bleu foncé unique, puisque chaque champ est à la fois entrée et
sortie. Le champ **actuellement édité** est mis en valeur (voir § 3.4).

### 3.3 Rappel des variables de design à utiliser

Elles existent déjà dans `src/styles/global.css`, ne jamais écrire de couleur
en dur :

| Usage | Variable |
|---|---|
| Bleu de marque | `--color-bleu-hydraulique` (#0e5aa7) |
| Bleu foncé (fonds de résultat) | `--color-bleu-fonce` |
| Accent / bordure haute des cartes | `--color-ambre` (#f39200) |
| Texte | `--color-anthracite` |
| Fond de formule | `--color-formule-fond` |
| Fond des champs | `--color-gris-clair` |
| Bordures | `--color-gris-bordure` |
| Gris de texte secondaire | `#51606b` (littéral, comme dans calculateurs.astro) |
| Typo titres / texte / valeurs | `--font-titres` / `--font-texte` / `--font-valeurs` |

Rappels de forme : carte = fond blanc, `border-top: 4px solid var(--color-ambre)`,
`border-radius: 6px`, `box-shadow: var(--ombre-carte)`, `padding: 1.4rem`.
Grille = `repeat(auto-fit, minmax(310px, 1fr))`, `gap: 1.4rem`.

### 3.4 Les seules classes CSS nouvelles à écrire

```css
/* Ligne d'unité : le libellé à gauche, le champ à droite, l'unité en mono */
.u-ligne { display: grid; grid-template-columns: 1fr; }

/* Champ source : celui dans lequel l'utilisateur tape */
.calc-carte input.u-source {
  border-color: var(--color-ambre);
  background: var(--color-blanc);
  font-weight: 700;
}

/* Petit rappel du facteur sous chaque champ dérivé */
.u-facteur {
  font-family: var(--font-valeurs);
  font-size: 0.72rem;
  color: #51606b;
  margin: 0.15rem 0 0;
}

/* Bouton « Réinitialiser » de la carte */
.u-reset {
  margin-top: 0.8rem;
  font-family: var(--font-texte);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-bleu-hydraulique);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.u-reset:hover { color: var(--color-ambre); }

/* Tableau de référence en bas de page (rappels non interactifs) */
/* → réutiliser .calc-tableau, déjà défini, ne rien ajouter */
```

### 3.5 Comportements interactifs à reprendre tels quels

Copier depuis `calculateurs.astro` (fin du `<script>`) :

- **Le sommaire qui filtre** : cliquer une entrée n'affiche que la carte
  correspondante, l'état vit dans l'ancre `#u-xxx` (donc partageable et
  compatible bouton retour). L'entrée « Toutes les unités » revient à la grille
  complète. Réutiliser la fonction `appliquerFiltre`, la classe
  `.calc-grille--unique`, le `<p class="calc-retour">` et les `data-cible`.
- **L'`IntersectionObserver`** qui surligne dans le sommaire la carte visible
  pendant le défilement (uniquement en mode « tout afficher »).
- **Le responsive** : sous 900 px, `.calc-layout` passe en colonne et le
  sommaire devient une liste horizontale (déjà dans la media query copiée).

---

## 4. Le sommaire de la page

Structure `sommaire` à déclarer dans le frontmatter (même forme que dans
`calculateurs.astro`) :

```js
const sommaire = [
  {
    titre: "💧 Fluide en mouvement",
    items: [
      { id: "u-debit",      label: "Débit" },
      { id: "u-vitesse",    label: "Vitesse d'écoulement" },
      { id: "u-viscosite",  label: "Viscosité" },
    ],
  },
  {
    titre: "🔴 Pression & force",
    items: [
      { id: "u-pression", label: "Pression" },
      { id: "u-force",    label: "Force" },
      { id: "u-couple",   label: "Couple" },
    ],
  },
  {
    titre: "⚙️ Composants",
    items: [
      { id: "u-cylindree", label: "Cylindrée" },
      { id: "u-longueur",  label: "Longueur & diamètre" },
      { id: "u-surface",   label: "Surface" },
      { id: "u-volume",    label: "Volume" },
    ],
  },
  {
    titre: "⚡ Énergie & thermique",
    items: [
      { id: "u-puissance",   label: "Puissance" },
      { id: "u-temperature", label: "Température" },
      { id: "u-vitesse-rot", label: "Vitesse de rotation" },
    ],
  },
  {
    titre: "📐 Autres",
    items: [
      { id: "u-masse",   label: "Masse" },
      { id: "u-filetage", label: "Filetages & raccords" },
    ],
  },
];
```

---

## 5. Contenu de chaque carte — données de référence

> **Règle de calcul** : pour chaque famille, on définit **une unité pivot** et
> un facteur `versPivot` par unité. Convertir = `valeur × versPivot` pour aller
> au pivot, puis `pivot ÷ versPivot` pour redescendre vers chaque autre unité.
> Seule la température échappe à cette règle (voir § 5.11).
>
> Tous les facteurs ci-dessous sont donnés avec assez de décimales pour un
> usage industriel. Les valeurs « exactes » sont marquées **(exact)**.

### 5.1 Débit — `u-debit` — pivot : **L/min**

| Unité | Libellé affiché | versPivot (→ L/min) |
|---|---|---|
| L/min | Litre par minute | 1 **(exact)** |
| cm³/min | Centimètre cube par minute (cc/min) | 0,001 **(exact)** |
| cm³/s | Centimètre cube par seconde | 0,06 **(exact)** |
| L/s | Litre par seconde | 60 **(exact)** |
| L/h | Litre par heure | 0,0166666667 |
| m³/h | Mètre cube par heure | 16,6666667 |
| m³/s | Mètre cube par seconde | 60 000 **(exact)** |
| US gal/min (GPM) | Gallon US par minute | 3,785411784 **(exact)** |
| US gal/h | Gallon US par heure | 0,0630901964 |
| imp gal/min | Gallon impérial (UK) par minute | 4,54609 **(exact)** |
| in³/min (CIM) | Pouce cube par minute | 0,016387064 **(exact)** |

`calc-formule` : `1 L/min = 1 000 cm³/min = 0,2642 US gal/min = 61,02 in³/min`

`calc-note` : « Attention au gallon : un gallon US (3,785 L) et un gallon
impérial (4,546 L) diffèrent de 20 %. Les documentations américaines emploient
le gallon US, les britanniques anciennes l'impérial. En cas de doute sur une
doc, vérifiez si le débit annoncé est cohérent avec la cylindrée et la vitesse
de rotation de la pompe. »

**🟢 Débutant** : « Le débit, c'est le volume de fluide qui passe par seconde ou
par minute. Sur un circuit, c'est lui qui donne la *vitesse* des mouvements : à
pression égale, plus de débit = vérin plus rapide. L'unité de terrain en Europe
est le litre par minute (L/min). »

**🔴 Expert** : « Le cm³/min est l'unité usuelle des très petits débits (gicleurs,
fuites internes, débits de pilotage, dosage) — 1 L/min = 1 000 cm³/min. Le GPM
américain suppose presque toujours le gallon US ; méfiez-vous des catalogues
anciens ou britanniques qui emploient le gallon impérial, l'écart de 20 % suffit
à faire chauffer un circuit. Rappelez-vous aussi que le débit lu sur un
débitmètre est un débit **volumique** : à 60 °C, le même débit massique
correspond à un débit volumique environ 3 % supérieur qu'à 20 °C, du fait de la
dilatation de l'huile. »

### 5.2 Pression — `u-pression` — pivot : **bar**

| Unité | Libellé | versPivot (→ bar) |
|---|---|---|
| bar | Bar | 1 **(exact)** |
| PSI (lbf/in²) | Livre par pouce carré | 0,0689475729 |
| MPa | Mégapascal | 10 **(exact)** |
| kPa | Kilopascal | 0,01 **(exact)** |
| Pa | Pascal | 0,00001 **(exact)** |
| kgf/cm² (at) | Kilogramme-force par cm² | 0,980665 **(exact)** |
| atm | Atmosphère normale | 1,01325 **(exact)** |
| mCE | Mètre de colonne d'eau | 0,0980665 **(exact)** |
| mmHg (Torr) | Millimètre de mercure | 0,001333224 |
| inHg | Pouce de mercure | 0,0338638864 |

`calc-formule` : `1 bar = 14,5038 PSI = 0,1 MPa = 100 000 Pa`

`calc-note` : « Un manomètre de circuit affiche une pression **relative**
(effective) : 0 bar au manomètre = pression atmosphérique. La pression
**absolue** vaut la relative + 1,013 bar environ ; elle n'intervient qu'au
calcul d'aspiration de pompe, de cavitation et de précharge d'accumulateur. »

**🟢 Débutant** : « La pression, c'est la force que le fluide exerce sur chaque
centimètre carré. C'est elle qui donne la *force* du vérin : à section égale,
plus de pression = plus de force. En Europe on parle en bar, aux États-Unis en
PSI ; retenez le repère mental **1 bar ≈ 14,5 PSI**, donc 200 bar ≈ 2 900 PSI. »

**🔴 Expert** : « L'unité SI est le pascal, mais le bar (10⁵ Pa) reste l'usage
industriel car il donne des nombres maniables. Le MPa est fréquent sur les
documentations japonaises et allemandes récentes : 1 MPa = 10 bar, l'erreur d'un
facteur 10 est le piège classique. Le kgf/cm² (ancien « at ») vaut 0,9807 bar,
soit un écart de 2 % — négligeable en lecture de terrain, pas dans un calcul de
tenue de tuyauterie. Sur les accumulateurs, la précharge azote se raisonne
toujours en **absolu** et se corrige de la température (loi de Boyle-Mariotte
isotherme, ou polytropique en cycle rapide). »

### 5.3 Cylindrée — `u-cylindree` — pivot : **cm³/tr**

| Unité | Libellé | versPivot (→ cm³/tr) |
|---|---|---|
| cm³/tr (cc/rev) | Centimètre cube par tour | 1 **(exact)** |
| L/tr | Litre par tour | 1000 **(exact)** |
| mL/tr | Millilitre par tour | 1 **(exact)** |
| in³/rev (CIR) | Pouce cube par tour | 16,387064 **(exact)** |
| cm³/rad | Centimètre cube par radian | 6,283185307 |

`calc-formule` : `1 in³/rev = 16,387 cm³/tr`

`calc-note` : « La cylindrée est la donnée d'identité d'une pompe ou d'un moteur
hydraulique : c'est le volume déplacé en un tour d'arbre. Elle relie le débit à
la vitesse de rotation (Q = Cyl × N) et le couple à la pression
(C = Cyl × Δp / 20π). »

**🟢 Débutant** : « C'est la "taille" de la pompe : combien d'huile elle envoie à
chaque tour. Une pompe de 20 cm³/tr entraînée à 1 500 tr/min délivre environ
30 L/min. »

**🔴 Expert** : « Les catalogues américains notent la cylindrée en CIR (cubic
inch per revolution) — le facteur 16,387 est à connaître par cœur. Attention à
la définition : sur les pompes à pistons axiaux à cylindrée variable, la valeur
catalogue est la cylindrée **maximale** (plateau à angle maxi). Sur les moteurs
lents à grande cylindrée, certains fabricants annoncent une cylindrée
"géométrique" et une cylindrée "effective" qui diffèrent de quelques pourcents ;
c'est la première qui sert au calcul de couple théorique. »

### 5.4 Viscosité cinématique — `u-viscosite` — pivot : **cSt (mm²/s)**

| Unité | Libellé | versPivot (→ cSt) |
|---|---|---|
| cSt | Centistokes | 1 **(exact)** |
| mm²/s | Millimètre carré par seconde | 1 **(exact)** |
| m²/s | Mètre carré par seconde | 1 000 000 **(exact)** |
| St | Stokes | 100 **(exact)** |
| SUS (SSU) | Saybolt Universal Seconds | *voir formule ci-dessous* |
| °E | Degré Engler | *voir formule ci-dessous* |

**Cas particuliers (non linéaires)** — à traiter en dur dans le script :

- **SUS → cSt** (valable au-dessus de ~32 SUS, à 100 °F) :
  `cSt = 0,226 × SUS − 195 / SUS` pour SUS ≤ 100
  `cSt = 0,220 × SUS − 135 / SUS` pour SUS > 100
  L'inverse s'obtient numériquement (Newton ou dichotomie sur 5 itérations),
  ou par l'approximation `SUS ≈ 4,6324 × cSt` pour cSt > 60.
- **°E → cSt** : `cSt = 7,32 × °E − 6,31 / °E`
  Inverse : `°E ≈ (cSt + √(cSt² + 184,8)) / 14,64`

Ajouter également une **seconde partie de carte** « viscosité dynamique »
(pivot : cP = mPa·s) reliée à la cinématique par la masse volumique :

`ν (cSt) = μ (cP) ÷ ρ (g/cm³)` — prévoir un champ « masse volumique » avec la
valeur par défaut **0,87 g/cm³** (huile minérale usuelle).

| Unité dynamique | versPivot (→ cP) |
|---|---|
| cP | 1 **(exact)** |
| mPa·s | 1 **(exact)** |
| Pa·s | 1000 **(exact)** |
| P (poise) | 100 **(exact)** |

`calc-note` : « La viscosité d'une huile ne veut rien dire sans sa
température : une ISO VG 46 fait 46 cSt à 40 °C, mais ~400 cSt à 0 °C et
~7 cSt à 100 °C. Pour convertir une viscosité **d'une température à une autre**,
utilisez le calculateur dédié sur la page Calculateurs (équation de Walther /
ASTM D341) — ici on ne fait que changer d'unité, pas de température. »

**🟢 Débutant** : « La viscosité, c'est l'épaisseur de l'huile : une huile
visqueuse coule comme du miel, une huile fluide comme de l'eau. Le grade ISO VG
inscrit sur le bidon (VG 32, VG 46, VG 68) donne directement la viscosité en
centistokes à 40 °C. »

**🔴 Expert** : « Le cSt (= mm²/s) est une viscosité **cinématique** ; les
calculs de perte de charge et de Reynolds l'utilisent directement. La viscosité
**dynamique** (cP = mPa·s) intervient dans les modèles de film lubrifiant et de
fuite interne — le passage de l'une à l'autre exige la masse volumique à la
température considérée, pas celle à 15 °C. Le SUS est une unité empirique
héritée du viscosimètre Saybolt, encore présente sur les documentations
américaines anciennes : la conversion n'est pas un simple facteur et n'est
strictement valable qu'aux températures de référence 100 °F / 210 °F. »

### 5.5 Force — `u-force` — pivot : **N**

| Unité | Libellé | versPivot (→ N) |
|---|---|---|
| N | Newton | 1 **(exact)** |
| daN | Décanewton | 10 **(exact)** |
| kN | Kilonewton | 1000 **(exact)** |
| kgf (kp) | Kilogramme-force | 9,80665 **(exact)** |
| tf | Tonne-force | 9806,65 **(exact)** |
| lbf | Livre-force | 4,4482216153 **(exact)** |
| kip | 1000 lbf | 4448,2216153 |

`calc-note` : « Repère de terrain : **1 daN ≈ 1 kg**. Une force de 5 000 daN,
c'est l'équivalent de 5 tonnes posées sur la tige. »

### 5.6 Couple — `u-couple` — pivot : **N·m**

| Unité | Libellé | versPivot (→ N·m) |
|---|---|---|
| N·m | Newton-mètre | 1 **(exact)** |
| daN·m | Décanewton-mètre | 10 **(exact)** |
| kN·m | Kilonewton-mètre | 1000 **(exact)** |
| kgf·m | Kilogramme-force mètre | 9,80665 **(exact)** |
| lbf·ft | Livre-force pied | 1,3558179483 |
| lbf·in | Livre-force pouce | 0,1129848290 |

`calc-note` : « Le couple de serrage des raccords est le premier usage de cette
conversion : les clés dynamométriques européennes sont graduées en N·m, les
américaines en lbf·ft. Ne confondez pas lbf·ft et lbf·in — un facteur 12. »

### 5.7 Puissance — `u-puissance` — pivot : **kW**

| Unité | Libellé | versPivot (→ kW) |
|---|---|---|
| kW | Kilowatt | 1 **(exact)** |
| W | Watt | 0,001 **(exact)** |
| ch (CV métrique) | Cheval-vapeur | 0,73549875 **(exact)** |
| HP (mécanique) | Horsepower | 0,745699872 |
| kcal/h | Kilocalorie par heure | 0,001163 **(exact)** |
| BTU/h | British Thermal Unit par heure | 0,000293071 |

`calc-note` : « Le kcal/h et le BTU/h servent au dimensionnement des
**échangeurs** : la puissance à dissiper d'un groupe hydraulique est souvent
donnée en kW côté hydraulique et en kcal/h ou BTU/h sur le catalogue de
l'échangeur. »

**🔴 Expert** : « Le cheval fiscal européen (ch, 735,5 W) et le horsepower
américain (HP, 745,7 W) diffèrent de 1,4 % — sans conséquence pratique, mais
suffisant pour faire diverger deux devis. Rappel utile : toute la puissance
hydraulique non transformée en travail mécanique finit en chaleur dans le
réservoir. »

### 5.8 Longueur & diamètre — `u-longueur` — pivot : **mm**

| Unité | versPivot (→ mm) |
|---|---|
| mm | 1 **(exact)** |
| cm | 10 **(exact)** |
| m | 1000 **(exact)** |
| in (pouce) | 25,4 **(exact)** |
| ft (pied) | 304,8 **(exact)** |
| mil (thou) | 0,0254 **(exact)** |

`calc-note` : « Le mil (millième de pouce, 0,0254 mm) sert aux jeux de
fonctionnement et aux tolérances sur les documentations américaines. »

### 5.9 Surface — `u-surface` — pivot : **cm²**

| Unité | versPivot (→ cm²) |
|---|---|
| cm² | 1 **(exact)** |
| mm² | 0,01 **(exact)** |
| m² | 10 000 **(exact)** |
| in² | 6,4516 **(exact)** |

`calc-note` : « La section d'un vérin se raisonne en cm² parce que la force en
daN vaut alors simplement `pression (bar) × section (cm²)`. »

### 5.10 Volume — `u-volume` — pivot : **L**

| Unité | versPivot (→ L) |
|---|---|
| L | 1 **(exact)** |
| mL / cm³ | 0,001 **(exact)** |
| m³ | 1000 **(exact)** |
| in³ | 0,016387064 **(exact)** |
| US gal | 3,785411784 **(exact)** |
| imp gal | 4,54609 **(exact)** |

### 5.11 Température — `u-temperature` — **cas particulier**

Pas de facteur multiplicatif : conversions affines, à écrire en dur.

- °C → °F : `F = C × 9/5 + 32`
- °F → °C : `C = (F − 32) × 5/9`
- °C → K : `K = C + 273,15`
- K → °C : `C = K − 273,15`
- °C → °R (Rankine) : `R = (C + 273,15) × 9/5`

`calc-note` : « Plage de service usuelle d'une huile minérale : 40 à 60 °C
(104 à 140 °F). Au-delà de 70 °C, l'oxydation de l'huile s'accélère nettement
et sa durée de vie chute environ de moitié tous les 10 °C supplémentaires. »

**Champ à autoriser en négatif** : ne pas utiliser `min="0"` sur ces champs
(voir la fonction `lireLibre` de `calculateurs.astro`, prévue exactement pour
ce cas).

### 5.12 Vitesse d'écoulement — `u-vitesse` — pivot : **m/s**

| Unité | versPivot (→ m/s) |
|---|---|
| m/s | 1 **(exact)** |
| cm/s | 0,01 **(exact)** |
| mm/s | 0,001 **(exact)** |
| m/min | 0,0166666667 |
| ft/s | 0,3048 **(exact)** |
| ft/min (FPM) | 0,00508 **(exact)** |

`calc-note` : « Repères de dimensionnement : ligne de pression 3 à 6 m/s, ligne
de retour 2 à 4 m/s, ligne d'aspiration 0,6 à 1,2 m/s. Une aspiration trop
rapide est la première cause de cavitation. »

### 5.13 Vitesse de rotation — `u-vitesse-rot` — pivot : **tr/min (RPM)**

| Unité | versPivot (→ tr/min) |
|---|---|
| tr/min (RPM) | 1 **(exact)** |
| tr/s | 60 **(exact)** |
| rad/s | 9,549296586 |
| Hz (tr/s) | 60 **(exact)** |

### 5.14 Masse — `u-masse` — pivot : **kg**

| Unité | versPivot (→ kg) |
|---|---|
| kg | 1 **(exact)** |
| g | 0,001 **(exact)** |
| t | 1000 **(exact)** |
| lb | 0,45359237 **(exact)** |
| oz | 0,028349523125 **(exact)** |

### 5.15 Filetages & raccords — `u-filetage` — **carte non interactive**

Cette carte ne contient pas de champ de saisie : c'est un **tableau de
correspondance** (classe `.calc-tableau`, déjà stylée), en `calc-carte--large`
pour occuper toute la largeur de la grille.

| Taille nominale | Filetage BSPP (G) | Filetage métrique | Ø extérieur approx. |
|---|---|---|---|
| 1/8" | G 1/8 | M10×1 | 9,7 mm |
| 1/4" | G 1/4 | M14×1,5 | 13,2 mm |
| 3/8" | G 3/8 | M18×1,5 | 16,7 mm |
| 1/2" | G 1/2 | M22×1,5 | 20,9 mm |
| 3/4" | G 3/4 | M26×1,5 | 26,4 mm |
| 1" | G 1 | M33×2 | 33,2 mm |
| 1"1/4 | G 1 1/4 | M42×2 | 41,9 mm |
| 1"1/2 | G 1 1/2 | M48×2 | 47,8 mm |
| 2" | G 2 | M60×2 | 59,6 mm |

Et un second tableau, **codes de tuyaux flexibles (dash size)** :

| Dash | Ø intérieur nominal | Équivalent |
|---|---|---|
| -04 | 6,4 mm | 1/4" |
| -06 | 9,5 mm | 3/8" |
| -08 | 12,7 mm | 1/2" |
| -10 | 15,9 mm | 5/8" |
| -12 | 19,0 mm | 3/4" |
| -16 | 25,4 mm | 1" |
| -20 | 31,8 mm | 1"1/4 |
| -24 | 38,1 mm | 1"1/2 |
| -32 | 50,8 mm | 2" |

`calc-note` : « Le "dash size" est le diamètre intérieur exprimé en
seizièmes de pouce : -08 = 8/16" = 1/2". C'est la convention SAE, universelle
sur les flexibles. »

**⚠️ Point de vigilance à signaler dans la carte** : « Un filetage BSPP (G,
cylindrique, étanchéité par joint plat ou torique) et un filetage NPT
(américain, conique, étanchéité sur les filets) **ne sont pas
interchangeables** même quand leurs dimensions semblent proches : les visser
l'un dans l'autre endommage les deux. Vérifiez toujours la conicité avant
d'assembler. »

Ces valeurs de filetage sont des ordres de grandeur d'atelier destinés à
l'identification. **Ne pas les présenter comme des cotes de conception** : la
carte doit porter une phrase le rappelant, pour rester cohérente avec la règle
d'exactitude technique du projet.

---

## 6. Logique JavaScript à écrire

### 6.1 Principe

Le script vit dans un `<script>` en bas de `unites.astro` (TypeScript, comme
sur `calculateurs.astro` — Astro le compile).

Structure de données à déclarer **une seule fois**, dans le frontmatter, et
réutilisée à la fois pour générer le HTML et pour le calcul :

```ts
type Unite = { id: string; label: string; symbole: string; versPivot: number };
type Famille = { id: string; titre: string; desc: string; formule: string;
                 note: string; pivot: string; unites: Unite[];
                 debutant: string; expert: string };
```

Générer les champs par `.map()` sur `famille.unites` plutôt que d'écrire 80
`<input>` à la main : c'est plus court, plus sûr et plus facile à corriger.

### 6.2 Algorithme de conversion (familles linéaires)

```
à chaque événement "input" sur un champ de la famille F :
  1. mémoriser l'id du champ comme "source" ; lui donner la classe .u-source
     (et la retirer de tous les autres champs de F)
  2. v = parseFloat(valeur du champ source)
     si v n'est pas un nombre fini → vider tous les autres champs de F, sortir
  3. pivot = v × source.versPivot
  4. pour chaque autre unité u de F : u.champ.value = format(pivot / u.versPivot)
```

**Ne jamais réécrire le champ source pendant que l'utilisateur tape** : cela
détruirait le curseur et empêcherait de saisir « 0,5 » (le « 0, » serait
reformaté). Le champ source est le seul intouché.

### 6.3 Formatage des nombres

Le convertisseur doit rester lisible sur des ordres de grandeur très
différents (0,000016 in³ et 60 000 cm³/min dans la même famille).

```ts
const formater = (v: number): string => {
  if (!Number.isFinite(v)) return "";
  if (v === 0) return "0";
  const abs = Math.abs(v);
  if (abs >= 1e7 || abs < 1e-4) return v.toExponential(4).replace(".", ",");
  // 6 chiffres significatifs, sans zéros inutiles, virgule française
  return parseFloat(v.toPrecision(6)).toString().replace(".", ",");
};
```

Et à la **lecture**, accepter la virgule française comme séparateur décimal :
remplacer `,` par `.` avant `parseFloat`. Un `<input type="number">` refuse la
virgule dans certains navigateurs — si cela pose problème au test, basculer sur
`type="text" inputmode="decimal"` et valider la saisie par expression
régulière.

### 6.4 Bouton « Réinitialiser »

Un `<button type="button" class="u-reset">` par carte, qui vide tous les champs
de la famille et retire la classe `.u-source`.

### 6.5 Cas particuliers à ne pas oublier

- **Température** : conversions affines, aucun pivot multiplicatif ; écrire des
  fonctions `versCelsius(unite, v)` et `depuisCelsius(unite, c)`.
- **Viscosité SUS et °E** : formules non linéaires du § 5.4, avec inversion
  numérique. Prévoir de **désactiver l'affichage** (champ vidé) hors du domaine
  de validité — SUS < 32 n'a pas de sens.
- **Viscosité dynamique ↔ cinématique** : dépend du champ « masse volumique » ;
  toute modification de ce champ doit relancer le calcul de la carte.

---

## 7. Accessibilité et qualité

- Chaque `<input>` a un `<label>` explicite qui l'englobe (motif déjà employé
  sur `/calculateurs`).
- La `<nav>` du sommaire porte `aria-label="Sommaire des convertisseurs"`.
- Le lien d'évitement du `Layout` pointe vers `id="contenu"` : garder cet id sur
  le `<main>`.
- Contraste : ne pas mettre de texte ambre sur fond blanc (l'ambre est réservé
  aux bordures, accents et valeurs sur fond bleu foncé).
- La page doit rester **utilisable sans JavaScript pour la lecture** : les
  tableaux de référence (§ 5.15) et les formules sont du HTML statique.

---

## 8. Contenu additionnel en bas de page

Après la grille, ajouter une section « Aide-mémoire » (hors grille, pleine
largeur) avec un `.calc-tableau` des **conversions à retenir par cœur** :

| À retenir | Valeur |
|---|---|
| 1 bar | 14,5 PSI |
| 1 MPa | 10 bar |
| 10 bar | 145 PSI |
| 1 L/min | 0,264 GPM |
| 1 GPM | 3,785 L/min |
| 1 in³/rev | 16,39 cm³/tr |
| 1 daN | ≈ 1 kg |
| 1 kW | 1,36 ch |
| 1 pouce | 25,4 mm |
| Force vérin (daN) | pression (bar) × section (cm²) |
| Puissance (kW) | débit (L/min) × pression (bar) ÷ 600 |

Puis un court paragraphe de renvoi :
« Pour appliquer ces unités à un dimensionnement réel, rendez-vous sur la page
**[Calculateurs](/calculateurs)**. »

---

## 9. Vérifications à faire avant de considérer la page terminée

1. `npm run build` passe sans erreur ni avertissement TypeScript.
2. `npm run dev` : ouvrir `/unites` et vérifier, dans **au moins trois
   familles**, un aller-retour de conversion (taper une valeur, la relire dans
   une autre unité, la retaper dans cette autre unité, retrouver la valeur de
   départ à l'arrondi près).
3. Vérifier trois conversions de contrôle à la main :
   - 200 bar → **2 900,75 PSI**
   - 60 L/min → **15,850 US gal/min** et **60 000 cm³/min**
   - 20 in³/rev → **327,74 cm³/tr**
   - 40 °C → **104 °F**
4. Cliquer chaque entrée du sommaire : une seule carte doit s'afficher, l'URL
   doit porter l'ancre, le bouton retour du navigateur doit fonctionner.
5. Réduire la fenêtre sous 900 px : le sommaire passe au-dessus du contenu,
   aucune carte ne déborde horizontalement.
6. Vérifier que le lien « Unités » apparaît bien dans l'en-tête sur **toutes**
   les pages et qu'il est marqué `actif` sur `/unites`.
7. Vérifier visuellement, côte à côte avec `/calculateurs`, que les cartes ont
   la même bordure ambre en haut, la même ombre, le même arrondi et la même
   typographie.

---

## 10. Ce qu'il ne faut PAS faire

- ❌ Introduire un framework JS (React, Vue…) : le site est en JavaScript natif
  inline, on ne change pas cela pour une page de conversion.
- ❌ Créer de nouvelles couleurs ou de nouvelles polices : tout est déjà dans
  `global.css`.
- ❌ Ajouter une dépendance npm de conversion d'unités : les facteurs sont dans
  ce document, une multiplication suffit.
- ❌ Utiliser un bouton « Convertir » : le recalcul est instantané.
- ❌ Inventer des valeurs de filetage ou des facteurs non listés ici. Si une
  unité manque et semble utile, la proposer à Damien plutôt que de deviner.
- ❌ Modifier les fiches ou le contenu du Pôle B : cette page est du Pôle A.

---

## 11. Après la mise en ligne

- Mettre à jour l'état d'avancement dans `CLAUDE.md` du site (section
  « État d'avancement ») : ajouter la page `/unites`.
- La page est une bonne candidate pour le référencement : les requêtes
  « conversion bar PSI », « L/min en GPM », « cSt en SUS » sont très
  recherchées. Vérifier son indexation dans Google Search Console une semaine
  après la mise en ligne.
