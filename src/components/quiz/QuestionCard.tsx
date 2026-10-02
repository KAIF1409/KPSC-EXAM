'use client';

import { Bookmark, BookmarkCheck } from 'lucide-react';
import type { MCQ } from '@/types/exam';
import { SUBJECT_MAP } from '@/lib/constants';
import { DIFFICULTY_CLASSES, cn } from '@/lib/utils';
import { OptionTile, OPTION_LABELS, type OptionState } from '@/components/quiz/OptionTile';
import { ExplanationPanel } from '@/components/quiz/ExplanationPanel';

interface QuestionCardProps {
  question: MCQ;
  index: number;
  total: number;
  /** Option index chosen by the learner in this session (null = untouched). */
  selectedIndex: number | null;
  /** Instant-reveal pillars show feedback; strict mock mode hides it. */
  reveal: boolean;
  bookmarked: boolean;
  onToggleBookmark: () => void;
  onSelect: (optionIndex: number) => void;
  /** Disables options after answering in practice mode. */
  locked: boolean;
}

/** Resolves the visual state of each option tile for this question. */
function optionState(
  optionIndex: number,
  selectedIndex: number | null,
  correctAnswerIndex: number,
  reveal: boolean,
): OptionState {
  if (reveal && selectedIndex !== null) {
    if (optionIndex === correctAnswerIndex) return 'correct';
    if (optionIndex === selectedIndex) return 'wrong';
    return 'muted';
  }
  return optionIndex === selectedIndex ? 'selected' : 'idle';
}

export function QuestionCard({
  question,
  index,
  total,
  selectedIndex,
  reveal,
  bookmarked,
  onToggleBookmark,
  onSelect,
  locked,
}: QuestionCardProps) {
  const subject = SUBJECT_MAP[question.subject];
  const isCorrect = selectedIndex === question.correctAnswerIndex;

  return (
    <article className="card animate-pop-in p-5 sm:p-6">
      <header className="mb-4 flex flex-wrap items-center gap-2">
        <span className="pill border-slate-200 bg-slate-50 text-slate-600">
          Q{index + 1} / {total}
        </span>
        <span className="pill border-brand-200 bg-brand-50 text-brand-700">{subject.name}</span>
        <span className={cn('pill border', DIFFICULTY_CLASSES[question.difficulty])}>
          {question.difficulty}
        </span>
        <button
          type="button"
          onClick={onToggleBookmark}
          aria-pressed={bookmarked}
          className={cn(
            'pill ml-auto border transition',
            bookmarked
              ? 'border-amber-300 bg-amber-50 text-amber-700'
              : 'border-slate-200 bg-white text-slate-500 hover:border-amber-200 hover:text-amber-600',
          )}
        >
          {bookmarked ? (
            <BookmarkCheck className="h-3.5 w-3.5" />
          ) : (
            <Bookmark className="h-3.5 w-3.5" />
          )}
          {bookmarked ? 'Marked' : 'Mark for revision'}
        </button>
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
            state={optionState(optionIndex, selectedIndex, question.correctAnswerIndex, reveal)}
            disabled={locked}
            onClick={() => onSelect(optionIndex)}
          />
        ))}
      </div>

      {reveal && selectedIndex !== null ? (
        <ExplanationPanel
          className="mt-5"
          isCorrect={isCorrect}
          correctOptionText={question.options[question.correctAnswerIndex]}
          explanation={question.explanationText}
          reference={question.reference}
        />
      ) : null}
    </article>
  );
}
