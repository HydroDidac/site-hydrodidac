import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";

// Construit la correspondance "numéro Pôle B" (ex: "04.01") -> "code site" (ex:
// "F003") en lisant le frontmatter de toutes les fiches. Permet de transformer
// automatiquement les mentions "fiche 04.01" du texte source (copié mot pour
// mot) en vrais liens cliquables, sans jamais modifier le texte lui-même.
function construireCorrespondance() {
  const dossier = path.resolve(process.cwd(), "src/content/fiches");
  const correspondance = {};

  if (!fs.existsSync(dossier)) return correspondance;

  for (const fichier of fs.readdirSync(dossier)) {
    if (!fichier.endsWith(".md") && !fichier.endsWith(".mdx")) continue;
    const contenu = fs.readFileSync(path.join(dossier, fichier), "utf-8");
    const codeMatch = contenu.match(/^code:\s*"?([^"\n]+)"?/m);
    const refMatch = contenu.match(/^refPoleB:\s*"?([^"\n]+)"?/m);
    if (codeMatch && refMatch) {
      correspondance[refMatch[1].trim()] = codeMatch[1].trim();
    }
  }

  return correspondance;
}

export default function remarkLiensFiches() {
  const correspondance = construireCorrespondance();
  const regex = /fiche (\d{2}\.\d{2})/g;

  return (arbre) => {
    visit(arbre, "text", (noeud, index, parent) => {
      if (!parent || index === null || index === undefined) return;
      if (!regex.test(noeud.value)) return;
      regex.lastIndex = 0;

      const nouveauxNoeuds = [];
      let dernierIndex = 0;
      let correspondanceTrouvee = false;
      let m;

      while ((m = regex.exec(noeud.value)) !== null) {
        const numero = m[1];
        const code = correspondance[numero];
        if (!code) continue; // pas encore de fiche publiée pour ce numéro : on laisse le texte tel quel

        correspondanceTrouvee = true;
        if (m.index > dernierIndex) {
          nouveauxNoeuds.push({ type: "text", value: noeud.value.slice(dernierIndex, m.index) });
        }
        nouveauxNoeuds.push({
          type: "link",
          url: `/fiches/${code.toLowerCase()}`,
          children: [{ type: "text", value: m[0] }],
        });
        dernierIndex = m.index + m[0].length;
      }

      if (!correspondanceTrouvee) return;

      if (dernierIndex < noeud.value.length) {
        nouveauxNoeuds.push({ type: "text", value: noeud.value.slice(dernierIndex) });
      }

      parent.children.splice(index, 1, ...nouveauxNoeuds);
      return ["skip", index + nouveauxNoeuds.length];
    });
  };
}
