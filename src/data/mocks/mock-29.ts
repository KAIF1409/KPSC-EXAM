import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 29 — Aptitude & reasoning heavy.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_29: MockExam = defineMock({
  mockNumber: 29,
  title: 'Mock 29 — Aptitude & Reasoning Heavy',
  focus: 'Calculation speed and pattern spotting — the last scoring lever.',
  difficultyMix: 'advanced',
  sampleA: [
    m('aptitude', 'm29-a1', 'A train travels 240 km in 3 hours. Its average speed is:', ['60 km/h', '70 km/h', '80 km/h', '90 km/h'], 2, '240 ÷ 3 = 80 km/h.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm29-b1', 'ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳ ಸಂಖ್ಯೆ:', ['ಆರು', 'ಏಳು', 'ಎಂಟು', 'ಒಂಬತ್ತು'], 2, 'ಕನ್ನಡದಲ್ಲಿ ಎಂಟು ವಿಭಕ್ತಿಗಳಿವೆ.', 'medium'),
  ],
});
