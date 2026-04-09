const translations = {
  en: {
    appName: "AP English Language Prep",
    tagline: "Master AP Lang with MCQ practice and essay prompts.",
    startPractice: "Start Practice",
    viewPricing: "View Pricing",
    free: "Free",
    premium: "Premium",
    questionsRemaining: "questions remaining today",
    upgradePrompt: "Upgrade to Premium for unlimited access",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations.en[key];
}
