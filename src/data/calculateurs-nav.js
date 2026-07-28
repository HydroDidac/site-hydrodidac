// Navigation de la page des calculateurs : le sommaire (groupes et libellés) et
// les liens de proximité entre calculateurs.
//
// C'est la SEULE source de vérité pour les libellés : le sommaire latéral, les
// blocs « Voir aussi » en bas de chaque carte et le filtrage par calculateur
// lisent tous ce fichier. Ajouter un calculateur = ajouter la section dans
// `calculateurs.astro`, son entrée ici dans `sommaire`, et ses liens dans
// `liens`.

export const sommaire = [
  {
    titre: "🛠️ Pompe & puissance",
    items: [
      { id: "calc-puissance", label: "Puissance hydraulique" },
      { id: "calc-debit", label: "Débit d'une pompe" },
      { id: "calc-couple", label: "Couple sur l'arbre" },
      { id: "calc-vitesse-moteur", label: "Vitesse d'un moteur hydraulique" },
    ],
  },
  {
    titre: "🔧 Vérin",
    items: [
      { id: "calc-force", label: "Force d'un vérin" },
      { id: "calc-vitesse-verin", label: "Vitesse d'un vérin" },
      { id: "calc-temps-verin", label: "Temps de course d'un vérin" },
    ],
  },
  {
    titre: "〰️ Conduites & écoulement",
    items: [
      { id: "calc-vitesse-conduite", label: "Vitesse du fluide en conduite" },
      { id: "calc-reynolds", label: "Nombre de Reynolds" },
      { id: "calc-diametre", label: "Diamètre de conduite conseillé" },
      { id: "calc-pertes", label: "Pertes de charge en conduite" },
    ],
  },
  {
    titre: "🎯 Gicleurs & étranglements",
    items: [
      { id: "calc-gicleur", label: "Diamètre d'un gicleur" },
      { id: "calc-debit-orifice", label: "Débit à travers un orifice" },
    ],
  },
  {
    titre: "🛢️ Fluide hydraulique",
    items: [{ id: "calc-viscosite", label: "Viscosité selon la température" }],
  },
  {
    titre: "🌡️ Thermique",
    items: [
      { id: "calc-bilan-thermique", label: "Bilan thermique et échangeur" },
      { id: "calc-echauffement", label: "Échauffement et puissance dissipée" },
    ],
  },
  {
    titre: "🔋 Stockage d'énergie",
    items: [{ id: "calc-accu", label: "Accumulateur : volume utile" }],
  },
];

/**
 * Liens de proximité : pour chaque calculateur, ceux sur lesquels on enchaîne
 * naturellement — soit parce qu'ils fournissent une donnée d'entrée, soit
 * parce qu'ils exploitent le résultat. Affichés en bas de chaque carte sous
 * « Voir aussi », pour naviguer sans repasser par le sommaire.
 */
export const liens = {
  // Pompe & puissance
  "calc-puissance": ["calc-debit", "calc-couple", "calc-bilan-thermique"],
  "calc-debit": ["calc-puissance", "calc-couple", "calc-vitesse-conduite"],
  "calc-couple": ["calc-debit", "calc-puissance", "calc-vitesse-moteur"],
  "calc-vitesse-moteur": ["calc-couple", "calc-debit", "calc-puissance"],
  // Vérin — les trois grandeurs d'un même vérin se calculent ensemble
  "calc-force": ["calc-vitesse-verin", "calc-temps-verin", "calc-puissance"],
  "calc-vitesse-verin": ["calc-force", "calc-temps-verin", "calc-debit"],
  "calc-temps-verin": ["calc-vitesse-verin", "calc-force", "calc-debit"],
  // Conduites — dimensionner, puis vérifier le régime et les pertes
  "calc-vitesse-conduite": ["calc-diametre", "calc-pertes", "calc-reynolds"],
  "calc-reynolds": ["calc-vitesse-conduite", "calc-viscosite", "calc-pertes"],
  "calc-diametre": ["calc-vitesse-conduite", "calc-pertes", "calc-reynolds"],
  "calc-pertes": ["calc-vitesse-conduite", "calc-diametre", "calc-bilan-thermique"],
  // Gicleurs — le calcul direct, son inverse, et ce dont ils dépendent
  "calc-gicleur": ["calc-debit-orifice", "calc-viscosite", "calc-reynolds"],
  "calc-debit-orifice": ["calc-gicleur", "calc-viscosite", "calc-reynolds"],
  // Fluide — la viscosité conditionne régime d'écoulement et gicleurs
  "calc-viscosite": ["calc-reynolds", "calc-gicleur", "calc-bilan-thermique"],
  // Thermique — le bilan global, le laminage local, et l'effet sur l'huile
  "calc-bilan-thermique": ["calc-echauffement", "calc-pertes", "calc-viscosite"],
  "calc-echauffement": ["calc-bilan-thermique", "calc-pertes", "calc-viscosite"],
  // Stockage
  "calc-accu": ["calc-debit", "calc-temps-verin", "calc-puissance"],
};

