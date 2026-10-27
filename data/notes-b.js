/* Notes part B: radiation safety in practice, MRI safety, nuclear medicine, adverse events */

NOTES.push({
id: 'radpractice', group: 'Radiation protection', icon: '☢️', title: 'Radiation safety in practice',
summary: 'Setting up an RSP, emergencies (linac, GK, HDR, spills, overexposure), shielding & vaults, sealed sources & security, transport, patient release, decedents, decommissioning, communicating risk.',
html: `
<h2>Setting up a comprehensive radiation safety program</h2>
<ol>
<li><b>Governance</b>: Radiation Safety Committee chaired by the Applicant Authority (VP level, can spend money); department heads (RO, NM, radiology, MP); certified RSO (certificate, qualifications, CNSC consent) and written alternate.</li>
<li><b>Know the rules</b>: NSCA, GNSCR, RPR, Class II regs, NSRDR, transport regs; licence conditions; consult similar programs.</li>
<li><b>ALARA implementation</b> (RPR s.4): management control over work practices; personnel qualification and training; control of occupational and public exposure; <b>planning for unusual situations</b>.</li>
<li><b>Policies &amp; procedures</b>: written, approved by senior management, part of the radiation safety manual accessible to all.</li>
<li><b>People</b>: hiring, qualifications, NEW designation letters, initial and ongoing training (hazards, equipment safety features, what to do if a safety feature must be overridden for repair, hands-on survey meter use, accident response, who to call).</li>
<li><b>Facility</b>: shielding design, access control, barriers and signage, security of sources.</li>
<li><b>Monitoring</b>: personal dosimetry (licensed service where required), area monitoring, action levels, inventory control.</li>
<li><b>QA program</b> for safety systems (interlocks, LPO, warning lights, radiation monitors) with stated frequencies.</li>
<li><b>Emergency procedures</b> by modality, with drills (at least annually for HDR/GK).</li>
<li><b>Incident learning</b>: RLS/ILS, investigation, corrective actions, feedback, annual review.</li>
</ol>
<div class="callout tip"><strong>Local ALARA emphasis thresholds (example from CCI):</strong> focus dose-reduction effort where occupational effective dose is likely &gt; 0.5 mSv/yr (1/100 of the limit), extremity &gt; 50 mSv/yr, or public effective dose &gt; 0.05 mSv/yr (1/20 of the limit). CNSC generally stops questioning ALARA for public areas when design dose ≤ 0.05 mSv/yr.</div>

<h2>Emergency response — the universal pattern</h2>
<ol>
<li><b>Terminate radiation</b> / make safe.</li>
<li><b>Get people out</b> (patient and staff); assist patient.</li>
<li><b>Secure the area</b> (lock, sign, keys, block access).</li>
<li><b>Notify</b> when safe: authorized MP, RTT supervisor, RSO, RO, management. RSO notifies CNSC (immediate if reportable).</li>
<li><b>Record</b> delivered/planned MU or dwell time; preserve evidence (photos, settings — AHS "PLEASE quarantine").</li>
<li><b>Report</b> internally (RLS for patient events; MySafetyNet for staff injuries).</li>
<li><b>Investigate</b>, corrective actions, MP assessment and release of equipment after service, follow-up report.</li>
</ol>
<h3>Linac (failure to terminate, e-stop failure, fire/smoke)</h3>
<p>Beam off (beam-off button → e-stop → key → breaker), lower couch (pendant or manual crank), escort patient out, close vault, notify, record MU. Fire/smoke: hit nearest e-stop, evacuate, breaker, code red.</p>
<h3>Gamma Knife</h3>
<p>Pause/e-stop; if couch doesn't retract, manually pull out the couch with emergency handles; manually close shielding door; escort patient; secure; follow up.</p>
<h3>HDR stuck source</h3>
<ol>
<li>Console e-stop → wall e-stops → e-stop on the afterloader.</li>
<li>Manual retraction (hand crank) — follow the arrow until it stops.</li>
<li>If still out: remove applicator from patient with long forceps and place it in the <b>emergency container (lead pig)</b> beside the unit.</li>
<li>Remove patient, survey patient and staff, close door, block entry, notify RSO/CNSC, follow SOP.</li>
</ol>
<p>Numbers to support "there is time": Ir-192 at 10 Ci ≈ 40 mGy/h at 1 m (Γ-based estimate) → ~1 h at 1 m to reach the annual NEW limit; but inverse square makes contact doses rise fast. A CNSC-funded study (Alasdair) of simulated brachy emergency removal found hand doses 4–232 mSv (mean 8), eye 0.3–4.2 mSv, torso ≤ 2.1 mSv — well below emergency limits.</p>
<h3>Spills / contamination (unsealed sources)</h3>
<ul>
<li><b>Minor spill</b>: &lt; 100 EQ, no personal contamination — staff clean up with spill kit, survey, report to RSO; no CNSC report.</li>
<li><b>Major spill</b>: &gt; 100 EQ, uncontained, or personal contamination — contain and flag area, warn others, block traffic, survey people (in a corner away from the spill), decontaminate skin (wash; don't abrade), notify RSO immediately; RSO notifies CNSC, attends cleanup, surveys, files full report.</li>
<li>Clean until removable contamination is below limits (notes: &lt; 30 Bq/cm² for class B nuclides) / &lt; 2× background; fixed contamination: seal and let decay.</li>
<li>Spill in an <b>uncontrolled</b> area (corridor) is more serious — inform CNSC promptly.</li>
<li><b>Skin contamination</b> (CNSC DNSR guidance, 2016): measure net cpm, decontaminate, re-measure. Report to CNSC only if calculated skin dose &gt; <b>50 mSv for a NEW</b> or &gt; <b>5 mSv for a non-NEW</b>. Screening: for a NEW, no explicit dose calculation needed if initial &lt; 10,000 cpm net and post-decon &lt; 500 cpm net within 1 hour (worst case ~48 mSv, Ga-67). Always document and investigate every event; dose change request to NDR if &gt; 50 mSv.</li>
<li>Radionuclide classes A/B/C by radiotoxicity set contamination thresholds; I-131 handlers need <b>thyroid screening</b> (absorbed through skin, high thyroid avidity).</li>
</ul>
<h3>Personnel overexposure</h3>
<ol><li>Person and manager notify RSO; person removed from dose-adding duties.</li>
<li>CNSC notified immediately (24-h line); investigation; full report within 21 days.</li>
<li>Return to radiation work only with CNSC written authorization.</li>
<li>If the dose turns out non-personal (badge left in vault) → correct NDR record with a best estimate; retrain.</li></ol>

<h2>Classic radiation-protection scenarios (worked)</h2>
<details><summary>RTT badge reads 20 mSv for the quarter</summary>
<p>Above the action level (0.75 mSv/qtr) → remove from dose-adding work, notify CNSC, investigate (interviews, workflow, shift schedules, colleagues' doses, badge storage). Real → serious RSP breach, larger investigation, corrective actions; still below the 50 mSv annual limit unless pregnant. Not real → correct NDR, reinforce training. Full report in 21 days either way. Real CNSC example: AHS 2021 NEW reading 145.83 mSv (possibly non-personal).</p></details>
<details><summary>Pregnant NEW declares; last quarter's OSL = 3 mSv</summary>
<p>Within regulatory limit for the year but over the local quarterly action level and close to the 4 mSv balance-of-pregnancy limit → reassign immediately to non-dose work for the remainder of pregnancy, RSO notifies CNSC (action level), investigate, report. Offer abdominal/direct-reading dosimeter. Be compassionate.</p></details>
<details><summary>Door interlock broken; pregnant RTT stands at neighbouring door</summary>
<p>No beam with a failed interlock — it's a required safety system; treating would violate the licence. Notify RSO/CNSC as required, fix and test before clinical use. Reassure: shielding designed ALARA (NEW areas ≲ 1 mSv/yr vs 4 mSv pregnancy limit) but advise stepping away during beam-on; offer dosimetry.</p></details>
<details><summary>Pregnant housekeeper afraid to clean the linac vault</summary>
<p>Education (a linac produces no radiation when off; activation negligible for ≤ 10 MV), meet with her and manager, offer area monitoring or a dosimeter, and if still worried, reassign. Explain why RTTs have badges and she doesn't (NEW vs non-NEW designation).</p></details>
<details><summary>Damaged/wet brachy seed box arrives; clerk carrying it is panicking</summary>
<p>Stay calm, reassure (shielding inside). Assume the worst: isolate, send clerk to a far corner (possible contamination), keep others separate. Survey at 1 m and compare with the Transport Index (TI = max µSv/h at 1 m ÷ 10); wipe test (&lt; 2× background). Photograph, call RSO (notifies CNSC — damaged package is reportable), verify contents vs packing slip, repackage and return to vendor even if intact, follow up with vendor/carrier. If still on the truck and visibly damaged: <b>don't sign</b> — carrier/consignor deals with it.</p></details>
<details><summary>HDR vault open at 6:30 a.m., afterloader parked by the bed / afterloader missing</summary>
<p>Survey first (is the source retracted? leak?), secure the room, check logs/CCTV, contact RSO and hospital security. Missing afterloader: IAEA Category 3 source — loss/theft is immediately reportable; RSO informs CNSC, security traces device, investigate, corrective actions (security program: <b>deter, detect, delay, respond, train</b>).</p></details>
<details><summary>17-year-old treated with thousands of MU of 18 MV (IMRT/VMAT)</summary>
<p>Concern: photoneutron contamination (above ~10 MV; 18 MV produces far more neutrons than 10 MV), head leakage (~0.1%) and MLC transmission (2–3%) scale with MU; neutron weighting up to ~20 → higher second-cancer risk in a young patient with long life expectancy. Would have used 6 MV (or 10 FFF).</p></details>
<details><summary>Linac target left out in the vault</summary>
<p>For &gt; 10 MV, activation via photonuclear reactions — isolate, close neutron door, survey (including neutron meter), apply CNSC clearance guidance before handling/disposal.</p></details>
<details><summary>Radioactive source falls on your hand (I-125 seed)</summary>
<p>0.4 mCi seed ≈ 0.5 µGy/h at 1 m → ×10⁴ at 1 cm ≈ 5 mGy/h. Extremity limit 500 mSv/yr → ample time to pick it up with forceps and put it in the pig. Use time/distance/shielding.</p></details>
<details><summary>A researcher leaves a linac running unattended for radiobiology; your boss modifies a linac on weekends</summary>
<p>Licence requires operation per submitted procedures; unattended operation and unapproved modifications invalidate the safety case (certified configuration, dose rate, workload), may void Health Canada/vendor support, and create risk if not restored. Raise with the person, then manager/RSO (RSO reports to a different line — avoids conflict of interest), propose a compliant path (licence amendment, dedicated non-clinical machine, documented restore-and-QA procedure).</p></details>

<h2>Vault design & shielding</h2>
<ul>
<li>Reference reports: <b>NCRP 151</b> (MV facilities), <b>NCRP 147</b> (diagnostic), NCRP 49 (≤ 500 kV — older).</li>
<li>Primary, scatter and <b>leakage</b> workloads: IMRT/VMAT raise the leakage workload dramatically (IMRT factor); SRS uses different use factors and very high dose rates; TBI scatter source isn't at isocentre and primary/leakage workloads exceed the prescribed dose.</li>
<li><b>FFF</b>: no beam hardening in the filter → softer beam; less head scatter/leakage per MU, but higher workloads and dose rates — redo calculations and check licence workload/dose-rate limits.</li>
<li>Design for <b>future</b> workloads and energies; slightly overshield — construction errors are expensive to fix.</li>
<li>Advocate lower energy: 18 MV produces much more neutron dose than 10 MV (notes: ~40×; adds several inches of borated polyethylene to doors).</li>
<li><b>Neutron doors</b>: borated polyethylene (high capture cross-section) + lead for capture gammas. Ducts/vents through barriers need baffles/bulkheads and multiple 90° bends; BPE where neutrons present.</li>
<li><b>Doorless vaults</b> (~25% of Canadian centres): faster throughput, fewer door failures; long mazes and thicker barriers since there's no door; still need an entrance device that stops the beam when someone passes (light curtain), bright/flashing warning lights, audible warnings, physical barriers and floor colour change so the entrance doesn't look like a corridor; &gt; 10 MV may still need a neutron door.</li>
<li><b>Roof</b> exclusion areas: dose = rate × time, but determined people get on roofs — CNSC pushes for better access control.</li>
<li><b>Ozone and N-13</b>: photonuclear (γ,n) reactions above ~10–16 MeV; β⁺ emitters with half-lives of ~2 and ~10 min. With normal ventilation, dose and ozone concentration (limit ~0.1 ppm) are negligible; CNSC (2011) no longer requires air-activation analysis for linac licences (still needed for cyclotrons/research accelerators).</li>
<li>Cyclotrons differ fundamentally: the radioactivity <em>is</em> the product (hundreds of GBq, open/dispersible), neutron fields from (p,n), containment of releases, hot cells, transfer lines, activated target foils; workload in beam current-hours. Self-shielded units: some safety systems exempt if &lt; 200 µSv/h at 30 cm worst case.</li>
</ul>

<h2>Sealed sources, security and inventory</h2>
<ul>
<li><b>Leak tests</b> for sealed sources ≥ <b>50 MBq</b>; leakage ≥ <b>200 Bq</b> is reportable (example: Laval 2014 contaminated HDR Ir-192 source found at exchange — ~10.5 kBq on source cable wipe; afterloader and transfer tubes replaced).</li>
<li><b>Survey meters</b> calibrated within the previous 12 months.</li>
<li>Keep <b>one official inventory</b> (CNSC found multiple outdated unofficial copies at one site). Track seeds from acquisition to disposal (received, implanted, calibration date, location, initials). Decay-in-storage ~10 half-lives (I-125 ≈ 2 yr) or use a licensed disposal company.</li>
<li><b>IAEA source categories</b>: Cat 1 (GK, Co-60 teletherapy, irradiators), Cat 2 (industrial radiography), <b>Cat 3 (HDR, fixed gauges)</b>, Cat 4–5 (LDR seeds, low-activity gauges).</li>
<li>Cat 1–3 security: approved security plan, physical barriers, intrusion detection, <b>trustworthiness and reliability verification</b> (background checks, renewed periodically) for unescorted access — including vendor staff (e.g., GK service). Five pillars: <b>deter, detect, delay, respond, train</b>.</li>
<li><b>SSTS</b> (Sealed Source Tracking System) for high-activity sources (e.g., GK Co-60 from Nordion): report receipt/transfer within set time. <b>NMAR</b> applies to nuclear material (U, Th, Pu — e.g., depleted-uranium shielding in old heads).</li>
<li>Third-party servicing: two licences in play; you're not absolved. Provide site-specific training (safety systems, local procedures, contacts), plan and risk-assess work, keep records — description of actions, date, results, tests confirming safety, independent sign-off, who approved return to service.</li>
</ul>

<h2>Transport of radioactive material (Class 7)</h2>
<ul>
<li>Regulations: TDG Act/Regulations (Transport Canada), CNSC Packaging and Transport of Nuclear Substances Regulations, IAEA SSR-6, IATA (air).</li>
<li>Package types: <b>excepted</b> (no external label; "RADIOACTIVE" visible on opening; &lt; 5 µSv/h at surface), <b>Type A</b> (most clinical shipments — I-125 seeds, HDR Ir-192), <b>Type B</b> (Co-60 sources), industrial, fissile.</li>
<li>Labels: <b>White-I</b> (≤ 5 µSv/h surface), <b>Yellow-II</b> (≤ 500 µSv/h surface, TI ≤ 1), <b>Yellow-III</b> (≤ 2 mSv/h surface, TI ≤ 10). <b>Transport Index</b> = max dose rate at 1 m in µSv/h ÷ 10.</li>
<li><b>TDG training</b>: required for anyone who handles (loads/unloads, packs/unpacks) — shipping/receiving staff and whoever opens the package; not for a porter who simply delivers (but use a cart, never leave unattended, deliver directly). Packages go to locked storage, not left in shipping.</li>
<li>Consignor vs consignee: for <b>imports</b>, the Canadian consignee is deemed the consignor (accountability within Canadian law). For Cat 1–3 shipments, the consignor confirms the carrier meets security requirements (letter, contract term or written verification).</li>
<li>Dangerous occurrences (accident, loss, wrong recipient, damage, leakage, tampering) → RSO → CNSC.</li>
<li>Package falls off the truck after it has left: the carrier/consignor is responsible (emergency number on package), but for reputation help manage it — isolate the area (time/distance/shielding), call RSO (CNSC 24 h line), communications team for public messaging.</li>
</ul>

<h2>Patients with radioactivity: release, home, surgery, death</h2>
<ul>
<li><b>I-131 thyroid therapy</b> (CNSC INFO-0442 guidance; licence-specific values in notes): release with instructions when dose rate at 2 m is below the licence value (notes: <b>&lt; 16 µSv/h at 2 m</b>; another local value 18 µSv/h). Adjacent occupied areas ≤ 2.5 µSv/h; non-therapy in-patients ≤ 500 µSv per stay. Release goal: others &lt; 1 mSv (public), caregivers ≤ 5 mSv (ICRP / US NRC 10 CFR 35.75 uses 5 mSv).</li>
<li>Therapy patients sign <b>consent</b> to restrictions (stay in shielded room, own bathroom, avoid children for ~1 week). In Canada we <b>can't detain</b> a patient who leaves; encourage return, explain risk; consent may allow refusing the next dose. Diagnostic NM patients: no practical restriction (others won't approach 1 mSv).</li>
<li><b>"Iodine hotel"</b> (listserv): legally may be fine, but ethically exposes hotel staff without knowledge/consent and is a PR risk — prefer going home with precautions.</li>
<li><b>Prostate seeds (I-125 ~60 d; Pd-103 ~17 d)</b>: dose rate at abdomen contact &lt; ~70 µSv/h (~15 µSv/h at 30 cm) → ~66 h at 30 cm for 1 mSv. Advice: limit prolonged close contact (children, pregnant women on the lap). Lead underwear works for I-125 (HVL in lead ≈ 0.025 mm). Body fluids not radioactive unless a seed is passed.</li>
<li>Pregnant relative of a seed patient: calm, contextualize (natural background ~2 mSv/yr; &lt; 100 mSv fetal dose no added malformation risk), reconstruct dose if needed (e.g., 10 µSv/h at 50 cm), connect with the right people; avoid scary raw numbers without context.</li>
<li><b>Decedents</b> — <b>CNSC REGDOC-2.7.3</b> (safe handling): recommended waiting times include <b>I-125 seeds: 2 years</b> before autopsy/cremation (1 month embalming), Pd-103: 3 months, I-131: 4 months (cremation/autopsy), Lu-177 and Ra-223: 3 months, Y-90: 6 weeks. If earlier: PPE, work fast, avoid the implant region, keep ashes in steel container in low-occupancy area, no keepsakes; alkaline hydrolysis not recommended for I-131 patients. Rule of thumb: ~10 half-lives.</li>
<li>Rectal surgery after seed implant: wait if possible (CNSC guidance ~2 yr for I-125 autopsy); if urgent, estimate dose rate, ALARA (shielding, rotating staff), consult RSO.</li>
<li>Radioactive patient in emergency department refused care: educate — treating staff dose is tiny (time/distance, gloves), provide RSO/NM contact, survey if needed.</li>
</ul>

<h2>Decommissioning & disposal of activated components</h2>
<ul>
<li>Licence to decommission (accelerators): plan, schedule, affected areas, activation estimates, disposal route; RSO trains workers.</li>
<li>Wait <b>≥ 48 h</b> (notes: minimum 2 days) after last beam before dismantling the head to let short-lived activation decay; survey parts, wipe tests; depleted-uranium shielding stored until &lt; 0.3 Bq/cm² then disposed by approved agency.</li>
<li><b>Conditional clearance level</b> (CNSC 2018): component may be disposed/recycled if &lt; <b>0.5 µSv/h at 5 cm</b> from any accessible surface (or below exemption/unconditional clearance levels).</li>
<li>Final bunker survey submitted for CNSC acceptance before unrestricted use. Transfer of a whole linac to another site: transfer documented, licensing at receiver.</li>
</ul>

<h2>Communicating radiation risk</h2>
<ul>
<li>Show compassion, listen, find the real concern, give context (background, flights, CT), avoid jargon, <b>don't inflame fear</b>, and point to official channels when outside your role.</li>
<li><b>Reference doses</b>: Canadian background ≈ 1.8–3 mSv/yr (~0.2–0.3 µSv/h); cross-Canada flight ≈ 0.02 mSv (jet ~2 µSv/h); chest X-ray ≈ 0.1 mSv (notes also 0.02); dental 0.005 mSv; head CT ≈ 2 mSv; chest CT ≈ 7 mSv; abdomen/pelvis CT ≈ 10–20 mSv; PET-CT ≈ 25 mSv; mammogram glandular ≈ 4 mGy; 3D CBCT ~4 mSv-ish CTDI, 4D CBCT higher.</li>
<li><b>Risk</b>: LNT model (basis of protection, precautionary); little evidence of measurable effects below ~100 mSv; rule-of-thumb 5%/Sv fatal cancer (~10%/Sv incidence). Deterministic: whole-body LD50/60 ≈ 4 Gy without care; GI syndrome &gt; ~6 Gy; neurovascular &gt; 20 Gy.</li>
<li><b>Media</b>: never comment on your own — refer to your organization's media relations (AHS: 24/7 line; they pick spokespeople, prepare key messages). If designated: stick to facts and your expertise, no patient information, start and end with the key message, and stress that treatments are licensed and overseen by the CNSC.</li>
<li><b>Radon</b>: leading cause of lung cancer in non-smokers; Health Canada guideline <b>200 Bq/m³</b>; test homes (basements), mitigate (sub-slab depressurization).</li>
<li><b>Nuclear reactors / war</b>: defence in depth, emergency plans and drills (full-scale every ~3 years), KI pills within planning zones, ICRP emergency reference levels (1–20 mSv may stay; 20–100 mSv sheltering/evacuation decisions). Health Canada: evacuate if projected 50 mSv in 7 days. CNSC 2015 hypothetical severe accident study: no detectable cancer increase for most of the population; childhood thyroid risk ↑ → importance of KI.</li>
<li><b>Fukushima (2011)</b>: ~330 µSv/h at 20 km early on (~1000× background); Cs-137 (30 y), Cs-134 (2 y), I-131; KI to block thyroid uptake. Returning worker: interview, survey, dosimetry/contact history, blood count if indicated.</li>
<li><b>Dirty bomb rumour, journalist calls</b>: refer to media relations; sources are double-secured.</li>
</ul>

<h2>Diagnostic imaging protection (Safety Code 35 and shielding)</h2>
<ul>
<li><b>Health Canada Safety Code 35 (2008)</b> — large medical radiological facilities. Sections: responsibilities of owners/users; minimizing staff dose; minimizing patient dose; <b>Diagnostic Reference Levels</b> (DRL = 75th percentile of a dose-indicator distribution); facility shielding; equipment performance and protection surveys; detailed QC (incl. CT). Covers all X-ray except DEXA and mammography. One of the few regulatory documents naming medical physicists and CCPM certification.</li>
<li>CT dose metrics: <b>CTDI<sub>vol</sub></b> (mGy, phantom-based output, not patient dose) and <b>DLP</b> = CTDI<sub>vol</sub> × scan length (mGy·cm) → approximate effective dose with conversion factors. Verify displayed CTDI<sub>vol</sub> within ±20% (SC35).</li>
<li><b>Gonadal/fetal shielding</b>: AAPM (2019) recommended discontinuing routine use; endorsed by COMP and CAR. Reasons: ICRP 103 lowered gonad w<sub>T</sub> to 0.08; shields can sit over AEC chambers and <em>increase</em> dose or obscure anatomy; inconsistent with not shielding equally sensitive organs. But <b>if regulation or accreditation still requires shielding</b> (SC35 was written for film-screen), you must comply while working to change the framework (2020 COMP survey: most provinces still shielding).</li>
</ul>
<p class="src">Sources: Jay's notes; SUMMARY_Radiation Safety (AHS SOPs, meeting with Terry Riauka); FCCPM Questions.docx; Nuclear Medicine_Hans; CNSC skin-contamination expectations (2016); HDR leak-test abstract (Laval 2014); Radiation Safety Notes from Interactions; RPR current text.</p>
`});

