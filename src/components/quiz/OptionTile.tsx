'use client';

import { Check, Circle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'reveal' | 'muted';

interface OptionTileProps {
  /** "A" | "B" | "C" | "D" */
  label: string;
  text: string;
  kannadaText?: string;
  state: OptionState;
  disabled?: boolean;
  onClick?: () => void;
}

const STATE_STYLES: Record<OptionState, string> = {
  idle: 'border-slate-200 bg-white hover:border-brand-300 hover:bg-brand-50/40',
  selected: 'border-brand-500 bg-brand-50 text-brand-900',
  correct: 'border-emerald-500 bg-emerald-50 text-emerald-900',
  wrong: 'border-rose-500 bg-rose-50 text-rose-900',
  reveal: 'border-emerald-400 bg-white text-emerald-800',
  muted: 'border-slate-200 bg-slate-50 text-slate-400',
};

const LABEL_STYLES: Record<OptionState, string> = {
  idle: 'bg-slate-100 text-slate-600',
  selected: 'bg-brand-600 text-white',
  correct: 'bg-emerald-600 text-white',
  wrong: 'bg-rose-600 text-white',
  reveal: 'bg-emerald-100 text-emerald-700',
  muted: 'bg-slate-200 text-slate-500',
};

/**
 * Selectable answer tile.
 *
 * Real buttons (not native radios) so keyboard + screen-reader users get the
 * same experience: Enter/Space selects, aria-pressed announces the choice.
 */
export function OptionTile({
  label,
  text,
  kannadaText,
  state,
  disabled,
  onClick,
}: OptionTileProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={state === 'selected' || state === 'correct' || state === 'wrong'}
      aria-pressed={state === 'correct' || state === 'wrong'}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition duration-150',
        STATE_STYLES[state],
        disabled ? 'cursor-default' : 'active:scale-[0.995]',
        state === 'correct' && 'ring-1 ring-emerald-300',
        state === 'wrong' && 'ring-1 ring-rose-300',
      )}
    >
      <span
        className={cn(
          'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold',
          LABEL_STYLES[state],
        )}
      >
        {state === 'correct' ? (
          <Check className="h-4 w-4" />
        ) : state === 'wrong' ? (
          <X className="h-4 w-4" />
        ) : state === 'reveal' ? (
          <Check className="h-3.5 w-3.5" />
        ) : state === 'muted' ? (
          <Circle className="h-2.5 w-2.5 fill-current" />
        ) : (
          label
        )}
      </span>
      <span className="flex-1">
        <span className="block text-[15px] font-medium leading-relaxed text-inherit">{text}</span>
        {kannadaText ? (
          <span className="kannada mt-1 block text-sm text-slate-500">{kannadaText}</span>
        ) : null}
      </span>
    </button>
  );
}

export const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;
