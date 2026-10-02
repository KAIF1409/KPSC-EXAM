import Link from 'next/link';
import { ArrowUpRight, BarChart3, BookOpenCheck, ClipboardList, RefreshCcw } from 'lucide-react';

interface QuickLaunchProps {
  practiceSubjects: number;
  practiceQuestions: number;
  mockCount: number;
  revisionCount: number;
  completedMocks: number;
}

const TILES = [
  {
    href: '/practice',
    label: 'Subject-wise Practice',
    hint: 'Untimed, shuffled, mistakes-only mode',
    icon: BookOpenCheck,
    tone: 'bg-brand-50 text-brand-700 ring-brand-100',
  },
  {
    href: '/mocks',
    label: 'Mock Tests',
    hint: 'Strict mode · 120 min per paper',
    icon: ClipboardList,
    tone: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    href: '/revision',
    label: 'Revision Zone',
    hint: 'Bookmarked + wrong answers combined',
    icon: RefreshCcw,
    tone: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    href: '/analytics',
    label: 'Analytics',
    hint: 'Accuracy, streaks and weak subjects',
    icon: BarChart3,
    tone: 'bg-slate-100 text-slate-700 ring-slate-200',
  },
] as const;

/** Four quick-launch tiles under the progress bar. */
export function QuickLaunch({
  practiceSubjects,
  practiceQuestions,
  mockCount,
  revisionCount,
  completedMocks,
}: QuickLaunchProps) {
  const detail: Record<string, string> = {
    '/practice': `${practiceSubjects} subjects · ${practiceQuestions} questions`,
    '/mocks': `${completedMocks} of ${mockCount} completed`,
    '/revision': `${revisionCount} questions pending`,
    '/analytics': 'See your weakest 3 subjects',
  };

  return (
    <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {TILES.map((tile) => {
        const Icon = tile.icon;
        return (
          <Link key={tile.href} href={tile.href} className="card card-hover group p-4">
            <div className="flex items-center justify-between">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${tile.tone}`}>
                <Icon className="h-4 w-4" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-brand-500" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900">{tile.label}</p>
            <p className="text-xs text-slate-500">{tile.hint}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              {detail[tile.href]}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
