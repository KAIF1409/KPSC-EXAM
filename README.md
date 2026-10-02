# Karnataka VAO Prep — MCQ-first exam preparation platform

A production-ready, fully client-side **Karnataka Village Administrative Officer (VAO)** preparation app:
a **30-day sequential MCQ program**, a **subject-wise practice bank**, **30 full-length mock exams** in strict
timed mode, a **Revision Zone** and **knowledge analytics**. Built with Next.js 14 (App Router), React,
TypeScript, Tailwind CSS, Lucide React and Zustand — deployable to Vercel with zero configuration.

---

## 1. Exam framework modelled

| Paper | Contents | Questions |
| --- | --- | --- |
| Paper 1 | General Knowledge (Science, Polity, Karnataka History & Geography, Economy, Land Revenue, Aptitude) | 100 |
| Paper 2 | General Kannada, General English, Computer Literacy | 100 |

Mock exams run in **strict mode**: a persisted 120-minute countdown per paper, a question palette
(answered / marked / not answered), no instant answer verification, and a results ledger with a
subject-wise breakdown followed by a full answer review.

## 2. Getting started

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /dashboard)
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run validate   # content QA over the question bank (see §7)
```

Deploy: push to GitHub, import the repo on Vercel, accept the defaults (framework auto-detected).

## 3. Routes

| Route | Purpose |
| --- | --- |
| `/dashboard` | Progress header, global revision alert, quick-launch tiles, 30-day grid (locked / active / completed) |
| `/day/[id]` | One-question-at-a-time engine with instant emerald/rose feedback + explanation accordion |
| `/practice` | Subject selector grid (question count, accuracy %, mistakes to re-test) |
| `/practice/[subject]` | Untimed session with difficulty filter, attempted/unattempted filter and mistakes-only mode |
| `/mocks` | 30 mock cards with status, score and accuracy |
| `/mocks/[id]` | Strict exam runner → results ledger → full answer review |
| `/revision` | Bookmarked + practice mistakes + mock mistakes in one session (grouped by source) |
| `/analytics` | Day accuracy trend, mock score trend, subject accuracy, weakest 3 subjects |

## 4. Project structure

```
src/
  app/                     # routes (layout, dashboard, day, practice, mocks, revision, analytics)
  components/
    layout/                # AppShell, Sidebar, PageHeader
    quiz/                  # QuestionRunner, QuestionCard, OptionTile, ExplanationPanel,
                           # ControlTray, QuestionPalette, TimerBadge, SessionSummary
    mocks/                 # ExamRunner, useExamAttempt (state logic), examLedger (scoring),
                           # StrictQuestionCard, ExamControlBar, SubmitDialog, ResultsLedger, MockCard
    dashboard/             # ProgressHeader, RevisionAlert, QuickLaunch, DayCard, DayGrid
    practice/              # SubjectCard, PracticeFilters
    analytics/             # TrendChart (dependency-free SVG), SubjectAccuracyList
    ui/                    # StatCard, ProgressBar, EmptyState, LoadingBlock
  lib/                     # constants, utils, progress selectors, store (Zustand + persist)
  types/exam.ts            # shared domain types
  data/
    helpers.ts             # compact MCQ factory (m(...)) used by every data file
    subjects/              # one file per subject (+ index.ts aggregator)
    days/                  # day-01.ts ... day-30.ts (+ index.ts)
    mocks/                 # mock-01.ts ... mock-30.ts, build.ts (paper composer), index.ts
    index.ts               # ALL_QUESTIONS, QUESTION_BY_ID, lookups
```

## 5. State persistence

All progress is stored in `localStorage` under the versioned key **`vao-prep-state-v1`**:

```ts
startDate, activeDay, completedDays, dayScores, bookmarkedIds, wrongIds,
attemptedIds, subjectStats, practiceSessions, mockAttempts, activity
```

- Written on every mutation via Zustand's `persist` middleware (only data is persisted, never actions).
- Screens that render persisted numbers gate on `useHydrated()` so server HTML and the first client
  render never diverge.
- Mock attempts (answers, marked questions, current index, remaining seconds) persist too, so a refresh
  mid-paper resumes exactly where you stopped.

## 6. Hydrating your own parsed content

Every content file carries a `// TODO: PASTE_PARSED_MCQS_HERE` anchor. Add questions with the compact factory:

```ts
m('general-science', 'gs-phy-12', 'Which lens is used in a shaving mirror?',
  ['Concave', 'Convex', 'Plano-convex', 'Bifocal'], 0,
  'A concave mirror gives a magnified erect image when the face is within focus.', 'easy',
  { reference: 'PYQ: 2019 KPSC Group C' });
```

Rules to respect:

1. **Ids must stay unique** (they are the localStorage keys) — use a file-specific prefix such as `gs-phy-`.
2. `options` must contain exactly four strings; `correctAnswerIndex` is zero-based.
3. Kannada text is fully supported — set `questionTextKannada` / `optionsKannada`, or write the whole
   question in Kannada (as in `src/data/subjects/kannada.ts`).
4. Mock papers are composed deterministically from the subject + day banks (`src/data/mocks/build.ts`).
   Once you paste a real 100-question paper into a mock file, it is used at the head of the paper.

## 7. Content QA (`npm run validate`)

`scripts/validate.ts` bundles the data layer with esbuild (fetched on demand via `npx`, so it is **not**
a project dependency) and asserts:

- unique question ids (they double as localStorage keys), four distinct options, in-range answer index
- every explanation present, and `question.paper` matches the subject's official paper
- 30 days numbered 1–30 with 5+ questions and focus points each
- 30 mocks numbered 1–30 with no duplicated question inside a paper and no paper/subject mismatch

Current output: **PASS** — 388 unique questions, Paper 1 pool 223, Paper 2 pool 102, every mock paper
loading 100 questions.

## 8. Design notes

- Slate/indigo palette, rounded-2xl cards, soft shadows, hover lifts — premium ed-tech look.
- Bilingual typography: the font stack falls back through *Noto Sans Kannada → Nirmala UI → Tunga*.
- Charts are hand-rolled SVG (no chart library) to keep the dependency surface minimal.
- Accessibility: real buttons with `aria-pressed`/`role=radiogroup`, `aria-live` explanation panel,
  `role=progressbar` bars, focus-visible rings everywhere.
# KPSC-EXAM
