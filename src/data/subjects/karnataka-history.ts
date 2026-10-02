import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * KARNATAKA HISTORY — inscriptions, dynasties, unification and the freedom struggle.
 * KPSC loves "which inscription / which district" fact-swapping traps.
 *
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the Karnataka history PDFs.
 */
export const KARNATAKA_HISTORY_QUESTIONS: MCQ[] = [
  m('karnataka-history', 'kh-ins-01', 'Halmidi, the earliest known Kannada inscription, was discovered in which district?', ['Hassan', 'Shivamogga', 'Belagavi', 'Kalaburagi'], 0, 'Halmidi (Hassan district) belongs to the Kadamba period, c. 450 CE — Talagunda is in Shivamogga.', 'medium', { reference: 'PYQ trap: Halmidi (Hassan) vs Talagunda (Shivamogga) are deliberately swapped' }),
  m('karnataka-history', 'kh-ins-02', 'The Talagunda inscription is associated with which dynasty?', ['Kadambas of Banavasi', 'Western Gangas', 'Chalukyas of Badami', 'Rashtrakutas'], 0, 'Talagunda (Shivamogga) records Kadamba history; it is linked to Kakusthavarma.', 'hard'),
  m('karnataka-history', 'kh-ins-03', 'The capital of the Badami Chalukyas was:', ['Badami (Vatapi)', 'Manyakheta', 'Halebidu', 'Kanchi'], 0, 'Pulakeshin I founded Badami (Vatapi); the Rashtrakutas later shifted the capital to Manyakheta.', 'medium'),
  m('karnataka-history', 'kh-dyn-01', 'Which Chalukya ruler defeated Harshavardhana on the banks of the Narmada?', ['Pulakeshin II', 'Vikramaditya VI', 'Kirtivarman I', 'Someshwara I'], 0, 'Pulakeshin II (610–642 CE) checked Harsha\u2019s southward march and took the title Parameshwara.', 'medium'),
  m('karnataka-history', 'kh-dyn-02', 'Amoghavarsha, the famous Rashtrakuta king, wrote which Kannada work?', ['Kavirajamarga', 'Vikramarjuna Vijaya', 'Gadugina Bharata', 'Manasollasa'], 0, 'Kavirajamarga (c. 850 CE) is the earliest extant Kannada work, attributed to Amoghavarsha I / Srivijaya.', 'hard'),
  m('karnataka-history', 'kh-vij-01', 'Vijayanagara was founded in 1336 CE by:', ['Harihara and Bukka', 'Krishnadevaraya', 'Vidyaranya and Devaraya II', 'Pulakeshin II'], 0, 'Harihara I and Bukka Raya I founded the empire on the Tungabhadra; Vidyaranya was their guide.', 'easy'),
  m('karnataka-history', 'kh-vij-02', 'The Battle of Talikota, which led to the fall of Vijayanagara, was fought in:', ['1565 CE', '1526 CE', '1570 CE', '1600 CE'], 0, '1565: Deccan Sultanates defeated Aliya Rama Raya at Rakshasa-Tangadi (Talikota).', 'medium'),
  m('karnataka-history', 'kh-vij-03', 'Krishnadevaraya of Vijayanagara ruled during:', ['1336–1356 CE', '1422–1446 CE', '1509–1529 CE', '1565–1572 CE'], 2, 'His reign (1509–29) is called the golden age of Telugu and Kannada literature patronised at court.', 'medium'),
  m('karnataka-history', 'kh-bah-01', 'The original capital of the Bahmani kingdom was:', ['Gulbarga (Kalaburagi)', 'Bidar', 'Bijapur', 'Bidar and Bijapur'], 0, 'The capital was later shifted from Gulbarga to Bidar.', 'medium'),
  m('karnataka-history', 'kh-fre-01', 'Kittur Rani Chennamma led an armed revolt against the British in:', ['1824', '1830', '1848', '1857'], 0, 'Her 1824 revolt at Kittur preceded the 1857 First War of Independence.', 'medium'),
  m('karnataka-history', 'kh-fre-02', 'Rani Abbakka Chowta, who fought the Portuguese, belonged to which region?', ['Tuluva coast (Ullal)', 'Kodagu', 'Raichur', 'Bidar'], 0, 'Abbakka Chowta of Ullal resisted Portuguese control in the 16th century.', 'hard'),
  m('karnataka-history', 'kh-uni-01', 'Karnataka Rajyotsava is celebrated on which date, marking the unification of Karnataka?', ['1 November', '15 August', '26 January', '1 April'], 0, 'On 1 November 1956 the linguistic reorganisation merged Kannada-speaking regions into Mysore State.', 'easy'),
  m('karnataka-history', 'kh-uni-02', 'Mysore State was renamed Karnataka in which year?', ['1956', '1965', '1973', '1980'], 2, 'Renamed with effect from 1 November 1973; Devaraj Urs was the Chief Minister then.', 'medium'),
  m('karnataka-history', 'kh-pol-01', 'Who was the first Chief Minister of Mysore State after independence?', ['K. Chengalaraya Reddy', 'Kengal Hanumanthaiah', 'S. Nijalingappa', 'Devaraj Urs'], 0, 'K. Chengalaraya Reddy headed the first popular ministry (1947–52).', 'hard'),
  m('karnataka-history', 'kh-uni-03', 'The Mysore Unification movement was led by which organisation/leader?', ['Karnataka Vidyavardhaka Sangha and Aluru Venkata Rao', 'Karnataka Rajya Raitha Sangha', 'Praja Socialist Party', 'Karnataka Sangha of Bombay only'], 0, 'Aluru Venkata Rao is called the father of the Karnataka unification movement (Karnataka Ekikarana).', 'hard'),
];
