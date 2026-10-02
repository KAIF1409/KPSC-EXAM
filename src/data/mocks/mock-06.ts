import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 06 — Karnataka Land Revenue Act & village administration.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_06: MockExam = defineMock({
  mockNumber: 6,
  title: 'Mock 6 — Land Revenue & Village Administration',
  focus: 'The paper that separates VAO aspirants: Act, RTC, hierarchy, VAO duties.',
  difficultyMix: 'foundation',
  sampleA: [
    m('land-revenue', 'm06-a1', 'The Record of Rights (RTC) is also called:', ['Pahani', 'Ferfar', 'Tippani', 'Khata'], 0, 'RTC = Pahani; mutation is Ferfar.', 'medium'),
  ],
  sampleB: [
    m('english', 'm06-b1', 'Add the correct question tag: "She can swim, ___?"', ['can she', "can't she", 'does she', 'isn\u2019t she'], 1, 'A positive statement takes a negative tag.', 'easy'),
  ],
});
