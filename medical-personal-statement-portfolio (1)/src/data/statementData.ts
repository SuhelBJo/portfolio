import { Milestone, Chapter, UserProfile } from '../types';

export const defaultProfile: UserProfile = {
  name: 'Suhel Fadi Batarseh',
  title: 'M.D. Candidate & Clinical Neuroscience Researcher',
  currentRole: 'Medical Student (Class of 2027) • Physician-Scientist in Training',
  institution: 'Jordan University of Science and Technology (JUST)',
  email: 'sohailbatarseh@gmail.com',
  secondaryEmail: 'sohailnagida@gmail.com',
  githubUrl: 'https://github.com/sohailnagida',
  linkedinUrl: 'https://jo.linkedin.com/in/suhel-batarseh-9b6101239',
  orcidUrl: 'https://orcid.org',
  googleScholarUrl: 'https://scholar.google.com/citations?user=bPlVQPMAAAAJ&hl=en',
  profileImageUrl: '/images/suhel-profile.jpg',
  summary:
    'Medical student at Jordan University of Science and Technology with a deep commitment to neuroscience, neurological surgery, stroke interventions, and health advocacy. Author of 33+ peer-reviewed publications and meta-analyses across premier journals (European Stroke Journal, Neurology, Neurosurgery, Circulation, BMC Neurology). International scholar recognized by the American Heart Association (Paul Dudley White Award), Radiological Society of North America (RSNA Trainee Research Prize), and the European Academy of Neurology (EAN Trainee Program).',
};

export const chapters: Chapter[] = [
  {
    id: 'foundation',
    number: 'Chapter I',
    title: 'The Foundation',
    subtitle: 'Music, Grassroots Humility & What ERAS Cannot Measure',
    readingTime: '3 min read',
  },
  {
    id: 'journey',
    number: 'Chapter II',
    title: 'The Transformation',
    subtitle: 'Bedside Acuity at JUST, Humility & Evidence-Driven Discovery',
    readingTime: '4 min read',
  },
  {
    id: 'vision',
    number: 'Chapter III',
    title: 'What I Bring to Your Team',
    subtitle: 'Tactical Poise, Cross-Disciplinary Respect & The Resident Behind the Record',
    readingTime: '3 min read',
  },
];

export const affiliationsAndCollaborations = [
  {
    title: 'Harvard MGH RadSafe Team',
    role: 'Research Collaborator',
    institution: 'Massachusetts General Hospital, Harvard Medical School',
    period: '2023 - Present',
    description: 'Collaborative research initiatives with the RadSafe team analyzing radiation safety and imaging outcomes.',
  },
  {
    title: 'Mission Brain',
    role: 'Active Member & Research Contributor',
    institution: 'Global Neurosurgical Non-Profit',
    period: '2023 - Present',
    description: 'Engaging in global neurosurgical capacity building, brain health initiatives, and collaborative research.',
  },
  {
    title: 'YOUNGO Climate & Health Project',
    role: 'Research Contributor',
    institution: 'UNFCCC Official Youth Constituency',
    period: '2022 - Present',
    description: 'Conducting data collection, global environmental health research, and international policy discussions.',
  },
  {
    title: 'European Academy of Neurology (EAN)',
    role: 'Student Trainee Fellow',
    institution: 'Vienna / European Clinical Centers',
    period: '2024 - 2025',
    description: 'One of only 15 candidates selected worldwide for clinical attachments and neurology mentorship in Europe.',
  },
];

