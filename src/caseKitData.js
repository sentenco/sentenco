// Constants shared by the Case file player (caseKit.jsx) and the lessons that use it.
export const CF_W = 1120;
export const CF_H = 747;

// Topic colors (the shelf of the lesson decides which one the player uses).
export const CASE_TOPICS = {
  body: { c: "#FF9DB0", deep: "#C8365F", tint: "#FFE9EE" },
  nature: { c: "#7BE3AA", deep: "#178A52", tint: "#E3F8EC" },
  tech: { c: "#8FBBFF", deep: "#2F62C4", tint: "#E6F0FF" },
  lang: { c: "#FFD25E", deep: "#A86C00", tint: "#FFF4D1" },
  older: { c: "#D9D1F2", deep: "#6554A6", tint: "#F1EEFB" },
};

// Score id of the word in slot idx (0-4 are Text 1's words, 5-9 Text 2's).
export const vocabId = (idx) => (idx < 5 ? `mA-${idx + 1}` : `mB-${idx - 4}`);
