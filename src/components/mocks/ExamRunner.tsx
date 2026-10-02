'use client';

import Link from 'next/link';
import { ClipboardList, Eye, LayoutGrid, Lock, RotateCcw } from 'lucide-react';
import type { MockExam } from '@/types/exam';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { TimerBadge } from '@/components/quiz/TimerBadge';
import { QuestionPalette } from '@/components/quiz/QuestionPalette';
import { QuestionRunner } from '@/components/quiz/QuestionRunner';
import { ExamControlBar } from '@/components/mocks/ExamControlBar';
import { ResultsLedger } from '@/components/mocks/ResultsLedger';
import { StrictQuestionCard } from '@/components/mocks/StrictQuestionCard';
import { SubmitDialog } from '@/components/mocks/SubmitDialog';
import { useExamAttempt } from '@/components/mocks/useExamAttempt';

const pillClass = (active: boolean) =>
  cn(
    'pill border',
    active
      ? 'border-brand-300 bg-brand-50 text-brand-700'
      : 'border-slate-200 bg-white text-slate-500',
  );

/**
 * Strict exam-mode screen for one mock exam.
 *   - no instant reveal, no score visible during the paper
 *   - persisted per-paper countdown that survives a refresh
 *   - submit → results ledger → full answer review with explanations
 */
export function ExamRunner({ mock }: { mock: MockExam }) {
  const exam = useExamAttempt(mock);

  if (!exam) {
    return (
      <div className="card p-6 text-center text-sm text-slate-500" aria-busy="true">
        Preparing your exam environment…
      </div>
    );
  }

  if (exam.isCompleted && exam.reviewMode) {
    return (
      <>
        <PageHeader
          title={`Mock ${mock.mockNumber} — Answer review`}
          subtitle="Your answer, the correct option and the reasoning for every question."
          icon={<Eye className="h-5 w-5" />}
          actions={
            <button type="button" className="btn-ghost" onClick={() => exam.setReviewMode(false)}>
              Back to results
            </button>
          }
        />
        <QuestionRunner questions={exam.allQuestions} mode="review" reviewAnswers={exam.answers} />
      </>
    );
  }

  if (exam.isCompleted) {
    return (
      <>
        <PageHeader
          title="Results ledger"
          subtitle={mock.title}
          icon={<ClipboardList className="h-5 w-5" />}
        />
        <ResultsLedger
          mockNumber={mock.mockNumber}
          title={mock.title}
          score={exam.score}
          total={exam.total}
          accuracy={exam.accuracy}
          timeTakenSeconds={exam.timeTakenSeconds}
          subjectBreakdown={exam.subjectBreakdown}
          actions={
            <>
              <button type="button" className="btn-primary" onClick={() => exam.setReviewMode(true)}>
                <Eye className="h-4 w-4" />
                Review all answers
              </button>
              <button type="button" className="btn-ghost" onClick={exam.reset}>
                <RotateCcw className="h-4 w-4" />
                Re-attempt this mock
              </button>
              <Link href="/mocks" className="btn-ghost">
                All mock tests
              </Link>
            </>
          }
        />
      </>
    );
  }

  if (!exam.current) {
    return (
      <EmptyState
        title="This paper has no questions loaded yet"
        message="Hydrate src/data/mocks with the parsed paper (see the TODO anchor in each mock file)."
        action={
          <Link href="/mocks" className="btn-primary">
            Back to mock hub
          </Link>
        }
      />
    );
  }

  return (
    <>
      <PageHeader
        title={`Mock ${mock.mockNumber}: ${mock.title}`}
        subtitle={`${mock.focus} · Paper ${
          exam.activePaper === 'PAPER_1' ? 1 : 2
        } · ${exam.paperQuestions.length} questions · ${exam.duration} minutes · strict mode`}
        icon={<ClipboardList className="h-5 w-5" />}
        actions={
          <TimerBadge remainingSeconds={exam.remainingSeconds} totalSeconds={exam.durationSeconds} />
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className={pillClass(exam.activePaper === 'PAPER_1')}>
          Paper 1 · General Knowledge
        </span>
        <span className={pillClass(exam.activePaper === 'PAPER_2')}>
          Paper 2 · Kannada / English / Computer
        </span>

        {exam.activePaper === 'PAPER_1' && mock.paperB.length > 0 ? (
          <button
            type="button"
            onClick={() => exam.setConfirmSubmit(true)}
            className="pill border border-slate-200 bg-white text-slate-600 hover:border-brand-300"
          >
            <Lock className="h-3.5 w-3.5" /> Lock Paper 1
          </button>
        ) : null}

        <button
          type="button"
          onClick={exam.togglePalette}
          className="pill border border-slate-200 bg-white text-slate-600 hover:border-brand-300"
        >
          <LayoutGrid className="h-3.5 w-3.5" /> {exam.showPalette ? 'Hide' : 'Show'} palette
        </button>
      </div>

      {exam.showPalette ? (
        <div className="mb-4">
          <QuestionPalette
            questionIds={exam.paperQuestions.map((question) => question.id)}
            answers={exam.answers}
            marked={exam.marked}
            currentIndex={exam.currentIndex}
            onJump={exam.jump}
          />
        </div>
      ) : null}

      <StrictQuestionCard
        question={exam.current}
        index={exam.currentIndex}
        total={exam.paperQuestions.length}
        selectedIndex={exam.answers[exam.current.id] ?? null}
        marked={exam.marked.includes(exam.current.id)}
        onSelect={exam.select}
      />

      <ExamControlBar
        index={exam.currentIndex}
        total={exam.paperQuestions.length}
        answeredCount={exam.answeredInPaper}
        markedCount={exam.markedInPaper}
        isMarked={exam.marked.includes(exam.current.id)}
        onPrevious={exam.previous}
        onNext={exam.next}
        onToggleMark={exam.toggleMark}
        onOpenPalette={exam.togglePalette}
        onSubmit={() => exam.setConfirmSubmit(true)}
      />

      <SubmitDialog
        open={exam.confirmSubmit}
        answered={exam.answeredInPaper}
        total={exam.paperQuestions.length}
        marked={exam.markedInPaper}
        isFinalPaper={exam.activePaper === 'PAPER_2' || mock.paperB.length === 0}
        onCancel={() => exam.setConfirmSubmit(false)}
        onConfirm={exam.endPaper}
      />
    </>
  );
}
