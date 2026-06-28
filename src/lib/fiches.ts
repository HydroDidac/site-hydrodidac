import { getCollection, type CollectionEntry } from "astro:content";

export interface GroupeFiche {
  code: string;
  slug: string;
  titre: string;
  module: string;
  resume: string;
  tempsLecture?: number;
  ficheLiees: string[];
  datePublication: Date;
  versions: CollectionEntry<"fiches">[];
}

const ORDRE_NIVEAU: Record<string, number> = { debutant: 0, intermediaire: 1, avance: 2 };

/** Regroupe les entrées de la collection par code de fiche (une fiche = un sujet,
 * avec une ou plusieurs versions : débutant, intermédiaire, avancé). */
export async function getGroupesFiches(): Promise<GroupeFiche[]> {
  const entries = await getCollection("fiches");
  const groupes = new Map<string, CollectionEntry<"fiches">[]>();

  for (const entry of entries) {
    const code = entry.data.code;
    const liste = groupes.get(code) ?? [];
    liste.push(entry);
    groupes.set(code, liste);
  }

  return Array.from(groupes.entries()).map(([code, versions]) => {
    versions.sort((a, b) => ORDRE_NIVEAU[a.data.niveau] - ORDRE_NIVEAU[b.data.niveau]);
    const principale = versions[0].data;
    return {
      code,
      slug: code.toLowerCase(),
      titre: principale.titre,
      module: principale.module,
      resume: principale.resume,
      tempsLecture: principale.tempsLecture,
      ficheLiees: principale.ficheLiees,
      datePublication: principale.datePublication,
      versions,
    };
  });
}
