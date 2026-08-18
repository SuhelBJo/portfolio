export interface Milestone {
  id: string;
  category: 'research' | 'clinical' | 'leadership' | 'award';
  title: string;
  institutionOrJournal: string;
  roleOrStatus: string;
  dateRange: string;
  summary: string;
  keyHighlights: string[];
  citationOrLink?: string;
  doi?: string;
  iconName: string;
  metrics?: { label: string; value: string };
  extendedDetails?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readingTime: string;
}

export interface UserProfile {
  name: string;
  title: string;
  currentRole: string;
  institution: string;
  email: string;
  secondaryEmail?: string;
  githubUrl: string;
  linkedinUrl: string;
  orcidUrl: string;
  googleScholarUrl: string;
  profileImageUrl: string | null;
  summary?: string;
}