export const awardsData = [
  {
    title: 'Paul Dudley White International Scholar Award',
    organization: 'American Heart Association (AHA)',
    year: '2024',
    description: 'Awarded for the highest-ranked abstract submitted from Jordan and recognized among the top research worldwide at the AHA 2024 Scientific Sessions.',
  },
  {
    title: 'Trainee Research Prize',
    organization: 'Radiological Society of North America (RSNA)',
    year: '2024',
    description: 'Recognized for outstanding contributions to radiological and pediatric imaging research, collecting clinical data at Queen Rania Hospital for Children.',
  },
  {
    title: 'European Academy of Neurology Student Trainee Program',
    organization: 'European Academy of Neurology (EAN)',
    year: '2024',
    description: 'Prestigious global selection awarding clinical training placement in Europe (15 selected worldwide).',
  },
  {
    title: 'US Department of State MEPI Student Leaders Fellowship',
    organization: 'US Department of State & University of Delaware',
    year: '2023 - 2024',
    description: 'Highly competitive fellowship identifying top youth leaders across the Middle East for intensive leadership, governance, and community healthcare design.',
  },
  {
    title: 'National Chess Championship (2nd in Jordan)',
    organization: 'Jordan Chess Federation',
    year: 'Competitive Honors',
    description: 'Ranked second nationally in competitive chess, cultivating deep strategic foresight, acute analytical discipline, and rapid situational decision-making under pressure.',
  },
];

