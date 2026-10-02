import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 16 — Current affairs & economy.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_16: MockExam = defineMock({
  mockNumber: 16,
  title: 'Mock 16 — Current Affairs & Economy',
  focus: 'GST, RBI tools, inflation indices and state fiscal facts.',
  difficultyMix: 'standard',
  sampleA: [
    m('current-affairs', 'm16-a1', 'Reverse repo rate is the rate at which:', ['RBI borrows from banks', 'RBI lends to banks', 'Banks lend to customers', 'Banks borrow abroad'], 0, 'Reverse repo = RBI absorbs liquidity from banks.', 'medium'),
  ],
  sampleB: [
    m('english', 'm16-b1', 'Choose the antonym of "ancient":', ['Modern', 'Old', 'Historic', 'Antique'], 0, 'Ancient ↔ modern.', 'easy'),
  ],
});
