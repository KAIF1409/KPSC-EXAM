import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 03 — Polity & Constitution focus.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_03: MockExam = defineMock({
  mockNumber: 3,
  title: 'Mock 3 — Polity & Constitution',
  focus: 'Article-number accuracy and constitutional bodies.',
  difficultyMix: 'foundation',
  sampleA: [
    m('polity-governance', 'm03-a1', 'Which Article relates to the writ jurisdiction of High Courts?', ['Article 32', 'Article 226', 'Article 324', 'Article 148'], 1, 'Article 226 (High Court) versus Article 32 (Supreme Court).', 'medium'),
  ],
  sampleB: [
    m('kannada', 'm03-b1', 'ಕನ್ನಡ ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಒಟ್ಟು ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ:', ['ನಲವತ್ತೆಂಟು', 'ಐವತ್ತು', 'ಐವತ್ತೆರಡು', 'ಐವತ್ತನಾಲ್ಕು'], 1, '14 ಸ್ವರ + 34 ವ್ಯಂಜನ + 2 ಯೋಗವಾಹಕ = 50.', 'hard'),
  ],
});