export const milestonesData: Milestone[] = [
  // Major High-Impact Publications
  {
    id: 'pub-stroke-1',
    category: 'research',
    title: 'Robot-Assisted Stereotactic Surgery for Intracerebral Hemorrhage: A Systematic Review and Meta-Analysis of Safety and Efficacy',
    institutionOrJournal: 'European Stroke Journal',
    roleOrStatus: 'Co-Author • Peer-Reviewed',
    dateRange: 'May 2026',
    summary: 'Comprehensive systematic review and meta-analysis evaluating hematoma evacuation rates, rebleeding risk, functional recovery, and operative safety of robotic stereotaxy.',
    keyHighlights: [
      'Synthesized randomized and observational evidence on robotic hematoma evacuation',
      'Demonstrated significant reduction in operative time and minimal procedural invasiveness',
      'Published in European Stroke Journal (Official Journal of the European Stroke Organisation)'
    ],
    citationOrLink: 'Al-dardery N.M., Elfakhrany M., Alqato S., Batarseh S.F., Abouzid M. (2026). Robot-Assisted Stereotactic Surgery for Intracerebral Hemorrhage. Eur. Stroke J.',
    iconName: 'FileText',
    metrics: { label: 'Journal', value: 'Eur Stroke J' },
    extendedDetails: 'Evaluated stereotactic robotic platforms (ROSA, Remebot) compared to conventional craniotomy and endoscopic evacuation for spontaneous supratentorial and deep intracerebral hemorrhages.'
  },
  {
    id: 'pub-stroke-2',
    category: 'research',
    title: 'The Optimal Timing for Surgery in Intracranial Hemorrhage: A Cause-Specific Systematic Review and Network Meta-Analysis',
    institutionOrJournal: 'European Stroke Journal',
    roleOrStatus: 'Co-Author • Peer-Reviewed',
    dateRange: 'May 2026',
    summary: 'Network meta-analysis establishing etiology-specific therapeutic windows (<8h, 8-24h, >24h) for surgical evacuation to optimize functional modified Rankin Scale (mRS) outcomes.',
    keyHighlights: [
      'Comparative network evaluation stratified by hypertensive vs. vascular etiology',
      'Established critical timing thresholds to mitigate perihematomal secondary neurotoxicity',
      'High-impact guideline-informing stroke neurosurgery study'
    ],
    citationOrLink: 'Al-dardery N.M., Abo-elnour D.E., Khaled A., Batarseh S.F., Khaity A. (2026). The Optimal Timing for Surgery in Intracranial Hemorrhage. Eur. Stroke J.',
    iconName: 'Clock',
    metrics: { label: 'Study Type', value: 'Network Meta' },
    extendedDetails: 'Identified that ultra-early intervention (<8 hours) yielded maximal functional gain in lobar hemorrhages, while customized neuro-monitoring windows protected deep basal ganglia hemorrhage cohorts.'
  },
  {
    id: 'pub-migraine',
    category: 'research',
    title: 'The Impact of Caffeine Consumption on Migraine: A Systematic Review',
    institutionOrJournal: 'BMC Neurology',
    roleOrStatus: 'Co-Author • Published',
    dateRange: 'May 2026',
    summary: 'Elucidated the dual pharmacological role of caffeine as both an acute analgesic adjuvant and a chronic trigger for medication overuse headache and rebound migraine episodes.',
    keyHighlights: [
      'Analyzed adenosine receptor antagonist mechanisms in cranial vasoconstriction',
      'Delineated dosing thresholds distinguishing therapeutic efficacy from chronification risk',
      'Synthesized international headache registry data'
    ],
    citationOrLink: 'Makhlouf H., Khelifa H., Batarseh S.F., Kassar O. (2026). The impact of caffeine consumption on migraine: a systematic review. BMC Neurol.',
    iconName: 'Brain',
    metrics: { label: 'Field', value: 'Neurology' },
    extendedDetails: 'Provides actionable clinical recommendations for neurologist consultation on caffeine weaning vs. acute adjuvant therapy for intractable migraine attacks.'
  },
  {
    id: 'pub-als',
    category: 'research',
    title: 'Targeting Metabolic Dysfunction in Amyotrophic Lateral Sclerosis: Therapeutic Potential of GLP-1 Receptor Agonists',
    institutionOrJournal: 'Amyotrophic Lateral Sclerosis and Frontotemporal Degeneration',
    roleOrStatus: 'Co-Author • Peer-Reviewed',
    dateRange: 'Feb 2026',
    summary: 'Investigated neuroprotective mechanisms of GLP-1 analogues in mitigating motor neuron mitochondrial failure, neuroinflammation, and hypermetabolism in ALS.',
    keyHighlights: [
      'Explored GLP-1 receptor crossing of blood-brain barrier to attenuate microglial activation',
      'Correlated metabolic preservation with prolonged motor neuron survival indices',
      'Published in premier ALS and Frontotemporal Degeneration journal'
    ],
    citationOrLink: 'Helal M.M., Almosilhy N., Abo-elnour D.E., Batarseh S.F., Meshref M. (2026). Targeting metabolic dysfunction in amyotrophic lateral sclerosis. Amyotroph Lateral Scler Frontotemporal Degener.',
    iconName: 'Microscope',
    metrics: { label: 'Focus', value: 'ALS / MND' },
    extendedDetails: 'Pioneered translational framework highlighting repurposing of incretin mimetics for neurodegenerative diseases characterized by central bioenergetic deficits.'
  },
  {
    id: 'pub-neurosurg-hydro',
    category: 'research',
    title: 'Rethinking Definitive Treatment for Hydrocephalus in Infancy: A Review of Outcomes and Evolving Surgical Strategies',
    institutionOrJournal: 'Neurosurgery',
    roleOrStatus: 'Co-Author • Published',
    dateRange: 'Aug 2025',
    summary: 'Evaluated endoscopic third ventriculostomy with choroid plexus cauterization (ETV/CPC) versus ventriculoperitoneal shunt (VPS) revision rates in neonatal and infant hydrocephalus.',
    keyHighlights: [
      'Analyzed long-term failure-free survival rates in pediatric hydrocephalus cohorts',
      'Documented reduced infection and lifetime hardware revision burdens in ETV/CPC',
      'Collaborative international neurosurgical investigation'
    ],
    citationOrLink: 'Black H.G., Ceccarini S., Gonzalez-Salido J., Batarseh S.F., Quinsey C. (2025). Rethinking Definitive Treatment for Hydrocephalus in Infancy. Neurosurgery.',
    iconName: 'Activity',
    metrics: { label: 'Subspecialty', value: 'Pediatric Neurosurg' },
    extendedDetails: 'Collaborated with international pediatric neurosurgeons to establish individualized decision algorithms based on etiology (post-infectious vs post-hemorrhagic vs aqueductal stenosis).'
  },
  {
    id: 'pub-epilepsy',
    category: 'research',
    title: 'Exploring the Role of SCN1A in Temporal Lobe Epilepsy: A Systematic Review of Associations and Clinical Implications',
    institutionOrJournal: 'Neurology (Official Journal of the AAN)',
    roleOrStatus: 'Co-Author • Peer-Reviewed',
    dateRange: 'Apr 2025',
    summary: 'Systematic analysis of voltage-gated sodium channel subunit SCN1A mutations in drug-resistant mesial temporal lobe epilepsy and febrile status epilepticus.',
    keyHighlights: [
      'Mapped genotype-phenotype correlations influencing anti-seizure medication selection',
      'Identified pharmacogenomic markers predicting sodium-channel blocker resistance',
      'Presented findings contributing to precision epileptology'
    ],
    citationOrLink: 'Alrabadi B.E., Marouf M., Bandak N., Batarseh S.F., Hazaimeh H. (2025). Exploring the Role of SCN1A in Temporal Lobe Epilepsy. Neurology.',
    iconName: 'Zap',
    metrics: { label: 'Journal', value: 'Neurology' },
    extendedDetails: 'Crucial for clinical practice: highlighted cases where conventional sodium channel blockers (carbamazepine, phenytoin) exacerbated seizure frequency due to specific SCN1A loss-of-function variants.'
  },
  {
    id: 'pub-multiple-sclerosis',
    category: 'research',
    title: 'Impact of Crocin in Multiple Sclerosis: A Systematic Review and Meta-analysis',
    institutionOrJournal: 'Neurology',
    roleOrStatus: 'First Author • Peer-Reviewed',
    dateRange: 'Apr 2025',
    summary: 'Assessed anti-inflammatory and neuroprotective effects of carotenoid crocin on remyelination, oxidative stress biomarkers, and EDSS disability scores in experimental and clinical MS.',
    keyHighlights: [
      'Conducted rigorous meta-analysis on central nervous system anti-oxidative pathways',
      'Demonstrated significant modulation of TNF-alpha and IL-17 in demyelinating pathology',
      'First-authored publication in landmark neurology journal'
    ],
    citationOrLink: 'Batarseh S.F., Yousef O., Elrosasy A., Negida A. (2025). Impact of Crocin in Multiple Sclerosis: A Systematic Review and Meta-analysis. Neurology.',
    iconName: 'ShieldCheck',
    metrics: { label: 'Role', value: 'First Author' },
    extendedDetails: 'Synthesized preclinical experimental autoimmune encephalomyelitis (EAE) models alongside early clinical trial data, demonstrating preserved axonal integrity.'
  },
  {
    id: 'pub-thrombectomy',
    category: 'research',
    title: 'Transradial versus Transfemoral Artery Access in Mechanical Thrombectomy for Acute Ischemic Stroke: An Updated Systematic Review',
    institutionOrJournal: 'Clinical Neurology and Neurosurgery',
    roleOrStatus: 'Co-Author • Published',
    dateRange: 'Oct 2024',
    summary: 'Compared door-to-reperfusion times, successful recanalization (TICI 2b/3), and access-site vascular complications between radial and femoral punctures in acute stroke intervention.',
    keyHighlights: [
      'Evaluated 2,400+ acute ischemic stroke patient interventions',
      'Confirmed equivalent recanalization rates with significantly fewer access-site major hemorrhages',
      'Published in Clinical Neurology and Neurosurgery'
    ],
    citationOrLink: 'Almansi A., Alqato S., Yassin M.N., Batarseh S.F. (2024). Transradial versus transfemoral artery access in mechanical thrombectomy for acute ischemic stroke. Clin. Neurol. Neurosurg.',
    iconName: 'HeartPulse',
    metrics: { label: 'Cases', value: '2,400+ Pts' },
    extendedDetails: 'Highlighted radial artery access as a safe, superior alternative particularly in patients with severe iliofemoral tortuosity or high retroperitoneal bleeding risk.'
  },
  {
    id: 'award-aha-paul-dudley',
    category: 'award',
    title: 'Paul Dudley White International Scholar Award (AHA 2024)',
    institutionOrJournal: 'American Heart Association Scientific Sessions (Chicago, USA)',
    roleOrStatus: 'Award Recipient • Highest Ranked from Jordan',
    dateRange: 'Nov 2024',
    summary: 'Recognized for the highest ranked abstract from Jordan at the American Heart Association (AHA) Scientific Sessions 2024, honoring extraordinary scientific merit in cardiovascular and neurovascular research.',
    keyHighlights: [
      'Selected among thousands of international scientific submissions',
      'Honored at the annual AHA Scientific Sessions in the United States',
      'Acknowledged for excellence in advancing evidence-based cardiovascular medicine'
    ],
    iconName: 'Award',
    metrics: { label: 'Honors', value: '#1 in Jordan' },
    extendedDetails: 'The Paul Dudley White International Scholar Award recognizes authors with the highest-ranked abstract from each country, named after Dr. Paul Dudley White, a founder of the AHA and personal physician to President Eisenhower.'
  },
  {
    id: 'award-rsna-trainee',
    category: 'award',
    title: 'Trainee Research Prize • RSNA Annual Meeting 2024',
    institutionOrJournal: 'Radiological Society of North America (Chicago, USA)',
    roleOrStatus: 'Research Prize Awardee',
    dateRange: 'Dec 2024',
    summary: 'Awarded by the RSNA Program Committee recognizing outstanding contributions of medical students and trainees to clinical and diagnostic radiological research.',
    keyHighlights: [
      'Collected and analyzed manual pediatric imaging datasets from Queen Rania Hospital for Children',
      'Recognized by premier global radiological society for methodology and clinical impact'
    ],
    iconName: 'Sparkles',
    metrics: { label: 'Award', value: 'RSNA Prize' },
    extendedDetails: 'Dedication to precise data collection at Queen Rania Hospital for Children enabled multi-center imaging outcome correlation in pediatric diagnostics.'
  },
  {
    id: 'lead-mepi-state',
    category: 'leadership',
    title: 'US Department of State MEPI Student Leaders Program',
    institutionOrJournal: 'US Department of State • University of Delaware, USA',
    roleOrStatus: 'Selected Delegate & Alumnus',
    dateRange: '2023 - 2024',
    summary: 'Selected through a rigorous national competition for intensive leadership training in civil society, public policy, community healthcare architecture, and international diplomacy.',
    keyHighlights: [
      'Represented Jordan in residency at the University of Delaware, USA',
      'Developed actionable community health programs for rural underserved populations',
      'Formed lifelong international networks with global youth leaders and policymakers'
    ],
    iconName: 'Compass',
    metrics: { label: 'Sponsor', value: 'US Dept of State' },
    extendedDetails: 'Engineered cross-sector community health awareness models that were subsequently piloted in school communities in Jordan.'
  },
  {
    id: 'lead-coy-dubai',
    category: 'leadership',
    title: 'Delegate Representative • UN Climate Change Youth Conference (COY 18)',
    institutionOrJournal: 'UNFCCC • Dubai, United Arab Emirates',
    roleOrStatus: 'Fully Funded Delegation Representative',
    dateRange: 'Dec 2023',
    summary: 'Represented Jordan at the 18th UN Conference of Youth (COY 18) preceding COP28, advocating for planetary health, neurotoxin mitigation, and climate-resilient healthcare infrastructure.',
    keyHighlights: [
      'Contributed to global youth policy statement presented to COP28 presidency',
      'Participated in high-level roundtables on climate-induced neurological and cardiovascular risks',
      'Fully funded representation sponsored for Jordan'
    ],
    iconName: 'Globe',
    metrics: { label: 'Delegation', value: 'COY18 Dubai' },
    extendedDetails: 'Advocated for the integration of environmental epidemiology into standard medical school curricula across the MENA region.'
  },
  {
    id: 'lead-ifmsa-sams',
    category: 'clinical',
    title: 'SAMS Medical Mission & IFMSA Community Health Advocacy',
    institutionOrJournal: 'Syrian American Medical Society (SAMS) & IFMSA Jordan',
    roleOrStatus: 'Clinical Volunteer & Project Organizer',
    dateRange: '2021 - 2024',
    summary: 'Provided direct clinical triage, vital sign assessments, and health education to vulnerable refugee and underserved populations across Jordan; organized >10 health committees.',
    keyHighlights: [
      'Delivered vital medical mission care to over 600 underserved patients with SAMS',
      'Organized smoking cessation, breast cancer screening, and chronic disease clinics',
      'Led the Eco Health Initiative training 50+ medical students on community health'
    ],
    iconName: 'HeartHandshake',
    metrics: { label: 'Outreach', value: '600+ Patients' },
    extendedDetails: 'Bridged acute clinical medicine with compassionate socioeconomic care, observing firsthand the profound impact of preventive screenings and empathetic patient listening.'
  },
  {
    id: 'pub-stem-cell-cardio',
    category: 'research',
    title: 'Transendocardial Stem Cell Therapy Improves Cardiac Parameters in Chronic Ischemic Heart Failure: A Meta-analysis',
    institutionOrJournal: 'Circulation',
    roleOrStatus: 'Co-Author • Published in Circulation',
    dateRange: 'Nov 2024',
    summary: 'Meta-analysis investigating intramyocardial stem cell transplantation on left ventricular ejection fraction (LVEF), 6-minute walk distance, and cardiac mortality.',
    keyHighlights: [
      'Published in Circulation (American Heart Association Flagship Journal)',
      'Demonstrated statistically significant recovery of contractile reserve in ischemic cardiomyopathy',
      'Contributed to regenerative cardiology clinical trial literature'
    ],
    citationOrLink: 'Al-Sawalha I., Al Bdoor M., Abu-Salih A.Q., Batarseh S.F., Almansi A. (2024). Transendocardial Stem Cell Therapy Improves Cardiac Parameters. Circulation.',
    iconName: 'Heart',
    metrics: { label: 'Journal', value: 'Circulation' },
    extendedDetails: 'Examined bone marrow-derived mononuclear cells and mesenchymal stromal cells delivery methods, informing next-generation cellular therapeutics.'
  },
  {
    id: 'pub-pocus-pediatrics',
    category: 'clinical',
    title: 'Impact of Point-of-Care Ultrasound (POCUS) in Pediatric Emergency Departments: A Meta-Analysis of RCTs',
    institutionOrJournal: 'Italian Journal of Pediatrics',
    roleOrStatus: 'Co-Author • Peer-Reviewed',
    dateRange: 'Dec 2025',
    summary: 'Assessed diagnostic accuracy, reduction in ionizing radiation exposure (CT/X-ray), and emergency department length of stay with clinician-performed POCUS in pediatric patients.',
    keyHighlights: [
      'Demonstrated 40% decrease in unnecessary pediatric pelvic and cranial CT scans',
      'Synthesized randomized trials on acute pediatric trauma, intussusception, and lung consolidation',
      'Published in the Italian Journal of Pediatrics'
    ],
    citationOrLink: 'Alsabri M., Hasan M.T., Rath S., Batarseh S.F., Alaswad M. (2025). Impact of point-of-care ultrasound in pediatric emergency departments. Ital. J. Pediatr.',
    iconName: 'Stethoscope',
    metrics: { label: 'Impact', value: '-40% Rad Exposure' },
    extendedDetails: 'Bedside ultrasonography offers rapid non-invasive insights without subjecting fragile pediatric patients to high cumulative radiation burdens.'
  },
  {
    id: 'award-chess-jordan',
    category: 'award',
    title: 'National Chess Vice-Champion (Ranked 2nd in Jordan)',
    institutionOrJournal: 'Jordan Chess Federation Championship',
    roleOrStatus: 'National 2nd Place Silver Medalist',
    dateRange: 'National Honors',
    summary: 'Achieved 2nd place in national competitive chess championship in Jordan, translating deep analytical problem-solving, calm under time constraints, and strategic pattern recognition into clinical medicine.',
    keyHighlights: [
      'Over 10 years of competitive chess mastery and tournament play',
      'Honed razor-sharp spatial awareness, probabilistic thinking, and decision trees',
      'Draws direct parallels between grandmaster chess tactics and rapid clinical diagnostic algorithms'
    ],
    iconName: 'Crown',
    metrics: { label: 'Rank', value: '2nd in Jordan' },
    extendedDetails: 'In both neurology and chess, every move requires calculating several steps ahead, weighing subtle positional advantages, and remaining utterly calm under acute clock pressure.'
  }
];
