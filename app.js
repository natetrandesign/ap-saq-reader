/* Reader — AP World History: Modern SAQ scoring
   Grounded on released College Board rubrics, scored student samples and reader commentary. */
'use strict';

const $ = s => document.querySelector(s);
const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

let DATA = null, MODE = 'lib';

const DEFAULTS = {
  anthropic: { model: 'claude-sonnet-4-5-20250929', note: 'Best results. Create a key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com</a>. Scoring one response costs well under a cent.' },
  gemini:    { model: 'gemini-2.5-flash',  note: 'Free tier available, so this option can cost nothing. Create a key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com</a>.' }
};

/* ------------------------------------------------------------------ settings */
const cfg = {
  get() { try { return JSON.parse(localStorage.getItem('reader.cfg')) || {}; } catch { return {}; } },
  set(v) { localStorage.setItem('reader.cfg', JSON.stringify(v)); }
};
function openSettings() {
  const c = cfg.get();
  $('#prov').value = c.provider || 'anthropic';
  $('#key').value = c.key || '';
  syncProv(!c.model);
  if (c.model) $('#model').value = c.model;
  $('#dlg').showModal();
}
function syncProv(resetModel) {
  const p = $('#prov').value;
  $('#keynote').innerHTML = DEFAULTS[p].note;
  if (resetModel) $('#model').value = DEFAULTS[p].model;
}
$('#gear').onclick = openSettings;
$('#prov').onchange = () => syncProv(true);
$('#dcancel').onclick = () => $('#dlg').close();
$('#dsave').onclick = () => {
  cfg.set({ provider: $('#prov').value, model: $('#model').value.trim() || DEFAULTS[$('#prov').value].model, key: $('#key').value.trim() });
  $('#dlg').close();
};

/* ------------------------------------------------------------------ mode tabs */
document.querySelectorAll('.seg button').forEach(b => b.onclick = () => {
  document.querySelectorAll('.seg button').forEach(x => x.setAttribute('aria-selected', x === b));
  MODE = b.dataset.mode;
  $('#paneLib').hidden = MODE !== 'lib';
  $('#paneOwn').hidden = MODE !== 'own';
});

/* ------------------------------------------------------------------ data load */
fetch('data.json').then(r => r.json()).then(d => { DATA = d; buildPicker(); })
  .catch(() => showErr('Could not load the question data file. Try a hard refresh.'));

function keyOf(p) { return `${p.year}|${p.set}|${p.q}`; }

function buildPicker() {
  const sel = $('#qsel');
  const ps = DATA.prompts.slice().sort((a, b) => b.year - a.year || a.set - b.set || a.q - b.q);
  let curYear = null, grp = null;
  ps.forEach(p => {
    if (p.year !== curYear) { curYear = p.year; grp = el('optgroup'); grp.label = `${p.year} exam`; sel.appendChild(grp); }
    const setTxt = DATA.prompts.filter(x => x.year === p.year).some(x => x.set === 2) ? ` · Set ${p.set}` : '';
    const o = el('option'); o.value = keyOf(p);
    o.textContent = `Q${p.q}${setTxt} — ${topicOf(p)}`;
    grp.appendChild(o);
  });
  sel.onchange = renderMeta;
  sel.value = keyOf(ps[0]);
  renderMeta();
}

/* short human label from the part-A task */
function topicOf(p) {
  const r = rubricFor(p);
  let t = (r && r.tasks && r.tasks.A) || '';
  if (!t) {
    const m = p.prompt.match(/^\s*[aA]\.\s*(.+?)(?:\n|$)/m);
    t = (m ? m[1] : p.prompt.split('\n')[0]) || '';
  }
  t = t.replace(/^(Identify|Describe|Explain)\s+(ONE|one)\s+/i, '').replace(/\s+/g, ' ').trim();
  t = t.replace(/[.,]$/, '');
  return t.length > 74 ? t.slice(0, 74).replace(/\s\S*$/, '') + '…' : t;
}

