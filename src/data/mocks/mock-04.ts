import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 04 — Karnataka History focus.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_04: MockExam = defineMock({
  mockNumber: 4,
  title: 'Mock 4 — Karnataka History',
  focus: 'Inscriptions, dynasties and the unification movement.',
  difficultyMix: 'foundation',
  sampleA: [
    m('karnataka-history', 'm04-a1', 'The Halmidi inscription belongs to which district?', ['Hassan', 'Shivamogga', 'Belagavi', 'Kalaburagi'], 0, 'Halmidi (Hassan) — the earliest Kannada inscription; Talagunda is in Shivamogga.', 'medium'),
  ],
  sampleB: [
    m('english', 'm04-b1', 'Choose the correct sentence:', ['We discussed about the plan.', 'We discussed the plan.', 'We discussed on the plan.', 'We discussed for the plan.'], 1, '"Discuss" takes no preposition in the active voice.', 'easy'),
  ],
});
