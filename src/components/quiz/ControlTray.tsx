'use client';

import { ChevronLeft, ChevronRight, Flag, RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ControlTrayProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLast: boolean;
  answeredCount: number;
  total: number;
  correctCount: number;
  markedCount: number;
  onRetry?: () => void;
  /** Label for the trailing primary action (changes on the last question). */
  completeLabel?: string;
  onComplete?: () => void;
}

/**
 * Floating footer control tray for practice-mode screens.
 * Mock exams use a different, stricter tray (see ExamControlBar).
 */
export function ControlTray({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLast,
  answeredCount,
  total,
  correctCount,
  markedCount,
  onRetry,
  completeLabel = 'Finish set',
  onComplete,
}: ControlTrayProps) {
  const progress = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  return (
    <div className="sticky bottom-4 z-30 mt-6">
      <div className="card mx-auto flex flex-col gap-3 px-4 py-3 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 text-emerald-600" />
            {correctCount}/{answeredCount} correct
          </span>
          <span className="flex items-center gap-1.5">
            <Flag className="h-3.5 w-3.5 text-amber-500" />
            {markedCount} marked
          </span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>
              {answeredCount}/{total}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onRetry ? (
            <button type="button" onClick={onRetry} className="btn-ghost">
              <RotateCcw className="h-4 w-4" />
              Restart
            </button>
          ) : null}
          <button
            type="button"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="btn-ghost"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={onComplete}
              disabled={!onComplete}
              className={cn('btn-primary', !onComplete && 'opacity-50')}
            >
              {completeLabel}
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={onNext} disabled={!canGoNext} className="btn-primary">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
