import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 18 — Aptitude: quantitative basics.
 * Each answer is arithmetically verified before entering the bank.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_18: DayProgram = {
  dayNumber: 18,
  topicTitle: 'Aptitude — Percentages, Averages, Profit & Interest',
  topicTitleKannada: 'ಮಾನಸಿಕ ಸಾಮರ್ಥ್ಯ — ಶೇಕಡಾವಾರು, ಸರಾಸರಿ, ಲಾಭ',
  subject: 'aptitude',
  paper: 'PAPER_1',
  focusPoints: [
    'Percentage ↔ fraction conversions (25% = 1/4, 12.5% = 1/8)',
    'Profit % and simple interest formulae',
    'Average = sum ÷ count — the fastest-scoring formula',
  ],
  estimatedMinutes: 30,
  questions: [
    m('aptitude', 'd18-01', 'The average of 10, 20, 30, 40 and 50 is:', ['25', '30', '35', '40'], 1, 'Sum = 150, count = 5 → average = 30.', 'easy'),
    m('aptitude', 'd18-02', '40% of 250 is:', ['90', '100', '110', '125'], 1, '250 × 40 ÷ 100 = 100.', 'easy'),
    m('aptitude', 'd18-03', 'An article bought for ₹400 is sold for ₹500. Profit percentage =', ['20%', '25%', '30%', '40%'], 1, 'Profit = ₹100 on ₹400 → 25%.', 'easy'),
    m('aptitude', 'd18-04', 'Simple interest on ₹2,000 at 5% per annum for 2 years is:', ['₹150', '₹200', '₹250', '₹300'], 1, 'SI = 2000 × 2 × 5 / 100 = ₹200.', 'medium'),
    m('aptitude', 'd18-05', 'Two numbers are in the ratio 2 : 3 and their sum is 50. The smaller number is:', ['18', '20', '22', '25'], 1, 'Total parts = 5 → one part = 10 → smaller = 2 × 10 = 20.', 'medium'),
  ],
};
