// Slugs of the lessons that live in the Unseen Reading room (Parts 1-4, 6-153).
// Part 5 is a student's own lesson and stays in Custom Lessons.
export const UNSEEN_HUB_SLUGS = [1, 2, 3, 4, ...Array.from({ length: 148 }, (_, i) => i + 6)].map((n) => `unseen-reading-part-${n}`);
