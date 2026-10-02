'use client';

import { Flag } from 'lucide-react';
import type { MCQ } from '@/types/exam';
import { SUBJECT_MAP } from '@/lib/constants';
import { DIFFICULTY_CLASSES, cn } from '@/lib/utils';
import { OPTION_LABELS, OptionTile } from '@/components/quiz/OptionTile';

interface StrictQuestionCardProps {
  question: MCQ;
  index: number;
  total: number;
  selectedIndex: number | null;
  marked: boolean;
  onSelect: (optionIndex: number) => void;
}

/**
 * Exam-mode question view.
 *
 * Deliberately minimal: there is NO correctness feedback, NO explanation and NO
 * answer reveal here — that is the whole point of strict mode. Answers are only
 * evaluated after the paper is submitted.
 */
export function StrictQuestionCard({
  question,
  index,
  total,
  selectedIndex,
  marked,
  onSelect,
}: StrictQuestionCardProps) {
  const subject = SUBJECT_MAP[question.subject];

  return (
    <article className="card p-5 sm:p-6">
      <header className="mb-4 flex flex-wrap items-center gap-2">
        <span className="pill border-slate-200 bg-slate-50 text-slate-600">
          Q{index + 1} / {total}
        </span>
        <span className="pill border-brand-200 bg-brand-50 text-brand-700">{subject.name}</span>
        <span className={cn('pill border', DIFFICULTY_CLASSES[question.difficulty])}>
          {question.difficulty}
        </span>
        {marked ? (
          <span className="pill ml-auto border-amber-300 bg-amber-50 text-amber-700">
            <Flag className="h-3.5 w-3.5" /> Marked for review
          </span>
        ) : (
          <span className="pill ml-auto border-slate-200 bg-white text-slate-400">
            Strict mode · no instant answers
          </span>
        )}
      </header>

      <h2 className="question-text mb-4">{question.questionText}</h2>
      {question.questionTextKannada ? (
        <p className="kannada mb-4 text-base text-slate-500">{question.questionTextKannada}</p>
      ) : null}

      <div role="radiogroup" aria-label="Answer options" className="space-y-2.5">
        {question.options.map((option, optionIndex) => (
          <OptionTile
            key={option}
            label={OPTION_LABELS[optionIndex] ?? String(optionIndex + 1)}
            text={option}
            kannadaText={question.optionsKannada?.[optionIndex]}
            state={optionIndex === selectedIndex ? 'selected' : 'idle'}
            onClick={() => onSelect(optionIndex)}
          />
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Tip: you can clear an answer by tapping the same option again in the palette view. Use
        &ldquo;Mark&rdquo; for questions you want to revisit before submitting.
      </p>
    </article>
  );
}
