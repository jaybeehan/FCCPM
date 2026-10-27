/* Notes part C: ethics & legal, research & clinical trials, cost-benefit / admin */

NOTES.push({
id: 'ethics', group: 'Legal & ethics', icon: '⚖️', title: 'Ethics, legal & professionalism',
summary: 'Historical codes, COMP code of ethics, TCPS2, scope of practice, legal vs ethical, AHS policies, whistleblowing, impaired colleagues, conflicts of interest, AI ethics, and worked dilemmas.',
html: `
<h2>How to approach an ethics question</h2>
<ol>
<li><b>Clarify the facts</b> — who, what, what's at stake; don't assume bad intent.</li>
<li><b>Identify the ethical issue(s)</b> and the principles in tension (autonomy, beneficence, non-maleficence, justice; honesty/integrity; confidentiality; competence).</li>
<li><b>Identify the stakeholders</b> — patient first, then staff, institution, profession, public.</li>
<li><b>Is it legal / within policy?</b> Legal ≠ ethical (Serago: law sets the floor, ethics asks more). Check licence conditions, AHS policy, professional codes.</li>
<li><b>Options</b>: talk to the person first (assume good faith) → manager / department head → formal channels (ethics consult, AHS Ethics Consultation Service, compliance, whistleblower office) → external body (CNSC, regulatory college).</li>
<li><b>Act, document, follow up</b>; consider system-level fixes (policy, training) so it doesn't recur.</li>
</ol>
<div class="callout tip"><strong>Escalation ladder phrase:</strong> "I'd start with a private conversation, assume good intent, and escalate proportionally — supervisor, department head, then formal processes — documenting each step. Patient safety overrides collegiality: if there's imminent harm I stop the activity immediately."</div>

<h2>Historical foundations</h2>
<div class="table-wrap"><table>
<tr><th>Document</th><th>Year</th><th>Key idea</th></tr>
<tr><td><b>Nuremberg Code</b></td><td>1947</td><td>Voluntary informed consent is absolutely essential; right to withdraw; risk proportional to benefit (response to Nazi experiments).</td></tr>
<tr><td><b>Universal Declaration of Human Rights</b></td><td>1948</td><td>Dignity, no torture or cruel treatment.</td></tr>
<tr><td><b>Declaration of Helsinki</b> (WMA)</td><td>1964 (revised many times)</td><td>Physician-researchers' duties; REB review; patient welfare over science; placebo limits.</td></tr>
<tr><td><b>Belmont Report</b></td><td>1978/79</td><td>Three principles: <b>respect for persons</b> (autonomy, informed consent), <b>beneficence</b> (maximize benefit, minimize harm), <b>justice</b> (fair selection and distribution). Prompted by Tuskegee.</td></tr>
<tr><td><b>TCPS2</b> (Tri-Council Policy Statement, Canada; 2010, updated 2018/2022)</td><td>—</td><td>Core principles: <b>respect for persons, concern for welfare, justice</b>; REB review proportional to risk; consent; privacy; equipoise.</td></tr>
</table></div>
<ul>
<li><b>Clinical equipoise</b>: genuine uncertainty in the expert community about which arm is better — required for an ethical RCT.</li>
<li><b>Therapeutic misconception</b>: participants believe research procedures are designed for their personal benefit. Consent must be clear that randomization isn't individualized care.</li>
</ul>

<h2>COMP Code of Ethics (paraphrased themes)</h2>
<ul>
<li>Primary obligation to patients' welfare and safety; respect for dignity and autonomy.</li>
<li>Competence: practise only within your competence; maintain it (CPD, MOC with CCPM).</li>
<li>Integrity and honesty in research and professional conduct; no fabrication, falsification, plagiarism.</li>
<li>Confidentiality of patient information (FOIP/HIA in Alberta).</li>
<li>Avoid and disclose conflicts of interest.</li>
<li>Respect colleagues; mentor trainees; report unethical or incompetent practice through proper channels.</li>
<li>Responsibility to the public: communicate radiation risk accurately; contribute to the profession.</li>
<li>Comply with law and regulation.</li>
</ul>
<p>Related: <b>AAPM Code of Ethics</b> (TG-109, 2009; updated by TG-159-style guidance), which has explicit sections on conflict of interest, research, education, and dealing with vendors. <b>AHS Code of Conduct</b> (respect, accountability, transparency, engagement, safety, learning, performance) and <b>AHS Ethics Framework</b>.</p>

<h2>Scope of practice</h2>
<ul>
<li>Medical physics is <b>not a regulated health profession</b> in most provinces (Ontario/Quebec have different structures). No protected title for "medical physicist" in Alberta — credentialing is via <b>CCPM membership/fellowship</b> and employer requirements.</li>
<li><b>COMP scope of practice (2015)</b> statement: MPs are responsible for physical aspects of radiation therapy, imaging, NM and radiation safety; patient-facing quality and safety; education and research.</li>
<li>Arguments for regulation (protected title, standards, public accountability) vs against (small profession, cost, CCPM already credentials). Expect: "Should medical physics be a regulated profession?"</li>
<li>Scope creep scenarios: dosimetrist asked to approve plans, RTT doing physics QA, RO asking physicist to contour or prescribe → define roles, use delegation with training and supervision, document; supervision levels (direct, indirect, general).</li>
<li>AAMD/dosimetrist scope: plan generation under physicist supervision; physicist retains responsibility for physics QA.</li>
</ul>

<h2>Legal framework (Alberta / Canada)</h2>
<ul>
<li><b>Health Information Act (HIA)</b> (Alberta) — custodian obligations, privacy breaches reported to OIPC and affected individuals. <b>FOIP</b> for public bodies.</li>
<li><b>Alberta Evidence Act s.26.1</b> — apology not admissible as admission of liability.</li>
<li><b>Public Interest Disclosure (Whistleblower Protection) Act</b> (Alberta 2013) — protects employees reporting wrongdoing (danger to life/health, gross mismanagement); disclose to designated officer or Public Interest Commissioner.</li>
<li>Negligence: duty of care, breach of standard, causation, damages. Standard = what a reasonable, prudent medical physicist would do (professional guidance documents like CPQR/AAPM TGs define the standard).</li>
<li>Employment/union: HSAA (Health Sciences Association of Alberta) represents many AHS physicists.</li>
<li>NSCA offences: individuals can be prosecuted; licensee responsible for workers' compliance.</li>
<li><b>Vanessa's Law</b> (2014): mandatory hospital reporting of serious ADRs and medical-device incidents.</li>
<li>Medical devices: Health Canada licenses devices (Class I–IV); software as a medical device; in-house software/devices and the "health institution exemption" debate.</li>
</ul>

<h2>Classic ethics dilemmas (worked)</h2>
<details><summary>A colleague appears impaired at work (alcohol/drugs)</summary>
<p>Patient safety first: remove them from clinical tasks now, privately and respectfully; involve manager; AHS Fitness to Work / Employee &amp; Family Assistance; don't diagnose; document facts. Compassion — addiction is an illness; return-to-work plan. Escalate if repeated.</p></details>
<details><summary>Grad student fabricated/beautified data; or your supervisor asks you to drop outliers</summary>
<p>Research integrity (TCPS2, Tri-Agency Framework on Responsible Conduct of Research). Talk to them; explain consequences; if not corrected, report to the university research integrity office. Distinguish honest error from misconduct. Mentor — but don't cover it up.</p></details>
<details><summary>Vendor offers trips / gifts / consulting</summary>
<p>Conflict of interest — AHS COI policy, AAPM code: disclose, decline personal benefits, procurement must be fair (RFP with transparent scoring). Site visits paid by the institution, not the vendor, or disclosed and approved.</p></details>
<details><summary>COMP position statement you disagree with / you're asked to sign a statement</summary>
<p>Professional bodies speak for members; engage through channels (comment period, committee, letter). Respect democratic process; personal statements must be clearly personal.</p></details>
<details><summary>An RO asks you to approve a plan that doesn't meet constraints, or to hurry because "patient is waiting"</summary>
<p>Clinical judgment belongs to the RO, physics integrity to you. Document concerns, offer alternatives, escalate if a safety issue (not just preference). Never sign off on something you believe unsafe.</p></details>
<details><summary>Patient asks you which treatment centre is best / whether to get protons in the US</summary>
<p>Provide facts within your expertise; refer clinical decisions to the RO; respect autonomy; avoid undermining colleagues; mention out-of-country approval process.</p></details>
<details><summary>Social media: colleague posts patient images / you see misinformation</summary>
<p>Privacy breach (HIA) — ask them to remove, report per policy. Misinformation: respond professionally, factually, or via official channels; avoid personal attacks.</p></details>
<details><summary>Resource allocation: one linac down, who gets treated?</summary>
<p>Justice: transparent prioritization (palliative emergencies, radical with radiobiological gaps — head and neck, cervix; compensate for gaps), clinical leads decide, communicate, extend hours. See IT/downtime notes.</p></details>

<h2>AI ethics in radiology/RT</h2>
<ul>
<li>Multi-society statement (Geis et al., 2019, "Ethics of AI in radiology"): data ethics (consent, privacy, ownership, bias), algorithm ethics (transparency, explainability, robustness), practice ethics (responsibility remains with humans, automation bias).</li>
<li>Bias from non-representative training data; performance drift; vendor black boxes → local commissioning, ongoing monitoring, human in the loop.</li>
<li>Who is liable when AI contour is wrong? The clinician who accepts it — so QA processes and training are essential.</li>
</ul>
<p class="src">Sources: SUMMARY_Ethics; Ethics Question Framework; Jay's notes (Belmont, TG-109, TG-159, AHS code/ethics framework, whistleblower act, Evidence Act); COMP scope of practice 2015; Geis 2019; Serago (legal vs ethical); FCCPM Questions.docx.</p>
`});

