import { cn } from '@/lib/utils';

/**
 * Skeleton placeholder. Screens that render persisted numbers wrap their content
 * in this while `useHydrated()` is false, which keeps SSR and CSR markup identical.
 */
export function LoadingBlock({ rows = 3, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn('card space-y-3 p-5', className)} aria-busy="true" aria-live="polite">
      <div className="skeleton h-5 w-1/3" />
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="skeleton h-4"
          style={{ width: `${92 - index * 9}%` }}
        />
      ))}
    </div>
  );
}
