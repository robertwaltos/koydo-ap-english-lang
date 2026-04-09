import { describe, it, expect } from "vitest";
import { apEnglishLangConfig } from "@/lib/ap-english-lang/config";

describe("apEnglishLangConfig", () => {
  it("has correct examId", () => {
    expect(apEnglishLangConfig.examId).toBe("EXAM176");
  });

  it("has correct slug", () => {
    expect(apEnglishLangConfig.slug).toBe("ap-english-lang");
  });

  it("has at least one section", () => {
    expect(apEnglishLangConfig.sections.length).toBeGreaterThan(0);
  });

  it("has theme colors", () => {
    expect(apEnglishLangConfig.theme.accent).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(apEnglishLangConfig.theme.accentDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it("has IP disclaimer", () => {
    expect(apEnglishLangConfig.ipDisclaimer.length).toBeGreaterThan(0);
  });

  it("has freemium gate config", () => {
    expect(apEnglishLangConfig.freemiumGate.freeQuestionsPerDay).toBe(10);
  });
});
