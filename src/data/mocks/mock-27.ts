import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 27 — Science & environment advanced set.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_27: MockExam = defineMock({
  mockNumber: 27,
  title: 'Mock 27 — Science & Environment',
  focus: 'Physics-plus-ecology blend with application-style questions.',
  difficultyMix: 'advanced',
  sampleA: [
    m('general-science', 'm27-a1', 'Which of the following is a non-renewable source of energy?', ['Solar', 'Wind', 'Coal', 'Tidal'], 2, 'Fossil fuels such as coal are exhaustible; solar, wind and tidal are renewable.', 'easy'),
  ],
  sampleB: [
    m('kannada', 'm27-b1', 'ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತಿನ ಸ್ಥಾಪನಾ ವರ್ಷ:', ['1905', '1915', '1925', '1935'], 1, '1915ರಲ್ಲಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಿಷತ್ತು ಸ್ಥಾಪನೆಯಾಯಿತು.', 'hard'),
  ],
});
