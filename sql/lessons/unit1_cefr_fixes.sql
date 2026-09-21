-- Sentenco A1 Kids — Unit 1 CEFR alignment fixes
-- Run this in the Supabase SQL editor.

-- ============================================================
-- Lesson 1 (Hello & My Name): trim back to name-only.
-- It was asking students to produce age/country ("I am from ___",
-- "I am ___ years old") in Speaking/Reading/Writing/Review, but
-- those were never taught in this lesson's Vocabulary or Phrases
-- slides — age isn't taught until Lesson 2, and country isn't
-- taught anywhere in the unit.
-- ============================================================

-- Slide 6: Speaking — remove the "I am from ___" line
update lesson_slides
set content = $json$
{
  "note": "Switch! Student becomes A, teacher becomes B.",
  "dialogue": [
    { "speaker": "A", "text": "Hello! I am blank. What is your name?" },
    { "speaker": "B", "text": "Hi! My name is blank." },
    { "speaker": "A", "text": "Nice to meet you!" },
    { "speaker": "B", "text": "Nice to meet you too!" }
  ]
}
$json$::jsonb
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 6;

-- Slide 7: Reading — name/greeting only, no age or country
update lesson_slides
set content = $json$
{
  "text": "Hi! My name is Sofia. I like to say hello to everyone. My friend's name is Ben. We always say \"Nice to meet you!\"",
  "questions": ["What is her name?", "What is her friend's name?", "What do they say when they meet?"]
}
$json$::jsonb
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 7;

-- Slide 8: Writing — name/greeting only
update lesson_slides
set content = $json$
{
  "prompts": ["My name is ___.", "My friend's name is ___.", "Hello! Nice to meet you!"]
}
$json$::jsonb
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 8;

-- Slide 9: Review — checklist no longer claims country/age
update lesson_slides
set content = $json$
{
  "checklist": [
    "Say hello and goodbye in English",
    "Introduce myself and say my name",
    "Ask \"What is your name?\" and answer"
  ],
  "challenge": "Introduce yourself right now!"
}
$json$::jsonb
where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8'
  and slide_number = 9;


-- ============================================================
-- Lesson 2 (My Age): add "Where are you from?" practice.
-- The Reading slide already asked "Where is he from?" but nothing
-- in Vocabulary/Phrases/Speaking ever taught that phrase first.
-- ============================================================

-- Slide 4: Phrases — add a third teacher/student pair
update lesson_slides
set content = $json$
{
  "note": "Practice saying your real age, phone number, and country!",
  "teacher": ["How old are you?", "What's your phone number?", "Where are you from?"],
  "student": ["I'm 10 years old.", "My phone number is 09-123-456.", "I'm from Calumpit."]
}
$json$::jsonb
where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b'
  and slide_number = 4;

-- Slide 6: Speaking — add a country turn
update lesson_slides
set content = $json$
{
  "note": "Switch! Now the student asks the questions and the teacher answers.",
  "dialogue": [
    { "speaker": "A", "text": "What's your name?" },
    { "speaker": "B", "text": "My name is ___." },
    { "speaker": "A", "text": "How old are you?" },
    { "speaker": "B", "text": "I'm ___ years old." },
    { "speaker": "A", "text": "What's your phone number?" },
    { "speaker": "B", "text": "My phone number is ___." },
    { "speaker": "A", "text": "Where are you from?" },
    { "speaker": "B", "text": "I'm from ___." }
  ]
}
$json$::jsonb
where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b'
  and slide_number = 6;

-- Slide 8: Writing — add a country prompt
update lesson_slides
set content = $json$
{
  "prompts": ["My name is ___.", "I am ___ years old.", "My phone number is ___.", "I am from ___."]
}
$json$::jsonb
where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b'
  and slide_number = 8;

-- Slide 9: Review — add a checklist item and mention country in the challenge
update lesson_slides
set content = $json$
{
  "checklist": [
    "Count from 1 to 10",
    "Ask \"How old are you?\"",
    "Say \"I'm ___ years old.\"",
    "Say my phone number",
    "Say where I'm from"
  ],
  "challenge": "Tell your teacher your name, age, phone number, and where you're from — all in one go!"
}
$json$::jsonb
where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b'
  and slide_number = 9;
