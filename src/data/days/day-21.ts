import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 21 — Computer Literacy: operating systems and MS Office shortcuts.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_21: DayProgram = {
  dayNumber: 21,
  topicTitle: 'Computer Literacy — Operating Systems & MS Office Shortcuts',
  topicTitleKannada: 'ಗಣಕ ಪರಿಜ್ಞಾನ — ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಂ ಮತ್ತು ಎಂಎಸ್ ಆಫೀಸ್',
  subject: 'computer-literacy',
  paper: 'PAPER_2',
  focusPoints: [
    'OS functions: process, memory, file and device management',
    'The shortcuts that repeat: Ctrl+B/I/U, F5, Ctrl+S, Ctrl+Z, Ctrl+P',
    'Default extensions: .docx, .xlsx, .pptx',
  ],
  estimatedMinutes: 30,
  questions: [
    m('computer-literacy', 'd21-01', 'Which of the following is NOT an operating system?', ['Windows', 'Linux', 'MS Excel', 'Android'], 2, 'MS Excel is an application; Windows, Linux, macOS and Android are operating systems.', 'easy'),
    m('computer-literacy', 'd21-02', 'In MS Word, Ctrl + Z is used to:', ['Undo the last action', 'Redo an action', 'Zoom the page', 'Close the document'], 0, 'Ctrl+Z = undo; Ctrl+Y = redo.', 'easy'),
    m('computer-literacy', 'd21-03', 'Ctrl + P is used to:', ['Paste', 'Print', 'Preview only', 'Protect the sheet'], 1, 'Ctrl+P opens the print dialog; Ctrl+V pastes.', 'easy'),
    m('computer-literacy', 'd21-04', 'The default file extension of an MS Excel 2016 workbook is:', ['.xls', '.xlsx', '.csv', '.docx'], 1, '.xlsx is the default; .xls is the older format.', 'easy'),
    m('computer-literacy', 'd21-05', 'Which function key is used to start a PowerPoint slide show from the beginning?', ['F1', 'F5', 'F9', 'F12'], 1, 'F5 starts the show; Shift+F5 starts from the current slide.', 'medium'),
  ],
};
