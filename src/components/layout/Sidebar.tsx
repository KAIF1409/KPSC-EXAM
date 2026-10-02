'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Menu,
  RefreshCcw,
  Target,
  X,
} from 'lucide-react';
import { APP_NAME, TARGET_DATE } from '@/lib/constants';
import { useVaoStore } from '@/lib/store';
import { cn, formatDayMonth } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, hint: 'Progress & 30-day grid' },
  { href: '/practice', label: 'Subject-wise Practice', icon: BookOpenCheck, hint: 'Untimed drilling' },
  { href: '/mocks', label: 'Mock Tests (30)', icon: ClipboardList, hint: 'Strict timed papers' },
  { href: '/revision', label: 'Revision Zone', icon: RefreshCcw, hint: 'Bookmarked + mistakes' },
  { href: '/analytics', label: 'Analytics', icon: BarChart3, hint: 'Accuracy & trends' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const registerVisit = useVaoStore((state) => state.registerVisit);

  // Start the 30-day clock on the very first visit.
  useEffect(() => {
    registerVisit();
  }, [registerVisit]);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-slate-900">
          <Target className="h-5 w-5 text-brand-600" />
          {APP_NAME}
        </Link>
        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
        />
      ) : null}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Target className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold leading-tight text-slate-900">{APP_NAME}</span>
              <span className="block text-[11px] font-medium text-slate-500">
                Target: {formatDayMonth(TARGET_DATE)}
              </span>
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="scroll-slim flex-1 space-y-1 overflow-y-auto px-3 pb-4">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition',
                  active
                    ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                )}
              >
                <Icon className={cn('mt-0.5 h-4 w-4', active ? 'text-brand-600' : 'text-slate-400')} />
                <span>
                  <span className="block font-semibold">{item.label}</span>
                  <span className="block text-[11px] text-slate-400">{item.hint}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-xl bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-500">
            <span className="mb-1 flex items-center gap-1.5 font-semibold text-slate-700">
              <CalendarDays className="h-3.5 w-3.5" /> Exam framework
            </span>
            Paper 1: General Knowledge (100 Qs) · Paper 2: Kannada / English / Computer (100 Qs).
          </div>
        </div>
      </aside>
    </>
  );
}
