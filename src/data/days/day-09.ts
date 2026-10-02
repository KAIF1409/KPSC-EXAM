import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 9 — Karnataka History: resistance, freedom struggle & unification.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_09: DayProgram = {
  dayNumber: 9,
  topicTitle: 'Karnataka History — Resistance, Freedom Struggle & Unification',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಇತಿಹಾಸ — ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟ ಮತ್ತು ಏಕೀಕರಣ',
  subject: 'karnataka-history',
  paper: 'PAPER_1',
  focusPoints: [
    'Kittur Chennamma (1824) and Rani Abbakka before 1857',
    'Karnataka Rajyotsava: 1 November 1956; renamed Karnataka in 1973',
    'Aluru Venkata Rao and the unification movement',
  ],
  estimatedMinutes: 35,
  questions: [
    m('karnataka-history', 'd09-01', 'Kittur Rani Chennamma revolted against the British in:', ['1824', '1818', '1848', '1857'], 0, 'Her revolt at Kittur (Belagavi district) in 1824 was among the earliest armed resistances.', 'medium'),
    m('karnataka-history', 'd09-02', 'Rani Abbakka Chowta fought against which colonial power?', ['Portuguese', 'French', 'Dutch', 'British'], 0, 'She resisted the Portuguese from Ullal on the Tuluva coast in the 16th century.', 'medium'),
    m('karnataka-history', 'd09-03', 'Karnataka Rajyotsava is celebrated on:', ['1 November', '26 January', '15 August', '1 April'], 0, '1 November 1956 — the linguistic unification of Kannada-speaking areas.', 'easy'),
    m('karnataka-history', 'd09-04', 'Who is called the father of the Karnataka unification movement?', ['Aluru Venkata Rao', 'K. Chengalaraya Reddy', 'Devaraj Urs', 'B. M. Srikantaiah'], 0, 'Aluru Venkata Rao spearheaded the Karnataka Ekikarana movement and wrote "Karnataka Gatha Vaibhava".', 'hard'),
    m('karnataka-history', 'd09-05', 'Mysore State was renamed Karnataka in:', ['1956', '1965', '1973', '1980'], 2, 'Renamed with effect from 1 November 1973.', 'medium'),
  ],
};
