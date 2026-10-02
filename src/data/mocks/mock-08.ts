import type { MockExam } from '@/types/exam';
import { m } from '@/data/helpers';
import { defineMock } from '@/data/mocks/build';

/**
 * MOCK 08 — Computer literacy & keyboard shortcuts.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const MOCK_08: MockExam = defineMock({
  mockNumber: 8,
  title: 'Mock 8 — Computer Literacy',
  focus: 'Fundamentals, MS Office shortcuts, internet and cyber safety.',
  difficultyMix: 'foundation',
  sampleA: [
    m('general-science', 'm08-a1', 'Which of the following is a primary (main) memory?', ['RAM', 'Hard disk', 'Pen drive', 'DVD'], 0, 'RAM is primary memory; hard disks, pen drives and DVDs are secondary storage.', 'easy'),
  ],
  sampleB: [
    m('computer-literacy', 'm08-b1', 'Which of these is application software?', ['Windows', 'Linux', 'MS PowerPoint', 'BIOS'], 2, 'MS Office is application software; Windows/Linux are operating systems.', 'easy'),
    m('computer-literacy', 'm08-b2', 'Shift + Delete is used to:', ['Cut a file', 'Delete permanently', 'Restore a file', 'Rename a file'], 1, 'Shift+Delete bypasses the Recycle Bin.', 'easy'),
  ],
});
