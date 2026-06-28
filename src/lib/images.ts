import fs from "node:fs";
import path from "node:path";

const FICHES_DIR = path.resolve(process.cwd(), "public/assets/fiches");

interface ImageMeta {
  url: string;
  legende: string;
}

interface FicheImages {
  cover: ImageMeta | null;
  schemas: ImageMeta[];
  illustrations: ImageMeta[];
}

function parseCsv(content: string): Record<string, Record<string, string>> {
  const lines = content.trim().split(/\r?\n/).slice(1);
  const parsed: Record<string, Record<string, string>> = {};

  for (const line of lines) {
    if (!line.trim()) continue;
    const match = line.match(/^([^,]+),([^,]+),"?([^"]*)"?$/);
    if (!match) continue;
    const [, code, fichier, legende] = match;
    parsed[code] ??= {};
    parsed[code][fichier] = legende;
  }
  return parsed;
}

/**
 * Lit public/assets/fiches/images.csv et liste les fichiers présents dans
 * public/assets/fiches/<code>/ pour construire automatiquement le bloc image
 * d'une fiche, selon la convention de nommage :
 * *-cover.* → couverture, *-schema*.* → schéma(s), *-illu-*.* → illustrations.
 */
export function getImagesForFiche(code: string): FicheImages {
  const empty: FicheImages = { cover: null, schemas: [], illustrations: [] };

  const folder = path.join(FICHES_DIR, code);
  if (!fs.existsSync(folder)) return empty;

  const csvPath = path.join(FICHES_DIR, "images.csv");
  const legendes = fs.existsSync(csvPath)
    ? (parseCsv(fs.readFileSync(csvPath, "utf-8"))[code] ?? {})
    : {};

  const files = fs.readdirSync(folder).sort();
  const toMeta = (fichier: string): ImageMeta => ({
    url: `/assets/fiches/${code}/${fichier}`,
    legende: legendes[fichier] ?? "",
  });

  const cover = files.find((f) => f.includes("-cover"));
  const schemas = files.filter((f) => f.includes("-schema"));
  const illustrations = files.filter((f) => f.includes("-illu"));

  return {
    cover: cover ? toMeta(cover) : null,
    schemas: schemas.map(toMeta),
    illustrations: illustrations.map(toMeta),
  };
}
