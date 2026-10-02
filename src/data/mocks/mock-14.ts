import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 14 — Language speed paper (Paper 2 only focus).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_14: MockExam = defineMock({
  mockNumber: 14,
  title: 'Mock 14 — Language Speed Paper',
  focus: 'Kannada, English and computer questions at 40 seconds each.',
  difficultyMix: 'standard',
  sampleA: [
    m('general-science', 'm14-a1', 'Which vitamin deficiency causes night blindness?', ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin K'], 0, 'Vitamin A (retinol) is essential for vision in dim light.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm14-b1', '"ಆದಿಕವಿ" ಎಂದು ಕರೆಯಲ್ಪಡುವ ಕವಿ:', ['ಪಂಪ', 'ರನ್ನ', 'ಜನ್ನ', 'ಕುಮಾರವ್ಯಾಸ'], 0, 'ಪಂಪ — ಕನ್ನಡದ ಆದಿಕವಿ.', 'easy'),
  ],
});