function currentPrompt() {
  if (MODE === 'own') return null;
  return DATA.prompts.find(p => keyOf(p) === $('#qsel').value) || null;
}
function rubricFor(p) {
  if (!p) return null;
  return DATA.kb.find(k => k.year === p.year && k.q === p.q && k.set === p.set) || null;
}

/* split a prompt into its lettered tasks */
function parseTasks(prompt) {
  const re = /^[ \t]*([a-cA-C])\.[ \t]+/gm;
  const marks = []; let m;
  while ((m = re.exec(prompt))) marks.push({ L: m[1].toUpperCase(), s: m.index, e: re.lastIndex });
  return marks.map((it, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].s : prompt.length;
    return [it.L, prompt.slice(it.e, end).replace(/\s+/g, ' ').trim()];
  });
}

function renderMeta() {
  const p = currentPrompt(); if (!p) return;
  const box = $('#qmeta');
  const r = rubricFor(p);
  const tasks = (r && r.tasks && Object.keys(r.tasks).length)
    ? ['A', 'B', 'C'].filter(L => r.tasks[L]).map(L => [L, r.tasks[L]])
    : parseTasks(p.prompt);
  let h = '';
  if (tasks.length) {
    h += '<ul class="tasks">' + tasks.map(t =>
      `<li><span class="pl">${t[0]}.</span><span>${esc(t[1])}</span></li>`).join('') + '</ul>';
  } else h += `<div>${esc(p.prompt)}</div>`;
  if (p.stimulus) h += `<div class="stim">${esc(p.stimulus)}</div>`;
  const st = DATA.stats[`${p.year}-${p.set}-${p.q}`];
  if (st) h += `<div style="margin-top:9px;font-family:var(--mono);font-size:11.5px;color:var(--ink-3)">National mean on this question: ${st.mean.toFixed(2)} / 3</div>`;
  box.innerHTML = h;
}

/* ------------------------------------------------------------------ AP projection */
function phi(z) { // normal CDF via Abramowitz-Stegun
  const s = z < 0 ? -1 : 1; z = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * z);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
  return 0.5 * (1 + s * y);
}
const AP_BANDS = (() => { // cumulative bands from the most recent released distribution
  const d = { 1: 9.2, 2: 26.5, 3: 17.0, 4: 33.4, 5: 13.9 };
  let acc = 0; const out = [];
  for (let s = 1; s <= 5; s++) { out.push({ score: s, lo: acc, hi: acc + d[s] }); acc += d[s]; }
  return out;
})();
function project(total, p) {
  const st = (p && DATA.stats[`${p.year}-${p.set}-${p.q}`]) || { mean: 1.78, sd: 0.96 };
  const pct = phi((total + 0.5 - st.mean) / st.sd) * 100;
  const band = AP_BANDS.find(b => pct >= b.lo && pct < b.hi) || AP_BANDS[4];
  const lo = Math.max(1, band.score - 1);
  return { pct, ap: band.score, range: band.score === 5 ? '4–5' : `${lo}–${band.score}`, mean: st.mean, sd: st.sd, known: !!(p && DATA.stats[`${p.year}-${p.set}-${p.q}`]) };
}