/**
 * Fiches didactiques à lire à côté de chaque calculateur. C'est le pont entre
 * les deux moitiés du site : le calculateur donne le chiffre, la fiche explique
 * le phénomène. Codes des fiches réellement publiées uniquement — un code
 * absent du site est ignoré silencieusement à l'affichage.
 */
export const fichesLiees = {
  "calc-puissance": ["F005"],
  "calc-debit": ["F014", "F015"],
  "calc-couple": ["F014", "F015"],
  "calc-vitesse-moteur": ["F014"],
  "calc-force": ["F003", "F002"],
  "calc-vitesse-verin": ["F003"],
  "calc-temps-verin": ["F003"],
  "calc-vitesse-conduite": ["F006", "F004"],
  "calc-reynolds": ["F006", "F004"],
  "calc-diametre": ["F006"],
  "calc-pertes": ["F006", "F004"],
  "calc-gicleur": ["F006"],
  "calc-debit-orifice": ["F006"],
  "calc-viscosite": ["F019"],
  "calc-bilan-thermique": ["F006", "F015"],
  "calc-echauffement": ["F001", "F006"],
  "calc-accu": ["F007"],
};

/**
 * Champs qui désignent la MÊME grandeur physique d'un calculateur à l'autre.
 * Quand la liaison est active, saisir le débit une fois le reporte partout —
 * on étudie en général un seul circuit à la fois.
 *
 * Ne regrouper que des grandeurs réellement identiques : le « débit visé » d'un
 * gicleur ou le « débit laminé » d'un limiteur ne sont pas le débit de la pompe,
 * et la pression de service n'est pas une différence de pression.
 */
export const grandeursLiees = {
  debit: ["pu-q", "vv-q", "vc-q", "tv-q", "di-q", "pe-q", "mo-q", "bt-q"],
  pression: ["pu-p", "fo-p", "bt-p"],
  diametrePiston: ["fo-d", "vv-d", "tv-d"],
  diametreTige: ["fo-t", "vv-t", "tv-t"],
  diametreConduite: ["vc-d", "re-d", "pe-d"],
  viscosite: ["re-nu", "pe-nu", "or-nu"],
  masseVolumique: ["pe-rho", "or-rho"],
  volumeReservoir: ["bt-v", "ec-v"],
  temperatureAmbiante: ["bt-tamb", "ec-ta"],
  cylindreePompe: ["de-cyl", "co-cyl"],
};

/**
 * Exemple concret par calculateur : partir d'un cas réel est plus parlant qu'un
 * formulaire vide. Les exemples de vérin (force, vitesse, temps de course)
 * décrivent volontairement le MÊME vérin, pour qu'on suive un cas d'un
 * calculateur à l'autre.
 */
