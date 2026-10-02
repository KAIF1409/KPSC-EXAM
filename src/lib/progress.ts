/**
 * Pure selectors that turn the persisted store into dashboard / analytics numbers.
 * Kept framework-free so they can be unit-tested or reused server-side later.
 */

import type { MCQ, Subject, SubjectId } from '@/types/exam';
import type { VaoStore } from '@/lib/store/model';
import { SUBJECTS, PROGRAM_LENGTH, QUESTIONS_PER_PAPER } from '@/lib/constants';
import { questionById } from '@/data';
import { daysBetween, percent, todayKey } from '@/lib/utils';

export interface SubjectAccuracy {
  subject: Subject;
  attempted: number;
  correct: number;
  accuracy: number;
}

export interface DashboardMetrics {
  dayNumber: number;
  completedCount: number;
  progressPercent: number;
  daysRemaining: number;
  streak: number;
  overallAccuracy: number;
  attemptedCount: number;
  revisionCount: number;
  weakSubjects: SubjectAccuracy[];
}

export function computeDayNumber(startDate: string | null, today: Date = new Date()): number {
  if (!startDate) return 1;
  const started = new Date(startDate);
  if (Number.isNaN(started.getTime())) return 1;
  const elapsed = Math.max(0, daysBetween(started, today));
  return Math.min(PROGRAM_LENGTH, elapsed + 1);
}

export function computeDaysRemaining(targetIso: string, today: Date = new Date()): number {
  const target = new Date(targetIso);
  if (Number.isNaN(target.getTime())) return 0;
  return Math.max(0, daysBetween(today, target));
}

/** Consecutive days (ending today or yesterday) with at least one answer. */
export function computeStreak(activity: Record<string, number>, today: Date = new Date()): number {
  if (!activity || Object.keys(activity).length === 0) return 0;
  let streak = 0;
  const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // Allow the streak to survive until the end of the current day.
  if (!activity[todayKey(cursor)]) cursor.setDate(cursor.getDate() - 1);

  for (let guard = 0; guard < 400; guard += 1) {
    const key = todayKey(cursor);
    if (!activity[key]) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function computeSubjectAccuracy(state: VaoStore): SubjectAccuracy[] {
  return SUBJECTS.map((subject) => {
    const stat = state.subjectStats[subject.id as SubjectId] ?? { attempted: 0, correct: 0 };
    return {
      subject,
      attempted: stat.attempted,
      correct: stat.correct,
      accuracy: percent(stat.correct, stat.attempted),
    };
  });
}

export function computeDashboardMetrics(state: VaoStore, targetDate: string): DashboardMetrics {
  const completedCount = state.completedDays.length;
  const attemptedCount = state.attemptedIds.length;
  const correctTotal = Object.values(state.subjectStats).reduce((sum, s) => sum + s.correct, 0);

  const subjectAccuracy = computeSubjectAccuracy(state);
  const weakSubjects = subjectAccuracy
    .filter((entry) => entry.attempted >= 3)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);

  return {
    dayNumber: computeDayNumber(state.startDate),
    completedCount,
    progressPercent: percent(completedCount, PROGRAM_LENGTH),
    daysRemaining: computeDaysRemaining(targetDate),
    streak: computeStreak(state.activity),
    overallAccuracy: percent(correctTotal, attemptedCount),
    attemptedCount,
    revisionCount: state.bookmarkedIds.length + state.wrongIds.length,
    weakSubjects,
  };
}

export interface DayTrendPoint {
  day: number;
  accuracy: number;
  answered: number;
}

/** One point per completed day, in day order — feeds the accuracy trend chart. */
export function computeDayTrend(state: VaoStore): DayTrendPoint[] {
  return DAY_RANGE.map((day) => {
    const score = state.dayScores[String(day)];
    return {
      day,
      answered: score?.total ?? 0,
      accuracy: percent(score?.correct ?? 0, score?.total ?? 0),
    };
  }).filter((point) => point.answered > 0);
}

export interface MockTrendPoint {
  mockId: string;
  mockNumber: number;
  score: number;
  total: number;
  accuracy: number;
  submittedAt: string | null;
}

export function computeMockTrend(
  state: VaoStore,
  mocks: ReadonlyArray<{ id: string; mockNumber: number }>,
): MockTrendPoint[] {
  return mocks
    .map((mock) => {
      const attempt = state.mockAttempts[mock.id];
      if (!attempt || attempt.status !== 'completed') return null;
      return {
        mockId: mock.id,
        mockNumber: mock.mockNumber,
        score: attempt.score,
        total: attempt.total || QUESTIONS_PER_PAPER * 2,
        accuracy: attempt.accuracy,
        submittedAt: attempt.submittedAt,
      };
    })
    .filter((point): point is MockTrendPoint => point !== null)
    .sort((a, b) => a.mockNumber - b.mockNumber);
}

const DAY_RANGE = Array.from({ length: PROGRAM_LENGTH }, (_, index) => index + 1);

export function isDayUnlocked(dayNumber: number, state: VaoStore): boolean {
  if (dayNumber <= state.activeDay) return true;
  return state.completedDays.includes(dayNumber);
}

/**
 * Counts the wrong answers sitting inside submitted mock papers.
 * Those questions belong in the Revision Zone along with the practice-bank
 * mistakes, so the dashboard alert adds this number to the total.
 */
export function countMockMistakes(
  state: VaoStore,
  lookup: (id: string) => MCQ | undefined = questionById,
): number {
  return Object.values(state.mockAttempts)
    .filter((attempt) => attempt.status === 'completed')
    .reduce((total, attempt) => {
      const wrong = Object.entries(attempt.answers).filter(([questionId, choice]) => {
        if (choice === null || choice === undefined) return false;
        const question = lookup(questionId);
        return question ? question.correctAnswerIndex !== choice : false;
      }).length;
      return total + wrong;
    }, 0);
}

/** Resolves the ids of every mock question answered incorrectly (for the Revision Zone). */
export function mockMistakeIds(
  state: VaoStore,
  lookup: (id: string) => MCQ | undefined = questionById,
): string[] {
  const ids = new Set<string>();
  Object.values(state.mockAttempts)
    .filter((attempt) => attempt.status === 'completed')
    .forEach((attempt) => {
      Object.entries(attempt.answers).forEach(([questionId, choice]) => {
        if (choice === null || choice === undefined) return;
        const question = lookup(questionId);
        if (question && question.correctAnswerIndex !== choice) ids.add(questionId);
      });
    });
  return [...ids];
}
