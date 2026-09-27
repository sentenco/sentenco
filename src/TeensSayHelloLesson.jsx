// Unit 1 Lesson 1's content used to live here as a bespoke player. It has
// been migrated into igniteA1Data.js ("1-1") so it renders through the
// shared IgniteLesson.jsx like every other Ignite lesson. This file now
// only survives to export StarIcon, which AblazeLesson.jsx still uses.
export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}