/* ------------------------------------------------------------------ prompt build */
const READER_RULES = `
HOW REAL AP READERS AWARD THESE POINTS

Each of the three parts is worth exactly 1 point and is scored completely independently. A wrong
answer in part A never costs the student part B or C. There is no partial credit inside a part.

BE GENEROUS IN THESE SPECIFIC WAYS — the published commentary repeatedly credits responses that are:
- Oversimplified or clumsily written, as long as the core historical link is defensible. Readers
  literally write things like "although this is an oversimplified and poorly articulated
  explanation ... it was sufficient as a minimally successful example of earning the point."
- Slightly inaccurate on a detail that does not carry the answer. Readers write "accurate enough to
  earn the point" when a student names the wrong commodity but identifies the right claim.
- Grammatically rough, misspelled, or written in fragments. Exam responses are first drafts.
  Errors only matter when they obscure the history.
- Answered out of order, unlabelled, or answered inside a different part, as long as the substance
  is clearly there somewhere in the response.
- Longer than needed, with extra material. Extra wrong material does not cancel a correct answer
  unless it directly contradicts it.

BE STRICT IN THESE SPECIFIC WAYS — these are the actual reasons points were withheld:
1. OUT OF TIME PERIOD. The single most common failure. If the prompt says "circa 1450 to 1750" and
   the student uses social Darwinism, the Great Leap Forward, or the Second World War, the point is
   lost even if the history is otherwise correct.
2. NOT ACTUALLY IN THE STIMULUS, or in the wrong part of it. If the task says "a claim made in the
   second paragraph," evidence drawn from the first paragraph earns nothing. A historically true
   statement that the author never made is not a claim in the passage.
3. RESTATEMENT INSTEAD OF ANALYSIS. Paraphrasing the source back is not describing or explaining.
   "Adults were jobless" was rejected as a restatement of the poster's own text.
4. HISTORICALLY INACCURATE. Wrong direction of diffusion, wrong actor, wrong causation. Saying
   African population decline came from European disease, or that Confucian filial piety spread to
   India, loses the point.
5. TOO VAGUE OR TOO SWEEPING. Naming "trade" for a question about nineteenth-century developments is
   not sufficient, because trade spans every period. "The Americas became the main supplier of food,
   goods and metals to European empires" was rejected as too sweeping and incorrect.
6. MENTION WITHOUT EXPLANATION. On an "Explain" task, naming the right term and stopping does not
   earn the point. There must be a how or a why. A description that never gets to causation fails.
7. WRONG TASK OR WRONG SCOPE. If the task asks for an economic change in the Americas, an answer
   about Mediterranean trade fails. If it asks for a social change, a mortality statistic fails. If
   it asks how something was challenged, listing what it was fails.
8. INCOMPLETE COMPARISON. If the task requires two things compared, or a difference illustrated,
   supplying only one side earns nothing.

TASK VERBS, as College Board defines them:
- Identify: name or state the thing. The lowest bar. No elaboration required.
- Describe: provide the relevant characteristics of a specified topic. Explicitly "requires more
  than simply mentioning an isolated term."
- Explain: provide information about how or why a historical development or process occurs, or how
  or why a relationship exists. Requires a causal or relational link, not just a fact.

Grade the response that is actually on the page. Do not award a point for what the student clearly
meant, almost said, or would probably say if asked. Equally, do not withhold a point because the
writing is inelegant, the example is basic, or you personally would have chosen a better one.`;

