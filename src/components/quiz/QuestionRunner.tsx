'use client';

import { useEffect, useMemo, useState } from 'react';
import type { MCQ, SubjectId } from '@/types/exam';
import { useVaoStore } from '@/lib/store';
import { seededShuffle } from '@/lib/utils';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { ControlTray } from '@/components/quiz/ControlTray';
import { SessionSummary } from '@/components/quiz/SessionSummary';

export interface RunnerResult {
  total: number;
  correct: number;
}

interface QuestionRunnerProps {
  questions: MCQ[];
  /** When set, answers also update the per-day accuracy ledger. */
  dayNumber?: number;
  /** When set, finishing the set stores a practice session for the subject. */
  practiceSubject?: SubjectId;
  practiceMode?: 'all' | 'mistakes-only';
  shuffleSeed?: number;
  /**
   * 'practice' (default) — instant reveal, answers written to the store.
   * 'review'  — read-only replay of a submitted paper (mock results review).
   */
  mode?: 'practice' | 'review';
  /** Recorded answers from the submitted attempt (review mode only). */
  reviewAnswers?: Record<string, number | null>;
  onFinished?: (result: RunnerResult) => void;
  /** Extra CTA rendered inside the summary card (e.g. "Complete Day 5"). */
  summaryAction?: { label: string; onClick: () => void };
}

/**
 * The single MCQ engine used by Day program, Subject practice, Revision Zone and
 * every mock review screen: one question at a time, tiles, instant emerald/rose
 * feedback, auto-expanding explanation, bookmark toggle and a floating tray.
 */
export function QuestionRunner({
  questions: questionsProp,
  dayNumber,
  practiceSubject,
  practiceMode = 'all',
  shuffleSeed,
  mode = 'practice',
  reviewAnswers,
  onFinished,
  summaryAction,
}: QuestionRunnerProps) {
  const [runKey, setRunKey] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionWrong, setSessionWrong] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  /** Non-null while the learner is drilling only the questions they got wrong. */
  const [mistakesPool, setMistakesPool] = useState<string[] | null>(null);

  const recordAnswer = useVaoStore((state) => state.recordAnswer);
  const recordDayAnswer = useVaoStore((state) => state.recordDayAnswer);
  const toggleBookmark = useVaoStore((state) => state.toggleBookmark);
  const finishPracticeSession = useVaoStore((state) => state.finishPracticeSession);
  const bookmarkedIds = useVaoStore((state) => state.bookmarkedIds);

  // Shuffle once per run so "Practice again" gives a fresh order, and narrow to
  // the mistake subset while "Mistakes only" mode is active.
  const questions = useMemo(() => {
    const base = mistakesPool
      ? questionsProp.filter((question) => mistakesPool.includes(question.id))
      : questionsProp;
    if (shuffleSeed === undefined) return base;
    return seededShuffle(base, shuffleSeed + runKey);
  }, [questionsProp, shuffleSeed, runKey, mistakesPool]);

  const total = questions.length;
  const current = questions[index];
  const answeredCount = Object.keys(answers).length;
  const correctCount = useMemo(
    () =>
      Object.entries(answers).filter(([id, choice]) => {
        const question = questions.find((item) => item.id === id);
        return question ? question.correctAnswerIndex === choice : false;
      }).length,
    [answers, questions],
  );

  const isReview = mode === 'review';

  // In review mode the answers come from the submitted paper, not from taps.
  const reviewStats = useMemo(() => {
    if (!isReview || !reviewAnswers) return null;
    let correct = 0;
    let attempted = 0;
    questions.forEach((question) => {
      const choice = reviewAnswers[question.id];
      if (choice === null || choice === undefined) return;
      attempted += 1;
      if (choice === question.correctAnswerIndex) correct += 1;
    });
    return { correct, attempted };
  }, [isReview, reviewAnswers, questions]);

  const displayAnswered = reviewStats ? reviewStats.attempted : answeredCount;
  const displayCorrect = reviewStats ? reviewStats.correct : correctCount;

  useEffect(() => {
    if (!finished) return;
    onFinished?.({ total, correct: displayCorrect });
    if (practiceSubject) {
      finishPracticeSession({
        subject: practiceSubject,
        total,
        correct: correctCount,
        mode: practiceMode,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  if (total === 0) {
    return (
      <div className="card p-6 text-center text-sm text-slate-500">
        No questions loaded for this set yet. Paste parsed MCQs into the matching data file
        (look for the <code className="rounded bg-slate-100 px-1">TODO: PASTE_PARSED_MCQS_HERE</code>{' '}
        anchor).
      </div>
    );
  }

  if (finished) {
    return (
      <SessionSummary
        total={total}
        correct={displayCorrect}
        mistakes={
          reviewStats ? Math.max(0, reviewStats.attempted - reviewStats.correct) : sessionWrong.length
        }
        onRestart={() => {
          setAnswers({});
          setSessionWrong([]);
          setMistakesPool(null);
          setIndex(0);
          setFinished(false);
          setRunKey((key) => key + 1);
        }}
        onRetryMistakes={
          sessionWrong.length > 0
            ? () => {
                setMistakesPool([...sessionWrong]);
                setAnswers({});
                setSessionWrong([]);
                setIndex(0);
                setFinished(false);
                setRunKey((key) => key + 1);
              }
            : undefined
        }
        action={summaryAction}
      />
    );
  }

  const handleSelect = (optionIndex: number) => {
    if (isReview || !current || answers[current.id] !== undefined) return;
    const isCorrect = optionIndex === current.correctAnswerIndex;

    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }));
    if (!isCorrect) setSessionWrong((prev) => [...prev, current.id]);

    recordAnswer(current.id, current.subject, isCorrect);
    if (dayNumber) recordDayAnswer(dayNumber, isCorrect);
  };

  return (
    <>
      <QuestionCard
        question={current}
        index={index}
        total={total}
        selectedIndex={
          isReview ? (reviewAnswers?.[current.id] ?? null) : (answers[current.id] ?? null)
        }
        reveal
        bookmarked={bookmarkedIds.includes(current.id)}
        onToggleBookmark={() => toggleBookmark(current.id)}
        onSelect={handleSelect}
        locked={isReview || answers[current.id] !== undefined}
      />

      <ControlTray
        onPrevious={() => setIndex((value) => Math.max(0, value - 1))}
        onNext={() => setIndex((value) => Math.min(total - 1, value + 1))}
        canGoPrevious={index > 0}
        canGoNext={index < total - 1}
        isLast={index === total - 1}
        answeredCount={displayAnswered}
        correctCount={displayCorrect}
        markedCount={sessionWrong.length}
        total={total}
        completeLabel={summaryAction?.label ?? 'Finish set'}
        onComplete={displayAnswered === total ? () => setFinished(true) : undefined}
      />
    </>
  );
}
