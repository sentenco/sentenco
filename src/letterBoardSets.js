import { SAMPLE_ITEMS, SAMPLE_STORY, SAMPLE_STORY_ITEMS, SECRET_MAP_STORY, SECRET_MAP_ITEMS, PAROL_MAKER_STORY, PAROL_MAKER_ITEMS, LAST_FIVE_STORY, LAST_FIVE_ITEMS, TALENT_SHOW_STORY, TALENT_SHOW_ITEMS, LOST_PHONE_STORY, LOST_PHONE_ITEMS, LAST_LEVEL_STORY, LAST_LEVEL_ITEMS, MILK_TEA_STORY, MILK_TEA_ITEMS, MYSTERY_NOTES_STORY, MYSTERY_NOTES_ITEMS, ESCAPE_ROOM_STORY, ESCAPE_ROOM_ITEMS, NIGHT_NOISE_STORY, NIGHT_NOISE_ITEMS, BOOK_PHOTO_STORY, BOOK_PHOTO_ITEMS } from "./letterBoardData";

// The Letter Board topics teachers can play. Each topic is a set of 20 items (see letterBoardData.js)
// and can be about anything: no categories. Teachers can't add or edit these; new topics are added here,
// often because a teacher asked for one through Custom Lessons.
//
// { id, title, blurb, items, story?, hidden?, coverFit? }
// hidden: not shown on the hub but still playable by its link. coverFit: "contain" for a picture on a plain background.

export const LETTER_BOARD_SETS = [
  {
    id: "sample",
    title: "Everyday English",
    blurb: "A friendly mix: animals, colors, spelling and speaking.",
    items: SAMPLE_ITEMS,
    story: null,
    hidden: true,
  },
  {
    id: "sample-story",
    title: "The Lost Cat",
    blurb: "Read a short story first, then answer questions about it.",
    items: SAMPLE_STORY_ITEMS,
    story: SAMPLE_STORY,
    coverFit: "contain",
  },
  {
    id: "secret-map",
    title: "The Secret Map",
    blurb: "A rainy day, an old box and a treasure hunt. Read the story, then play.",
    items: SECRET_MAP_ITEMS,
    story: SECRET_MAP_STORY,
  },
  {
    id: "parol-maker",
    title: "The Parol Maker",
    blurb: "A fiesta, a bamboo star and a glowing surprise. Read the story, then play.",
    items: PAROL_MAKER_ITEMS,
    story: PAROL_MAKER_STORY,
  },
  {
    id: "last-five-minutes",
    title: "The Last Five Minutes",
    blurb: "A school final, a seat on the bench and one big chance. Read the story, then play.",
    items: LAST_FIVE_ITEMS,
    story: LAST_FIVE_STORY,
  },
  {
    id: "talent-show",
    title: "The Talent Show",
    blurb: "Shaking hands, a best friend and a big stage. Read the story, then play.",
    items: TALENT_SHOW_ITEMS,
    story: TALENT_SHOW_STORY,
  },
  {
    id: "lost-phone",
    title: "The Lost Phone",
    blurb: "A busy mall, an empty bag and a kind stranger. Read the story, then play.",
    items: LOST_PHONE_ITEMS,
    story: LOST_PHONE_STORY,
  },
  {
    id: "last-level",
    title: "The Last Level",
    blurb: "One week, one dragon and a little sister with a clever idea. Read the story, then play.",
    items: LAST_LEVEL_ITEMS,
    story: LAST_LEVEL_STORY,
  },
  {
    id: "milk-tea-shop",
    title: "The Milk Tea Shop",
    blurb: "A first weekend job, a very sweet mistake and a kind manager. Read the story, then play.",
    items: MILK_TEA_ITEMS,
    story: MILK_TEA_STORY,
  },
  {
    id: "mystery-notes",
    title: "The Mystery Notes",
    blurb: "A yellow note, no name and a very early morning. Who is writing them? Read the story, then play.",
    items: MYSTERY_NOTES_ITEMS,
    story: MYSTERY_NOTES_STORY,
  },
  {
    id: "escape-room",
    title: "The Escape Room",
    blurb: "Sixty minutes, one golden key and a big surprise. Read the story, then play.",
    items: ESCAPE_ROOM_ITEMS,
    story: ESCAPE_ROOM_STORY,
  },
  {
    id: "noise-at-night",
    title: "The Noise at Night",
    blurb: "Tap, tap, tap in the garage. Is there a thief in the house? Read the story, then play.",
    items: NIGHT_NOISE_ITEMS,
    story: NIGHT_NOISE_STORY,
  },
  {
    id: "photo-in-the-book",
    title: "The Photo in the Book",
    blurb: "An old photo, a secret message and a big clock. Read the story, then play.",
    items: BOOK_PHOTO_ITEMS,
    story: BOOK_PHOTO_STORY,
  },
];

// What the hub shows: every topic that is not hidden.
export const HUB_SETS = LETTER_BOARD_SETS.filter((s) => !s.hidden);

export function getLetterBoardSet(id) {
  return LETTER_BOARD_SETS.find((s) => s.id === id) || null;
}
