import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /** Small Kannada line rendered under the subtitle (bilingual support). */
  kannadaTitle?: string;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

/** Consistent page title block used by every route. */
export function PageHeader({
  title,
  subtitle,
  kannadaTitle,
  actions,
  icon,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
            {icon}
          </span>
        ) : null}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h1>
          {kannadaTitle ? (
            <p className="kannada text-sm text-slate-500">{kannadaTitle}</p>
          ) : null}
          {subtitle ? <p className="mt-1 max-w-2xl text-sm text-slate-500">{subtitle}</p> : null}
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}
