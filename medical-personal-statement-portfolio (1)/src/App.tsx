import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { defaultProfile, chapters } from './data/statementData';
import { academicPhotosList, AcademicPhoto } from './data/photosData';
import { Milestone, UserProfile } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Chapter1Foundation } from './components/Chapter1Foundation';
import { Chapter2Journey } from './components/Chapter2Journey';
import { Chapter4Vision } from './components/Chapter4Vision';
import { ContactSection } from './components/ContactSection';
import { AbstractModal } from './components/AbstractModal';
import { PrintStatementModal } from './components/PrintStatementModal';
import { AudioNarrator } from './components/AudioNarrator';
import { PhotoLightbox } from './components/PhotoLightbox';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { ChevronLeft, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { getTranslations, Language } from './data/i18n';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved === 'ar' ? 'ar' : 'en';
  });
  const t = getTranslations(language);
  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === 'en' ? 'ar' : 'en';
      localStorage.setItem('portfolio-language', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = t.languageDirection;
  }, [language, t.languageDirection]);

  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('med_statement_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProfile,
          ...parsed,
          name: defaultProfile.name,
          linkedinUrl: 'https://jo.linkedin.com/in/suhel-batarseh-9b6101239',
        };
      } catch (e) {
        return defaultProfile;
      }
    }
    return defaultProfile;
  });

  // Persistent photo storage for all 10 curated slots
  const [photosState, setPhotosState] = useState<Record<string, string>>(() => {
    const savedPhotos = localStorage.getItem('academic_photos_state');
    if (savedPhotos) {
      try {
        return JSON.parse(savedPhotos);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  // Load photos from server API on mount so ANY visitor accessing via shared URL or custom domain sees all photos
  useEffect(() => {
    async function syncPhotosWithServer() {
      try {
        const res = await fetch('/api/photos');
        if (res.ok) {
          const data = await res.json();
          if (data.photos && Object.keys(data.photos).length > 0) {
            setPhotosState((prev) => {
              const merged = { ...prev, ...data.photos };
              localStorage.setItem('academic_photos_state', JSON.stringify(merged));
              return merged;
            });
            if (data.photos.profile) {
              setProfile((prev) => {
                const updated = { ...prev, profileImageUrl: data.photos.profile };
                localStorage.setItem('med_statement_profile', JSON.stringify(updated));
                return updated;
              });
            }
          } else {
            // If server is empty but local storage has photos, push local photos to server
            const savedLocal = localStorage.getItem('academic_photos_state');
            if (savedLocal) {
              const parsed = JSON.parse(savedLocal);
              if (Object.keys(parsed).length > 0) {
                await fetch('/api/photos', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ photos: parsed }),
                });
              }
            }
          }
        }
      } catch (err) {
        console.warn('Could not sync with /api/photos server endpoint:', err);
      }
    }

    syncPhotosWithServer();
  }, []);

  const [activeChapter, setActiveChapter] = useState<string>('hero');
  const [displayMode, setDisplayMode] = useState<'continuous' | 'paginated'>('continuous');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isAudioOpen, setIsAudioOpen] = useState<boolean>(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState<boolean>(false);
  const [activeLightboxPhotoId, setActiveLightboxPhotoId] = useState<string | null>(null);

  // Synchronize active chapter based on scroll in continuous mode
  useEffect(() => {
    if (displayMode !== 'continuous') return;

    const chapterIds = ['hero', 'foundation', 'journey', 'vision', 'contact'];
    const observers: IntersectionObserver[] = [];

    chapterIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveChapter(id);
              }
            });
          },
          { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [displayMode]);

  const handleUpdatePhoto = (photoUrl: string) => {
    const updated = { ...profile, profileImageUrl: photoUrl };
    setProfile(updated);
    localStorage.setItem('med_statement_profile', JSON.stringify(updated));

    // Also sync to photosState['profile']
    const newPhotos = { ...photosState, profile: photoUrl };
    setPhotosState(newPhotos);
    localStorage.setItem('academic_photos_state', JSON.stringify(newPhotos));

    // Persist to server for all visitors and domains
    fetch('/api/photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photoId: 'profile', dataUrl: photoUrl }),
    }).catch((e) => console.warn('Failed to save photo to server:', e));
  };

  const handleUpdateSpecificPhoto = (photoId: string, dataUrl: string) => {
    const updated = { ...photosState, [photoId]: dataUrl };
    setPhotosState(updated);
    localStorage.setItem('academic_photos_state', JSON.stringify(updated));

    if (photoId === 'profile') {
      const updatedProfile = { ...profile, profileImageUrl: dataUrl };
      setProfile(updatedProfile);
      localStorage.setItem('med_statement_profile', JSON.stringify(updatedProfile));
    }

    // Persist to server for all visitors and domains
    fetch('/api/photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photoId, dataUrl }),
    }).catch((e) => console.warn('Failed to save photo to server:', e));
  };

  const handleRemovePhoto = (photoId: string) => {
    const updated = { ...photosState };
    delete updated[photoId];
    setPhotosState(updated);
    localStorage.setItem('academic_photos_state', JSON.stringify(updated));

    // Remove from server
    fetch(`/api/photos/${photoId}`, {
      method: 'DELETE',
    }).catch((e) => console.warn('Failed to delete photo from server:', e));
  };

  const handleResetAllPhotos = () => {
    setPhotosState({});
    localStorage.removeItem('academic_photos_state');
    const updatedProfile = { ...profile, profileImageUrl: '/images/suhel-profile.jpg' };
    setProfile(updatedProfile);
    localStorage.setItem('med_statement_profile', JSON.stringify(updatedProfile));

    // Reset on server
    fetch('/api/photos/reset', {
      method: 'POST',
    }).catch((e) => console.warn('Failed to reset photos on server:', e));
  };

  const handleNavigateChapter = (chapterId: string) => {
    setActiveChapter(chapterId);
    if (displayMode === 'continuous') {
      const element = document.getElementById(chapterId);
      if (element) {
        const navOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Lightbox helpers
  const currentLightboxPhoto = activeLightboxPhotoId
    ? academicPhotosList.find((p) => p.id === activeLightboxPhotoId) || null
    : null;
  const currentPhotoIndex = currentLightboxPhoto
    ? academicPhotosList.findIndex((p) => p.id === currentLightboxPhoto.id)
    : -1;
  const hasPrevPhoto = currentPhotoIndex > 0;
  const hasNextPhoto = currentPhotoIndex < academicPhotosList.length - 1;

  const handlePrevPhoto = () => {
    if (hasPrevPhoto) {
      setActiveLightboxPhotoId(academicPhotosList[currentPhotoIndex - 1].id);
    }
  };

  const handleNextPhoto = () => {
    if (hasNextPhoto) {
      setActiveLightboxPhotoId(academicPhotosList[currentPhotoIndex + 1].id);
    }
  };

  // Page order list for paginated mode
  const pageSequence = ['hero', 'foundation', 'journey', 'vision', 'contact'];
  const currentIndex = pageSequence.indexOf(activeChapter);
  const prevPage = currentIndex > 0 ? pageSequence[currentIndex - 1] : null;
  const nextPage = currentIndex < pageSequence.length - 1 ? pageSequence[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased flex flex-col selection:bg-[#0F172A] selection:text-white">
      {/* Top Fixed Header with Reading Progress */}
      <Navbar
        chapters={chapters}
        activeChapter={activeChapter}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        profile={profile}
        onNavigateChapter={handleNavigateChapter}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-14 sm:pt-16">
        {displayMode === 'continuous' ? (
          /* Continuous Full Dossier Stream */
          <div className="page-fade-in">
            <Hero
              profile={profile}
              onUpdatePhoto={handleUpdatePhoto}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
            />

            <Chapter1Foundation
              photosState={photosState}
              onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
              onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
              onUpdatePhoto={handleUpdateSpecificPhoto}
            />

            <Chapter2Journey
              photosState={photosState}
              onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
              onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
              onUpdatePhoto={handleUpdateSpecificPhoto}
            />

            <Chapter4Vision
              photosState={photosState}
              onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
              onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
              onUpdatePhoto={handleUpdateSpecificPhoto}
            />

            <ContactSection
              profile={profile}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
            />
          </div>
        ) : (
          /* Page-by-Page Chapter Reader with Smooth Page Transitions */
          <div className="min-h-[85vh] flex flex-col justify-between max-w-5xl mx-auto px-4 sm:px-6">
            {/* Page Header / Breadcrumb indicator */}
            <div className="py-4 border-b border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0F172A] uppercase tracking-wider">
                  {activeChapter === 'hero'
                    ? 'Overview'
                    : activeChapter === 'contact'
                    ? 'Contact & Profiles'
                    : chapters.find((c) => c.id === activeChapter)?.number || 'Page'}
                </span>
                <span>•</span>
                <span>
                  Page {currentIndex + 1} of {pageSequence.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={!prevPage}
                  onClick={() => prevPage && handleNavigateChapter(prevPage)}
                  className={`px-3 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                    prevPage
                      ? 'bg-white text-[#0F172A] border-[#CBD5E1] hover:bg-[#F1F5F9] cursor-pointer'
                      : 'opacity-40 cursor-not-allowed bg-[#F1F5F9] border-[#E2E8F0]'
                  }`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  disabled={!nextPage}
                  onClick={() => nextPage && handleNavigateChapter(nextPage)}
                  className={`px-3 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                    nextPage
                      ? 'bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#1E293B] cursor-pointer'
                      : 'opacity-40 cursor-not-allowed bg-[#F1F5F9] border-[#E2E8F0]'
                  }`}
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Animated Page Section Container */}
            <div className="flex-1 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeChapter === 'hero' && (
                    <Hero
                      profile={profile}
                      onUpdatePhoto={handleUpdatePhoto}
                      onOpenPrintModal={() => setIsPrintModalOpen(true)}
                    />
                  )}

                  {activeChapter === 'foundation' && (
                    <Chapter1Foundation
                      photosState={photosState}
                      onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
                      onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
                      onUpdatePhoto={handleUpdateSpecificPhoto}
                    />
                  )}

                  {activeChapter === 'journey' && (
                    <Chapter2Journey
                      photosState={photosState}
                      onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
                      onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
                      onUpdatePhoto={handleUpdateSpecificPhoto}
                    />
                  )}

                  {activeChapter === 'vision' && (
                    <Chapter4Vision
                      photosState={photosState}
                      onOpenLightbox={(photoId) => setActiveLightboxPhotoId(photoId)}
                      onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
                      onUpdatePhoto={handleUpdateSpecificPhoto}
                    />
                  )}

                  {activeChapter === 'contact' && (
                    <ContactSection
                      profile={profile}
                      onOpenPrintModal={() => setIsPrintModalOpen(true)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Pagination Bar */}
            <div className="py-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 mt-8">
              <button
                disabled={!prevPage}
                onClick={() => prevPage && handleNavigateChapter(prevPage)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  prevPage
                    ? 'bg-white text-[#0F172A] border-[#CBD5E1] hover:bg-[#F1F5F9] cursor-pointer shadow-2xs'
                    : 'opacity-40 cursor-not-allowed bg-[#F1F5F9] border-[#E2E8F0]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Section</span>
              </button>

              <div className="flex items-center gap-1.5">
                {pageSequence.map((pageId, idx) => (
                  <button
                    key={pageId}
                    onClick={() => handleNavigateChapter(pageId)}
                    className={`w-8 h-8 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeChapter === pageId
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={!nextPage}
                onClick={() => nextPage && handleNavigateChapter(nextPage)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
                  nextPage
                    ? 'bg-[#0F172A] text-white hover:bg-[#1E293B] cursor-pointer'
                    : 'opacity-40 cursor-not-allowed bg-slate-300 text-slate-500'
                }`}
              >
                <span>Next Section</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Interactive Detail Modal for Research & Milestones */}
      <AbstractModal
        milestone={selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
      />

      {/* Formal Printable Document Modal */}
      <PrintStatementModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        profile={profile}
      />

      {/* Audio Companion Widget */}
      <AudioNarrator
        isOpen={isAudioOpen}
        onClose={() => setIsAudioOpen(false)}
        chapters={chapters}
        activeChapter={activeChapter}
      />

      {/* Archival Photo Manager Modal */}
      <PhotoManagerModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        photosState={photosState}
        onUpdatePhoto={handleUpdateSpecificPhoto}
        onRemovePhoto={handleRemovePhoto}
        onResetAllPhotos={handleResetAllPhotos}
      />

      {/* Full-Screen Photo Lightbox */}
      <PhotoLightbox
        photo={currentLightboxPhoto}
        photoUrl={currentLightboxPhoto ? photosState[currentLightboxPhoto.id] || null : null}
        onClose={() => setActiveLightboxPhotoId(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        hasPrev={hasPrevPhoto}
        hasNext={hasNextPhoto}
      />
    </div>
  );
}
