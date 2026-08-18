import React, { useState, useEffect } from 'react';
import { Printer, Menu, X, ArrowUpRight } from 'lucide-react';
import { Chapter, UserProfile } from '../types';

interface NavbarProps {
  chapters: Chapter[];
  activeChapter: string;
  onOpenPrintModal: () => void;
  profile: UserProfile;
  onNavigateChapter: (chapterId: string) => void;
  // Optional legacy props for backwards compatibility
  onOpenPhotoManager?: () => void;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
  displayMode?: 'continuous' | 'paginated';
  onToggleDisplayMode?: (mode: 'continuous' | 'paginated') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  chapters,
  activeChapter,
  onOpenPrintModal,
  profile,
  onNavigateChapter,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChapterClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigateChapter(id);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-2.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E2E8F0] py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram / Brand */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleChapterClick('hero');
              }}
              className="flex items-center gap-3 group text-left"
              id="nav-brand"
            >
              <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-serif-editorial text-xs font-semibold shadow-xs group-hover:bg-[#1E293B] transition-colors">
                SFB
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-[#0F172A] tracking-tight group-hover:text-[#334155] transition-colors">
                  {profile.name}
                </span>
                <span className="text-[11.5px] text-[#64748B] font-medium tracking-tight">
                  MD Candidate • JUST
                </span>
              </div>
            </a>

            {/* Desktop Chapter Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#F1F5F9]/90 border border-[#E2E8F0] p-1 rounded-full text-xs font-medium text-[#475569]">
              <button
                id="nav-link-hero"
                onClick={() => handleChapterClick('hero')}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  activeChapter === 'hero'
                    ? 'bg-white text-[#0F172A] font-semibold shadow-xs'
                    : 'hover:text-[#0F172A] hover:bg-white/50'
                }`}
              >
                Overview
              </button>
              {chapters.map((chapter) => {
                const isActive = activeChapter === chapter.id;
                return (
                  <button
                    key={chapter.id}
                    id={`nav-link-${chapter.id}`}
                    onClick={() => handleChapterClick(chapter.id)}
                    className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#0F172A] font-semibold shadow-xs'
                        : 'hover:text-[#0F172A] hover:bg-white/50'
                    }`}
                  >
                    <span className="opacity-70 mr-1">{chapter.number.replace('Chapter ', '')}.</span>
                    {chapter.title.split('&')[0].trim()}
                  </button>
                );
              })}
              <button
                id="nav-link-contact"
                onClick={() => handleChapterClick('contact')}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  activeChapter === 'contact'
                    ? 'bg-white text-[#0F172A] font-semibold shadow-xs'
                    : 'hover:text-[#0F172A] hover:bg-white/50'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Action Buttons: PDF Dossier Only */}
            <div className="flex items-center gap-2">
              <button
                id="print-statement-btn"
                onClick={onOpenPrintModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors cursor-pointer shadow-xs"
                title="Print or Save PDF Statement"
              >
                <Printer className="w-3.5 h-3.5 text-white" />
                <span>PDF Dossier</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Reading Progress Indicator Bar */}
        <div className="w-full bg-[#E2E8F0] h-[2.5px] mt-2">
          <div
            className="bg-[#0F172A] h-full transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden pt-20"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white m-4 rounded-2xl p-6 border border-[#E2E8F0] shadow-xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                Reading Navigation
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#94A3B8] hover:text-[#0F172A]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick action button in mobile */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#0F172A] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Open PDF Dossier & Statement</span>
            </button>

            <div className="space-y-1">
              <button
                onClick={() => handleChapterClick('hero')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A] flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Overview & Title Deck</span>
              </button>

              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A] flex items-center justify-between transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#94A3B8] font-medium">
                      {chapter.number}
                    </span>
                    <span>{chapter.title}</span>
                  </div>
                  <span className="text-xs text-[#94A3B8]">{chapter.readingTime}</span>
                </button>
              ))}

              <button
                onClick={() => handleChapterClick('contact')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A] flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Contact & Scholar Profiles</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

