import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 6 — Polity: Federal structure & Panchayati Raj.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_06: DayProgram = {
  dayNumber: 6,
  topicTitle: 'Polity — Federal Lists & Panchayati Raj',
  topicTitleKannada: 'ರಾಜಕೀಯ — ಫೆಡರಲ್ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್',
  subject: 'polity-governance',
  paper: 'PAPER_1',
  focusPoints: [
    'Union / State / Concurrent list belonging examples',
    '73rd and 74th Amendments and the three tiers of Panchayati Raj',
    '42nd Amendment as the "mini Constitution"',
  ],
  estimatedMinutes: 35,
  questions: [
    m('polity-governance', 'd06-01', 'Education is a subject of which list?', ['Union List', 'State List', 'Concurrent List', 'Residuary powers'], 2, 'Education moved to the Concurrent List by the 42nd Amendment (1976).', 'easy'),
    m('polity-governance', 'd06-02', 'The three lists of the Seventh Schedule are:', ['Union, State, Concurrent', 'Union, State, Local', 'Central, Provincial, Common', 'Federal, State, Residuary'], 0, 'Union List (100+ entries), State List, Concurrent List — the 7th Schedule.', 'easy'),
    m('polity-governance', 'd06-03', 'The 42nd Constitutional Amendment Act is known as:', ['Mini Constitution', 'Right to Education Act', 'Panchayat Charter', 'Basic Structure Act'], 0, 'The 42nd Amendment (1976) made wide-ranging changes, hence "mini Constitution".', 'medium'),
    m('polity-governance', 'd06-04', 'Panchayati Raj was given constitutional status by the:', ['71st Amendment', '72nd Amendment', '73rd Amendment', '74th Amendment'], 2, 'The 73rd Amendment (1992) inserted Part IX and the Eleventh Schedule.', 'easy'),
    m('polity-governance', 'd06-05', 'The three tiers of Panchayati Raj in Karnataka are:', ['Gram Panchayat, Taluk Panchayat, Zilla Panchayat', 'Gram Sabha, Ward Sabha, Zilla Panchayat', 'Village, Block, Municipality', 'Gram Panchayat, Municipal Council, Zilla Parishad'], 0, 'Karnataka: Gram Panchayat (village) → Taluk Panchayat (intermediate) → Zilla Panchayat (district).', 'medium'),
  ],
};
