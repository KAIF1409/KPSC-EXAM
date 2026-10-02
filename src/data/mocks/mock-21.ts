import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 21 — Advanced land revenue & revenue hierarchy.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_21: MockExam = defineMock({
  mockNumber: 21,
  title: 'Mock 21 — Advanced Land Revenue',
  focus: 'Appellate hierarchy, land types, reforms and e-governance — hard set.',
  difficultyMix: 'advanced',
  sampleA: [
    m('land-revenue', 'm21-a1', 'Appeals against a Tahsildar\u2019s order lie first to the:', ['Assistant Commissioner', 'Deputy Commissioner', 'Karnataka Appellate Tribunal', 'Gram Panchayat'], 0, 'Revenue appeals move Tahsildar → Assistant Commissioner → Deputy Commissioner.', 'hard'),
  ],
  sampleB: [
    m('kannada', 'm21-b1', 'ಕನ್ನಡ ಭಾಷೆಗೆ ಶಾಸ್ತ್ರೀಯ ಸ್ಥಾನಮಾನ ದೊರೆತ ವರ್ಷ:', ['2004', '2006', '2008', '2011'], 2, '2008ರಲ್ಲಿ ಕನ್ನಡಕ್ಕೆ ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ ಸ್ಥಾನಮಾನ ದೊರೆಯಿತು.', 'medium'),
  ],
});
