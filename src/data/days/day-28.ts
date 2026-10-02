import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 28 — Awards & culture (current affairs bucket, high static frequency).
 * // TODO: PASTE_PARSED_MCQS_HERE — refresh the latest winners from the awards PDF.
 */
export const DAY_28: DayProgram = {
  dayNumber: 28,
  topicTitle: 'Awards & Honours — National, Literary and Sports',
  topicTitleKannada: 'ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಗೌರವಗಳು',
  subject: 'current-affairs',
  paper: 'PAPER_1',
  focusPoints: [
    'Bharat Ratna = highest civilian award; Padma awards announced on Republic Day',
    'Jnanpith for literature; Khel Ratna for sport',
    'Karnataka awards: Rajyotsava, Pampa, Nadoja',
  ],
  estimatedMinutes: 30,
  questions: [
    m('current-affairs', 'd28-01', 'The highest civilian award of India is:', ['Padma Vibhushan', 'Bharat Ratna', 'Padma Bhushan', 'Param Vir Chakra'], 1, 'Bharat Ratna is the highest civilian honour; Param Vir Chakra is a military decoration.', 'easy'),
    m('current-affairs', 'd28-02', 'The Jnanpith Award is given for excellence in:', ['Science', 'Literature', 'Cinema', 'Sports'], 1, 'The Jnanpith is India\u2019s highest literary award; Kannada has won it eight times.', 'easy'),
    m('current-affairs', 'd28-03', 'Padma Awards are announced every year on the occasion of:', ['Independence Day', 'Republic Day', 'Gandhi Jayanti', 'Rajyotsava'], 1, 'They are announced on the eve of Republic Day and conferred at Rashtrapati Bhavan.', 'easy'),
    m('current-affairs', 'd28-04', 'The highest sporting honour of India is:', ['Arjuna Award', 'Major Dhyan Chand Khel Ratna Award', 'Dronacharya Award', 'Tenzing Norgay Award'], 1, 'The Khel Ratna (renamed after Dhyan Chand) is the highest sporting award.', 'medium'),
    m('current-affairs', 'd28-05', 'The highest literary award of the Government of Karnataka is:', ['Pampa Award', 'Nadoja Award', 'Rajyotsava Award', 'Kempegowda Award'], 0, 'The Pampa Award, given by the Kannada and Culture Department, is Karnataka\u2019s highest literary honour.', 'medium'),
  ],
};
