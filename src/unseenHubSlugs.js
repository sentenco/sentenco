// Slugs of the lessons that live in the Unseen Reading room (Parts 1-4, 6-210, and the Kids shelf 211-230).
// Part 5 is a student's own lesson and stays in Custom Lessons.
export const UNSEEN_HUB_SLUGS = [1, 2, 3, 4, ...Array.from({ length: 225 }, (_, i) => i + 6)].map((n) => `unseen-reading-part-${n}`);
