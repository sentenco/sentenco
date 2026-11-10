// Constants shared by the Case file player (caseKit.jsx) and the lessons that use it.
export const CF_W = 1120;
export const CF_H = 747;

// Topic colors (the shelf of the lesson decides which one the player uses).
export const CASE_TOPICS = {
  body: { c: "#FF9DB0", deep: "#C8365F", tint: "#FFE9EE" },
  nature: { c: "#7BE3AA", deep: "#178A52", tint: "#E3F8EC" },
  tech: { c: "#8FBBFF", deep: "#2F62C4", tint: "#E6F0FF" },
  lang: { c: "#FFD25E", deep: "#A86C00", tint: "#FFF4D1" },
  space: { c: "#B7A6FF", deep: "#5B3FD0", tint: "#EFEAFF" },
  mma: { c: "#FFA45C", deep: "#B04A00", tint: "#FFEEDC" },
  safety: { c: "#5CD6E6", deep: "#0E7C8C", tint: "#DDF6FA" },
  money: { c: "#C6E75F", deep: "#5E7A00", tint: "#F1F9D6" },
  mind: { c: "#EBA6F2", deep: "#9A3AA6", tint: "#FAE8FC" },
  history: { c: "#E5BE8E", deep: "#8A5A1E", tint: "#F7EBDA" },
  sports: { c: "#FF8266", deep: "#B3321B", tint: "#FFE9E3" },
  psych: { c: "#2FC4B2", deep: "#0A7468", tint: "#D7F5F1" },
  older: { c: "#D9D1F2", deep: "#6554A6", tint: "#F1EEFB" },
  "k-animals": { c: "#8EE07A", deep: "#2E7D1E", tint: "#E8F8E1" },
  "k-works": { c: "#8FBBFF", deep: "#2F62C4", tint: "#E6F0FF" },
  "k-earth": { c: "#6FD3FF", deep: "#0B6E99", tint: "#E0F5FF" },
  "k-past": { c: "#E5BE8E", deep: "#8A5A1E", tint: "#F7EBDA" },
  "k-wow": { c: "#EBA6F2", deep: "#9A3AA6", tint: "#FAE8FC" },
  "k-food": { c: "#FFB067", deep: "#B35A00", tint: "#FFF0E0" },
};

// Score id of the word in slot idx (0-4 are Text 1's words, 5-9 Text 2's).
export const vocabId = (idx) => (idx < 5 ? `mA-${idx + 1}` : `mB-${idx - 4}`);
