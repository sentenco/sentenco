// Picture library for the A1 Kids lessons.
//   node scripts/pictures.mjs index          rebuild docs/picture-library.md + scripts/picture-library.json
//   node scripts/pictures.mjs fill [--dry]   fill empty picture slots (src={null}) from the library by label
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");
const publicDir = path.join(root, "public");
const jsonPath = path.join(root, "scripts", "picture-library.json");
const docPath = path.join(root, "docs", "picture-library.md");
const EXT = "(?:jpg|jpeg|png|webp|avif|gif|svg)";

const lessonFiles = () => fs.readdirSync(srcDir).filter((f) => f.endsWith(".jsx")).map((f) => path.join(srcDir, f));
const exists = (p) => p.startsWith("/") && fs.existsSync(path.join(publicDir, p));

function fileConsts(text) {
  const consts = {};
  for (const m of text.matchAll(/const\s+(\w+)\s*=\s*["'`]([^"'`]+)["'`]/g)) consts[m[1]] = m[2];
  return consts;
}

function resolveSrc(attr, consts) {
  let m = attr.match(/src="([^"]+)"/);
  if (m) return m[1];
  m = attr.match(/src=\{`\$\{(\w+)\}([^`]*)`\}/);
  if (m && consts[m[1]] !== undefined) return consts[m[1]].replace(/\/$/, "") + m[2];
  m = attr.match(/src=\{(\w+)\}/);
  if (m && consts[m[1]]) return consts[m[1]];
  return null;
}

function scan() {
  const found = {};
  for (const file of lessonFiles()) {
    const text = fs.readFileSync(file, "utf8");
    const consts = fileConsts(text);
    for (const t of text.matchAll(/<(?:Pic|WordCard)\b([^>]*?)\/?>/gs)) {
      const label = (t[1].match(/label="([^"]+)"/) || [])[1];
      if (!label || label === "?") continue;
      const p = resolveSrc(t[1], consts);
      if (!p || !new RegExp(`\\.${EXT}$`, "i").test(p) || !exists(p)) continue;
      const key = label.toLowerCase();
      found[key] ??= {};
      found[key][p] = (found[key][p] || 0) + 1;
    }
  }
  return found;
}

function index() {
  const found = scan();
  const lib = {};
  for (const [label, paths] of Object.entries(found)) {
    const ranked = Object.entries(paths).sort((a, b) => b[1] - a[1]);
    lib[label] = { path: ranked[0][0], uses: ranked.reduce((n, r) => n + r[1], 0), alternates: ranked.slice(1).map((r) => r[0]) };
  }
  const sorted = Object.fromEntries(Object.entries(lib).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(jsonPath, JSON.stringify(sorted, null, 2) + "\n");
  const rows = Object.entries(sorted).map(([label, v]) => `| ${label} | \`${v.path}\` | ${v.uses} |${v.alternates.length ? " " + v.alternates.map((a) => `\`${a}\``).join(", ") : ""}`.replace(/\|$/, "|"));
  const doc = [
    "# Picture library (A1 Kids)",
    "",
    "Every picture already used in a lesson, by label. Before making a new picture, check here.",
    "",
    "Reuse in a new lesson: write the slot with the label and no picture, then fill it from this list:",
    "",
    "```jsx",
    '<Pic src={null} label="bedroom" size={110} onZoom={onZoom} />',
    "```",
    "",
    "```",
    "node scripts/pictures.mjs fill --dry   # show what would be filled",
    "node scripts/pictures.mjs fill         # fill matching labels",
    "node scripts/pictures.mjs index        # rebuild this list after adding pictures",
    "```",
    "",
    "Labels that have no match stay empty and need a new picture. The label must match exactly (case does not matter).",
    "",
    `${Object.keys(sorted).length} labels.`,
    "",
    "| Label | Picture | Times used | Other pictures used for this label |",
    "|---|---|---|---|",
    ...Object.entries(sorted).map(([label, v]) => `| ${label} | \`${v.path}\` | ${v.uses} | ${v.alternates.map((a) => `\`${a}\``).join(", ")} |`),
    "",
  ].join("\n");
  fs.writeFileSync(docPath, doc);
  console.log(`Indexed ${Object.keys(sorted).length} labels -> docs/picture-library.md`);
}

function fill(dry) {
  if (!fs.existsSync(jsonPath)) index();
  const lib = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  let filled = 0;
  const missing = {};
  for (const file of lessonFiles()) {
    const text = fs.readFileSync(file, "utf8");
    let changed = false;
    const out = text.replace(/(<(?:Pic|WordCard)\b)([^>]*?)(\/?>)/gs, (whole, open, attrs, close) => {
      if (!/src=\{null\}/.test(attrs)) return whole;
      const label = (attrs.match(/label="([^"]+)"/) || [])[1];
      if (!label || label === "?") return whole;
      const hit = lib[label.toLowerCase()];
      if (!hit) {
        (missing[label] ??= []).push(path.basename(file));
        return whole;
      }
      filled++;
      changed = true;
      return open + attrs.replace(/src=\{null\}/, `src="${hit.path}"`) + close;
    });
    if (changed && !dry) fs.writeFileSync(file, out);
  }
  console.log(`${dry ? "Would fill" : "Filled"} ${filled} slot(s).`);
  const names = Object.keys(missing);
  console.log(names.length ? `No picture yet for ${names.length} label(s):` : "Every labelled slot has a picture.");
  for (const n of names) console.log(`  - ${n}  (${[...new Set(missing[n])].join(", ")})`);
}

const [cmd, flag] = process.argv.slice(2);
if (cmd === "index") index();
else if (cmd === "fill") fill(flag === "--dry");
else console.log("Usage: node scripts/pictures.mjs index | fill [--dry]");
