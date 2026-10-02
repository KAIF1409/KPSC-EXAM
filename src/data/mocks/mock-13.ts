import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 13 — Land revenue & village administration drill.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_13: MockExam = defineMock({
  mockNumber: 13,
  title: 'Mock 13 — Land Revenue Deep Drill',
  focus: 'Every Act, term and hierarchy question in one strict paper.',
  difficultyMix: 'standard',
  sampleA: [
    m('land-revenue', 'm13-a1', 'The revenue administration of a village is handled by the:', ['Village Accountant', 'Tahsildar', 'Assistant Commissioner', 'Deputy Commissioner'], 0, 'The Village Accountant is the lowest rung of the revenue hierarchy.', 'easy'),
  ],
  sampleB: [
    m('english', 'm13-b1', 'Fill in the blank: "The committee comprises ___ members."', ['of', 'with', 'no preposition needed', 'from'], 2, '"Comprise" takes no preposition: the whole comprises the parts.', 'hard'),
  ],
});
