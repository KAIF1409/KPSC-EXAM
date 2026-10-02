'use client';

import Link from 'next/link';
import { MOCKS, mockById } from '@/data';
import { useHydrated } from '@/lib/store';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingBlock } from '@/components/ui/LoadingBlock';
import { ExamRunner } from '@/components/mocks/ExamRunner';

interface MockExamPageProps {
  params: { id: string };
}

/** Route shell for /mocks/[id] — data lookup + hydration gate only. */
export default function MockExamPage({ params }: MockExamPageProps) {
  const hydrated = useHydrated();
  const mock = mockById(params.id);

  if (!hydrated) return <LoadingBlock rows={6} />;

  if (!mock) {
    return (
      <EmptyState
        title="Mock exam not found"
        message={`There are ${MOCKS.length} mock exams, named mock-01 to mock-30. "${params.id}" does not exist.`}
        action={
          <Link href="/mocks" className="btn-primary">
            Back to mock hub
          </Link>
        }
      />
    );
  }

  return <ExamRunner mock={mock} />;
}
