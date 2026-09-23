/* Paste or drop a screenshot. Words are sorted into the open format.
   A second page can be added before the words are kept.
   The picture is not stored. */

const SHOT_IDLE = 'Drop a screenshot here';
const SHOT_PARTS = ['A', 'B', 'C', 'intro', 'body1', 'body2', 'body3', 'conclusion', 'essay'];
let shotBusy = false;
let shotTimer = 0;
let shotPages = [];
let shotFormat = 'saq';

function shotNote(text, kind) {
  const n = $('#shotWindow');
  const t = $('#shotText');
  if (t) t.textContent = text;
  if (!n) return;
  n.classList.toggle('busy', kind === 'busy');
  n.classList.toggle('done', kind === 'done');
  n.classList.remove('drag');
}

function parkShotWindow() {
  const park = $('#shotPark');
  const win = $('#shotWindow');
  if (park && win && win.parentElement !== park) park.appendChild(win);
}

function mountShotWindow() {
  let slot = null;
  document.querySelectorAll('.shotslot').forEach(s => {
    if (!slot && !s.closest('[hidden]')) slot = s;
  });
  const win = $('#shotWindow');
  if (!slot || !win) return;
  if (win.parentElement !== slot) slot.appendChild(win);
  const label = $('#shotLabel');
  const fmt = typeof FORMAT === 'string' ? FORMAT : 'saq';
  if (label) label.textContent = { saq: 'SAQ', leq: 'LEQ', dbq: 'DBQ', mcq: 'Multiple choice' }[fmt] || 'SAQ';
  const hint = win.querySelector('.shothint');
  if (hint) {
    hint.textContent = fmt === 'dbq'
      ? 'Paste with Ctrl+V. Reader puts the prompt in the prompt box and the documents in the documents box. The picture is discarded.'
      : fmt === 'leq'
        ? 'Paste with Ctrl+V. Reader puts the prompt in the box below. The picture is discarded.'
        : fmt === 'mcq'
          ? 'Paste with Ctrl+V. Reader keeps the words from the item and discards the picture.'
          : 'Paste with Ctrl+V. Reader puts the question in the box below. The picture is discarded.';
  }
}

function shotButton(show) {
  const b = $('#shotUse');
  if (!b) return;
  b.hidden = !show;
  b.disabled = !!shotBusy;
}

function clearShotPages() {
  shotPages = [];
  clearTimeout(shotTimer);
  shotButton(false);
  shotNote(SHOT_IDLE, '');
}

