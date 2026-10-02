import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 3 — General Science: Biology & health.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_03: DayProgram = {
  dayNumber: 3,
  topicTitle: 'General Science — Biology: Cell, Vitamins & Human Body',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ವಿಜ್ಞಾನ — ಜೀವಶಾಸ್ತ್ರ',
  subject: 'general-science',
  paper: 'PAPER_1',
  focusPoints: [
    'Cell organelles and their nicknames (powerhouse, protein factory, suicide bag)',
    'Vitamin deficiency diseases and blood groups',
    'Disease and vector pairs that repeat in exams',
  ],
  estimatedMinutes: 35,
  questions: [
    m('general-science', 'd03-01', 'Which organelle is called the protein factory of the cell?', ['Ribosome', 'Mitochondria', 'Lysosome', 'Vacuole'], 0, 'Ribosomes synthesise proteins; mitochondria release energy.', 'easy'),
    m('general-science', 'd03-02', 'Which organelle is known as the "suicide bag" of the cell?', ['Golgi body', 'Lysosome', 'Nucleolus', 'Chloroplast'], 1, 'Lysosomes contain digestive enzymes and can digest the cell itself.', 'medium'),
    m('general-science', 'd03-03', 'Deficiency of Vitamin D causes:', ['Scurvy', 'Rickets', 'Beriberi', 'Night blindness'], 1, 'Vitamin D deficiency → rickets in children; C → scurvy.', 'easy'),
    m('general-science', 'd03-04', 'Which blood group is the universal recipient?', ['O negative', 'A positive', 'AB positive', 'B negative'], 2, 'AB positive has no antibodies against A, B or Rh antigens.', 'easy'),
    m('general-science', 'd03-05', 'Malaria is transmitted by:', ['Female Anopheles mosquito', 'Male Anopheles mosquito', 'Culex mosquito', 'Aedes mosquito'], 0, 'Only the female Anopheles transmits the Plasmodium parasite; Aedes spreads dengue.', 'medium'),
  ],
};
