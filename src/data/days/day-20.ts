import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 20 — Computer Literacy: fundamentals and memory.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_20: DayProgram = {
  dayNumber: 20,
  topicTitle: 'Computer Literacy — Hardware, Memory & Devices',
  topicTitleKannada: 'ಗಣಕ ಪರಿಜ್ಞಾನ — ಯಂತ್ರಾಂಶ ಮತ್ತು ಸ್ಮೃತಿ',
  subject: 'computer-literacy',
  paper: 'PAPER_2',
  focusPoints: [
    'RAM vs ROM (volatile vs non-volatile)',
    'Memory units: bit → byte → KB → MB → GB (1024 steps)',
    'Input vs output devices with examples',
  ],
  estimatedMinutes: 30,
  questions: [
    m('computer-literacy', 'd20-01', 'Which memory is volatile?', ['ROM', 'RAM', 'Hard disk', 'PROM'], 1, 'RAM loses data when power is switched off.', 'easy'),
    m('computer-literacy', 'd20-02', 'How many bytes make one kilobyte (KB)?', ['512', '1000', '1024', '2048'], 2, '1 KB = 1024 bytes; 1 MB = 1024 KB.', 'easy'),
    m('computer-literacy', 'd20-03', 'Which of these is an output device?', ['Keyboard', 'Mouse', 'Monitor', 'Scanner'], 2, 'Monitor, printer and plotter are output devices.', 'easy'),
    m('computer-literacy', 'd20-04', 'The set of instructions that makes the hardware work is called:', ['Hardware', 'Software', 'Firmware only', 'Network'], 1, 'Software is the set of programs and instructions; hardware is the physical part.', 'easy'),
    m('computer-literacy', 'd20-05', 'Which of the following is system software?', ['MS Word', 'Operating system', 'MS Excel', 'Web browser'], 1, 'An operating system is system software; MS Office and browsers are application software.', 'medium'),
  ],
};