NOTES.push({
id: 'mri', group: 'Radiation protection', icon: '🧲', title: 'MRI safety & MR in radiotherapy',
summary: 'The MRI-safety alternative to the radiation question: safety program, site design, zones, hazards, plus the MR physics examiners probe (sequences, distortion, field strength).',
html: `
<div class="callout info"><strong>Context:</strong> the exam's radiation protection question is replaced by MRI safety for MR physicists, and MR-sim / MR-linac programs bring MR safety into every RT department. The group had a dedicated MRI session (Ali/Atiyah) with the slides "FCCPM_MRI" and "MRI Safety Training Level 2". Items marked <em>(general knowledge)</em> are standard ACR/CPQR practice added for completeness rather than taken from the Drive notes.</div>

<h2>How to develop an MR safety program</h2>
<ol>
<li>Create a team (MR physicist/MR safety expert, radiologist/RO lead, MR technologists, RTTs, nursing, facilities, security).</li>
<li>Talk to users about needs — which sites scanned, which sequences, RT immobilization.</li>
<li>Use guidance documents: <b>CPQR</b> TQC for MR, <b>ACR</b> Manual on MR Safety, AAPM task groups (e.g., TG-284 on MR for RT simulation).</li>
<li>Phantoms and QA equipment; acceptance and commissioning; distortion QA.</li>
<li>Approach other centres; define staffing and responsibilities (MR Medical Director, MR Safety Officer, MR Safety Expert) <em>(general knowledge)</em>.</li>
<li>Training by level (Level 1 non-MR staff, Level 2 MR personnel), screening forms, implant policy, emergency procedures (code in zone IV, quench).</li>
</ol>

<h2>Site design considerations</h2>
<ol>
<li><b>Zoning</b> and patient/staff flow: safety, confidentiality, ergonomics, efficiency. ACR zones I–IV: I public; II screening/reception; III restricted, controlled access, view of zone IV; IV magnet room <em>(general knowledge)</em>.</li>
<li><b>Site appropriateness</b>: vibration testing, static field at location, quench-pipe route, moving metal nearby, RF interference, path to bring in the magnet.</li>
<li>Facility: power and chilled-water supply.</li>
<li>Moving ferromagnetic masses (cars, elevators) ~<b>10 m</b> away or magnetic shielding; power transformers ~8–10 m away.</li>
<li>Electron-beam equipment (X-ray tubes, PMTs/gamma cameras, image intensifiers, cyclotrons) outside the <b>0.1 mT</b> line.</li>
<li>Shielding: <b>RF cage (copper)</b>, passive/active <b>magnetic</b> shielding (iron), and for PET-MR or MR-linac also <b>radiation</b> shielding. 5 G (0.5 mT) line controlled for pacemakers <em>(general knowledge)</em>.</li>
</ol>

<h2>MR hazards to discuss <em>(general knowledge)</em></h2>
<ul>
<li><b>Static field</b>: projectile/missile effect (translational force ∝ B·dB/dz), torque on implants; quench (helium venting via quench pipe — asphyxiation/oxygen-depletion risk if vent fails; oxygen monitors).</li>
<li><b>Gradient fields</b>: peripheral nerve stimulation, acoustic noise (hearing protection).</li>
<li><b>RF</b>: tissue heating — <b>SAR</b> limits; burns from conductive loops, cables, leads, tattoos; RT immobilization and QA devices must be MR-safe/conditional.</li>
<li><b>Implants</b>: MR Safe / MR Conditional / MR Unsafe labelling; pacemakers and ICDs per conditional protocols.</li>
<li><b>Contrast</b>: gadolinium (nephrogenic systemic fibrosis risk in renal impairment; retention).</li>
</ul>

<h2>MR physics the panel may probe</h2>
<h3>Contrast</h3>
<ul>
<li><b>T1-weighted</b>: one bright tissue — fat; most "anatomical". <b>T2-weighted</b>: two bright — fat and water; most commonly used for pathology.</li>
<li><b>Inversion recovery</b> (180° then 90°; signal depends on inversion time TI): <b>FLAIR</b> nulls water (long TI ~2000–2400 ms; CSF dark, lesions such as MS demyelination bright); <b>STIR</b> nulls fat (short TI ~80–150 ms).</li>
<li><b>Diffusion (DWI/ADC)</b>: high DWI + low ADC = restricted diffusion (infarct, cancer, abscess); high cellularity → low ADC. DTI → FA and MD for white-matter tract invasion. Uses: cellularity, prognosis, invasion, RT planning, surgical guidance, response, recurrence vs treatment effect, re-irradiation.</li>
<li><b>Perfusion (DCE, DSC)</b>: leaky immature tumour vessels; rCBV (DSC) helps separate true progression from <b>pseudo-progression</b> and define invasive borders.</li>
<li><b>Gadolinium</b> shortens T1 and T2 → bright on T1 post-contrast where vasculature is abnormal or the blood–brain barrier is disrupted.</li>
</ul>
<h3>Acceleration</h3>
<p>Reduced sampling, partial Fourier (Hermitian symmetry of k-space), parallel imaging (SENSE in image space, GRAPPA in k-space), multiband/multislice, compressed sensing (pseudo-random undersampling + sparsity + iterative reconstruction), temporal acceleration for 4D.</p>
<h3>Motion</h3>
<p>Breath-hold, respiratory gating (bellows or navigator echo at liver–lung interface), radial/PROPELLER (BLADE) sampling, swapping phase/frequency directions, more averages, saturation bands, fast imaging, respiratory binning (4D-MRI). Stack-of-stars (StarVIBE/GRASP) is a 3D radial approach.</p>
<h3>Geometric distortion — critical for RT</h3>
<ul>
<li>Sources: <b>gradient non-linearity</b> (system; corrected by vendor 2D/3D filters — use 3D correction), <b>B0 inhomogeneity</b>, and <b>patient-induced susceptibility</b> and chemical shift.</li>
<li>Sequence-dependent: GRE (no refocusing) and long-TE T2* (DWI-EPI, BOLD) distort more; <b>higher readout bandwidth</b> reduces distortion (at the cost of SNR); depends on frequency-encoding direction and field strength.</li>
<li>3D large-FOV phantoms give an overall estimate and are used for constancy QA; patient-specific distortion still varies.</li>
</ul>
<h3>Field strength — low field (e.g., 0.35–0.5 T) pros/cons</h3>
<div class="table-wrap"><table><tr><th>Pros</th><th>Cons</th></tr>
<tr><td>Open design, lower purchase and operating cost, smaller fringe field, lower SAR, possible portability, less chemical-shift and susceptibility artifact</td><td>Lower SNR; poorer detection of calcification and haemorrhage; reduced contrast-agent sensitivity; worse fat–water frequency-selective suppression</td></tr></table></div>
<h3>Sequence families</h3>
<ul>
<li>Spoiled GRE (FLASH/SPGR) vs coherent GRE/SSFP (FISP/GRASS, PSIF, balanced: TrueFISP/FIESTA/bFFE).</li>
<li>MPRAGE/IR-SPGR (3D T1 with inversion prep); VIBE/LAVA/THRIVE (3D T1 GRE, breath-hold); CISS/FIESTA-C (high-resolution cranial nerves, cysts).</li>
</ul>

<h2>MR in the RT department</h2>
<ul>
<li><b>MR simulation</b> and <b>MR-only</b> planning with synthetic CT (deep learning feasibility shown for pelvis, abdomen, liver, breast; MR-PROTECT prostate study used CT only as QA) — removes CT-MR registration uncertainty.</li>
<li><b>MR-linac</b> safety: magnetic + RF + radiation shielding; MR-safe QA and immobilization; electron return effect raises skin/exit/air–tissue interface dose in perpendicular configurations; dual-trained RTTs.</li>
<li>Cost: MR-linac service contracts ≈ USD $1000/workday more than conventional linacs; long treatment times (median 45–80 min/fraction in early ViewRay/Unity adaptive series).</li>
</ul>
<p class="src">Sources: FCCPM_MRI.pptx (group MRI session); Notes to Share – Shima (MRgRT); Recorded MRI sessions (2024-05-10). Items flagged general knowledge are standard references (ACR Manual on MR Safety, CPQR).</p>
`});

