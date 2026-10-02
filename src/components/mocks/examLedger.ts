import type { MCQ } from '@/types/exam';

export interface ExamLedger {
  score: number;
  total: number;
  attempted: number;
  accuracy: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
}

/**
 * Scores a mock paper: 1 mark per correct answer, no negative marking
 * (matching the Karnataka VAO / KPSC Group C evaluation pattern).
 * Unattempted questions simply score zero.
 */
export function buildLedger(questions: MCQ[], answers: Record<string, number | null>): ExamLedger {
  const subjectBreakdown: Record<string, { correct: number; total: number }> = {};
  let score = 0;
  let attempted = 0;

  questions.forEach((question) => {
    const choice = answers[question.id];
    if (choice === null || choice === undefined) return;

    attempted += 1;
    const entry = subjectBreakdown[question.subject] ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (choice === question.correctAnswerIndex) {
      entry.correct += 1;
      score += 1;
    }
    subjectBreakdown[question.subject] = entry;
  });

  return {
    score,
    total: questions.length,
    attempted,
    accuracy: attempted > 0 ? Math.round((score / attempted) * 100) : 0,
    subjectBreakdown,
  };
}

/** Answered / marked counters for the palette and the submit dialog. */
export function paperStats(
  questions: MCQ[],
  answers: Record<string, number | null>,
  marked: string[],
): { answered: number; marked: number } {
  let answered = 0;
  questions.forEach((question) => {
    const choice = answers[question.id];
    if (choice !== undefined && choice !== null) answered += 1;
  });
  const markedCount = marked.filter((id) => questions.some((question) => question.id === id)).length;
  return { answered, marked: markedCount };
}
