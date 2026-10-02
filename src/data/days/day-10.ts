import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 10 — Karnataka Geography: physiography, divisions and state symbols.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_10: DayProgram = {
  dayNumber: 10,
  topicTitle: 'Karnataka Geography — Physiography, Divisions & Symbols',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಭೂಗೋಳ — ಭೌಗೋಳಿಕ ವಿಭಾಗಗಳು',
  subject: 'karnataka-geography',
  paper: 'PAPER_1',
  focusPoints: [
    'Highest peak, area and number of districts (ready-reckoner numbers)',
    'Malnad / Bayaluseeme / Karavali divisions',
    'State animal, bird, tree and flower',
  ],
  estimatedMinutes: 30,
  questions: [
    m('karnataka-geography', 'd10-01', 'The highest peak in Karnataka is:', ['Mullayanagiri', 'Kudremukh', 'Baba Budangiri', 'Kemmanagundi'], 0, 'Mullayanagiri (1,930 m) in Chikkamagaluru district.', 'easy'),
    m('karnataka-geography', 'd10-02', 'The area of Karnataka is about:', ['1.32 lakh sq km', '1.91 lakh sq km', '2.41 lakh sq km', '2.75 lakh sq km'], 1, '1,91,791 sq km — 6th largest State in India.', 'medium'),
    m('karnataka-geography', 'd10-03', 'How many districts does Karnataka have?', ['27', '29', '31', '33'], 2, '31 districts across four revenue divisions.', 'easy'),
    m('karnataka-geography', 'd10-04', 'The coastal plain of Karnataka is known as:', ['Karavali', 'Malnad', 'Bayaluseeme', 'Maidan'], 0, 'Karavali = coastal strip; Malnad = Ghats belt; Bayaluseeme = interior plains.', 'medium'),
    m('karnataka-geography', 'd10-05', 'The State tree of Karnataka is:', ['Sandalwood (Srigandha)', 'Neem', 'Banyan', 'Teak'], 0, 'State animal: elephant, bird: Indian roller, flower: lotus.', 'easy'),
  ],
};
