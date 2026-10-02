import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 23 — English grammar intensive.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_23: MockExam = defineMock({
  mockNumber: 23,
  title: 'Mock 23 — English Grammar Intensive',
  focus: 'All seven high-frequency rules under pressure, advanced sets.',
  difficultyMix: 'advanced',
  sampleA: [
    m('aptitude', 'm23-a1', 'The square root of 2025 is:', ['35', '40', '45', '55'], 2, '45 × 45 = 2025.', 'hard'),
  ],
  sampleB: [
    m('english', 'm23-b1', 'Fill in the blank: "Scarcely had she entered the hall ___ the lights went off."', ['than', 'when', 'then', 'that'], 1, 'Scarcely/hardly always take "when".', 'hard'),
  ],
});
