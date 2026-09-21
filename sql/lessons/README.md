# Sentenco Curriculum Build Guide

Read this file first in any new session before building or editing curriculum
content. It's the shared source of truth across sessions — if you're a fresh
Claude Code session picking this up, this replaces needing the original chat
history. **Update the "Status" section at the end of every unit you complete
or edit**, so the next session (and the user) can see what's done at a glance.

## What this project is

Sentenco is an ESL lesson-building app (Vite + React + Supabase, deployed on
Vercel). Teachers browse Library → a CEFR level (A1–C2) → an age track
(kids/teens/adults) → a lessons grid → an individual lesson, which opens in
`src/LessonPlayer.jsx` as a 780×440 popup with a fixed sequence of slides.

## Where things live

- **Lesson content** lives in Supabase, not in local files: the `lessons`
  table (one row per lesson) and `lesson_slides` table (one row per slide,
  `content` is jsonb). Read access is anon/public (RLS policies already
  allow `select` where `is_active = true`); there is **no write access** via
  the anon key, so all content changes go through SQL scripts the user runs
  themselves in the Supabase SQL editor.
- **This directory** (`sql/lessons/`) holds a copy of every insert/update
  script that's been run, for reference and version control. Name new files
  `lessonN_insert.sql` for a new lesson, or `unitX_<description>.sql` for
  edits to existing content.
