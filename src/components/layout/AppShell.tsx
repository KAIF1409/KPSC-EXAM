'use client';

import { Sidebar } from '@/components/layout/Sidebar';

/**
 * Application chrome: fixed sidebar on desktop, slide-in drawer on mobile.
 * Children render inside a max-width content column with consistent padding.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="lg:pl-72">
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
