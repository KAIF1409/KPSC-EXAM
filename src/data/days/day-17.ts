import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 17 — Village administration: VAO duties and Panchayat linkage.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_17: DayProgram = {
  dayNumber: 17,
  topicTitle: 'Village Administration — VAO Duties & Panchayat Linkage',
  topicTitleKannada: 'ಗ್ರಾಮ ಆಡಳಿತ — ಗ್ರಾಮ ಲೆಕ್ಕಿಗರ ಕಾರ್ಯಗಳು',
  subject: 'land-revenue',
  paper: 'PAPER_1',
  focusPoints: [
    'What a Village Accountant does (and does not do)',
    'Supervision chain: VAO under the Revenue Inspector',
    'Gram Panchayat at village level; Taluk and Zilla Panchayats above',
  ],
  estimatedMinutes: 35,
  questions: [
    m('land-revenue', 'd17-01', 'The Village Accountant works under the immediate supervision of the:', ['Revenue Inspector', 'Tahsildar', 'Assistant Commissioner', 'Gram Panchayat President'], 0, 'The Revenue Inspector supervises a circle of villages and their Village Accountants.', 'medium'),
    m('land-revenue', 'd17-02', 'Which of the following is NOT a duty of the Village Accountant?', ['Registering criminal cases', 'Collecting land revenue', 'Maintaining village records and maps', 'Reporting crop statistics'], 0, 'Registering FIRs is a police function — the VAO is a revenue functionary.', 'medium'),
    m('land-revenue', 'd17-03', 'Which document maintained at the village level records ownership and crops of each survey number?', ['RTC (Pahani)', 'FIR', 'Voter list', 'Ration card register'], 0, 'The Village Accountant maintains the RTC/Pahani and the village map.', 'easy'),
    m('land-revenue', 'd17-04', 'The lowest tier of the Panchayati Raj system is the:', ['Gram Panchayat', 'Taluk Panchayat', 'Zilla Panchayat', 'Municipal Council'], 0, 'Gram Panchayat (village) → Taluk Panchayat (taluk) → Zilla Panchayat (district).', 'easy'),
    m('land-revenue', 'd17-05', 'The Zilla Panchayat functions at which level?', ['District', 'Taluk', 'Village', 'State'], 0, 'The ZP is the district-level tier of Panchayati Raj.', 'easy'),
  ],
};
