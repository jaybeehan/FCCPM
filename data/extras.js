/* Extras: home page, study plan, frameworks, incident library, sources, numbers, glossary */
var EXTRAS = {

homeHtml: `
<h1>FCCPM Study Hub</h1>
<p class="lead">Notes, flashcards, quizzes and a timed mock oral built from the FCCPM study group's Google Drive (fellows' notes, question banks, summaries, frameworks, papers and recorded sessions) plus the CNSC Class II event-report page.</p>
<div class="callout tip"><strong>How to use it:</strong> read a topic, then drill its flashcards, then answer two or three oral scenarios <em>out loud</em> on the timer. The <a href="#/frameworks">answer frameworks</a> and <a href="#/numbers">key numbers</a> pages are for the last week before the exam.</div>
<div class="grid">
  <a class="card" href="#/oral"><h3>🎤 Mock oral</h3><p>A random 5-topic exam with 9-minute timers, model points to tick off, likely follow-ups and pitfalls.</p></a>
  <a class="card" href="#/flashcards"><h3>🃏 Flashcards</h3><p>Spaced repetition (Leitner boxes) that brings up the cards you miss more often. Keyboard: space flips, ←/→ marks.</p></a>
  <a class="card" href="#/quiz"><h3>✅ Quiz</h3><p>Multiple-choice questions on limits, regulations, trials, incidents and technology, with explanations.</p></a>
  <a class="card" href="#/frameworks"><h3>🧭 Frameworks</h3><p>The group's answer templates for radiation safety, ethics, clinical issues, cost–benefit, competing technologies and research.</p></a>
</div>`,

planIntro: `<h1>🗓️ Study plan &amp; checklist</h1><p class="lead">An 8-week plan. Your ticks are saved in this browser. Fellows' advice: start early, practise answering out loud with colleagues, and know your own submission inside out.</p>`,

plan: [
 {title:'Week 1 — Orientation & your submission', items:['Read <a href="#/notes/exam">The exam</a> notes and marking criteria','Re-read your submitted project/document; list 10 likely questions about it','Draft and time your 15-min presentation','Write 60-second answers to "Why FCCPM?" and "What is a medical physicist?" (<a href="#/notes/interview">notes</a>)','Read <a href="#/notes/orgs">Organizations & documents</a>']},
 {title:'Week 2 — Radiation protection: regulations', items:['Read <a href="#/notes/radreg">Regulations & licensing</a>','Memorize dose limits, action levels and reporting timelines (<a href="#/numbers">numbers</a>)','Flashcards: radreg until box 3+','Oral: 3 radreg scenarios on the timer']},
 {title:'Week 3 — Radiation protection: practice', items:['Read <a href="#/notes/radpractice">Radiation safety in practice</a>','Read <a href="#/notes/nucmed">Nuclear medicine</a> and <a href="#/notes/mri">MRI safety</a>','Review the CNSC Class II events in the <a href="#/incidents">incident library</a>','Oral: emergencies (HDR stuck source, spill, damaged package)']},
 {title:'Week 4 — Clinical issues & adverse events', items:['Read <a href="#/notes/events">Adverse events</a> and <a href="#/notes/clinical">Clinical knowledge</a>','Learn 5 famous incidents well enough to tell the story in 1 minute','Practise disclosure-of-harm wording','Oral: SRS wrong chamber, 10% underdose, pregnancy discovered']},
 {title:'Week 5 — Legal, ethics & research', items:['Read <a href="#/notes/ethics">Ethics & legal</a> and <a href="#/notes/trials">Research & trials</a>','Memorize Belmont/TCPS2 principles and the escalation ladder','Oral: impaired colleague, grad student modifying a linac, donor and trial eligibility']},
 {title:'Week 6 — Cost–benefit & administration', items:['Read <a href="#/notes/costben">Cost–benefit & staffing</a>','Do a back-of-envelope rural-centre and proton business case aloud','Oral: 8% budget cut, academic program cut, workforce plan']},
 {title:'Week 7 — Technology', items:['Read <a href="#/notes/competing">Competing technologies</a>, <a href="#/notes/emerging">Emerging tech</a>, <a href="#/notes/it">IT & cybersecurity</a>','Practise the 7-consideration comparison on MR-linac vs Ethos, GK vs linac, protons','Oral: FLASH, AI staffing, ransomware']},
 {title:'Week 8 — Mock exams', items:['Three full mock orals (5 topics, 9-min timer) with a colleague acting as examiner','Re-read <a href="#/frameworks">frameworks</a> and <a href="#/numbers">numbers</a> daily','Run all flashcards in "smart" mode until most are in box 4–5','Rest the day before']}
],

frameworksHtml: `
<h1>🧭 Answer frameworks</h1>
<p class="lead">Templates compiled by the study group. Examiners reward a visible structure: say what you will cover, then cover it.</p>

<h2>Universal structure (any question)</h2>
<ol><li><b>Clarify</b>: ask one or two questions or state your assumptions.</li><li><b>Immediate safety</b>: patients, staff, public.</li><li><b>Stakeholders</b>: who needs to know and who decides.</li><li><b>Evidence & rules</b>: regulations, licence, guidance documents, literature.</li><li><b>Options and decision</b>, with the reasons for it.</li><li><b>Communication</b>: patient, staff, administration, regulator, media.</li><li><b>Follow-up</b>: investigation, corrective actions, monitoring, education.</li></ol>

<h2>Radiation safety question framework</h2>
<div class="table-wrap"><table>
<tr><th>Time frame</th><th>Actions</th></tr>
<tr><td><b>Immediate</b></td><td>Make safe (stop beam/retract source), protect people (evacuate, isolate, time/distance/shielding), assess (survey), secure area, notify RSO</td></tr>
<tr><td><b>Short term</b> (hours–days)</td><td>RSO → CNSC notification if reportable (24-h line); dose estimates; preserve evidence; patient/staff support; RLS report</td></tr>
<tr><td><b>Medium term</b> (weeks)</td><td>Investigation/RCA; 21-day report; corrective actions; equipment release after service and QA</td></tr>
<tr><td><b>Long term</b></td><td>Procedure/training changes, drills, audit effectiveness, share lessons (Interactions, NSIR-RT)</td></tr>
</table></div>
<p><b>Escalation path:</b> worker → supervisor → RSO → Radiation Safety Committee → Applicant Authority → CNSC.</p>

<h2>Clinical issues / adverse event framework</h2>
<ol><li>Is the patient safe right now? Stop treatment if needed.</li><li>Scope: what happened, how many patients, how big is the error (Level I/II/III)?</li><li>Confirm independently (second physicist, other equipment).</li><li>Notify the RO and clinical leadership; take equipment or process out of service.</li><li>Reconstruct doses and assess clinical impact with the RO.</li><li>Disclosure of harm (AHS policy), with apology.</li><li>Report: RLS, NSIR-RT; CNSC if licensed equipment/limits are involved; Health Canada (device incident).</li><li>RCA (London Protocol), corrective actions, education, follow-up.</li><li>Support staff ("second victims").</li></ol>

<h2>Ethics question framework</h2>
<ol><li>Facts — don't assume bad intent.</li><li>Ethical issues and principles in tension (autonomy, beneficence, non-maleficence, justice; integrity, confidentiality).</li><li>Stakeholders (patient first).</li><li>Legal and policy requirements (legal ≠ ethical).</li><li>Options: private conversation → supervisor → department head → formal channels (ethics consult, compliance, whistleblower office) → external body.</li><li>Act, document, follow up, and fix the system.</li></ol>

<h2>Cost–benefit & competing technology framework</h2>
<ol><li><b>Clinical need</b>: patient numbers, indications, evidence (R-IDEAL).</li><li><b>Technical performance</b>.</li><li><b>Workflow & throughput</b>.</li><li><b>Costs</b>: capital, construction, service (~8–10%/yr), staff, training, decommissioning; CEA/CUA (cost/QALY), CBA (NPV).</li><li><b>Safety & QA</b>, licensing.</li><li><b>Institutional fit</b>: fleet, IT, research, vendor stability.</li><li><b>Patient perspective & equity</b>.</li></ol>
<p>Always consider the <b>do-nothing</b> and <b>refer-out</b> options, and finish with a recommendation and metrics for review.</p>

<h2>Clinical research framework</h2>
<ol><li>Scientific question and evidence gap; equipoise.</li><li>Design (phase, endpoints, power, non-inferiority?).</li><li>Ethics: REB, consent, therapeutic misconception, vulnerable populations.</li><li>Regulatory: Health Canada CTA/ITA, CNSC licence if new uses.</li><li>Physics: credentialing, QA, data submission.</li><li>Resources and funding.</li><li>Anticipated adverse events, monitoring, DSMB.</li></ol>

<h2>Responding to scope-of-practice questions</h2>
<ul><li>Identify whose scope it is (MP, RO, RTT, dosimetrist, physics assistant).</li><li>Refer to documents: COMP scope of practice (2015), CPQR, AAPM MPPGs, staffing models.</li><li>Delegation is possible with training, procedures, supervision and redundant checks (FMEA).</li><li>Raise concerns respectfully: "here are my physics concerns — are they concerns for you?"; document.</li></ul>`,

incidentsHtml: `
<h1>⚠️ Incident & event library</h1>
<p class="lead">Real events you can cite. Telling one in 30 seconds (what happened, root cause, lesson) is a strong move in an answer.</p>

<h2>CNSC Class II event reports (2015–2021)</h2>
<p>From the CNSC's page of event reports for Class II nuclear facilities and prescribed equipment. Paraphrased.</p>
<div class="table-wrap"><table>
<tr><th>Date</th><th>Licensee</th><th>Event</th><th>Teaching point</th></tr>
<tr><td>Nov 2021</td><td>Eastern Regional Health Authority (NL)</td><td>Cyber attack on the provincial health network; patient care significantly disrupted; equipment and nuclear substances remained safe.</td><td>Cybersecurity is a reportable licensing issue; business continuity.</td></tr>
<tr><td>May 2021</td><td>Alberta Health Services</td><td>NEW's Q1 dosimeter read 145.83 mSv (&gt; 50 mSv limit); suspected non-personal; worker removed from dose work.</td><td>s.16 process even when you suspect a badge artefact.</td></tr>
<tr><td>Apr 2021</td><td>Jubilant DraxImage</td><td>I-131 vial spill in shielded box; room evacuated; worker committed dose refined from 47 to 33 mSv.</td><td>Volatile iodine; bioassay; dose refinement.</td></tr>
<tr><td>Mar 2020</td><td>CancerCare Manitoba</td><td>Non-NEW dosimeter 3.54 mSv (&gt; 1 mSv); partly from non-licensee activities.</td><td>Public limit applies to non-NEW staff.</td></tr>
<tr><td>Nov 2019</td><td>Alberta Health Services</td><td>NM technologist quarterly dose 56.91 mSv; likely contamination on the dosimeter; returned to work Dec 20, 2019 with CNSC authorization.</td><td>Return to work requires CNSC authorization.</td></tr>
<tr><td>May 2019</td><td>PHSA (Vancouver)</td><td>Non-NEW 1.85 mSv; suspected non-personal, unconfirmed.</td><td>Dose record correction challenges.</td></tr>
<tr><td>Sep 2018</td><td>Sylvia Fedoruk Centre</td><td>Target chamber pressure loss during C-11 testing → minor release; cyclotron shut down.</td><td>Cyclotron containment; short half-lives.</td></tr>
<tr><td>Mar 2017</td><td>Vancouver General Hospital</td><td>NEW administering I-131 overexposed: 2,327 mSv right hand, 114 mSv left.</td><td>Extremity dosimetry, syringe shields, technique.</td></tr>
<tr><td>Oct 2016</td><td>Lions Gate Hospital</td><td>Hand contamination while injecting Y-90: max 1,098.8 mSv (&gt; 500 mSv limit).</td><td>Beta shielding, gloves, contamination checks.</td></tr>
<tr><td>Jan 2015</td><td>Montreal Neurological Institute</td><td>Possible NEW overexposure; removed from duties; investigation and report to Quebec's CSST.</td><td>Provincial occupational bodies also involved.</td></tr>
</table></div>

<h2>Radiotherapy incidents</h2>
<div class="table-wrap"><table>
<tr><th>Event</th><th>Root cause</th><th>Lesson</th></tr>
<tr><td>Ottawa orthovoltage (2004–07)</td><td>Backscatter factor omitted after recommissioning; 326 curative patients underdosed up to ~20%</td><td>Independent checks, staffing, follow national QA</td></tr>
<tr><td>Hamilton HDR gyne (2019)</td><td>Applicator/transfer-tube length error</td><td>Applicator commissioning and end-to-end tests</td></tr>
<tr><td>Toulouse SRS (2006–07)</td><td>Ion chamber too large for micro-MLC small fields</td><td>Small-field dosimetry, audit</td></tr>
<tr><td>Springfield, MO SRS (2004–09)</td><td>Same small-field detector error</td><td>External credentialing</td></tr>
<tr><td>New York IMRT (2005)</td><td>MLC data lost after a software crash; open fields delivered</td><td>Data integrity, verification imaging</td></tr>
<tr><td>Épinal, France (1987–2006)</td><td>Dynamic wedge factors misapplied, among other errors</td><td>Training on new technology, reporting culture</td></tr>
<tr><td>Panama (2000–01)</td><td>TPS block data-entry workaround</td><td>Validate the TPS outside tested conditions; independent MU check</td></tr>
<tr><td>Costa Rica Co-60 (1996)</td><td>Calibration/timer error</td><td>Independent calibration verification</td></tr>
<tr><td>Laval HDR (2014)</td><td>Leaking Ir-192 source found at exchange (~10.5 kBq on wipe)</td><td>Leak tests at exchange; contamination control</td></tr>
<tr><td>Sudbury ransomware (2019)</td><td>Network attack; RT resumed after ~4 days, ~69 fractions affected</td><td>Downtime plans, backups</td></tr>
</table></div>

<h2>Large-scale events</h2>
<ul><li><b>Chernobyl (1986)</b>: reactor design and operator error; thyroid cancers in children from I-131 in milk — why KI matters.</li><li><b>Fukushima (2011)</b>: tsunami knocked out cooling; evacuations; ~330 µSv/h at 20 km early on; Cs-134/137 and I-131.</li><li><b>Goiânia (1987)</b>: abandoned Cs-137 teletherapy source opened by scavengers; 4 deaths — why source security and disposal matter.</li></ul>`,

sourcesHtml: `
<h1>📚 Sources</h1>
<p class="lead">This site summarizes material from the FCCPM study group's Google Drive folder and one CNSC web page. Re-read the originals for depth.</p>
<h2>Drive folders used</h2>
<ul>
<li><b>Top level</b>: FCCPM Questions (full question bank with group answers), Notes to Share – Shima, Jay's notes, Common FCCPM questions, Mock Exam Compiled, Template – Point Version, answer frameworks (Radiation Safety, Ethics, Clinical Issues, Cost Benefit &amp; Competing Tech, Clinical Research, Formula for competing technologies).</li>
<li><b>Exam info</b>: exam format, marking criteria, chief examiner reports, fellows' advice.</li>
<li><b>1Shared Document from Fellows</b>: notes from Amr, Ben, Matt, Jay, Lesley, Hans.</li>
<li><b>Radiation Protection &amp; MRI Safety</b>: SUMMARY_Radiation Safety, CNSC regulations and guidance, Interactions newsletters notes, Why RSO candidates fail, skin contamination guidance, HDR leak test abstract, MRI safety training.</li>
<li><b>Nuclear Medicine</b>: Nuclear Medicine_Hans.</li>
<li><b>Legal/Ethical</b>: SUMMARY_Ethics, COMP code of ethics and scope of practice, AHS policies (disclosure, CAE), TCPS2, Geis 2019, Serago.</li>
<li><b>Clinical Issues</b>: CAE-SUMMARY, tumour-site notes, Safety/ethics/legal, Knöös 2017, Karp 2021, Ford 2018, Arnold 2022.</li>
<li><b>Cost Benefit Analysis</b>: SUMMARY, Proton Centre (Smith 2018, CADTH 2017, Ontario HTA, Safavi 2022), Rural Centre, Schumacher 2020, Potrebko 2018.</li>
<li><b>Emerging Technologies</b>: Big data, Automation, Emerging tech SUMMARY tables, Clinical Trials SUMMARY (Fairchild 2013, Peters 2010).</li>
<li><b>Competing Modalities</b>: Competing modalities.docx.</li>
<li><b>Recorded Sessions</b>: group sessions including FCCPM_MRI.pptx.</li>
</ul>
<h2>Web</h2>
<ul><li>CNSC — <a href="https://www.cnsc-ccsn.gc.ca/eng/acts-and-regulations/event-reports-for-major-nuclear-facilities/event-reporting/classii-facilities/" target="_blank" rel="noopener">Event reports: Class II nuclear facilities and prescribed equipment</a></li>
<li>Radiation Protection Regulations (SOR/2000-203), current consolidated text on the Justice Laws website — used to verify the dose limits marked ✔.</li></ul>
<div class="callout warn"><strong>Caveat:</strong> regulations, licence conditions and local (AHS/CCI) values change. Numbers without ✔ come from the study group's notes; confirm them against current CNSC documents and your own licence before quoting them as fact.</div>`,

numbers: [
 {g:'Dose limits (RPR)', v:'50 mSv', l:'NEW effective, 1-yr period', c:true},
 {g:'Dose limits (RPR)', v:'100 mSv', l:'NEW effective, 5-yr period', c:true},
 {g:'Dose limits (RPR)', v:'1 mSv', l:'Public effective, per calendar year', c:true},
 {g:'Dose limits (RPR)', v:'4 mSv', l:'Pregnant NEW, balance of pregnancy', c:true},
 {g:'Dose limits (RPR)', v:'50 mSv', l:'Lens of eye, NEW (was 150 before 2021)', c:true},
 {g:'Dose limits (RPR)', v:'15 mSv', l:'Lens of eye, public', c:true},
 {g:'Dose limits (RPR)', v:'500 mSv', l:'Skin / hands / feet, NEW', c:true},
 {g:'Dose limits (RPR)', v:'50 mSv', l:'Skin / hands / feet, public', c:true},
 {g:'Dose limits (RPR)', v:'50 / 500 mSv', l:'Emergency control (effective / skin)', c:true},
 {g:'Dose limits (RPR)', v:'500 / 5000 mSv', l:'Emergency: preventing life-threatening effects', c:true},
 {g:'Monitoring & reporting', v:'> 1 mSv/yr', l:'Reasonable probability → designate NEW'},
 {g:'Monitoring & reporting', v:'> 5 mSv/yr', l:'Licensed dosimetry required'},
 {g:'Monitoring & reporting', v:'0.75 mSv/qtr', l:'Local action level (CCI example); 3 mSv/yr'},
 {g:'Monitoring & reporting', v:'0.5 mSv/qtr', l:'Local investigation level (internal)'},
 {g:'Monitoring & reporting', v:'21 days', l:'Full report after reportable event'},
 {g:'Monitoring & reporting', v:'60 days/yr', l:'Max alternate RSO coverage'},
 {g:'Monitoring & reporting', v:'25 µSv/h', l:'Radiation warning sign threshold', c:true},
 {g:'Monitoring & reporting', v:'100 × EQ', l:'Sign threshold for nuclear substances', c:true},
 {g:'Monitoring & reporting', v:'$25k / $100k', l:'Max AMP individual / corporation'},
 {g:'Sources & transport', v:'50 MBq', l:'Leak test required at or above'},
 {g:'Sources & transport', v:'200 Bq', l:'Leaking source threshold'},
 {g:'Sources & transport', v:'12 months', l:'Survey meter calibration interval'},
 {g:'Sources & transport', v:'µSv/h at 1 m ÷ 10', l:'Transport Index'},
 {g:'Sources & transport', v:'5 / 500 / 2000 µSv/h', l:'Surface max: White-I / Yellow-II / Yellow-III'},
 {g:'Sources & transport', v:'< 0.5 µSv/h @ 5 cm', l:'Conditional clearance, activated parts'},
 {g:'Sources & transport', v:'≥ 48 h', l:'Wait after last beam before dismantling a head'},
 {g:'Sources & transport', v:'100 EQ', l:'Minor vs major spill boundary'},
 {g:'Sources & transport', v:'50 / 5 mSv', l:'Skin contamination report: NEW / non-NEW'},
 {g:'Patients & decedents', v:'< 16 µSv/h @ 2 m', l:'I-131 release (licence example)'},
 {g:'Patients & decedents', v:'5 mSv', l:'Caregiver dose constraint'},
 {g:'Patients & decedents', v:'2 years', l:'I-125 seeds before cremation'},
 {g:'Patients & decedents', v:'4 months', l:'I-131 therapy before cremation/autopsy'},
 {g:'Patients & decedents', v:'< 100 mGy', l:'Fetal dose: no added malformation risk (ICRP 84)'},
 {g:'Patients & decedents', v:'0.006%/mGy', l:'Childhood cancer risk from fetal dose'},
 {g:'Patients & decedents', v:'0.5 / 1 Gy', l:'Defibrillator / pacemaker cumulative dose caution'},
 {g:'Background & context', v:'~1.8–3 mSv/yr', l:'Canadian natural background'},
 {g:'Background & context', v:'200 Bq/m³', l:'Health Canada radon guideline'},
 {g:'Background & context', v:'~2 / 7 / 15 mSv', l:'CT head / chest / abdomen-pelvis'},
 {g:'Background & context', v:'~0.02 mSv', l:'Cross-Canada flight'},
 {g:'Background & context', v:'5%/Sv', l:'Fatal cancer risk coefficient (LNT)'},
 {g:'Background & context', v:'~4 Gy', l:'LD50/60 whole body without treatment'},
 {g:'Clinical & QA', v:'< 5 / 5–10 / > 10%', l:'Error levels I / II / III (Rahimian)'},
 {g:'Clinical & QA', v:'20% / 50%', l:'NRC medical event: total / fraction'},
 {g:'Clinical & QA', v:'±20%', l:'CTDIvol displayed vs measured (SC35)'},
 {g:'Clinical & QA', v:'3%/2 mm, ≥ 95%', l:'TG-218 IMRT QA universal tolerance'},
 {g:'Clinical & QA', v:'O × S × D', l:'TG-100 RPN (1–1000)'},
 {g:'Economics & staffing', v:'1 MP / 260', l:'New patients per physicist (historical)'},
 {g:'Economics & staffing', v:'0.33', l:'Physics assistants per MP (COMP 2021)'},
 {g:'Economics & staffing', v:'1 linac / 450', l:'Courses per linac per year'},
 {g:'Economics & staffing', v:'~50%', l:'Cancer patients needing RT'},
 {g:'Economics & staffing', v:'1.5%', l:'CADTH discount rate (0% & 3% sensitivity)'},
 {g:'Economics & staffing', v:'~$50k/QALY', l:'Informal Canadian willingness to pay'},
 {g:'Economics & staffing', v:'~$40M / $4.8M/yr', l:'Alberta single-room proton capital / operating'},
 {g:'Economics & staffing', v:'~6%', l:'RT patients potentially eligible for protons'}
],

glossary: [
['AA','Applicant Authority — senior signatory with authority over resources for a CNSC licence.'],
['ACR','Annual Compliance Report to the CNSC.'],
['ADCL','Accredited Dosimetry Calibration Laboratory (US); in Canada, NRC is the primary standards lab.'],
['ALARA','As Low As Reasonably Achievable, social and economic factors taken into account.'],
['AMP','Administrative Monetary Penalty (CNSC).'],
['BED / EQD2','Biologically effective dose / equivalent dose in 2 Gy fractions.'],
['BgRT','Biology-guided radiotherapy (PET-guided delivery, RefleXion).'],
['CADTH','Canadian Agency for Drugs and Technologies in Health (now Canada\'s Drug Agency).'],
['CAE','Clinical adverse event (AHS term).'],
['CAMPEP','Commission on Accreditation of Medical Physics Education Programs.'],
['CAPCA','Canadian Association of Provincial Cancer Agencies.'],
['CCPM','Canadian College of Physicists in Medicine.'],
['CCTG','Canadian Cancer Trials Group.'],
['CEA / CUA / CBA','Cost-effectiveness / cost-utility / cost-benefit analysis.'],
['CNSC','Canadian Nuclear Safety Commission.'],
['COMP','Canadian Organization of Medical Physicists.'],
['CPQR','Canadian Partnership for Quality Radiotherapy.'],
['CTA','Clinical Trial Application (Health Canada).'],
['CTDIvol / DLP','CT dose index (volume) / dose-length product.'],
['DRL','Diagnostic reference level.'],
['EQ','Exemption quantity of a nuclear substance.'],
['FMEA','Failure modes and effects analysis.'],
['GNSCR','General Nuclear Safety and Control Regulations.'],
['HIA','Health Information Act (Alberta).'],
['HTA','Health technology assessment.'],
['ICER','Incremental cost-effectiveness ratio.'],
['ILS','Incident learning system.'],
['IROC','Imaging and Radiation Oncology Core.'],
['ITA','Investigational Testing Authorization (devices, Health Canada).'],
['LNT','Linear no-threshold model.'],
['MPPG','AAPM Medical Physics Practice Guideline.'],
['NDR','National Dose Registry (Health Canada).'],
['NEW','Nuclear energy worker.'],
['NSCA','Nuclear Safety and Control Act.'],
['NSIR-RT','National System for Incident Reporting – Radiation Treatment.'],
['NSRDR','Nuclear Substances and Radiation Devices Regulations.'],
['OIS','Oncology information system (e.g., ARIA, MOSAIQ).'],
['PSO','Patient Safety Organization (US).'],
['PTNSR','Packaging and Transport of Nuclear Substances Regulations.'],
['QALY','Quality-adjusted life-year.'],
['RCA','Root cause analysis.'],
['REB','Research ethics board.'],
['REGDOC','CNSC regulatory document.'],
['RLS','Reporting & Learning System (AHS internal incident reporting).'],
['RO-ILS','Radiation Oncology Incident Learning System (ASTRO/AAPM).'],
['RPN','Risk priority number (O × S × D).'],
['RPR','Radiation Protection Regulations.'],
['RSC','Radiation Safety Committee.'],
['RSO','Radiation Safety Officer.'],
['RSP','Radiation safety program.'],
['SAR','Specific absorption rate (MR RF heating).'],
['SC35','Health Canada Safety Code 35.'],
['SSTS','Sealed Source Tracking System.'],
['TCPS2','Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans.'],
['TDG','Transportation of Dangerous Goods.'],
['TI','Transport Index.'],
['TQC','CPQR Technical Quality Control guidelines.']
]
};
