'use client';

import { useMemo, useState } from 'react';
import { ClipboardList, Filter } from 'lucide-react';
import type { MockStatus } from '@/types/exam';
import { QUESTIONS_PER_PAPER } from '@/lib/constants';
import { MOCKS } from '@/data';
import { useHydrated, useVaoStore } from '@/lib/store';
import { accuracyTone, cn, percent } from '@/lib/utils';
import { PageHeader } from '@/components/layout/PageHeader';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { MockCard } from '@/components/mocks/MockCard';

const STATUS_FILTERS: Array<{ value: MockStatus | 'all'; label: string }> = [
  { value: 'all', label: 'All 30 mocks' },
  { value: 'not-started', label: 'Not started' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'completed', label: 'Completed' },
];

/** Mock Test Hub — 30 full-length papers modelled on the official framework. */
export default function MockTestsPage() {
  const hydrated = useHydrated();
  const state = useVaoStore();
  const [filter, setFilter] = useState<MockStatus | 'all'>('all');

  const visible = useMemo(() => {
    if (filter === 'all') return MOCKS;
    return MOCKS.filter((mock) => (state.mockAttempts[mock.id]?.status ?? 'not-started') === filter);
  }, [filter, state.mockAttempts]);

  if (!hydrated) return <LoadingBlock rows={5} />;

  const attempts = Object.values(state.mockAttempts);
  const completed = attempts.filter((attempt) => attempt.status === 'completed');
  const bestScore = completed.reduce((best, attempt) => Math.max(best, attempt.score), 0);
  const bestTotal = completed.find((attempt) => attempt.score === bestScore)?.total ?? QUESTIONS_PER_PAPER * 2;
  const avgAccuracy =
    completed.length > 0
      ? Math.round(completed.reduce((sum, attempt) => sum + attempt.accuracy, 0) / completed.length)
      : 0;

  return (
    <>
      <PageHeader
        title="Mock Test Hub"
        kannadaTitle="ಅಣಕ ಪರೀಕ್ಷೆಗಳು"
        subtitle={`${MOCKS.length} full-length simulations: Paper 1 General Knowledge + Paper 2 Kannada/English/Computer, 120 minutes per paper, strict mode with no instant answers.`}
        icon={<ClipboardList className="h-5 w-5" />}
      />

      <section className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="card p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Papers completed
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {completed.length}
            <span className="text-sm font-medium text-slate-400">/{MOCKS.length}</span>
          </p>
          <p className="text-xs text-slate-500">Each mock = Paper 1 + Paper 2</p>
        </div>
        <div className="card p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Best score
          </p>
          <p className={cn('mt-1 text-2xl font-bold', completed.length ? 'text-brand-700' : 'text-slate-400')}>
            {completed.length ? `${bestScore}/${bestTotal}` : '—'}
          </p>
          <p className="text-xs text-slate-500">
            {completed.length ? `${percent(bestScore, bestTotal)}% of the paper` : 'No paper submitted yet'}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Average accuracy
          </p>
          <p className={cn('mt-1 text-2xl font-bold', completed.length ? accuracyTone(avgAccuracy) : 'text-slate-400')}>
            {completed.length ? `${avgAccuracy}%` : '—'}
          </p>
          <p className="text-xs text-slate-500">Target 70%+ before exam day</p>
        </div>
      </section>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Filter className="h-3.5 w-3.5" /> Status
        </span>
        {STATUS_FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFilter(option.value)}
            aria-pressed={filter === option.value}
            className={cn(
              'pill border',
              filter === option.value
                ? 'border-brand-300 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((mock) => (
          <MockCard key={mock.id} mock={mock} attempt={state.mockAttempts[mock.id]} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="card mt-4 p-6 text-center text-sm text-slate-500">
          No mock matches this status filter.
        </p>
      ) : null}
    </>
  );
}
