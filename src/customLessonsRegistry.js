// Custom Lessons: the list of lessons built so far, plus the helper that opens
// one in its own popup. Who may OPEN each lesson is decided by the database
// (sql/custom_lessons_ownership_and_sharing.sql) and enforced by
// CustomLessonGate; this file is only the catalogue.

export const CUSTOM_LESSONS = [
  {
    slug: "real-estate-vocabulary",
    title: "Real Estate Vocabulary",
    tag: "Vocabulary",
    level: "Comprehension: Intermediate · Production: Advanced Beginner",
    desc: "12 real estate words across People, Property, and Money, with a listening dialogue and simple-sentence practice.",
  },
  {
    slug: "be-verbs-and-will",
    title: "Be-verbs & Will",
    tag: "Grammar",
    level: "Beginner",
    desc: "Three core patterns in one sitting: be + adjective, be + v-ing, and will + v1, each with a rule box and fill-in-blank practice.",
  },
  {
    slug: "present-simple-vs-progressive",
    title: "Present Simple vs Progressive",
    tag: "Grammar",
    level: "Beginner to Elementary",
    desc: "Usage rules and signal words for both tenses, plus a mixed activity that combines them in the same set of sentences.",
  },
  {
    slug: "verb-tense-identification",
    title: "Verb Tense Identification",
    tag: "Grammar",
    level: "Intermediate to Advanced",
    desc: "24 real sentences across all 12 English tenses, two per tense, one at a time, choose the tense each sentence is written in.",
  },
  {
    slug: "e8-reading-and-reactions",
    popup: [1200, 780],
    title: "E8 Reading & Reactions",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes of real E8 tasks (reactions, short texts, matching, gapped text, word transformation), with the trap behind every wrong answer.",
  },
  {
    slug: "e8-task-5-reactions",
    popup: [1200, 780],
    title: "E8 Task 5: Reactions to Situations",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: 20 situations, one at a time. Name the job, then choose the reply, with the trap behind every wrong answer.",
  },
  {
    slug: "e8-task-6-dialogues",
    popup: [1200, 780],
    title: "E8 Task 6: Finish the Dialogue",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: 16 dialogues with a gap. Use the given word, stay inside three words, and learn the trap behind every mistake.",
  },
  {
    slug: "unseen-reading-part-1",
    popup: [1200, 780],
    title: "Unseen Reading: Part 1",
    tag: "Reading",
    level: "A2 to low B1 · Module E",
    desc: "Two short texts the student has never seen (a library van, a climbing diary), one page per question, with the right answer and a short explanation after every check.",
  },
  {
    slug: "unseen-reading-part-2",
    popup: [1200, 780],
    title: "Unseen Reading: Part 2",
    tag: "Reading",
    level: "B1+ to low B2 · Module E",
    desc: "Two informative texts the student has never seen (urban heat, how GPS works), one page per question, with the right answer and a short explanation after every check.",
  },
  {
    slug: "unseen-reading-part-3",
    popup: [1200, 780],
    title: "Unseen Reading: Part 3",
    tag: "Reading",
    level: "B1+ to low B2 · Module E",
    desc: "Two informative texts the student has never seen (how a vaccine trains the body, microplastics), one page per question, with the right answer and a short explanation after every check.",
  },
  {
    slug: "unseen-reading-part-4",
    popup: [1200, 780],
    title: "Unseen Reading: Part 4",
    tag: "Reading",
    level: "B1+ to low B2 · Module E",
    desc: "Two informative texts the student has never seen (how weather warnings work, why we forget), one page per question, with the right answer and a short explanation after every check.",
  },
  {
    slug: "stative-vs-action-verbs",
    popup: [1200, 780],
    title: "Stative vs Action Verbs",
    tag: "Grammar",
    level: "B1 to B2 · Exam prep",
    desc: "25 minutes for a teen at high B1: a Definitions Kickoff with hidden choices, then listen, sort, learn the rule, practise and talk. Which verbs never take -ing, and the ones that do both.",
  },
  {
    slug: "the-tell-tale-heart",
    popup: [1200, 780],
    title: "The Tell-Tale Heart",
    tag: "Reading",
    level: "A2 to B1 · Teens",
    desc: "A 25-minute mystery lesson on Poe's story: vocabulary, a four-scene retelling, detective case files, a debate and a new ending.",
  },
  {
    slug: "e8-task-7-short-texts",
    popup: [1200, 780],
    title: "E8 Task 7: Short Texts",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: 14 short texts (notices, adverts, emails, messages, diaries). Know the question type, find the evidence, avoid the trap.",
  },
  {
    slug: "e8-task-8-missing-sentences",
    popup: [1200, 780],
    title: "E8 Task 8: Missing Sentences",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: four texts with three gaps each and one extra sentence. Use the clues around each gap, one gap at a time.",
  },
  {
    slug: "e8-task-9-match-the-text",
    popup: [1200, 780],
    title: "E8 Task 9: Match the Text",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: four sets of three short texts and four questions each. Match the idea, not the words, and see how the wrong texts trick you.",
  },
  {
    slug: "e8-task-10-find-the-facts",
    popup: [1200, 780],
    title: "E8 Task 10: Find the Facts",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: read two short texts and complete a message to a friend with the right facts, one to three words per gap. In English.",
  },
  {
    slug: "e8-task-11-the-right-word",
    popup: [1200, 780],
    title: "E8 Task 11: The Right Word",
    tag: "Exam Prep",
    level: "A2 to low B1 · E8 exam prep",
    desc: "25 minutes on one task type: four short texts with three gaps each and a box of six words. Pick the word that fits and learn why the look-alikes are wrong.",
  },
];

export const customLessonBySlug = (slug) => CUSTOM_LESSONS.find((l) => l.slug === slug);

export function openCustomLessonPopup(path, name, w, h) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const width = Math.min(w, screenW - 40);
  const height = Math.min(h, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - width) / 2));
  const top = Math.max(0, Math.floor((screenH - height) / 2));
  window.open(
    path,
    name,
    `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export function openCustomLesson(lesson) {
  openCustomLessonPopup(
    `/library/customized-lessons/${lesson.slug}`,
    "sentencoCustomLesson",
    lesson.popup ? lesson.popup[0] : 840,
    lesson.popup ? lesson.popup[1] : 860,
  );
}
