import type { MCQ, Paper, SubjectId } from '@/types/exam';
import { uniqueBy } from '@/lib/utils';
import { SUBJECTS } from '@/lib/constants';
import { SUBJECT_BANK, SUBJECT_QUESTIONS, questionsForSubject } from '@/data/subjects';
import { DAYS, DAY_QUESTIONS, dayById } from '@/data/days';
import { MOCKS, mockById } from '@/data/mocks';

/**
 * Single entry point for every question in the app.
 * Screens import from here so the data layer can be re-organised freely.
 */

/** Every unique question across the practice bank, the 30-day program and mocks. */
export const ALL_QUESTIONS: MCQ[] = uniqueBy(
  [
    ...SUBJECT_QUESTIONS,
    ...DAY_QUESTIONS,
    ...MOCKS.flatMap((mock) => [...mock.paperA, ...mock.paperB]),
  ],
  (question) => question.id,
);

/** O(1) lookup used by the Revision Zone and mock review screens. */
export const QUESTION_BY_ID: Record<string, MCQ> = ALL_QUESTIONS.reduce<Record<string, MCQ>>(
  (acc, question) => {
    acc[question.id] = question;
    return acc;
  },
  {},
);

export function questionById(id: string): MCQ | undefined {
  return QUESTION_BY_ID[id];
}

/** Resolves a list of ids, silently skipping anything that no longer exists. */
export function questionsByIds(ids: readonly string[]): MCQ[] {
  return ids.map((id) => QUESTION_BY_ID[id]).filter((question): question is MCQ => Boolean(question));
}

export function questionsForPaper(paper: Paper): MCQ[] {
  return ALL_QUESTIONS.filter((question) => question.paper === paper);
}

export const TOTAL_QUESTION_COUNT = ALL_QUESTIONS.length;

export {
  SUBJECTS,
  SUBJECT_BANK,
  SUBJECT_QUESTIONS,
  questionsForSubject,
  DAYS,
  DAY_QUESTIONS,
  dayById,
  MOCKS,
  mockById,
};

export type { SubjectId };
