'use client';

import { TARGET_DATE } from '@/lib/constants';
import { useHydrated, useVaoStore } from '@/lib/store';
import { computeDashboardMetrics, countMockMistakes } from '@/lib/progress';
import { DAYS, MOCKS, SUBJECTS, TOTAL_QUESTION_COUNT } from '@/data';
import { DayGrid } from '@/components/dashboard/DayGrid';
import { ProgressHeader } from '@/components/dashboard/ProgressHeader';
import { QuickLaunch } from '@/components/dashboard/QuickLaunch';
import { RevisionAlert } from '@/components/dashboard/RevisionAlert';
import { LoadingBlock } from '@/components/ui/LoadingBlock';

export default function DashboardPage() {
  const hydrated = useHydrated();
  const state = useVaoStore();

  if (!hydrated) {
    return (
      <div className="space-y-4">
        <LoadingBlock rows={4} />
        <LoadingBlock rows={6} />
      </div>
    );
  }

  const metrics = computeDashboardMetrics(state, TARGET_DATE);
  const mockMistakes = countMockMistakes(state);
  const completedMocks = Object.values(state.mockAttempts).filter(
    (attempt) => attempt.status === 'completed',
  ).length;

  return (
    <>
      <ProgressHeader
        dayNumber={metrics.dayNumber}
        completedCount={metrics.completedCount}
        progressPercent={metrics.progressPercent}
        daysRemaining={metrics.daysRemaining}
        streak={metrics.streak}
        accuracy={metrics.overallAccuracy}
        revisionCount={metrics.revisionCount}
        attemptedCount={metrics.attemptedCount}
        totalQuestions={TOTAL_QUESTION_COUNT}
        targetDate={TARGET_DATE}
      />

      <RevisionAlert
        bookmarkedCount={state.bookmarkedIds.length}
        wrongCount={state.wrongIds.length}
        mockMistakes={mockMistakes}
      />

      <QuickLaunch
        practiceSubjects={SUBJECTS.length}
        practiceQuestions={TOTAL_QUESTION_COUNT}
        mockCount={MOCKS.length}
        revisionCount={metrics.revisionCount + mockMistakes}
        completedMocks={completedMocks}
      />

      <DayGrid days={DAYS} state={state} activeDay={state.activeDay} />
    </>
  );
}
