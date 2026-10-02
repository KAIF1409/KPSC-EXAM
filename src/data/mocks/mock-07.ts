import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 07 — Language paper (Kannada + English).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_07: MockExam = defineMock({
  mockNumber: 7,
  title: 'Mock 7 — Kannada & English Language Paper',
  focus: 'Paper 2 language speed drill with full marking.',
  difficultyMix: 'foundation',
  sampleA: [
    m('karnataka-geography', 'm07-a1', 'Jog Falls is formed by which river?', ['Sharavathi', 'Kali', 'Kabini', 'Netravathi'], 0, 'The Sharavathi plunges at Jog Falls in Shivamogga district.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm07-b1', 'ಕನ್ನಡಕ್ಕೆ ಮೊದಲ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಪಡೆದವರು:', ['ಕುವೆಂಪು', 'ದ. ರಾ. ಬೇಂದ್ರೆ', 'ಮಾಸ್ತಿ', 'ಕಾರಂತ'], 0, 'ಕುವೆಂಪು — "ಶ್ರೀ ರಾಮಾಯಣ ದರ್ಶನಂ" (1967).', 'medium'),
    m('english', 'm07-b2', 'The idiom "at the eleventh hour" means:', ['Very late', 'At the last moment', 'Early morning', 'Never'], 1, 'It means at the last possible moment.', 'easy'),
  ],
});
