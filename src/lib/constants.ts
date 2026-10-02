import type { Subject, SubjectId } from '@/types/exam';

export const APP_NAME = 'Karnataka VAO Prep';
export const APP_TAGLINE = '30-Day MCQ Program · Subject Practice · 30 Mock Exams';

/** Exam day. The dashboard counts down to this date. */
export const TARGET_DATE = '2026-10-25';

export const PROGRAM_LENGTH = 30;
export const MOCK_EXAM_COUNT = 30;
export const MOCK_DURATION_MINUTES = 120;
export const QUESTIONS_PER_PAPER = 100;

/** localStorage contract — version it, never rename it. */
export const STORE_KEY = 'vao-prep-state-v1';
export const STORE_VERSION = 1;

export const SUBJECTS: Subject[] = [
  {
    id: 'kannada',
    name: 'General Kannada',
    nameKannada: 'ಸಾಮಾನ್ಯ ಕನ್ನಡ',
    paper: 'PAPER_2',
    description: 'ವ್ಯಾಕರಣ, ಸಂಧಿ, ಸಮಾಸ, ಛಂದಸ್ಸು, ಅಲಂಕಾರ ಹಾಗೂ ಕನ್ನಡ ಸಾಹಿತ್ಯ.',
  },
  {
    id: 'english',
    name: 'General English',
    nameKannada: 'ಸಾಮಾನ್ಯ ಇಂಗ್ಲಿಷ್',
    paper: 'PAPER_2',
    description: 'Grammar, prepositions, voice, narration, idioms, synonyms and antonyms.',
  },
  {
    id: 'computer-literacy',
    name: 'Computer Literacy',
    nameKannada: 'ಗಣಕ ಪರಿಜ್ಞಾನ',
    paper: 'PAPER_2',
    description: 'Fundamentals, MS Office shortcut keys, internet, networking, cyber safety.',
  },
  {
    id: 'karnataka-history',
    name: 'Karnataka History',
    nameKannada: 'ಕರ್ನಾಟಕ ಇತಿಹಾಸ',
    paper: 'PAPER_1',
    description: 'Kadambas to unification: dynasties, inscriptions, freedom struggle, integration.',
  },
  {
    id: 'karnataka-geography',
    name: 'Karnataka Geography',
    nameKannada: 'ಕರ್ನಾಟಕ ಭೂಗೋಳ',
    paper: 'PAPER_1',
    description: 'Physiography, rivers, soils, forests, minerals, agriculture and industry.',
  },
  {
    id: 'polity-governance',
    name: 'Polity & Governance',
    nameKannada: 'ರಾಜಕೀಯ ವ್ಯವಸ್ಥೆ',
    paper: 'PAPER_1',
    description: 'Constitution, Articles, fundamental rights, emergency, local self-government.',
  },
  {
    id: 'current-affairs',
    name: 'Current Affairs',
    nameKannada: 'ಪ್ರಚಲಿತ ವಿದ್ಯಮಾನ',
    paper: 'PAPER_1',
    description: 'National + Karnataka schemes, awards, appointments, indices and reports.',
  },
  {
    id: 'general-science',
    name: 'General Science',
    nameKannada: 'ಸಾಮಾನ್ಯ ವಿಜ್ಞಾನ',
    paper: 'PAPER_1',
    description: 'Physics, chemistry, biology and health — the KPSC high-frequency core.',
  },
  {
    id: 'land-revenue',
    name: 'Land Revenue & Village Administration',
    nameKannada: 'ಕಂದಾಯ ಹಾಗೂ ಗ್ರಾಮ ಆಡಳಿತ',
    paper: 'PAPER_1',
    description: 'Karnataka Land Revenue Act, RTC/Pahani, survey, VAO duties and Panchayat linkage.',
  },
  {
    id: 'aptitude',
    name: 'Aptitude & Mental Ability',
    nameKannada: 'ಸಾಮಾನ್ಯ ಅರಿವು ಹಾಗೂ ಮಾನಸಿಕ ಸಾಮರ್ಥ್ಯ',
    paper: 'PAPER_1',
    description: 'Percentages, averages, ratio, series, coding-decoding, blood relations.',
  },
];

export const SUBJECT_MAP: Record<SubjectId, Subject> = SUBJECTS.reduce(
  (acc, subject) => {
    acc[subject.id] = subject;
    return acc;
  },
  {} as Record<SubjectId, Subject>,
);

export function subjectById(id: SubjectId): Subject {
  return SUBJECT_MAP[id];
}

/** Synthetic tag used by mixed-revision days (e.g. Day 30). */
export const MIXED_SUBJECT = {
  id: 'mixed',
  name: 'Mixed Revision',
  nameKannada: 'ಮಿಶ್ರ ಪುನರಾವರ್ತನೆ',
  paper: 'PAPER_1',
  description: 'Full-syllabus mixed revision set drawn from every paper.',
} as const;

/**
 * Safe label lookup for day tiles: a day can be tagged with a real subject or
 * with 'mixed', and the UI must never crash on either.
 */
export function daySubjectLabel(id: SubjectId | 'mixed'): {
  name: string;
  nameKannada: string;
} {
  if (id === 'mixed') {
    return { name: MIXED_SUBJECT.name, nameKannada: MIXED_SUBJECT.nameKannada };
  }
  const subject = SUBJECT_MAP[id];
  return { name: subject.name, nameKannada: subject.nameKannada };
}

export const PAPER_LABELS: Record<string, string> = {
  PAPER_1: 'Paper 1 · General Knowledge',
  PAPER_2: 'Paper 2 · Kannada / English / Computer',
};

export const DIFFICULTY_LABELS = ['easy', 'medium', 'hard'] as const;
