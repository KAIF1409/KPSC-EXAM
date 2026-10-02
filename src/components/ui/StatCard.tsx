import { cn } from '@/lib/utils';

type Tone = 'brand' | 'emerald' | 'amber' | 'rose' | 'slate';

const TONES: Record<Tone, { wrap: string; icon: string; value: string }> = {
  brand: { wrap: 'border-brand-100 bg-brand-50/60', icon: 'bg-brand-600 text-white', value: 'text-brand-900' },
  emerald: { wrap: 'border-emerald-100 bg-emerald-50/60', icon: 'bg-emerald-600 text-white', value: 'text-emerald-900' },
  amber: { wrap: 'border-amber-100 bg-amber-50/60', icon: 'bg-amber-500 text-white', value: 'text-amber-900' },
  rose: { wrap: 'border-rose-100 bg-rose-50/60', icon: 'bg-rose-600 text-white', value: 'text-rose-900' },
  slate: { wrap: 'border-slate-200 bg-white', icon: 'bg-slate-700 text-white', value: 'text-slate-900' },
};

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  hint?: string;
  icon?: React.ReactNode;
  tone?: Tone;
  footer?: React.ReactNode;
  className?: string;
}

/** Compact metric tile used by the dashboard, analytics and results ledgers. */
export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = 'slate',
  footer,
  className,
}: StatCardProps) {
  const styles = TONES[tone];
  return (
    <div className={cn('card border p-4', styles.wrap, className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</p>
          <p className={cn('mt-1 text-2xl font-bold leading-tight', styles.value)}>{value}</p>
          {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
        </div>
        {icon ? (
          <span className={cn('flex h-9 w-9 items-center justify-center rounded-xl', styles.icon)}>
            {icon}
          </span>
        ) : null}
      </div>
      {footer ? <div className="mt-3 border-t border-white/60 pt-3 text-xs text-slate-600">{footer}</div> : null}
    </div>
  );
}
