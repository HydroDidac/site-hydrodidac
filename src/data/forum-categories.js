// Catégories du forum HydroDidac.
//
// Chaque catégorie devient une page (/forum/<slug>) et, grâce au mode
// "pathname" de giscus, obtient automatiquement son propre fil de discussion
// GitHub — aucune configuration supplémentaire n'est nécessaire côté GitHub
// pour ajouter une catégorie : il suffit d'ajouter une entrée ici.
//
// Volontairement peu nombreuses : un forum qui démarre avec trop de
// catégories donne une impression de vide (chacune sans message). Mieux vaut
// en ajouter plus tard, quand le trafic le justifie.

export const categoriesForum = [
  {
    slug: "composants",
    icone: "⚙️",
    titre: "Composants & matériel",
    resume:
      "Pompes, vérins, distributeurs, moteurs, accumulateurs : fonctionnement, choix, comparaison de technologies.",
    exemples: [
      "Pompe à palettes ou à pistons pour mon application ?",
      "Différence entre un distributeur à centre ouvert et centre fermé",
      "Retour d'expérience sur une marque de vérins",
    ],
  },
  {
    slug: "fluides-filtration",
    icone: "🛢️",
    titre: "Fluides & filtration",
    resume:
      "Huiles, viscosité, indices VI, contamination, filtres, analyses d'huile et changements de fluide.",
    exemples: [
      "Passer d'une HM 46 à une HV 46 : quels impacts ?",
      "Quel seuil de filtration pour une servovalve ?",
      "Interpréter un rapport d'analyse d'huile",
    ],
  },
  {
    slug: "depannage",
    icone: "🔧",
    titre: "Dépannage & diagnostic",
    resume:
      "Pannes, symptômes, méthodes de diagnostic et retours d'expérience terrain. Le cœur du partage entre praticiens.",
    exemples: [
      "Vérin qui broute en fin de course : par où commencer ?",
      "Bruit de cavitation à l'aspiration après un changement d'huile",
      "Surchauffe du circuit sans cause évidente",
    ],
  },
  {
    slug: "dimensionnement",
    icone: "📐",
    titre: "Dimensionnement & calculs",
    resume:
      "Aide au calcul, choix de composants, vérification d'un dimensionnement, utilisation des calculateurs du site.",
    exemples: [
      "Vérifier le dimensionnement de ma centrale",
      "Quel diamètre de conduite pour limiter les pertes de charge ?",
      "Calcul du volume utile d'un accumulateur",
    ],
  },
  {
    slug: "securite-normes",
    icone: "⚠️",
    titre: "Sécurité & réglementation",
    resume:
      "Bonnes pratiques, consignation, normes et directives applicables aux installations hydrauliques.",
    exemples: [
      "Procédure de consignation avant intervention",
      "Sécuriser un accumulateur avant démontage",
      "Normes applicables aux flexibles haute pression",
    ],
  },
  {
    slug: "site-hydrodidac",
    icone: "💡",
    titre: "Le site HydroDidac",
    resume:
      "Suggestions d'amélioration, erreurs relevées dans une fiche, demandes de nouveaux sujets ou calculateurs.",
    exemples: [
      "Proposer un sujet de fiche",
      "Signaler une imprécision technique",
      "Idée de nouveau calculateur",
    ],
  },
];
