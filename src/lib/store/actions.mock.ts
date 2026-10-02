import type { GetState, MockActions, SetState } from '@/lib/store/model';
import { emptyMockAttempt } from '@/lib/store/model';

/**
 * Strict-mode mock-exam actions.
 *
 * The attempt is persisted after every keystroke because a serious aspirant
 * WILL refresh the tab mid-paper; the timer state must survive that refresh.
 */
export function createMockActions(set: SetState, get: GetState): MockActions {
  return {
    startMock: (mockId, totalSeconds) => {
      const state = get();
      const existing = state.mockAttempts[mockId];

      // Resume an in-progress paper instead of silently resetting the clock.
      if (existing && existing.status === 'in-progress') return;

      set({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: emptyMockAttempt(mockId, totalSeconds),
        },
      });
    },

    setMockAnswer: (mockId, questionId, optionIndex) => {
      const attempt = get().mockAttempts[mockId];
      if (!attempt || attempt.status !== 'in-progress') return;
      set((state) => ({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: { ...attempt, answers: { ...attempt.answers, [questionId]: optionIndex } },
        },
      }));
    },

    toggleMockMark: (mockId, questionId) => {
      const attempt = get().mockAttempts[mockId];
      if (!attempt) return;
      set((state) => ({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: {
            ...attempt,
            marked: attempt.marked.includes(questionId)
              ? attempt.marked.filter((id) => id !== questionId)
              : [...attempt.marked, questionId],
          },
        },
      }));
    },

    goToMockQuestion: (mockId, index) => {
      const attempt = get().mockAttempts[mockId];
      if (!attempt) return;
      set((state) => ({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: { ...attempt, index: Math.max(0, Math.floor(index)) },
        },
      }));
    },

    setMockPaper: (mockId, paper) => {
      const attempt = get().mockAttempts[mockId];
      if (!attempt) return;
      set((state) => ({
        mockAttempts: { ...state.mockAttempts, [mockId]: { ...attempt, activePaper: paper } },
      }));
    },

    setMockRemaining: (mockId, seconds) => {
      const attempt = get().mockAttempts[mockId];
      if (!attempt || attempt.status !== 'in-progress') return;
      set((state) => ({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: { ...attempt, remainingSeconds: Math.max(0, Math.floor(seconds)) },
        },
      }));
    },

    submitMock: (mockId, ledger) => {
      const attempt = get().mockAttempts[mockId] ?? emptyMockAttempt(mockId, 0);
      set((state) => ({
        mockAttempts: {
          ...state.mockAttempts,
          [mockId]: {
            ...attempt,
            status: 'completed',
            submittedAt: new Date().toISOString(),
            score: ledger.score,
            total: ledger.total,
            accuracy: ledger.accuracy,
            timeTakenSeconds: ledger.timeTakenSeconds,
            subjectBreakdown: ledger.subjectBreakdown,
          },
        },
      }));
    },

    resetMock: (mockId) => {
      const state = get();
      const mockAttempts = { ...state.mockAttempts };
      delete mockAttempts[mockId];
      set({ mockAttempts });
    },
  };
}
