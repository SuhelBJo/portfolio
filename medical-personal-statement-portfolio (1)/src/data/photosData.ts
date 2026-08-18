export interface AcademicPhoto {
  id: string;
  title: string;
  chapter: 'hero' | 'foundation' | 'journey' | 'vision';
  chapterLabel: string;
  caption: string;
  location: string;
  year: string;
  defaultPath: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tags: string[];
}

export const academicPhotosList: AcademicPhoto[] = [
  {
    id: 'profile',
    title: 'Formal Academic Headshot',
    chapter: 'hero',
    chapterLabel: 'Academic Profile',
    caption: 'Official portrait of Suhel Fadi Batarseh, MD Candidate (Class of 2027) at Jordan University of Science and Technology.',
    location: 'Amman, Jordan',
    year: '2024',
    defaultPath: '/images/suhel-profile.jpg',
    aspectRatio: 'square',
    tags: ['MD Candidate', 'Profile', 'JUST'],
  },
  {
    id: 'foodbank',
    title: 'Food Bank of Delaware Community Service',
    chapter: 'foundation',
    chapterLabel: 'Chapter I: The Foundation',
    caption: 'Suhel Batarseh actively participating in community food distribution and hunger relief initiatives with the Food Bank of Delaware ("Together, we are creating a community free of hunger!").',
    location: 'Newark, Delaware, USA',
    year: '2024',
    defaultPath: '/images/suhel-foodbank.jpg',
    aspectRatio: 'portrait',
    tags: ['Community Outreach', 'Food Bank', 'Public Health', 'Delaware'],
  },
  {
    id: 'volunteering',
    title: 'Youth Leadership & Community Volunteer Team',
    chapter: 'foundation',
    chapterLabel: 'Chapter I: The Foundation',
    caption: 'Collaborative fieldwork and community health engagement alongside fellow youth leaders and student advocates.',
    location: 'Delaware / Jordan',
    year: '2024',
    defaultPath: '/images/suhel-volunteering.jpg',
    aspectRatio: 'portrait',
    tags: ['IFMSA', 'Youth Outreach', 'Volunteering'],
  },
  {
    id: 'delaware',
    title: 'University of Delaware — MEPI Student Leaders',
    chapter: 'foundation',
    chapterLabel: 'Chapter I: The Foundation',
    caption: 'Suhel Batarseh standing before the University of Delaware landmark, representing Jordan in the U.S. Department of State MEPI Student Leaders Program.',
    location: 'University of Delaware, Newark, USA',
    year: '2024',
    defaultPath: '/images/suhel-delaware.jpg',
    aspectRatio: 'landscape',
    tags: ['US Department of State', 'MEPI Fellow', 'Leadership'],
  },
  {
    id: 'clinic-desk',
    title: 'Clinical Consultation & Neurological Examination',
    chapter: 'journey',
    chapterLabel: 'Chapter II: Medical Journey',
    caption: 'Suhel in consultation attire with reflex hammer and clinical workstation, bridging patient bedside diagnostic evaluation with evidence-based medicine.',
    location: 'King Abdullah University Hospital',
    year: '2024',
    defaultPath: '/images/suhel-clinic-desk.jpg',
    aspectRatio: 'portrait',
    tags: ['Clinical Clerkship', 'Neurology', 'Diagnostics', 'JUST'],
  },
  {
    id: 'hospital-entrance',
    title: 'Inpatient Hospital Clerkships',
    chapter: 'journey',
    chapterLabel: 'Chapter II: Medical Journey',
    caption: 'Suhel Batarseh in white coat and stethoscope outside the hospital entrance during clinical rotations at Jordan University of Science and Technology.',
    location: 'King Abdullah University Hospital',
    year: '2024',
    defaultPath: '/images/suhel-hospital-entrance.jpg',
    aspectRatio: 'portrait',
    tags: ['Clinical Rotations', 'Medical Training', 'Hospital'],
  },
  {
    id: 'conference',
    title: 'Academic Medical Association & Match Forum',
    chapter: 'journey',
    chapterLabel: 'Chapter II: Medical Journey',
    caption: 'Suhel in formal business attire at the Jordan-American Physicians Association (JAPA) / Match academic conference.',
    location: 'Amman, Jordan',
    year: '2024',
    defaultPath: '/images/suhel-conference.jpg',
    aspectRatio: 'portrait',
    tags: ['JAPA', 'Medical Research', 'Conference'],
  },
  {
    id: 'un-sdg',
    title: 'United Nations HQ — Sustainable Development Goals',
    chapter: 'vision',
    chapterLabel: 'Chapter III: Vision for the Future',
    caption: 'Standing by the iconic UN Sustainable Development Goals (SDG) installation at United Nations Headquarters, advocating for health equity (SDG 3) and sustainable systems.',
    location: 'United Nations Headquarters, New York, USA',
    year: '2024',
    defaultPath: '/images/suhel-un-sdg.jpg',
    aspectRatio: 'portrait',
    tags: ['United Nations', 'SDGs', 'Global Health', 'New York'],
  },
  {
    id: 'un-flag',
    title: 'United Nations Diplomatic Delegation',
    chapter: 'vision',
    chapterLabel: 'Chapter III: Vision for the Future',
    caption: 'Suhel beside the United Nations official flag and emblem during global policy dialogues on youth health and climate resilience.',
    location: 'United Nations Headquarters, New York, USA',
    year: '2024',
    defaultPath: '/images/suhel-un-flag.jpg',
    aspectRatio: 'portrait',
    tags: ['UN Flag', 'Health Diplomacy', 'Youth Delegation'],
  },
 
];
