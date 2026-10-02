import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 15 — Computer literacy + aptitude reasoning.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_15: MockExam = defineMock({
  mockNumber: 15,
  title: 'Mock 15 — Computer & Reasoning Mix',
  focus: 'Technology facts plus speed arithmetic and reasoning.',
  difficultyMix: 'standard',
  sampleA: [
    m('aptitude', 'm15-a1', 'A sum of ₹600 is divided in the ratio 1 : 2. The larger share is:', ['₹200', '₹300', '₹400', '₹450'], 2, 'Total parts = 3 → one part = ₹200 → larger share = ₹400.', 'medium'),
  ],
  sampleB: [
    m('computer-literacy', 'm15-b1', 'An IPv6 address is how many bits long?', ['32', '64', '128', '256'], 2, 'IPv4 = 32 bits, IPv6 = 128 bits.', 'hard'),
  ],
});
