import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 09 — Current affairs & Karnataka schemes.
 * // TODO: PASTE_PARSED_MCQS_HERE — refresh with the latest month-wise PDF.
 */
export const MOCK_09: MockExam = defineMock({
  mockNumber: 9,
  title: 'Mock 9 — Current Affairs & State Schemes',
  focus: 'Guarantee schemes, committees and state economy facts.',
  difficultyMix: 'foundation',
  sampleA: [
    m('current-affairs', 'm09-a1', 'Yuva Nidhi scheme of Karnataka supports:', ['Unemployed educated youth', 'Farmers', 'Fishermen', 'Auto drivers'], 0, 'It provides a monthly allowance to eligible unemployed youth for a limited period.', 'medium'),
  ],
  sampleB: [
    m('kannada', 'm09-b1', '"ನಾಕುತಂತಿ" ಕೃತಿಗೆ ಜ್ಞಾನಪೀಠ ಪಡೆದವರು:', ['ದ. ರಾ. ಬೇಂದ್ರೆ', 'ಕುವೆಂಪು', 'ಶಿವರಾಮ ಕಾರಂತ', 'ಮಾಸ್ತಿ'], 0, 'ದ. ರಾ. ಬೇಂದ್ರೆ (1973) — ನಾಕುತಂತಿ.', 'medium'),
  ],
});
