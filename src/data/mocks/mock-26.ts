import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 26 — Advanced full-length paper.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_26: MockExam = defineMock({
  mockNumber: 26,
  title: 'Mock 26 — Advanced Full-Length',
  focus: 'Full paper with a harder mix; aim for 75%+ accuracy here.',
  difficultyMix: 'advanced',
  sampleA: [
    m('polity-governance', 'm26-a1', 'The Fundamental Duties were added by which amendment?', ['24th', '42nd', '44th', '52nd'], 1, 'The 42nd Amendment (1976) inserted Part IV-A (Article 51A).', 'hard'),
  ],
  sampleB: [
    m('computer-literacy', 'm26-b1', 'Which of these is a cloud service model?', ['IaaS', 'IDE', 'IPX', 'IRC'], 0, 'IaaS, PaaS and SaaS are the three cloud models.', 'medium'),
  ],
});
