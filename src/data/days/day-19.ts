import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 19 — Aptitude: reasoning and series.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_19: DayProgram = {
  dayNumber: 19,
  topicTitle: 'Aptitude — Series, Coding, Direction & Blood Relations',
  topicTitleKannada: 'ಮಾನಸಿಕ ಸಾಮರ್ಥ್ಯ — ಶ್ರೇಣಿ, ಸಂಕೇತ, ದಿಕ್ಕು',
  subject: 'aptitude',
  paper: 'PAPER_1',
  focusPoints: [
    'Number series: check differences first, then ratios',
    'Coding-decoding by letter shift (+1, -1, reverse)',
    'Direction sense: draw the path, north-south legs cancel',
  ],
  estimatedMinutes: 30,
  questions: [
    m('aptitude', 'd19-01', 'Find the next term: 1, 4, 9, 16, 25, ___', ['30', '32', '36', '49'], 2, 'Squares of 1, 2, 3, 4, 5 → next is 6² = 36.', 'easy'),
    m('aptitude', 'd19-02', 'Find the next term: 5, 10, 20, 40, ___', ['60', '70', '80', '100'], 2, 'Each term doubles → 80.', 'easy'),
    m('aptitude', 'd19-03', 'If in a code CAT is written as DBU, then DOG is written as:', ['EPH', 'EOH', 'FPH', 'EPG'], 0, 'Each letter shifts one step forward: D→E, O→P, G→H.', 'medium'),
    m('aptitude', 'd19-04', 'A is the father of B and B is the sister of C. A is related to C as:', ['Uncle', 'Father', 'Brother', 'Cousin'], 1, 'A is the father of both B and C.', 'easy'),
    m('aptitude', 'd19-05', 'Sita walks 4 km north, turns left and walks 3 km. How far is she from the starting point (straight line)?', ['3 km', '4 km', '5 km', '7 km'], 2, 'Right-angle triangle with legs 3 and 4 → hypotenuse = 5 km.', 'hard'),
  ],
};
