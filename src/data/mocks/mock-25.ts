import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 25 — Repeated PYQ high-frequency set.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_25: MockExam = defineMock({
  mockNumber: 25,
  title: 'Mock 25 — High-Frequency PYQ Set',
  focus: 'Only the question patterns that repeat year after year.',
  difficultyMix: 'advanced',
  sampleA: [
    m('general-science', 'm25-a1', 'Why does the sky appear blue?', ['Scattering of light', 'Reflection of light', 'Refraction of light', 'Dispersion of light'], 0, 'Blue light has a shorter wavelength and is scattered most (Rayleigh scattering).', 'easy'),
  ],
  sampleB: [
    m('english', 'm25-b1', 'Choose the synonym of "abundant":', ['Plentiful', 'Scarce', 'Rare', 'Hidden'], 0, 'Abundant = plentiful, existing in large quantity.', 'easy'),
  ],
});
