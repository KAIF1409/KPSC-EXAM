import type { Difficulty, MCQ, SubjectId } from '@/types/exam';
import { SUBJECT_MAP } from '@/lib/constants';

type Options = [string, string, string, string];

/**
 * Compact MCQ factory.
 *
 * Data files stay readable and the paper/subject metadata is never duplicated:
 *
 *   m('general-science', 'gs-phy-01', 'Myopia is corrected by which lens?',
 *     ['Concave', 'Convex', 'Cylindrical', 'Bifocal'], 0,
 *     'Concave (diverging) lens diverges rays before they reach the retina.')
 */
export function mcq(
  subject: SubjectId,
  id: string,
  questionText: string,
  options: Options,
  correctAnswerIndex: number,
  explanationText: string,
  difficulty: Difficulty = 'medium',
  extra: Partial<Pick<MCQ, 'reference' | 'questionTextKannada' | 'optionsKannada'>> = {},
): MCQ {
  return {
    id,
    subject,
    paper: SUBJECT_MAP[subject].paper,
    difficulty,
    questionText,
    options,
    correctAnswerIndex,
    explanationText,
    ...extra,
  };
}

/** Shorthand used across every data file. */
export const m = mcq;
