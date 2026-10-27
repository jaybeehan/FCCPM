/* Notes part D: competing modalities, emerging technologies, clinical/tumour sites, IT & cybersecurity, organizations */

NOTES.push({
id: 'competing', group: 'Technology', icon: '🆚', title: 'Competing technologies & modalities',
summary: 'How to compare technologies (the 7-consideration formula), MR-linac vs CT-guided adaptive, GK vs linac SRS, CyberKnife, Tomotherapy/Radixact, Halcyon, protons vs photons, HDR vs SBRT.',
html: `
<h2>The formula for competing technologies</h2>
<ol>
<li><b>Clinical need & evidence</b>: which patients, how many, level of evidence (R-IDEAL stage), guidelines.</li>
<li><b>Dosimetric/technical performance</b>: conformity, accuracy, imaging, motion management, adaptive capability.</li>
<li><b>Workflow & throughput</b>: time per fraction, staffing, training.</li>
<li><b>Costs</b>: capital, building/shielding, service, staff, consumables (Co-60 reload), lifetime.</li>
<li><b>Safety & QA</b>: commissioning complexity, QA burden, failure modes, regulatory/licensing needs.</li>
<li><b>Institutional fit</b>: existing fleet, interchangeability (beam matching), IT/OIS integration, research/academic goals, vendor stability.</li>
<li><b>Patient perspective & equity</b>: comfort, number of visits, access, travel.</li>
</ol>
<div class="callout tip">Always end with a balanced recommendation: "It depends on the patient population and program goals — for our centre I'd recommend X because…, with metrics to re-evaluate in N years."</div>

<h2>Platform cheat-sheet</h2>
<div class="table-wrap"><table>
<tr><th>System</th><th>Key specs</th><th>Strengths</th><th>Limitations</th></tr>
<tr><td><b>Elekta Unity</b> MR-linac</td><td>1.5 T, 7 MV FFF, perpendicular field</td><td>Diagnostic-quality MR, online adaptive (ATP/ATS), cine-MR</td><td>Long sessions, no couch lateral motion, ERE, limited field size, staffing, cost</td></tr>
<tr><td><b>ViewRay MRIdian</b></td><td>0.35 T, 6 MV FFF</td><td>Real-time MR gating, SMART pancreas (Parikh: 50 Gy/5 fx)</td><td>Lower MR quality; <b>ViewRay bankruptcy 2023</b> — vendor risk (service/parts)</td></tr>
<tr><td><b>Aurora (MagnetTx)</b></td><td>0.5 T biplanar, inline field, no cryogens</td><td>Canadian (Edmonton, Fallone), rotating with gantry, reduced ERE</td><td>Early clinical stage</td></tr>
<tr><td><b>Varian Ethos</b></td><td>6 MV FFF, 800 MU/min, iCBCT, ring gantry</td><td>AI-driven CT-guided online adaptive (~15–25 min), lower cost than MR-linac</td><td>CBCT soft-tissue contrast, no real-time tracking</td></tr>
<tr><td><b>Varian Halcyon</b></td><td>6 MV FFF, ring gantry, dual-layer MLC, 4× faster rotation</td><td>Throughput, simplified commissioning (pre-configured), small footprint</td><td>Single energy, no electrons, limited couch</td></tr>
<tr><td><b>Accuray Tomotherapy / Radixact</b></td><td>6 MV, helical, binary MLC, MVCT; Synchrony tracking</td><td>Long targets (TBI/TMI, CSI), modulation</td><td>Low-dose spread, MVCT image quality</td></tr>
<tr><td><b>CyberKnife</b></td><td>6 MV on robot, fiducial/spine/lung tracking, Synchrony</td><td>Real-time tracking, non-coplanar SRS/SBRT</td><td>Long treatments, small fields only, fiducials</td></tr>
<tr><td><b>Gamma Knife Icon/Esprit</b></td><td>~192 Co-60 sources; frameless with CBCT + IFMM</td><td>Sub-mm accuracy, low integral brain dose, many mets</td><td>Intracranial only, Co-60 security (Cat 1), source reloads</td></tr>
<tr><td><b>RefleXion X1</b></td><td>PET-linac, BgRT (biology-guided RT)</td><td>Treat with real-time PET emissions (multiple mets)</td><td>Low counts, FDG specificity, NM infrastructure</td></tr>
<tr><td><b>Vero</b></td><td>Gimbaled linac on O-ring</td><td>Dynamic tumour tracking</td><td>Discontinued</td></tr>
</table></div>

<h2>MR-guided vs CT-guided adaptive</h2>
<ul>
<li><b>MRgRT advantages</b>: soft-tissue contrast (pancreas, liver, prostate, cervix), no imaging dose, real-time gating, functional imaging (DWI response biomarkers), margin reduction (MIRAGE: aggressive MRgRT margins 2 mm vs CTgRT 4 mm → less acute GU/GI toxicity in prostate SBRT 40/5).</li>
<li><b>MRgRT challenges</b>: cost (capital and ~$1000/day more service), long treatment times (45–80 min), patient tolerance (claustrophobia, implants), dual-trained RTTs, physicist at console for adaptive, ERE, MR-safe QA tools, geometric distortion, electron density for dose (synthetic CT), limited evidence of clinical benefit beyond specific sites.</li>
<li><b>Duty-cycle argument</b>: if MRgRT allows fewer fractions (prostate 5 vs 20) total machine time may be similar despite longer sessions.</li>
<li>CT-guided adaptive (Ethos) captures much of the adaptive benefit at lower cost, faster; MR wins for gating and soft-tissue visualization.</li>
</ul>

<h2>Protons vs photons</h2>
<ul>
<li><b>Physics</b>: Bragg peak → no exit dose, lower integral dose (~2–3× lower than IMRT); SOBP (passive scattering) vs <b>pencil-beam scanning / IMPT</b> (dose painting, less neutron contamination).</li>
<li><b>Uncertainty</b>: range uncertainty ~2.5–3.5% + 1–3 mm (HU-to-stopping-power conversion) → robust optimization, avoid beams pointing at critical OARs; variable RBE (1.1 assumed, higher at distal end — brainstem necrosis concerns); anatomy changes.</li>
<li><b>Indications with consensus</b>: paediatrics (most), chordoma/chondrosarcoma of skull base, ocular melanoma (TRIUMF Vancouver — Canada's only proton facility, 74 MeV), re-irradiation, CSI; emerging: H&amp;N, oesophagus, liver, Hodgkin's mediastinum, breast with cardiac sparing.</li>
<li>Evidence: model-based selection (Netherlands NTCP ΔNTCP thresholds) vs RCTs (lung RCT Liao 2018 no difference; oesophagus Lin 2020 fewer complications; PARTIQoL prostate).</li>
<li>Canada: out-of-country referrals (~$240k–330k/patient); proposed centres Alberta (Calgary), Ontario (Sunnybrook/PMH), Quebec (CHUM). ~6% of RT patients potentially eligible.</li>
<li>Costs: multi-room centre ~$150–250M; compact single-room ~$30–50M; FLASH-capable proton systems.</li>
</ul>

<h2>Other comparisons the panel likes</h2>
<ul>
<li><b>GK vs linac SRS</b>: GK better for many small mets and functional targets, lower brain dose; linac more flexible (extracranial, larger lesions, single-iso multiple-target VMAT ~ comparable for &lt; 10 mets), no Co-60 security/reload.</li>
<li><b>HDR vs SBRT prostate boost</b>: HDR (15 Gy × 1 + EBRT) best dose escalation and conformity, invasive, anaesthetic, specialized team; SBRT non-invasive, widely available (PACE trials), fiducials, motion.</li>
<li><b>LDR vs HDR brachy</b>: LDR single implant, seeds permanent, radiation-safety considerations (patient release, cremation); HDR outpatient, optimizable, shielded room, Cat 3 source security.</li>
<li><b>Tomotherapy vs VMAT for TMI/TBI</b>; <b>Halcyon vs TrueBeam</b> fleet decisions (machine interchangeability, electron needs).</li>
<li><b>In-house software vs commercial</b>: flexibility and cost vs regulatory (Health Canada device classes), validation, support, cybersecurity.</li>
</ul>
<p class="src">Sources: Competing modalities.docx; Formula for competing technologies (May 2024); Notes to Share – Shima (modality table, MRgRT challenges, MIRAGE, SMART, ViewRay); Emerging tech SUMMARY; Proton rationale notes (Ontario HTA, Safavi 2022, TRIUMF).</p>
`});

