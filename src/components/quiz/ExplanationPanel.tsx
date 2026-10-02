'use client';

import { BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExplanationPanelProps {
  isCorrect: boolean;
  correctOptionText: string;
  explanation: string;
  reference?: string;
  kannadaExplanation?: string;
  /** Mock-review mode can open the panel pre-expanded. */
  className?: string;
}

/**
 * Animated reveal block that appears the moment an option is tapped.
 * Rendered with the `animate-fade-slide` utility from tailwind.config.ts.
 */
export function ExplanationPanel({
  isCorrect,
  correctOptionText,
  explanation,
  reference,
  kannadaExplanation,
  className,
}: ExplanationPanelProps) {
  return (
    <section
      aria-live="polite"
      className={cn(
        'animate-fade-slide overflow-hidden rounded-2xl border',
        isCorrect ? 'border-emerald-200 bg-emerald-50/60' : 'border-rose-200 bg-rose-50/50',
        className,
      )}
    >
      <header
        className={cn(
          'flex items-center gap-2 border-b px-4 py-3 text-sm font-semibold',
          isCorrect
            ? 'border-emerald-200 text-emerald-800'
            : 'border-rose-200 text-rose-800',
        )}
      >
        {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
        {isCorrect ? 'Correct answer' : 'Not quite — here is the correct answer'}
      </header>

      <div className="space-y-3 px-4 py-4">
        <p className="text-sm font-semibold text-slate-900">
          <span className="mr-2 rounded-md bg-emerald-600 px-2 py-0.5 text-[11px] font-bold text-white">
            ANS
          </span>
          {correctOptionText}
        </p>

        <p className="text-sm leading-relaxed text-slate-700">{explanation}</p>

        {kannadaExplanation ? (
          <p className="kannada text-sm leading-relaxed text-slate-600">{kannadaExplanation}</p>
        ) : null}

        {reference ? (
          <p className="flex items-start gap-2 border-t border-slate-200/70 pt-3 text-xs text-slate-500">
            <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>{reference}</span>
          </p>
        ) : null}
      </div>
    </section>
  );
}
