// Navigation de la page des calculateurs : sommaire, liens de proximité,
// fiches associées, exemples pré-remplis et grandeurs partagées.
//
// C'est la SEULE source de vérité pour les libellés : le sommaire latéral, les
// pieds de carte (« Voir aussi », « Pour comprendre », exemples), le filtrage
// par calculateur et la recherche globale lisent tous ce fichier.
//
// Ajouter un calculateur = la section dans `calculateurs.astro`, la ligne
// `<LiensCalculateurs id="…" />` avant `</section>`, puis les entrées ici.

export const sommaire = [
  {
    titre: "🛠️ Pompe & puissance",
    items: [
      { id: "calc-puissance", label: "Puissance hydraulique" },
      { id: "calc-debit", label: "Débit d'une pompe" },
      { id: "calc-couple", label: "Couple sur l'arbre" },
    ],
  },
  {
    titre: "⚙️ Moteur",
    items: [
      { id: "calc-moteur-entrainement", label: "Puissance du moteur d'entraînement" },
      { id: "calc-moteur-electrique", label: "Caractéristiques du moteur électrique" },
      { id: "calc-vitesse-moteur", label: "Vitesse d'un moteur hydraulique" },
      { id: "calc-choix-moteur", label: "Choix d'un moteur hydraulique" },
    ],
  },
  {
    titre: "🔧 Vérin",
    items: [
      { id: "calc-force", label: "Force d'un vérin" },
      { id: "calc-vitesse-verin", label: "Vitesse d'un vérin" },
      { id: "calc-temps-verin", label: "Temps de course d'un vérin" },
      { id: "calc-flambage", label: "Flambage de la tige" },
      { id: "calc-rigidite", label: "Rigidité et fréquence propre" },
    ],
  },
  {
    titre: "〰️ Conduites & écoulement",
    items: [
      { id: "calc-vitesse-conduite", label: "Vitesse du fluide en conduite" },
      { id: "calc-reynolds", label: "Nombre de Reynolds" },
      { id: "calc-diametre", label: "Diamètre de conduite conseillé" },
      { id: "calc-pertes", label: "Pertes de charge en conduite" },
      { id: "calc-pertes-accessoires", label: "Pertes dans les accessoires" },
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
    titre: "🌡️ Réservoir & thermique",
    items: [
      { id: "calc-reservoir", label: "Dimensionnement du réservoir" },
      { id: "calc-bilan-thermique", label: "Bilan thermique et échangeur" },
      { id: "calc-echauffement", label: "Échauffement et puissance dissipée" },
      { id: "calc-thermoplongeur", label: "Puissance de thermoplongeur" },
    ],
  },
  {
    titre: "🔋 Stockage d'énergie",
    items: [{ id: "calc-accu", label: "Accumulateur" }],
  },
  {
    titre: "🔄 Unités",
    items: [{ id: "calc-conversions", label: "Conversions d'unités" }],
  },
];

/**
 * Liens de proximité : pour chaque calculateur, ceux sur lesquels on enchaîne
 * naturellement — soit parce qu'ils fournissent une donnée d'entrée, soit
 * parce qu'ils exploitent le résultat.
 */
export const liens = {
  // Pompe & puissance
  "calc-puissance": ["calc-debit", "calc-moteur-entrainement", "calc-bilan-thermique"],
  "calc-debit": ["calc-puissance", "calc-couple", "calc-vitesse-conduite"],
  "calc-couple": ["calc-debit", "calc-moteur-entrainement", "calc-vitesse-moteur"],
  // Moteur — de la puissance hydraulique au moteur réellement installé
  "calc-moteur-entrainement": ["calc-puissance", "calc-moteur-electrique", "calc-couple"],
  "calc-moteur-electrique": ["calc-moteur-entrainement", "calc-debit", "calc-couple"],
  "calc-vitesse-moteur": ["calc-choix-moteur", "calc-couple", "calc-debit"],
  "calc-choix-moteur": ["calc-vitesse-moteur", "calc-couple", "calc-puissance"],
  // Vérin — les grandeurs d'un même vérin se calculent ensemble
  "calc-force": ["calc-vitesse-verin", "calc-temps-verin", "calc-flambage"],
  "calc-vitesse-verin": ["calc-force", "calc-temps-verin", "calc-debit"],
  "calc-temps-verin": ["calc-vitesse-verin", "calc-force", "calc-debit"],
  "calc-flambage": ["calc-force", "calc-rigidite", "calc-vitesse-verin"],
  "calc-rigidite": ["calc-flambage", "calc-force", "calc-temps-verin"],
  // Conduites — dimensionner, puis vérifier régime, pertes et singularités
  "calc-vitesse-conduite": ["calc-diametre", "calc-pertes", "calc-reynolds"],
  "calc-reynolds": ["calc-vitesse-conduite", "calc-viscosite", "calc-pertes"],
  "calc-diametre": ["calc-vitesse-conduite", "calc-pertes", "calc-reynolds"],
  "calc-pertes": ["calc-pertes-accessoires", "calc-diametre", "calc-bilan-thermique"],
  "calc-pertes-accessoires": ["calc-pertes", "calc-vitesse-conduite", "calc-bilan-thermique"],
  // Gicleurs — le calcul direct, son inverse, et ce dont ils dépendent
  "calc-gicleur": ["calc-debit-orifice", "calc-viscosite", "calc-reynolds"],
  "calc-debit-orifice": ["calc-gicleur", "calc-viscosite", "calc-reynolds"],
  // Fluide
  "calc-viscosite": ["calc-reynolds", "calc-gicleur", "calc-thermoplongeur"],
  // Réservoir & thermique
  "calc-reservoir": ["calc-bilan-thermique", "calc-debit", "calc-thermoplongeur"],
  "calc-bilan-thermique": ["calc-echauffement", "calc-reservoir", "calc-pertes"],
  "calc-echauffement": ["calc-bilan-thermique", "calc-pertes", "calc-viscosite"],
  "calc-thermoplongeur": ["calc-viscosite", "calc-reservoir", "calc-bilan-thermique"],
  // Stockage
  "calc-accu": ["calc-debit", "calc-temps-verin", "calc-puissance"],
  // Unités
  "calc-conversions": ["calc-puissance", "calc-debit", "calc-viscosite"],
};

/**
 * Fiches didactiques à lire à côté de chaque calculateur : le calculateur donne
 * le chiffre, la fiche explique le phénomène. Une fiche non publiée est ignorée
 * silencieusement à l'affichage — jamais de lien mort.
 */
export const fichesLiees = {
  "calc-puissance": ["F005"],
  "calc-debit": ["F014", "F015"],
  "calc-couple": ["F014", "F015"],
  "calc-moteur-entrainement": ["F005", "F015"],
  "calc-moteur-electrique": ["F005"],
  "calc-vitesse-moteur": ["F014"],
  "calc-choix-moteur": ["F020", "F014"],
  "calc-force": ["F003", "F002"],
  "calc-vitesse-verin": ["F003"],
  "calc-temps-verin": ["F003"],
  "calc-flambage": ["F003"],
  "calc-rigidite": ["F007"],
  "calc-vitesse-conduite": ["F006", "F004"],
  "calc-reynolds": ["F006", "F004"],
  "calc-diametre": ["F006"],
  "calc-pertes": ["F006", "F004"],
  "calc-pertes-accessoires": ["F006"],
  "calc-gicleur": ["F006"],
  "calc-debit-orifice": ["F006"],
  "calc-viscosite": ["F019"],
  "calc-reservoir": ["F019"],
  "calc-bilan-thermique": ["F006", "F015"],
  "calc-echauffement": ["F001", "F006"],
  "calc-thermoplongeur": ["F019"],
  "calc-accu": ["F007"],
};

/**
 * Champs qui désignent la MÊME grandeur physique d'un calculateur à l'autre.
 * Quand la liaison est active, saisir le débit une fois le reporte partout.
 *
 * Ne regrouper que des grandeurs réellement identiques : le « débit visé » d'un
 * gicleur ou le « débit laminé » d'un limiteur ne sont pas le débit de la pompe,
 * et la pression de service n'est pas une différence de pression.
 */
export const grandeursLiees = {
  debit: ["pu-q", "vv-q", "vc-q", "tv-q", "di-q", "pe-q", "pa-q", "mo-q", "bt-q", "me-q", "rs-q"],
  pression: ["pu-p", "fo-p", "bt-p", "me-p"],
  diametrePiston: ["fo-d", "vv-d", "tv-d", "rg-d"],
  diametreTige: ["fo-t", "vv-t", "tv-t", "fl-d"],
  diametreConduite: ["vc-d", "re-d", "pe-d", "pa-d"],
  viscosite: ["re-nu", "pe-nu", "or-nu"],
  masseVolumique: ["pe-rho", "or-rho", "pa-rho"],
  volumeReservoir: ["bt-v", "ec-v", "tp-v"],
  temperatureAmbiante: ["bt-tamb", "ec-ta", "tp-tamb"],
  cylindreePompe: ["de-cyl", "co-cyl"],
};

/**
 * Exemple concret par calculateur : partir d'un cas réel est plus parlant qu'un
 * formulaire vide. Les exemples de vérin décrivent volontairement le MÊME
 * vérin, pour suivre un cas d'un calculateur à l'autre.
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
  "calc-moteur-entrainement": {
    titre: "Groupe 20 kW hydrauliques",
    commentaire: "60 L/min sous 200 bar avec un rendement global de 80 % : il faut installer 25 kW.",
    valeurs: { "me-q": 60, "me-p": 200, "me-eta": 80, "me-n": 1500 },
  },
  "calc-moteur-electrique": {
    titre: "Moteur asynchrone 22 kW, 4 pôles",
    commentaire: "Triphasé 400 V, cos φ 0,85 : environ 40 A en régime, six fois plus au démarrage direct.",
    valeurs: { "el-p": 22, "el-poles": "4", "el-f": 50, "el-g": 3, "el-u": 400, "el-cos": 0.85, "el-eta": 92 },
  },
  "calc-vitesse-moteur": {
    titre: "Enrouleur lent",
    commentaire: "Forte cylindrée alimentée à 40 L/min : quelques dizaines de tours par minute.",
    valeurs: { "mo-q": 40, "mo-cyl": 400, "mo-rv": 94 },
  },
  "calc-choix-moteur": {
    titre: "Entraînement de tambour, 200 Nm à 300 tr/min",
    commentaire: "Couple moyen à vitesse modérée sous 200 bar : domaine des moteurs à pistons.",
    valeurs: { "cm-c": 200, "cm-n": 300, "cm-dp": 200, "cm-rm": 92, "cm-rv": 95 },
  },
  "calc-force": {
    titre: "Vérin de presse Ø100 / tige Ø56",
    commentaire: "Vérin de presse sous 250 bar — même vérin que les exemples suivants.",
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
  "calc-flambage": {
    titre: "Tige Ø56 sortie de 900 mm, montage défavorable",
    commentaire: "Vérin poussant en encastré-libre : c'est le cas qui flambe le plus facilement.",
    valeurs: { "fl-d": 56, "fl-l": 900, "fl-mu": "2", "fl-s": 3.5, "fl-f": 196 },
  },
  "calc-rigidite": {
    titre: "Colonne d'huile de 400 mm sur vérin Ø100",
    commentaire: "Masse entraînée de 800 kg : la fréquence propre limite la bande passante d'un asservissement.",
    valeurs: { "rg-d": 100, "rg-l": 400, "rg-m": 800, "rg-beta": 1400 },
  },
  "calc-vitesse-conduite": {
    titre: "Ligne de pression en tube Ø20",
    commentaire: "60 L/min dans un tube de 20 mm intérieur : on vérifie qu'on reste dans la plage.",
    valeurs: { "vc-q": 60, "vc-d": 20, "vc-ligne": "pression" },
  },
  "calc-reynolds": {
    titre: "Huile chaude en ligne de pression",
    commentaire: "5 m/s dans un tube de 20 mm, huile à 25 cSt (une VG 46 vers 55 °C).",
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
  "calc-pertes-accessoires": {
    titre: "Trajet avec 4 coudes, 2 raccords et un distributeur",
    commentaire: "Les singularités d'un trajet classique, à ajouter à la perte en conduite droite.",
    valeurs: {
      "pa-q": 60, "pa-d": 20, "pa-rho": 865,
      "pa-coude90": 4, "pa-coude45": 0, "pa-te": 1, "pa-raccord": 2,
      "pa-reservoir": 1, "pa-autre-k": 2, "pa-autre-n": 1,
    },
  },
  "calc-gicleur": {
    titre: "Gicleur de temporisation 4 L/min",
    commentaire: "Petit débit de pilotage sous 60 bar, huile minérale standard à 45 °C.",
    valeurs: {
      "gi-q": 4, "gi-dp": 60, "gi-cd": "0.61",
      "gi-filtre-marque": "Standard", "gi-filtre-type": "HM", "gi-filtre-vg": "46",
      "gi-t": 45,
    },
  },
  "calc-debit-orifice": {
    titre: "Contrôle d'un gicleur Ø0,8 en place",
    commentaire: "Diagnostic : le débit attendu à travers un perçage de 0,8 mm sous 150 bar.",
    valeurs: { "or-d": 0.8, "or-dp": 150, "or-cd": "0.61", "or-nu": 25, "or-rho": 865 },
  },
  "calc-viscosite": {
    titre: "Huile HV 46 à 70 °C",
    commentaire: "Circuit qui a chauffé : on vérifie qu'il reste assez de film d'huile.",
    valeurs: {
      "vi-filtre-marque": "Standard", "vi-filtre-type": "HV", "vi-filtre-vg": "46",
      "vi-t": 70,
    },
  },
  "calc-reservoir": {
    titre: "Groupe 60 L/min sans refroidisseur",
    commentaire: "Sans échangeur, on prend le haut de la fourchette : le réservoir doit évacuer seul.",
    valeurs: { "rs-q": 60, "rs-k": "5" },
  },
  "calc-bilan-thermique": {
    titre: "Groupe 20 kW en atelier chaud",
    commentaire: "Rendement global 82 %, réservoir 250 L, ambiante 30 °C, cible 55 °C.",
    valeurs: {
      "bt-mode": "rendement", "bt-q": 60, "bt-p": 200, "bt-eta": 82,
      "bt-v": 250, "bt-k": "12", "bt-tamb": 30, "bt-tcible": 55,
    },
  },
  "calc-echauffement": {
    titre: "Limiteur qui décharge en permanence",
    commentaire: "15 L/min laminés sous 120 bar : le cas typique de l'huile qui chauffe sans raison apparente.",
    valeurs: { "ec-q": 15, "ec-dp": 120, "ec-v": 160, "ec-k": "12", "ec-ta": 30 },
  },
  "calc-thermoplongeur": {
    titre: "Réchauffage d'un réservoir 200 L en 3 h",
    commentaire: "Atelier non chauffé : monter l'huile de 10 à 40 °C avant de démarrer en charge.",
    valeurs: {
      "tp-v": 200, "tp-rho": 0.87, "tp-c": 1.9,
      "tp-tdep": 10, "tp-tcible": 40, "tp-duree": 3,
      "tp-tamb": 10, "tp-k": "12",
      "tp-type": "standard", "tp-d": 12, "tp-l": 500, "tp-n": 4,
    },
  },
  "calc-accu": {
    titre: "Accumulateur de sécurité 20 L",
    commentaire: "Gonflage 90 bar pour un service entre 100 et 160 bar.",
    valeurs: {
      "ac-inconnue": "dv", "ac-v0": 20, "ac-p0": 90, "ac-pmin": 100, "ac-pmax": 160,
    },
  },
  "calc-conversions": {
    titre: "Documentation américaine : 3000 psi",
    commentaire: "Une pression courante outre-Atlantique, ramenée en unités du système international.",
    valeurs: { "cv-bar": 206.84 },
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
