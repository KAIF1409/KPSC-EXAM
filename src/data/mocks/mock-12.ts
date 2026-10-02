import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 12 — History + Geography combined.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_12: MockExam = defineMock({
  mockNumber: 12,
  title: 'Mock 12 — Karnataka History & Geography',
  focus: 'State-specific Paper 1 section under timed conditions.',
  difficultyMix: 'standard',
  sampleA: [
    m('karnataka-history', 'm12-a1', 'Vijayanagara was founded in which year?', ['1336 CE', '1347 CE', '1399 CE', '1446 CE'], 0, 'Harihara and Bukka founded it in 1336 CE.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm12-b1', 'ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಜನಪದ ಪ್ರಶಸ್ತಿ ಸಂಸ್ಥೆ ಯಾವುದು?', ['ಕರ್ನಾಟಕ ಜಾನಪದ ಅಕಾಡೆಮಿ', 'ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತು', 'ಕರ್ನಾಟಕ ಸಾಹಿತ್ಯ ಅಕಾಡೆಮಿ', 'ಕರ್ನಾಟಕ ನಾಟಕ ಅಕಾಡೆಮಿ'], 0, 'ಜಾನಪದ ಸಾಹಿತ್ಯ ಮತ್ತು ಕಲೆಗಾಗಿ ಕರ್ನಾಟಕ ಜಾನಪದ ಅಕಾಡೆಮಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.', 'hard'),
  ],
});
