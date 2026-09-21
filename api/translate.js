// Vercel serverless function. Keeps the Anthropic API key server-side only —
// same pattern as dictionary-lookup.js and grammar-check.js. No caching:
// translation inputs are free-form sentences, unlike single dictionary words,
// so there's little repeat-lookup benefit.

import { isProPlusRequest } from "./_authGate.js";

const MAX_INPUT_LENGTH = 2000;

const SYSTEM_PROMPT = `You are a translator for an ESL teaching platform used by English teachers and their students. Translate the given text from the specified source language into the specified target language. Keep the translation natural and idiomatic, not word-for-word.

Respond with ONLY valid JSON in this exact shape, no other text, no markdown fences:
{"translation": "..."}

If the input is empty or not real text, respond with {"translation": ""}.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!(await isProPlusRequest(req))) {
    res.status(403).json({ error: "The Translator is a Sentenco Pro+ feature." });
    return;
  }

  const text = typeof req.body?.text === "string" ? req.body.text.trim() : "";
  const sourceLang = typeof req.body?.sourceLang === "string" ? req.body.sourceLang.trim() : "";
  const targetLang = typeof req.body?.targetLang === "string" ? req.body.targetLang.trim() : "";
  if (!text) {
    res.status(400).json({ error: "No text provided." });
    return;
  }
  if (!sourceLang) {
    res.status(400).json({ error: "No source language provided." });
    return;
  }
  if (!targetLang) {
    res.status(400).json({ error: "No target language provided." });
    return;
  }
  if (text.length > MAX_INPUT_LENGTH) {
    res.status(400).json({ error: `That's too long — try a shorter passage (under ${MAX_INPUT_LENGTH} characters).` });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Translator isn't configured yet — missing API key." });
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
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Translate this text from ${sourceLang} to ${targetLang}:\n\n${text}` }],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Anthropic API error:", response.status, errBody);
      res.status(502).json({ error: "The translator service failed. Try again in a moment." });
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

    if (!parsed || typeof parsed.translation !== "string") {
      res.status(502).json({ error: "Couldn't read the translation result. Try again." });
      return;
    }

    if (!parsed.translation) {
      res.status(404).json({ error: "Couldn't translate that. Try rephrasing it." });
      return;
    }

    res.status(200).json({ translation: parsed.translation });
  } catch (err) {
    console.error("Translate error:", err);
    res.status(500).json({ error: "Something went wrong. Try again in a moment." });
  }
}
