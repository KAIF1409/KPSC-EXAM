'use client';

import Link from 'next/link';
import { AlertTriangle, BookOpenCheck, Layers } from 'lucide-react';
import { SUBJECTS } from '@/lib/constants';
import { TOTAL_QUESTION_COUNT, questionById, questionsForSubject } from '@/data';
import { useHydrated, useVaoStore } from '@/lib/store';
import { PageHeader } from '@/components/layout/PageHeader';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { SubjectCard } from '@/components/practice/SubjectCard';

/** Subject-wise Practice Hub — untimed, unlimited-attempt MCQ drilling. */
export default function PracticeHubPage() {
  const hydrated = useHydrated();
  const state = useVaoStore();

  if (!hydrated) return <LoadingBlock rows={5} />;

  const wrongIds = new Set(state.wrongIds);
  const mistakesBySubject = state.wrongIds.reduce<Record<string, number>>((acc, id) => {
    const subject = questionById(id)?.subject;
    if (subject) acc[subject] = (acc[subject] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        title="Subject-wise Practice"
        kannadaTitle="ವಿಷಯವಾರು ಅಭ್ಯಾಸ"
        subtitle={`${TOTAL_QUESTION_COUNT} questions across ${SUBJECTS.length} subjects. Untimed, shuffled, unlimited re-attempts with instant explanations.`}
        icon={<BookOpenCheck className="h-5 w-5" />}
        actions={
          <Link href="/revision" className="btn-ghost">
            <Layers className="h-4 w-4" />
            Mistakes-only session
          </Link>
        }
      />

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="card p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Question bank
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{TOTAL_QUESTION_COUNT}</p>
          <p className="text-xs text-slate-500">Across days, subjects and mock papers</p>
        </div>
        <div className="card p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Attempted
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{state.attemptedIds.length}</p>
          <p className="text-xs text-slate-500">Unique questions answered so far</p>
        </div>
        <div className="card border-rose-100 bg-rose-50/40 p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-rose-600">
            <AlertTriangle className="h-3.5 w-3.5" /> Mistake ledger
          </p>
          <p className="mt-1 text-2xl font-bold text-rose-700">{wrongIds.size}</p>
          <p className="text-xs text-rose-600">Re-attempt these to clear the ledger</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SUBJECTS.map((subject) => {
          const stat = state.subjectStats[subject.id] ?? { attempted: 0, correct: 0 };
          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              questionCount={questionsForSubject(subject.id).length}
              attempted={stat.attempted}
              correct={stat.correct}
              mistakes={mistakesBySubject[subject.id] ?? 0}
            />
          );
        })}
      </div>
    </>
  );
}
