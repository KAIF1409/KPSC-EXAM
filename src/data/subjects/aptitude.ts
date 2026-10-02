import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * APTITUDE & MENTAL ABILITY — every question here is arithmetically verified.
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the aptitude/mental ability PDFs.
 */
export const APTITUDE_QUESTIONS: MCQ[] = [
  m('aptitude', 'ap-num-01', 'The average of 5, 10, 15, 20 and 25 is:', ['12', '15', '17', '20'], 1, 'Sum = 75, count = 5 → average = 15.', 'easy'),
  m('aptitude', 'ap-pct-01', '25% of 480 is:', ['110', '115', '120', '125'], 2, '480 ÷ 4 = 120.', 'easy'),
  m('aptitude', 'ap-pl-01', 'An article bought for ₹200 is sold for ₹250. The profit percentage is:', ['20%', '25%', '30%', '50%'], 1, 'Profit = ₹50 on a cost of ₹200 → 50/200 × 100 = 25%.', 'easy'),
  m('aptitude', 'ap-si-01', 'The simple interest on ₹5,000 at 8% per annum for 3 years is:', ['₹1,000', '₹1,200', '₹1,400', '₹1,500'], 1, 'SI = PTR/100 = 5000 × 3 × 8 / 100 = ₹1,200.', 'medium'),
  m('aptitude', 'ap-rat-01', 'Two numbers are in the ratio 3 : 5 and their sum is 64. The smaller number is:', ['21', '24', '27', '30'], 1, 'Total parts = 8 → one part = 8 → smaller = 3 × 8 = 24.', 'medium'),
  m('aptitude', 'ap-ser-01', 'Find the next term: 2, 6, 12, 20, 30, ___', ['36', '40', '42', '44'], 2, 'Differences are 4, 6, 8, 10, so the next difference is 12 → 42.', 'medium'),
  m('aptitude', 'ap-ser-02', 'Find the next term: 3, 9, 27, 81, ___', ['162', '216', '243', '279'], 2, 'Each term is multiplied by 3 → 81 × 3 = 243.', 'easy'),
  m('aptitude', 'ap-tsd-01', 'A bus covers 60 km in 45 minutes. Its speed is:', ['70 km/h', '75 km/h', '80 km/h', '90 km/h'], 2, '45 min = 0.75 h → 60 / 0.75 = 80 km/h.', 'medium'),
  m('aptitude', 'ap-lcm-01', 'The LCM of 12 and 18 is:', ['24', '36', '48', '72'], 1, '12 = 2²×3, 18 = 2×3² → LCM = 2²×3² = 36.', 'easy'),
  m('aptitude', 'ap-hcf-01', 'The HCF of 24 and 36 is:', ['6', '8', '12', '18'], 2, '24 = 2³×3, 36 = 2²×3² → HCF = 2²×3 = 12.', 'easy'),
  m('aptitude', 'ap-sqr-01', 'The square root of 1764 is:', ['38', '42', '44', '48'], 1, '42 × 42 = 1764.', 'medium', { reference: 'PYQ: squares up to 50 are asked every year' }),
  m('aptitude', 'ap-pct-02', 'A number increased by 20% becomes 480. The original number is:', ['360', '384', '400', '420'], 2, '120% of x = 480 → x = 480 × 100 / 120 = 400.', 'medium'),
  m('aptitude', 'ap-cod-01', 'In a code, MANGO is written as NBOHP (each letter shifted one step forward). APPLE is written as:', ['BQQMF', 'BQQNF', 'ZOPKD', 'BRRMF'], 0, 'A→B, P→Q, P→Q, L→M, E→F = BQQMF.', 'medium'),
  m('aptitude', 'ap-br-01', 'A is the father of B, and B is the sister of C. How is A related to C?', ['Uncle', 'Father', 'Brother', 'Grandfather'], 1, 'A is the father of both B and C.', 'easy'),
  m('aptitude', 'ap-dir-01', 'Ravi walks 5 km north, turns right and walks 3 km, then turns right again and walks 5 km. He is now:', ['3 km east of the start', '3 km west of the start', '5 km north of the start', '8 km east of the start'], 0, 'The northward legs cancel; the remaining displacement is 3 km to the east.', 'hard'),
];