- **Slide rendering components** are `src/slides/Slide<Type>.jsx` — read
  these directly to see the exact JSON shape each `slide_type` expects
  (don't guess the schema from memory; the component is the source of truth).

## The 9 slide types (slide_number 1–9) — A1–B2 lessons

Every A1–B2 lesson has all 9, in this order: `title`, `warmup`,
`vocabulary`, `phrases`, `activity`, `speaking`, `reading`, `writing`,
`review`. This fixed shape assumes a lesson built around a fixed
vocabulary/grammar target and does not apply to C1/C2 — see the C1/C2
section below.

- **vocabulary** is a fixed 2×2 grid — exactly 4 words. If a lesson plan
  gives more than 4, pick the 4 most central/reused ones and don't change
  the grid.
- **activity** is fill-in-the-blank with a fixed word bank: dialogue lines
  use `[bracketed]` words, and a top-level `"blanks"` array lists the same
  words (shuffled client-side) as draggable chips.
- **speaking** is open-blank role play: dialogue lines use `___` (or the
  literal word `blank`), plus a `"note"` about switching roles.
- **phrases** is teacher/student example lines, rendered as an interleaved
  chat thread (not a fill-in-blank).
- Most lesson plans you're handed won't map 1:1 onto these 9 — you'll often
  need to split one plan slide into two of ours, or add a slide type the
  plan didn't include (most commonly Activity). Make a reasonable call,
  then tell the user what you did and why, so they can correct it.
- If a plan is missing a final "challenge" line on the review slide, draft
  one yourself rather than leaving it out — every lesson so far has one.
- Images are **intentionally left blank** (no `image_url`) across all
  current lessons until the user generates illustrations in bulk. Don't add
  placeholder/stock images without being asked.

## The 4 slide types for C1/C2 lessons

C1/C2 content (see `docs/curriculum/c1-adults.md`, `c2-adults.md`,
`c1-teens.md` and their matching `*-teacher-guidance.md` files) is built
around 9-lesson units and Performance/Model/Output mode blocks, not a
fixed vocabulary/grammar target — the 9 slide types above don't fit it
(no vocabulary grid, no fill-in-blank target). Each C1/C2 lesson gets 4
`lesson_slides` rows, but **only one of them (`scenario`) is ever shown
to the student** — the other three are teacher-only coaching content.
This split exists because the teacher-guidance docs are written in third
person about the student ("get learners producing...") and include the
actual "likely student responses" — never something to put in front of
the student. Getting this wrong (putting coaching-note prose in front of
a student, with open-ended "e.g. X or Y" examples instead of one
committed prompt) was caught and fixed during the pilot — see the C1
section of Status below.

**Opening a C1/C2 lesson opens two separate popup windows side by side**
instead of one combined player (`LessonsGrid.jsx`'s `openLesson()`,
gated on `lesson.level === "C1" || "C2"`): one at
`/lesson-player/:id?view=student` showing only the `scenario` slide (this
is the window to share/project for the student — **landscape**, 780×440,
same card size as A1–B2), and one at `/lesson-player/:id?view=teacher`
showing `diagnosis`/`upgrade`/`transfer` paginated slide-by-slide with a
"Teacher View" badge (this is the teacher's private window — never
share or project it — **portrait**, 460×760 via the `.lp-shell--portrait`
CSS class, sized for reading notes rather than projecting). Important:
this two-window behavior only fires from clicking a lesson card's
"Start" button in the Lessons Grid — visiting a `/lesson-player/:id`
URL directly (e.g. to spot-check content) only ever shows the single
view that URL's `?view=` param asks for, not both windows; this tripped
up a manual check once already. `LessonPlayer.jsx` reads the `view`
query param via `TEACHER_ONLY_TYPES`/`isTeacherView` to decide which
slide array drives its Next/Prev sequence *and* which shell orientation
to render; A1–B2 lessons are unaffected (no teacher-only slide types
exist for them, and `openLesson` only splits into two windows for
C1/C2). An earlier version of this put both views in one window behind
a toggle button, then a same-size-landscape two-window version —
replaced with real
separate windows so the teacher can keep her notes open privately while
only the student window is shared/projected.

- **scenario** (student-facing) — `{ mode, task }`. `mode` is
  Performance/Model/Output (colors the badge and picks a friendly label —
  "Speaking Task"/"Look & Notice"/"Writing Task"); `task` is **one
  concrete, second-person instruction** ("You have 90 seconds. Take a
  position: ..."), not the teacher-guidance doc's example menu. Pick one
  specific prompt from the "Elicit" field's examples, or write a new one
  in the same spirit — don't leave it open-ended.
- **diagnosis** (teacher-only) — `{ purpose, listenFor, likelyResponses:
  [...], scorecardFocus: [{dimension, note}, ...] }`. `purpose` is the
  teacher-guidance doc's "Purpose" field (moved here from scenario);
  `likelyResponses` is the "likely strong-B2/C1 responses" quotes —
  reword them to match whichever concrete prompt you picked for
  `scenario`, don't leave them referencing a different example;
  `scorecardFocus` is the 1–3 Scorecard dimensions named in the guidance,
  each with its short parenthetical note.
- **upgrade** (teacher-only) — `{ upgradePath, interventionPrompts: [...]
  }`. Copy the upgrade-path text and exact intervention lines verbatim.
- **transfer** (teacher-only) — `{ extension, recovery }`.

No `lesson.age_track` gating in these components — the same visual
treatment (editorial serif/sans, mode-color-coded badges: Performance
terracotta, Model slate, Output green) is used for Adults and Teens
C1/C2 alike, since neither is the Kids-style bouncy theme. Components:
`src/slides/Slide{Scenario,Diagnosis,Upgrade,Transfer}.jsx`, registered
in `LessonPlayer.jsx`'s `SLIDE_COMPONENTS`/`SLIDE_TYPE_LABELS` maps.
Verified against the live pilot lesson in Supabase (both `?view=student`
and `?view=teacher`), not just mock data.

`duration_minutes` for C1/C2 lessons is an estimated 20 (a single
narrow-focus mode-block segment, not a full standalone class) — there's
no authoritative number from the framework docs; adjust if it doesn't
match how these actually run in class.

## SQL script conventions

- Generate a fresh UUID per lesson: `python3 -c "import uuid; print(uuid.uuid4())"`.
- Use PostgreSQL dollar-quoting (`$json$ ... $json$::jsonb`) for every
  `content` blob — dialogue text is full of apostrophes ("don't", "I'm",
  "let's") and dollar-quoting avoids manual escaping entirely. Only plain
  (non-JSON) string literals need the standard `''` doubling.
- Validate before handing off — extract each `$json$...$json$` block and run
  it through `json.loads` in Python, and sanity-check parens/semicolons
  balance. Don't hand the user unvalidated SQL.
- The user runs scripts themselves in the Supabase SQL editor. Don't expect
  write access; don't ask for a service-role key.

## CEFR alignment

Check new lesson content against the Can-Do Goals shown on the level
overview page (`src/LevelPage.jsx`, `LEVEL_DATA[level].goals`) — those are
the real CEFR descriptors for that level. Two things to actively watch for:

- Don't let Reading/Writing/Speaking slides require vocabulary or sentence
  patterns that haven't been taught yet in that same lesson's Vocabulary/
  Phrases slides (this happened once already — Lesson 1 asked for age and
  country before either was taught; fixed in `unit1_cefr_fixes.sql`).
- Keep grammar within the level's actual CEFR band (A1 = present simple
  only, no past/future, no complex clauses).

## Git workflow

- Only stage the files actually touched for the task (never `git add -A`) —
  there are long-standing stray files in the repo root (`fix_*.py`, `.claude/`)
  that predate this work and aren't part of it.
- Commit and push once a change is verified (lint/build, and a browser
  preview check for anything UI-facing). No need to ask before pushing —
  that's already standing project preference.

## Status

**A1 · Kids**
- Unit 1 (6/6 lessons) — Hello & My Name, My Age, My Family, My Likes, All
  About Me, What Can You Say? (assessment). Complete, CEFR-checked,
  titles finalized. No images yet.
- Unit 2 (7/7 lessons) — My Morning, Breakfast Time, Go to School, My
  Afternoon, My Evening, All About My Day (review), My Day Check
  (assessment). A full-day routine story. Complete, all run in Supabase.
  No images yet.
- Unit 3+ — not started.
- Teacher's Guide page live at `/teacher-guide/:level/:track` (see
  `src/TeacherGuide.jsx`), linked from the Lessons Grid header. Opens in
  a new tab; respects the active unit filter (`?unit=N`), or shows all
  units when "All units" is selected. Covers A1 Kids Units 1–2 so far;
  extend the `GUIDES` object there as new units/tracks are built.

