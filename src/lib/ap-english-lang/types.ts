export interface Question {
  id: string;
  section: string;
  passage?: string;
  text: string;
  options?: Option[];
  correctOptionId?: string;
  questionType: "MCQ" | "Essay";
  essayPrompt?: string;
  rubric?: string;
  explanation?: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
}

export interface Option {
  id: string;
  text: string;
}

export interface Attempt {
  questionId: string;
  selectedOptionId?: string;
  essayResponse?: string;
  isCorrect: boolean;
  score?: number;
  timeSpentMs: number;
  createdAt: string;
}

export interface UserEntitlement {
  tier: "free" | "premium";
  questionsUsedToday: number;
  maxFreePerDay: number;
  subscriptionExpiresAt?: string;
}
