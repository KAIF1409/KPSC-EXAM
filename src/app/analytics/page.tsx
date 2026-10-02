'use client';

import { BarChart3, Flame, Target, TrendingUp, Trophy } from 'lucide-react';
import { QUESTIONS_PER_PAPER, PROGRAM_LENGTH, TARGET_DATE } from '@/lib/constants';
import { MOCKS } from '@/data';
import {
  computeDashboardMetrics,
  computeDayTrend,
  computeMockTrend,
  computeSubjectAccuracy,
} from '@/lib/progress';
import { useHydrated, useVaoStore } from '@/lib/store';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { SubjectAccuracyList } from '@/components/analytics/SubjectAccuracyList';
import { TrendChart } from '@/components/analytics/TrendChart';

/** Analytics: day accuracy trend, mock score trend, per-subject accuracy, weakest 3. */
export default function AnalyticsPage() {
  const hydrated = useHydrated();
  const state = useVaoStore();

  if (!hydrated) return <LoadingBlock rows={6} />;

  const metrics = computeDashboardMetrics(state, TARGET_DATE);
  const subjectAccuracy = computeSubjectAccuracy(state);
  const dayTrend = computeDayTrend(state).map((point) => ({
    label: `D${point.day}`,
    value: point.accuracy,
    caption: `${point.answered} answered`,
  }));
  const mockTrend = computeMockTrend(state, MOCKS).map((point) => ({
    label: `M${point.mockNumber}`,
    value: point.score,
    caption: `${point.score}/${point.total} · ${point.accuracy}% accuracy`,
  }));
  const weakestIds = metrics.weakSubjects.map((entry) => entry.subject.id);
  const mocksCompleted = Object.values(state.mockAttempts).filter(
    (attempt) => attempt.status === 'completed',
  );
  const bestMock = mocksCompleted.reduce((best, attempt) => Math.max(best, attempt.score), 0);

  return (
    <>
      <PageHeader
        title="Knowledge Analytics"
        kannadaTitle="ಜ್ಞಾನ ವಿಶ್ಲೇಷಣೆ"
        subtitle="Where you stand today: day-wise accuracy, mock score movement, subject strengths and the three subjects that need work first."
        icon={<BarChart3 className="h-5 w-5" />}
      />

      <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Overall accuracy"
          value={`${metrics.overallAccuracy}%`}
          hint={`${metrics.attemptedCount} questions attempted`}
          tone="emerald"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard
          label="Program progress"
          value={`${metrics.completedCount}/${PROGRAM_LENGTH}`}
          hint={`${metrics.progressPercent}% of the day program`}
          tone="brand"
          icon={<Target className="h-4 w-4" />}
        />
        <StatCard
          label="Mocks completed"
          value={`${mocksCompleted.length}/${MOCKS.length}`}
          hint={`Best score ${bestMock}/${QUESTIONS_PER_PAPER * 2}`}
          tone="amber"
          icon={<Trophy className="h-4 w-4" />}
        />
        <StatCard
          label="Study streak"
          value={`${metrics.streak} ${metrics.streak === 1 ? 'day' : 'days'}`}
          hint={`${metrics.daysRemaining} days to exam day`}
          tone="rose"
          icon={<Flame className="h-4 w-4" />}
        />
      </section>

      {metrics.weakSubjects.length > 0 ? (
        <section className="card mb-6 border-rose-100 bg-rose-50/40 p-5">
          <h2 className="text-base font-semibold text-slate-900">Your weakest three subjects</h2>
          <p className="mt-0.5 text-sm text-slate-600">
            Fix these first — they carry the largest score upside for a VAO paper.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3">
            {metrics.weakSubjects.map((entry) => (
              <li key={entry.subject.id} className="rounded-xl bg-white p-3 ring-1 ring-rose-100">
                <p className="text-sm font-semibold text-slate-800">{entry.subject.name}</p>
                <p className="text-xs text-rose-600">
                  {entry.correct}/{entry.attempted} correct · {entry.accuracy}% accuracy
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-bold text-slate-900">Day-wise accuracy trend</h2>
        <TrendChart
          points={dayTrend}
          target={100}
          stroke="#4f46e5"
          emptyLabel="Finish a day set to plot your first accuracy point."
        />
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-bold text-slate-900">Mock score trend</h2>
        <TrendChart
          points={mockTrend}
          target={QUESTIONS_PER_PAPER * 2}
          stroke="#059669"
          emptyLabel="Submit a mock paper to start tracking your score movement."
        />
      </section>

      <SubjectAccuracyList items={subjectAccuracy} weakestIds={weakestIds} />
    </>
  );
}
