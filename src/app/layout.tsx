import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';
import { APP_NAME, APP_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} — ${APP_TAGLINE}`,
    template: `%s · ${APP_NAME}`,
  },
  description:
    'Karnataka VAO exam preparation platform: 30-day sequential MCQ program, subject-wise practice bank and 30 full-length mock exams with localStorage progress tracking.',
  keywords: [
    'Karnataka VAO',
    'Village Administrative Officer',
    'KPSC',
    'KEA',
    'MCQ practice',
    'mock tests',
  ],
  applicationName: APP_NAME,
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        Fonts are loaded with a plain <link> (not next/font) on purpose:
        the build must succeed with zero network access, and the CSS stack in
        globals.css already falls back to Nirmala UI / Tunga for Kannada script.
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Kannada:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
