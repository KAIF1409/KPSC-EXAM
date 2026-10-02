/**
 * Content QA script (optional, dev-only).
 *
 *   npm run validate
 *
 * Bundles this file with esbuild and runs it under Node to assert that the
 * question bank is internally consistent BEFORE it ships:
 *   - unique question ids (they are the localStorage keys)
 *   - exactly four options, non-duplicated, with an in-range answer index
 *   - every explanation/reference populated
 *   - 30 days with at least 5 questions each, numbered 1..30
 *   - 30 mocks whose papers contain no duplicate questions
 *   - question.paper always matches the subject's official paper
 */

import { ALL_QUESTIONS, DAYS, MOCKS, SUBJECT_QUESTIONS, DAY_QUESTIONS, TOTAL_QUESTION_COUNT } from '@/data';
import { PAPER_1_POOL, PAPER_2_POOL } from '@/data/mocks/build';
import { SUBJECT_MAP } from '@/lib/constants';

const MIN_QUESTIONS_PER_DAY = 5;
const problems: string[] = [];

function duplicates(ids: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  ids.forEach((id) => {
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  });
  return [...dupes];
}

/* ---------- 1. question-level integrity ---------- */
ALL_QUESTIONS.forEach((question) => {
  if (question.options.length !== 4) {
    problems.push(`${question.id}: expected 4 options, found ${question.options.length}`);
  }
  if (new Set(question.options).size !== question.options.length) {
    problems.push(`${question.id}: duplicate option text`);
  }
  if (question.correctAnswerIndex < 0 || question.correctAnswerIndex > 3) {
    problems.push(`${question.id}: answer index out of range (${question.correctAnswerIndex})`);
  }
  if (!question.explanationText || question.explanationText.length < 10) {
    problems.push(`${question.id}: explanation missing or too short`);
  }
  const subject = SUBJECT_MAP[question.subject];
  if (!subject) {
    problems.push(`${question.id}: unknown subject "${question.subject}"`);
  } else if (subject.paper !== question.paper) {
    problems.push(`${question.id}: paper ${question.paper} does not match subject paper ${subject.paper}`);
  }
});

/* ---------- 2. duplicate ids inside each authored source ---------- */
duplicates(SUBJECT_QUESTIONS.map((q) => q.id)).forEach((id) =>
  problems.push(`duplicate id in subject bank: ${id}`),
);
duplicates(DAY_QUESTIONS.map((q) => q.id)).forEach((id) =>
  problems.push(`duplicate id across day files: ${id}`),
);

/* ---------- 3. day program shape ---------- */
if (DAYS.length !== 30) problems.push(`expected 30 days, found ${DAYS.length}`);
DAYS.forEach((day, index) => {
  if (day.dayNumber !== index + 1) {
    problems.push(`day file ${index + 1} declares dayNumber ${day.dayNumber}`);
  }
  if (day.questions.length < MIN_QUESTIONS_PER_DAY) {
    problems.push(`day ${day.dayNumber}: only ${day.questions.length} questions (need ${MIN_QUESTIONS_PER_DAY}+)`);
  }
  if (day.focusPoints.length === 0) problems.push(`day ${day.dayNumber}: no focus points`);
});

/* ---------- 4. mock exam shape ---------- */
if (MOCKS.length !== 30) problems.push(`expected 30 mocks, found ${MOCKS.length}`);
MOCKS.forEach((mock, index) => {
  if (mock.mockNumber !== index + 1) {
    problems.push(`mock file ${index + 1} declares mockNumber ${mock.mockNumber}`);
  }
  duplicates(mock.paperA.map((q) => q.id)).forEach((id) =>
    problems.push(`${mock.id} Paper 1 contains ${id} twice`),
  );
  duplicates(mock.paperB.map((q) => q.id)).forEach((id) =>
    problems.push(`${mock.id} Paper 2 contains ${id} twice`),
  );
  if (mock.paperA.some((q) => q.paper !== 'PAPER_1')) {
    problems.push(`${mock.id}: Paper 1 contains a Paper 2 question`);
  }
  if (mock.paperB.some((q) => q.paper !== 'PAPER_2')) {
    problems.push(`${mock.id}: Paper 2 contains a Paper 1 question`);
  }
  if (mock.targetPaperSize !== 100) {
    problems.push(`${mock.id}: targetPaperSize should be 100`);
  }
});

/* ---------- report ---------- */
console.log('Karnataka VAO Prep — content QA report');
console.log('--------------------------------------');
console.log(`Pool size  · Paper 1: ${PAPER_1_POOL.length} questions`);
console.log(`Pool size  · Paper 2: ${PAPER_2_POOL.length} questions`);
console.log(`Total unique questions in app: ${TOTAL_QUESTION_COUNT}`);
console.log(`Days: ${DAYS.length} · Mocks: ${MOCKS.length}`);
console.log(`Mock 1 papers: P1=${MOCKS[0].paperA.length} P2=${MOCKS[0].paperB.length}`);
console.log(`Mock 30 papers: P1=${MOCKS[29].paperA.length} P2=${MOCKS[29].paperB.length}`);

if (problems.length === 0) {
  console.log('\nRESULT: PASS — no content problems found.');
} else {
  console.log(`\nRESULT: FAIL — ${problems.length} problem(s):`);
  problems.slice(0, 60).forEach((problem) => console.log(` - ${problem}`));
  process.exitCode = 1;
}

export {};