function imageFromClipboard(data) {
  if (!data) return null;
  const items = data.items ? Array.from(data.items) : [];
  for (const item of items) {
    if (item.kind === 'file' && /^image\//.test(item.type)) {
      const file = item.getAsFile();
      if (file) return file;
    }
  }
  const files = data.files ? Array.from(data.files) : [];
  return files.find(f => /^image\//.test(f.type)) || null;
}

function focusedSlot() {
  const id = document.activeElement && document.activeElement.id;
  if (/^ans[ABC]$/.test(id)) return id.slice(3);
  if (id && id.indexOf('leq-') === 0) return id.slice(4);
  if (id === 'essayBox') return 'essay';
  if (id === 'qown' || id === 'ownPrompt') return 'question';
  if (id === 'ownDocs') return 'documents';
  if (id === 'ownMcq') return 'choices';
  return '';
}

/* A DBQ page often arrives as one block. The prompt stays above Document 1.
   Everything from Document 1 down belongs in the documents box. */
function splitDbqFields(page) {
  if (!page) return page;
  const marker = /(?:^|\n)\s*(?:Document|Doc\.?)\s*1\b/i;
  const peel = text => {
    const raw = String(text || '').trim();
    const found = marker.exec(raw);
    if (!found) return { prompt: raw, documents: '' };
    let start = found.index;
    if (raw[start] === '\n') start += 1;
    return { prompt: raw.slice(0, found.index).trim(), documents: raw.slice(start).trim() };
  };
  let question = String(page.question || '').trim();
  let documents = String(page.documents || '').trim();
  if (question && !documents) {
    const parts = peel(question);
    if (parts.documents) {
      question = parts.prompt;
      documents = parts.documents;
    }
  } else if (!question && documents) {
    const parts = peel(documents);
    if (parts.prompt && parts.documents) {
      question = parts.prompt;
      documents = parts.documents;
    }
  } else if (question && documents && marker.test(question)) {
    const parts = peel(question);
    question = parts.prompt;
    if (parts.documents && !marker.test(documents)) documents = joinText(parts.documents, documents);
  }
  if (documents && marker.test(documents)) {
    const parts = peel(documents);
    if (parts.prompt && parts.documents) {
      if (!question) question = parts.prompt;
      documents = parts.documents;
    }
  }
  page.question = question;
  page.documents = documents;
  return page;
}

function joinText(a, b) {
  const x = String(a || '').trim();
  const y = String(b || '').trim();
  if (!x) return y;
  if (!y || x === y) return x;
  return x + '\n\n' + y;
}

/* A screenshot of one multiple-choice item becomes a passage, a stem, and
   four choices, in the same shape as the textbook and source drills. */
function parseShotMcq(question, choicesText) {
  const q = String(question || '').replace(/\r\n/g, '\n').trim();
  const c = String(choicesText || '').replace(/\r\n/g, '\n').trim();
  const blob = c ? (q ? q + '\n' + c : c) : q;
  const lines = blob.split('\n');
  const marks = [];
  lines.forEach((line, i) => {
    const m = line.match(/^\s*(?:\(([A-D])\)|([A-D])[\.\)])\s*(.*)$/);
    if (m) marks.push({ i, letter: m[1] || m[2], text: (m[3] || '').trim() });
  });
  const letters = new Set(marks.map(m => m.letter));
  const choices = ['', '', '', ''];
  let stemBlock = blob;
  if (letters.size >= 3 && letters.has('D')) {
    marks.forEach((m, idx) => {
      const end = idx + 1 < marks.length ? marks[idx + 1].i : lines.length;
      const extra = lines.slice(m.i + 1, end).join(' ').replace(/\s+/g, ' ').trim();
      const text = [m.text, extra].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
      const at = 'ABCD'.indexOf(m.letter);
      if (at >= 0 && !choices[at]) choices[at] = text;
    });
    stemBlock = lines.slice(0, marks[0].i).join('\n').trim();
  }
  stemBlock = stemBlock.replace(/^\s*\d+\s*[\.\)]\s*/, '').trim();
  let stimulus = '';
  let stem = stemBlock;
  const parts = stemBlock.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    const last = parts[parts.length - 1];
    const stemLike = /\?\s*$/.test(last) || /\bbest\b/i.test(last) || /^(which|what|why|how|the passage|the excerpt|the source|a historian|based on|according to|the author|this passage|reading the)\b/i.test(last);
    if (stemLike) {
      stimulus = parts.slice(0, -1).join('\n\n');
      stem = last;
    }
  }
  return { stimulus, stem, choices };
}

function shotMcqText(item) {
  const head = [item.stimulus, item.stem].filter(Boolean).join('\n\n');
  const opts = (item.choices || []).map((text, i) => text ? 'ABCD'[i] + '. ' + text : '').filter(Boolean).join('\n');
  return [head, opts].filter(Boolean).join('\n');
}

function blankPage() {
  const parts = {};
  SHOT_PARTS.forEach(k => { parts[k] = ''; });
  return { kind: 'none', question: '', documents: '', choices: '', circled: '', parts };
}

function linesOf(text, re) {
  return (String(text || '').match(re) || []).length;
}

/* The open tab is not the sort. Documents, choices A–D, parts A–C, and
   "evaluate the extent" decide the format. */
