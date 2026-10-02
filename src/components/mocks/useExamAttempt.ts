'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { MCQ, MockExam, Paper } from '@/types/exam';
import { useVaoStore } from '@/lib/store';
import { buildLedger, paperStats } from '@/components/mocks/examLedger';

export interface ExamAttemptApi {
  duration: number;
  durationSeconds: number;
  allQuestions: MCQ[];
  paperQuestions: MCQ[];
  current: MCQ | undefined;
  currentIndex: number;
  activePaper: Paper;
  remainingSeconds: number;
  answers: Record<string, number | null>;
  marked: string[];
  answeredInPaper: number;
  markedInPaper: number;
  isCompleted: boolean;
  score: number;
  total: number;
  accuracy: number;
  timeTakenSeconds: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
  reviewMode: boolean;
  setReviewMode: (value: boolean) => void;
  confirmSubmit: boolean;
  setConfirmSubmit: (value: boolean) => void;
  showPalette: boolean;
  togglePalette: () => void;
  select: (optionIndex: number) => void;
  toggleMark: () => void;
  jump: (index: number) => void;
  previous: () => void;
  next: () => void;
  endPaper: () => void;
  reset: () => void;
}

/**
 * Every piece of strict-exam state logic for one mock lives here:
 *   1. start (or resume) the persisted attempt,
 *   2. run the 120-minute per-paper countdown,
 *   3. lock Paper 1 before Paper 2, then score the exam into the store.
 *
 * Returns null until the attempt exists so the caller can show a "preparing"
 * state without branching on undefined everywhere.
 */
export function useExamAttempt(mock: MockExam): ExamAttemptApi | null {
  const attempt = useVaoStore((state) => state.mockAttempts[mock.id]);
  const startMock = useVaoStore((state) => state.startMock);
  const setMockAnswer = useVaoStore((state) => state.setMockAnswer);
  const toggleMockMark = useVaoStore((state) => state.toggleMockMark);
  const goToMockQuestion = useVaoStore((state) => state.goToMockQuestion);
  const setMockPaper = useVaoStore((state) => state.setMockPaper);
  const setMockRemaining = useVaoStore((state) => state.setMockRemaining);
  const submitMock = useVaoStore((state) => state.submitMock);
  const resetMock = useVaoStore((state) => state.resetMock);

  const [showPalette, setShowPalette] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  // A ref (not state) so the 1-second ticker effect never restarts itself.
  const elapsedRef = useRef(0);

  const duration = mock.durationMinutes;
  const durationSeconds = duration * 60;
  const allQuestions = useMemo(() => [...mock.paperA, ...mock.paperB], [mock]);

  useEffect(() => {
    startMock(mock.id, durationSeconds);
  }, [mock.id, durationSeconds, startMock]);

  const endPaper = useCallback(() => {
    const live = useVaoStore.getState().mockAttempts[mock.id];
    if (!live || live.status !== 'in-progress') return;

    // Paper 1 locks first: the exam is scored only after Paper 2 is submitted.
    if (live.activePaper === 'PAPER_1' && mock.paperB.length > 0) {
      setMockPaper(mock.id, 'PAPER_2');
      setMockRemaining(mock.id, durationSeconds);
      goToMockQuestion(mock.id, 0);
      setConfirmSubmit(false);
      return;
    }

    const ledger = buildLedger(allQuestions, live.answers);
    submitMock(mock.id, {
      score: ledger.score,
      total: ledger.total,
      accuracy: ledger.accuracy,
      timeTakenSeconds: elapsedRef.current,
      subjectBreakdown: ledger.subjectBreakdown,
    });
    setConfirmSubmit(false);
  }, [
    allQuestions,
    durationSeconds,
    goToMockQuestion,
    mock.id,
    mock.paperB.length,
    setMockPaper,
    setMockRemaining,
    submitMock,
  ]);

  const running = attempt?.status === 'in-progress';

  useEffect(() => {
    if (!running) return;
    const tick = window.setInterval(() => {
      elapsedRef.current += 1;
      const live = useVaoStore.getState().mockAttempts[mock.id];
      if (!live || live.status !== 'in-progress') return;
      const remaining = live.remainingSeconds - 1;
      setMockRemaining(mock.id, remaining);
      if (remaining <= 0) endPaper();
    }, 1000);
    return () => window.clearInterval(tick);
  }, [running, mock.id, setMockRemaining, endPaper]);

  if (!attempt || attempt.status === 'not-started') return null;

  const activePaper = attempt.activePaper;
  const paperQuestions = activePaper === 'PAPER_1' ? mock.paperA : mock.paperB;
  const currentIndex = Math.min(attempt.index, Math.max(0, paperQuestions.length - 1));
  const current = paperQuestions[currentIndex];
  const stats = paperStats(paperQuestions, attempt.answers, attempt.marked);

  return {
    duration,
    durationSeconds,
    allQuestions,
    paperQuestions,
    current,
    currentIndex,
    activePaper,
    remainingSeconds: attempt.remainingSeconds,
    answers: attempt.answers,
    marked: attempt.marked,
    answeredInPaper: stats.answered,
    markedInPaper: stats.marked,
    isCompleted: attempt.status === 'completed',
    score: attempt.score,
    total: attempt.total || allQuestions.length,
    accuracy: attempt.accuracy,
    timeTakenSeconds: attempt.timeTakenSeconds,
    subjectBreakdown: attempt.subjectBreakdown,
    reviewMode,
    setReviewMode,
    confirmSubmit,
    setConfirmSubmit,
    showPalette,
    togglePalette: () => setShowPalette((value) => !value),
    select: (optionIndex) => {
      if (!current) return;
      // Tapping the already-selected option clears the answer.
      setMockAnswer(
        mock.id,
        current.id,
        attempt.answers[current.id] === optionIndex ? null : optionIndex,
      );
    },
    toggleMark: () => {
      if (current) toggleMockMark(mock.id, current.id);
    },
    jump: (index) => goToMockQuestion(mock.id, index),
    previous: () => goToMockQuestion(mock.id, Math.max(0, currentIndex - 1)),
    next: () => goToMockQuestion(mock.id, Math.min(paperQuestions.length - 1, currentIndex + 1)),
    endPaper,
    reset: () => {
      elapsedRef.current = 0;
      setReviewMode(false);
      resetMock(mock.id);
    },
  };
}
