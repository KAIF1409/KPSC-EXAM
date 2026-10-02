'use client';

import { cn } from '@/lib/utils';

interface QuestionPaletteProps {
  questionIds: string[];
  answers: Record<string, number | null>;
  marked: string[];
  currentIndex: number;
  onJump: (index: number) => void;
}

/**
 * Strict-mode status grid: answered / marked / unanswered / current.
 * Deliberately does NOT reveal correctness — the mock engine blocks instant
 * answer verification until the paper is submitted.
 */
export function QuestionPalette({
  questionIds,
  answers,
  marked,
  currentIndex,
  onJump,
}: QuestionPaletteProps) {
  const answered = questionIds.filter((id) => answers[id] !== undefined && answers[id] !== null);
  const notAnswered = questionIds.filter((id) => answers[id] === undefined || answers[id] === null);

  return (
    <div className="card p-4">
      <div className="mb-3 flex flex-wrap gap-3 text-[11px] font-medium text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-emerald-500" /> Answered ({answered.length})
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-amber-400" /> Marked ({marked.length})
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-slate-300 bg-white" /> Not answered (
          {notAnswered.length})
        </span>
      </div>

      <div className="scroll-slim grid max-h-72 grid-cols-6 gap-1.5 overflow-y-auto sm:grid-cols-8">
        {questionIds.map((id, index) => {
          const isAnswered = answers[id] !== undefined && answers[id] !== null;
          const isMarked = marked.includes(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onJump(index)}
              className={cn(
                'flex h-8 items-center justify-center rounded-lg text-xs font-semibold transition',
                isMarked
                  ? 'bg-amber-400 text-amber-950'
                  : isAnswered
                    ? 'bg-emerald-500 text-white'
                    : 'border border-slate-300 bg-white text-slate-600 hover:border-brand-300',
                index === currentIndex && 'ring-2 ring-brand-500 ring-offset-1',
              )}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