NOTES.push({
id: 'trials', group: 'Clinical issues', icon: '🔬', title: 'Research & clinical trials',
summary: 'Trial phases, design, REB and Health Canada CTA, physics QA in trials (TROG 02.02 lesson, IROC credentialing), starting a trials program, CPGs.',
html: `
<h2>Trial phases</h2>
<div class="table-wrap"><table>
<tr><th>Phase</th><th>Question</th><th>Typical size</th></tr>
<tr><td>0</td><td>Pharmacodynamics, microdosing</td><td>~10</td></tr>
<tr><td>I</td><td>Safety, dose escalation (MTD; 3+3 design)</td><td>20–80</td></tr>
<tr><td>II</td><td>Efficacy signal, toxicity; single-arm or randomized phase II</td><td>100–300</td></tr>
<tr><td>III</td><td>Randomized comparison vs standard of care; changes practice</td><td>Hundreds–thousands</td></tr>
<tr><td>IV</td><td>Post-market surveillance; long-term effects</td><td>Large</td></tr>
</table></div>
<p>RT-specific: technology often adopted without phase III data (IMRT, SBRT). <b>R-IDEAL</b> framework for evaluating RT technology: Stage 0 (prediction/ planning studies), 1 (first-in-human), 2a (development), 2b (exploration), 3 (assessment/RCT), 4 (long-term). Use to argue level of evidence for MR-linac, FLASH, protons.</p>

<h2>Design concepts</h2>
<ul>
<li>Endpoints: primary (OS, PFS, local control, toxicity) vs surrogate; superiority vs <b>non-inferiority</b> (margin) vs equivalence.</li>
<li>Randomization, stratification, blinding (hard in RT), intention-to-treat vs per-protocol.</li>
<li>Power: α (5%), β (20% → 80% power), effect size → sample size.</li>
<li>Pragmatic vs explanatory trials; registries and real-world evidence as complements.</li>
<li>Combining RT with drugs (immunotherapy): sequencing, dose/fractionation, overlapping toxicity, abscopal endpoints.</li>
</ul>

<h2>Regulatory & ethics process</h2>
<ol>
<li>Protocol + investigator brochure; funding.</li>
<li><b>REB</b> approval (Alberta: HREBA Cancer Committee) — risk/benefit, consent form, privacy.</li>
<li><b>Health Canada Clinical Trial Application (CTA)</b> for investigational drugs; <b>Investigational Testing Authorization (ITA)</b> for unlicensed medical devices.</li>
<li>Institutional approvals (Alberta Cancer Research Ethics, operational approval, contracts, data-sharing agreements).</li>
<li>Registration (ClinicalTrials.gov).</li>
<li>GCP (ICH E6) training; monitoring; adverse event reporting (SAEs); DSMB for larger trials.</li>
</ol>

<h2>Physics role and the importance of QA</h2>
<ul>
<li><b>Peters et al., JCO 2010 (TROG 02.02 HeadSTART)</b>: H&amp;N chemoRT ± tirapazamine — ~25% of plans had protocol deviations; major deviations (12%) had 20% worse 2-yr OS (50% vs 70%). Poor-quality RT can mask a trial result; low-accrual centres had more deviations.</li>
<li><b>Fairchild et al. 2013</b> (meta-analysis of RT QA in trials): protocol deviations associated with worse outcomes — QA is essential.</li>
<li><b>IROC</b> (Imaging and Radiation Oncology Core, NCI): credentialing — facility questionnaire, benchmark cases, <b>phantom irradiations</b> (H&amp;N, lung, liver, spine, prostate), TLD/OSLD output audits, pre-/on-treatment case reviews. TRIAD for data/imaging submission.</li>
<li>Canadian groups: <b>CCTG</b> (Canadian Cancer Trials Group, Kingston), Ontario RT QA, CPQR.</li>
<li>Physics responsibilities: credentialing, protocol-compliant planning, dosimetry QA, data submission, technology/feasibility input, physicist co-investigators, physics trials (e.g., adaptive, motion management).</li>
</ul>

<h2>Starting a clinical trials program (scenario)</h2>
<ul>
<li>Strategy: alignment with institution's mission, patient population, competitive advantage; choose cooperative-group trials (CCTG, NRG) vs investigator-initiated.</li>
<li>People: trial coordinators, research nurses, data managers, physics/dosimetry time, biostatistics, regulatory specialist.</li>
<li>Infrastructure: credentialing, data systems, REB pathway, contracts office, budget (per-patient payments rarely cover cost).</li>
<li>Metrics: accrual, deviations, publications; patient engagement.</li>
<li>Barriers: workload/clinical pressure, funding, small catchment (rural).</li>
</ul>

<h2>Clinical practice guidelines (CPGs)</h2>
<ul>
<li>Alberta Health Services CancerControl Alberta guidelines; Ontario Health (CCO) program in evidence-based care; ASTRO/ESTRO guidelines; NCCN.</li>
<li>IOM standards for trustworthy guidelines: transparency, COI management, multidisciplinary panel, systematic review, rating strength of evidence (GRADE), external review, updating.</li>
<li>Physics input on technical aspects (dose constraints, technique, QA).</li>
</ul>
<p class="src">Sources: Clinical Trials SUMMARY (Fairchild 2013, Peters 2010); Clinical Research Framework; Notes to Share – Shima (R-IDEAL, trial basics, immunotherapy trial design); FCCPM Questions.docx.</p>
`});

