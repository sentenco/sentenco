# A1 Kids — Intra-Level Progression Matrix (Pilot #3)

Per the Sentenco Intra-Level Progression Framework, adapted for Kids'
**gentlest slope** (per the framework's own age-track guidance: smaller
jumps between tiers, more repetition, more visual/oral support, and
controlled production even at the hardest tier).

**Scope note:** Units 1-2 are live in Supabase. This matrix originally
left them untouched and only regenerated Units 3-12. That changed once
a structural problem surfaced: the live Unit 1 had 6 lessons and Unit 2
had 7 (both with an extra "assessment" lesson beyond the standard
review), predating the 5-lesson-per-unit convention used everywhere
else. `sql/lessons/fix_kids_unit1_2_structure.sql` normalizes both to 5
lessons (Unit 1: merges "All About Me" + "What Can You Say?" into one
Unit Review; Unit 2: merges "Breakfast Time" into "My Morning", merges
"All About My Day" + "My Day Check" into one Unit Review) and rewrites
all kept lessons' content to match the Foundation-tier framework below
-- same row IDs and titles, content fully replaced. Pending the user
running that script in Supabase. Tier boundaries stay at the same
1-4/5-8/9-12 split used for A1 Teens for consistency across tracks.

**Ceiling guardrail:** Same A1 boundary as Teens (no comparatives, no
simple past narrative, no "going to" future), but pulled in even
further for Kids: no "because" reasoning chains, no lexical
future-chunks like "I want to..." — Kids' A1 stays almost entirely
"This is my ___", "I like/have ___", and simple TPR commands
("Touch your ___", "Are you ___?").

## Unit-level tiers

| Unit | Tier | Topic | Grammar load | Text length target | Vocabulary type | Scaffolding | Cognitive demand |
|------|------|-------|---------------|---------------------|------------------|--------------|-------------------|
| 3 | Foundation | My Family | "This is my ___" | 2-3 sentence texts | concrete (family nouns) | heaviest: TPR, picture matching | name / identify |
| 4 | Foundation | Colors and Numbers | "This is ___" + simple counting | 2-3 sentence texts | concrete (colors, numbers) | heaviest | name / identify |
| 5 | Combination | Classroom Things | "This is my ___" + "I have ___" | 3-4 sentence texts | concrete (classroom nouns) | heavy: picture-supported frames | name + simple possession |
| 6 | Combination | Animals | "I like ___" / "I don't like ___" | 3-4 sentence texts | concrete (animal nouns) + big/small | heavy | name + simple preference |
| 7 | Combination | My Toys | "This is/These are ___" (singular/plural) | 3-4 sentence texts | concrete (toy nouns) + big/small | heavy | name + simple description |
| 8 | Combination | Food I Like | "I like ___" / "I don't like ___" + "and" listing | 3-4 sentence texts | concrete (food nouns) | medium: partial picture support | simple preference + listing |
| 9 | Bridge | My Body | "Touch your ___" (TPR) + simple present | 4-5 sentence texts | concrete (body parts) | medium | name + follow a simple command |
| 10 | Bridge | Weather Today | "It is ___" + "I wear ___" combined with "and" | 4-5 sentence texts | concrete (weather + clothes) | medium | describe + connect two ideas with "and" |
| 11 | Bridge | My House | "There is/are ___" + simple location ("in", "on") | 4-5 sentence texts | concrete (rooms, furniture) | light-medium: prompts still picture-backed | describe a place |
| 12 | Bridge | My Feelings | "I feel ___" + "Are you ___?" question | 4-5 sentence texts | concrete (feelings) | light-medium | name a feeling + simple reason via a picture cue, not "because" prose |

Even at the Bridge tier, Kids' hardest lessons stay well short of
Teens' Foundation tier in raw sentence count and never introduce
"because" reasoning chains -- the harder feeling comes from combining
two simple ideas with "and", not from new abstract grammar.

Review lessons (Lesson 5 of every unit) stay tier-matched: Unit 4's
review is foundation-level, Unit 8's is combination-level, Unit 12's is
bridge-level -- same principle as A1 Teens.

## Lesson-level escalation within each unit

Same shape as A1 Teens, but every stage keeps more picture/TPR support
than the Teens equivalent, and Lesson 4's "production" is a supported
show-and-tell, not open writing:

| Lesson | Role | Scaffolding | Task independence |
|--------|------|--------------|--------------------|
| 1 | Notice / receptive | Heaviest: TPR + picture matching | Point, match, single-word answers |
| 2 | Controlled practice | Picture-supported sentence frames | Short-phrase answers, guided |
| 3 | Freer practice (movement/game) | Partial frames, more TPR/game energy | Short answers with less copying |
| 4 | Production (show-and-tell) | Lightest in the unit, still picture-backed | Combine Lessons 1-3's language into a mini show-and-tell |
| 5 | Review | Matches the unit's tier | Mixed review game across the whole unit |

## Task-format rotation

| Lesson slot | Activity-slide format | Speaking-slide format |
|-------------|------------------------|--------------------------|
| Lesson 1 | Matching / point-and-name | Teacher models, student echoes |
| Lesson 2 | Fill-in-the-blank with picture word bank | Guided call-and-response |
| Lesson 3 | TPR action game (do the action named) | Student leads, teacher follows (role reversal) |
| Lesson 4 | Complete-the-sentence for a mini show-and-tell | Mini show-and-tell to the teacher |
| Lesson 5 | Mixed review (one item from each earlier format) | Free-ish Q&A combining the whole unit |
