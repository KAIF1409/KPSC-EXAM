import Link from 'next/link';
import { ArrowRight, Target } from 'lucide-react';
import type { Subject } from '@/types/exam';
import { accuracyTone, cn } from '@/lib/utils';

interface SubjectCardProps {
  subject: Subject;
  questionCount: number;
  attempted: number;
  correct: number;
  mistakes: number;
}

/** Card in the Subject-wise Practice hub (count + accuracy + mistakes to drill). */
export function SubjectCard({
  subject,
  questionCount,
  attempted,
  correct,
  mistakes,
}: SubjectCardProps) {
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return (
    <Link href={`/practice/${subject.id}`} className="card card-hover flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{subject.name}</h3>
          <p className="kannada text-xs text-slate-500">{subject.nameKannada}</p>
        </div>
        <span className="pill border-slate-200 bg-slate-50 text-slate-500">
          {subject.paper === 'PAPER_1' ? 'Paper 1' : 'Paper 2'}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-xs text-slate-500">{subject.description}</p>

      <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Bank</dt>
          <dd className="font-bold text-slate-800">{questionCount}</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Attempted</dt>
          <dd className="font-bold text-slate-800">{attempted}</dd>
        </div>
        <div className="rounded-lg bg-slate-50 py-1.5">
          <dt className="text-slate-500">Accuracy</dt>
          <dd className={cn('font-bold', attempted > 0 ? accuracyTone(accuracy) : 'text-slate-400')}>
            {attempted > 0 ? `${accuracy}%` : '—'}
          </dd>
        </div>
      </dl>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
        <span className="flex items-center gap-1.5 text-rose-600">
          <Target className="h-3.5 w-3.5" />
          {mistakes} to re-test
        </span>
        <span className="flex items-center gap-1 font-semibold text-brand-600">
          Practise <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
