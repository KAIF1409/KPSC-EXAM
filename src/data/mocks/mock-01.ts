import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 01 — Baseline full-length simulation (easy start, live calibration).
 * // TODO: PASTE_PARSED_MCQS_HERE — paste the parsed 100-question Paper 1 array.
 */
export const MOCK_01: MockExam = defineMock({
  mockNumber: 1,
  title: 'Mock 1 — Baseline Full-Length Simulation',
  focus: 'Your first calibration paper: full Paper 1 + Paper 2, no instant answers.',
  difficultyMix: 'foundation',
  sampleA: [
    m('general-science', 'm01-a1', 'Which lens is used to correct myopia?', ['Concave', 'Convex', 'Cylindrical', 'Bifocal'], 0, 'Concave (diverging) lens corrects short-sightedness.', 'easy'),
  ],
  sampleB: [
    m('english', 'm01-b1', 'Fill in the blank: "Hardly had he arrived ___ the train left."', ['than', 'when', 'then', 'that'], 1, 'Hardly/scarcely take "when"; no sooner takes "than".', 'medium'),
  ],
});
