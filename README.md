# FCCPM Study Hub

A static study site for the **FCCPM oral examination** (Fellowship, Canadian College of Physicists in Medicine), built from the FCCPM study group's Google Drive notes plus the CNSC Class II event-report page.

**What's inside**

- **Notes**: 15 topics covering the exam format, CNSC regulations, radiation safety practice, MRI, nuclear medicine, adverse events, ethics and law, research, cost–benefit and staffing, competing and emerging technology, tumour sites, IT/cybersecurity, and organizations
- **Flashcards** with Leitner-box spaced repetition
- **Multiple-choice quiz** with explanations
- **Mock oral exam**: random 5-topic exams with timers, model points, follow-ups and pitfalls
- **Answer frameworks**, **key numbers**, **incident library**, **glossary** and an **8-week study plan**

Progress is stored in your browser (localStorage) only.

## Running it

No build step. Open `index.html` directly, or serve the folder:

```
python3 -m http.server
```

To publish it, turn on **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Editing content

All content lives in `data/`:

| File | Contents |
|---|---|
| `notes-a.js` … `notes-d.js` | `NOTES.push({id, group, icon, title, summary, html})` |
| `flashcards.js` | `{t: topicId, q, a}` |
| `quiz.js` | `{t, q, o: [options], a: correctIndex, e: explanation}` |
| `oral.js` | `{t, q, p: [points], f: [follow-ups], x: pitfalls, s: source}` |
| `extras.js` | home page, study plan, frameworks, incidents, sources, key numbers, glossary |

## Caveat

This is not an official CCPM resource. Regulations, licence conditions and local values change, so confirm numbers against current CNSC documents and your own licence. On the Key numbers page, a ✔ marks values checked against the current Radiation Protection Regulations.
