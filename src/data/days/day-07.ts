import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 7 — Karnataka History: ancient dynasties & inscriptions.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_07: DayProgram = {
  dayNumber: 7,
  topicTitle: 'Karnataka History — Kadambas, Gangas & Chalukyas',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಇತಿಹಾಸ — ಕದಂಬರು, ಗಂಗರು, ಚಾಲುಕ್ಯರು',
  subject: 'karnataka-history',
  paper: 'PAPER_1',
  focusPoints: [
    'Halmidi (Hassan) vs Talagunda (Shivamogga) — the classic swap trap',
    'Capitals: Banavasi, Talakadu, Badami (Vatapi), Manyakheta',
    'Pulakeshin II and Harshavardhana',
  ],
  estimatedMinutes: 35,
  questions: [
    m('karnataka-history', 'd07-01', 'The capital of the Kadambas of Banavasi was:', ['Banavasi', 'Badami', 'Talakadu', 'Halebidu'], 0, 'Banavasi (Uttara Kannada) was the Kadamba capital in the early centuries CE.', 'easy'),
    m('karnataka-history', 'd07-02', 'The Western Gangas ruled with their capital at:', ['Talakadu', 'Hampi', 'Vijayapura', 'Srirangapatna'], 0, 'Talakadu (Mysuru district) was the Western Ganga capital.', 'medium'),
    m('karnataka-history', 'd07-03', 'The capital of the Rashtrakutas after shifting from Mayurkhandi was:', ['Manyakheta', 'Badami', 'Devagiri', 'Kanchi'], 0, 'Manyakheta (Malkhed, Kalaburagi district) was the Rashtrakuta capital.', 'hard'),
    m('karnataka-history', 'd07-04', 'The Halmidi inscription, the earliest Kannada inscription, belongs to which district?', ['Hassan', 'Shivamogga', 'Belagavi', 'Ballari'], 0, 'Halmidi is in Hassan district (c. 450 CE). Talagunda is in Shivamogga — do not swap them.', 'medium'),
    m('karnataka-history', 'd07-05', 'Which ruler\u2019s inscription at Talagunda throws light on the Kadamba lineage?', ['Kakusthavarma', 'Pulakeshin I', 'Amoghavarsha', 'Vinayaditya'], 0, 'The Talagunda pillar inscription relates to Kakusthavarma and the Kadamba lineage.', 'hard'),
  ],
};
