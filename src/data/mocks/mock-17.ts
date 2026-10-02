import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 17 — Standard full-length paper (mid-series checkpoint).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_17: MockExam = defineMock({
  mockNumber: 17,
  title: 'Mock 17 — Full-Length Checkpoint',
  focus: 'Mid-series full paper: expect your accuracy to have stabilised here.',
  difficultyMix: 'standard',
  sampleA: [
    m('karnataka-geography', 'm17-a1', 'Karnataka is India\u2019s largest producer of:', ['Tea', 'Coffee', 'Rubber', 'Cocoa'], 1, 'Karnataka leads in coffee production (Kodagu, Chikkamagaluru, Hassan).', 'easy'),
  ],
  sampleB: [
    m('computer-literacy', 'm17-b1', 'Which shortcut key renames a selected file in Windows?', ['F1', 'F2', 'F5', 'F12'], 1, 'F2 renames; F5 refreshes.', 'medium'),
  ],
});
