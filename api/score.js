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

  const model = process.env.GEMINI_MODEL || 'gemini-3.8-flash';

  try {
    // Google moved authorization keys to the Interactions API in September 2026.
    // Auth keys are sent in x-goog-api-key, not as a URL query parameter.
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({ model, input: prompt })
    });
    const j = await r.json();
    if (!r.ok) {
      const err = Array.isArray(j) ? j[0]?.error : j.error;
      res.status(r.status).json({ error: err?.message || `Gemini returned ${r.status}` });
      return;
    }
    const text = (j.steps || [])
      .filter(step => step.type === 'model_output')
      .flatMap(step => step.content || [])
      .map(part => part.text || '')
      .join('');
    if (!text) {
      res.status(502).json({ error: 'Gemini returned no text. It may have blocked the content, check finishReason.' });
      return;
    }
    res.status(200).json({ text });
  } catch (e) {
    res.status(502).json({ error: 'Could not reach Gemini: ' + (e && e.message ? e.message : String(e)) });
  }
}
