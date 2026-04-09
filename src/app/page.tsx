"use client";

import { motion } from "framer-motion";

const features = [
  { title: "MCQ Practice", desc: "Reading comprehension and rhetorical analysis multiple-choice questions." },
  { title: "Essay Practice", desc: "Synthesis, rhetorical analysis, and argument essay prompts with rubrics." },
  { title: "Full-Length Mocks", desc: "Timed practice exams mirroring the real AP Lang format." },
  { title: "Performance Analytics", desc: "Track your score trajectory across MCQ and essay sections." },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AP English Language Prep
      </motion.h1>
      <p className="mt-4 text-lg text-center max-w-xl opacity-70">
        Master AP Lang with MCQ practice, essay prompts, and detailed
        rubric-based feedback — powered by Koydo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 max-w-3xl w-full">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-1 text-sm opacity-60">{f.desc}</p>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-xs text-center opacity-40 max-w-lg">
        AP® and Advanced Placement® are registered trademarks of the College Board,
        which was not involved in the production of, and does not endorse, this product.
      </footer>
    </main>
  );
}
