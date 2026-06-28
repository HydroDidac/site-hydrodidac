import { toString } from "mdast-util-to-string";

// Repère automatiquement les sections "Formules ..." et "Sécurité ..." dans le
// Markdown des fiches (gabarit du Pôle B) et les enveloppe dans les encadrés
// stylés du site, SANS toucher au texte d'origine — la fiche source reste
// copiée mot pour mot, seul l'habillage visuel est ajouté autour.
const REGLES = [
  { motif: /formules/i, classe: "encadre-formules" },
  { motif: /s[ée]curit[ée]/i, classe: "encadre-securite" },
];

export default function remarkEncadres() {
  return (arbre) => {
    const enfants = arbre.children;
    const insertions = [];

    for (let i = 0; i < enfants.length; i++) {
      const noeud = enfants[i];
      if (noeud.type !== "heading") continue;

      const texte = toString(noeud);
      const regle = REGLES.find((r) => r.motif.test(texte));
      if (!regle) continue;

      const profondeur = noeud.depth;
      let j = i + 1;
      while (j < enfants.length && !(enfants[j].type === "heading" && enfants[j].depth <= profondeur)) {
        j++;
      }

      insertions.push({ debut: i, fin: j, classe: regle.classe });
    }

    for (let k = insertions.length - 1; k >= 0; k--) {
      const { debut, fin, classe } = insertions[k];
      enfants.splice(fin, 0, { type: "html", value: "</div>" });
      enfants.splice(debut, 0, { type: "html", value: `<div class="${classe}">` });
    }
  };
}
