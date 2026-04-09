export const apEnglishLangConfig = {
  examId: "EXAM176",
  slug: "ap-english-lang",
  name: "AP English Language and Composition",
  fullName: "Advanced Placement English Language and Composition",
  category: "AP subject exam",
  country: "United States",
  region: "North America",
  languages: ["en"],
  primaryLanguage: "en",
  sections: ["Reading (Rhetorical Analysis MCQ)", "Writing (Synthesis Essay, Rhetorical Analysis Essay, Argument Essay)"],
  scoringModel: "1-5",
  examFormat: "Paper/digital mix",
  questionTypes: ["MCQ", "Essay"],
  tieredStructure: "Linear",
  theme: {
    accent: "#4F46E5",
    accentDark: "#4338CA",
  },
  ipRisk: "High" as const,
  ipDisclaimer:
    "AP\u00ae and Advanced Placement\u00ae are registered trademarks of the College Board, which was not involved in the production of, and does not endorse, this product.",
  freemiumGate: {
    freeQuestionsPerDay: 10,
    requiresAuthForFree: false,
  },
  contentReuseCluster: "english_language",
  uiEngineProfile: "objective_plus_essay",
};