function guessFormat(page) {
  const q = page.question || '';
  const docs = page.documents || '';
  const choiceBlob = q + '\n' + (page.choices || '');
  const blob = [q, docs, page.choices, page.parts && page.parts.essay, page.parts && page.parts.intro].join('\n');
  const docHits = linesOf(blob, /(?:^|\n)\s*(?:Document|Doc\.?)\s*\d+/gi);
  if (docHits >= 1 || /using the documents|the documents provided|document-based/i.test(q)) return 'dbq';
  const choiceHits = linesOf(choiceBlob, /(?:^|\n)\s*[A-D][\.\)]\s+\S/g);
  const hasD = /(?:^|\n)\s*D[\.\)]\s+\S/.test(choiceBlob);
  if ((hasD && choiceHits >= 3) || (page.circled && choiceHits >= 3)) return 'mcq';
  const tasks = linesOf(q, /(?:^|\n)\s*[ABC]\.\s+\S/g);
  const leqParts = ['intro', 'body1', 'body2', 'body3', 'conclusion'].filter(k => page.parts && String(page.parts[k] || '').trim()).length;
  if (/evaluate the extent/i.test(q)) return 'leq';
  if (leqParts >= 2) return 'leq';
  if (tasks >= 2) return 'saq';
  const letters = ['A', 'B', 'C'].filter(k => page.parts && String(page.parts[k] || '').trim()).length;
  const essayWords = String((page.parts && page.parts.essay) || '').trim().split(/\s+/).filter(Boolean).length;
  if (letters >= 1 && essayWords < 80 && leqParts === 0) return 'saq';
  if (essayWords > 80 || leqParts === 1) return 'leq';
  if (['saq', 'leq', 'dbq', 'mcq'].includes(page.format)) return page.format;
  return essayWords ? 'leq' : 'saq';
}

function routeSlot(page, slot) {
  if (!page) return null;
  const parts = page.parts || (page.parts = {});
  page.format = guessFormat(page);
  const essay = String(parts.essay || '').trim();
  if (!essay) return page;
  const letters = ['A', 'B', 'C'];
  const leq = ['intro', 'body1', 'body2', 'body3', 'conclusion'];
  const letterEmpty = letters.every(k => !String(parts[k] || '').trim());
  const leqEmpty = leq.every(k => !String(parts[k] || '').trim());
  if (page.format === 'saq' && letters.includes(slot) && letterEmpty) parts[slot] = essay;
  else if (page.format === 'leq' && leq.includes(slot) && leqEmpty) parts[slot] = essay;
  else return page;
  parts.essay = '';
  page.format = guessFormat(page);
  return page;
}

function mergePages(pages) {
  const out = blankPage();
  pages.forEach(p => {
    out.question = joinText(out.question, p.question);
    out.documents = joinText(out.documents, p.documents);
    out.choices = joinText(out.choices, p.choices);
    if (p.circled) out.circled = p.circled;
    SHOT_PARTS.forEach(k => { out.parts[k] = joinText(out.parts[k], p.parts && p.parts[k]); });
  });
  const question = out.question || out.documents || out.choices;
  const writing = out.circled || SHOT_PARTS.some(k => out.parts[k]);
  out.kind = question && writing ? 'both' : question ? 'question' : writing ? 'response' : 'none';
  splitDbqFields(out);
  out.format = (pages.find(p => ['saq', 'leq', 'dbq', 'mcq'].includes(p.format)) || {}).format || '';
  out.format = guessFormat(out);
  return out;
}

function formatName(fmt) {
  return { saq: 'an SAQ', leq: 'an LEQ', dbq: 'a DBQ', mcq: 'a multiple-choice question' }[fmt] || 'a question';
}

function showPending() {
  const page = mergePages(shotPages);
  shotFormat = page.format;
  const n = shotPages.length;
  shotNote(`Page ${n} reads as ${formatName(shotFormat)}. Drop another page, or keep the words.`, '');
  shotButton(true);
}

function showSaqOwn(question) {
  MODE = 'own';
  document.querySelectorAll('#saqFlow .seg button').forEach(b => {
    b.setAttribute('aria-selected', String(b.dataset.mode === 'own'));
  });
  $('#paneLib').hidden = true;
  $('#paneOwn').hidden = false;
  $('#paneGen').hidden = true;
  if (question) $('#qown').value = question;
  buildAnswerBoxes();
  if (typeof mountShotWindow === 'function') mountShotWindow();
}

