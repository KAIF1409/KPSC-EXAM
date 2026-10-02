import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 13 — Current Affairs: Karnataka economy & guarantee schemes.
 * // TODO: PASTE_PARSED_MCQS_HERE — refresh with the latest budget/current-affairs PDF.
 */
export const DAY_13: DayProgram = {
  dayNumber: 13,
  topicTitle: 'Karnataka Economy, Budget & Guarantee Schemes',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಆರ್ಥಿಕತೆ ಮತ್ತು ಯೋಜನೆಗಳು',
  subject: 'current-affairs',
  paper: 'PAPER_1',
  focusPoints: [
    'The five guarantee schemes and what each delivers',
    'Sector composition of Karnataka GSDP',
    'Nanjundappa Committee and regional imbalance',
  ],
  estimatedMinutes: 35,
  questions: [
    m('current-affairs', 'd13-01', 'The Nanjundappa Committee report dealt with:', ['Regional imbalance in Karnataka', 'Reservation in promotions', 'Electricity pricing', 'Crop insurance'], 0, 'It identified backward taluks and recommended remedies for regional imbalance.', 'medium'),
    m('current-affairs', 'd13-02', 'The Shakti scheme provides:', ['Free bus travel for women', 'Free electricity', 'Free rice', 'Housing subsidy'], 0, 'Women get free travel in state-run ordinary buses within Karnataka.', 'easy'),
    m('current-affairs', 'd13-03', 'Gruha Lakshmi gives a monthly assistance of:', ['₹1,000', '₹1,500', '₹2,000', '₹2,500'], 2, '₹2,000 per month to the woman head of an eligible household.', 'easy'),
    m('current-affairs', 'd13-04', 'Which sector contributes the largest share of Karnataka\u2019s GSDP?', ['Primary sector', 'Secondary sector', 'Services sector', 'Mining'], 2, 'Services (IT/ITES, trade, finance) dominate Karnataka\u2019s gross state domestic product.', 'easy'),
    m('current-affairs', 'd13-05', 'The Karnataka guarantee scheme giving free electricity up to a limit is:', ['Gruha Jyothi', 'Gruha Lakshmi', 'Anna Bhagya', 'Yuva Nidhi'], 0, 'Gruha Jyothi offers up to 200 units of free electricity per month.', 'easy'),
  ],
};
