import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 28 — Karnataka economy, budget & schemes.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_28: MockExam = defineMock({
  mockNumber: 28,
  title: 'Mock 28 — Karnataka Economy & Budget',
  focus: 'GSDP composition, committees, guarantee schemes and fiscal limits.',
  difficultyMix: 'advanced',
  sampleA: [
    m('current-affairs', 'm28-a1', 'Karnataka\u2019s fiscal deficit is generally kept within which limit of GSDP?', ['About 3%', 'About 6%', 'About 9%', 'No limit'], 0, 'State fiscal deficit targets are pegged around 3% of GSDP under FRBM rules.', 'hard'),
  ],
  sampleB: [
    m('english', 'm28-b1', 'Fill in the blank: "He is senior ___ me by two years."', ['than', 'to', 'from', 'of'], 1, '"Senior/junior/superior/inferior" take "to", not "than".', 'hard'),
  ],
});
