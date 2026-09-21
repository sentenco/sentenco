-- Sentenco C1 Adults -- Unit 1, Lesson 1 (rebuilt design)
-- Universal topic bank + advanced C1 wording + 6-slide student flow
-- + single-sheet teacher guide. Run c1_adults_delete_old_content.sql
-- FIRST if the old pilot lesson is still live.
-- Run this whole script in the Supabase SQL editor.

insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  'Is Glancing at Your Phone Mid-Conversation Rude?',
  'C1',
  'adults',
  1,
  1,
  'Take and sharpen a stance on phone etiquette in conversation, under time pressure.',
  25,
  7,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values

-- 1. Title
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  1,
  'advtitle',
  'Title',
  null,
  $json${
  "unit": "Unit 1 · Lesson 1",
  "title": "Argument and Disagreement",
  "mode": "Performance",
  "image_url": "/lessons/c1-adults-u1-l1.jpg"
}$json$::jsonb,
  true
),

-- 2. Engage
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  2,
  'engage',
  'Engage',
  null,
  $json${
  "text": "Cast your mind back to the last conversation where someone's attention visibly drifted to their phone. Did it genuinely disrupt the exchange, or did you barely register it?",
  "mode": "Performance"
}$json$::jsonb,
  true
),

-- 3. Study
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  3,
  'study',
  'Study',
  null,
  $json${
  "text": "A compelling stance rests on two reasons that are substantively distinct, not a single point restated in different words. Claiming it's 'disruptive' and that it 'shows a lack of respect' may sound like two reasons — they're really the same objection twice. Look for a genuinely separate angle: the erosion of attention span, the shift in social norms, the quiet signal it sends about priorities.",
  "mode": "Performance"
}$json$::jsonb,
  true
),

-- 4. Activate · Attempt
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  4,
  'activate',
  'Activate · Attempt',
  null,
  $json${
  "phase": "attempt",
  "text": "You have 90 seconds. Take a clear position: is glancing at your phone mid-conversation a genuine breach of etiquette, or has it simply become an unavoidable habit of modern life? Present your stance with two substantively different reasons.",
  "mode": "Performance"
}$json$::jsonb,
  true
),

-- 5. Activate · Retry
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  5,
  'activate',
  'Activate · Retry',
  null,
  $json${
  "phase": "retry",
  "text": "Deliver it again, with greater precision. Keep your stance, but eliminate every filler word, and make sure your two reasons haven't quietly collapsed into one.",
  "mode": "Performance"
}$json$::jsonb,
  true
),

-- 6. Wrap-up
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  6,
  'wrapup',
  'Wrap-up',
  null,
  $json${
  "text": "You practiced sharpening a stance under time pressure — catching when two reasons are really one in disguise, and cutting the hesitation that blurs conviction. Next lesson: a different topic entirely, and this time someone pushes back on you live.",
  "mode": "Performance"
}$json$::jsonb,
  true
),

-- 7. Teacher Guide
(
  'ffbfd190-ea7c-4d04-b5c9-f36630e500ad',
  7,
  'teacherguide',
  'Teacher Guide',
  null,
  $json${
  "mode": "Performance",
  "sections": [
    {
      "label": "Title",
      "blocks": [
        {
          "text": "Setup only. Confirm they understand the topic before moving on."
        }
      ]
    },
    {
      "label": "Engage",
      "blocks": [
        {
          "text": "Give real silence to think. Don't rush past this or answer it for them."
        }
      ]
    },
    {
      "label": "Study",
      "blocks": [
        {
          "subLabel": "Model answer",
          "style": "quote",
          "text": "“I'd say checking your phone mid-conversation is a real breach of etiquette, not just an outdated worry. For one thing, it visibly signals that the conversation matters less than whatever's on the screen — and over time, that erodes trust. It's also becoming normalized in a way that quietly lowers everyone's expectations for basic attention.”"
        },
        {
          "subLabel": "Simple test",
          "text": "Could reason 2 be true while reason 1 is false? If yes, they're distinct. If not, it's one reason twice."
        }
      ]
    },
    {
      "label": "Activate · Attempt",
      "blocks": [
        {
          "text": "Listen for: clear stance in the first 10 seconds; two genuinely different reasons."
        },
        {
          "subLabel": "If they stall",
          "style": "accent",
          "text": "“I'd say ___, mainly because ___ — though I get that ___.” Let them use it once, then ask for a frame-free retry."
        }
      ]
    },
    {
      "label": "Activate · Retry",
      "blocks": [
        {
          "text": "Direct before/after check: did the filler words actually drop? Are the two reasons cleanly separated now, or still overlapping?"
        }
      ]
    },
    {
      "label": "Wrap-up",
      "blocks": [
        {
          "text": "Scorecard focus: Naturalness (disfluency control), Pragmatics (hedging that reads as considered, not uncertain)."
        },
        {
          "text": "If they finished strong, ask for a third, less obvious reason. If they never quite got there, note it for next time rather than re-teaching now."
        }
      ]
    }
  ]
}$json$::jsonb,
  true
);