NOTES.push({
id: 'emerging', group: 'Technology', icon: '🚀', title: 'Emerging technologies',
summary: 'FLASH, adaptive RT, theranostics, immunotherapy + RT, AI/automation and big data, nanoparticles, PET/MR, BgRT, upright treatment — and how to implement any new technology safely.',
html: `
<h2>How to introduce a new technology (universal answer)</h2>
<ol>
<li>Clinical need and evidence; R-IDEAL stage; does it fit the strategic plan?</li>
<li>Stakeholder team; site visits; literature and guidance (AAPM TGs, CPQR, MPPGs).</li>
<li>Business case; procurement; regulatory (Health Canada device licence, CNSC licence, ITA if investigational).</li>
<li>Commissioning with independent verification and end-to-end tests; FMEA (TG-100) of the new workflow.</li>
<li>Training and credentialing (staff competency, vendor training, mentorship from experienced centres).</li>
<li>Clinical start: conservative (simple cases first), in a research protocol/registry where appropriate.</li>
<li>Outcomes monitoring, incident learning, periodic review; decommissioning plan.</li>
</ol>

<h2>FLASH radiotherapy</h2>
<ul>
<li>Ultra-high dose rate (&gt; ~40 Gy/s mean; often &gt; 100 Gy/s), single or few pulses, total time &lt; ~0.1–0.2 s → <b>normal-tissue sparing</b> with similar tumour control in animal studies ("FLASH effect").</li>
<li>Hypotheses: oxygen depletion, differential redox metabolism, immune sparing (fewer circulating lymphocytes irradiated).</li>
<li>Delivery: modified electron linacs (shallow), protons (transmission beams — FAST-01 bone mets trial, Cincinnati 2022), VHEE (very high-energy electrons), photon FLASH hard.</li>
<li>Physics challenges: dosimetry at ultra-high dose rate (ion chamber recombination → use films, alanine, calorimetry, Faraday cups), beam monitoring, real-time interlocks, pulse structure parameters (dose per pulse, instantaneous rate), treatment planning, safety (a fault delivers the whole dose before you can react).</li>
</ul>

<h2>Adaptive radiotherapy</h2>
<ul>
<li>Offline (replan between fractions), online (adapt while patient on couch), real-time (intrafraction tracking).</li>
<li>Online workflow: image → contour (AI-assisted) → re-optimize (or adapt-to-shape vs adapt-to-position) → QA (secondary calc, Monte Carlo, log files — no time for measurement) → deliver.</li>
<li>Requirements: RO and physicist (or trained RTT) present, fast QA tools, deformable registration validation (TG-132), dose accumulation uncertainty.</li>
<li>Staffing changes: physicist/RO at console — new models train RTTs for adaptive tasks.</li>
</ul>

<h2>Theranostics / radiopharmaceutical therapy</h2>
<ul>
<li>Same targeting molecule for imaging (Ga-68, F-18) and therapy (Lu-177, Ac-225).</li>
<li><b>Lu-177 DOTATATE (Lutathera)</b> for neuroendocrine tumours — <b>NETTER-1</b>: 7.4 GBq × 4 cycles; improved PFS.</li>
<li><b>Lu-177 PSMA-617 (Pluvicto)</b> for mCRPC — <b>VISION</b> trial: improved OS (15.3 vs 11.3 months) and rPFS.</li>
<li>Ra-223 (Xofigo) for bone mets; I-131 for thyroid; Y-90 microspheres for liver.</li>
<li>Physics opportunities: <b>patient-specific dosimetry</b> (SPECT/CT quantitation, MIRD, voxel-level dose, kidney/marrow limits) — currently fixed activity is common; RT physicists bring dose-response thinking; combine with EBRT (dose summation challenges, radiobiology of continuous low dose rate).</li>
<li>Program needs: see Nuclear medicine notes (licensing, rooms, staffing, costs ~$50k/dose).</li>
</ul>

<h2>Immunotherapy + RT</h2>
<ul>
<li>Checkpoint inhibitors (anti-PD-1/PD-L1: pembrolizumab, nivolumab, durvalumab; anti-CTLA-4: ipilimumab); CAR-T cells (bridging RT).</li>
<li>RT as in-situ vaccine: immunogenic cell death, antigen release, MHC-I upregulation; <b>abscopal effect</b> (rare alone, more with IO).</li>
<li><b>PACIFIC</b>: durvalumab after chemoRT for stage III NSCLC → OS benefit (standard of care).</li>
<li>Open questions: dose/fractionation (SBRT 8 Gy × 3 may be more immunogenic than single high dose — TREX1 induction), sequencing, number of sites, lymphocyte sparing (circulating blood dose — RT-induced lymphopenia worsens outcomes), toxicity overlap (pneumonitis).</li>
</ul>

<h2>AI, automation and big data</h2>
<ul>
<li>Uses: auto-contouring (deep learning — U-Net/CNN), auto-planning (knowledge-based — RapidPlan; scripted), synthetic CT, QA prediction, outcome modelling (radiomics), workflow, image reconstruction.</li>
<li>Commissioning AI: local validation dataset, geometric (Dice, Hausdorff, surface Dice) and dosimetric impact, clinical acceptability; edge cases; version control; monitor <b>drift</b>.</li>
<li>Risks: automation bias, deskilling, bias, black box, cybersecurity, vendor lock-in; AAPM TG-273 (AI in medical physics), ethics (Geis 2019).</li>
<li><b>Big data</b>: registries, structured data standards (TG-263 nomenclature), interoperability (DICOM-RT, HL7/FHIR), privacy (HIA, de-identification), federated learning keeps data local.</li>
<li>Automation's effect on staffing: frees time but needs QA; argue for redeploying not cutting.</li>
</ul>

<h2>Others</h2>
<ul>
<li><b>Nanoparticles</b> (gold, hafnium oxide — NBTXR3 in sarcoma Act.In.Sarc phase III): dose enhancement via photoelectric effect at kV energies; at MV, enhancement through local secondary electrons; dosimetry challenges.</li>
<li><b>PET/MR</b>: superior soft tissue for brain, pelvis, paediatrics (less dose); scanner ~$10M, service ~$400k/yr; attenuation correction harder; limited throughput.</li>
<li><b>BgRT</b> (RefleXion) — PET emissions steer beams.</li>
<li><b>Upright radiotherapy</b> (Leo Cancer Care chairs) — cheaper proton rooms, respiratory benefits.</li>
<li><b>Spatially fractionated RT</b> (GRID, LATTICE, minibeams) for bulky tumours.</li>
<li><b>Surface-guided RT</b> (SGRT) — setup, DIBH for left breast, frameless SRS; reduce tattoos.</li>
<li><b>Ultra-hypofractionation</b> and SBRT for oligometastases (SABR-COMET: OS benefit for oligomets).</li>
</ul>
<p class="src">Sources: Emerging Technologies folder (Big data, Automation); Emerging tech SUMMARY tables; Notes to Share – Shima (adaptive, immunotherapy, theranostics, nanoparticles, PET/MR); FCCPM Questions.docx.</p>
`});

