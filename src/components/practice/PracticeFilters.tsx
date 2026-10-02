'use client';

import { Filter } from 'lucide-react';
import type { Difficulty } from '@/types/exam';
import { cn } from '@/lib/utils';

export type StatusFilter = 'all' | 'unattempted' | 'attempted';

const DIFFICULTY_FILTERS: Array<{ value: Difficulty | 'all'; label: string }> = [
  { value: 'all', label: 'All levels' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

const STATUS_FILTERS: Array<{ value: StatusFilter; label: string }> = [
  { value: 'all', label: 'All questions' },
  { value: 'unattempted', label: 'Unattempted' },
  { value: 'attempted', label: 'Attempted' },
];

interface PracticeFiltersProps {
  difficulty: Difficulty | 'all';
  onDifficultyChange: (value: Difficulty | 'all') => void;
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
  mistakesOnly: boolean;
  onToggleMistakesOnly: () => void;
  subjectMistakes: number;
  selectedCount: number;
  totalCount: number;
}

/** Difficulty / attempt-status / mistakes-only filter bar for a practice session. */
export function PracticeFilters({
  difficulty,
  onDifficultyChange,
  status,
  onStatusChange,
  mistakesOnly,
  onToggleMistakesOnly,
  subjectMistakes,
  selectedCount,
  totalCount,
}: PracticeFiltersProps) {
  return (
    <section className="card mb-5 space-y-3 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Filter className="h-3.5 w-3.5" /> Filter
        </span>

        {DIFFICULTY_FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onDifficultyChange(option.value)}
            aria-pressed={difficulty === option.value}
            className={cn(
              'pill border',
              difficulty === option.value
                ? 'border-brand-300 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300',
            )}
          >
            {option.label}
          </button>
        ))}

        <span className="mx-1 hidden h-4 w-px bg-slate-200 sm:block" />

        {STATUS_FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onStatusChange(option.value)}
            aria-pressed={status === option.value}
            className={cn(
              'pill border',
              status === option.value
                ? 'border-brand-300 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300',
            )}
          >
            {option.label}
          </button>
        ))}

        <button
          type="button"
          onClick={onToggleMistakesOnly}
          disabled={subjectMistakes === 0}
          aria-pressed={mistakesOnly}
          className={cn(
            'pill border disabled:cursor-not-allowed disabled:opacity-50',
            mistakesOnly
              ? 'border-rose-300 bg-rose-50 text-rose-700'
              : 'border-slate-200 bg-white text-slate-600 hover:border-rose-200',
          )}
        >
          Mistakes only ({subjectMistakes})
        </button>
      </div>

      <p className="text-xs text-slate-500">
        {selectedCount} of {totalCount} questions selected for this session.
      </p>
    </section>
  );
}
