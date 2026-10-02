import type { DayProgram } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * DAY 1 — General Science: Physics essentials.
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the science PDF for Day 1.
 */
export const DAY_01: DayProgram = {
  dayNumber: 1,
  topicTitle: 'General Science — Light, Sound & Motion',
  topicTitleKannada: 'ಸಾಮಾನ್ಯ ವಿಜ್ಞಾನ — ಬೆಳಕು, ಶಬ್ದ, ಚಲನೆ',
  subject: 'general-science',
  paper: 'PAPER_1',
  focusPoints: [
    'Defects of vision and the lens used to correct them',
    'Sound: medium requirement, speed order, echo and reflection',
    'Newton\u2019s laws with the standard KPSC examples',
  ],
  estimatedMinutes: 35,
  questions: [
    m('general-science', 'd01-01', 'Myopia is corrected by which lens?', ['Concave', 'Convex', 'Cylindrical', 'Plano-convex'], 0, 'Concave (diverging) lens moves the image back onto the retina.', 'easy'),
    m('general-science', 'd01-02', 'An echo is produced due to:', ['Reflection of sound', 'Refraction of sound', 'Dispersion of sound', 'Diffraction of sound'], 0, 'Sound reflects from a distant hard surface and returns as an echo.', 'easy'),
    m('general-science', 'd01-03', 'The speed of sound is least in:', ['Solids', 'Liquids', 'Gases', 'It is the same everywhere'], 2, 'Speed order: solids > liquids > gases.', 'easy'),
    m('general-science', 'd01-04', 'Inertia of a body depends on its:', ['Velocity', 'Mass', 'Shape', 'Colour'], 1, 'Mass is the measure of inertia.', 'medium'),
    m('general-science', 'd01-05', 'A rainbow is formed because of:', ['Refraction and reflection of light', 'Only reflection', 'Only diffraction', 'Scattering by dust'], 0, 'Sunlight refracts into water droplets, reflects inside and disperses into seven colours.', 'medium'),
  ],
};
