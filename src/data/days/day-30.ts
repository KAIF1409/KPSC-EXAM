import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 30 — Full-syllabus grand revision (mixed subjects).
 * The day tag is 'mixed'; every question still carries its own real subject, so
 * the analytics and mock-paper pools treat these questions normally.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_30: DayProgram = {
  dayNumber: 30,
  topicTitle: 'Grand Revision — Full Syllabus Mixed Set',
  topicTitleKannada: 'ಅಂತಿಮ ಪುನರಾವರ್ತನೆ — ಸಂಪೂರ್ಣ ಪಠ್ಯಕ್ರಮ',
  subject: 'mixed',
  paper: 'PAPER_1',
  focusPoints: [
    'One question from each pillar: polity, geography, land revenue, computer and science',
    'Simulate the real paper: rapid recall, no second-guessing',
    'Anything wrong here goes straight into the Revision Zone',
  ],
  estimatedMinutes: 25,
  questions: [
    m('polity-governance', 'd30-01', 'Article 32 of the Constitution provides for:', ['Writ jurisdiction of the Supreme Court', 'High Court writs', 'Election Commission', 'CAG appointment'], 0, 'Article 32 = constitutional remedies; Article 226 = High Court writs.', 'easy'),
    m('karnataka-geography', 'd30-02', 'Jog Falls is formed by which river?', ['Sharavathi', 'Kali', 'Kabini', 'Hemavathi'], 0, 'The Sharavathi creates Jog Falls in Shivamogga district.', 'easy'),
    m('land-revenue', 'd30-03', 'The Bhoomi project of Karnataka digitised:', ['Land records (RTC)', 'Voter lists', 'Ration cards', 'School records'], 0, 'Bhoomi (2002) made RTCs available online with digital signatures.', 'easy'),
    m('computer-literacy', 'd30-04', 'Ctrl + S in most applications is used to:', ['Save the document', 'Select all', 'Strike through text', 'Start a slide show'], 0, 'Ctrl+S = save; Ctrl+A = select all.', 'easy'),
    m('general-science', 'd30-05', 'Deficiency of Vitamin C causes:', ['Rickets', 'Scurvy', 'Beriberi', 'Night blindness'], 1, 'Vitamin C deficiency → scurvy; D → rickets; B1 → beriberi.', 'easy'),
  ],
};