function fillBox(el, text) {
  if (!el || !String(text || '').trim()) return;
  el.value = joinText(el.value, text);
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

function placePages(fmt, page) {
  const questionish = page.kind === 'question' || page.kind === 'both';
  if (fmt === 'saq') {
    if (questionish && page.question) {
      const next = MODE === 'own' ? joinText($('#qown').value, page.question) : page.question;
      showSaqOwn(next);
    }
    ['A', 'B', 'C'].forEach(L => fillBox($('#ans' + L), page.parts[L]));
    if (!page.parts.A && !page.parts.B && !page.parts.C) fillBox($('#ansA'), page.parts.essay);
    return;
  }
  if (fmt === 'mcq') {
    const incoming = parseShotMcq(page.question, page.choices);
    const incomingChoices = incoming.choices.some(Boolean);
    const hasItem = !!(incoming.stem || incoming.stimulus || incomingChoices);
    if (questionish && hasItem) {
      const kept = MCQ_MODE === 'shot' ? (OWN.mcq.choices || []) : [];
      const keptChoices = kept.some(Boolean);
      if (MCQ_MODE === 'shot' && keptChoices && !incomingChoices) {
        OWN.mcq.stimulus = joinText(OWN.mcq.stimulus, incoming.stimulus || incoming.stem);
      } else if (MCQ_MODE === 'shot' && OWN.mcq.stem && !keptChoices && incomingChoices) {
        if (!OWN.mcq.stimulus && incoming.stimulus) OWN.mcq.stimulus = incoming.stimulus;
        if (!OWN.mcq.stem) OWN.mcq.stem = incoming.stem;
        OWN.mcq.choices = incoming.choices;
      } else {
        OWN.mcq.stimulus = incoming.stimulus;
        OWN.mcq.stem = incoming.stem;
        OWN.mcq.choices = incoming.choices;
      }
      OWN.mcq.prompt = shotMcqText(OWN.mcq);
      MCQ_MODE = 'shot';
    }
    if (page.circled && (MCQ_MODE === 'shot' || questionish)) OWN.mcq.pick = page.circled;
    if (MCQ_MODE === 'shot') renderMcq();
    return;
  }
  const kind = fmt === 'dbq' ? 'dbq' : 'leq';
  if (kind === 'dbq') splitDbqFields(page);
  captureEssayDraft();
  if (questionish && (page.question || page.documents)) {
    const fresh = ESSAY_MODE[kind] !== 'own';
    ESSAY_MODE[kind] = 'own';
    if (page.question) OWN[kind].prompt = fresh ? page.question : joinText(OWN[kind].prompt, page.question);
    else if (fresh) OWN[kind].prompt = '';
    if (kind === 'dbq' && page.documents) OWN.dbq.docs = fresh ? page.documents : joinText(OWN.dbq.docs, page.documents);
  }
  if (kind === 'leq') {
    LEQ_PARTS.forEach(p => {
      if (page.parts[p.id]) LEQ_DRAFT[p.id] = joinText(LEQ_DRAFT[p.id], page.parts[p.id]);
    });
    if (page.parts.essay) LEQ_DRAFT.intro = joinText(LEQ_DRAFT.intro, page.parts.essay);
  } else {
    const bits = ['essay', 'intro', 'body1', 'body2', 'body3', 'conclusion'].map(k => page.parts[k]).filter(Boolean);
    bits.forEach(bit => { DBQ_DRAFT = joinText(DBQ_DRAFT, bit); });
  }
  renderEssay();
  if (kind === 'dbq' && $('#essayBox') && $('#essayBox').value !== DBQ_DRAFT) {
    $('#essayBox').value = DBQ_DRAFT;
    $('#essayBox').dispatchEvent(new Event('input', { bubbles: true }));
  }
}

function useShotPages() {
  if (!shotPages.length || shotBusy) return;
  const pages = shotPages;
  const page = mergePages(pages);
  const fmt = page.format || shotFormat;
  shotPages = [];
  shotButton(false);
  if (typeof FORMAT === 'string' && FORMAT !== fmt) setFormat(fmt);
  placePages(fmt, page);
  shotNote(`Sorted into ${formatName(fmt)}. The picture was discarded.`, 'done');
  clearTimeout(shotTimer);
  shotTimer = setTimeout(() => { if (!shotPages.length) shotNote(SHOT_IDLE, ''); }, 4000);
}

async function shrinkShot(blob) {
  let bmp = await createImageBitmap(blob);
  try {
    const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
    const w = Math.max(1, Math.round(bmp.width * scale));
    const h = Math.max(1, Math.round(bmp.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { alpha: false });
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(bmp, 0, 0, w, h);
    let quality = 0.72;
    const jpeg = q => new Promise((resolve, reject) => {
      canvas.toBlob(b => b ? resolve(b) : reject(new Error('Could not read that screenshot.')), 'image/jpeg', q);
    });
    let out = await jpeg(quality);
    while (out.size > 900000 && quality > 0.4) {
      quality -= 0.12;
      out = await jpeg(quality);
    }
    canvas.width = 0;
    canvas.height = 0;
    if (out.size > 1000000) throw new Error('That screenshot is too large. Snip a smaller area and paste again.');
    return out;
  } finally {
    bmp.close();
    bmp = null;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const s = String(reader.result || '');
      reader.onload = null;
      const i = s.indexOf(',');
      resolve(i >= 0 ? s.slice(i + 1) : s);
    };
    reader.onerror = () => reject(new Error('Could not read that screenshot.'));
    reader.readAsDataURL(blob);
  });
}

