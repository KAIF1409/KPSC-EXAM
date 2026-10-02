import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * GENERAL SCIENCE — the highest-frequency section of KPSC / KEA / VAO papers.
 * Pattern: one-line fact, "which lens / which unit", "in which medium", formula recall.
 * Sourced from the PYQ frequency sheet (repeated questions, last 10 years).
 *
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the master science PDFs.
 */
export const GENERAL_SCIENCE_QUESTIONS: MCQ[] = [
  m('general-science', 'gs-phy-01', 'Myopia (short-sightedness) is corrected by using which lens?', ['Concave lens', 'Convex lens', 'Cylindrical lens', 'Bifocal lens'], 0, 'A concave (diverging) lens shifts the image back onto the retina.', 'easy', { reference: 'PYQ: repeated in KPSC Group C & FDA papers' }),
  m('general-science', 'gs-phy-02', 'Hypermetropia (long-sightedness) is corrected by which lens?', ['Concave lens', 'Convex lens', 'Plano-concave lens', 'Convex mirror'], 1, 'A convex (converging) lens brings the image forward onto the retina.', 'easy'),
  m('general-science', 'gs-phy-03', 'Sound waves cannot travel through which of the following?', ['Steel', 'Water', 'Air', 'Vacuum'], 3, 'Sound is a mechanical wave and needs a material medium.', 'easy'),
  m('general-science', 'gs-phy-04', 'The speed of sound is maximum in which medium?', ['Gases', 'Liquids', 'Solids', 'Vacuum'], 2, 'Speed order: solids > liquids > gases.', 'medium'),
  m('general-science', 'gs-phy-05', 'The sky appears blue because of which phenomenon?', ['Reflection of light', 'Scattering of light', 'Total internal reflection', 'Dispersion of light'], 1, 'Shorter blue wavelengths are scattered most by air molecules (Rayleigh scattering).', 'easy'),
  m('general-science', 'gs-phy-06', 'Total internal reflection is used in which device?', ['Optical fibre', 'Thermometer', 'Barometer', 'Galvanometer'], 0, 'Light is trapped inside the fibre core by repeated total internal reflection.', 'medium'),
  m('general-science', 'gs-phy-07', 'A gun firing a bullet and recoiling backwards is an example of which law?', ['Newton\u2019s first law', 'Newton\u2019s second law', 'Newton\u2019s third law', 'Law of gravitation'], 2, 'Every action has an equal and opposite reaction.', 'easy'),
  m('general-science', 'gs-phy-08', 'Heat from the Sun reaches the Earth by which mode of transfer?', ['Conduction', 'Convection', 'Radiation', 'Induction'], 2, 'Radiation needs no medium and works through vacuum.', 'easy'),
  m('general-science', 'gs-phy-09', 'The SI unit of force is:', ['Joule', 'Newton', 'Pascal', 'Watt'], 1, '1 N = 1 kg m/s². Joule is energy, Pascal is pressure, Watt is power.', 'easy'),
  m('general-science', 'gs-phy-10', 'Hydraulic brakes work on which principle?', ['Archimedes\u2019 principle', 'Pascal\u2019s law', 'Bernoulli\u2019s principle', 'Newton\u2019s law'], 1, 'Pressure applied to an enclosed liquid is transmitted equally in all directions.', 'medium'),
  m('general-science', 'gs-phy-11', 'Which mirror is used as a rear-view mirror in vehicles?', ['Concave mirror', 'Convex mirror', 'Plane mirror', 'Parabolic mirror'], 1, 'A convex mirror gives an erect, diminished image and a wider field of view.', 'medium'),
  m('general-science', 'gs-chem-01', 'The pH value of pure water at 25 °C is:', ['0', '7', '10', '14'], 1, 'Neutral solution: acid < 7, neutral = 7, base > 7.', 'easy'),
  m('general-science', 'gs-chem-02', 'The chemical formula of baking soda is:', ['NaHCO₃', 'Na₂CO₃', 'CaOCl₂', 'NaCl'], 0, 'Sodium bicarbonate = NaHCO₃. Washing soda is Na₂CO₃·10H₂O; bleaching powder CaOCl₂.', 'easy'),
  m('general-science', 'gs-chem-03', 'The chemical formula of Plaster of Paris is:', ['CaSO₄·2H₂O', 'CaSO₄·½H₂O', 'CaCO₃', 'Ca(OH)₂'], 1, 'Gypsum on controlled heating gives CaSO₄·½H₂O (Plaster of Paris).', 'medium'),
  m('general-science', 'gs-chem-04', 'Which metal is liquid at room temperature?', ['Mercury', 'Bromine', 'Sodium', 'Gallium'], 0, 'Mercury is the only liquid metal at room temperature; bromine is the liquid non-metal.', 'easy'),
  m('general-science', 'gs-chem-05', 'Brass is an alloy of which metals?', ['Copper and Tin', 'Copper and Zinc', 'Iron and Carbon', 'Aluminium and Copper'], 1, 'Brass = Cu + Zn. Bronze = Cu + Sn. Stainless steel = Fe + Cr + Ni.', 'medium'),
  m('general-science', 'gs-chem-06', 'Which gas, along with moisture, is mainly responsible for the rusting of iron?', ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen'], 1, 'Rust is hydrated iron oxide (Fe₂O₃·xH₂O) formed in the presence of oxygen and moisture.', 'easy'),
  m('general-science', 'gs-chem-07', 'An aqueous solution that turns blue litmus red is:', ['Acidic', 'Basic', 'Neutral', 'Amphoteric'], 0, 'Acids turn blue litmus red; bases turn red litmus blue.', 'easy'),
  m('general-science', 'gs-bio-01', 'Which organelle is called the powerhouse of the cell?', ['Ribosome', 'Lysosome', 'Mitochondria', 'Golgi body'], 2, 'Mitochondria release energy as ATP; ribosome makes protein; lysosome is the suicide bag.', 'easy'),
  m('general-science', 'gs-bio-02', 'Deficiency of which vitamin causes scurvy?', ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin D'], 2, 'Vitamin C → scurvy, A → night blindness, B1 → beriberi, D → rickets.', 'easy'),
  m('general-science', 'gs-bio-03', 'Which blood group is called the universal donor?', ['AB positive', 'A positive', 'O negative', 'B negative'], 2, 'O negative carries no A/B/Rh antigens; AB positive is the universal recipient.', 'easy'),
  m('general-science', 'gs-bio-04', 'The functional unit of the kidney is the:', ['Neuron', 'Nephron', 'Alveolus', 'Villus'], 1, 'Neuron = nerve unit; alveolus = lung; villus = small intestine.', 'medium'),
  m('general-science', 'gs-bio-05', 'Which part of the human brain controls balance and posture?', ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], 1, 'Cerebrum = thinking; medulla = involuntary actions like heartbeat and breathing.', 'medium'),
  m('general-science', 'gs-bio-06', 'Cell theory was proposed by:', ['Robert Hooke', 'Schleiden and Schwann', 'Louis Pasteur', 'Charles Darwin'], 1, 'Hooke coined the term "cell"; Schleiden and Schwann proposed the cell theory.', 'hard'),
  m('general-science', 'gs-bio-07', 'The number of chambers in the human heart is:', ['Two', 'Three', 'Four', 'Five'], 2, 'Two atria + two ventricles; the pulmonary artery is the exception that carries deoxygenated blood.', 'easy'),
];

