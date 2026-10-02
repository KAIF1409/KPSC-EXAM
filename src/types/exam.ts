/**
 * Core domain types for the Karnataka VAO MCQ-first preparation platform.
 *
 * Exam framework this app models:
 *  - Paper 1: General Knowledge (100 questions)
 *  - Paper 2: General Kannada / General English / Computer Literacy (100 questions)
 *  - Every question is a single-correct 4-option MCQ (KPSC/KEA style).
 */

/** Official paper split of the Karnataka VAO exam. */
export type Paper = 'PAPER_1' | 'PAPER_2';

/** Difficulty tag used by the practice-bank filter bar. */
export type Difficulty = 'easy' | 'medium' | 'hard';

/** Every subject exposed in the Subject-wise Practice hub. */
export type SubjectId =
  | 'kannada'
  | 'english'
  | 'computer-literacy'
  | 'karnataka-history'
  | 'karnataka-geography'
  | 'polity-governance'
  | 'current-affairs'
  | 'general-science'
  | 'land-revenue'
  | 'aptitude';

export interface Subject {
  id: SubjectId;
  name: string;
  /** Kannada label so the UI stays bilingual-ready. */
  nameKannada: string;
  paper: Paper;
  description: string;
}

export interface MCQ {
  /** Globally unique, stable id: e.g. "gs-phy-01". Used as the localStorage key. */
  id: string;
  subject: SubjectId;
  paper: Paper;
  difficulty: Difficulty;
  questionText: string;
  /** Optional Kannada rendering of the question stem (bilingual support). */
  questionTextKannada?: string;
  options: string[];
  /** Optional Kannada rendering of each option (same index order as `options`). */
  optionsKannada?: string[];
  correctAnswerIndex: number;
  explanationText: string;
  /** Source anchor: book / chapter / Act section, printed under the explanation. */
  reference?: string;
}

/** A day may drill one subject or a full-syllabus mixed revision set. */
export type DaySubjectId = SubjectId | 'mixed';

/** One day of the sequential 30-day program. */
export interface DayProgram {
  dayNumber: number;
  topicTitle: string;
  topicTitleKannada?: string;
  subject: DaySubjectId;
  paper: Paper;
  /** Bullet list shown in the day header ("what to master today"). */
  focusPoints: string[];
  estimatedMinutes: number;
  questions: MCQ[];
}

export type MockMix = 'foundation' | 'standard' | 'advanced';

/** One full-length mock exam (Paper 1 + Paper 2). */
export interface MockExam {
  id: string;
  mockNumber: number;
  title: string;
  /** One-line description of what the paper drills. */
  focus: string;
  difficultyMix: MockMix;
  durationMinutes: number;
  /** Target size of the real paper (100). Deployed bank may be smaller until hydrated. */
  targetPaperSize: number;
  paperA: MCQ[];
  paperB: MCQ[];
}

/* ------------------------------------------------------------------ */
/* Persisted progress model (localStorage: vao-prep-state-v1)          */
/* ------------------------------------------------------------------ */

/** Where an answer was attempted from — drives the Revision Zone grouping. */
export type StudyMode = 'day' | 'practice' | 'revision' | 'mock';

export interface DayScore {
  correct: number;
  total: number;
  updatedAt: string;
}

export type MockStatus = 'not-started' | 'in-progress' | 'completed';

export interface MockAttempt {
  mockId: string;
  status: MockStatus;
  /** questionId -> selected option index (null = seen but not answered). */
  answers: Record<string, number | null>;
  /** question ids flagged by the student for later review. */
  marked: string[];
  /** Index inside the flattened paper list (paperA then paperB). */
  index: number;
  /** Which paper the timer is currently running for. */
  activePaper: Paper;
  remainingSeconds: number;
  startedAt: string | null;
  submittedAt: string | null;
  timeTakenSeconds: number;
  score: number;
  total: number;
  accuracy: number;
  /** subjectId -> { correct, total } breakdown for the results ledger. */
  subjectBreakdown: Record<string, { correct: number; total: number }>;
}

export interface SubjectStat {
  attempted: number;
  correct: number;
}

export interface PracticeSession {
  id: string;
  subject: SubjectId;
  total: number;
  correct: number;
  mode: 'all' | 'mistakes-only';
  finishedAt: string;
}
