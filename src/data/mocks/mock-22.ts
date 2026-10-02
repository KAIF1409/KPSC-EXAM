import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 22 — Kannada scholarship paper.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_22: MockExam = defineMock({
  mockNumber: 22,
  title: 'Mock 22 — Kannada Scholarship Paper',
  focus: 'Grammar, prosody and literary history at advanced level.',
  difficultyMix: 'advanced',
  sampleA: [
    m('karnataka-history', 'm22-a1', 'Who renamed Mysore State as Karnataka?', ['The State legislature through the 1973 Act of Parliament', 'The Governor', 'The Chief Justice', 'The President'], 0, 'The Mysore State (Alteration of Name) Act, 1973 renamed the State with effect from 1 November 1973.', 'hard'),
  ],
  sampleB: [
    m('kannada', 'm22-b1', 'ಸಮಾಸ ಮತ್ತು ಸಂಧಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಮುಖ ಲಕ್ಷಣ ಗ್ರಂಥ:', ['ಕವಿರಾಜಮಾರ್ಗ', 'ವಿಕ್ರಮಾರ್ಜುನ ವಿಜಯ', 'ಗದುಗಿನ ಭಾರತ', 'ಕಗ್ಗ'], 0, 'ಕವಿರಾಜಮಾರ್ಗ — ಕನ್ನಡದ ಮೊದಲ ಲಕ್ಷಣ ಗ್ರಂಥ.', 'hard'),
  ],
});
