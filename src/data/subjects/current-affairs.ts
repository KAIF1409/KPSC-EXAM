import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * CURRENT AFFAIRS — Karnataka schemes + national static facts that repeat.
 * Everything here is stable/published policy (scheme names, years, institutions);
 * recent-events items should be refreshed from the monthly current-affairs PDF.
 * // TODO: PASTE_PARSED_MCQS_HERE — month-wise current affairs additions.
 */
export const CURRENT_AFFAIRS_QUESTIONS: MCQ[] = [
  m('current-affairs', 'ca-sch-01', 'The "Shakti" scheme of the Government of Karnataka provides:', ['Free bus travel for women', 'Free electricity for farmers', 'Cash transfer to women heads', 'Free milk for school children'], 0, 'Shakti (2023) gives free travel to women in state-run ordinary buses within Karnataka.', 'easy', { reference: 'Karnataka Budget 2023-24 guarantee schemes' }),
  m('current-affairs', 'ca-sch-02', 'Under the "Gruha Lakshmi" scheme, Karnataka provides:', ['₹2,000 per month to eligible women heads of families', '₹5,000 per month to all households', 'Free gas cylinders', 'Free housing to all women'], 0, '₹2,000/month is credited to the woman head of the eligible household.', 'easy'),
  m('current-affairs', 'ca-sch-03', 'The "Gruha Jyothi" scheme guarantees:', ['Free electricity up to 200 units per month', 'Free water connection', 'Subsidy on LPG', 'Free solar pumps'], 0, 'Domestic consumers get up to 200 units free each month.', 'easy'),
  m('current-affairs', 'ca-sch-04', '"Yuva Nidhi", a Karnataka guarantee scheme, provides:', ['Unemployment allowance to educated youth', 'Loans to start-ups', 'Free skill training only', 'Pension to youth'], 0, 'Yuva Nidhi gives ₹3,000 (degree) / ₹1,500 (diploma) per month for a limited period to eligible unemployed youth.', 'medium'),
  m('current-affairs', 'ca-gov-01', 'The Nanjundappa Committee (Dr. D. M. Nanjundappa Committee) is associated with:', ['Regional imbalance in Karnataka', 'Agricultural pricing', 'Reservation policy', 'Panchayat finances'], 0, 'It identified 114 backward taluks and recommended corrective action for regional imbalance.', 'medium', { reference: 'PYQ: purpose of the Nanjundappa Committee' }),
  m('current-affairs', 'ca-gst-01', 'GST was introduced in India through which Constitutional Amendment?', ['100th', '101st', '102nd', '103rd'], 1, 'The 101st Amendment (2016) introduced GST; it came into force on 1 July 2017.', 'easy'),
  m('current-affairs', 'ca-gst-02', 'The GST Council is constituted under which Article?', ['Article 279A', 'Article 280', 'Article 268A', 'Article 246A'], 0, 'Article 279A created the GST Council; Article 246A gives concurrent taxing power.', 'medium'),
  m('current-affairs', 'ca-rbi-01', 'The repo rate is the rate at which:', ['RBI lends to commercial banks', 'Banks lend to customers', 'RBI borrows from banks', 'Banks borrow abroad'], 0, 'Repo = RBI lends; reverse repo = RBI borrows from banks.', 'easy'),
  m('current-affairs', 'ca-rbi-02', 'Which index does the RBI primarily use for its inflation target?', ['WPI', 'CPI (Combined)', 'IIP', 'GDP deflator'], 1, 'The flexible inflation-targeting framework uses CPI headline inflation (4% ± 2%).', 'medium'),
  m('current-affairs', 'ca-rbi-03', 'CRR (Cash Reserve Ratio) refers to:', ['Cash kept by banks with the RBI', 'Liquid assets held by banks', 'Interest paid on deposits', 'Foreign exchange reserves'], 0, 'CRR is kept as cash with the RBI and earns no interest; SLR is held in liquid assets.', 'easy'),
  m('current-affairs', 'ca-ka-01', 'Which sector contributes the largest share to Karnataka\u2019s GSDP?', ['Agriculture', 'Services (including IT)', 'Mining', 'Manufacturing only'], 1, 'Services, led by IT/BT and start-ups, dominate Karnataka\u2019s GSDP.', 'easy'),
  m('current-affairs', 'ca-ka-02', 'Bengaluru is popularly known as:', ['Silicon Valley of India', 'Manchester of India', 'Detroit of India', 'City of Palaces'], 0, 'Bengaluru\u2019s IT/ITES cluster earned it the "Silicon Valley of India" tag.', 'easy'),
  m('current-affairs', 'ca-ka-03', 'Which district is the largest contributor to Karnataka\u2019s economy?', ['Bengaluru Urban', 'Belagavi', 'Dharwad', 'Mysuru'], 0, 'Bengaluru Urban alone contributes a large share of state GSDP and IT exports.', 'easy'),
  m('current-affairs', 'ca-ka-04', 'The Karnataka government\u2019s e-governance platform for land records is:', ['Bhoomi', 'Seva Sindhu', 'Sakala only', 'Nemmadi'], 0, 'Bhoomi (land records) and Nemmadi (rural telecentres) are Karnataka\u2019s flagship e-governance projects.', 'medium'),
];
