import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 10 — First standard full-length (end of the foundation block).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_10: MockExam = defineMock({
  mockNumber: 10,
  title: 'Mock 10 — Standard Full-Length (Paper 1 + 2)',
  focus: 'Two-hour strict mode on the complete framework.',
  difficultyMix: 'foundation',
  sampleA: [
    m('aptitude', 'm10-a1', 'The LCM of 12 and 18 is:', ['24', '36', '48', '54'], 1, '12 = 2²×3 and 18 = 2×3² → LCM = 36.', 'medium'),
  ],
  sampleB: [
    m('english', 'm10-b1', 'One word for "a person who studies birds":', ['Ornithologist', 'Entomologist', 'Botanist', 'Zoologist'], 0, 'Entomology = insects, botany = plants.', 'medium'),
  ],
});
