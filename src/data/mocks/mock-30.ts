import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 30 — Final grand simulation (exam-day rehearsal).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_30: MockExam = defineMock({
  mockNumber: 30,
  title: 'Mock 30 — Grand Final Simulation',
  focus: 'Full dress rehearsal: strict mode, 120 minutes per paper, no hints.',
  difficultyMix: 'advanced',
  sampleA: [
    m('land-revenue', 'm30-a1', 'Which project made Karnataka\u2019s land records available online?', ['Bhoomi', 'Seva Sindhu', 'Nemmadi', 'Sakala'], 0, 'Bhoomi (2002) digitised and delivered RTCs online.', 'easy'),
  ],
  sampleB: [
    m('english', 'm30-b1', 'Fill in the blank: "Neither of the answers ___ correct."', ['are', 'is', 'were', 'have'], 1, '"Neither of" takes a singular verb.', 'hard'),
  ],
});
