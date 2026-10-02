'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CalendarDays, CheckCircle2, Clock, ListChecks, Lock } from 'lucide-react';
import { dayById, questionsByIds } from '@/data';
import { daySubjectLabel } from '@/lib/constants';
import { isDayUnlocked } from '@/lib/progress';
import { useHydrated, useVaoStore } from '@/lib/store';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { QuestionRunner } from '@/components/quiz/QuestionRunner';

interface DayPageProps {
  params: { id: string };
}

export default function DayPage({ params }: DayPageProps) {
  const router = useRouter();
  const hydrated = useHydrated();
  const state = useVaoStore();
  const completeDay = useVaoStore((store) => store.completeDay);

  const dayNumber = Number(params.id);
  const day = dayById(dayNumber);

  if (!day) {
    return (
      <EmptyState
        title="Day not found"
        message={`Days run from 1 to 30 — ${params.id} is not part of the program.`}
        action={
          <Link href="/dashboard" className="btn-primary">
            Back to dashboard
          </Link>
        }
      />
    );
  }

  if (!hydrated) {
    return <LoadingBlock rows={5} />;
  }

  const completed = state.completedDays.includes(day.dayNumber);
  const unlocked = isDayUnlocked(day.dayNumber, state);
  const score = state.dayScores[String(day.dayNumber)];
  const subject = daySubjectLabel(day.subject);
  // Mock-review style sets may reference ids from anywhere, so resolve them safely.
  const questions = questionsByIds(day.questions.map((question) => question.id));

  if (!unlocked && !completed) {
    return (
      <>
        <PageHeader
          title={`Day ${day.dayNumber} is locked`}
          subtitle="Finish the current day to unlock this one — sequential unlock keeps revision honest."
          icon={<Lock className="h-5 w-5" />}
        />
        <EmptyState
          icon={<Lock className="h-5 w-5" />}
          title={`Continue with Day ${state.activeDay}`}
          message="Days unlock automatically once you answer every question in the active set."
          action={
            <Link href={`/day/${state.activeDay}`} className="btn-primary">
              Go to Day {state.activeDay}
            </Link>
          }
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={`Day ${day.dayNumber}: ${day.topicTitle}`}
        kannadaTitle={day.topicTitleKannada}
        subtitle={`${subject.name} · ${questions.length} questions · about ${day.estimatedMinutes} minutes`}
        icon={<CalendarDays className="h-5 w-5" />}
        actions={
          completed ? (
            <span className="pill border-emerald-200 bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Completed
              {score && score.total > 0
                ? ` · ${score.correct}/${score.total}`
                : ''}
            </span>
          ) : (
            <span className="pill border-brand-200 bg-brand-50 text-brand-700">
              <Clock className="h-3.5 w-3.5" /> ~{day.estimatedMinutes} min
            </span>
          )
        }
      />

      <section className="card mb-5 p-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <ListChecks className="h-4 w-4 text-brand-600" />
          Today&apos;s focus
        </h2>
        <ul className="mt-2 space-y-1.5">
          {day.focusPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <QuestionRunner
        questions={questions}
        dayNumber={day.dayNumber}
        summaryAction={{
          label: completed ? 'Back to dashboard' : `Complete Day ${day.dayNumber}`,
          onClick: () => {
            if (!completed) completeDay(day.dayNumber);
            if (day.dayNumber < 30) {
              router.push(`/day/${day.dayNumber + 1}`);
            } else {
              router.push('/dashboard');
            }
          },
        }}
      />
    </>
  );
}
