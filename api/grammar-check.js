// Vercel serverless function. Keeps the Anthropic API key server-side only —
// never expose it via a VITE_ env var, which would bundle it into the client.

import { isProPlusRequest } from "./_authGate.js";

const MAX_INPUT_LENGTH = 4000;

const SYSTEM_PROMPT = `You are a grammar and writing checker for English teachers preparing materials for adult ESL students. Given a passage of English text, find grammar, spelling, punctuation, and awkward-register errors. For each error, return the exact original snippet, a corrected version, and a short, plain-language explanation of why it was wrong (written for a teacher, not a linguist).

Respond with ONLY valid JSON in this exact shape, no other text, no markdown fences:
{"corrections": [{"original": "...", "corrected": "...", "explanation": "..."}]}

If there are no errors, respond with {"corrections": []}. Keep explanations under 25 words each. Do not flag stylistic preferences that are not actually incorrect.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!(await isProPlusRequest(req))) {
    res.status(403).json({ error: "The Grammar Checker is a Sentenco Pro+ feature." });
    return;
  }

  const text = typeof req.body?.text === "string" ? req.body.text.trim() : "";
  if (!text) {
    res.status(400).json({ error: "No text provided." });
    return;
  }
  if (text.length > MAX_INPUT_LENGTH) {
    res.status(400).json({ error: `That's too long — try a shorter passage (under ${MAX_INPUT_LENGTH} characters).` });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Grammar checker isn't configured yet — missing API key." });
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
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: text }],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Anthropic API error:", response.status, errBody);
      res.status(502).json({ error: "The grammar checker service failed. Try again in a moment." });
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

    if (!parsed || !Array.isArray(parsed.corrections)) {
      res.status(502).json({ error: "Couldn't read the grammar check result. Try again." });
      return;
    }

    res.status(200).json({ corrections: parsed.corrections });
  } catch (err) {
    console.error("Grammar check error:", err);
    res.status(500).json({ error: "Something went wrong. Try again in a moment." });
  }
}
