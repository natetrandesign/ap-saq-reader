# Reader

Score AP World History: Modern short-answer questions (SAQs) against the official College Board rubrics, then get part-by-part feedback and an honest read on where the response lands on the 1 to 5 scale.

**Live app:** deployed through Vercel so the Gemini key stays server-side.

## What it does

Paste an SAQ and a response. Reader scores each of the three parts independently, 1 point or 0, the way an AP Reader would, and explains every call in the reader's own idiom: quoting the student, naming the specific rubric reason, and supplying a model sentence that would have earned any point that was missed.

It then projects a 1 to 5 AP score. That projection is not a guess. It takes the rubric score, places it against the published national mean and standard deviation for that exact question, and maps the resulting percentile onto the released AP score distribution.

## What it is grounded on

Every rubric, acceptable-response list, scored student sample, reader commentary and scoring statistic is extracted from the released exam materials published on AP Central.

| Source material | Count |
| --- | --- |
| Official SAQ rubrics with acceptable-response lists | 28 |
| Real released SAQ prompts, with stimulus passages | 28 |
| Official reader commentaries on scored responses | 72 |
| Verbatim student samples with per-part official scores | 24 |
| Years covered | 2023, 2024, 2025, 2026 |

When you pick a released question, the app feeds the model that question's real rubric plus the three published student samples for it and the official commentary explaining why each one scored what it did. That is what keeps the scoring calibrated rather than vibes-based.

The scoring instructions also encode the failure taxonomy that shows up across all 72 published commentaries, in the readers' own priority order: out of time period, not actually in the stimulus, restatement instead of analysis, historically inaccurate, too vague or too sweeping, mention without explanation, wrong task or wrong scope, and incomplete comparison.

## Shared Gemini backend

Scoring runs through a small Vercel serverless function backed by Google Gemini. The Gemini API key stays in Vercel's encrypted environment variables and is never sent to a browser. A device only needs the app PIN, which is saved in that browser's local storage.

Set these Vercel environment variables before deploying:

- `GEMINI_API_KEY`, a key from Google AI Studio
- `APP_PIN`, a long private access code shared only with approved users
- `GEMINI_MODEL`, optional, defaults to `gemini-2.5-flash`

Student questions and answers are processed for scoring but are not stored by this application.

## Install it

Open the link, then Add to Home Screen on iOS, or Install from the address bar on desktop Chrome. It caches its own shell and question bank, so the interface and all 28 rubrics work offline. Only the scoring call needs a connection.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Interface and styles |
| `app.js` | Prompt construction, PIN-authenticated server calls, scoring projection, rendering |
| `api/score.js` | PIN-gated Vercel function that calls Gemini with the server-side key |
| `data.json` | Rubrics, prompts, samples, commentary, scoring statistics |
| `sw.js` | Offline cache. Bump `CACHE` to ship an update |
| `vercel.json` | Serverless function configuration |
| `manifest.webmanifest` | Install metadata |

## Notes

Unofficial study tool. Not affiliated with or endorsed by College Board. AP is a registered trademark of College Board. Exam materials are reproduced from the free-response questions, scoring guidelines and sample-response documents that College Board publishes publicly on AP Central.
