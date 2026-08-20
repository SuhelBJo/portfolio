export type Language = 'en' | 'ar';

export const translations = {
  en: {
    languageName: 'English',
    switchLanguage: 'العربية',
    overview: 'Overview',
    foundation: 'Foundation',
    journey: 'Journey',
    vision: 'Vision',
    contact: 'Contact',
    pdfDossier: 'PDF Dossier',
    readingNavigation: 'Reading navigation',
    overviewTitle: 'Overview & title deck',
    openPdf: 'Open PDF dossier & statement',
    contactProfiles: 'Contact & scholar profiles',
    candidate: 'MD Candidate • JUST',
    languageDirection: 'ltr' as const,
  },
  ar: {
    languageName: 'العربية',
    switchLanguage: 'English',
    overview: 'نظرة عامة',
    foundation: 'البدايات',
    journey: 'المسيرة',
    vision: 'الرؤية',
    contact: 'تواصل',
    pdfDossier: 'الملف بصيغة PDF',
    readingNavigation: 'التنقل بين الأقسام',
    overviewTitle: 'نظرة عامة والعنوان',
    openPdf: 'فتح الملف والبيان بصيغة PDF',
    contactProfiles: 'التواصل والملفات الأكاديمية',
    candidate: 'طالب طب • جامعة العلوم والتكنولوجيا الأردنية',
    languageDirection: 'rtl' as const,
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslations(language: Language) {
  return translations[language];
}
