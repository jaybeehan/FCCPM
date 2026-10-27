/* Notes part A: the exam, interview questions, CNSC regulatory framework */
var NOTES = [];

NOTES.push({
id: 'exam', group: 'The exam', icon: '🎓', title: 'Exam format & what examiners want',
summary: 'Structure of the FCCPM oral, how it is marked, what "excellence" means, and how to approach each question category.',
html: `
<h2>Format of the oral examination</h2>
<p>The Fellowship exam is an oral exam in front of a CCPM panel. The version described in the group's materials (and confirmed by a recent candidate's exam letter) is <b>90 minutes</b>:</p>
<div class="table-wrap"><table>
<tr><th>Part</th><th>Time</th><th>What happens</th></tr>
<tr><td>Project presentation</td><td>15 min</td><td>Present one of your submitted projects (up to two may be submitted, at least one with clinical implications).</td></tr>
<tr><td>Questions on project &amp; submitted material</td><td>~30 min</td><td>Project, CV, evidence of excellence, leadership, clinical impact. "Did you run into obstacles rolling this out? How did you overcome them?"</td></tr>
<tr><td>Standardized questions</td><td>~45 min</td><td><b>5 questions on 5 of 6 topics</b>: Radiation Protection (or MRI Safety), Clinical Issues, Emerging Technologies, Legal/Ethical Issues, Cost/Benefit Analysis, Competing Modalities.</td></tr>
</table></div>
<div class="callout info"><strong>Arithmetic that matters:</strong> 45 minutes ÷ 5 questions ≈ <b>9 minutes each</b>, including follow-ups. Practise giving a structured 3–4 minute first answer that leaves room for the panel to probe.</div>
<p>Practical notes from a candidate's exam letter: bring photo ID, arrive at least 10 minutes early, and treat exam content as strictly confidential.</p>

<h2>History of the format (Chief Examiner reports)</h2>
<ul>
<li><b>Jan 2016:</b> candidates must demonstrate <em>"excellence"</em> in clinical or research service (see Regulations section E.1). Up to two projects (one with clinical implications) are submitted; one is presented. The talk should be a <b>hybrid</b>: a scientific presentation of the work <em>and</em> a demonstration of your role, the decisions you made to move it forward, and how completion positively impacted patient care. A standardized question set follows.</li>
<li><b>2016 change:</b> more time on the project and submitted materials, fewer questions — candidates are evaluated on more than a 90-minute performance.</li>
<li><b>Oct 2018 (Renée Larouche):</b> the exam was restructured for all specialties to give more value to projects, submitted materials and CV; question topics were assigned to teams who built a growing question database.</li>
</ul>

<h2>Marking criteria (2014 "Expectations" and 2018 summary)</h2>
<h3>Presentation &amp; communication</h3>
<ul>
<li>Well organized; objective stated; methods explained; results and conclusions tied back to the objective.</li>
<li>Slides well laid out, good visuals; points made without drowning in detail.</li>
<li>Relevance to your department, clinic and the scientific community is articulated; original contribution or advancement.</li>
<li>Depth shown through answers; you understand the <b>limitations</b> of what you presented.</li>
</ul>
<h3>Submitted material / project / CV</h3>
<ul>
<li>Original scientific contribution and/or ability to <b>initiate, lead and complete</b> a substantial clinical project.</li>
<li>Your role clearly explained; insight into clinical relevance; results implemented in the program and beyond.</li>
<li>Evidence of sound judgment and leadership (teamwork, supervision); broad clinical experience.</li>
</ul>
<h3>Radiation protection (or MRI safety)</h3>
<ul>
<li>Knows the law on legal limits and current changes in federal regulations for <b>Class II facilities</b>.</li>
<li><b>Understands the numbers</b> — what limits mean in typical clinical situations, routine exposures and accidents.</li>
<li>Can design and articulate an <b>action plan</b> for an unexpected exposure; understands the <b>hierarchy and reporting structure</b> of a radiation protection program/committee under CNSC legislation.</li>
<li>Shows sensitivity to worker/patient/public concerns <b>without inflaming fears</b>.</li>
</ul>
<h3>Emerging technologies / general medical physics</h3>
<ul>
<li>In-depth knowledge of the specialty; sees beyond your own clinic and equipment.</li>
<li>Forward thinking; awareness goes far beyond personal experience; current with literature and conferences.</li>
</ul>
<h3>Legal / ethical</h3>
<ul><li>Limits and range of the MP scope of practice <em>and</em> co-professionals' scopes (physicians, MRTs, nurses, administrators).</li>
<li>Patients' rights, role of ethics boards, meaning of informed consent.</li></ul>
<h3>Cost/benefit</h3>
<ul><li>Understands the whole process; knows local, provincial, national and international guidelines; weighs patient benefit against limited healthcare resources; presents <b>structured arguments</b>.</li></ul>
<h3>Competing modalities</h3>
<ul><li>Analytically presents advantages/disadvantages of equipment, procedure or protocol; weighs and prioritizes; <b>reaches a decision</b>.</li>
<li>Knows alternative treatments/imaging and the disease/anatomy; understands the relative importance of your specialty among competing modalities.</li></ul>
<h3>Communication (applies to everything)</h3>
<ul>
<li>Understands the question; <b>seeks clarification</b> where needed.</li>
<li>Focuses on the question — no superfluous or tangential answers.</li>
<li>Does not divert away from a question due to insufficient knowledge; can <b>accept responsibility for not knowing</b>.</li>
<li>Speaks articulately in complete, original sentences; does not just recite catch phrases.</li>
<li>Can act as an <b>ambassador for the profession</b>. The overarching theme in the group's notes: <em>"If put on the spot, would you represent the profession well?"</em></li>
</ul>

<h2>How to answer — universal structure</h2>
<ol>
<li><b>Clarify the scenario</b> (size of centre, who is asking, what has already happened, is a patient on the table?). Examiners reward good clarifying questions.</li>
<li><b>Safety first / immediate actions</b> — stop the beam, secure the area, protect people.</li>
<li><b>Stakeholders &amp; notifications</b> — RO, RTT manager, head of physics, RSO, admin, CNSC, patient.</li>
<li><b>Evidence and rules</b> — cite the regulation, guideline, task group, code of ethics or paper by name.</li>
<li><b>Options weighed → a clear decision.</b> Don't sit on the fence.</li>
<li><b>Follow-up</b> — investigation, RCA, corrective action, education, close the loop, share lessons.</li>
<li>Ask yourself on <em>every</em> question: <b>"Is there a radiation safety / CNSC component here?"</b> (advice from a fellow, Heather).</li>
</ol>
<p>See the <a href="#/frameworks">Answer frameworks</a> page for question-type-specific templates.</p>

<h2>Advice from fellows and the study group</h2>
<ul>
<li>You control a good chunk of the exam — <b>your presentation. Perfect it.</b> Only put on a slide what you can answer anything about (Atiyah).</li>
<li>Expect questions on your submitted documents: obstacles, how you overcame them, what you would do differently.</li>
<li>Use the vocabulary: <em>root cause analysis, systems approach, psychological safety, just/blame-free culture, FMEA, ALARA, defence in depth, scope of practice</em>.</li>
<li>Know your org chart and who the Applicant Authority, RSO and committees are in your own institution.</li>
<li>Know <b>recent events</b>: CNSC column in InterActions, ViewRay bankruptcy, ransomware attacks on RT departments, Lifecycle licensing, RPR amendments (2021), Class II regs review, COMP Code of Ethics update, chart-check standard working group.</li>
<li>Don't forget: interview-type questions ("Why FCCPM?", "MP as ambassador"), project questions, general clinical work on your CV, statistics, general physics.</li>
</ul>

<h2>Topic list the study group worked from (2024)</h2>
<div class="table-wrap"><table>
<tr><th>Area</th><th>Sub-topics</th></tr>
<tr><td>Radiation protection</td><td>Safety Code 35, CNSC documents, MRI safety</td></tr>
<tr><td>Adverse events</td><td>NSIR-RT, ASTRO RO-ILS</td></tr>
<tr><td>Cost/benefit</td><td>patients per site, cost of modalities, resources, RFPs, change of vendor</td></tr>
<tr><td>Current topics</td><td>ViewRay bankruptcy, OSLD (Landauer), cyber attack (AAPM TG-393) &amp; cybersecurity plan, server vs cloud, IHE-RO &amp; CodeX/RTTD, re-irradiation (registration, dose accumulation), patient–physics communication, pregnant patient, patient shielding in diagnostic imaging</td></tr>
<tr><td>Emerging technologies</td><td>Proton/carbon, FLASH, big data, automation, immunotherapy, theranostics, SBRT (oligomets, ventricular tachycardia), PET-MR, dual-energy &amp; photon-counting CT, GRID/lattice, mixed electron–photon (MBRT), intensity-modulated brachy</td></tr>
<tr><td>Competing modalities</td><td>Adaptive RT (CT, MR, PET-based: MR-Linac, Halcyon/Ethos, Radixact Synchrony, RefleXion); SRS/SBRT (GK vs linac vs CyberKnife); IORT &amp; electronic brachy</td></tr>
<tr><td>Legal &amp; ethics</td><td>clinical trials (de-escalation/observation), research, staffing, regulation, scope of practice, strategic planning, EDI</td></tr>
<tr><td>Reading list</td><td>Seminars in RO, <em>Parallel Opposed</em>, Point/Counterpoint (Med Phys), MPPGs, Medical Physics 3.0, InterActions &amp; AAPM Newsletter</td></tr>
</table></div>
<p class="src">Sources: Exam Expectations (McCurdy, 2014); Summary of F Expectations 2018; Chief Examiner Reports (InterActions 2016–2018); "Topics" doc; Jay's notes; FCCPM Questions.docx.</p>
`});

