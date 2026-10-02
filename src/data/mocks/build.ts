import type { MCQ, MockExam, MockMix, Paper } from '@/types/exam';
import { MOCK_DURATION_MINUTES, QUESTIONS_PER_PAPER } from '@/lib/constants';
import { hashString, seededShuffle, uniqueBy } from '@/lib/utils';
import { SUBJECT_QUESTIONS } from '@/data/subjects';
import { DAY_QUESTIONS } from '@/data/days';

/**
 * Deterministic mock-paper composer.
 *
 * Until the full 100-question parsed papers are pasted into each mock file,
 * every paper is assembled from the subject bank + day bank. The shuffle is
 * seeded by the mock id, so Mock 7 always renders the same paper (stable
 * revisions, stable localStorage answers).
 *
 * // TODO: PASTE_PARSED_MCQS_HERE — replace the composed papers with the real
 * // parsed paper arrays inside each mock-XX.ts file when the PDFs are parsed.
 */

const ALL_QUESTIONS: MCQ[] = uniqueBy(
  [...SUBJECT_QUESTIONS, ...DAY_QUESTIONS],
  (question) => question.id,
);

/** Paper 1 = General Knowledge. */
export const PAPER_1_POOL: MCQ[] = ALL_QUESTIONS.filter((q) => q.paper === 'PAPER_1');

/** Paper 2 = General Kannada / General English / Computer Literacy. */
export const PAPER_2_POOL: MCQ[] = ALL_QUESTIONS.filter((q) => q.paper === 'PAPER_2');

export function poolFor(paper: Paper): MCQ[] {
  return paper === 'PAPER_1' ? PAPER_1_POOL : PAPER_2_POOL;
}

/**
 * Composes one paper from its pool, capped at the real paper size (100 Qs).
 * If the deployed bank is smaller than 100 the paper simply reports the smaller
 * length — the UI shows "loaded / target" so nothing is faked.
 */
export function buildPaper(mockId: string, paper: Paper, target = QUESTIONS_PER_PAPER): MCQ[] {
  const pool = poolFor(paper);
  return seededShuffle(pool, hashString(`${mockId}:${paper}`)).slice(0, Math.min(target, pool.length));
}

export interface MockSeed {
  mockNumber: number;
  title: string;
  focus: string;
  difficultyMix: MockMix;
  /** Hand-authored Paper 1 questions placed at the head of paperA. */
  sampleA?: MCQ[];
  /** Hand-authored Paper 2 questions placed at the head of paperB. */
  sampleB?: MCQ[];
}

export function defineMock(seed: MockSeed): MockExam {
  const id = `mock-${String(seed.mockNumber).padStart(2, '0')}`;

  const paperA = uniqueBy([...(seed.sampleA ?? []), ...buildPaper(id, 'PAPER_1')], (q) => q.id).slice(
    0,
    QUESTIONS_PER_PAPER,
  );
  const paperB = uniqueBy([...(seed.sampleB ?? []), ...buildPaper(id, 'PAPER_2')], (q) => q.id).slice(
    0,
    QUESTIONS_PER_PAPER,
  );

  return {
    id,
    mockNumber: seed.mockNumber,
    title: seed.title,
    focus: seed.focus,
    difficultyMix: seed.difficultyMix,
    durationMinutes: MOCK_DURATION_MINUTES,
    targetPaperSize: QUESTIONS_PER_PAPER,
    paperA,
    paperB,
  };
}
