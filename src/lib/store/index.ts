'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { STORE_KEY, STORE_VERSION } from '@/lib/constants';
import { createCoreActions } from '@/lib/store/actions.core';
import { createMockActions } from '@/lib/store/actions.mock';
import { INITIAL_STATE, type VaoStore } from '@/lib/store/model';

export const useVaoStore = create<VaoStore>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      ...createCoreActions(set, get),
      ...createMockActions(set, get),
    }),
    {
      name: STORE_KEY,
      version: STORE_VERSION,
      storage: createJSONStorage(() => localStorage),
      // Only data is persisted; actions always come from the live store.
      partialize: (state) => ({
        startDate: state.startDate,
        activeDay: state.activeDay,
        completedDays: state.completedDays,
        dayScores: state.dayScores,
        bookmarkedIds: state.bookmarkedIds,
        wrongIds: state.wrongIds,
        attemptedIds: state.attemptedIds,
        subjectStats: state.subjectStats,
        practiceSessions: state.practiceSessions,
        mockAttempts: state.mockAttempts,
        activity: state.activity,
      }),
      // Forward-compatible migration hook: bump STORE_VERSION when the shape changes.
      migrate: (persisted) => persisted as VaoStore,
    },
  ),
);

/**
 * SSR-safe hydration flag.
 *
 * Zustand's persist middleware can only read localStorage on the client, so
 * screens that render persisted numbers must wait for this flag. Without it the
 * server HTML (0%) and the first client render (e.g. 42%) would mismatch.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (useVaoStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    return useVaoStore.persist.onFinishHydration(() => setHydrated(true));
  }, []);

  return hydrated;
}

export type { VaoStore } from '@/lib/store/model';
export { INITIAL_STATE } from '@/lib/store/model';
