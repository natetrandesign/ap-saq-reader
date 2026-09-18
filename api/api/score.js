// Vercel serverless function. Holds the real API key server-side so no device
// needs its own key: the client only ever sends the PIN and the prompt text.
// Uses Google Gemini (free tier friendly). Set GEMINI_API_KEY in Vercel project settings.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const pin = req.headers['x-app-pin'];
  if (!process.env.APP_PIN) {
    res.status(500).json({ error: 'Server has no PIN configured yet. Set APP_PIN in Vercel project settings.' });
    return;
  }
  if (!pin || pin !== process.env.APP_PIN) {
    res.status(401).json({ error: 'Wrong PIN' });
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

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      }
    );
    const j = await r.json();
    if (!r.ok) {
      res.status(r.status).json({ error: j.error?.message || `Gemini returned ${r.status}` });
      return;
    }
    const parts = j.candidates?.[0]?.content?.parts || [];
    const text = parts.map(p => p.text || '').join('');
    if (!text) {
      res.status(502).json({ error: 'Gemini returned no text. It may have blocked the content, check finishReason.' });
      return;
    }
    res.status(200).json({ text });
  } catch (e) {
    res.status(502).json({ error: 'Could not reach Gemini: ' + (e && e.message ? e.message : String(e)) });
  }
}