function buildPrompt(p, rub, answer) {
  let s = `You are an experienced AP World History: Modern Reader scoring a Short Answer Question at
the annual AP Reading. You score exactly as College Board readers do: to the published rubric,
nothing harsher, nothing softer.\n\n`;

  s += `OFFICIAL GENERAL SCORING NOTES (verbatim, College Board)
- Each point is earned independently.
- Accuracy: These scoring guidelines require that students demonstrate historically defensible
  content knowledge. Given the timed nature of the exam, responses may contain errors that do not
  detract from their overall quality, as long as the historical content used to advance the argument
  is accurate.
- Clarity: Exam responses should be considered first drafts and thus may contain grammatical errors.
  Those errors will not be counted against a student unless they obscure the successful
  demonstration of the content knowledge, skills, and practices described below.
- Describe: Provide the relevant characteristics of a specified topic. Description requires more
  than simply mentioning an isolated term.
- Explain: Provide information about how or why a historical development or process occurs or how or
  why a relationship exists.\n\n${READER_RULES}\n\n`;

  /* calibration: prefer this question's own released samples */
  const cal = pickCalibration(p, rub);
  if (cal.length) {
    s += `=== CALIBRATION: REAL STUDENT RESPONSES WITH OFFICIAL SCORES ===
These were scored by College Board readers and published. Match this level of strictness exactly.\n`;
    cal.forEach(c => {
      s += `\n--- Released sample, official total ${c.total}/3${c.scores ? ' (A ' + (c.scores.A ?? '?') + ', B ' + (c.scores.B ?? '?') + ', C ' + (c.scores.C ?? '?') + ')' : ''} ---\n`;
      if (c.qlabel) s += `[from ${c.qlabel}]\n`;
      if (c.text) s += `STUDENT WROTE:\n${c.text}\n`;
      s += `OFFICIAL READER COMMENTARY:\n${c.comm}\n`;
    });
    s += `\n`;
  }

  s += `=== THE QUESTION YOU ARE SCORING ===\n`;
  if (p) {
    s += `Released AP World History: Modern ${p.year} exam, Short Answer Question ${p.q}`
       + (p.set ? `, Set ${p.set}` : '') + `.\n\n`;
    if (p.stimulus) s += `STIMULUS PROVIDED TO THE STUDENT:\n${p.stimulus}\n\n`;
    s += `PROMPT:\n${p.prompt}\n\n`;
  } else {
    s += `${answer.qtext}\n\n`;
  }

  if (rub && rub.accept && Object.keys(rub.accept).length) {
    s += `=== OFFICIAL SCORING GUIDELINE FOR THIS EXACT QUESTION ===
Below is the real published rubric: the task for each part, then the reader's list of acceptable
responses. That list is ILLUSTRATIVE, NOT EXHAUSTIVE. A correct, on-task, in-period answer that is
not on the list still earns the point. Use the list to calibrate how much is enough, not as an
answer key to match against.\n`;
    ['A', 'B', 'C'].forEach(L => {
      if (!rub.tasks[L] && !rub.accept[L]) return;
      s += `\nPART ${L} (1 point) — ${rub.tasks[L] || ''}\n`;
      (rub.accept[L] || []).forEach(a => { s += `  • ${a}\n`; });
    });
    s += `\n`;
  }

  s += `=== THE STUDENT RESPONSE TO SCORE ===\n${answer.text}\n\n`;

  s += `=== YOUR TASK ===
Score each part independently. For each part, decide 1 or 0, then justify it the way the published
commentary does: quote the student's own words in quotation marks, name the specific rubric reason,
and be concrete.

Then write feedback the student can actually act on. For any part scored 0, supply a model sentence
or two that WOULD have earned the point on this exact task — same topic, same time period, written
at realistic exam length, not a perfect essay.

Respond with ONLY a JSON object, no markdown fence, no commentary outside it:
{
  "parts": [
    {
      "part": "A",
      "task": "<the task verb and what it asked, one short clause>",
      "earned": 1,
      "why": "<2-4 sentences. Quote the student. Name the rubric reason. Reader's voice.>",
      "fix": "<if earned 0: what specifically was missing. If earned 1: '' >",
      "model": "<if earned 0: a model response that earns the point. If earned 1: '' >"
    }
  ],
  "total": 0,
  "headline": "<one sentence, direct, on what this response is and is not doing>",
  "strengths": ["<specific, quote the student where useful>"],
  "fixes": ["<specific, prioritised, the highest-leverage habit changes first>"],
  "pattern": "<one or two sentences naming the recurring habit across the three parts, e.g. 'you describe when the task says explain', or '' if there is no pattern>"
}
The "parts" array must contain exactly one object per part the question asks for, in order.`;
  return s;
}

function pickCalibration(p, rub) {
  const out = [];
  const take = (k, qlabel) => {
    ['A', 'B', 'C'].forEach(L => {
      const c = k.commentary[L]; if (!c) return;
      out.push({ total: c.total, scores: c.scores && Object.keys(c.scores).length ? c.scores : null, text: k.samples[L] || '', comm: c.text, qlabel });
    });
  };
  if (rub && rub.samples && Object.keys(rub.samples).length) { take(rub, null); return out; }
  // fall back to a released question with verbatim samples, same question number if possible
  const pool = DATA.kb.filter(k => Object.keys(k.samples).length);
  const best = pool.find(k => p && k.q === p.q) || pool[0];
  if (best) take(best, `${best.year} Q${best.q} Set ${best.set}, a different prompt — use it only to calibrate strictness`);
  return out;
}

