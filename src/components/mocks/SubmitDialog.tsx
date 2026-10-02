'use client';

import { AlertTriangle } from 'lucide-react';

interface SubmitDialogProps {
  open: boolean;
  answered: number;
  total: number;
  marked: number;
  /** True when the learner is on the final paper of the exam. */
  isFinalPaper: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

/** Confirmation overlay shown before a paper is locked and scored. */
export function SubmitDialog({
  open,
  answered,
  total,
  marked,
  isFinalPaper,
  onCancel,
  onConfirm,
}: SubmitDialogProps) {
  if (!open) return null;

  const pending = total - answered;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-dialog-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 p-4 sm:items-center"
    >
      <div className="card w-full max-w-md p-5">
        <header className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div>
            <h2 id="submit-dialog-title" className="text-base font-semibold text-slate-900">
              {isFinalPaper ? 'Submit the full exam?' : 'Move on to Paper 2?'}
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              {isFinalPaper
                ? 'Once submitted you cannot change your answers — you will get the results ledger immediately.'
                : 'Paper 1 will be locked. Paper 2 gets a fresh 120-minute timer.'}
            </p>
          </div>
        </header>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-xl bg-slate-50 p-2.5">
            <dt className="text-slate-500">Answered</dt>
            <dd className="text-lg font-bold text-emerald-600">{answered}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-2.5">
            <dt className="text-slate-500">Pending</dt>
            <dd className="text-lg font-bold text-rose-600">{pending}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-2.5">
            <dt className="text-slate-500">Marked</dt>
            <dd className="text-lg font-bold text-amber-600">{marked}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className="btn-ghost">
            Keep working
          </button>
          <button type="button" onClick={onConfirm} className="btn-primary">
            {isFinalPaper ? 'Submit exam' : 'Lock Paper 1 & start Paper 2'}
          </button>
        </div>
      </div>
    </div>
  );
}
