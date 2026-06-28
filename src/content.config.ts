import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const fiches = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/fiches" }),
  schema: z.object({
    code: z.string(), // ex. "F012"
    titre: z.string(),
    niveau: z.enum(["debutant", "intermediaire", "avance"]),
    module: z.string(), // ex. "Régulation de pression"
    resume: z.string(),
    tempsLecture: z.number().optional(), // minutes
    ficheLiees: z.array(z.string()).default([]), // codes des fiches liées
    datePublication: z.coerce.date(),
    refPoleB: z.string().optional(), // numéro de la fiche source au Pôle B, ex. "04.01"
  }),
});

export const collections = { fiches };
