'use client';

import { ChevronLeft, ChevronRight, Flag, LayoutGrid, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExamControlBarProps {
  index: number;
  total: number;
  answeredCount: number;
  markedCount: number;
  isMarked: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onToggleMark: () => void;
  onOpenPalette: () => void;
  onSubmit: () => void;
}

/**
 * Strict-mode control tray for a mock exam.
 * Note the difference from the practice tray: there is no feedback, no score and
 * no explanation here — only navigation, marking and submission.
 */
export function ExamControlBar({
  index,
  total,
  answeredCount,
  markedCount,
  isMarked,
  onPrevious,
  onNext,
  onToggleMark,
  onOpenPalette,
  onSubmit,
}: ExamControlBarProps) {
  return (
    <div className="sticky bottom-4 z-30 mt-6">
      <div className="card flex flex-col gap-3 px-4 py-3 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span>
            Question {index + 1} of {total}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {answeredCount} answered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            {markedCount} marked
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={onPrevious} disabled={index === 0} className="btn-ghost">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <button
            type="button"
            onClick={onToggleMark}
            aria-pressed={isMarked}
            className={cn('btn-ghost', isMarked && 'border-amber-300 bg-amber-50 text-amber-700')}
          >
            <Flag className="h-4 w-4" />
            {isMarked ? 'Marked' : 'Mark'}
          </button>
          <button type="button" onClick={onOpenPalette} className="btn-ghost">
            <LayoutGrid className="h-4 w-4" />
            Palette
          </button>
          <button type="button" onClick={onNext} disabled={index === total - 1} className="btn-ghost">
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
          <button type="button" onClick={onSubmit} className="btn-primary">
            <Send className="h-4 w-4" />
            Submit paper
          </button>
        </div>
      </div>
    </div>
  );
}
