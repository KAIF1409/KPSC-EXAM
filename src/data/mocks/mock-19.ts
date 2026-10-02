import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 19 — Polity: federalism and local government.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_19: MockExam = defineMock({
  mockNumber: 19,
  title: 'Mock 19 — Federalism & Local Government',
  focus: 'Seventh Schedule, amendments, Panchayati Raj finance and tiers.',
  difficultyMix: 'standard',
  sampleA: [
    m('polity-governance', 'm19-a1', 'Public health and sanitation are subjects of which list?', ['Union List', 'State List', 'Concurrent List', 'Residuary'], 1, 'Public health is a State subject; education is in the Concurrent List.', 'medium'),
  ],
  sampleB: [
    m('english', 'm19-b1', 'Change into passive voice: "The teacher praised the student."', ['The student was praised by the teacher.', 'The student is praised by the teacher.', 'The student has praised by the teacher.', 'The student was being praised by the teacher.'], 0, 'Simple past active → was/were + V3.', 'medium'),
  ],
});
