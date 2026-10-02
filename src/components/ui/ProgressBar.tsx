import { cn } from '@/lib/utils';

interface ProgressBarProps {
  /** 0-100 */
  value: number;
  label?: string;
  /** Right-aligned caption, e.g. "5 / 30 days". */
  caption?: string;
  tone?: 'brand' | 'emerald' | 'amber' | 'rose';
  size?: 'sm' | 'md';
  /** Optional milestone ticks rendered on the track (e.g. [25, 50, 75]). */
  milestones?: number[];
  className?: string;
}

const TONE_CLASSES = {
  brand: 'bg-brand-600',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
};

/** Accessible progress bar (role=progressbar) with optional milestone markers. */
export function ProgressBar({
  value,
  label,
  caption,
  tone = 'brand',
  size = 'md',
  milestones = [],
  className,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      {label || caption ? (
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>{label}</span>
          <span>{caption}</span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Progress'}
        className={cn(
          'relative w-full overflow-hidden rounded-full bg-slate-200',
          size === 'sm' ? 'h-1.5' : 'h-2.5',
        )}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-500', TONE_CLASSES[tone])}
          style={{ width: `${clamped}%` }}
        />
        {milestones.map((milestone) => (
          <span
            key={milestone}
            className="absolute top-0 h-full w-0.5 bg-white/70"
            style={{ left: `${milestone}%` }}
          />
        ))}
      </div>
    </div>
  );
}
