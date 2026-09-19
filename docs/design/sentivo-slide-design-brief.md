# Sentivo Lesson Slide — Design Brief

**Goal:** Recreate the visual "chrome" of Sentivo's lesson player as a reusable PowerPoint template — the card frame, header, footer nav, and color/type system — so any lesson content can be dropped in and look on-brand.

## 1. Canvas size

- Native web card: **780 × 440 px** (ratio ≈ 1.77:1, essentially 16:9)
- For PowerPoint, set the slide size to standard **Widescreen 16:9 — 13.333in × 7.5in** (33.87cm × 19.05cm). This preserves the same proportions at full slide size.
- The whole slide is one rounded white card, not edge-to-edge content:
  - Corner radius: **16px** (scale proportionally — about 0.3in at full slide size)
  - Border: **3px solid navy (#1B2A4A)** all the way around
  - Drop shadow: soft, large, dark — `0 20px 60px rgba(0,0,0,0.5)` (a big soft shadow like the card is floating above a dark background)

## 2. Color palette

| Role | Hex | Use |
|---|---|---|
| Ink (navy) | `#1B2A4A` | All body text, borders, wordmark — constant across every color theme |
| Accent (majority) | `#FF7A59` (coral) | Header bars, buttons, progress fill — the "loud" brand color |
| Accent-dark | `#E8623D` | Button shadows, badge fills |
| Secondary (pale) | `#FFC9B8` | Placeholder borders, light fills |
| Background wash | `#FDF8F0` | Page/content background, off-white not pure white |
| Cool tint | `#FFE4DA` | Secondary panel backgrounds |
| Cream (on-navy text) | `#FFF3E4` | Text sitting on navy fills |

> Note: this coral set is one of three rotating palettes (we also use an emerald green and a periwinkle purple set as "chapters"). This brief covers just the one palette above to start.

## 3. Typography

- **Display / headings:** **Fredoka**, Bold (700) — a rounded, friendly geometric sans. Used for the wordmark, slide titles, big headline text. Sizes range ~18–32px depending on role.
- **Body / UI text:** **Quicksand**, weights 500/600/700 — also rounded, pairs cleanly with Fredoka. Used for labels, buttons, body copy, tags. Sizes ~11–19px depending on role.
- Both are free on Google Fonts.

## 4. Layout anatomy (top to bottom)

**A. Top bar** (white background, ~40-50px tall)
- Left: "sentivo" wordmark in Fredoka Bold navy, with a small colored dot after it + a tiny emoji "motif" icon (e.g. ☀)
- Center: current slide-type label, uppercase, small, gray, letter-spaced (e.g. "VOCABULARY")
- Right: slide counter, e.g. "3 / 9", gray Quicksand
- Directly below: a **3px progress bar**, track color `#EFEFF2`, filled portion in the accent color, width = progress through the deck

**B. Content header bar** (appears at the top of most content slides)
- Solid **navy (#1B2A4A)** background, full width, ~70-75px tall
- White pill badge (small, uppercase, bold, rounded-full) labeling the slide type, e.g. "VOCABULARY"
- Title below it in Fredoka Bold, cream (`#FFF3E4`), ~19px
- Subtitle below that in Quicksand Medium, cream at ~70% opacity, ~13.5px

**C. Body area** (white or cream background, fills remaining space)
- Generous padding (~20-28px)
- Content varies by slide type — text, image cards, word tiles, etc. — but always navy ink text on a light background
- Rounded-corner tiles/cards throughout (~12-14px radius), never sharp corners

**D. Bottom nav bar** (white background, ~55px tall)
- Left: "← Previous" pill button — accent-colored when enabled, pale/disabled-looking on slide 1
- Center: progress dots — small gray circles, the active one is an elongated pill in the accent color
- Right: "Next →" pill button, solid accent fill, bold Quicksand text

## 5. Component details

- **Buttons:** full pill shape (border-radius 999px), solid accent fill, small drop "shadow" below (like a 3D pressed-button effect: `box-shadow: 0 3px 0 <darker accent>`)
- **Badges/tags:** small uppercase pills, either white-on-navy or navy-on-white depending on context
- **Cards/tiles:** white or pale-tint fill, 12-16px rounded corners, no heavy borders — soft and flat, not skeuomorphic
- **Icons/imagery:** simple, single-color emoji or flat icons rather than photographic — keeps the friendly, game-like tone
