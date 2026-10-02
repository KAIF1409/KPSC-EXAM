import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 27 — General English: idioms, one-word substitutions, synonyms/antonyms.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_27: DayProgram = {
  dayNumber: 27,
  topicTitle: 'General English — Idioms, One-word Substitution & Vocabulary',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ಇಂಗ್ಲಿಷ್ — ನುಡಿಗಟ್ಟು ಮತ್ತು ಪದಸಂಪತ್ತು',
  subject: 'english',
  paper: 'PAPER_2',
  focusPoints: [
    'High-repetition idioms: once in a blue moon, bury the hatchet, at the eleventh hour',
    'One-word substitutions for persons and qualities',
    'Synonym/antonym pairs frequently asked in KEA papers',
  ],
  estimatedMinutes: 30,
  questions: [
    m('english', 'd27-01', 'The idiom "once in a blue moon" means:', ['Very rarely', 'Every month', 'Very quickly', 'Very often'], 0, 'It means something that happens extremely rarely.', 'easy'),
    m('english', 'd27-02', 'The idiom "to bury the hatchet" means:', ['To hide evidence', 'To make peace', 'To dig a pit', 'To start a quarrel'], 1, 'It means to end a quarrel and become friendly.', 'medium'),
    m('english', 'd27-03', 'One word for "a person who cannot be corrected":', ['Incorrigible', 'Invincible', 'Indelible', 'Inedible'], 0, 'Incorrigible = not able to be corrected or reformed.', 'hard'),
    m('english', 'd27-04', 'Choose the synonym of "candid":', ['Frank', 'Rude', 'Shy', 'Cunning'], 0, 'Candid = honest and straightforward = frank.', 'medium'),
    m('english', 'd27-05', 'Choose the antonym of "barren":', ['Dry', 'Fertile', 'Empty', 'Stony'], 1, 'Barren (unproductive) ↔ fertile (productive).', 'easy'),
  ],
};
