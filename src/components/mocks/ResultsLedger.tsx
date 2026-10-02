'use client';

import { Clock, Target, TrendingUp, Trophy } from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { accuracyTone, cn, formatDuration, percent } from '@/lib/utils';

interface ResultsLedgerProps {
  mockNumber: number;
  title: string;
  score: number;
  total: number;
  accuracy: number;
  timeTakenSeconds: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
  /** Action row rendered under the ledger (review, re-attempt, next mock). */
  actions?: React.ReactNode;
}

/** Post-submission results ledger with a subject-wise breakdown. */
export function ResultsLedger({
  mockNumber,
  title,
  score,
  total,
  accuracy,
  timeTakenSeconds,
  subjectBreakdown,
  actions,
}: ResultsLedgerProps) {
  const entries = Object.entries(subjectBreakdown).sort(
    (a, b) => percent(b[1].correct, b[1].total) - percent(a[1].correct, a[1].total),
  );
  const best = entries[0];
  const weakest = entries[entries.length - 1];
  const scoredMarks = percent(score, total);

  return (
    <section className="space-y-4">
      <div className="card p-5">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Mock {mockNumber} · Submitted
            </p>
            <h1 className="text-xl font-bold text-slate-900">{title}</h1>
          </div>
          <span className="pill border-emerald-200 bg-emerald-50 text-emerald-700">
            <Trophy className="h-3.5 w-3.5" /> Paper locked
          </span>
        </header>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Score"
            value={`${score}/${total}`}
            hint={`${scoredMarks}% of the marks`}
            tone="brand"
            icon={<Trophy className="h-4 w-4" />}
          />
          <StatCard
            label="Accuracy"
            value={`${accuracy}%`}
            hint="Correct ÷ attempted"
            tone={accuracy >= 60 ? 'emerald' : 'rose'}
            icon={<Target className="h-4 w-4" />}
          />
          <StatCard
            label="Time taken"
            value={formatDuration(timeTakenSeconds)}
            hint="Including per-paper revision"
            tone="slate"
            icon={<Clock className="h-4 w-4" />}
          />
          <StatCard
            label="Sections attempted"
            value={entries.length}
            hint={weakest ? `Weakest: ${weakest[0]}` : 'Awaiting data'}
            tone="amber"
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>
      </div>

      <div className="card p-5">
        <h2 className="text-base font-semibold text-slate-900">Subject-wise breakdown</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Push the weakest section first in your next revision block.
        </p>

        {entries.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            No questions were attempted in this paper, so there is nothing to break down yet.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {entries.map(([subject, value]) => {
              const itemAccuracy = percent(value.correct, value.total);
              return (
                <div key={subject}>
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="capitalize text-slate-700">{subject.replace(/-/g, ' ')}</span>
                    <span className={cn('font-semibold', accuracyTone(itemAccuracy))}>
                      {value.correct}/{value.total} · {itemAccuracy}%
                    </span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all',
                        itemAccuracy >= 75
                          ? 'bg-emerald-500'
                          : itemAccuracy >= 50
                            ? 'bg-amber-500'
                            : 'bg-rose-500',
                      )}
                      style={{ width: `${itemAccuracy}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {best ? (
          <p className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
            Strongest section: <strong className="capitalize">{best[0].replace(/-/g, ' ')}</strong>{' '}
            ({percent(best[1].correct, best[1].total)}%). Keep it warm with a 10-minute revision
            pass every third day.
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </section>
  );
}
