'use client';

import { AlarmClock, Clock, PauseCircle } from 'lucide-react';
import { cn, formatClock } from '@/lib/utils';

interface TimerBadgeProps {
  remainingSeconds: number;
  paused?: boolean;
  totalSeconds: number;
  className?: string;
}

/**
 * Countdown display for strict mock mode.
 * Tone escalates at 30 / 10 / 5 minutes so the learner feels the paper closing.
 */
export function TimerBadge({ remainingSeconds, totalSeconds, paused, className }: TimerBadgeProps) {
  const fraction = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;

  const tone = paused
    ? 'border-slate-300 bg-slate-100 text-slate-600'
    : remainingSeconds <= 300
      ? 'border-rose-300 bg-rose-50 text-rose-700'
      : remainingSeconds <= 1800
        ? 'border-amber-300 bg-amber-50 text-amber-700'
        : 'border-emerald-200 bg-emerald-50 text-emerald-700';

  const Icon = paused ? PauseCircle : remainingSeconds <= 300 ? AlarmClock : Clock;

  return (
    <div className={cn('flex items-center gap-3 rounded-xl border px-3 py-2', tone, className)}>
      <Icon className="h-4 w-4" />
      <span className="font-mono text-lg font-semibold tabular-nums">
        {formatClock(remainingSeconds)}
      </span>
      <span className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-white/70 sm:block">
        <span
          className="block h-full rounded-full bg-current transition-all"
          style={{ width: `${Math.max(0, Math.min(100, fraction * 100))}%` }}
        />
      </span>
    </div>
  );
}
