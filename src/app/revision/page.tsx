'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BookmarkCheck, Layers, RefreshCcw, Trash2, XCircle } from 'lucide-react';
import { questionsByIds } from '@/data';
import { mockMistakeIds } from '@/lib/progress';
import { useHydrated, useVaoStore } from '@/lib/store';
import { cn, uniqueBy } from '@/lib/utils';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { QuestionRunner } from '@/components/quiz/QuestionRunner';

type Source = 'all' | 'bookmarked' | 'practice' | 'mock';

const SOURCES: Array<{ value: Source; label: string }> = [
  { value: 'all', label: 'Everything' },
  { value: 'bookmarked', label: 'Bookmarked' },
  { value: 'practice', label: 'Practice mistakes' },
  { value: 'mock', label: 'Mock mistakes' },
];

/**
 * Revision Zone — one instant-reveal session built from every flag across all
 * three pillars: bookmarks, practice-bank mistakes and submitted-mock mistakes.
 */
export default function RevisionPage() {
  const hydrated = useHydrated();
  const state = useVaoStore();
  const clearWrongAnswers = useVaoStore((store) => store.clearWrongAnswers);
  const [source, setSource] = useState<Source>('all');
  const [sessionSeed, setSessionSeed] = useState(1);

  const mockMistakes = useMemo(() => mockMistakeIds(state), [state]);
  const bookmarked = state.bookmarkedIds;
  const practiceMistakes = state.wrongIds;

  const selected = useMemo(() => {
    if (source === 'bookmarked') return questionsByIds(bookmarked);
    if (source === 'practice') return questionsByIds(practiceMistakes);
    if (source === 'mock') return questionsByIds(mockMistakes);
    return uniqueBy(
      questionsByIds([...bookmarked, ...practiceMistakes, ...mockMistakes]),
      (question) => question.id,
    );
  }, [source, bookmarked, practiceMistakes, mockMistakes]);

  if (!hydrated) return <LoadingBlock rows={5} />;

  const total = bookmarked.length + practiceMistakes.length + mockMistakes.length;

  return (
    <>
      <PageHeader
        title="Revision Zone"
        kannadaTitle="ಪುನರಾವರ್ತನಾ ವಲಯ"
        subtitle="Every bookmarked and wrongly answered question — from day sets, the practice bank and submitted mock papers — in one re-test session."
        icon={<RefreshCcw className="h-5 w-5" />}
        actions={
          <>
            <button
              type="button"
              onClick={() => setSessionSeed((seed) => seed + 1)}
              className="btn-ghost"
            >
              <RefreshCcw className="h-4 w-4" />
              Reshuffle
            </button>
            {practiceMistakes.length > 0 ? (
              <button type="button" className="btn-danger" onClick={() => clearWrongAnswers()}>
                <Trash2 className="h-4 w-4" />
                Clear mistake ledger
              </button>
            ) : null}
          </>
        }
      />

      <section className="mb-5 grid gap-3 sm:grid-cols-3">
        <RevisionStat
          icon={<BookmarkCheck className="h-3.5 w-3.5" />}
          tone="text-amber-600"
          label="Bookmarked"
          value={bookmarked.length}
          hint="Flagged manually while practising"
        />
        <RevisionStat
          icon={<XCircle className="h-3.5 w-3.5" />}
          tone="text-rose-600"
          label="Practice mistakes"
          value={practiceMistakes.length}
          hint="Auto-cleared when answered correctly"
        />
        <RevisionStat
          icon={<Layers className="h-3.5 w-3.5" />}
          tone="text-slate-600"
          label="Mock mistakes"
          value={mockMistakes.length}
          hint="From submitted, scored mock papers"
        />
      </section>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {SOURCES.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSource(option.value)}
            aria-pressed={source === option.value}
            className={cn(
              'pill border',
              source === option.value
                ? 'border-brand-300 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300',
            )}
          >
            {option.label}
          </button>
        ))}
        <span className="text-xs text-slate-500">
          {selected.length} of {total} flagged questions in this session
        </span>
      </div>

      {selected.length === 0 ? (
        <EmptyState
          icon={<RefreshCcw className="h-5 w-5" />}
          title="Nothing pending revision"
          message="Answer questions in the day program, the practice hub or a mock paper — anything wrong or bookmarked lands here automatically."
          action={
            <Link href="/practice" className="btn-primary">
              Start practising
            </Link>
          }
        />
      ) : (
        <QuestionRunner
          key={`${source}-${sessionSeed}`}
          questions={selected}
          shuffleSeed={sessionSeed}
        />
      )}
    </>
  );
}

interface RevisionStatProps {
  icon: React.ReactNode;
  tone: string;
  label: string;
  value: number;
  hint: string;
}

function RevisionStat({ icon, tone, label, value, hint }: RevisionStatProps) {
  return (
    <div className="card p-4">
      <p className={cn('flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide', tone)}>
        {icon} {label}
      </p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{hint}</p>
    </div>
  );
}
