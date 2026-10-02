import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 26 — General English: voice, narration and question tags.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_26: DayProgram = {
  dayNumber: 26,
  topicTitle: 'General English — Voice, Narration & Question Tags',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ಇಂಗ್ಲಿಷ್ — ವಾಚ್ಯ-ಪರೋಕ್ಷ, ಪ್ರಶ್ನೆ ಟ್ಯಾಗ್',
  subject: 'english',
  paper: 'PAPER_2',
  focusPoints: [
    'Passive voice: tense stays the same, structure becomes be + V3',
    'Reported speech: tense shifts one step back, except universal truths',
    'Question tags flip polarity; "Let us" takes "shall we"',
  ],
  estimatedMinutes: 30,
  questions: [
    m('english', 'd26-01', 'Change into passive voice: "Someone has stolen my pen."', ['My pen has been stolen.', 'My pen was stolen.', 'My pen is stolen.', 'My pen had stolen.'], 0, 'Present perfect active → present perfect passive: has been + V3.', 'medium'),
    m('english', 'd26-02', 'Change into indirect speech: He said, "I will come tomorrow."', ['He said that he will come tomorrow.', 'He said that he would come the next day.', 'He said that I would come tomorrow.', 'He says that he would come the next day.'], 1, 'will → would and tomorrow → the next day.', 'medium'),
    m('english', 'd26-03', 'Change into indirect speech: She said, "Water boils at 100 °C."', ['She said that water boiled at 100 °C.', 'She said that water boils at 100 °C.', 'She said that water had boiled at 100 °C.', 'She says water boiled at 100 °C.'], 1, 'Universal truths keep the present tense in reported speech.', 'hard'),
    m('english', 'd26-04', 'Add the correct question tag: "Let us go for a walk, ___?"', ['will we', 'shall we', 'do we', 'are we'], 1, 'Suggestions with "Let us" take the tag "shall we".', 'medium'),
    m('english', 'd26-05', 'Fill in the blank: "No sooner had he arrived ___ the meeting began."', ['when', 'than', 'then', 'that'], 1, 'No sooner…than; hardly/scarcely…when.', 'easy'),
  ],
};