async function askRead(image, format, slot) {
  const c = cfg.get();
  if (!c.pin) { openSettings(); throw new Error('__nopin'); }
  let body = JSON.stringify({ image, mime: 'image/jpeg', format, slot });
  let lastErr = null;
  try {
    for (let attempt = 0; attempt < 2; attempt++) {
      if (attempt) await new Promise(z => setTimeout(z, 1200));
      const r = await fetch('/api/read', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-app-pin': c.pin },
        body
      });
      if (r.status === 401) { openSettings(); throw new Error('__wrongpin'); }
      if (r.status === 429) throw new Error('__ratelimit');
      const raw = await r.text();
      let j = null;
      try { j = JSON.parse(raw); } catch { j = null; }
      if (r.ok && j && j.page && typeof j.page === 'object') return j.page;
      if (r.ok && j && j.page === null) return null;
      if (r.ok && j && typeof j.text === 'string') {
        return { kind: 'response', question: '', documents: '', choices: '', circled: '', parts: { essay: j.text } };
      }
      if (j && j.error) throw new Error(j.error);
      lastErr = new Error('The server timed out. This usually clears on a second try.');
    }
    throw lastErr;
  } finally {
    body = null;
  }
}

async function readShot(file) {
  if (shotBusy) return;
  if (!file || !/^image\//.test(file.type || '')) {
    showErr('Paste a screenshot, or drop an image file.');
    return;
  }
  shotBusy = true;
  shotButton(shotPages.length > 0);
  if ($('#err')) $('#err').innerHTML = '';
  shotNote('Reading the words…', 'busy');
  const format = typeof FORMAT === 'string' ? FORMAT : 'saq';
  const slot = focusedSlot();
  let jpeg = null;
  let image = null;
  try {
    jpeg = await shrinkShot(file);
    image = await blobToBase64(jpeg);
    jpeg = null;
    let page = await askRead(image, shotPages.length ? shotFormat : format, slot);
    page = routeSlot(page, slot);
    image = null;
    if (!page) {
      showErr('No words were found in that screenshot.');
      if (shotPages.length) showPending();
      else shotNote(SHOT_IDLE, '');
      return;
    }
    shotPages.push(page);
    showPending();
  } catch (e) {
    image = null;
    jpeg = null;
    if (e.message === '__wrongpin') showErr('That PIN was not accepted. Check it and try again.');
    else if (e.message === '__ratelimit') showErr('Too many requests in a short time. Wait about a minute, then try again.');
    else if (e.message !== '__nopin') showErr('Could not read that screenshot.', e.message);
    if (shotPages.length) showPending();
    else shotNote(SHOT_IDLE, '');
  } finally {
    image = null;
    jpeg = null;
    shotBusy = false;
    shotButton(shotPages.length > 0);
  }
}

document.addEventListener('paste', e => {
  if (shotBusy) return;
  const dlg = $('#dlg');
  if (dlg && dlg.open) return;
  const file = imageFromClipboard(e.clipboardData);
  if (!file) return;
  e.preventDefault();
  readShot(file);
});

document.addEventListener('dragover', e => {
  const types = e.dataTransfer && Array.from(e.dataTransfer.types || []);
  if (!types.includes('Files')) return;
  e.preventDefault();
  const note = $('#shotWindow');
  if (note) note.classList.add('drag');
});

document.addEventListener('dragleave', e => {
  if (e.relatedTarget) return;
  const note = $('#shotWindow');
  if (note) note.classList.remove('drag');
});

document.addEventListener('drop', e => {
  const note = $('#shotWindow');
  if (note) note.classList.remove('drag');
  const files = e.dataTransfer && e.dataTransfer.files;
  if (!files || !files.length) return;
  e.preventDefault();
  const dlg = $('#dlg');
  if (dlg && dlg.open) return;
  readShot(files[0]);
});

$('#shotUse').onclick = () => useShotPages();