export const exemples = {
  "calc-puissance": {
    titre: "Groupe de presse d'atelier",
    commentaire: "Groupe standard : 60 L/min sous 200 bar, soit 20 kW transmis au fluide.",
    valeurs: { "pu-q": 60, "pu-p": 200 },
  },
  "calc-debit": {
    titre: "Pompe à engrenages sur moteur 4 pôles",
    commentaire: "Cylindrée 45 cm³/tr entraînée à 1450 tr/min, pompe déjà rodée (η 92 %).",
    valeurs: { "de-cyl": 45, "de-n": 1450, "de-rv": 92 },
  },
  "calc-couple": {
    titre: "Moteur de treuil",
    commentaire: "Grosse cylindrée sous 250 bar : le couple demandé à l'arbre est important.",
    valeurs: { "co-cyl": 400, "co-dp": 250 },
  },
  "calc-vitesse-moteur": {
    titre: "Enrouleur lent",
    commentaire: "Forte cylindrée alimentée à 40 L/min : quelques dizaines de tours par minute.",
    valeurs: { "mo-q": 40, "mo-cyl": 400, "mo-rv": 94 },
  },
  "calc-force": {
    titre: "Vérin de presse Ø100 / tige Ø56",
    commentaire: "Vérin de presse sous 250 bar — même vérin que les deux exemples suivants.",
    valeurs: { "fo-d": 100, "fo-t": 56, "fo-p": 250 },
  },
  "calc-vitesse-verin": {
    titre: "Le même vérin, alimenté à 40 L/min",
    commentaire: "Vérin Ø100/56 : la tige rentre nettement plus vite qu'elle ne sort.",
    valeurs: { "vv-q": 40, "vv-d": 100, "vv-t": 56 },
  },
  "calc-temps-verin": {
    titre: "Le même vérin, course 600 mm",
    commentaire: "Vérin Ø100/56 à 40 L/min sur 600 mm de course.",
    valeurs: { "tv-c": 600, "tv-d": 100, "tv-t": 56, "tv-q": 40 },
  },
  "calc-vitesse-conduite": {
    titre: "Ligne de pression en tube Ø20",
    commentaire: "60 L/min dans un tube de 20 mm intérieur : on vérifie qu'on reste dans la plage.",
    valeurs: { "vc-q": 60, "vc-d": 20, "vc-ligne": "pression" },
  },
  "calc-reynolds": {
    titre: "Huile chaude en ligne de pression",
    commentaire: "5 m/s dans un tube de 20 mm, huile à 25 cSt (soit une VG 46 vers 55 °C).",
    valeurs: { "re-v": 5, "re-d": 20, "re-nu": 25 },
  },
  "calc-diametre": {
    titre: "Aspiration d'une pompe 90 L/min",
    commentaire: "L'aspiration est la ligne la plus critique : vitesse limitée à 1,2 m/s.",
    valeurs: { "di-q": 90, "di-ligne": "1.2" },
  },
  "calc-pertes": {
    titre: "6 m de tube Ø20 en ligne de pression",
    commentaire: "Trajet groupe → vérin, huile chaude à 25 cSt.",
    valeurs: { "pe-q": 60, "pe-d": 20, "pe-l": 6, "pe-nu": 25, "pe-rho": 865 },
  },
  "calc-gicleur": {
    titre: "Gicleur de temporisation 4 L/min",
    commentaire: "Petit débit de pilotage sous 60 bar, huile minérale standard à 45 °C.",
    valeurs: {
      "gi-q": 4,
      "gi-dp": 60,
      "gi-cd": "0.61",
      "gi-filtre-marque": "Standard",
      "gi-filtre-type": "HM",
      "gi-filtre-vg": "46",
      "gi-t": 45,
    },
  },
  "calc-debit-orifice": {
    titre: "Contrôle d'un gicleur Ø0,8 en place",
    commentaire: "Diagnostic : voilà le débit attendu à travers un perçage de 0,8 mm sous 150 bar.",
    valeurs: { "or-d": 0.8, "or-dp": 150, "or-cd": "0.61", "or-nu": 25, "or-rho": 865 },
  },
  "calc-viscosite": {
    titre: "Huile HV 46 à 70 °C",
    commentaire: "Circuit qui a chauffé : on vérifie qu'il reste assez de film d'huile.",
    valeurs: {
      "vi-filtre-marque": "Standard",
      "vi-filtre-type": "HV",
      "vi-filtre-vg": "46",
      "vi-t": 70,
    },
  },
  "calc-bilan-thermique": {
    titre: "Groupe 20 kW en atelier chaud",
    commentaire: "Rendement global 82 %, réservoir 250 L, ambiante 30 °C, cible 55 °C.",
    valeurs: {
      "bt-mode": "rendement",
      "bt-q": 60,
      "bt-p": 200,
      "bt-eta": 82,
      "bt-v": 250,
      "bt-k": "12",
      "bt-tamb": 30,
      "bt-tcible": 55,
    },
  },
  "calc-echauffement": {
    titre: "Limiteur qui décharge en permanence",
    commentaire: "15 L/min laminés sous 120 bar : le cas typique de l'huile qui chauffe sans raison apparente.",
    valeurs: { "ec-q": 15, "ec-dp": 120, "ec-v": 160, "ec-k": "12", "ec-ta": 30 },
  },
  "calc-accu": {
    titre: "Accumulateur de sécurité 20 L",
    commentaire: "Gonflage 90 bar pour un service entre 100 et 160 bar.",
    valeurs: { "ac-v0": 20, "ac-p0": 90, "ac-pmin": 100, "ac-pmax": 160 },
  },
};

const libelles = Object.fromEntries(
  sommaire.flatMap((groupe) => groupe.items.map((item) => [item.id, item.label]))
);

/** Libellé affiché d'un calculateur, ou undefined s'il n'existe pas (lien mort). */
export const libelleCalculateur = (id) => libelles[id];

/** Tous les calculateurs à plat : utilisé par la recherche globale du site. */
export const tousLesCalculateurs = sommaire.flatMap((groupe) =>
  groupe.items.map((item) => ({ ...item, groupe: groupe.titre }))
);

/** Inverse de `fichesLiees` : pour une fiche, les calculateurs qui la concernent. */
export const calculateursPourFiche = (code) =>
  Object.entries(fichesLiees)
    .filter(([, codes]) => codes.includes(code))
    .map(([id]) => ({ id, label: libelles[id] }))
    .filter((c) => c.label);
