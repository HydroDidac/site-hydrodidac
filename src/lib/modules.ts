// Liste des modules de fiches, dans l'ordre exact de l'INDEX du Pôle B
// (equipe-fiches-hydraulique/.claude/skills/fiches-didactiques/references/INDEX.md).
// À garder synchronisée si l'INDEX évolue.

export interface ModuleDef {
  numero: string;
  nom: string;
  slug: string;
}

export const MODULES: ModuleDef[] = [
  { numero: "01", nom: "Notions fondamentales", slug: "notions-fondamentales" },
  { numero: "02", nom: "Pompes hydrauliques", slug: "pompes-hydrauliques" },
  { numero: "03", nom: "Distributeurs et valves directionnelles", slug: "distributeurs-et-valves-directionnelles" },
  { numero: "04", nom: "Vérins hydrauliques", slug: "verins-hydrauliques" },
  { numero: "05", nom: "Moteurs hydrauliques", slug: "moteurs-hydrauliques" },
  { numero: "06", nom: "Régulation de pression", slug: "regulation-de-pression" },
  { numero: "07", nom: "Régulation de débit", slug: "regulation-de-debit" },
  { numero: "08", nom: "Clapets et valves spéciales", slug: "clapets-et-valves-speciales" },
  { numero: "09", nom: "Accumulateurs hydrauliques", slug: "accumulateurs-hydrauliques" },
  { numero: "10", nom: "Filtration et qualité du fluide", slug: "filtration-et-qualite-du-fluide" },
  { numero: "11", nom: "Échangeurs thermiques et réservoirs", slug: "echangeurs-thermiques-et-reservoirs" },
  { numero: "12", nom: "Circuits spéciaux et architectures", slug: "circuits-speciaux-et-architectures" },
  { numero: "13", nom: "Instrumentation et mesure", slug: "instrumentation-et-mesure" },
  { numero: "14", nom: "Fluides hydrauliques", slug: "fluides-hydrauliques" },
  { numero: "15", nom: "Maintenance et diagnostic", slug: "maintenance-et-diagnostic" },
];