**A2 · Adults**
- Unit 1 (1 lesson) — My Workday as a Photographer (`lesson14_insert.sql`).
  Communication-first present simple: routines, frequency adverbs, work
  vocabulary (start/meet/edit/send), error correction. Not run in Supabase
  yet — user runs the script. No images yet (prompts given separately,
  not stored in content). Teacher's Guide page not extended for this
  track yet.
- This is the first Adults-track lesson. Added a real "adults" visual
  theme (serif headings via 'Source Serif 4', 'Inter' body, muted
  navy/terracotta/cream palette, flat editorial chrome — no Fredoka,
  no candy colors, no bounce) to `LessonPlayer.jsx` and every
  `src/slides/Slide*.jsx` component, gated on `lesson.age_track ===
  "adults"`. Kids/Teens rendering is untouched — verified via a
  temporary local harness (not committed) rendering all 9 slide types
  with `age_track: "adults"` mock data.
- Unit 2+ — not started.

**B1** — not started.

**C1 · Adults**
- Unit 1, Lesson 1 (1/54 lessons) — "Taking a Quick Position". The
  `lessons` row and its original 4 `lesson_slides` rows are already live
  in Supabase (from `lesson15_insert.sql`). Content sourced directly from
  `docs/curriculum/c1-adults.md` and `c1-adults-teacher-guidance.md`
  (Unit 1, Lesson 1).
- This introduced the 4 new C1/C2 slide types (`scenario`, `diagnosis`,
  `upgrade`, `transfer`) — see the section above.
- **First pilot pass put teacher-guidance prose directly in front of the
  student** (third-person coaching language, an open-ended "e.g. X or Y"
  prompt menu instead of one committed task, and "likely student
  responses" visible on the same screen a student would see). Caught by
  the user immediately after the first pilot shipped: "the one you put in
  the slides sounds more like an instruction, it's not exactly the
  lesson." Fixed by splitting `scenario` (student-facing, one concrete
  second-person task) from `diagnosis`/`upgrade`/`transfer`
  (teacher-only). **Run `lesson15_fix_content.sql`** (not
  `lesson15_insert.sql` again — that one already ran and will hit a
  `lessons_pkey` duplicate-key error) to replace the 4 slide rows with
  the corrected content.
