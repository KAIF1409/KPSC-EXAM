import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  message?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, message, action, className }: EmptyStateProps) {
  return (
    <div className={cn('card flex flex-col items-center px-6 py-12 text-center', className)}>
      {icon ? (
        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          {icon}
        </span>
      ) : null}
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {message ? <p className="mt-1 max-w-md text-sm text-slate-500">{message}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
