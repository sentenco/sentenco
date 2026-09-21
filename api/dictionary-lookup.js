// Vercel serverless function. Cached dictionary lookups — Claude is only
// called the first time any word is ever looked up across all users; every
// repeat lookup after that is served straight from the word_definitions
// table. Keeps the Anthropic API key server-side only, same as
// grammar-check.js.

import { createClient } from "@supabase/supabase-js";
import { isProPlusRequest } from "./_authGate.js";

const MAX_WORD_LENGTH = 50;

const SYSTEM_PROMPT = `You are a dictionary for English teachers preparing materials for ESL students. Given a single English word, return up to 3 common meanings, using simple, plain-language definitions a teacher could read straight to a student.

Respond with ONLY valid JSON in this exact shape, no other text, no markdown fences:
{"word": "...", "meanings": [{"pos": "noun", "def": "..."}]}

"pos" is the part of speech (noun, verb, adjective, adverb, etc.), written in lowercase. Keep each definition under 20 words. If the word isn't a real English word, respond with {"word": "...", "meanings": []}.`;

function supabaseServerClient() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!(await isProPlusRequest(req))) {
    res.status(403).json({ error: "The Dictionary is a Sentenco Pro+ feature." });
    return;
  }

  const rawWord = typeof req.body?.word === "string" ? req.body.word.trim() : "";
  if (!rawWord) {
    res.status(400).json({ error: "No word provided." });
    return;
  }
  if (rawWord.length > MAX_WORD_LENGTH) {
    res.status(400).json({ error: "That doesn't look like a single word." });
    return;
  }
  const word = rawWord.toLowerCase();

  const supabase = supabaseServerClient();

  // Cache hit — no Claude call, no cost.
  if (supabase) {
    const { data: cached } = await supabase
      .from("word_definitions")
      .select("word, meanings")
      .eq("word", word)
      .maybeSingle();
    if (cached) {
      res.status(200).json({ word: cached.word, meanings: cached.meanings });
      return;
    }
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Dictionary isn't configured yet — missing API key." });
    return;
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: word }],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Anthropic API error:", response.status, errBody);
      res.status(502).json({ error: "The dictionary service failed. Try again in a moment." });
      return;
    }

    const data = await response.json();
    const raw = data?.content?.[0]?.text || "";

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : null;
    }

    if (!parsed || !Array.isArray(parsed.meanings)) {
      res.status(502).json({ error: "Couldn't read the dictionary result. Try again." });
      return;
    }

    if (!parsed.meanings.length) {
      res.status(404).json({ error: `No results for "${word}".` });
      return;
    }

    // Best-effort cache write — a failure here shouldn't fail the lookup
    // itself, it just means the next request for this word costs another
    // API call instead of being free.
    if (supabase) {
      supabase
        .from("word_definitions")
        .upsert({ word, meanings: parsed.meanings }, { onConflict: "word" })
        .then(({ error }) => {
          if (error) console.error("Dictionary cache write failed:", error);
        });
    }

    res.status(200).json({ word: parsed.word || word, meanings: parsed.meanings });
  } catch (err) {
    console.error("Dictionary lookup error:", err);
    res.status(500).json({ error: "Something went wrong. Try again in a moment." });
  }
}
