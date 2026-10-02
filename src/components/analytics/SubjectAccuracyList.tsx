import type { SubjectAccuracy } from '@/lib/progress';
import { accuracyTone, cn } from '@/lib/utils';

interface SubjectAccuracyListProps {
  items: SubjectAccuracy[];
  /** Highlights the three weakest subjects with a warning tone. */
  weakestIds?: string[];
}

/** Per-subject accuracy comparison bars. */
export function SubjectAccuracyList({ items, weakestIds = [] }: SubjectAccuracyListProps) {
  const attempted = items.filter((item) => item.attempted > 0);
  const untouched = items.filter((item) => item.attempted === 0);

  return (
    <div className="card p-5">
      <h2 className="text-base font-semibold text-slate-900">Subject-wise accuracy</h2>
      <p className="mt-0.5 text-sm text-slate-500">
        Ordered weakest first — that is your study order for tomorrow.
      </p>

      {attempted.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">
          Nothing attempted yet. Start with Day 1 or open a subject in the practice hub.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {[...attempted]
            .sort((a, b) => a.accuracy - b.accuracy)
            .map((item) => {
              const isWeak = weakestIds.includes(item.subject.id);
              return (
                <li key={item.subject.id}>
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-2 text-slate-700">
                      {item.subject.name}
                      {isWeak ? (
                        <span className="pill border-rose-200 bg-rose-50 text-rose-600">Weakest 3</span>
                      ) : null}
                    </span>
                    <span className={cn('font-semibold', accuracyTone(item.accuracy))}>
                      {item.correct}/{item.attempted} · {item.accuracy}%
                    </span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={cn(
                        'h-full rounded-full',
                        item.accuracy >= 75
                          ? 'bg-emerald-500'
                          : item.accuracy >= 50
                            ? 'bg-amber-500'
                            : 'bg-rose-500',
                      )}
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      )}

      {untouched.length > 0 ? (
        <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
          Not attempted yet: {untouched.map((item) => item.subject.name).join(', ')}.
        </p>
      ) : null}
    </div>
  );
}
