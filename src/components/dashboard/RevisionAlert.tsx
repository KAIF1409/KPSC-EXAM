import Link from 'next/link';
import { AlertTriangle, ArrowRight, BookmarkCheck, XCircle } from 'lucide-react';

interface RevisionAlertProps {
  bookmarkedCount: number;
  wrongCount: number;
  mockMistakes?: number;
}

/**
 * Global revision alert.
 * Aggregates bookmarks + wrong answers from ALL three pillars (day sets, practice
 * bank, mock exams) and links straight into the Revision Zone.
 */
export function RevisionAlert({ bookmarkedCount, wrongCount, mockMistakes = 0 }: RevisionAlertProps) {
  const total = bookmarkedCount + wrongCount + mockMistakes;
  const urgent = wrongCount + mockMistakes;

  return (
    <section className="card mb-6 border-rose-100 bg-rose-50/40 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              {total === 0
                ? 'No pending revision — clean slate'
                : `${total} question${total === 1 ? '' : 's'} flagged for revision`}
            </h2>
            <p className="mt-0.5 text-sm text-slate-600">
              {total === 0
                ? 'As soon as you answer a question incorrectly it lands here automatically.'
                : 'Re-attempt these until the mistake ledger is empty — that is how accuracy crosses 75%.'}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
              <span className="pill border-amber-200 bg-amber-50 text-amber-700">
                <BookmarkCheck className="h-3.5 w-3.5" /> {bookmarkedCount} bookmarked
              </span>
              <span className="pill border-rose-200 bg-rose-50 text-rose-700">
                <XCircle className="h-3.5 w-3.5" /> {urgent} wrong answers
              </span>
            </div>
          </div>
        </div>

        <Link
          href="/revision"
          className="btn-primary shrink-0"
          aria-label="Open the Revision Zone"
        >
          Re-test now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
