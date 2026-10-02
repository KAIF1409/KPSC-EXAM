import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 05 — Karnataka Geography focus.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_05: MockExam = defineMock({
  mockNumber: 5,
  title: 'Mock 5 — Karnataka Geography',
  focus: 'Peaks, rivers, dams, minerals and districts.',
  difficultyMix: 'foundation',
  sampleA: [
    m('karnataka-geography', 'm05-a1', 'The highest peak in Karnataka is:', ['Mullayanagiri', 'Kudremukh', 'Pushpagiri', 'Baba Budangiri'], 0, 'Mullayanagiri (1,930 m) in Chikkamagaluru district.', 'easy'),
  ],
  sampleB: [
    m('computer-literacy', 'm05-b1', 'Ctrl + X is used to:', ['Copy', 'Cut', 'Paste', 'Close'], 1, 'Ctrl+X cuts, Ctrl+C copies and Ctrl+V pastes.', 'easy'),
  ],
});
