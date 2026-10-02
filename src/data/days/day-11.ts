import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 11 — Karnataka Geography: rivers, waterfalls and irrigation.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_11: DayProgram = {
  dayNumber: 11,
  topicTitle: 'Karnataka Geography — Rivers, Waterfalls & Irrigation',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಭೂಗೋಳ — ನದಿಗಳು ಮತ್ತು ಜಲಪಾತಗಳು',
  subject: 'karnataka-geography',
  paper: 'PAPER_1',
  focusPoints: [
    'Krishna vs Cauvery vs Tungabhadra — which is a tributary of which',
    'Jog Falls on the Sharavathi; Gokak and Shivanasamudra falls',
    'Major dams: Almatti, Tungabhadra, KRS, Harangi',
  ],
  estimatedMinutes: 35,
  questions: [
    m('karnataka-geography', 'd11-01', 'Jog Falls is on which river?', ['Sharavathi', 'Kali', 'Aghanashini', 'Netravathi'], 0, 'The Sharavathi drops at Jog (Shivamogga district) — also called Gersoppa Falls.', 'easy'),
    m('karnataka-geography', 'd11-02', 'The KRS dam is built across which river?', ['Cauvery', 'Krishna', 'Tungabhadra', 'Kabini'], 0, 'Krishnarajasagara is across the Cauvery near Mysuru.', 'medium'),
    m('karnataka-geography', 'd11-03', 'The Almatti dam is built on which river?', ['Krishna', 'Cauvery', 'Tungabhadra', 'Malaprabha'], 0, 'Almatti is across the Krishna in Vijayapura/Bagalkote region.', 'medium'),
    m('karnataka-geography', 'd11-04', 'The Tungabhadra dam is located at:', ['Hosapete (Hospet)', 'Mandya', 'Belagavi', 'Shivamogga'], 0, 'Tungabhadra dam at Hosapete (Vijayanagara district) is a joint Karnataka–Telangana project.', 'medium'),
    m('karnataka-geography', 'd11-05', 'Which river of Karnataka is a tributary of the Krishna?', ['Tungabhadra', 'Cauvery', 'Kabini', 'Netravathi'], 0, 'Tungabhadra (Tunga + Bhadra) joins the Krishna; Kabini joins the Cauvery.', 'easy'),
  ],
};
