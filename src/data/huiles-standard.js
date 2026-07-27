// Huiles « standard » — entrées génériques proposées sous la marque « Standard »
// à l'utilisateur qui ne connaît pas la marque exacte de l'huile en poste, mais
// qui sait de quel type elle est (minérale, haut VI, biodégradable…) et quel
// grade ISO il utilise.
//
// Ces valeurs ne sont PAS inventées. Pour chaque couple famille + grade ISO, on
// retient l'huile réelle du catalogue la plus proche des viscosités médianes de
// ce groupe : les trois valeurs (40 °C, 100 °C, VI) restent donc celles d'une
// vraie fiche technique, donc physiquement cohérentes entre elles, tout en
// représentant le milieu du marché. Le calcul de viscosité–température garde
// ainsi la même exactitude qu'avec une huile nommée.

import { huiles } from "./huiles-hydrauliques.js";

/** Nombre minimum d'huiles réelles pour qu'un groupe donne une « standard » représentative. */
const MINIMUM_PAR_GROUPE = 3;

const NOMS_FAMILLE = {
  HM: "Huile minérale standard",
  HV: "Huile haut indice de viscosité standard",
  HEES: "Huile biodégradable standard",
  "Turbine/UTTO": "Huile turbine / UTTO standard",
};

const mediane = (valeurs) => {
  const triees = [...valeurs].sort((a, b) => a - b);
  const milieu = Math.floor(triees.length / 2);
  return triees.length % 2 ? triees[milieu] : (triees[milieu - 1] + triees[milieu]) / 2;
};

/**
 * Huile la plus proche du centre du groupe. L'écart est mesuré en relatif sur
 * les deux viscosités, sinon la valeur à 40 °C (bien plus grande) écraserait
 * complètement celle à 100 °C dans la comparaison.
 */
const representative = (groupe) => {
  const m40 = mediane(groupe.map((h) => h.n40));
  const m100 = mediane(groupe.map((h) => h.n100));
  return groupe.reduce((meilleure, huile) => {
    const ecart =
      Math.abs(huile.n40 - m40) / m40 + Math.abs(huile.n100 - m100) / m100;
    return ecart < meilleure.ecart ? { huile, ecart } : meilleure;
  }, { huile: groupe[0], ecart: Infinity }).huile;
};

// Regroupement famille + grade ISO, en ne gardant que les grades numériques :
// les entrées atypiques (« 46-68 », « 10W-30 », « — ») ne se prêtent pas à une
// huile générique.
const groupes = new Map();
for (const huile of huiles) {
  if (!/^\d+$/.test(huile.vg) || !NOMS_FAMILLE[huile.fam]) continue;
  const cle = `${huile.fam}|${huile.vg}`;
  if (!groupes.has(cle)) groupes.set(cle, []);
  groupes.get(cle).push(huile);
}

export const huilesStandard = [...groupes.entries()]
  .filter(([, groupe]) => groupe.length >= MINIMUM_PAR_GROUPE)
  .map(([cle, groupe]) => {
    const [fam, vg] = cle.split("|");
    const modele = representative(groupe);
    return {
      marque: "Standard",
      nom: `${NOMS_FAMILLE[fam]} ${vg} cSt`,
      vg,
      n40: modele.n40,
      n100: modele.n100,
      vi: modele.vi,
      fam,
      standard: true,
      // Nombre d'huiles réelles derrière cette moyenne — affiché à l'utilisateur.
      echantillon: groupe.length,
    };
  })
  .sort((a, b) =>
    a.fam === b.fam ? Number(a.vg) - Number(b.vg) : a.fam.localeCompare(b.fam)
  );

/** Catalogue complet : les huiles génériques d'abord, puis toutes les marques. */
export const catalogue = [...huilesStandard, ...huiles];

/** Libellé affiché dans la liste déroulante — le grade est déjà dans le nom d'une huile standard. */
export const libelleHuile = (huile) =>
  huile.standard
    ? `${huile.nom} (VI ${huile.vi})`
    : `${huile.nom} (VG ${huile.vg} · VI ${huile.vi})`;