NOTES.push({
id: 'nucmed', group: 'Radiation protection', icon: '💉', title: 'Nuclear medicine radiation safety',
summary: 'Isotopes and half-lives, NM licences and misadministration, thyroid screening, PET program start-up, theranostics logistics, and classic NM scenario questions.',
html: `
<h2>Isotopes to know</h2>
<div class="table-wrap"><table>
<tr><th>Nuclide</th><th>Half-life</th><th>Emission / use</th><th>Shielding note</th></tr>
<tr><td>F-18</td><td>~110 min</td><td>β⁺ → 511 keV; FDG/PSMA PET</td><td>Thick lead/tungsten for 511 keV</td></tr>
<tr><td>Ga-68</td><td>68 min</td><td>β⁺; DOTATATE, PSMA-11 PET; generator-produced</td><td></td></tr>
<tr><td>Tc-99m</td><td>6 h</td><td>140 keV γ; SPECT; Mo-99 generator ("milk the cow")</td><td>~20–30 µSv/h near patient at injection</td></tr>
<tr><td>I-131</td><td>8 d</td><td>β (Emax 0.61, mean ~0.19 MeV, ~0.8 mm range) + 364 keV γ; thyroid therapy</td><td>Thyroid screening for handlers</td></tr>
<tr><td>I-124</td><td>4.2 d</td><td>β⁺; PET dosimetry</td><td></td></tr>
<tr><td>I-125</td><td>~59–60 d</td><td>~28–35 keV; LDR prostate seeds</td><td>HVL Pb ≈ 0.025 mm</td></tr>
<tr><td>Pd-103</td><td>17 d</td><td>~21 keV; LDR seeds</td><td>&lt; 0.01 mm Pb</td></tr>
<tr><td>Lu-177</td><td>6.7 d</td><td>β⁻ therapy + imageable γ; DOTATATE, PSMA-617</td><td></td></tr>
<tr><td>Y-90</td><td>64 h</td><td>pure β⁻; microspheres (liver SIRT — also regulated like brachy sealed devices)</td><td>Bremsstrahlung — low-Z then high-Z</td></tr>
<tr><td>Ra-223</td><td>11.4 d</td><td>α; bone metastases (prostate)</td><td></td></tr>
<tr><td>Ir-192</td><td>~74 d</td><td>~380 keV avg γ; HDR/PDR</td><td>HVL Pb ≈ 2.5 mm</td></tr>
<tr><td>Co-60</td><td>5.27 y</td><td>1.17 + 1.33 MeV γ; GK, teletherapy</td><td>~20 cm concrete TVL-scale</td></tr>
</table></div>

<h2>NM licences & regulatory points</h2>
<ul>
<li>Diagnostic NM: staff doses are low — techs rarely approach 1 mSv/yr even with constant patient contact ("CNSC doesn't worry much").</li>
<li>Therapy: shielded rooms, release criteria (dose rate at 2 m), patient consent to post-therapy behaviour (~1 week: avoid children, own bathroom/bed).</li>
<li>Once administered, the patient isn't under licensee control in the same way — but institutional reputation means you still act responsibly.</li>
<li><b>NM misadministration</b> (inform CNSC per notes): wrong patient, wrong radiopharmaceutical, wrong activity (beyond ~±20%). US NRC medical event definitions: dose differs ≥ 20% (total) or ≥ 50% (fraction), wrong drug, route, patient, site, leaking source, or &gt; 0.5 Sv to an organ.</li>
<li><b>Thyroid screening</b> for I-131 handlers: background → investigation level → reporting level (recorded in ACR).</li>
<li>Real CNSC events: hand overdoses during I-131 liquid therapy (2.3 Sv right hand, 2017) and Y-90 injections (1.1 Sv, 2016) — extremity dosimetry, syringe shields, tongs, technique.</li>
</ul>

<h2>Starting a PET program</h2>
<ul>
<li>Clinical need and indications; scanner choice (PET-CT vs PET-MR); isotope supply (cyclotron on site vs delivered; generator Ga-68).</li>
<li>Licensing: NM licence for unsealed sources; cyclotron is Class II (construct/operate, neutron shielding, containment, hot cells).</li>
<li>Infrastructure: uptake rooms (shielded), dedicated washrooms, hot lab, dose calibrator, waste/decay storage, shipping/receiving with TDG-trained staff.</li>
<li>Staffing (Ben's estimates, theranostics): without cyclotron ~4 FTE techs, 1 nurse, 0.5 FTE physicist, 1 FTE NM physician; with cyclotron add ~1 FTE PhD cyclotron physicist, 2 FTE radiochemists, 1 FTE radiopharmacist. Costs: SPECT/CT ~$0.5M, PET/CT ~$3M, dose calibrator ~$100k; PET agent $2–3k/dose, therapeutic ~$50k/dose; I-131 cheap.</li>
<li>Theranostics program needs: caseload to keep competency (&gt; ~40/yr suggested), RSO/licence, decontamination and waste, lead-lined in-patient room, pharmacy, nursing, NM techs, dosimetry software and expertise.</li>
</ul>

<h2>PET in RT planning</h2>
<ul>
<li>Staging, GTV delineation (lung, H&amp;N, lymphoma, cervix nodes), PSMA for prostate recurrence, metabolically adaptive boosts (e.g., PET-boost lung trials).</li>
<li>If you could pick one PET agent for RT: FDG (broad availability) or PSMA (prostate staging, high specificity) — justify with clinical impact.</li>
<li>PET-guided delivery (RefleXion BgRT): noise/resolution of real-time PET, uneven uptake, FDG also images inflammation, cell kill reduces signal during treatment, NM infrastructure, RTT training.</li>
</ul>

<h2>Classic NM scenarios</h2>
<ul>
<li><b>Pregnant RTT treated a patient 4 h after FDG PET, 15 min contact</b>: two half-lives → 25% activity left; dose trivial (full-time PET techs stay well below action levels); ICRP: &lt; 100 mGy fetal dose no added risk; offer reconstruction (survey a similar patient), dosimeter read, reassurance.</li>
<li><b>FDG patient driven home by a pregnant woman</b>: fine with simple advice (sit apart, short trip after waiting) — dose is microsieverts.</li>
<li><b>Floor contamination 20,000 cps I-131 after therapy</b>: secure, PPE, decontaminate, bag waste, monitor people, thyroid check, survey until below limits, decay fixed contamination, RSO, investigate.</li>
<li><b>Tech's badge "hot"</b>: verify (personal or not), investigate, action-level logic, CNSC if limits.</li>
<li><b>I-131 therapy patient dies at day 5 (100 mCi)</b>: REGDOC-2.7.3 — PPE, minimize time, avoid thyroid; cremation wait ~4 months; contact funeral home/medical examiner with guidance.</li>
<li><b>Friend worried about her kids after her NM scan</b>: compassion, context, outside your role → direct to NM department / patient relations.</li>
<li><b>Reactor proposed near a neighbourhood</b>: licensed and stringently regulated by CNSC, defence in depth, oversight, invite questions to CNSC.</li>
<li><b>What is the CNSC's role in NM?</b> Federal regulator under the NSCA; licenses possession/use of nuclear substances and prescribed equipment (cyclotrons), verifies compliance (desktop review, Type I/II inspections), enforces (orders, AMPs, licence action, prosecution).</li>
</ul>
<p class="src">Sources: Nuclear Medicine_Hans.pdf (session with Hans/Terry); SUMMARY_Radiation Safety (Terry Riauka meeting); Notes to Share – Shima (theranostics); CNSC Class II event reports.</p>
`});