NOTES.push({
id: 'costben', group: 'Admin & economics', icon: '💰', title: 'Cost-benefit, staffing & administration',
summary: 'Health economics (CUA/CEA/CBA, QALY, ICER, CADTH), purchasing/RFP, staffing models, budget cuts, rural centres, proton business case, value of medical physics.',
html: `
<h2>Health economics vocabulary</h2>
<ul>
<li><b>Cost-minimization</b>: outcomes equal → cheapest wins.</li>
<li><b>Cost-effectiveness analysis (CEA)</b>: cost per natural unit (life-year gained, toxicity avoided).</li>
<li><b>Cost-utility analysis (CUA)</b>: cost per <b>QALY</b> (quality-adjusted life-year = years × utility 0–1). Preferred by <b>CADTH</b> (now Canada's Drug Agency) guidelines.</li>
<li><b>Cost-benefit analysis (CBA)</b>: everything in dollars (including outcomes) — net benefit.</li>
<li><b>ICER</b> = ΔCost / ΔQALY. Canadian informal willingness-to-pay thresholds ~$50,000/QALY (often quoted $50–100k).</li>
<li>CADTH guidance (2017, 4th ed.): reference case discount rate <b>1.5%</b>/yr for costs and outcomes, sensitivity analyses at 0% and 3% (older guidance: 5%); perspective = publicly funded health system; time horizon long enough to capture differences. Probabilistic sensitivity analysis, cost-effectiveness acceptability curves; <b>Markov models</b> for health states.</li>
<li><b>Value</b> in health care = outcomes that matter to patients ÷ cost (Porter). Group's version: value = (outcomes + structure + process) / cost.</li>
<li><b>Health technology assessment (HTA)</b>: clinical effectiveness, safety, cost, ethics, organizational and patient perspective (e.g., CADTH 2017 HTA on proton therapy; Ontario Health HTA).</li>
</ul>
<div class="callout tip"><strong>Structure for any "should we buy X?" question</strong>: clinical need (patient numbers, indications, evidence level) → options (including do-nothing and out-of-province) → costs (capital, construction, service ~8–10% capital/yr, staff, training, opportunity cost, decommissioning) → benefits (outcomes, toxicity, throughput, research, recruitment) → risks (vendor viability, staffing, technical) → stakeholder engagement → recommendation with phasing and metrics. See <a href="#/frameworks">frameworks</a>.</div>

<h2>Worked examples from the literature</h2>
<ul>
<li><b>Alberta proton business case (Smith 2018)</b>: ~$40M capital (single-room), ~$4.8M/yr operating; ~15 Albertans/yr sent out-of-country at ~$240k each; capacity ~250 patients/yr; if ~150 out-of-province patients at ~$45k each funded the rest, break-even ~8 years.</li>
<li><b>Ontario HTA</b>: proton therapy in Ontario ~$48k/patient vs ~$327k out-of-country; ~6% of RT patients potentially eligible (Safavi 2022); ~4,500/yr in Canada.</li>
<li><b>MRgRT (Schumacher, BJR 2020)</b>: Markov model — MRgRT cost-effective in prostate if it reduces toxicity sufficiently (toxicity-reduction threshold) or allows fewer fractions.</li>
<li><b>Gamma Knife vs linac SRS (Potrebko 2018)</b>: GK lower normal-brain dose for multiple mets; cost-per-patient depends on throughput and replacement Co-60.</li>
<li>Hypofractionation is the biggest cost lever in RT (fewer visits; FAST-Forward 26 Gy/5 fx; prostate 60/20 or SBRT 36.25/5).</li>
</ul>

<h2>Staffing models</h2>
<ul>
<li>Historical: <b>1 MP per ~260 new patients</b> (Battista et al., Ontario 2012 guidance); also 1 linac per ~450 courses, 1 dosimetrist per ~250, 1 RTT per ~90 courses (from rural-centre notes).</li>
<li><b>COMP 2021 staffing model</b>: activity-based grid — FTE from equipment counts and complexity (each linac, CT-sim, brachy program, SRS, adaptive), plus clinical, academic and admin activities. Physics assistant ratio ~0.33 PA per MP.</li>
<li>ESTRO-QUARTS, IAEA staffing models, AAPM Report 301 (staffing) as references; ACR-ASTRO practice parameters.</li>
<li>Arguments when staffing is cut: incident data (Ottawa ortho — understaffing), FMEA (physics checks lowest O but highest S), workload metrics, lost academic output, burnout and retention.</li>
</ul>

<h2>Budget cut scenarios (e.g., "cut 8% from physics")</h2>
<ol>
<li>Understand: one-time vs ongoing; why; what flexibility; who decides.</li>
<li>Data: budget breakdown (salaries ~80%+, service contracts, travel/CPD, equipment).</li>
<li>Protect patient safety first; risk-assess each option (FMEA mindset).</li>
<li>Options: renegotiate service contracts (multi-year, in-house first-line service), defer non-critical replacement, attrition rather than layoffs, reduce travel (virtual conferences), share resources provincially, efficiency (automation, standardization), revenue (research grants, teaching, consulting, out-of-province patients).</li>
<li>What not to cut: QA, staffing below safe levels, training of new tech, ILS.</li>
<li>Communicate transparently with staff; involve them; communicate risk to leadership in writing.</li>
</ol>

<h2>Academic program / residency being cut</h2>
<ul>
<li>Value of academic MPs: CAMPEP residency trains the future workforce (CAMPEP sponsors: AAPM, ACR, COMP, RSNA, ASTRO; 5-yr accreditation), recruitment and retention, innovation, research funding, clinical trial participation, institutional reputation.</li>
<li>Propose alternatives: protected time tied to deliverables, grants to offset salaries, joint university appointments.</li>
</ul>

<h2>Purchasing equipment (RFP process)</h2>
<ol>
<li>Needs assessment and business case (volume, indications, replacement cycle ~10–12 yr for linacs).</li>
<li>Stakeholder committee (RO, MP, RTT, IT, biomed, facilities, procurement, finance).</li>
<li><b>RFP</b> per public procurement law (trade agreements; transparent weighted scoring: technical, clinical, service, cost, training, integration).</li>
<li>Site visits, reference calls; vendor demos; avoid COI.</li>
<li>Contract: acceptance criteria, uptime guarantees (~95–98%), service, software upgrades, training, cybersecurity, decommissioning.</li>
<li>Implementation: construction/shielding, licensing (CNSC licence to construct/operate for Class II), commissioning, staff training, clinical go-live with conservative start.</li>
</ol>

<h2>Rural / satellite centre</h2>
<ul>
<li>Need: population ~100k with incidence ~600/100k → ~600 new cancers; ~50% need RT; growth ~2.5%/yr; travel burden and equity (Indigenous communities).</li>
<li>Sizing: 1 linac per ~450 courses; 2 linacs minimum (redundancy); CT-sim; physics staff (minimum 2 for coverage/independent checks — can't have a lone physicist), remote planning/physics support from the hub.</li>
<li>Risks: recruitment/retention, isolation, lower volume per technique (competency), IT dependence, QA standardization, emergency coverage.</li>
<li>Mitigation: hub-and-spoke model, shared TPS/OIS, standardized protocols, remote peer review, rotation of staff, telehealth.</li>
</ul>

<h2>Value of medical physics (why fund us?)</h2>
<ul>
<li>Safety (incident prevention, QA), quality (plan quality, technology), efficiency (automation, workflow), innovation (research, clinical trials), education.</li>
<li>Medical Physics 3.0 (AAPM): from equipment-centred compliance to patient-centred value; physicists in clinics and multidisciplinary teams.</li>
<li>Communicate value to admins in their language: risk avoided, throughput, patient experience, costs.</li>
</ul>
<p class="src">Sources: Cost Benefit SUMMARY; Notes to Share – Shima (CADTH, staffing, value); Common FCCPM questions (budget cut, academic program, rural centre); Proton Centre and Rural Centre folders; Cost Benefit &amp; Competing Tech Framework.</p>
`});