NOTES.push({
id: 'clinical', group: 'Clinical issues', icon: '🎯', title: 'Clinical knowledge by tumour site',
summary: 'Standard fractionations and landmark trials by site — what a physicist should know to discuss clinical scenarios credibly.',
html: `
<div class="callout info">Panels expect physicists to speak the clinical language: common regimens, why hypofractionation, which trials changed practice. Doses are typical regimens — confirm against local guidelines.</div>
<h2>Breast</h2>
<ul>
<li>Whole breast: 40 Gy/15 (START-B), <b>26 Gy/5 over 1 week (FAST-Forward)</b>; boost for young/high risk.</li>
<li>APBI: 30 Gy/5 (Florence), 27 Gy/5; IMPORT LOW partial breast; RAPID (38.5/10 BID — worse cosmesis).</li>
<li>Regional nodal: MA.20; omission trials (MA.39 Tailor RT; PRIME II older patients); DIBH for left-sided cardiac sparing (Darby: +7.4% major coronary events per Gy mean heart dose).</li>
</ul>
<h2>Prostate</h2>
<ul>
<li>Conventional 78 Gy/39; moderate hypo <b>60 Gy/20 (CHHiP, PROFIT)</b>; SBRT <b>36.25 Gy/5 (PACE-B, HYPO-RT-PC 42.7/7)</b>.</li>
<li>Boosts: HDR 15 Gy × 1, LDR (ASCENDE-RT: LDR boost improved bPFS, more GU toxicity), focal boost (FLAME).</li>
<li>Post-op: 66 Gy/33 or 52.5/20; RADICALS: early salvage as good as adjuvant. Rectal spacers (SpaceOAR). Fiducials; daily IGRT; MRgRT MIRAGE.</li>
</ul>
<h2>Lung</h2>
<ul>
<li>Stage III: 60 Gy/30 + chemo then <b>durvalumab (PACIFIC)</b>; RTOG 0617 — 74 Gy worse than 60 Gy (heart dose).</li>
<li>Early stage SBRT: 54 Gy/3 (peripheral), 48/4, 60/8 central (ultra-central caution — HILUS), single 34 Gy (RTOG 0915).</li>
<li>4D-CT, ITV/MidV, gating, DIBH; heterogeneity correction (type B/Monte Carlo).</li>
</ul>
<h2>Head and neck</h2>
<ul>
<li>70 Gy/35 with concurrent cisplatin; 60–66 Gy post-op; PORT 2 Gy/day; altered fractionation (DAHANCA 6 fx/week).</li>
<li>De-escalation in HPV+ (NRG HN005; cetuximab worse than cisplatin — RTOG 1016/De-ESCALaTE).</li>
<li>Adaptive replanning for weight loss; parotid sparing (PARSPORT); dysphagia-aimed IMRT.</li>
<li>Gaps in treatment matter: lose ~0.6–0.8 Gy/day of tumour control after ~day 21–28 — compensate (BID, weekend).</li>
</ul>
<h2>GI</h2>
<ul><li>Rectum: 25 Gy/5 short course (RAPIDO TNT), 50.4/28 long course; watch-and-wait (OPRA).</li>
<li>Oesophagus: CROSS 41.4/23 neoadjuvant. Anal canal: IMRT 54 Gy with mitomycin/5-FU. Pancreas: SBRT/SMART 50/5 (MRgRT). Liver: SBRT, Y-90.</li></ul>
<h2>Gynaecology</h2>
<ul><li>Cervix: 45 Gy/25 EBRT + concurrent cisplatin + image-guided brachytherapy (<b>EMBRACE II</b>: HR-CTV D90 ≥ 85 Gy EQD2; bladder D2cc &lt; 80, rectum &lt; 65 Gy EQD2). Overall time &lt; 50–56 days.</li>
<li>Endometrium: vaginal vault brachy (PORTEC-2), PORTEC-3 chemoRT.</li></ul>
<h2>CNS</h2>
<ul><li>GBM: 60 Gy/30 + TMZ (Stupp); elderly 40/15 or 25/5. Brain mets: SRS (single 15–24 Gy by size), hippocampal-avoidance WBRT + memantine (NRG CC001), SRS over WBRT for limited mets.</li></ul>
<h2>Spine, bone & oligomets</h2>
<ul><li>Bone mets: 8 Gy × 1 equivalent pain control (higher re-treatment); spine SBRT 24 Gy/2 (<b>CCTG SC.24</b>: better complete pain response than 20/5).</li>
<li>SABR-COMET: oligomets SBRT improved OS. Cord constraints, vertebral compression fracture risk.</li></ul>
<h2>Others</h2>
<ul><li>Bladder: 55/20 or 64/32 with concurrent chemo (BC2001). Sarcoma: pre-op 50/25 (less late fibrosis; more wound complications); hypofractionated pre-op trials.</li>
<li>Lymphoma: ISRT, low doses (20–30 Gy); 2 × 2 Gy palliative for indolent. Paediatrics: protons, CSI.</li>
<li>TBI: 12 Gy/6 BID (lung shielding/ dose rate), 2 Gy single low-dose; TMI/TMLI on tomotherapy/VMAT.</li></ul>
<h2>Radiobiology quick hits</h2>
<ul><li>BED = nd(1 + d/(α/β)); EQD2 = BED/(1 + 2/(α/β)). α/β ~10 tumour/acute, ~3 late, prostate ~1.5, breast ~3.5.</li>
<li>4 Rs (+ radiosensitivity): repair, repopulation, redistribution, reoxygenation.</li>
<li>Low α/β tumours (prostate, breast) → hypofractionation advantage.</li></ul>
<p class="src">Sources: Tumour site notes (group); Clinical Issues folder; Notes to Share – Shima. Trial names and regimens are standard references; verify specifics in current guidelines.</p>
`});