NOTES.push({
id: 'events', group: 'Clinical issues', icon: '🚨', title: 'Adverse events & incident learning',
summary: 'Managing a clinical adverse event (RESPOND), error severity levels, disclosure of harm, RCA/FMEA/FTA (TG-100), incident learning systems (NSIR-RT, RO-ILS), just culture and famous RT accidents.',
html: `
<h2>Definitions</h2>
<ul>
<li><b>Clinical adverse event (CAE)</b> (AHS): injury or complication with outcomes ranging from death/disability to dissatisfaction, or requiring a change in patient care/monitoring. <b>Harm</b>: unexpected outcome negatively affecting health or quality of life. <b>Close call/near miss</b>: did not reach the patient. <b>Hazard</b>: condition that could cause harm.</li>
<li><b>Incident</b>: unwanted/unexpected change from normal system behaviour with potential for adverse effect. <b>Near miss</b>: could have caused injury but didn't — "free lessons".</li>
<li>RO-ILS categories: therapeutic radiation incident; other safety incident (collision, fall); near miss; unsafe condition; operational/process improvement.</li>
<li><b>QA</b> confirms desired quality is met (programmatic); <b>QC</b> = specific tests that measure a parameter, compare to the desired value and act on the difference (TG-100 definitions).</li>
</ul>

<h2>How big is the error? Severity levels</h2>
<div class="table-wrap"><table>
<tr><th>Level (Rahimian et al., "Human errors in EBRT", Med Phys 2003)</th><th>Dose deviation to PTV</th><th>Action</th></tr>
<tr><td>Level I</td><td>&lt; 5%</td><td>Within RO-to-RO variation; record for internal audit; no need to inform patient</td></tr>
<tr><td>Level II</td><td>5–10%</td><td>Potentially clinically relevant; physician's discretion to inform</td></tr>
<tr><td>Level III</td><td>&gt; 10% (or any long-term toxicity / loss of control)</td><td>Significant — must inform patient; formal report to authorities; internal audit, possibly external review</td></tr>
</table></div>
<ul>
<li><b>US NRC medical event / misadministration</b>: total dose differs from prescription by ≥ <b>20%</b>; single-fraction dose by ≥ <b>50%</b>; &gt; 0.5 Sv to an organ outside the treatment site; wrong patient, wrong mode/route, wrong drug, leaking source; embryo/fetus or nursing child dose &gt; 50 mSv is separately reportable.</li>
<li>Calibration tolerance locally ~2% — beyond that inform the RO. In Canada, <b>clinical</b> dose errors aren't generally CNSC matters unless they involve equipment malfunction, licence violation, or affect licensed workload (e.g., calibration error changing output).</li>
</ul>

<h2>Managing a CAE — R.E.S.P.O.N.D.</h2>
<ol>
<li><b>R</b>espond to the patient (immediate medical needs).</li>
<li><b>E</b>nsure safety of the area (equipment to safe state).</li>
<li><b>S</b>ecure the area — no repair/service until investigated; preserve evidence (photos, settings, logs).</li>
<li><b>P</b>rotect other patients and staff (are others affected? stop the machine/program).</li>
<li><b>O</b>ffer support (patient, family, staff — "second victims").</li>
<li><b>N</b>otify stakeholders (RO, RTT manager, MP head, admin, RSO if relevant).</li>
<li><b>D</b>isclose and <b>D</b>ocument (RLS + health record).</li>
</ol>
<p>Then: designate a clinical leader; CAE management meetings with patient and AHS representatives; a single key contact; practical supports (parking, meals, accommodation).</p>
<h3>Physics-specific steps</h3>
<ul>
<li>First, <b>confirm the problem</b> (repeat measurement, independent physicist, independent equipment) — don't start a panic if you have time to double-check.</li>
<li>Take equipment/program out of service; determine <b>scope</b> (which patients, which dates, which energies/applicators).</li>
<li>Reconstruct delivered dose; with RO determine clinical impact and options (compensation is possible for underdose, not overdose).</li>
<li>Fix, re-commission with independent check, external audit (IROC/third party) if serious.</li>
<li>RCA → corrective and preventive actions → education → close the loop.</li>
</ul>

<h2>Disclosure of harm (AHS policy)</h2>
<ul>
<li>Disclose when harm occurred, potential future harm exists, or care/monitoring changes because of a CAE. <b>When unclear whether disclosure benefits the patient — disclose.</b></li>
<li>Steps: <b>acknowledgement and apology</b> (Alberta Evidence Act: an apology is not admissible as evidence of fault) → initial disclosure meeting (apology, facts known so far without speculation, patient's understanding and questions, support, what changes in care, key contact) → subsequent meetings with investigation results and next steps.</li>
<li>Do <b>not</b> disclose other patients' identities or disciplinary actions. Document disclosure in the health record.</li>
<li>Multi-patient disclosure: steering team (clinical experts, leaders, communications, ethics, legal/privacy); careful list of affected patients; disclose individually before any public notice; consistent info at the same time; phone or registered letter if harm uncertain.</li>
<li>Patients told the truth with an apology and plan are more satisfied; disclosure policies reduce claims ("acknowledge and apologize" vs "deny and defend").</li>
</ul>
<h3>Immediate CAE management (first 24–48 h)</h3>
<p>Patient support → determine if others affected → communicate privately → begin apology → environmental safety (quarantine devices, photograph, preserve settings, chain of evidence) → document (health record, RLS, mandatory external reports) → notify/handover. Ongoing management adds evaluation and improvement. Principle: individuals aren't held accountable for system failures beyond their control.</p>
<h3>AHS "Never Events"</h3>
<p>Most serious CAEs (e.g., wrong patient/site/procedure surgery, retained foreign body, infant discharged to wrong family, incompatible blood, contaminated drug/device). Must be in RLS with a documented decision on Quality Assurance Review.</p>

<h2>Reactive vs proactive risk management</h2>
<h3>Root cause analysis (reactive)</h3>
<ul>
<li>What happened (care delivery problems) → why (causal/contributory factors) → what to do. Templates: <b>London Protocol</b>, VA RCA toolkit.</li>
<li>Cross-professional team, not led by someone in a position of power over those involved; fact-finding, not blame; interviews in private.</li>
<li>There is <b>never a single root cause</b> — a web of factors (median ~7 per event). "Human error" is not an answer. Use the <b>five whys</b>. Beware <b>outcome/hindsight bias</b>.</li>
<li>Action hierarchy: eliminate the error → make it more detectable → reduce impact. Stronger actions are engineering/forcing functions; weaker ones are training and policy reminders.</li>
</ul>
<h3>AAPM TG-100 (proactive)</h3>
<ol>
<li><b>Process map</b> of the whole workflow (e.g., IMRT).</li>
<li><b>FMEA</b>: for each step, failure modes scored for <b>Occurrence (O)</b>, <b>Severity (S)</b> and <b>lack of Detectability (D)</b>, each 1–10 → <b>RPN = O × S × D</b> (1–1000). Prioritize high RPN and high-severity modes.</li>
<li><b>Fault tree analysis</b>: how failures propagate; choose intervention points.</li>
<li>Design the <b>QM program</b> (QC checks, checklists, forcing functions) around the priorities.</li>
</ol>
<div class="callout tip"><strong>Using FMEA in an argument:</strong> "Physics chart checks catch rare errors (low O) with catastrophic consequences (high S); removing them raises D. FMEA would never support dropping the last gatekeeper — widen the bottleneck with resources instead."</div>

<h2>Incident learning systems (ILS)</h2>
<ul>
<li><b>NSIR-RT</b> (National System for Incident Reporting – Radiation Treatment): CIHI + CPQR; piloted 2015–16 (28 centres, 6 jurisdictions), launched <b>2017</b>; anonymous, web-based; data on impact, discovery, technique, contributing factors, lessons. CPQR is now a standing committee of <b>CAPCA</b> and stewards national RT incident reporting. In AHS, events from the internal <b>RLS</b> are manually entered into NSIR-RT.</li>
<li><b>RO-ILS</b> (ASTRO + AAPM, 2014) via Clarity PSO; Patient Safety Organization status gives US legal protection from discovery, enabling sharing. Aggregate reports; AAPM curriculum on QI and incident learning.</li>
<li>Others: ROSIS (ESTRO, 2001), SAFRON (IAEA, 2012).</li>
<li>Effective ILS (Ford et al., Med Phys 2018): include near misses (≈2–14 near misses per actual incident; ratio &gt; 10–15 suggests healthy reporting), department-level ownership, electronic reporting (≈20× more reports than paper), triage (major → full RCA; others → QA meeting), action plans, <b>feedback to reporters</b> (strongest predictor of reporting), safety rounds, "good catch" programs, metrics, safety culture surveys (~every 18 months). <b>More reports = better safety culture.</b></li>
<li>Barriers: inertia ("fix and forget"), unclear what to report, fear of blame, reputation, time.</li>
<li>Australian 15-year review (Smith et al. 2020): ~1 actual error per 1000 attendances; 90% of reports by RTTs; daily IGRT reduced severity; multidisciplinary reporting increased reports.</li>
<li>RT is generally very safe — significant adverse outcomes ≈ 3 per 100,000; harmful incidents ≈ 0.1–0.2%.</li>
</ul>

<h2>Safety culture and just culture</h2>
<ul>
<li><b>Safety culture</b>: leadership welcomes bad news, wants the truth about strengths and weaknesses; dedicated to improvement.</li>
<li><b>Just culture</b>: balances blame-free and punitive extremes. Distinguish <b>human error</b> (console), <b>at-risk behaviour</b> (coach), <b>reckless conduct</b> (sanction). "We cannot change the human condition, but we can change the conditions under which humans work."</li>
<li><b>Second victim syndrome</b>: providers involved in errors suffer anxiety, sleep disturbance — peer support programs; offer RTTs mental-health resources after overdose events.</li>
<li>ASTRO <b>Safety is No Accident</b> tools: staffing/scheduling, communication and workflow, <b>standardization</b>, documentation, QA, peer review, safety rounds, QA committee, learning from ILS, third-party audit/credentialing, vendor collaboration. Most common failure: not following policies and procedures.</li>
<li>Vanessa's Law (Protecting Canadians from Unsafe Drugs Act, 2014): hospitals must report <b>serious adverse drug reactions</b> and <b>medical device incidents</b> to Health Canada.</li>
</ul>

<h2>Famous radiotherapy incidents (know 4–5 well)</h2>
<div class="table-wrap"><table>
<tr><th>Event</th><th>What happened</th><th>Lessons</th></tr>
<tr><td><b>Ottawa orthovoltage</b> (2004–2007; public 2008)</td><td>Unit moved/recommissioned; output tables omitted the <b>backscatter factor</b> for applicators other than the reference → ~620 patients affected, <b>326 curative</b> underdosed (up to ~20%). Found at annual QC (not done for 3 years). Class action.</td><td>Understaffing and pressure, no independent second check of commissioning (4 h of informal review), national QA protocols not followed. Resources, team commissioning, independent review.</td></tr>
<tr><td><b>Hamilton gyne HDR</b> (2019)</td><td>Wrong transfer-tube/applicator length not detected by QA → dose delivered to wrong location; ~30 patients.</td><td>Applicator/length QA, end-to-end tests, commissioning of new applicators.</td></tr>
<tr><td><b>Toulouse SRS</b> (2006–07)</td><td>Ion chamber too large for the smallest micro-MLC fields during commissioning → ~145 patients overdosed (up to 200%).</td><td>Small-field dosimetry (TRS-483), detector choice, independent audit.</td></tr>
<tr><td><b>Springfield, Missouri SRS</b> (2004–09)</td><td>Same small-field detector error (~50% overdose, ~150 patients).</td><td>Same; external credentialing (IROC).</td></tr>
<tr><td><b>New York (Jerome-Parks)</b> (2005; NYT 2010)</td><td>IMRT plan edit lost after a computer crash; MLC sequence not saved → open field delivered three fractions; lethal H&amp;N overdose.</td><td>Data integrity, R&amp;V checks, in-vivo/portal verification, chart QA, software interlocks.</td></tr>
<tr><td><b>Épinal, France</b> (1987–2006)</td><td>Several errors (wedge factor misuse with dynamic wedges, in-house calcs, imaging dose) — thousands of patients over/underdosed.</td><td>Training on new tech, independent calc, reporting culture.</td></tr>
<tr><td><b>Panama</b> (2000–01)</td><td>TPS shielding-block data entry workaround doubled treatment times → 28 patients severely overdosed (up to 100%).</td><td>Validate TPS use outside tested conditions; independent MU check.</td></tr>
<tr><td><b>Costa Rica Co-60</b> (1996)</td><td>Timer calibration error (0.3 min read as 30 s) → ~60% overdoses, 115 patients.</td><td>Independent calibration check, unit conventions.</td></tr>
<tr><td><b>Linac-based SRS: wrong chamber at your new job</b> (exam scenario)</td><td>Commissioning physicist retired; same chamber used for QA so numbers always "agreed".</td><td>Stop new patients, independent re-measurement, external review, dose reconstruction, disclosure, RCA, team (not single-person) expertise.</td></tr>
</table></div>
<p>Lessons from past incidents (Knöös, Clin Oncol 2017): work with awareness; comprehensive documentation for acceptance/commissioning/QC; independent second checks; external audits; well-trained staff (vendor training, CPD); clearly defined roles; knowledge of past incidents.</p>

<h2>Pregnancy discovered during radiotherapy</h2>
<ul>
<li>Despite screening, pregnancies occur (contraceptive failure, irregular cycles with chemo, misunderstanding).</li>
<li>Stop treatment; estimate fetal dose (TG-36 peripheral-dose data: collimator scatter + head leakage + patient scatter vs distance from field edge and field size; TG-158 for modern techniques; ±~20–30% uncertainty); involve RO, MO, MP, high-risk obstetrics.</li>
<li>ICRP 84: &lt; 100 mGy — no added malformation risk; 100–500 mGy — uncertain; &gt; 500 mGy — high risk of growth retardation and CNS damage. Stages: pre-implantation (0–9 d, all-or-nothing), organogenesis (~10 d–6 wk, malformations), fetal (growth restriction; 8–15 wk severe intellectual disability; childhood cancer ~0.006%/mGy).</li>
<li>Published example (Karp, PRO 2021): breast RT, pregnancy found after 23 fractions; ~9.4 mGy/fraction to uterine fundus → ~216 mGy total, in the uncertain range. Off-axis rule of thumb (10×10 field): &lt; 5% at 5 cm, &lt; 1% at 10 cm from field edge.</li>
<li>Prevention: robust screening language, patient education, pregnancy test before simulation.</li>
</ul>

<h2>Answer templates from the group</h2>
<p>See <a href="#/frameworks">Answer frameworks</a>: Clinical issues framework (scope → is it a misadministration → notify RO → investigate → reconstruct → clinical impact → RCA → report → new procedures/training) and the immediate / short / medium / long-term adverse-event framework.</p>
<p class="src">Sources: CAE-SUMMARY; Jay's notes (Ford 2018, Arnold 2022, Smith 2020 summaries); Responding to an Adverse Event Question; Clinical Issues Framework; FCCPM Questions.docx; Safety, ethics, legal.docx. Incident details for Toulouse/Springfield/NYC/Costa Rica supplemented from the published record.</p>
`});
