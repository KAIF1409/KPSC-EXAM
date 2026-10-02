import type { CoreActions, GetState, SetState } from '@/lib/store/model';
import { INITIAL_STATE, bumpActivity } from '@/lib/store/model';

/**
 * Day program / practice bank / revision actions.
 * Kept separate from the mock-exam actions so each concern stays testable.
 */
export function createCoreActions(set: SetState, get: GetState): CoreActions {
  return {
    registerVisit: () => {
      if (get().startDate) return;
      set({ startDate: new Date().toISOString() });
    },

    recordAnswer: (questionId, subject, isCorrect) => {
      const state = get();

      const attemptedIds = state.attemptedIds.includes(questionId)
        ? state.attemptedIds
        : [...state.attemptedIds, questionId];

      // A correct re-attempt auto-clears the question from the mistake ledger.
      let wrongIds = state.wrongIds;
      if (!isCorrect && !wrongIds.includes(questionId)) wrongIds = [...wrongIds, questionId];
      if (isCorrect) wrongIds = wrongIds.filter((id) => id !== questionId);

      const stat = state.subjectStats[subject] ?? { attempted: 0, correct: 0 };
      const subjectStats = {
        ...state.subjectStats,
        [subject]: {
          attempted: stat.attempted + 1,
          correct: stat.correct + (isCorrect ? 1 : 0),
        },
      };

      set({ attemptedIds, wrongIds, subjectStats, activity: bumpActivity(state.activity) });
    },

    recordDayAnswer: (dayNumber, isCorrect) => {
      const state = get();
      const key = String(dayNumber);
      const current = state.dayScores[key] ?? { correct: 0, total: 0, updatedAt: '' };
      set({
        dayScores: {
          ...state.dayScores,
          [key]: {
            correct: current.correct + (isCorrect ? 1 : 0),
            total: current.total + 1,
            updatedAt: new Date().toISOString(),
          },
        },
      });
    },

    completeDay: (dayNumber) => {
      const state = get();
      const completedDays = state.completedDays.includes(dayNumber)
        ? state.completedDays
        : [...state.completedDays, dayNumber].sort((a, b) => a - b);
      set({
        completedDays,
        // Sequential unlock: finishing day N unlocks day N+1.
        activeDay: Math.min(30, Math.max(state.activeDay, dayNumber + 1)),
      });
    },

    resetDay: (dayNumber) => {
      const state = get();
      const dayScores = { ...state.dayScores };
      delete dayScores[String(dayNumber)];
      set({
        dayScores,
        completedDays: state.completedDays.filter((day) => day !== dayNumber),
      });
    },

    toggleBookmark: (questionId) => {
      const state = get();
      set({
        bookmarkedIds: state.bookmarkedIds.includes(questionId)
          ? state.bookmarkedIds.filter((id) => id !== questionId)
          : [...state.bookmarkedIds, questionId],
      });
    },

    clearWrongAnswers: (questionIds) => {
      if (!questionIds) {
        set({ wrongIds: [] });
        return;
      }
      set({ wrongIds: get().wrongIds.filter((id) => !questionIds.includes(id)) });
    },

    finishPracticeSession: (payload) => {
      const state = get();
      const session = {
        ...payload,
        id: `${payload.subject}-${Date.now()}`,
        finishedAt: new Date().toISOString(),
      };
      set({ practiceSessions: [session, ...state.practiceSessions].slice(0, 60) });
    },

    resetAll: () => set({ ...INITIAL_STATE }),
  };
}

