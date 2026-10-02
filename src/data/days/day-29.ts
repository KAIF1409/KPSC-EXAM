import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 29 — General Science: environment, ecology and public health.
 * // TODO: PASTE_PARSED_MCQS_HERE
 */
export const DAY_29: DayProgram = {
  dayNumber: 29,
  topicTitle: 'Environment, Ecology & Public Health',
  topicTitleKannada: 'ಪರಿಸರ, ಪರಿಸರ ವಿಜ್ಞಾನ ಮತ್ತು ಆರೋಗ್ಯ',
  subject: 'general-science',
  paper: 'PAPER_1',
  focusPoints: [
    'Greenhouse gases and the ozone layer',
    'Nutritional deficiency diseases (iron, iodine, vitamins)',
    'Biodegradable vs non-biodegradable waste',
  ],
  estimatedMinutes: 30,
  questions: [
    m('general-science', 'd29-01', 'The ozone layer protects the Earth from:', ['Infrared rays', 'Ultraviolet rays', 'X-rays', 'Radio waves'], 1, 'Stratospheric ozone absorbs harmful UV-B and UV-C radiation.', 'easy'),
    m('general-science', 'd29-02', 'Which gas is the largest contributor to global warming?', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], 1, 'CO₂ from fossil-fuel burning is the principal greenhouse gas by volume.', 'easy'),
    m('general-science', 'd29-03', 'Deficiency of iron in the diet causes:', ['Anaemia', 'Goitre', 'Rickets', 'Beri-beri'], 0, 'Iron deficiency → anaemia; iodine deficiency → goitre.', 'medium'),
    m('general-science', 'd29-04', 'Which vitamin is synthesised in the skin in the presence of sunlight?', ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'], 2, 'UV-B in sunlight converts 7-dehydrocholesterol to Vitamin D.', 'easy'),
    m('general-science', 'd29-05', 'Which of the following is a biodegradable waste?', ['Plastic bag', 'Vegetable peels', 'Glass bottle', 'Aluminium can'], 1, 'Organic waste such as vegetable peels decomposes naturally.', 'easy'),
  ],
};
