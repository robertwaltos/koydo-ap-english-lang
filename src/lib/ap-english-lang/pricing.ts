export const apEnglishLangPricing = {
  currency: "USD",
  symbol: "$",
  free: {
    price: 0,
    label: "Free",
    features: ["10 questions per day", "Basic analytics", "Limited mock tests"],
  },
  premium: {
    price: 4.99,
    period: "month" as const,
    label: "Premium",
    features: ["Unlimited questions", "Full mock exams", "Essay rubric feedback", "Priority support"],
  },
};
