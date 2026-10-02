/**
 * Persisted progress model.
 *
 * Storage contract (required by the brief):
 *   key: vao-prep-state-v1 · version: 1 · localStorage · written on every mutation.
 *
 * Only lightweight ids and counters are persisted — never question content —
 * so the payload stays far below the 5 MB localStorage quota.
 */

import type { DayScore, MockAttempt, Paper, PracticeSession, SubjectStat } from '@/types/exam';

/** Result ledger produced when a mock exam is submitted. */
export interface MockLedger {
  score: number;
  total: number;
  accuracy: number;
  timeTakenSeconds: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
}

export interface PersistedState {
  /** ISO timestamp of the first visit — drives the "day X" counter. */
  startDate: string | null;
  /** Highest unlocked day (1..30). */
  activeDay: number;
  completedDays: number[];
  dayScores: Record<string, DayScore>;
  bookmarkedIds: string[];
  wrongIds: string[];
  attemptedIds: string[];
  subjectStats: Record<string, SubjectStat>;
  practiceSessions: PracticeSession[];
  mockAttempts: Record<string, MockAttempt>;
  /** yyyy-mm-dd -> answers attempted that day (streak calculation). */
  activity: Record<string, number>;
}

export interface CoreActions {
  registerVisit: () => void;
  /** Global bookkeeping for a question answered in any of the three pillars. */
  recordAnswer: (questionId: string, subject: string, isCorrect: boolean) => void;
  recordDayAnswer: (dayNumber: number, isCorrect: boolean) => void;
  completeDay: (dayNumber: number) => void;
  resetDay: (dayNumber: number) => void;
  toggleBookmark: (questionId: string) => void;
  clearWrongAnswers: (questionIds?: string[]) => void;
  finishPracticeSession: (payload: Omit<PracticeSession, 'id' | 'finishedAt'>) => void;
  resetAll: () => void;
}

export interface MockActions {
  startMock: (mockId: string, totalSeconds: number) => void;
  setMockAnswer: (mockId: string, questionId: string, optionIndex: number | null) => void;
  toggleMockMark: (mockId: string, questionId: string) => void;
  goToMockQuestion: (mockId: string, index: number) => void;
  setMockPaper: (mockId: string, paper: Paper) => void;
  setMockRemaining: (mockId: string, seconds: number) => void;
  submitMock: (mockId: string, ledger: MockLedger) => void;
  resetMock: (mockId: string) => void;
}

export type StoreActions = CoreActions & MockActions;
export type VaoStore = PersistedState & StoreActions;
export type SetState = (
  partial: Partial<VaoStore> | ((state: VaoStore) => Partial<VaoStore>),
) => void;
export type GetState = () => VaoStore;

export const INITIAL_STATE: PersistedState = {
  startDate: null,
  activeDay: 1,
  completedDays: [],
  dayScores: {},
  bookmarkedIds: [],
  wrongIds: [],
  attemptedIds: [],
  subjectStats: {},
  practiceSessions: [],
  mockAttempts: {},
  activity: {},
};

export function emptyMockAttempt(mockId: string, totalSeconds: number): MockAttempt {
  return {
    mockId,
    status: 'in-progress',
    answers: {},
    marked: [],
    index: 0,
    activePaper: 'PAPER_1',
    remainingSeconds: totalSeconds,
    startedAt: new Date().toISOString(),
    submittedAt: null,
    timeTakenSeconds: 0,
    score: 0,
    total: 0,
    accuracy: 0,
    subjectBreakdown: {},
  };
}

export function bumpActivity(activity: Record<string, number>, by = 1): Record<string, number> {
  const now = new Date();
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate(),
  ).padStart(2, '0')}`;
  return { ...activity, [key]: (activity[key] ?? 0) + by };
}
