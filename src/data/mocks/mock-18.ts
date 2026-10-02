import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 18 — Science: chemistry and biology heavy.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_18: MockExam = defineMock({
  mockNumber: 18,
  title: 'Mock 18 — Chemistry & Biology Heavy',
  focus: 'Formulae, alloys, deficiency diseases and organelle facts.',
  difficultyMix: 'standard',
  sampleA: [
    m('general-science', 'm18-a1', 'Bronze is an alloy of:', ['Copper and Zinc', 'Copper and Tin', 'Iron and Nickel', 'Lead and Tin'], 1, 'Bronze = Cu + Sn; brass = Cu + Zn.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm18-b1', '"ಗದುಗಿನ ಭಾರತ" ಕೃತಿಯ ಕರ್ತೃ:', ['ಕುಮಾರವ್ಯಾಸ', 'ಪಂಪ', 'ಜನ್ನ', 'ರನ್ನ'], 0, 'ಕುಮಾರವ್ಯಾಸ — ಗದುಗಿನ ಭಾರತ.', 'easy'),
  ],
});
