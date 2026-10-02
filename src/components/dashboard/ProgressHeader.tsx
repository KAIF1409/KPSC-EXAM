'use client';

import Link from 'next/link';
import { CalendarClock, Flame, RefreshCcw, Target, TrendingUp } from 'lucide-react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatCard } from '@/components/ui/StatCard';
import { PROGRAM_LENGTH } from '@/lib/constants';
import { formatDayMonth } from '@/lib/utils';

interface ProgressHeaderProps {
  dayNumber: number;
  completedCount: number;
  progressPercent: number;
  daysRemaining: number;
  streak: number;
  accuracy: number;
  revisionCount: number;
  attemptedCount: number;
  totalQuestions: number;
  targetDate: string;
}

/**
 * Dashboard top bar: overall preparation status, milestone markers, streak,
 * the "days remaining" countdown and the quick-launch button for the Revision Zone.
 */
export function ProgressHeader({
  dayNumber,
  completedCount,
  progressPercent,
  daysRemaining,
  streak,
  accuracy,
  revisionCount,
  attemptedCount,
  totalQuestions,
  targetDate,
}: ProgressHeaderProps) {
  return (
    <section className="card mb-6 overflow-hidden">
      <div className="flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-md">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Day {dayNumber} of {PROGRAM_LENGTH} · Target {formatDayMonth(targetDate)}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {completedCount === 0
              ? 'Start your 30-day run'
              : completionMessage(completedCount, progressPercent)}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {daysRemaining > 0
              ? `${daysRemaining} days left to exam day. One day set + one mock review per day keeps you on pace.`
              : 'Exam window is here — switch to full revision and mock review only.'}
          </p>

          <ProgressBar
            className="mt-4"
            value={progressPercent}
            tone="brand"
            milestones={[25, 50, 75]}
            label="Syllabus completed"
            caption={`${completedCount} / ${PROGRAM_LENGTH} days`}
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/revision" className="btn-ghost">
              <RefreshCcw className="h-4 w-4" />
              Quick-launch Revision Zone
            </Link>
            <Link href="/mocks" className="btn-primary">
              Take a mock test
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 lg:w-auto lg:grid-cols-2">
          <StatCard
            label="Days remaining"
            value={daysRemaining}
            hint={formatDayMonth(targetDate)}
            tone="amber"
            icon={<CalendarClock className="h-4 w-4" />}
          />
          <StatCard
            label="Streak"
            value={`${streak} ${streak === 1 ? 'day' : 'days'}`}
            hint="Consecutive days practised"
            tone="brand"
            icon={<Flame className="h-4 w-4" />}
          />
          <StatCard
            label="Accuracy"
            value={`${accuracy}%`}
            hint={`${attemptedCount} of ${totalQuestions} questions attempted`}
            tone="emerald"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <StatCard
            label="Needs revision"
            value={revisionCount}
            hint="Bookmarked + wrong answers"
            tone="rose"
            icon={<Target className="h-4 w-4" />}
          />
        </div>
      </div>
    </section>
  );
}

function completionMessage(completedCount: number, progressPercent: number): string {
  if (progressPercent >= 100) return 'Syllabus complete — now drill mocks and revision';
  if (completedCount >= 20) return 'Final stretch: revision + mock discipline';
  if (completedCount >= 10) return 'You are past the halfway mindset';
  return `${completedCount} of ${PROGRAM_LENGTH} days done — keep the chain intact`;
}
