import Link from 'next/link';
import { CheckCircle2, Clock, Play, RotateCcw } from 'lucide-react';
import type { MockAttempt, MockExam } from '@/types/exam';
import { accuracyTone, cn, formatDuration, percent } from '@/lib/utils';

interface MockCardProps {
  mock: MockExam;
  attempt?: MockAttempt;
}

const MIX_LABELS = {
  foundation: { text: 'Foundation', tone: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  standard: { text: 'Standard', tone: 'border-brand-200 bg-brand-50 text-brand-700' },
  advanced: { text: 'Advanced', tone: 'border-rose-200 bg-rose-50 text-rose-700' },
} as const;

/** Index card for one of the 30 mock exams, with live tracking state. */
export function MockCard({ mock, attempt }: MockCardProps) {
  const status = attempt?.status ?? 'not-started';
  const mix = MIX_LABELS[mock.difficultyMix];
  const accuracy = attempt?.accuracy ?? 0;

  const paperCount = mock.paperA.length + mock.paperB.length;

  return (
    <article className="card card-hover flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
          {mock.mockNumber}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          <span className={cn('pill border', mix.tone)}>{mix.text}</span>
          {status === 'completed' ? (
            <span className="pill border-emerald-200 bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Submitted
            </span>
          ) : status === 'in-progress' ? (
            <span className="pill border-amber-200 bg-amber-50 text-amber-700">
              <Clock className="h-3.5 w-3.5" /> In progress
            </span>
          ) : (
            <span className="pill border-slate-200 bg-slate-50 text-slate-500">Not started</span>
          )}
        </div>
      </div>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">{mock.title}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-slate-500">{mock.focus}</p>

      <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Questions</dt>
          <dd className="font-bold text-slate-800">{paperCount}</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Duration</dt>
          <dd className="font-bold text-slate-800">{mock.durationMinutes}m</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Score</dt>
          <dd
            className={cn(
              'font-bold',
              status === 'completed' ? accuracyTone(accuracy) : 'text-slate-400',
            )}
          >
            {status === 'completed' ? `${attempt?.score}/${attempt?.total}` : '—'}
          </dd>
        </div>
      </dl>

      {status === 'completed' ? (
        <p className="mt-2 text-[11px] text-slate-500">
          Accuracy {accuracy}% ({percent(attempt?.score ?? 0, attempt?.total ?? 1)}% of marks) ·
          time {formatDuration(attempt?.timeTakenSeconds ?? 0)}
        </p>
      ) : (
        <p className="mt-2 text-[11px] text-slate-400">
          Paper 1 GK + Paper 2 language/computer · strict mode, no instant answers.
        </p>
      )}

      <div className="mt-auto pt-3">
        <Link href={`/mocks/${mock.id}`} className={cn('btn w-full', status === 'completed' ? 'btn-ghost' : 'btn-primary')}>
          {status === 'completed' ? (
            <>
              <RotateCcw className="h-4 w-4" /> Review / re-attempt
            </>
          ) : status === 'in-progress' ? (
            <>
              <Play className="h-4 w-4" /> Resume paper
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Start exam
            </>
          )}
        </Link>
      </div>
    </article>
  );
}
