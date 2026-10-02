import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 15 — Revenue administration hierarchy & survey.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_15: DayProgram = {
  dayNumber: 15,
  topicTitle: 'Revenue Hierarchy — DC, AC, Tahsildar, RI, VAO & Survey',
  topicTitleKannada: 'ಕಂದಾಯ ಆಡಳಿತ ಸೋಪಾನ ಮತ್ತು ಸರ್ವೇ',
  subject: 'land-revenue',
  paper: 'PAPER_1',
  focusPoints: [
    'District → subdivision → taluk → village chain of officers',
    'Where appeals from a Tahsildar\u2019s order go',
    'Survey numbers and their subdivisions',
  ],
  estimatedMinutes: 40,
  questions: [
    m('land-revenue', 'd15-01', 'The revenue administration of a district is headed by:', ['Deputy Commissioner', 'Assistant Commissioner', 'Tahsildar', 'Chief Secretary'], 0, 'The DC is the district\u2019s chief revenue and general administration officer.', 'easy'),
    m('land-revenue', 'd15-02', 'A revenue subdivision is headed by:', ['Assistant Commissioner', 'Tahsildar', 'Revenue Inspector', 'Deputy Tahsildar'], 0, 'The Assistant Commissioner heads a subdivision under the DC.', 'medium'),
    m('land-revenue', 'd15-03', 'Appeals against the orders of a Tahsildar lie, in the first instance, to the:', ['Assistant Commissioner', 'Deputy Commissioner', 'Karnataka Appellate Tribunal', 'Gram Panchayat'], 0, 'Revenue appeals move upwards: Tahsildar → Assistant Commissioner → Deputy Commissioner.', 'hard'),
    m('land-revenue', 'd15-04', 'The correct ascending order of revenue officers is:', ['Village Accountant, Revenue Inspector, Tahsildar, Assistant Commissioner', 'Revenue Inspector, Village Accountant, Tahsildar, Deputy Commissioner', 'Tahsildar, Village Accountant, Revenue Inspector, Assistant Commissioner', 'Village Accountant, Tahsildar, Deputy Commissioner, Revenue Inspector'], 0, 'VAO → RI → Tahsildar → Assistant Commissioner → Deputy Commissioner.', 'medium'),
    m('land-revenue', 'd15-05', 'A survey number in village records identifies:', ['A specific plot of land', 'A family', 'A village tank', 'A revenue inspector post'], 0, 'Subdivisions of a survey number carry letters, e.g. 45/1, 45/2.', 'easy'),
  ],
};
