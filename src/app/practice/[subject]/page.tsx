'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Shuffle, Sparkles } from 'lucide-react';
import type { Difficulty, SubjectId } from '@/types/exam';
import { SUBJECT_MAP } from '@/lib/constants';
import { questionById, questionsForSubject } from '@/data';
import { useHydrated, useVaoStore } from '@/lib/store';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { PracticeFilters, type StatusFilter } from '@/components/practice/PracticeFilters';
import { QuestionRunner } from '@/components/quiz/QuestionRunner';

interface SubjectPracticePageProps {
  params: { subject: string };
}

/** Untimed practice session for one subject: filters + instant-reveal engine. */
export default function SubjectPracticePage({ params }: SubjectPracticePageProps) {
  const hydrated = useHydrated();
  const state = useVaoStore();

  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [mistakesOnly, setMistakesOnly] = useState(false);
  const [sessionSeed, setSessionSeed] = useState(1);

  const subjectId = params.subject as SubjectId;
  const subject = SUBJECT_MAP[subjectId];

  const bank = useMemo(() => (subject ? questionsForSubject(subjectId) : []), [subject, subjectId]);

  const filtered = useMemo(() => {
    const wrong = new Set(state.wrongIds);
    const attempted = new Set(state.attemptedIds);
    return bank.filter((question) => {
      if (difficulty !== 'all' && question.difficulty !== difficulty) return false;
      if (mistakesOnly && !wrong.has(question.id)) return false;
      if (status === 'attempted' && !attempted.has(question.id)) return false;
      if (status === 'unattempted' && attempted.has(question.id)) return false;
      return true;
    });
  }, [bank, difficulty, mistakesOnly, status, state.attemptedIds, state.wrongIds]);

  if (!hydrated) return <LoadingBlock rows={5} />;

  if (!subject) {
    return (
      <EmptyState
        title="Unknown subject"
        message={`"${params.subject}" is not one of the practice subjects.`}
        action={
          <Link href="/practice" className="btn-primary">
            Back to practice hub
          </Link>
        }
      />
    );
  }

  const subjectMistakes = state.wrongIds.filter(
    (id) => questionById(id)?.subject === subjectId,
  ).length;
  const stat = state.subjectStats[subjectId] ?? { attempted: 0, correct: 0 };

  return (
    <>
      <PageHeader
        title={subject.name}
        kannadaTitle={subject.nameKannada}
        subtitle={subject.description}
        icon={<Sparkles className="h-5 w-5" />}
        actions={
          <>
            <span className="pill border-slate-200 bg-white text-slate-600">
              {stat.correct}/{stat.attempted} correct
            </span>
            <button
              type="button"
              onClick={() => setSessionSeed((seed) => seed + 1)}
              className="btn-ghost"
            >
              <Shuffle className="h-4 w-4" />
              New session
            </button>
          </>
        }
      />

      <PracticeFilters
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        status={status}
        onStatusChange={setStatus}
        mistakesOnly={mistakesOnly}
        onToggleMistakesOnly={() => setMistakesOnly((value) => !value)}
        subjectMistakes={subjectMistakes}
        selectedCount={filtered.length}
        totalCount={bank.length}
      />

      {filtered.length === 0 ? (
        <EmptyState
          title="No questions match these filters"
          message="Relax the difficulty or status filter, or clear the mistakes-only toggle."
        />
      ) : (
        <QuestionRunner
          key={sessionSeed}
          questions={filtered}
          practiceSubject={subjectId}
          practiceMode={mistakesOnly ? 'mistakes-only' : 'all'}
          shuffleSeed={sessionSeed}
        />
      )}
    </>
  );
}