/* ------------------------------------------------------------------ model calls */
async function callModel(prompt) {
  const c = cfg.get();
  if (!c.key) { openSettings(); throw new Error('__nokey'); }
  const model = c.model || DEFAULTS[c.provider || 'anthropic'].model;

  if ((c.provider || 'anthropic') === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': c.key,
                 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model, max_tokens: 3000, messages: [{ role: 'user', content: prompt }] })
    });
    const j = await r.json();
    if (!r.ok) throw new Error(j.error?.message || `Anthropic returned ${r.status}`);
    return j.content.map(b => b.text || '').join('');
  }
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(c.key)}`, {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json' } })
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error?.message || `Gemini returned ${r.status}`);
  return j.candidates[0].content.parts.map(x => x.text || '').join('');
}

function parseJSON(t) {
  t = t.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  return JSON.parse(a >= 0 ? t.slice(a, b + 1) : t);
}

/* ------------------------------------------------------------------ run */
function showErr(msg, raw) {
  $('#err').innerHTML = `<div class="err">${esc(msg)}${raw ? `<br><code>${esc(String(raw).slice(0, 220))}</code>` : ''}</div>`;
}
$('#go').onclick = async () => {
  $('#err').innerHTML = '';
  const answer = $('#ans').value.trim();
  const p = currentPrompt();
  const qtext = MODE === 'own' ? $('#qown').value.trim() : '';
  if (MODE === 'own' && !qtext) return showErr('Paste the question first, including any source passage.');
  if (!answer) return showErr('Paste your response first.');

  const btn = $('#go'), old = btn.innerHTML;
  btn.disabled = true; btn.innerHTML = '<span class="spin"></span> Reading…';
  try {
    const rub = rubricFor(p);
    const out = parseJSON(await callModel(buildPrompt(p, rub, { text: answer, qtext })));
    render(out, p, rub);
  } catch (e) {
    if (e.message !== '__nokey') {
      if (/Failed to fetch|NetworkError|Load failed/i.test(e.message))
        showErr('Could not reach the provider. Check the key, the model name, and that you are online.', e.message);
      else if (e instanceof SyntaxError) showErr('The model did not return clean JSON. Try again, or switch to a stronger model in settings.', e.message);
      else showErr('Scoring failed.', e.message);
    }
  } finally { btn.disabled = false; btn.innerHTML = old; }
};

/* ------------------------------------------------------------------ render */
function render(o, p, rub) {
  const parts = Array.isArray(o.parts) ? o.parts : [];
  const total = parts.reduce((a, x) => a + (Number(x.earned) ? 1 : 0), 0);
  const pr = project(total, p);
  const out = $('#out'); out.innerHTML = '';

  /* verdict */
  const v = el('div', 'verdict');
  v.innerHTML = `
    <div class="vtop">
      <div class="vcell">
        <p class="lbl">Rubric score</p>
        <div class="big">${total}<small>/${parts.length || 3}</small></div>
        <p class="sub">${pr.known ? `national mean ${pr.mean.toFixed(2)}` : 'estimated difficulty'}</p>
      </div>
      <div class="vcell">
        <p class="lbl">Projected AP score</p>
        <div class="big">${pr.ap}</div>
        <p class="sub">likely ${pr.range}</p>
      </div>
    </div>
    <div class="vbody">
      ${o.headline ? `<p><b>${esc(o.headline)}</b></p>` : ''}
      <div class="meter"><i style="width:${Math.max(2, Math.min(100, pr.pct)).toFixed(1)}%"></i></div>
      <div class="mscale"><span>0</span><span>national mean ${pr.mean.toFixed(2)}/3</span><span>100th pct</span></div>
      <p style="margin-top:12px">A <b>${total}/${parts.length || 3}</b> on this question puts you around the
      <b>${pr.pct.toFixed(0)}th percentile</b> of students who answered it${pr.known ? '' : ' (using average SAQ difficulty, since this question has no published statistics)'}.
      Mapped onto the released AP score distribution that is an <b>AP ${pr.ap}</b>, realistically <b>${pr.range}</b>.</p>
      <p style="font-size:13.5px;color:var(--ink-3)">Read that as a signal, not a grade. The short-answer
      section is only about 20% of the exam, so one SAQ cannot settle a composite score. Multiple-choice is 40%,
      the DBQ 25% and the long essay 15%.</p>
    </div>`;
  out.appendChild(v);

  /* parts */
  out.appendChild(el('h3', 'sh', 'Part by part'));
  parts.forEach(x => {
    const y = !!Number(x.earned);
    const d = el('div', 'part ' + (y ? 'y' : 'n'));
    let h = `<div class="phead">
        <span class="pid">PART ${esc(x.part || '')}</span>
        <span class="pv ${y ? 'y' : 'n'}">${y ? '1 point earned' : '0 points'}</span>
      </div>`;
    if (x.task) h += `<p class="ptask">${esc(x.task)}</p>`;
    if (x.why) h += `<p class="why">${esc(x.why)}</p>`;
    if (!y && (x.fix || x.model)) {
      h += `<div class="fixbox">`;
      if (x.fix) h += `<p class="fl">What was missing</p><div>${esc(x.fix)}</div>`;
      if (x.model) h += `<div class="model"><p class="ml">A response that would earn it</p>${esc(x.model)}</div>`;
      h += `</div>`;
    }
    d.innerHTML = h; out.appendChild(d);
  });

  /* feedback */
  if (o.pattern) {
    out.appendChild(el('h3', 'sh', 'The pattern'));
    out.appendChild(el('div', 'part', `<p class="why">${esc(o.pattern)}</p>`));
  }
  const lists = [['What is working', o.strengths], ['Do this next time', o.fixes]];
  lists.forEach(([t, arr]) => {
    if (!Array.isArray(arr) || !arr.length) return;
    out.appendChild(el('h3', 'sh', t));
    const ul = el('ul', 'pts');
    arr.forEach(i => ul.appendChild(el('li', null, esc(i))));
    const c = el('div', 'part'); c.appendChild(ul); out.appendChild(c);
  });

  /* official rubric reference */
  if (rub && rub.rubric) {
    const accepted = rub.accept || {};
    if (Object.keys(accepted).length) out.appendChild(el('h3', 'sh', 'What the readers accepted'));
    ['A', 'B', 'C'].forEach(L => {
      if (!accepted[L]) return;
      const dt = el('details', 'ref');
      dt.innerHTML = `<summary>Part ${L} — ${accepted[L].length} official acceptable responses</summary>
        <div class="rbody"><ul class="accept">${accepted[L].map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`;
      out.appendChild(dt);
    });
    const dt = el('details', 'ref');
    dt.innerHTML = `<summary>Full published scoring guideline</summary><div class="rbody"><pre>${esc(rub.rubric)}</pre></div>`;
    out.appendChild(dt);

    if (Object.keys(rub.samples || {}).length) {
      ['A', 'B', 'C'].forEach(L => {
        if (!rub.samples[L]) return;
        const c = rub.commentary[L] || {};
        const s = el('details', 'ref');
        s.innerHTML = `<summary>Released student sample that scored ${c.total ?? '?'}/3</summary>
          <div class="rbody"><pre>${esc(rub.samples[L])}</pre>
          <p style="margin:14px 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3)">Reader commentary</p>
          <pre>${esc(c.text || '')}</pre></div>`;
        out.appendChild(s);
      });
    }
  }

  out.classList.add('on');
  out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ------------------------------------------------------------------ pwa */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
