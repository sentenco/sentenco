// DERIVE, School Life Track, Lesson 1: "Educate"
// One word family drilled across the whole lesson. 10 gap-fill sentences,
// 2 per form (5 forms x 2 = 10), each form the correct answer exactly twice.

export default {
  id: "derive-school-1",
  code: "L1",
  title: "Word Family: Educate",
  root: "educate",
  family: ["educate", "educating", "educated", "education", "educator"],
  sentences: [
    { text: "Teachers work hard to ___ every student fairly.", answer: "educate" },
    { text: "A good ___ opens many doors later in life.", answer: "education" },
    { text: "She is well ___ in science and math.", answer: "educated" },
    { text: "He wants to become an ___ after university.", answer: "educator" },
    { text: "The school is ___ students about online safety this term.", answer: "educating" },
    { text: "Parents also help ___ their children at home.", answer: "educate" },
    { text: "Free ___ is available at public schools here.", answer: "education" },
    { text: "Every ___ needs patience and creativity.", answer: "educator" },
    { text: "My grandmother was self ___ and loved reading.", answer: "educated" },
    { text: "The teacher spent the class ___ us about recycling.", answer: "educating" },
  ],
  // For each sentence, above, at the same index: a short, self-contained
  // note for a first-time teacher to read or paraphrase when they ask the
  // student to justify their answer, right before marking it correct.
  teacherGuide: [
    { note: "The word right before the blank is 'to'. After 'to', the verb stays in its plain form, no -ing and no -ed." },
    { note: "'A good' is an article plus a describing word, so the blank needs to be a noun next." },
    { note: "The word right before the blank is 'is' and 'well'. This is describing a quality, not an action, so it needs the adjective form." },
    { note: "The blank comes right after 'an'. After a word like that, the next word is a noun." },
    { note: "The word right before the blank is 'is'. That's a linking verb like 'is', so the verb after it takes the -ing form because it's happening right now." },
    { note: "'Help' is followed by the plain base form of the next verb, with no 'to' in between." },
    { note: "The word itself names the idea being talked about here, so it needs the noun form, even with no 'a' or 'the' in front of it." },
    { note: "The blank comes right after 'Every'. After a word like that, the next word is a noun." },
    { note: "The word right before the blank is 'was' and 'self'. This is describing a quality, not an action, so it needs the adjective form." },
    { note: "'The class' is an article plus a describing word, so the blank needs to be a noun next." },
  ],
};
