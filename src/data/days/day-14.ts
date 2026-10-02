import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 14 — Land Revenue Act & land records (the VAO core).
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_14: DayProgram = {
  dayNumber: 14,
  topicTitle: 'Karnataka Land Revenue Act, RTC & Bhoomi',
  topicTitleKannada: 'ಕಂದಾಯ ಕಾಯ್ದೆ, ಪಹಣಿ ಮತ್ತು ಭೂಮಿ ಯೋಜನೆ',
  subject: 'land-revenue',
  paper: 'PAPER_1',
  focusPoints: [
    'Karnataka Land Revenue Act, 1964 — scope: survey, assessment, collection',
    'RTC / Pahani contents and who maintains it',
    'Bhoomi (2002) and mutation (Ferfar)',
  ],
  estimatedMinutes: 40,
  questions: [
    m('land-revenue', 'd14-01', 'The Karnataka Land Revenue Act was enacted in:', ['1961', '1964', '1972', '1980'], 1, 'The Act of 1964 governs survey, assessment, collection and land records administration.', 'easy'),
    m('land-revenue', 'd14-02', 'RTC (Pahani) stands for:', ['Record of Rights, Tenancy and Crops', 'Revenue Tax Collection', 'Register of Transfer Certificates', 'Rural Tenure Clearance'], 0, 'The RTC shows owner, extent, soil, crops, assessment and encumbrances.', 'easy'),
    m('land-revenue', 'd14-03', 'The Bhoomi project of Karnataka was launched in:', ['1998', '2002', '2007', '2011'], 1, 'Bhoomi (2002) was India\u2019s first online land-records delivery system.', 'medium'),
    m('land-revenue', 'd14-04', 'Mutation (Ferfar) in land records refers to:', ['Updating records after transfer, partition or inheritance', 'Cancelling a survey number', 'Converting dry land to wet land', 'Fixing the market value'], 0, 'Every change in ownership must be mutated so the RTC reflects reality.', 'medium'),
    m('land-revenue', 'd14-05', 'Which of the following details appears in the RTC (Pahani)?', ['Owner name, extent, assessment and crops', 'Aadhaar number of all family members', 'Bank loan repayment history', 'Electoral roll number'], 0, 'The RTC is a composite record of rights, tenancy and crops.', 'easy'),
  ],
};
