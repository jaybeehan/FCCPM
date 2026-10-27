/* FCCPM Study Hub — single-page app, no build step.  Data lives in /data/*.js */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');
  const store = {
    get(k, d) { try { const v = localStorage.getItem('fccpm:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('fccpm:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const topicName = id => (NOTES.find(n => n.id === id) || { title: id }).title;
  const TOPICS = NOTES.filter(n => !n.hideInTopics);

  /* ---------- theme ---------- */
  const savedTheme = store.get('theme', null);
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  $('#themeBtn').onclick = () => {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; store.set('theme', next);
  };
  $('#menuBtn').onclick = () => document.body.classList.toggle('nav-open');
  $('#scrim').onclick = () => document.body.classList.remove('nav-open');

  /* ---------- sidebar ---------- */
  function renderSidebar(route) {
    const read = store.get('read', {});
    const groups = {};
    NOTES.forEach(n => { (groups[n.group] = groups[n.group] || []).push(n); });
    let h = `<h5>Start</h5>
      <a href="#/" data-r="/">🏠 Home &amp; exam overview</a>
      <a href="#/plan" data-r="/plan">🗓️ Study plan &amp; checklist</a>
      <h5>Practice</h5>
      <a href="#/flashcards" data-r="/flashcards">🃏 Flashcards (${CARDS.length})</a>
      <a href="#/quiz" data-r="/quiz">✅ Multiple-choice quiz (${QUIZ.length})</a>
      <a href="#/oral" data-r="/oral">🎤 Mock oral exam (${ORAL.length})</a>
      <a href="#/frameworks" data-r="/frameworks">🧭 Answer frameworks</a>
      <h5>Quick reference</h5>
      <a href="#/numbers" data-r="/numbers">🔢 Key numbers</a>
      <a href="#/incidents" data-r="/incidents">⚠️ Incident &amp; event library</a>
      <a href="#/glossary" data-r="/glossary">📖 Glossary &amp; acronyms</a>`;
    Object.keys(groups).forEach(g => {
      h += `<h5>${esc(g)}</h5>`;
      groups[g].forEach(n => {
        h += `<a href="#/notes/${n.id}" data-r="/notes/${n.id}"><span class="dot ${read[n.id] ? 'done' : ''}"></span>${esc(n.title)}</a>`;
      });
    });
    h += `<h5>About</h5><a href="#/sources" data-r="/sources">📚 Sources (Drive inventory)</a>`;
    $('#sidebar').innerHTML = h;
    $('#sidebar').querySelectorAll('a').forEach(a => {
      if (a.dataset.r === route) a.classList.add('active');
      a.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  /* ---------- router ---------- */
  function route() {
    const hash = location.hash.replace(/^#/, '') || '/';
    const [path, anchor] = hash.split('::');
    const parts = path.split('/').filter(Boolean);
    renderSidebar(path === '' ? '/' : path);
    const r = parts[0] || '';
    if (r === '') home();
    else if (r === 'notes') notePage(parts[1], anchor);
    else if (r === 'flashcards') flashcards(parts[1]);
    else if (r === 'quiz') quiz(parts[1]);
    else if (r === 'oral') oral(parts[1]);
    else if (r === 'frameworks') simplePage(EXTRAS.frameworksHtml, 'Answer frameworks');
    else if (r === 'numbers') numbers();
    else if (r === 'incidents') simplePage(EXTRAS.incidentsHtml, 'Incident & event library');
    else if (r === 'glossary') glossary();
    else if (r === 'plan') plan();
    else if (r === 'sources') simplePage(EXTRAS.sourcesHtml, 'Sources');
    else home();
    if (!anchor) window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  function simplePage(html, title) {
    document.title = title + ' · FCCPM Study Hub';
    app.innerHTML = html;
    wrapTables();
  }
  function wrapTables() {
    app.querySelectorAll('table').forEach(t => {
      if (!t.parentElement.classList.contains('table-wrap')) {
        const w = document.createElement('div'); w.className = 'table-wrap';
        t.parentNode.insertBefore(w, t); w.appendChild(t);
      }
    });
  }

  /* ---------- home ---------- */
  function home() {
    document.title = 'FCCPM Study Hub';
    const read = store.get('read', {});
    const nRead = TOPICS.filter(n => read[n.id]).length;
    const box = store.get('leitner', {});
    const mastered = Object.values(box).filter(b => b >= 4).length;
    const qs = store.get('quizStats', { right: 0, total: 0 });
    let cards = TOPICS.map(n => `<a class="card" href="#/notes/${n.id}"><h3>${n.icon || ''} ${esc(n.title)}</h3><p>${esc(n.summary)}</p></a>`).join('');
    app.innerHTML = EXTRAS.homeHtml + `
      <h2>Your progress</h2>
      <div class="grid">
        <div class="card"><h3>Notes read</h3><p>${nRead} of ${TOPICS.length} topics marked read</p><div class="progress"><div style="width:${(100 * nRead / TOPICS.length).toFixed(0)}%"></div></div></div>
        <div class="card"><h3>Flashcards mastered</h3><p>${mastered} of ${CARDS.length} cards in box 4–5</p><div class="progress"><div style="width:${(100 * mastered / CARDS.length).toFixed(0)}%"></div></div></div>
        <div class="card"><h3>Quiz accuracy</h3><p>${qs.total ? Math.round(100 * qs.right / qs.total) + '% of ' + qs.total + ' answered' : 'No questions answered yet'}</p><div class="progress"><div style="width:${qs.total ? (100 * qs.right / qs.total).toFixed(0) : 0}%"></div></div></div>
      </div>
      <h2>Study topics</h2><div class="grid">${cards}</div>
      <p class="footer-note">Progress is saved in this browser only (localStorage). Built from the FCCPM Study Group 2024 Google Drive folder plus the CNSC Class II event reporting page. Not an official CCPM resource — always confirm regulatory numbers against current CNSC regulations and your own licence.</p>`;
  }

  /* ---------- notes ---------- */
  function notePage(id, anchor) {
    const n = NOTES.find(x => x.id === id);
    if (!n) return home();
    document.title = n.title + ' · FCCPM Study Hub';
    const read = store.get('read', {});
    const tmp = document.createElement('div'); tmp.innerHTML = n.html;
    const heads = [...tmp.querySelectorAll('h2')];
    heads.forEach((h, i) => { if (!h.id) h.id = 's' + i; });
    const toc = heads.length > 2 ? `<div class="toc"><b>On this page</b><ol>${heads.map(h => `<li><a href="#/notes/${id}::${h.id}">${esc(h.textContent)}</a></li>`).join('')}</ol></div>` : '';
    const nCards = CARDS.filter(c => c.t === id).length, nQ = QUIZ.filter(q => q.t === id).length, nO = ORAL.filter(o => o.t === id).length;
    app.innerHTML = `<div class="row no-print"><span class="pill brand">${esc(n.group)}</span>
      ${nCards ? `<a class="pill" href="#/flashcards/${id}">${nCards} flashcards</a>` : ''}
      ${nQ ? `<a class="pill" href="#/quiz/${id}">${nQ} quiz Qs</a>` : ''}
      ${nO ? `<a class="pill" href="#/oral/${id}">${nO} oral scenarios</a>` : ''}</div>
      <h1>${n.icon || ''} ${esc(n.title)}</h1><p class="lead">${esc(n.summary)}</p>${toc}<div class="note-body">${tmp.innerHTML}</div>
      <div class="row no-print" style="margin-top:30px">
        <button class="btn ${read[id] ? '' : 'primary'}" id="markRead">${read[id] ? '✓ Marked as read (undo)' : 'Mark this topic as read'}</button>
        <button class="btn" onclick="window.print()">🖨️ Print / save PDF</button>
      </div>`;
    wrapTables();
    $('#markRead').onclick = () => { const r = store.get('read', {}); r[id] = !r[id]; store.set('read', r); route(); };
    if (anchor) { const el = document.getElementById(anchor); if (el) el.scrollIntoView(); }
  }

  /* ---------- flashcards (Leitner boxes 1-5) ---------- */
  function flashcards(topic) {
    document.title = 'Flashcards · FCCPM Study Hub';
    const sel = topic || store.get('fcTopic', 'all');
    const mode = store.get('fcMode', 'due');
    const box = store.get('leitner', {});
    const keyOf = c => c.t + '|' + c.q.slice(0, 80);
    let pool = CARDS.filter(c => sel === 'all' || c.t === sel);
    const counts = [1, 2, 3, 4, 5].map(b => pool.filter(c => (box[keyOf(c)] || 1) === b).length);
    let deck;
    if (mode === 'due') {
      // weight low boxes: include all box1, 70% box2, 45% box3, 25% box4, 10% box5
      const p = { 1: 1, 2: .7, 3: .45, 4: .25, 5: .1 };
      deck = shuffle(pool.filter(c => Math.random() < p[box[keyOf(c)] || 1]));
      deck.sort((a, b) => (box[keyOf(a)] || 1) - (box[keyOf(b)] || 1));
    } else deck = shuffle(pool);
    let i = 0, flipped = false;
    const opts = ['<option value="all">All topics</option>'].concat(TOPICS.filter(n => CARDS.some(c => c.t === n.id)).map(n => `<option value="${n.id}" ${sel === n.id ? 'selected' : ''}>${esc(n.title)}</option>`)).join('');
    app.innerHTML = `<h1>🃏 Flashcards</h1>
      <p class="lead">Click the card (or press <kbd>space</kbd>) to flip. Mark <b>Got it</b> to move a card up a box, <b>Again</b> to send it back to box 1. "Smart" mode shows weak cards more often.</p>
      <div class="row no-print">
        <select id="fcTopic">${opts}</select>
        <select id="fcMode"><option value="due" ${mode === 'due' ? 'selected' : ''}>Smart (spaced)</option><option value="all" ${mode === 'all' ? 'selected' : ''}>All cards, shuffled</option></select>
        <button class="btn" id="fcReset">Reset boxes</button>
      </div>
      <div class="box-stats">${counts.map((c, k) => `<span>Box ${k + 1}: ${c}</span>`).join('')}</div>
      <div id="fcArea"></div>`;
    $('#fcTopic').onchange = e => { store.set('fcTopic', e.target.value); location.hash = '#/flashcards/' + (e.target.value === 'all' ? '' : e.target.value); if (e.target.value === 'all') flashcards('all'); };
    $('#fcMode').onchange = e => { store.set('fcMode', e.target.value); flashcards(sel); };
    $('#fcReset').onclick = () => { if (confirm('Reset all flashcard progress?')) { store.set('leitner', {}); flashcards(sel); } };
    function draw() {
      const area = $('#fcArea');
      if (!deck.length) { area.innerHTML = `<div class="card"><p>No cards due in this selection — nice. Switch to "All cards" to keep going.</p></div>`; return; }
      if (i >= deck.length) {
        area.innerHTML = `<div class="card"><h3>Round complete 🎉</h3><p>You went through ${deck.length} cards.</p><div class="row"><button class="btn primary" id="again">New round</button></div></div>`;
        $('#again').onclick = () => flashcards(sel); return;
      }
      const c = deck[i], b = box[keyOf(c)] || 1;
      area.innerHTML = `<p class="muted">Card ${i + 1} of ${deck.length} · currently in box ${b}</p>
        <div class="flash-stage"><div class="flash" id="flash">
          <div class="face front"><span class="tag pill">${esc(topicName(c.t))}</span><div class="q">${c.q}</div><span class="hint">tap to flip</span></div>
          <div class="face back"><span class="tag pill">Answer</span><div class="a">${c.a}</div></div>
        </div></div>
        <div class="row"><button class="btn bad" id="no">↺ Again</button><button class="btn good" id="yes">✓ Got it</button><button class="btn" id="skip">Skip →</button></div>`;
      const f = $('#flash');
      const fit = () => { const h = Math.max(...[...f.querySelectorAll('.face')].map(x => x.scrollHeight)); f.style.minHeight = Math.max(290, h) + 'px'; };
      fit();
      f.onclick = () => { flipped = !flipped; f.classList.toggle('flipped', flipped); };
      $('#yes').onclick = () => grade(true); $('#no').onclick = () => grade(false); $('#skip').onclick = () => { i++; flipped = false; draw(); };
    }
    function grade(ok) {
      const c = deck[i], k = keyOf(c), b = box[k] || 1;
      box[k] = ok ? Math.min(5, b + 1) : 1; store.set('leitner', box);
      i++; flipped = false; draw();
    }
    document.onkeydown = e => {
      if (!location.hash.startsWith('#/flashcards')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.code === 'Space') { e.preventDefault(); const f = $('#flash'); if (f) f.click(); }
      if (e.key === 'ArrowRight') { const b = $('#yes'); if (b) b.click(); }
      if (e.key === 'ArrowLeft') { const b = $('#no'); if (b) b.click(); }
    };
    draw();
  }

  /* ---------- quiz ---------- */
  function quiz(topic) {
    document.title = 'Quiz · FCCPM Study Hub';
    const sel = topic || 'all';
    const opts = ['<option value="all">All topics</option>'].concat(TOPICS.filter(n => QUIZ.some(q => q.t === n.id)).map(n => `<option value="${n.id}" ${sel === n.id ? 'selected' : ''}>${esc(n.title)}</option>`)).join('');
    app.innerHTML = `<h1>✅ Multiple-choice quiz</h1>
      <p class="lead">The real exam is oral, but these check that the facts are solid (limits, timelines, who does what). Each answer explains why.</p>
      <div class="row no-print"><select id="qTopic">${opts}</select>
        <select id="qLen"><option>10</option><option selected>20</option><option>40</option><option value="999">All</option></select>
        <button class="btn primary" id="qStart">Start quiz</button></div><div id="qArea"></div>`;
    $('#qTopic').onchange = e => { location.hash = '#/quiz/' + (e.target.value === 'all' ? '' : e.target.value); };
    $('#qStart').onclick = start;
    function start() {
      const n = +$('#qLen').value;
      const qs = shuffle(QUIZ.filter(q => sel === 'all' || q.t === sel)).slice(0, n);
      let idx = 0, score = 0;
      const area = $('#qArea');
      function show() {
        if (idx >= qs.length) {
          area.innerHTML = `<div class="qcard"><h3>Score: ${score} / ${qs.length} (${Math.round(100 * score / qs.length)}%)</h3><p class="muted">Review missed topics in the notes, then try again.</p><button class="btn primary" id="re">Another round</button></div>`;
          $('#re').onclick = start; return;
        }
        const q = qs[idx];
        const order = shuffle(q.o.map((t, k) => ({ t, k })));
        area.innerHTML = `<div class="qcard"><p class="muted">Question ${idx + 1} of ${qs.length} · ${esc(topicName(q.t))} · score ${score}</p>
          <div class="stem">${q.q}</div>
          ${order.map(o => `<button class="opt" data-k="${o.k}">${o.t}</button>`).join('')}
          <div id="exp"></div></div>`;
        area.querySelectorAll('.opt').forEach(b => b.onclick = () => {
          const k = +b.dataset.k, ok = k === q.a;
          area.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('correct'); });
          if (!ok) b.classList.add('wrong'); else score++;
          const st = store.get('quizStats', { right: 0, total: 0 }); st.total++; if (ok) st.right++; store.set('quizStats', st);
          $('#exp').innerHTML = `<div class="explain"><b>${ok ? '✓ Correct.' : '✗ Not quite.'}</b> ${q.e}</div><div class="row"><button class="btn primary" id="nx">${idx + 1 < qs.length ? 'Next →' : 'See score'}</button></div>`;
          $('#nx').onclick = () => { idx++; show(); };
        });
      }
      show();
    }
  }

  /* ---------- oral exam simulator ---------- */
  function oral(topic) {
    document.title = 'Mock oral · FCCPM Study Hub';
    const sel = topic || 'all';
    const opts = ['<option value="all">Full exam mix (5 topics)</option>'].concat(TOPICS.filter(n => ORAL.some(q => q.t === n.id)).map(n => `<option value="${n.id}" ${sel === n.id ? 'selected' : ''}>${esc(n.title)}</option>`)).join('');
    app.innerHTML = `<h1>🎤 Mock oral exam</h1>
      <p class="lead">Recent exams: 15-min project talk, ~30 min on the project &amp; submitted material, then ~45 min of standardized questions (5 questions from Radiation Protection, Clinical Issues, Emerging Technologies, Legal/Ethical, Cost/Benefit, Competing Modalities). That works out to roughly <b>9 minutes per question</b> including follow-ups.</p>
      <div class="callout tip"><strong>How to use this:</strong> answer out loud (ideally to a colleague), then reveal the model points and tick off what you covered. Practise structuring first: <em>clarify → safety/immediate → stakeholders → evidence/regs → decision → follow-up</em>.</div>
      <div class="row no-print"><select id="oTopic">${opts}</select>
        <select id="oMin"><option value="5">5 min / question</option><option value="9" selected>9 min / question</option><option value="0">No timer</option></select>
        <button class="btn primary" id="oStart">Start</button><button class="btn" id="oBrowse">Browse all scenarios</button></div>
      <div id="oArea"></div>`;
    $('#oTopic').onchange = e => { location.hash = '#/oral/' + (e.target.value === 'all' ? '' : e.target.value); };
    $('#oBrowse').onclick = browse;
    $('#oStart').onclick = start;
    let timerId = null;
    function pick() {
      if (sel !== 'all') return shuffle(ORAL.filter(o => o.t === sel)).slice(0, 5);
      const cats = shuffle([...new Set(ORAL.map(o => o.t))]).slice(0, 5);
      return cats.map(c => shuffle(ORAL.filter(o => o.t === c))[0]);
    }
    function start() {
      const set = pick(), mins = +$('#oMin').value; let i = 0;
      const area = $('#oArea');
      function show() {
        clearInterval(timerId);
        if (i >= set.length) { area.innerHTML = `<div class="qcard"><h3>Exam complete</h3><p>Re-read the frameworks page and the notes for any question where you missed more than a third of the points.</p><button class="btn primary" id="r">New exam</button></div>`; $('#r').onclick = start; return; }
        const o = set[i];
        area.innerHTML = `<div class="qcard"><div class="row" style="justify-content:space-between"><span class="pill brand">Q${i + 1}/${set.length} · ${esc(topicName(o.t))}</span>${mins ? `<span class="timer" id="tm">${mins}:00</span>` : ''}</div>
          <p class="scenario">${o.q}</p>
          <textarea id="notes" placeholder="Optional: jot your answer outline here while you talk…"></textarea>
          <div class="row"><button class="btn" id="rev">Reveal model points</button><button class="btn primary" id="nx">Next question →</button></div>
          <div id="model"></div></div>`;
        if (mins) {
          let left = mins * 60; const tm = $('#tm');
          timerId = setInterval(() => { left--; if (left <= 0) { clearInterval(timerId); left = 0; } tm.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); tm.classList.toggle('low', left < 60); }, 1000);
        }
        $('#rev').onclick = () => { $('#model').innerHTML = modelHtml(o, true); };
        $('#nx').onclick = () => { i++; show(); };
      }
      show();
    }
    function browse() {
      clearInterval(timerId);
      const list = ORAL.filter(o => sel === 'all' || o.t === sel);
      $('#oArea').innerHTML = list.map(o => `<details><summary>${esc(topicName(o.t))}: ${o.q}</summary>${modelHtml(o, false)}</details>`).join('');
    }
  }
  function modelHtml(o, checks) {
    const li = p => checks ? `<li><label><input type="checkbox">${p}</label></li>` : `<li>${p}</li>`;
    return `<div class="explain"><b>Points examiners look for</b><ul class="${checks ? 'checklist' : ''}">${o.p.map(li).join('')}</ul>
      ${o.f && o.f.length ? `<b>Likely follow-ups</b><ul>${o.f.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      ${o.x ? `<b>Pitfalls</b><p>${o.x}</p>` : ''}${o.s ? `<p class="src">Source: ${o.s}</p>` : ''}</div>`;
  }

  /* ---------- numbers ---------- */
  function numbers() {
    document.title = 'Key numbers · FCCPM Study Hub';
    const groups = {};
    EXTRAS.numbers.forEach(n => { (groups[n.g] = groups[n.g] || []).push(n); });
    app.innerHTML = `<h1>🔢 Key numbers</h1><p class="lead">The exam expects you to "understand the numbers" — quote limits correctly and translate them into real clinical situations. ✔ = checked against the current regulation text; others come from the study-group notes or local (AHS/CCI) licence practice.</p>` +
      Object.keys(groups).map(g => `<h2>${esc(g)}</h2><div class="num-grid">${groups[g].map(n => `<div class="num"><b>${n.v}</b><span>${n.l}${n.c ? ' ✔' : ''}</span></div>`).join('')}</div>`).join('');
  }

  /* ---------- glossary ---------- */
  function glossary() {
    document.title = 'Glossary · FCCPM Study Hub';
    const items = EXTRAS.glossary.slice().sort((a, b) => a[0].localeCompare(b[0]));
    app.innerHTML = `<h1>📖 Glossary &amp; acronyms</h1><input id="gf" type="search" placeholder="Filter…" style="width:100%;padding:9px 12px;border-radius:10px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:inherit"><div class="table-wrap"><table id="gt"><thead><tr><th style="width:24%">Term</th><th>Meaning</th></tr></thead><tbody>${items.map(([t, d]) => `<tr><td><b>${t}</b></td><td>${d}</td></tr>`).join('')}</tbody></table></div>`;
    $('#gf').oninput = e => { const v = e.target.value.toLowerCase(); app.querySelectorAll('#gt tbody tr').forEach(tr => tr.hidden = !tr.textContent.toLowerCase().includes(v)); };
  }

  /* ---------- study plan ---------- */
  function plan() {
    document.title = 'Study plan · FCCPM Study Hub';
    const done = store.get('plan', {});
    app.innerHTML = EXTRAS.planIntro + EXTRAS.plan.map((wk, w) => `<h2>${esc(wk.title)}</h2><ul class="checklist">${wk.items.map((it, k) => { const id = w + '-' + k; return `<li><label><input type="checkbox" data-id="${id}" ${done[id] ? 'checked' : ''}> ${it}</label></li>`; }).join('')}</ul>`).join('');
    app.querySelectorAll('input[data-id]').forEach(cb => cb.onchange = () => { const d = store.get('plan', {}); d[cb.dataset.id] = cb.checked; store.set('plan', d); });
  }

  /* ---------- search ---------- */
  const idx = [];
  NOTES.forEach(n => {
    const tmp = document.createElement('div'); tmp.innerHTML = n.html;
    let cur = { id: '', title: n.title, text: '' };
    const secs = [];
    [...tmp.children].forEach(el => {
      if (el.tagName === 'H2') { secs.push(cur); cur = { id: '', title: el.textContent, text: '' }; }
      cur.text += ' ' + el.textContent;
    });
    secs.push(cur);
    let h2i = 0;
    secs.forEach((s, k) => { if (k > 0) s.id = 's' + (h2i++); idx.push({ kind: 'Notes', title: n.title + (k ? ' › ' + s.title : ''), text: s.text, href: '#/notes/' + n.id + (k ? '::' + s.id : '') }); });
  });
  CARDS.forEach(c => idx.push({ kind: 'Flashcard', title: c.q.replace(/<[^>]+>/g, ''), text: c.q + ' ' + c.a.replace(/<[^>]+>/g, ' '), href: '#/flashcards/' + c.t }));
  ORAL.forEach(o => idx.push({ kind: 'Oral scenario', title: o.q.replace(/<[^>]+>/g, ''), text: o.q + ' ' + o.p.join(' '), href: '#/oral/' + o.t }));
  EXTRAS.glossary.forEach(g => idx.push({ kind: 'Glossary', title: g[0].replace(/<[^>]+>/g, ''), text: g[0] + ' ' + g[1], href: '#/glossary' }));
  const sbox = $('#search'), sres = $('#searchResults');
  sbox.addEventListener('input', () => {
    const v = sbox.value.trim().toLowerCase();
    if (v.length < 2) { sres.hidden = true; return; }
    const terms = v.split(/\s+/);
    const hits = idx.filter(x => { const t = x.text.toLowerCase(); return terms.every(w => t.includes(w)); }).slice(0, 25);
    sres.innerHTML = hits.length ? hits.map(h => {
      const t = h.text.replace(/\s+/g, ' '); const p = t.toLowerCase().indexOf(terms[0]);
      const snip = esc(t.slice(Math.max(0, p - 50), p + 90));
      return `<a href="${h.href}"><b>${esc(h.title.slice(0, 110))}</b><small>${h.kind} · …${snip}…</small></a>`;
    }).join('') : '<p class="muted" style="padding:8px">No matches.</p>';
    sres.hidden = false;
  });
  sres.addEventListener('click', () => { sres.hidden = true; sbox.value = ''; });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) sres.hidden = true; });

  route();
})();