- **Second pass:** the corrected content initially still rendered in one
  window behind a "Teacher Notes" toggle button. The user asked for two
  actual separate windows instead — one to share with the student, one
  for the teacher to page through privately. Reworked `LessonPlayer.jsx`
  to be driven by a `?view=student`/`?view=teacher` query param instead
  of in-page toggle state, and `LessonsGrid.jsx`'s `openLesson()` now
  opens both windows side by side for any C1/C2 lesson.
- `lesson15_fix_content.sql` has been run — confirmed live via
  `?view=teacher`, which now shows the corrected Purpose field and
  phone-ban-matched Likely Responses instead of the original pre-fix
  content.
- **Third pass:** user asked for the two windows to have different
  shapes — landscape for the student (to share/project) and **portrait**
  for the teacher (to read notes privately, slide by slide), not two
  same-size landscape windows. Added `.lp-shell--portrait` (460×760) in
  `LessonPlayer.jsx`, applied whenever `isTeacherView` is true; student
  view is unchanged (780×440, same as A1–B2). Updated `LessonsGrid.jsx`'s
  popup dimensions/positioning to match: student window ~860×560
  landscape, teacher window ~520×820 portrait, both centered as a group
  side by side. Verified against the live (now-corrected) pilot lesson —
  both orientations render and scroll correctly.
- All three passes verified on the pilot — that lesson is fully done and
  live.

**⚠ Everything in this "Full rollout" block is SUPERSEDED as of
2026-07-08 — see "Major C1/C2 redesign" further below.** The
scenario/diagnosis/upgrade/transfer 4-slide-type design described here
was replaced entirely (new slide types, universal topics instead of
office-specific ones, advanced C1/C2 wording, a 5-7 slide student flow,
a single-sheet teacher guide). Adults C1's old files have already been
deleted from this directory and its old pilot content removed from
Supabase. **Adults C2 and Teens C1's files below still reflect the old
design and have NOT been rebuilt yet** — don't run them as-is; they'll
need the same redesign treatment before use. Kept this block for
history/process reference only.

**Full rollout (2026-07-07): all 153 C1/C2 lessons now have generated
SQL.** Adults C1 (54), Adults C2 (45), Teens C1 (54) — every unit across
all three tracks. Only Adults C1 Unit 1 Lesson 1 (the pilot) has actually
been run in Supabase; **the other 152 lessons are written but not yet
run — the user needs to execute each file below in the Supabase SQL
editor.**

- **Tooling used:** built a one-off parser (`build_lessons.py`) that
  reads each `*-teacher-guidance.md` file into structured per-lesson
  dicts (purpose/elicit/listenFor/likelyResponses/upgradePath/
  interventionPrompts/scorecardFocus/extension/recovery), and a
  generator (`gen_sql.py`) that combines that with a hand-written
  `task`/`title` per lesson to emit validated SQL. Neither script is
  committed to the repo (they lived in scratch space) — if this needs
  redoing, re-derive from the guidance docs the same way rather than
  hunting for the scripts.
- **The `task` field is the one thing that couldn't be mechanically
  extracted** — every lesson's teacher-guidance "Elicit" field is
  written as an instruction *about* the student in third person, often
  with an open "e.g. X or Y" menu of example prompts. Each of the 152
  lessons got a hand-written `task`: one concrete prompt, addressed to
  the student directly in second person, chosen from (or in the spirit
  of) the Elicit field's examples. `purpose`/`listenFor`/
  `likelyResponses`/`scorecardFocus`/`upgradePath`/`interventionPrompts`/
  `extension`/`recovery` were reused directly from the already-written
  guidance docs — no rework needed there.
