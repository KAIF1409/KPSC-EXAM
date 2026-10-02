import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 16 — Land reforms, land types and citizen-service guarantees.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_16: DayProgram = {
  dayNumber: 16,
  topicTitle: 'Land Reforms, Aamani/Bagayat & Sakala Act',
  topicTitleKannada: 'ಭೂ ಸುಧಾರಣೆ, ಜಮೀನಿನ ವಿಧಗಳು, ಸಕಾಲ ಕಾಯ್ದೆ',
  subject: 'land-revenue',
  paper: 'PAPER_1',
  focusPoints: [
    'Karnataka Land Reforms Act, 1961 and the Land Tribunal',
    'Aamani (dry) vs Bagayat (wet/irrigated) land',
    'Sakala Act, 2011 — time-bound service delivery',
  ],
  estimatedMinutes: 35,
  questions: [
    m('land-revenue', 'd16-01', 'The Karnataka Land Reforms Act was enacted in:', ['1956', '1961', '1968', '1974'], 1, 'The 1961 Act (amended in 1974) abolished tenancy and enforced land ceilings.', 'medium'),
    m('land-revenue', 'd16-02', 'Tenancy claims under land reforms were decided by the:', ['Land Tribunal', 'Civil Judge (Junior Division)', 'Gram Panchayat', 'Revenue Inspector'], 0, 'Land Tribunals adjudicated claims of tenants for occupancy rights.', 'hard'),
    m('land-revenue', 'd16-03', '"Aamani" land means:', ['Dry land', 'Wet/irrigated land', 'Forest land', 'Garden land'], 0, 'Aamani = dry land; Bagayat = wet or irrigated land.', 'medium'),
    m('land-revenue', 'd16-04', '"Bagayat" land means:', ['Dry land', 'Wet or irrigated land', 'Barren land', 'Grazing land'], 1, 'Bagayat land has assured irrigation and attracts higher assessment.', 'medium'),
    m('land-revenue', 'd16-05', 'The Karnataka Sakala Act for time-bound services was passed in:', ['2008', '2011', '2014', '2019'], 1, 'The Guarantee of Services to Citizens Act, 2011 fixes deadlines for notified services.', 'medium'),
  ],
};
