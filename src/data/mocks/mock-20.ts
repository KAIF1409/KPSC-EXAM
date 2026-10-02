import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 20 — Karnataka comprehensive (history + geography + economy).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_20: MockExam = defineMock({
  mockNumber: 20,
  title: 'Mock 20 — Karnataka Comprehensive',
  focus: 'Everything state-specific in one paper, standard difficulty.',
  difficultyMix: 'standard',
  sampleA: [
    m('karnataka-history', 'm20-a1', 'Karnataka Rajyotsava is celebrated on:', ['1 November', '26 January', '15 August', '1 May'], 0, '1 November 1956 — the day of linguistic unification.', 'easy'),
  ],
  sampleB: [
    m('computer-literacy', 'm20-b1', 'The file extension of an MS Word 2016 document is:', ['.txt', '.docx', '.rtf', '.pdf'], 1, '.docx is the default Word format.', 'easy'),
  ],
});