NOTES.push({
id: 'interview', group: 'The exam', icon: '🗣️', title: 'Interview-type questions & "Why FCCPM?"',
summary: 'Model answers for "What does FCCPM mean to you?", "Why should you be a Fellow?", "What is a medical physicist?", and the value of medical physics.',
html: `
<h2>What does FCCPM mean to you?</h2>
<p>Model points (from Lesley's and Matt's prepared answers):</p>
<ul>
<li><b>MCCPM</b> designates <em>competence</em> in the specialized field of medical physics.</li>
<li><b>Fellowship</b> recognizes <em>excellence</em> at a higher level, where medical physics is integrated within the healthcare system — not just clinical service, but leadership and advancing the profession. A Fellow can:
 <ul><li>relate to and work with other professions (RO, RTT, nursing) to build, develop and improve treatment programs;</li>
 <li>relate to administration by advising on high-value capital equipment and evolving infrastructure;</li>
 <li><b>promote and enhance the profession</b> through professional groups (COMP, provincial associations) and public outreach.</li></ul></li>
</ul>

<h2>Why should you be given FCCPM?</h2>
<p>Structure your answer as: <b>(1) excellence in a clinical program you led → (2) breadth of contribution → (3) teaching/mentorship → (4) service to the profession → (5) what's next.</b></p>
<ul>
<li>Example (Lesley): linac-based SRS program development "embodies the strengths the Fellowship evaluates" — multidisciplinary development, navigating administration, negotiating financial, human and time resources; leading ortho, breast and bolus programs; mentoring residents and physicists; teaching feedback; involvement with the provincial association and COMP.</li>
<li>Example (Matt): excellence in the ocular brachytherapy program; contributions to GK, education (RT degree program); MP ambassador; next phase is provincial/national contribution (COMP Professional Affairs Committee, provincial association).</li>
<li>Close with: the designation as a symbol of professional stature and an endorsement for contributing on a larger stage.</li>
</ul>

<h2>What is a medical physicist? (30-second version)</h2>
<blockquote>A medical physicist applies physics to medicine — MRI, diagnostic imaging, nuclear medicine, or most commonly radiation therapy. As a radiation oncology physicist I work in a multidisciplinary team to make sure treatments are delivered as safely and accurately as possible: how machines are calibrated, how doses are calculated, how patients are imaged and immobilized, and how we evaluate and learn from treatments. I also bring new technologies and techniques into the clinic, which means investigation, development and teaching so the team understands their limits and capabilities.</blockquote>

<h2>What are you most proud of?</h2>
<ul>
<li>Relationships and trust built with other disciplines (e.g., ophthalmology and ROs who trust your opinion) — clinical success flows from them.</li>
<li>Mentorship and leading by example; humility as an under-recognized leadership competency.</li>
<li>Professional advocacy — keeping difficult conversations (workload, compensation) focused on solutions.</li>
</ul>

<h2>What value does medical physics bring to the clinic?</h2>
<p>Start by aligning with the institutional vision/mission (e.g., AHS: <em>"Healthy Albertans. Healthy Communities. Together."</em> and values <b>C.A.R.E.S.</b> — Compassion, Accountability, Respect, Excellence, Safety).</p>
<div class="table-wrap"><table>
<tr><th>Domain</th><th>Examples</th></tr>
<tr><td>Quality &amp; safety</td><td>Acceptance, commissioning, calibration, routine QA; TPS commissioning; plan checks and weekly chart checks; direct planning for SRS/HDR</td></tr>
<tr><td>Special procedures</td><td>Required presence for SBRT, SRS, HDR, TBI/TSET, IORT</td></tr>
<tr><td>Radiation safety</td><td>Radiation safety committee, CNSC licence conditions, safety culture</td></tr>
<tr><td>Communication</td><td>Bridges RO, RTT, nursing, IT, administration; consults on clinical/technical issues</td></tr>
<tr><td>Program development</td><td>Project management of major purchases, RFPs, new procedures with ROs</td></tr>
<tr><td>Education</td><td>Graduate students, residents (MP and RO), RTTs — attracts the best trainees and staff</td></tr>
<tr><td>Research</td><td>Immediate clinical impact (efficiency, new tools), clinical-trial participation, grant funding, new positions and equipment</td></tr>
</table></div>

<h2>The future role of the medical physicist / Medical Physics 3.0</h2>
<ul>
<li><b>Medical Physics 3.0</b> is an AAPM initiative to broaden the scope of medical physics and find new ways for physicists to bring value — "physics for every patient". Built on the premise that physicists are scientific agents of precision and innovation in medicine.</li>
<li>Road map pillars: <b>expertise</b> (clinical, administrative leadership, scientific, education), <b>visibility</b>, <b>sustainability</b>, <b>expansion</b>.</li>
<li>Evolving areas: precision/personalized medicine, advanced imaging, QA and safety, AI and machine learning (commissioning and oversight of AI is a natural physics role), research, education, regulatory compliance and policy.</li>
<li>Related: AAPM/COMP "Redefining and reinvigorating the role of physics in clinical medicine" (Samei et al., Med Phys 2018) is in the Drive folder.</li>
</ul>

<h2>"Medical physicist as ambassador"</h2>
<p>Examiners explicitly assess whether you "can act as ambassador for our profession". Show it by: explaining physics in lay language, calming (not inflaming) radiation fears, representing MP on committees, outreach (e.g., International Day of Medical Physics, <b>November 7</b>, set by IOMP), and advocating for safe staffing.</p>
<p class="src">Sources: Interview type questions.docx; Sample for Why FCCPM (FCCPM Questions.docx); Safety, ethics, legal.docx; Jay's notes.</p>
`});

