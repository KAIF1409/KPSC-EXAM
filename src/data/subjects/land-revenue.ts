import type { MCQ } from '@/types/exam';
import { m } from '@/data/helpers';

/**
 * LAND REVENUE & VILLAGE ADMINISTRATION — the VAO paper's differentiator.
 * Focus: Karnataka Land Revenue Act, RTC/Pahani, Bhoomi, revenue hierarchy, VAO duties.
 * // TODO: PASTE_PARSED_MCQS_HERE — parsed JSON from the Land Revenue Act notes.
 */
export const LAND_REVENUE_QUESTIONS: MCQ[] = [
  m('land-revenue', 'lr-act-01', 'The Karnataka Land Revenue Act was enacted in the year:', ['1961', '1964', '1974', '1991'], 1, 'Karnataka Land Revenue Act, 1964 governs survey, assessment and collection of land revenue.', 'easy', { reference: 'PYQ: year-based fact question, very frequent' }),
  m('land-revenue', 'lr-rec-01', 'In Karnataka, "RTC" stands for:', ['Register of Transfer of Crops', 'Record of Rights, Tenancy and Crops', 'Revenue Tax Certificate', 'Rural Tenancy Contract'], 1, 'The RTC (Pahani) records owner, extent, soil type, crops and encumbrances of each survey number.', 'easy'),
  m('land-revenue', 'lr-rec-02', 'Which officer prepares and maintains the RTC at the village level?', ['Village Accountant', 'Revenue Inspector', 'Tahsildar', 'Deputy Commissioner'], 0, 'The Village Accountant (VAO) maintains village records; the RTC is digitally signed and issued online.', 'medium'),
  m('land-revenue', 'lr-rec-03', 'The "Bhoomi" project of Karnataka deals with:', ['Rural employment', 'Digitisation of land records', 'Groundwater survey', 'Crop insurance'], 1, 'Launched in 2002, Bhoomi was India\u2019s first online land-record (RTC) delivery system.', 'easy'),
  m('land-revenue', 'lr-rec-04', '"Mutation" in land records means:', ['Cancellation of a survey number', 'Updating records after transfer/inheritance of land', 'Conversion of dry land to wet land', 'Fixing land revenue rates'], 1, 'Mutation (Ferfar) records every change of ownership, partition or inheritance.', 'medium'),
  m('land-revenue', 'lr-adm-01', 'Who is the head of revenue administration in a district?', ['Deputy Commissioner', 'Assistant Commissioner', 'Tahsildar', 'Divisional Commissioner'], 0, 'DC heads the district; the Assistant Commissioner heads a subdivision; the Tahsildar heads a taluk.', 'easy'),
  m('land-revenue', 'lr-adm-02', 'The revenue administration of a taluk is headed by the:', ['Tahsildar', 'Revenue Inspector', 'Village Accountant', 'Deputy Tahsildar'], 0, 'Taluk → Tahsildar; Village → Village Accountant; a group of villages → Revenue Inspector.', 'easy'),
  m('land-revenue', 'lr-adm-03', 'Arrange the revenue hierarchy from the village level upwards:', ['Village Accountant → Revenue Inspector → Tahsildar → Assistant Commissioner', 'Revenue Inspector → Village Accountant → Tahsildar → Deputy Commissioner', 'Tahsildar → Village Accountant → Revenue Inspector → Assistant Commissioner', 'Village Accountant → Tahsildar → Revenue Inspector → Deputy Commissioner'], 0, 'Classic PYQ ordering question: VAO → RI → Tahsildar → AC → DC.', 'medium'),
  m('land-revenue', 'lr-adm-04', 'A "Survey Number" in village records identifies:', ['A specific plot of land', 'A household', 'A village tank', 'A revenue inspector\u2019s beat'], 0, 'Each plot gets a survey number during survey and settlement; subdivisions add letters (e.g. 45/2).', 'easy'),
  m('land-revenue', 'lr-term-01', '"Aamani" land means:', ['Dry land', 'Wet / irrigated land', 'Garden land', 'Government waste land'], 0, 'Aamani = dry land; Bagayat = wet/irrigated land.', 'medium'),
  m('land-revenue', 'lr-term-02', '"Bagayat" land in Karnataka records refers to:', ['Dry land', 'Wet or irrigated land', 'Forest land', 'Grazing land'], 1, 'Bagayat land is assured of irrigation; assessment is higher than for Aamani land.', 'medium'),
  m('land-revenue', 'lr-ref-01', 'The Karnataka Land Reforms Act, which gave land to the tiller, was enacted in:', ['1956', '1961', '1974', '1986'], 1, 'The 1961 Act (amended in 1974) abolished tenancy and fixed a ceiling on holdings.', 'medium'),
  m('land-revenue', 'lr-ref-02', 'Tenancy claims under the land reforms law were decided by the:', ['Land Tribunal', 'Civil Court', 'Gram Panchayat', 'Revenue Inspector'], 0, 'Land Tribunals (later Land Reforms Appellate Authority) adjudicated tenancy claims.', 'hard'),
  m('land-revenue', 'lr-sak-01', 'The Karnataka Sakala Act, which guarantees time-bound citizen services, was passed in:', ['2008', '2011', '2014', '2017'], 1, 'Sakala (Guarantee of Services to Citizens) Act, 2011 notifies deadlines for services such as RTC issue.', 'medium'),
  m('land-revenue', 'lr-vao-01', 'Which of the following is NOT a primary duty of the Village Accountant?', ['Collection of land revenue and arrears', 'Maintenance of village records (RTC, pahani)', 'Conducting examinations for village students', 'Reporting crop and land statistics to the Tahsildar'], 2, 'The VAO is a revenue functionary — law-and-order, statistics and revenue collection are in scope; school examinations are not.', 'medium'),
];