- **Two real content gaps found and fixed while building this:**
  (1) a multi-line field header (`**Intervention prompts (as written
  feedback, delivered live in\nclass):**`) broke the naive parser at
  first — fixed by joining wrapped bold headers before parsing;
  (2) 62 lessons (37 in Adults C2, 25 in Teens C1) were missing the
  "Listen for" field entirely in the source docs — a genuine content gap
  from when they were first written, not a parsing bug. Backfilled each
  from its lesson's Upgrade Path "before → after" pattern and committed
  the fix to the docs themselves (commit `29e34f6`), not just the
  generated SQL, so the source of truth stays complete.
- **Teens C1 Unit 6 Lesson 6** ("Seeing It From Another Side") carries a
  `TEACHER-HANDLING NOTE` prefixed onto its `purpose` field — the
  original doc's safety note about the "friend coming out" example
  (school-policy check, strict third-person framing, a ready substitute
  scenario) lived under a non-standard field heading the parser doesn't
  recognize, so it had to be manually folded into `purpose` to make sure
  it actually reaches the teacher's screen. The student-facing `task`
  for this lesson deliberately uses the safer default examples ("a new
  student joining the class," "someone being stereotyped") rather than
  the sensitive one.
- **Validation performed on every file:** all 4 `$json$...$json$` blocks
  per lesson parse as valid JSON, parens balance, every lesson UUID
  appears exactly 5 times (1 `lessons` row + 4 `lesson_slides` rows), no
  UUID collides with the pilot's, no duplicate
  (level, age_track, unit_number, lesson_number). 152 lessons, 0 errors.
- **Files** (one per unit, run each in the Supabase SQL editor):
  - Adults C1: `c1_adults_unit1_lessons2-9_insert.sql` (finishes the
    pilot's unit), `c1_adults_unit{2..6}_insert.sql`
  - Adults C2: `c2_adults_unit{1..5}_insert.sql`
  - Teens C1: `c1_teens_unit{1..6}_insert.sql`
- Teacher's Guide page not extended for C1/C2 — the teacher-only window
  now covers this role per-lesson; the standalone Teacher's Guide page's
  per-unit-summary format isn't needed here unless asked.
- No images anywhere in C1/C2 yet, same as every other track.

**C2 · Adults** — see "Full rollout" above (now superseded); all 5
units generated under the old design, not yet run in Supabase, needs
the same redesign treatment as Adults C1 before use.

**Teens C1** — see "Full rollout" above (now superseded); all 6 units
generated under the old design, not yet run in Supabase, needs the same
redesign treatment as Adults C1 before use.

## Major C1/C2 redesign (2026-07-08)

**Full rationale, all design decisions, and the complete universal
topic bank for every unit live in the `project_c1_c2_lesson_redesign`
memory file — read that first if picking this up fresh.** Summary of
what changed and why:

- User was unhappy with the original design after seeing it live: "1
  slide is not satisfying," then later "im not happy about the ones we
  have made" — the single-task-card format and the office/corporate-
  specific topics ("open floor plan," "project management tool") didn't
  feel like a real lesson or feel relatable to everyone.
- **New pedagogical shape:** M/O/P (Performance/Model/Output) stays at
  the unit level exactly as before. Each individual lesson now has an
  internal Engage → Study → Activate structure (ELT's "ESA" framework),
  with a 4A's overlay (Activity → Analysis → Abstraction → Application)
  for reflective-domain units (identity, mediation, register,
  diplomacy, negotiation) — see the memory file for the full worked
  examples that validated both shapes.
- **No writing anywhere.** C1/C2 students are already competent
  writers — this course targets spoken fluency. Output mode is now
  polished, prepared **spoken** delivery via a teleprompter tool
  (provided script, music-paced, no pause, one retry allowed) instead
  of written tasks.
- **Three named tools, one per mode:** Performance = timer + twist
  card (visible countdown, a mid-task complication card the teacher
  voices); Model = weak/strong text comparison (student reads
  `likelyResponses` vs. `upgradePath`-equivalent content themselves,
  no video/audio sourcing needed); Output = teleprompter. Only
  Performance needs real interactive app-building (timer logic, twist
  card trigger) — Model and Output both run on text content. **This
  first rebuild pass ships the static slide content/layout only** —
  the actual timer countdown logic, twist-card trigger, and
  teleprompter auto-scroll+music are simplified/placeholder for now,
  a deliberately separate follow-up build.
- **Universal topic bank, not office-specific.** 15 broad, universally
  relatable life categories (money and fairness, technology, honesty
  and relationships, family, health, environment, social norms,
  community, education, media, politics-as-civic-not-partisan, work,
  travel, justice, generations) replace the original workplace-only
  topics. Every unit's topics now draw from this bank — full list and
  per-unit assignments in the memory file.
- **Advanced C1/C2 wording, student-facing only.** Student content
  (task/Engage/Study/Activate/Wrap-up) uses sophisticated register and
  complex sentence structure, matching the target level. Teacher-facing
  content stays **easy to understand, correct grammar** — a teacher
  using this may not be a C1/C2 speaker themselves ("some teachers in
  fact cannot handle this level" — user's words). Don't let the
  advanced-wording rule bleed into the teacher guide.
- **5-7 slides per lesson** (Title, Engage, Study, Activate, Wrap-up,
  with Performance getting a separate Activate-attempt and
  Activate-retry slide, and reflective Model lessons getting separate
  Study-Activity/Study-Analysis/Study-Abstraction slides) — directly
  fixes the original "1 slide isn't satisfying" complaint.
- **New slide types**, replacing `scenario`/`diagnosis`/`upgrade`/
  `transfer` entirely: `advtitle`, `engage`, `study`, `activate`,
  `wrapup` (student-facing, landscape, mode-colored footer: coral
  `#D85A30` Performance / steel blue `#3D6B8C` Model / navy `#1B2A4A`
  Output — replaces the earlier terracotta/slate/green palette from
  the first design pass), and `teacherguide` (teacher-only, portrait).
  Components: `src/slides/Slide{AdvTitle,Engage,Study,Activate,WrapUp,
  TeacherGuide}.jsx`.
- **Teacher guide is one continuous scrollable sheet, not paginated
  slides** — a single `teacherguide` row per lesson holding a
  `sections` array, rendered with one header/footer and a small coral
  diamond-and-label divider (`◆ ENGAGE`) between sections instead of
  repeating the slide frame per section. `LessonPlayer.jsx`'s teacher
  view (`?view=teacher`) now bypasses the normal paginated chrome
  entirely and renders this one component full-frame — see the
  `isTeacherView` early-return in the component.
- **Teacher guide scaffolding principle** — every Study/Activate
  section should include a real model answer at target level (not just
  abstract criteria) and, where the listening task requires subtle
  discrimination, a simple mechanical test instead of "use your
  judgment" (e.g. "could reason 2 be true while reason 1 is false? If
  yes, distinct" instead of just "listen for whether the reasons are
  different").

**Cleanup performed:** deleted the old `c1_adults_unit1_lessons2-9_
insert.sql` and `c1_adults_unit{2..6}_insert.sql` files (never run,
now obsolete). Added `c1_adults_delete_old_content.sql` — run this in
Supabase to remove the old pilot lesson (the only Adults C1 content
actually live) before running any new-design content. Kept
`lesson15_insert.sql`/`lesson15_fix_content.sql` for historical record
since they were actually executed at the time, even though superseded.

**Rebuilt: Adults C1, Unit 1, Lesson 1** —
`c1_adults_unit1_lesson1_insert.sql`. Topic: "is glancing at your phone
mid-conversation a genuine breach of etiquette, or has it simply become
an unavoidable habit of modern life?" (category 1, money/fairness bank
— actually etiquette/social-norms flavored; see memory for the full
Unit 1 topic list). 7 slides (6 student + 1 teacher sheet), validated
(0 JSON errors), verified visually via a temporary local harness (not
committed) — all 6 student slides and the teacher sheet render
correctly, no console errors. **Not yet run in Supabase.**

**Not yet done:** the other 8 lessons of Unit 1, and all other 16
units, need the same treatment (new topics from the universal bank,
advanced wording, new slide structure) — this was intentionally done
lesson-by-lesson this time rather than generating all 152 remaining
lessons blind again, since that's exactly what caused the "not happy
with what we made" reset. Confirm this Lesson 1 rebuild looks right
live before continuing to the rest.