NOTES.push({
id: 'it', group: 'Clinical issues', icon: '💻', title: 'IT, downtime & cybersecurity',
summary: 'Ransomware attacks on cancer centres, business continuity, backups, downtime procedures, treating without the OIS, and physics IT governance.',
html: `
<h2>Why it's an exam topic</h2>
<ul>
<li>Cancer centres are high-value ransomware targets: Sudbury (Health Sciences North) 2019; Ireland HSE 2021; <b>Newfoundland &amp; Labrador</b> cyber attack <b>Nov 2021</b> (reported as a Class II event to CNSC — treatments disrupted); <b>Windsor-Essex (TransForm) 2023</b> five SW Ontario hospitals — patients transferred; Elekta MOSAIQ cloud breach (2021) affected ~170 US centres.</li>
<li>Sudbury 2019 (Oliver et al.): RT resumed after ~4 days; ~69 fractions affected; cloud backups and paper workarounds; lessons on downtime plans.</li>
</ul>
<h2>Immediate response (attack in progress)</h2>
<ol>
<li>Stop: isolate affected systems (pull network), follow IT incident command; don't pay or negotiate yourself.</li>
<li>Patient safety: <b>stop treatments</b> where plan integrity can't be verified (corrupted plans/data = wrong dose risk).</li>
<li>Triage patients (radiobiological urgency: H&amp;N, cervix, lung radical; spinal cord compression; paediatrics) — transfer to other centres if prolonged (provincial agreements).</li>
<li>Communication: patients, staff, media (via comms team), CNSC if licensed systems/security affected, privacy commissioner if data breach.</li>
<li>Recovery: restore from verified clean backups, <b>re-verify every plan</b> (checksums, independent calculation, compare to printed/PDF plan reports) before resuming; re-commission interfaces.</li>
<li>Post-event: RCA, update business continuity plan, drills.</li>
</ol>
<h2>Prevention (ASTRO / ASTRO-AAPM guidance themes)</h2>
<ul>
<li>Inventory of assets; network segmentation (RT network separate; linac consoles isolated); patching policy agreed with vendors; MFA; least privilege; disable unused ports/USB; endpoint protection.</li>
<li>Backups: <b>3-2-1 rule</b> (3 copies, 2 media, 1 offsite/offline/immutable); full/differential/incremental; physical vs virtual vs cloud; test restores.</li>
<li>Downtime kits: paper/PDF plan summaries, daily treatment schedules exported, standalone record-and-verify capability; some linacs can run in "service/standalone" mode with plans on local storage — validated procedure required.</li>
<li>Contingency: Maryland model — a <b>secondary data centre</b> (SDC) with replicated OIS/TPS and a secondary recovery centre; agreements with other centres.</li>
<li>Vendor contracts with cybersecurity obligations (SBOM, patching, remote access controls). Physics owns clinical validation of updates (TPS upgrades re-commissioned).</li>
<li>Training: phishing awareness; incident drills.</li>
</ul>
<h2>Other IT scenarios</h2>
<ul>
<li><b>OIS/TPS upgrade</b>: test environment, regression tests, data migration verification, staff training, go-live plan with rollback.</li>
<li><b>Power outage / linac down</b>: patient prioritization, extended hours, machine-matched beams for transfers, communication.</li>
<li><b>Data integrity</b> (NYC 2005 lesson): verify transfers TPS → OIS → linac; checksums; plan checks.</li>
<li><b>In-house scripts</b> (ESAPI): version control, validation, documentation, not a single developer's knowledge.</li>
</ul>
<p class="src">Sources: IT/ransomware notes (incidents 2015–2023, Windsor 2023, Sudbury 2019 Oliver et al., Maryland SDC/SRC, ASTRO prevention steps, backup types); CNSC Class II event list (NL cyber attack 2021).</p>
`});

