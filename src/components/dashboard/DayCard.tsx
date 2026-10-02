import Link from 'next/link';
import { Check, Lock, Play } from 'lucide-react';
import type { DayScore, DayProgram } from '@/types/exam';
import { daySubjectLabel } from '@/lib/constants';
import { accuracyTone, cn } from '@/lib/utils';

export type DayStatus = 'locked' | 'active' | 'completed';

interface DayCardProps {
  day: DayProgram;
  status: DayStatus;
  score?: DayScore;
}

/**
 * One tile of the 30-day grid.
 * locked  → muted, not clickable
 * active  → accent glow border, "Play" affordance
 * completed → emerald checkmark badge + accuracy, still reviewable
 */
export function DayCard({ day, status, score }: DayCardProps) {
  const subject = daySubjectLabel(day.subject);
  const accuracy = score && score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  const base =
    'flex min-h-[124px] flex-col justify-between rounded-2xl border p-3 text-left transition duration-200';
  const styles: Record<DayStatus, string> = {
    locked: 'border-dashed border-slate-200 bg-slate-50',
    active: 'border-brand-400 bg-white shadow-glow hover:-translate-y-0.5 hover:shadow-md',
    completed: 'border-emerald-200 bg-white hover:-translate-y-0.5 hover:shadow-md',
  };

  const body = (
    <>
      <div className="flex items-start justify-between">
        <span
          className={cn(
            'text-[11px] font-bold uppercase tracking-wide',
            status === 'locked' ? 'text-slate-400' : 'text-slate-500',
          )}
        >
          Day {day.dayNumber}
        </span>
        {status === 'completed' ? (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
            <Check className="h-3 w-3" />
          </span>
        ) : status === 'locked' ? (
          <Lock className="h-4 w-4 text-slate-300" />
        ) : (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
            <Play className="h-3 w-3" />
          </span>
        )}
      </div>

      <p
        className={cn(
          'mt-2 line-clamp-3 text-[13px] font-semibold leading-snug',
          status === 'locked' ? 'text-slate-400' : 'text-slate-800',
        )}
      >
        {day.topicTitle}
      </p>

      <div className="mt-2 flex items-center justify-between text-[11px]">
        <span className={cn('truncate', status === 'locked' ? 'text-slate-400' : 'text-slate-500')}>
          {subject.name}
        </span>
        {accuracy !== null ? (
          <span className={cn('font-semibold', accuracyTone(accuracy))}>{accuracy}%</span>
        ) : (
          <span className="text-slate-400">{day.questions.length} Qs</span>
        )}
      </div>
    </>
  );

  if (status === 'locked') {
    return (
      <div aria-disabled="true" className={cn(base, styles.locked)}>
        {body}
      </div>
    );
  }

  return (
    <Link href={`/day/${day.dayNumber}`} className={cn(base, styles[status])}>
      {body}
    </Link>
  );
}
