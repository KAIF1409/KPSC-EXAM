'use client';

import { RotateCcw, Sparkles, Target, Trophy } from 'lucide-react';
import { accuracyTone, cn, percent } from '@/lib/utils';

interface SessionSummaryProps {
  total: number;
  correct: number;
  mistakes: number;
  onRestart: () => void;
  onRetryMistakes?: () => void;
  action?: { label: string; onClick: () => void };
}

/** End-of-set ledger shown by the practice engine in every pillar. */
export function SessionSummary({
  total,
  correct,
  mistakes,
  onRestart,
  onRetryMistakes,
  action,
}: SessionSummaryProps) {
  const accuracy = percent(correct, total);
  const verdict =
    accuracy >= 80
      ? 'Exam-ready on this set. Move to the next topic.'
      : accuracy >= 60
        ? 'Solid, but re-read the explanations for the ones you missed.'
        : 'Revise the concept notes, then run this set again.';

  return (
    <section className="card animate-pop-in p-6 text-center">
      <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
        <Trophy className="h-6 w-6" />
      </span>
      <h2 className="text-lg font-bold text-slate-900">Set complete</h2>
      <p className="mt-1 text-sm text-slate-500">{verdict}</p>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <Target className="h-3.5 w-3.5" /> Score
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">
            {correct}
            <span className="text-sm font-medium text-slate-400">/{total}</span>
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-3.5 w-3.5" /> Accuracy
          </p>
          <p className={cn('mt-1 text-lg font-bold', accuracyTone(accuracy))}>{accuracy}%</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Mistakes
          </p>
          <p className="mt-1 text-lg font-bold text-rose-600">{mistakes}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <button type="button" onClick={onRestart} className="btn-ghost">
          <RotateCcw className="h-4 w-4" />
          Practice again
        </button>
        {onRetryMistakes ? (
          <button type="button" onClick={onRetryMistakes} className="btn-ghost">
            Mistakes only
          </button>
        ) : null}
        {action ? (
          <button type="button" onClick={action.onClick} className="btn-primary">
            {action.label}
          </button>
        ) : null}
      </div>
    </section>
  );
}
