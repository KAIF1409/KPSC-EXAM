import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 02 — General Science heavyweight.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_02: MockExam = defineMock({
  mockNumber: 2,
  title: 'Mock 2 — General Science Heavy',
  focus: 'Physics, chemistry and biology recall at exam speed.',
  difficultyMix: 'foundation',
  sampleA: [
    m('general-science', 'm02-a1', 'The SI unit of work is:', ['Newton', 'Joule', 'Watt', 'Pascal'], 1, 'Work and energy are measured in joules (J).', 'easy'),
  ],
  sampleB: [
    m('computer-literacy', 'm02-b1', 'One megabyte equals:', ['1000 KB', '1024 KB', '1024 bytes', '512 KB'], 1, '1 MB = 1024 KB; 1 KB = 1024 bytes.', 'easy'),
  ],
});
