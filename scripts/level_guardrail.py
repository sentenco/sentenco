"""
Level-appropriateness guardrail for Sentenco lesson content.

Checks generated lesson SQL files for two things:
1. Blocklisted B2/C1-level abstract/academic words or phrases that have
   no business appearing in A1/A2 content (the exact failure mode caught
   in the first A2 Teens Bridge-tier draft).
2. A readability heuristic (average sentence length + average syllables
   per word) flagged against a per-tier ceiling, so drift toward long,
   dense sentences gets caught even if no single word is blocklisted.
   Ceilings are tier-aware: Bridge tier is allowed longer sentences than
   Foundation tier within the same CEFR level, since that's the point
   of the tiering -- but all tiers stay well under the next CEFR level.

This is a pre-commit check, not a hard gate -- it prints a report and
lets a human (or Claude) decide whether a flag is a real problem or a
false positive.
"""
import re, json, sys

BLOCKLIST = [
    "culmination", "non-negotiable", "root cause", "underappreciated",
    "buy-in", "in hindsight", "grounded in", "fundamentally",
    "superficially", "objectively", "nuanced", "transferable",
    "trade-off", "sustainable", "sustainability", "consistency",
    "accountable", "accountability", "reassess", "prioritize",
    "prioritization", "motivation", "long-term", "short-term",
    "realistic", "unrealistic", "ambitious", "ambition",
    "synthesize", "synthesis", "hypothesis", "criteria", "criterion",
    "implication", "implications", "correlation", "juxtapose",
    "paradox", "inherent", "inherently", "arguably", "ostensibly",
    "nonetheless", "nevertheless", "notwithstanding", "albeit",
    "whereas", "insofar", "overarching", "underlying", "holistic",
    "pragmatic", "pragmatism", "cognitive", "discourse",
    "methodology", "framework", "paradigm", "dynamic", "dynamics",
    "leverage", "optimize", "optimization", "streamline",
    "facilitate", "facilitation", "mitigate", "mitigation",
]

# Per-tier ceilings within each CEFR level. Bridge is allowed more than
# Foundation *within the same level* -- that's the tiering working as
# intended -- but every tier here stays under the next level's minimum.
TIER_CEILINGS = {
    "A1": {
        "foundation": {"max_avg_sentence_words": 6, "max_avg_syllables_per_word": 1.3},
        "combination": {"max_avg_sentence_words": 8, "max_avg_syllables_per_word": 1.35},
        "bridge": {"max_avg_sentence_words": 10, "max_avg_syllables_per_word": 1.4},
    },
    "A2": {
        "foundation": {"max_avg_sentence_words": 9, "max_avg_syllables_per_word": 1.4},
        "combination": {"max_avg_sentence_words": 13, "max_avg_syllables_per_word": 1.45},
        "bridge": {"max_avg_sentence_words": 18, "max_avg_syllables_per_word": 1.5},
    },
}

# Fields that are teacher stage-directions, not text the student reads
# for comprehension -- exclude from readability scoring.
NON_STUDENT_FIELDS = {"note"}

MIN_WORDS_TO_SCORE = 15  # skip fragments too short for a meaningful average

VOWELS = "aeiouy"

def count_syllables(word):
    word = word.lower().strip(".,!?;:\"'")
    if not word:
        return 0
    count = 0
    prev_vowel = False
    for ch in word:
        is_vowel = ch in VOWELS
        if is_vowel and not prev_vowel:
            count += 1
        prev_vowel = is_vowel
    if word.endswith("e") and count > 1:
        count -= 1
    return max(count, 1)

def analyze_text(text):
    sentences = [s.strip() for s in re.split(r'[.!?]+', text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    if not sentences or len(words) < MIN_WORDS_TO_SCORE:
        return None
    avg_sentence_words = sum(len(re.findall(r"[A-Za-z']+", s)) for s in sentences) / len(sentences)
    avg_syllables = sum(count_syllables(w) for w in words) / len(words)
    return {
        "sentence_count": len(sentences),
        "avg_sentence_words": round(avg_sentence_words, 1),
        "avg_syllables_per_word": round(avg_syllables, 2),
    }

def find_blocklisted(text):
    lower = text.lower()
    return [w for w in BLOCKLIST if w in lower]

def extract_texts_from_json_blocks(sql_text):
    """Pull student-facing text out of each $json$...$json$ block,
    tagged with the field it came from so non-student fields (teacher
    notes) can be excluded from readability scoring but still checked
    against the blocklist."""
    blocks = re.findall(r'\$json\$(.*?)\$json\$', sql_text, re.S)
    items = []  # (field_name, text)
    for b in blocks:
        try:
            content = json.loads(b)
        except json.JSONDecodeError:
            continue
        if "text" in content:
            items.append(("text", content["text"]))
        for key in ("questions", "prompts", "checklist"):
            if key in content and isinstance(content[key], list):
                for x in content[key]:
                    items.append((key, str(x)))
        if "challenge" in content:
            items.append(("challenge", str(content["challenge"])))
        if "dialogue" in content and isinstance(content["dialogue"], list):
            for line in content["dialogue"]:
                if isinstance(line, dict) and "text" in line:
                    items.append(("dialogue", line["text"]))
        if "note" in content:
            items.append(("note", str(content["note"])))
    return items

def infer_tier(path):
    m = re.search(r'unit(\d+)_insert', path)
    if not m:
        return None
    n = int(m.group(1))
    if n <= 4:
        return "foundation"
    elif n <= 8:
        return "combination"
    else:
        return "bridge"

def check_file(path, level, tier=None):
    with open(path) as f:
        sql_text = f.read()
    items = extract_texts_from_json_blocks(sql_text)
    tier = tier or infer_tier(path) or "bridge"  # default to strictest-allowance tier if unknown
    ceiling = TIER_CEILINGS.get(level, TIER_CEILINGS["A2"])[tier]
    flags = []
    for field, t in items:
        blocked = find_blocklisted(t)
        if blocked:
            flags.append(("BLOCKLIST", blocked, t[:100]))
        if field in NON_STUDENT_FIELDS:
            continue
        stats = analyze_text(t)
        if stats:
            if stats["avg_sentence_words"] > ceiling["max_avg_sentence_words"]:
                flags.append(("SENTENCE_LENGTH", stats, t[:100]))
            if stats["avg_syllables_per_word"] > ceiling["max_avg_syllables_per_word"]:
                flags.append(("SYLLABLE_COMPLEXITY", stats, t[:100]))
    return tier, flags

if __name__ == "__main__":
    level = sys.argv[1] if len(sys.argv) > 1 else "A2"
    paths = sys.argv[2:]
    total_flags = 0
    for path in paths:
        tier, flags = check_file(path, level)
        if flags:
            print(f"\n=== {path} (tier={tier}, {len(flags)} flags) ===")
            for kind, detail, excerpt in flags:
                print(f"  [{kind}] {detail} -- \"{excerpt}...\"")
            total_flags += len(flags)
        else:
            print(f"{path} (tier={tier}): clean")
    print(f"\nTotal flags: {total_flags}")
