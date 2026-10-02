import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 5 — Polity: Emergency provisions, CAG, Election Commission.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_05: DayProgram = {
  dayNumber: 5,
  topicTitle: 'Polity — Emergency Provisions & Constitutional Bodies',
  topicTitleKannada: 'ರಾಜಕೀಯ — ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಸಾಂವಿಧಾನಿಕ ಸಂಸ್ಥೆಗಳು',
  subject: 'polity-governance',
  paper: 'PAPER_1',
  focusPoints: [
    'Articles 352 / 356 / 360 and which one has never been used',
    'CAG, Election Commission, Finance Commission — Article + appointing authority',
    'Which body reports to whom (CAG → President)',
  ],
  estimatedMinutes: 40,
  questions: [
    m('polity-governance', 'd05-01', 'National Emergency is proclaimed under which Article?', ['Article 352', 'Article 356', 'Article 360', 'Article 365'], 0, 'Article 352 (war, external aggression or armed rebellion) — grounds were refined by the 44th Amendment.', 'easy'),
    m('polity-governance', 'd05-02', 'Financial Emergency is dealt with in:', ['Article 350', 'Article 356', 'Article 360', 'Article 370'], 2, 'Article 360 has never been invoked in India.', 'medium'),
    m('polity-governance', 'd05-03', 'The Comptroller and Auditor General of India is appointed by:', ['The Prime Minister', 'The President', 'The Parliament', 'The Finance Minister'], 1, 'The CAG is appointed by the President and reports to the President.', 'easy'),
    m('polity-governance', 'd05-04', 'The superintendence of elections is vested in the Election Commission under:', ['Article 320', 'Article 324', 'Article 326', 'Article 329'], 1, 'Article 324 vests election superintendence in the ECI.', 'easy'),
    m('polity-governance', 'd05-05', 'The Finance Commission is constituted under which Article?', ['Article 275', 'Article 280', 'Article 282', 'Article 293'], 1, 'Article 280 — a Finance Commission every five years to recommend tax devolution.', 'medium'),
  ],
};
