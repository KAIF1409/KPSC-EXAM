import type { MCQ, SubjectId } from '@/types/exam';
import { APTITUDE_QUESTIONS } from '@/data/subjects/aptitude';
import { COMPUTER_LITERACY_QUESTIONS } from '@/data/subjects/computer-literacy';
import { CURRENT_AFFAIRS_QUESTIONS } from '@/data/subjects/current-affairs';
import { ENGLISH_QUESTIONS } from '@/data/subjects/english';
import { GENERAL_SCIENCE_QUESTIONS } from '@/data/subjects/general-science';
import { KANNADA_QUESTIONS } from '@/data/subjects/kannada';
import { KARNATAKA_GEOGRAPHY_QUESTIONS } from '@/data/subjects/karnataka-geography';
import { KARNATAKA_HISTORY_QUESTIONS } from '@/data/subjects/karnataka-history';
import { LAND_REVENUE_QUESTIONS } from '@/data/subjects/land-revenue';
import { POLITY_GOVERNANCE_QUESTIONS } from '@/data/subjects/polity-governance';

/**
 * Subject-wise practice bank.
 * One file per subject (see this folder) so each can be hydrated independently
 * from the parsed master PDFs without touching the other subjects.
 */
export const SUBJECT_BANK: Record<SubjectId, MCQ[]> = {
  aptitude: APTITUDE_QUESTIONS,
  'computer-literacy': COMPUTER_LITERACY_QUESTIONS,
  'current-affairs': CURRENT_AFFAIRS_QUESTIONS,
  english: ENGLISH_QUESTIONS,
  'general-science': GENERAL_SCIENCE_QUESTIONS,
  kannada: KANNADA_QUESTIONS,
  'karnataka-geography': KARNATAKA_GEOGRAPHY_QUESTIONS,
  'karnataka-history': KARNATAKA_HISTORY_QUESTIONS,
  'land-revenue': LAND_REVENUE_QUESTIONS,
  'polity-governance': POLITY_GOVERNANCE_QUESTIONS,
};

/** Flat list of every practice-bank question. */
export const SUBJECT_QUESTIONS: MCQ[] = Object.values(SUBJECT_BANK).flat();

export function questionsForSubject(subject: SubjectId): MCQ[] {
  return SUBJECT_BANK[subject] ?? [];
}
