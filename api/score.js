// Vercel serverless function. Holds the real API key server-side so no device
// needs its own key: the client only ever sends the PIN and the prompt text.
// Uses Google Gemini via the Interactions API. Set GEMINI_API_KEY in Vercel.
import { timingSafeEqual } from 'node:crypto';

/* Best-effort burst limiter. Serverless instances are ephemeral and horizontally
   scaled, so this cannot be a hard global quota. It exists to blunt a rapid
   scripted burst against a single warm instance, not to replace the PIN. */
const HITS = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;

function overLimit(ip) {
  const now = Date.now();
  const recent = (HITS.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (HITS.size > 500) for (const [k, v] of HITS) if (!v.some(t => now - t < WINDOW_MS)) HITS.delete(k);
  // Only count requests we actually serve. Counting rejected ones would let a
  // client extend its own penalty forever just by retrying, so the window would
  // never drain and a legitimate user could stay locked out indefinitely.
  if (recent.length >= MAX_PER_WINDOW) { HITS.set(ip, recent); return true; }
  recent.push(now);
  HITS.set(ip, recent);
  return false;
}

function pinMatches(given, expected) {
  if (typeof given !== 'string' || typeof expected !== 'string') return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  try { return timingSafeEqual(a, b); } catch { return false; }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.APP_PIN) {
    res.status(500).json({ error: 'Server has no PIN configured yet. Set APP_PIN in Vercel project settings.' });
    return;
  }
  if (!pinMatches(req.headers['x-app-pin'], process.env.APP_PIN)) {
    res.status(401).json({ error: 'Wrong PIN' });
    return;
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (overLimit(ip)) {
    res.status(429).json({ error: 'Too many scoring requests in a short time. Wait a minute and try again.' });
    return;
  }

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    res.status(400).json({ error: 'Missing prompt' });
    return;
  }
  if (prompt.length > 60000) {
    res.status(400).json({ error: 'Prompt too long' });
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    res.status(500).json({ error: 'Server has no API key configured yet. Set GEMINI_API_KEY in Vercel project settings.' });
    return;
  }

  /* Gemini's free tier caps requests per DAY per MODEL. Walk a chain of
     comparable models so exhausting one model's daily allowance degrades to the
     next instead of taking the whole app down. GEMINI_MODEL, if set, goes first. */
  const chain = [
    process.env.GEMINI_MODEL,
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.1-flash-lite'
  ].filter(Boolean).filter((m, i, a) => a.indexOf(m) === i);

  const scrub = s => String(s).replace(/AIza[\w-]{10,}|AQ\.[\w.-]{10,}/g, '[redacted]');
  let lastStatus = 502;
  let lastMsg = 'Could not reach Gemini.';

  for (const model of chain) {
    try {
      // The key goes in a header, never in the URL, so it cannot land in
      // intermediate access logs or referrer headers.
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({ model, input: prompt })
      });
      const j = await r.json();

      if (r.ok) {
        const text = (j.steps || [])
          .filter(step => step.type === 'model_output')
          .flatMap(step => step.content || [])
          .map(part => part.text || '')
          .join('');
        if (text) { res.status(200).json({ text, model }); return; }
        lastStatus = 502; lastMsg = 'Gemini returned no text. It may have blocked the content.';
        continue;
      }

      const err = Array.isArray(j) ? j[0]?.error : j.error;
      lastStatus = r.status;
      lastMsg = scrub(err?.message || `Gemini returned ${r.status}`);
      // Quota exhausted or model retired: try the next model in the chain.
      if (r.status === 429 || r.status === 404) continue;
      // Anything else (bad key, blocked content) will not be fixed by retrying.
      res.status(lastStatus).json({ error: lastMsg });
      return;
    } catch (e) {
      lastStatus = 502; lastMsg = 'Could not reach Gemini.';
    }
  }

  res.status(lastStatus).json({ error: lastMsg });
}
