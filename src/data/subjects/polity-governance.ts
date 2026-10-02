import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * POLITY & GOVERNANCE — Articles are the single most repeated KPSC pattern
 * ("Article 32 relates to?"). Learn the number, the body and the age limits.
 *
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the Indian Polity PDFs.
 */
export const POLITY_GOVERNANCE_QUESTIONS: MCQ[] = [
  m('polity-governance', 'pol-art-01', 'Article 32 of the Constitution deals with:', ['Writ jurisdiction of the Supreme Court', 'Writ jurisdiction of High Courts', 'Election Commission', 'Financial emergency'], 0, 'Article 32 = constitutional remedies (Supreme Court writs); Article 226 = High Court writs.', 'easy', { reference: 'PYQ: Article 32 vs 226 is a perennial trap question' }),
  m('polity-governance', 'pol-art-02', 'The Election Commission of India is established under which Article?', ['Article 148', 'Article 324', 'Article 280', 'Article 315'], 1, 'Article 324 = superintendence of elections; 148 = CAG; 280 = Finance Commission; 315 = Public Service Commissions.', 'easy'),
  m('polity-governance', 'pol-art-03', 'The Comptroller and Auditor General of India is provided under which Article?', ['Article 148', 'Article 149', 'Article 150', 'Article 151'], 0, 'Article 148 establishes the CAG; the CAG reports to the President.', 'medium'),
  m('polity-governance', 'pol-art-04', 'President\u2019s Rule in a State is imposed under which Article?', ['Article 352', 'Article 356', 'Article 360', 'Article 365'], 1, '352 = national emergency, 356 = President\u2019s rule, 360 = financial emergency (never used).', 'easy'),
  m('polity-governance', 'pol-art-05', 'Which emergency provision has never been used in India so far?', ['National emergency', 'President\u2019s rule', 'Financial emergency', 'Armed rebellion'], 2, 'Article 360 (financial emergency) has never been invoked.', 'medium'),
  m('polity-governance', 'pol-art-06', 'The retirement age of a Supreme Court judge is:', ['60 years', '62 years', '65 years', '68 years'], 2, 'Supreme Court: 65 years; High Court: 62 years.', 'easy'),
  m('polity-governance', 'pol-art-07', 'Defence is included in which list of the Seventh Schedule?', ['Union List', 'State List', 'Concurrent List', 'Residuary List'], 0, 'Defence → Union List, Police → State List, Education → Concurrent List.', 'easy'),
  m('polity-governance', 'pol-art-08', 'Police and public order are subjects of which list?', ['Union List', 'State List', 'Concurrent List', 'Seventh List'], 1, 'Law and order is a State subject; the Centre intervenes only in special cases.', 'easy'),
  m('polity-governance', 'pol-art-09', 'Fundamental Rights are enshrined in which Part of the Constitution?', ['Part II', 'Part III', 'Part IV', 'Part IV-A'], 1, 'Part III = Fundamental Rights, Part IV = DPSP, Part IV-A = Fundamental Duties.', 'easy'),
  m('polity-governance', 'pol-art-10', 'The Panchayati Raj system was given constitutional status by which amendment?', ['42nd Amendment', '73rd Amendment', '74th Amendment', '86th Amendment'], 1, '73rd (1992) → Panchayats, 74th (1992) → Municipalities; 42nd (1976) is the "mini Constitution".', 'medium'),
  m('polity-governance', 'pol-art-11', 'Which Article provides for the establishment of a Finance Commission?', ['Article 275', 'Article 280', 'Article 300A', 'Article 324'], 1, 'Article 280 provides for the Finance Commission every five years.', 'medium'),
  m('polity-governance', 'pol-art-12', 'The tenure of a member of a State Public Service Commission is:', ['6 years or until 62 years of age', '5 years or until 60 years of age', '6 years or until 65 years of age', 'Until superannuation at 58 years'], 0, 'A State PSC member serves 6 years or until 62 years of age; for the UPSC it is 6 years or 65 years.', 'hard'),
  m('polity-governance', 'pol-art-13', 'The Governor of a State is appointed by:', ['The Chief Minister', 'The President of India', 'The State Legislature', 'The Prime Minister'], 1, 'The Governor is appointed by the President and holds office during the President\u2019s pleasure.', 'easy'),
  m('polity-governance', 'pol-art-14', 'Which Article deals with the Directive Principles of State Policy?', ['Article 36\u201351', 'Article 12\u201335', 'Article 51A', 'Article 52\u201378'], 0, 'DPSP = Articles 36 to 51 (Part IV); Fundamental Duties = Article 51A.', 'medium'),
  m('polity-governance', 'pol-art-15', 'The Karnataka Legislature is:', ['Unicameral', 'Bicameral', 'Nominal', 'Partially nominated'], 1, 'Karnataka has a Legislative Assembly (lower) and a Legislative Council (upper) — bicameral.', 'easy'),
];
