import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 4 — Polity: Constitution basics & fundamental rights.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_04: DayProgram = {
  dayNumber: 4,
  topicTitle: 'Polity — Constitution Basics, Rights & Freedoms',
  topicTitleKannada: 'ರಾಜಕೀಯ — ಸಂವಿಧಾನದ ಮೂಲಗಳು',
  subject: 'polity-governance',
  paper: 'PAPER_1',
  focusPoints: [
    'Constituent Assembly dates: formed 1946, adopted 26 Nov 1949, enforced 26 Jan 1950',
    'Articles 14, 19 and 21 in one line each',
    'Part III vs Part IV vs Part IV-A',
  ],
  estimatedMinutes: 40,
  questions: [
    m('polity-governance', 'd04-01', 'The Constitution of India came into force on:', ['26 November 1949', '26 January 1950', '15 August 1947', '26 January 1949'], 1, 'Adopted on 26 November 1949 and enforced on 26 January 1950.', 'easy'),
    m('polity-governance', 'd04-02', 'The Preamble begins with the words:', ['We, the People of India', 'India, that is Bharat', 'We, the Citizens of India', 'In the name of the People'], 0, 'Sovereignty belongs to the people — "We, the People of India".', 'easy'),
    m('polity-governance', 'd04-03', 'Article 14 of the Constitution guarantees:', ['Equality before law', 'Freedom of speech', 'Right to life', 'Right against exploitation'], 0, 'Article 14 = equality before law and equal protection of laws.', 'easy'),
    m('polity-governance', 'd04-04', 'Right to life and personal liberty is guaranteed by:', ['Article 19', 'Article 20', 'Article 21', 'Article 22'], 2, 'Article 21 — the most expanded fundamental right through judicial interpretation.', 'easy'),
    m('polity-governance', 'd04-05', 'Freedom of speech and expression is covered under:', ['Article 19(1)(a)', 'Article 19(1)(b)', 'Article 25', 'Article 32'], 0, 'Article 19(1)(a) — subject to reasonable restrictions under 19(2).', 'medium'),
  ],
};
