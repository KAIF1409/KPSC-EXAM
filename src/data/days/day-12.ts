import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 12 — Karnataka Geography: forests, wildlife, minerals & climate.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_12: DayProgram = {
  dayNumber: 12,
  topicTitle: 'Karnataka Geography — Forests, Wildlife, Minerals & Climate',
  topicTitleKannada: 'ಕರ್ನಾಟಕ ಭೂಗೋಳ — ಅರಣ್ಯ, ವನ್ಯಜೀವಿ, ಖನಿಜ',
  subject: 'karnataka-geography',
  paper: 'PAPER_1',
  focusPoints: [
    'National parks matched to their districts',
    'Gold at Kolar and Hutti; iron ore in Ballari/Chitradurga',
    'Rainfall extremes: Agumbe in Malnad, drought-prone Ballari belt',
  ],
  estimatedMinutes: 35,
  questions: [
    m('karnataka-geography', 'd12-01', 'Nagarhole National Park is located in which district(s)?', ['Kodagu and Mysuru', 'Chamarajanagar only', 'Uttara Kannada', 'Chikkamagaluru'], 0, 'Nagarhole (Rajiv Gandhi NP) lies in Kodagu and Mysuru districts.', 'medium'),
    m('karnataka-geography', 'd12-02', 'Anshi (Dandeli-Anshi) Tiger Reserve is in which district?', ['Uttara Kannada', 'Udupi', 'Shivamogga', 'Hassan'], 0, 'Dandeli-Anshi is in Uttara Kannada district.', 'hard'),
    m('karnataka-geography', 'd12-03', 'Kolar is famous for the mining of:', ['Gold', 'Iron ore', 'Manganese', 'Bauxite'], 0, 'Kolar Gold Fields (KGF) and Hutti (Raichur) are Karnataka\u2019s historic gold mines.', 'easy'),
    m('karnataka-geography', 'd12-04', 'Which place in Karnataka receives the highest rainfall?', ['Agumbe', 'Bengaluru', 'Ballari', 'Kalaburagi'], 0, 'Agumbe in Shivamogga district (Malnad) receives very heavy monsoon rainfall.', 'medium'),
    m('karnataka-geography', 'd12-05', 'Karnataka\u2019s iron-ore rich Ballari–Chitradurga belt belongs mainly to which rock system?', ['Dharwar system', 'Vindhyan system', 'Deccan traps', 'Gondwana system'], 0, 'The Archaean Dharwar system hosts most of Karnataka\u2019s metallic minerals.', 'hard'),
  ],
};
