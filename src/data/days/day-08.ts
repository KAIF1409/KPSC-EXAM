import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 8 — Karnataka History: Vijayanagara & Bahmani kingdoms.
 * NOTE: the string "Which ruler's" below is escaped because of the apostrophe.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_08: DayProgram = {
  dayNumber: 8,
  topicTitle: 'Karnataka History — Vijayanagara & Bahmani Kingdoms',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಇತಿಹಾಸ — ವಿಜಯನಗರ ಮತ್ತು ಬಹಮನಿ ರಾಜ್ಯಗಳು',
  subject: 'karnataka-history',
  paper: 'PAPER_1',
  focusPoints: [
    '1336 founding of Vijayanagara by Harihara and Bukka',
    'Krishnadevaraya (1509-29) and the golden age',
    '1565 Battle of Talikota and the Bahmani capital shift',
  ],
  estimatedMinutes: 35,
  questions: [
    m('karnataka-history', 'd08-01', 'Vijayanagara was founded in 1336 CE by:', ['Harihara and Bukka', 'Krishnadevaraya', 'Rama Raya', 'Devaraya II'], 0, 'Harihara I and Bukka Raya I founded the empire on the Tungabhadra.', 'easy'),
    m('karnataka-history', 'd08-02', 'Krishnadevaraya\u2019s reign was:', ['1336-1356 CE', '1422-1446 CE', '1509-1529 CE', '1542-1565 CE'], 2, '1509-29 is celebrated as the golden age of Vijayanagara.', 'medium'),
    m('karnataka-history', 'd08-03', 'The Battle of Talikota was fought in:', ['1526 CE', '1565 CE', '1576 CE', '1598 CE'], 1, '1565 — the allied Deccan Sultanates defeated Vijayanagara at Rakshasa-Tangadi.', 'easy'),
    m('karnataka-history', 'd08-04', 'Who founded the Bahmani kingdom in 1347?', ['Alauddin Bahman Shah (Hasan Gangu)', 'Mahmud Gawan', 'Firoz Shah', 'Muhammad bin Tughlaq'], 0, 'Hasan Gangu revolted against the Delhi Sultanate and founded the Bahmani Sultanate with its capital at Gulbarga.', 'hard'),
    m('karnataka-history', 'd08-05', 'The Bahmani capital was shifted from Gulbarga to:', ['Bidar', 'Bijapur', 'Raichur', 'Daulatabad'], 0, 'It was shifted to Bidar in the 15th century.', 'medium'),
  ],
};