NOTES.push({
id: 'radreg', group: 'Radiation protection', icon: '⚖️', title: 'CNSC regulatory framework (Class II)',
summary: 'NSCA and its regulations, dose limits, action levels, licensing pathway and application sections, inspections, ACR, enforcement, reporting obligations, RSO certification.',
html: `
<h2>Who regulates what</h2>
<ul>
<li><b>CNSC</b> (Canadian Nuclear Safety Commission) — federal regulator established by the <b>Nuclear Safety and Control Act (NSCA)</b>. Regulates production, possession, use, transport of nuclear substances and <b>prescribed equipment</b>; focuses on safety of <b>workers, the public and the environment</b>, plus security. Tools: licensing, certification of equipment and RSOs, compliance verification, enforcement.</li>
<li><b>Health Canada</b> — medical device licensing (Medical Devices Regulations): the device is safe/effective <em>for the patient</em> (dose calculation, collision, etc.). CNSC equipment certification is pending until Health Canada approval. <em>"Health Canada makes sure the machine is safe for patients; CNSC makes sure it is safe in terms of radiation safety."</em></li>
<li><b>Provinces</b> — X-ray equipment below CNSC jurisdiction (e.g., Alberta <em>Radiation Protection Act</em>: CT, cabinet X-ray, lasers, dental, whole-body scanners); professional regulation of practitioners through colleges. <b>Safety Code 35</b> (Health Canada, 2008) for large diagnostic X-ray facilities.</li>
<li><b>Transport Canada</b> — Transportation of Dangerous Goods (TDG) Act/Regulations (Class 7 = radioactive), alongside CNSC Packaging and Transport of Nuclear Substances Regulations.</li>
<li>Rough jurisdiction rule from the notes: CNSC regulates radiation-emitting equipment capable of producing nuclear energy (≳1 MeV, i.e., linacs, Co-60, afterloaders, cyclotrons); lower-energy X-ray devices are provincial.</li>
</ul>
<div class="callout info"><strong>"Why not one regulator for everything?"</strong> Pros of a single federal regulator: one body to deal with, consistent guidance, streamlined/consolidated licensing. Cons: one-size-fits-all; less flexibility for province-specific circumstances. Historically radiation was provincial; when the federal regulator was created it took on nuclear substances and higher-energy equipment.</div>

<h2>Regulations made under the NSCA (know the names)</h2>
<ul>
<li><b>General Nuclear Safety and Control Regulations (GNSCR)</b> — general licensee obligations, records (retain at least 1 year unless specified; often 3 years), and <b>reporting (s.29)</b>.</li>
<li><b>Radiation Protection Regulations (RPR)</b> — dose limits, ALARA program, NEWs, action levels, dosimetry, signage, records. Amended effective <b>January 1, 2021</b>.</li>
<li><b>Class II Nuclear Facilities and Prescribed Equipment Regulations</b> (in force May 2000) — licensing of linacs, Co-60 units, afterloaders, irradiators; safety systems; RSO; servicing. Under comprehensive review (2022) to accommodate new technology (mobile IORT linacs, CyberKnife, Tomo, MR-linacs, hadron therapy, FLASH) and possibly add <b>RSO certificate expiry/renewal</b>.</li>
<li><b>Nuclear Substances and Radiation Devices Regulations (NSRDR)</b> — sealed sources, leak tests, survey meter calibration, clearance levels for disposal.</li>
<li><b>Packaging and Transport of Nuclear Substances Regulations</b>.</li>
<li><b>Nuclear Security Regulations</b> (high-activity sealed sources; REGDOC-2.12.3).</li>
<li><b>Administrative Monetary Penalties (AMPs) Regulations</b> — up to <b>$25,000 for an individual</b> and <b>$100,000 for others</b> per violation; not a criminal charge.</li>
</ul>

<h2>What counts as Class II prescribed equipment / facility</h2>
<ul>
<li>Brachytherapy remote afterloaders (HDR/PDR).</li>
<li>Radioactive-source teletherapy machines (Co-60; Gamma Knife).</li>
<li>Particle accelerators capable of producing nuclear energy with beam energy <b>&lt; 50 MeV</b> for particles of mass ≤ 4 amu (and ≤ 15 MeV/amu for heavier particles) — i.e., medical linacs and PET cyclotrons.</li>
<li>Irradiators (not used on humans) above the activity threshold.</li>
<li>Note: a 250 MeV clinical proton accelerator is <b>not</b> technically Class II (Q&amp;A with the RSO).</li>
</ul>

<h2>Dose limits — Radiation Protection Regulations</h2>
<h3>Effective dose (s.13)</h3>
<div class="table-wrap"><table>
<tr><th>Person</th><th>Period</th><th>Limit</th></tr>
<tr><td>Nuclear energy worker (NEW)</td><td>1-year dosimetry period</td><td><b>50 mSv</b></td></tr>
<tr><td>NEW</td><td>5-year dosimetry period</td><td><b>100 mSv</b></td></tr>
<tr><td>Pregnant NEW</td><td>Balance of pregnancy (after informing licensee)</td><td><b>4 mSv</b></td></tr>
<tr><td>Any other person (public, non-NEW staff)</td><td>Calendar year</td><td><b>1 mSv</b></td></tr>
</table></div>
<h3>Equivalent dose (s.14) ✔ verified against current text</h3>
<div class="table-wrap"><table>
<tr><th>Organ</th><th>NEW (1-yr dosimetry period)</th><th>Any other person (calendar year)</th></tr>
<tr><td>Lens of the eye</td><td><b>50 mSv</b> (reduced from 150 mSv in the 2021 amendment)</td><td>15 mSv</td></tr>
<tr><td>Skin (averaged over the 1 cm² receiving the highest dose)</td><td><b>500 mSv</b></td><td>50 mSv</td></tr>
<tr><td>Hands and feet</td><td><b>500 mSv</b></td><td>50 mSv</td></tr>
</table></div>
<h3>Emergencies (s.15) ✔</h3>
<ul>
<li>Normal limits in s.13–14 don't apply to people participating in the control of an emergency, but a licensee asking someone to help must keep them to <b>50 mSv effective / 500 mSv skin</b>, unless they are doing one of these actions:</li>
</ul>
<div class="table-wrap"><table>
<tr><th>Action</th><th>Effective</th><th>Skin</th></tr>
<tr><td>Minimizing dose consequences to the public from a release</td><td>100 mSv</td><td>1,000 mSv</td></tr>
<tr><td>Preventing fatal/life-threatening effects or permanent injury</td><td>500 mSv</td><td>5,000 mSv</td></tr>
<tr><td>Preventing conditions that could significantly affect people and the environment</td><td>500 mSv</td><td>5,000 mSv</td></tr>
</table></div>
<ul><li>Never ask a <b>pregnant</b> worker to take part in emergency control. A person acting <b>voluntarily to save life</b> may exceed the limits. Keep emergency doses ALARA; notify the person and CNSC if a limit may be exceeded.</li></ul>
<h3>When a limit may have been exceeded (s.16) ✔</h3>
<ol>
<li>Immediately notify the person and the Commission.</li>
<li>Remove a NEW from work likely to add to the dose.</li>
<li>Investigate magnitude and cause; take action to prevent recurrence.</li>
<li>Within <b>21 days</b>, report the results (or progress) of the investigation to the CNSC.</li>
<li>Return to work only when authorized by the Commission or a designated officer (s.17), possibly with conditions.</li>
</ol>

<h2>Weighting factors (ICRP 103 values used in the notes)</h2>
<div class="table-wrap"><table>
<tr><th>Radiation weighting w<sub>R</sub></th><th>Tissue weighting w<sub>T</sub></th></tr>
<tr><td>Photons, electrons: 1<br>Protons: 2<br>Alpha, heavy ions: 20<br>Neutrons: continuous function of energy (peaks ≈20 near 1 MeV)</td>
<td>0.12: red bone marrow, colon, lung, stomach, breast, remainder<br>0.08: gonads<br>0.04: bladder, oesophagus, liver, thyroid<br>0.01: bone surface, brain, salivary glands, skin</td></tr>
</table></div>
<p>Gonads dropped from 0.20 (ICRP 60) to 0.08 (ICRP 103) — the basis of the COMP-endorsed move away from routine gonadal shielding.</p>
<ul>
<li><b>Absorbed dose</b> (Gy) → × w<sub>R</sub> → <b>equivalent dose</b> (Sv; used for tissue reactions, skin, lens, extremities) → × w<sub>T</sub> summed → <b>effective dose</b> (Sv; stochastic risk; compares different exposure scenarios).</li>
<li>Worked example: 1 Sv equivalent dose to lung only → effective ≈ 0.12 Sv. Whole-body 1 Sv → effective 1 Sv.</li>
</ul>

<h2>NEWs, action levels and dosimetry</h2>
<ul>
<li><b>NEW</b>: a person who, because of their work with nuclear substances/facilities, has a reasonable probability of receiving more than the public limit (<b>&gt; 1 mSv/yr</b>). Must be told <b>in writing</b>: that they are a NEW, the risks, applicable limits, typical doses for the job; they acknowledge it.</li>
<li>NEWs provide personal info for the National Dose Registry (NDR) — including SIN and (since 2021) <em>gender</em> rather than "sex".</li>
<li><b>Licensed dosimetry service</b> is required where there's a reasonable probability of &gt; <b>5 mSv/yr effective</b> — and, since 2021, also where <b>&gt; 50 mSv/yr equivalent</b> to skin, hands or feet is reasonably probable.</li>
<li>Since 2021, licensees must <b>actively provide each NEW their dose in writing at least once a year</b> (making it accessible is no longer enough). Dose records kept <b>5 years</b> (s.24).</li>
<li><b>Action level</b>: a specific dose (or other parameter) that, if reached, may indicate a <b>loss of control</b> of part of the radiation protection program. Optional, but if used must be in the licence. If reached: investigate, take action to restore effectiveness, <b>notify CNSC</b> within the period in the licence. Exceeding an action level is <b>not a violation</b> — it's an early-warning indicator. (Distinguish from an internal <b>administrative/investigation level</b> that doesn't require CNSC notification.)</li>
<li>Example local scheme (CCI/AHS): <b>investigation level</b> &gt; 0.5 mSv/quarter or 12-month dose 2–4 mSv (internal only); <b>action level 0.75 mSv/quarter, 3 mSv/yr</b> whole body (notify CNSC, report within 21 days); extremity action level ~15 mSv/quarter. Typical RTT dose ≈ 0.1 mSv/yr. Shielding design goal for NEW areas ≈ 0.5 mSv/yr (1/100 of limit).</li>
</ul>

<h2>Pregnant and breastfeeding NEWs (2021 amendments)</h2>
<ul>
<li>Licensee must inform each female NEW <b>in writing</b> of: risks to embryo/fetus; risks to a <b>breastfed infant</b> from intakes of nuclear substances; the importance of informing the licensee (in writing, as soon as feasible) of pregnancy or breastfeeding; and her rights.</li>
<li>Disclosure is now <b>voluntary</b> (the old obligation to declare pregnancy was repealed).</li>
<li>Once informed in writing, the licensee must make <b>reasonable accommodation</b> (short of undue hardship) — e.g., modified duties, more frequent monitoring, direct-reading dosimeter, revised internal-exposure monitoring.</li>
<li>Pregnant NEW limit: <b>4 mSv for the balance of the pregnancy</b>.</li>
<li>Information for nuclear-medicine therapy patients on reducing others' exposure may now be given <em>any time</em> (accommodates in-patients). <b>Caregivers</b> (voluntary, not occupational) are not subject to the licensee's public dose limit.</li>
</ul>

<h2>Signs, labels and posting</h2>
<ul>
<li>Post a durable, legible sign with the trefoil and <b>"RAYONNEMENT — DANGER — RADIATION"</b> at the boundary/each access point of any area where there is &gt; <b>100 × the exemption quantity (EQ)</b> of a nuclear substance, or where a person is reasonably likely to receive a dose rate &gt; <b>25 µSv/h</b> (s.21).</li>
<li>Containers/devices labelled with trefoil, words, substance name, quantity, date and form (s.20). <b>No frivolous postings</b> (s.23).</li>
<li>Licence posting: a copy of the <em>main body</em> of the licence posted at each site (not every vault), stating where the rest is kept; <b>appendices are not posted</b> for security reasons.</li>
</ul>

<h2>Licensing — the life cycle</h2>
<p>Classic sequence for a Class II facility: <b>Construct → Operate (for commissioning) → Operate (routine) → Decommission</b>, plus <b>Service</b> licences (operator's own servicing staff, or third-party service companies). Hospitals/universities are exempt from CNSC cost-recovery fees.</p>
<h3>Application sections (CNSC Class II application guide, per notes)</h3>
<div class="table-wrap"><table>
<tr><th>Section</th><th>Content</th></tr>
<tr><td>A</td><td>Applicant info: type of request, Applicant Authority (AA), legal status, public-access policy, financial guarantees for decommissioning</td></tr>
<tr><td>B</td><td>Licensed use types, activities, locations</td></tr>
<tr><td>C</td><td>Nuclear substances and Class II equipment (model, CNSC certificate #, beam type, max energy, dose rate; sources and max activity)</td></tr>
<tr><td>D</td><td>Radiation safety program: RSO (name, certificate, duties, signed acknowledgement), <b>Designated Supervising Physician</b>, organizational chart, RSC terms of reference, detection instruments</td></tr>
<tr><td>E</td><td>Policies &amp; procedures: ALARA, action levels, worker qualifications, NEW designation, dosimetry, posting, access control/security, inventory &amp; records, receipt of packages, disposal, source changes, meter maintenance</td></tr>
<tr><td>F</td><td>Renewal info: dose summary, sources acquired/disposed, incidents, occupancy review, workload vs max, latest survey</td></tr>
<tr><td>G</td><td>Construction: site control, drawings/shielding design, dose-rate and annual-dose calculations for adjacent areas, ventilation</td></tr>
<tr><td>H</td><td>Safety systems: door interlocks, warning lights, independent radiation warning system with battery backup, emergency stops, beam stops, viewing, signs, stuck-source tools</td></tr>
<tr><td>I</td><td>Operate for commissioning: confirmation of as-built shielding, test plan, safety-device tests, survey procedures</td></tr>
<tr><td>J</td><td>Routine operation: safety test and survey results, operating instructions, QA of safety devices, maintenance and interlock-bypass controls, records</td></tr>
<tr><td>K</td><td>Decommissioning (accelerators): plan, schedule, activation estimates, disposal</td></tr>
</table></div>
<h3>Common licensing scenarios</h3>
<ul>
<li><b>Replace old linac in old bunker</b>: apply to decommission the old unit. If energy increases, isocentre moves, or shielding/workload changes → licence to <b>construct</b>. Otherwise go straight to licence to <b>operate/commission</b>, including facility description, workload, shielding reassessment (with measured dose rates) and safety systems.</li>
<li><b>Lifecycle licensing (live Jan 2022)</b>: established clinics can replace a <b>conventional</b> linac (not Halcyon, Tomo, CyberKnife) without a new licence/amendment if energy is within approved design limits, <b>isocentre unchanged</b>, safety systems intact and meeting current regs, and the replacement is CNSC-certified. Do safety-system tests and a survey after first beam; report to CNSC <b>within 30 days</b>. Cuts ~6 licensing transactions to 1.</li>
<li><b>Decommission Co-60, install HDR</b>: apply directly for commissioning with vault info. <b>Afterloaders don't need a decommissioning licence</b> — but must remove sources, survey, remove signs, and request revocation/amendment to delete the room.</li>
<li><b>New accessory / upgrade</b>: must be covered by the manufacturer's CNSC certificate. If safety systems change (e.g., adding OBI interlocks) → usually temporary licence to commission. Major changes altering operating characteristics (e.g., adding <b>FFF</b> → new dose rates and workloads) require revalidating the safety case and possibly an amendment.</li>
<li>Amendments needed for: legal name/entity, scope of activity, routine operation after commissioning, ACR date or condition changes, appendix changes (location, model upgrade).</li>
<li><b>Consolidated licence</b>: one licence for operating and servicing; renewals up to 10 years (local example: consolidated linac + brachy licence 15 yrs; GK 5 yrs).</li>
<li><b>Licence conditions</b> (section V; typically 3–6) impose site-specific legal requirements beyond the regulations, e.g., operate per submitted documents; daily test of radiation warning system; ACR due date.</li>
</ul>
<h3>What's in a Class II licence</h3>
<p>Licence number, licensee, period, licensed activities, conditions (operating limits, notification of inaccuracies, ACR), and appendices (equipment; sealed-source equipment; other substances; energies; locations; referenced documents — drawings, safety reports, procedures, QA, emergency plans), signed by a designated officer.</p>

<h2>Compliance: ACR, inspections, enforcement</h2>
<ul>
<li><b>Desktop reviews</b>: applications, amendments, pre-inspection, monitoring reports.</li>
<li><b>Annual Compliance Report (ACR)</b>: every licence, every year (even in renewal year): locations, staff dosimetry (whole body and extremity), <b>workload</b> (vs licensed maximum — clinical + research + QA + service; explain any exceedance with dose estimates to adjacent areas), sealed-source inventory, RSP changes. Workload often estimated from MU × IMRT factor (dose at isocentre, kGy/MGy).</li>
<li><b>Type I inspection</b> = in-depth <b>audit</b>: several days on site, observation of work, record/SOP review and <b>staff interviews</b> (gauges safety culture); daily updates; preliminary findings at exit; final report later (notes cite ~60 days / ~12 weeks); typically ~1 month notice. Historically rated A–E.</li>
<li><b>Type II inspection</b> = <b>snapshot</b>: shorter, observations, measurements, record review, <b>no extensive interviews</b>; may be unannounced (usually ~2 weeks notice); report within ~30 days.</li>
<li>Inspectors can <b>immediately stop</b> activities posing an imminent threat. No cost to hospitals; budget staff time for interviews and space for reviewers.</li>
<li>Since 2020: <b>remote inspections</b> (records via secure transfer, photos/video/live streaming observations, video interviews). Personal information collected only as needed, protected by the <em>Privacy Act</em>, destroyed after the report.</li>
<li>Findings: previously <b>Directives</b> (non-compliance with regulations) vs <b>Action Notices</b> (non-compliance with licence conditions); since 2020 a single <b>Notice of Non-Compliance</b> with rationale, legal reference and safety significance. <b>Recommendations</b> are optional good-practice suggestions.</li>
<li><b>Graded enforcement</b> (commensurate with risk): discussion → written notice → increased scrutiny/inspections → orders → licensing action (amend, suspend, revoke) → AMPs → decertification → prosecution.</li>
</ul>
<h3>Most common Class II non-compliances (CNSC InterActions columns)</h3>
<ol>
<li><b>Not following policies/procedures submitted to CNSC</b> (e.g., skipping a morning-QA step; RSC meeting minutes for 3 meetings in 4 years when ToR says quarterly).</li>
<li><b>All reasonable safety precautions not taken</b> (safety systems not tested daily; e-stops mixed in with other buttons).</li>
<li><b>Using policies/procedures NOT submitted</b> (updated daily QA never sent for the appendix; e-stop moved without telling CNSC).</li>
<li>Then: warning lights, training, labelling, inadequate RSP, alternate RSO not designated in writing, signage, missing safety devices.</li>
</ol>
<p>2018–2021 update: top three unchanged; also incomplete procedures, insufficient <b>room view</b> from the console, safety systems not functioning, <b>test design</b> doesn't actually test the system, testing frequency not met, records not maintained. Rule of thumb: <em>"Would I do this if a CNSC inspector were standing here?"</em> Prevent with periodic <b>self- or peer-audits</b>.</p>

<h2>Reporting to the CNSC</h2>
<ul>
<li><b>Immediate</b> = as soon as you become aware, <em>after</em> mitigating the emergency; you must <b>speak to a person</b> — the <b>CNSC Duty Officer</b> (24/7 line). Voicemail/email is not acceptable.</li>
<li><b>Full report within 21 days</b> (unless licence says otherwise) — GNSCR s.29(2): date/time/location of awareness; description and circumstances; <b>probable cause</b>; effects on environment, health, safety and security; <b>effective and equivalent dose</b> to anyone; actions taken or proposed.</li>
<li>GNSCR s.29(1) triggers include: likely exposure above dose limits; unauthorized release to the environment; implementation of a contingency plan; attempted/actual security breach or sabotage; information revealing incipient failure/degradation of safety systems; work disruption; <b>serious illness or injury incurred or possibly incurred as a result of the licensed activity</b>; <b>death</b> at a nuclear facility.</li>
<li>Other reportable events (notes): lost/stolen sources or devices; sources involved in fire or traffic accident; <b>leak test showing &gt; 200 Bq</b>; damaged/tampered package; operations to recover a stuck source; dose limit exceeded; worker dose &gt; action level (notification within licence period, not immediate).</li>
<li><b>Report vs notification</b>: "notifications" (action level reached, inaccuracies in licence appendix documentation, undeliverable consignment) are less prescriptive and <b>not immediate</b>.</li>
</ul>
<h3>Judgement calls from the CNSC column (2017)</h3>
<div class="table-wrap"><table>
<tr><th>Situation</th><th>Immediately reportable?</th></tr>
<tr><td>Patient seriously injured by wrong dose or gantry collision due to <b>equipment malfunction</b></td><td>Yes</td></tr>
<tr><td>Same, but clearly human error with no licence violation</td><td>No (clinical issue)</td></tr>
<tr><td>Patient falls off couch / heart attack in vault</td><td>No</td></tr>
<tr><td>Power outage; all patient doses handled correctly</td><td>No</td></tr>
<tr><td>Fire inside a vault</td><td>Yes</td></tr>
<tr><td>One seed dropped on skin during a prostate implant (recovered)</td><td>No</td></tr>
<tr><td>Temporary implant wire partially removed, no survey, patient harmed</td><td>Yes — process breakdown / licence violation</td></tr>
<tr><td>Minor spill on clothing</td><td>No; <b>skin contamination</b> → assess (see skin-contamination guidance)</td></tr>
<tr><td>Dosimeter over limit — personal exposure</td><td>Yes; if non-personal (badge left in vault) no, but correct NDR record</td></tr>
<tr><td>Leak test &gt; 200 Bq</td><td>Yes (after immediate remedial actions)</td></tr>
<tr><td>Procedures used don't match licence appendix</td><td>Yes if significant safety impact; if administrative, amend later</td></tr>
</table></div>

<h2>The Radiation Safety Officer (RSO)</h2>
<ul>
<li>Every Class II licensee must appoint an RSO <b>certified by the CNSC</b> (Class II regs s.15.01–15.02; REGDOC-2.2.3 Personnel Certification). Certification involves a qualifications review and an <b>exam</b> (written, online, open book, multiple choice + short answer since 2016).</li>
<li>Exam knowledge areas: <b>radiation physics; principles of radiation safety; general Class II facility operations; CNSC Act and regulations; site-specific operations.</b></li>
<li><b>Why candidates fail</b> (22 failures since 2010: 9 medical, 7 third-party service, 5 industrial): weakest on <b>Act and regulations</b>, and on explaining <em>why</em> (not just how) — how their own RSP implements ALARA and satisfies the regulations. Specific gaps: time/distance/shielding; ALARA program features; survey technique; cyclotron radiation; area-alarm response; shielding factors; neutron shielding; instrument selection; immediately reportable events and preliminary-report content; <b>action level vs administrative level</b>; overexposed TLD response; service-staff training; safety-system test frequency; record retention.</li>
<li>An <b>alternate RSO</b> must be designated <b>in writing</b>; must be qualified but need not be certified; cannot replace the certified RSO for more than <b>60 days</b> in a year (otherwise certification needed). Alternate typically covers emergency response, dosimetry distribution, and reporting.</li>
<li>Certification can be revoked (30 days notice and opportunity to be heard). No expiry currently — renewal/reassessment proposed in the regs review.</li>
<li>RSO duties: manage and control licensed activities and substances; CNSC's first point of contact; signing authority; identify issues and implement corrective actions; report non-compliance; training of NEWs; personal dosimetry program; monitor occupational exposures and recommend ALARA measures; leak tests and instrument calibration (at least annually); coordinate emergency response; keep records current; report to senior leadership and at least annually to the RSC.</li>
</ul>

<h2>Applicant Authority (AA) and the Radiation Safety Committee (RSC)</h2>
<ul>
<li><b>AA</b>: senior manager representing the licensee, <b>ultimately accountable</b> for the RSP; appoints a certified RSO, provides sufficient financial and human resources, empowers the RSO as safety champion, communicates bilaterally, sets the tone of safety culture. Local example: AHS VP Cancer Care.</li>
<li><b>RSC</b> (local name: Radiation Safety Advisory Committee; AHS-wide Radiation Oversight Committee covers cancer, diagnostic imaging, lab medicine): advises RSO and management on effectiveness of policies; reviews RSP, procedures, all uses of radioactive material, internal inspections, annual exposure summaries, incident reports; recommends corrective actions and resources; keeps minutes. <b>AA chairs</b> (can allocate budget); <b>RSO reports but doesn't vote</b>; members include RO, MP, RTT, NM, cyclotron, GK, brachy and directors. Meets quarterly.</li>
<li>Escalation path for a looming safety problem: head of physics/RSC (verbal, then <b>written</b>) → site RSO (independent of physics, reports to AA) → AA in writing → last resort, <b>CNSC directly</b>. Approach collegially ("perhaps I'm misunderstanding something?").</li>
</ul>

<h2>Key elements of an effective RSP management system (CNSC 2019)</h2>
<ul><li>Sufficient resources; continuous monitoring and improvement (e.g., quarterly RSC); periodic self/peer audits (inspection reports, especially Type I, are a feedback source); <b>healthy safety culture</b> (just culture, no-blame).</li>
<li>Three fundamental principles (ICRP): <b>justification</b>, <b>optimization (ALARA)</b> and <b>application of dose limits</b> (not to medical exposure of patients).</li></ul>
<p class="src">Sources: RPR SOR/2000-203 current text (laws.justice.gc.ca) for s.14–24; Jay's notes (Geetha's CNSC InterActions column summaries 2007–2022, Q&amp;A with RSO Trevor); SUMMARY_Radiation Safety; Radiation Safety Notes from Interactions; CNSC "Why Class II RSO candidates fail" (CRPA 2018); FCCPM Questions.docx.</p>
`});