NOTES.push({
id: 'orgs', group: 'The exam', icon: '🏛️', title: 'Organizations, documents & acronyms',
summary: 'Who is who: CCPM, COMP, CNSC, Health Canada, CPQR, CAPCA, CAMPEP, AAPM, IAEA, ICRP — and the key guidance documents to cite.',
html: `
<h2>Canadian bodies</h2>
<ul>
<li><b>CCPM</b> — Canadian College of Physicists in Medicine: certifies medical physicists (MCCPM written + oral; FCCPM fellowship oral after ≥ 5 years as member, demonstrating breadth and judgment); maintenance of certification.</li>
<li><b>COMP</b> — Canadian Organization of Medical Physicists: professional association; advocacy, position statements, scope of practice (2015), staffing model (2021), journal partnerships; International Day of Medical Physics (Nov 7, Marie Curie's birthday).</li>
<li><b>CNSC</b> — Canadian Nuclear Safety Commission: federal nuclear regulator under the NSCA (Class II prescribed equipment, nuclear substances, transport with Transport Canada).</li>
<li><b>Health Canada</b>: medical device licensing (Medical Devices Regulations), X-ray equipment (Radiation Emitting Devices Act; Safety Code 35 for large facilities), Vanessa's Law, radon guideline, National Dose Registry (NDR).</li>
<li><b>Provincial</b>: Alberta Radiation Protection Act/Regulation (X-ray, lasers — Alberta Labour / Alberta Radiation Health Administrative Organization for registration of X-ray equipment); Ontario HARP Act.</li>
<li><b>CPQR</b> — Canadian Partnership for Quality Radiotherapy (COMP, CAMRT, CARO; under CAPCA): <b>Technical Quality Control (TQC) guidelines</b> for linacs, CT-sim, brachy, TPS, MR etc.; programmatic guidelines; NSIR-RT stewardship.</li>
<li><b>CAPCA</b> — Canadian Association of Provincial Cancer Agencies (pillars include quality, equity, sustainability).</li>
<li><b>CARO</b> (radiation oncologists), <b>CAMRT</b> (radiation therapists/technologists), <b>CIHI</b> (health information; NSIR-RT host), <b>CADTH</b> / Canada's Drug Agency (HTA), <b>CCTG</b> (trials).</li>
</ul>
<h2>International</h2>
<ul>
<li><b>ICRP</b> (recommendations — ICRP 103 2007 weighting factors; ICRP 84 pregnancy; ICRP 118 tissue reactions/lens 20 mSv), <b>IAEA</b> (safety standards GSR Part 3, TRS-398 calibration, TRS-483 small fields, SAFRON), <b>ICRU</b> (reporting: 50/62/83 for IMRT), <b>NCRP</b> (151 shielding), <b>UNSCEAR</b>.</li>
<li><b>AAPM</b> (task groups: TG-51 calibration, TG-142 linac QA, TG-100 risk, TG-40 comprehensive QA, TG-43 brachy dose, TG-218 IMRT QA tolerances 3%/2 mm 95%, TG-132 registration, TG-36/158 out-of-field, TG-263 nomenclature, TG-275 plan checks; MPPGs), <b>ASTRO</b>, <b>ESTRO</b>, <b>ACR</b>, <b>IROC</b>, <b>CAMPEP</b> (accreditation of graduate/residency programs; sponsored by AAPM, ACR, COMP, RSNA, ASTRO).</li>
</ul>
<h2>Key Canadian regulations (radiation)</h2>
<ul>
<li>Nuclear Safety and Control Act (NSCA, 1997/2000)</li>
<li>General Nuclear Safety and Control Regulations (GNSCR) — reporting s.29, records</li>
<li>Radiation Protection Regulations (RPR; amended 2021)</li>
<li>Class II Nuclear Facilities and Prescribed Equipment Regulations</li>
<li>Nuclear Substances and Radiation Devices Regulations (NSRDR)</li>
<li>Packaging and Transport of Nuclear Substances Regulations (PTNSR 2015) + TDG Regulations</li>
<li>Nuclear Security Regulations; Administrative Monetary Penalties Regulations</li>
<li>REGDOCs: 1.6.1 (licence applications), 2.7.3 (decedents), 2.12.3 (sealed source security), 3.1.3 (reporting for waste/Class II/use of nuclear substances)</li>
</ul>
<p class="src">Sources: Jay's notes; Radiation Safety Notes from Interactions; Exam info folder; CNSC and COMP websites.</p>
`});
