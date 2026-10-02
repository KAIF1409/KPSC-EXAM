import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 25 — General English: grammar rules that repeat every year.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_25: DayProgram = {
  dayNumber: 25,
  topicTitle: 'General English — Subject-Verb Agreement, Prepositions & Articles',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ಇಂಗ್ಲಿಷ್ — ವ್ಯಾಕರಣ',
  subject: 'english',
  paper: 'PAPER_2',
  focusPoints: [
    'Interrupting phrases (with / along with / together with) do not change the verb',
    'Neither…nor and either…or agree with the nearer subject',
    'Fixed preposition pairs: good at, afraid of, congratulate on',
  ],
  estimatedMinutes: 30,
  questions: [
    m('english', 'd25-01', 'Fill in the blank: "The Director, together with his staff, ___ arrived."', ['have', 'has', 'are', 'were'], 1, 'The head noun "Director" is singular, so "has" is correct.', 'medium'),
    m('english', 'd25-02', 'Fill in the blank: "Neither the students nor the teacher ___ present."', ['are', 'is', 'were', 'have'], 1, 'With neither…nor the verb agrees with the nearer subject "teacher".', 'medium'),
    m('english', 'd25-03', 'Fill in the blank: "She is good ___ mathematics."', ['in', 'at', 'on', 'for'], 1, 'Fixed collocation: good at a subject or skill.', 'easy'),
    m('english', 'd25-04', 'Fill in the blank: "He is afraid ___ the dog."', ['from', 'of', 'with', 'to'], 1, 'Fixed collocation: afraid of.', 'easy'),
    m('english', 'd25-05', 'Fill in the blank: "He waited for ___ hour."', ['a', 'an', 'the', 'no article'], 1, '"Hour" starts with a vowel sound, so the article is "an".', 'easy'),
  ],
};
