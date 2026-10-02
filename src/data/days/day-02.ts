import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 2 — General Science: Chemistry formulae & everyday chemistry.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_02: DayProgram = {
  dayNumber: 2,
  topicTitle: 'General Science — Chemistry: Formulae & Everyday Chemistry',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ವಿಜ್ಞಾನ — ರಸಾಯನಶಾಸ್ತ್ರ',
  subject: 'general-science',
  paper: 'PAPER_1',
  focusPoints: [
    'Formulae of washing soda, bleaching powder and Plaster of Paris',
    'pH scale values worth memorising (water, blood, acid rain)',
    'Alloys and hard water facts',
  ],
  estimatedMinutes: 35,
  questions: [
    m('general-science', 'd02-01', 'The chemical formula of washing soda is:', ['NaHCO₃', 'Na₂CO₃·10H₂O', 'CaOCl₂', 'NaOH'], 1, 'Washing soda is hydrated sodium carbonate; baking soda is NaHCO₃.', 'easy'),
    m('general-science', 'd02-02', 'The chemical formula of bleaching powder is:', ['CaOCl₂', 'CaCO₃', 'CaSO₄', 'NaCl'], 0, 'Bleaching powder = calcium oxychloride, CaOCl₂.', 'medium'),
    m('general-science', 'd02-03', 'The pH of human blood is about:', ['5.5', '6.4', '7.4', '8.4'], 2, 'Blood is slightly alkaline with a pH of about 7.4.', 'medium'),
    m('general-science', 'd02-04', 'Hard water contains dissolved salts of:', ['Sodium and potassium', 'Calcium and magnesium', 'Iron and copper', 'Zinc and lead'], 1, 'Ca and Mg bicarbonates/sulphates make water hard; hard water does not lather well with soap.', 'easy'),
    m('general-science', 'd02-05', 'Which gas turns lime water milky?', ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'], 1, 'CO₂ forms insoluble calcium carbonate, turning lime water milky.', 'easy'),
  ],
};
