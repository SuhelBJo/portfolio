import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, HeartPulse, BookOpen } from 'lucide-react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onUpdatePhoto?: (photoUrl: string) => void;
  onOpenPrintModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenPrintModal }) => {
  const [imgError, setImgError] = useState(false);

  const scrollToChapter1 = () => {
    const element = document.getElementById('foundation');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0F172A]/8 via-[#E2E8F0]/40 to-transparent blur-3xl rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center text-left">
        <div className="flex flex-col items-center lg:items-start">
        {/* Academic Tag & Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-medium text-[#1D4ED8] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>MD Candidate • Jordan University of Science and Technology</span>
          <span className="text-[#94A3B8]">•</span>
          <span className="text-[#64748B]">Class of 2027</span>
        </motion.div>

        {/* Circular Scholar Portrait Headshot */}
        <motion.div variants={itemVariants} className="relative inline-block mx-auto lg:mx-0 mb-8 lg:mb-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-b from-[#0F172A] via-[#334155] to-[#64748B] shadow-md transition-transform duration-300 hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#F8FAFC] overflow-hidden border-2 border-white flex flex-col items-center justify-center relative">
              {profile.profileImageUrl && !imgError ? (
                <img
                  src={profile.profileImageUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-[#0F172A] h-full w-full bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]">
                  <div className="w-14 h-14 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-serif-editorial text-lg font-bold shadow-xs mb-1">
                    SFB
                  </div>
                  <span className="text-xs font-bold text-[#0F172A] tracking-tight text-center">
                    Suhel Batarseh
                  </span>
                  <span className="text-[10px] text-[#64748B] font-medium">
                    MD Candidate
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Verification icon badge */}
          <div className="absolute bottom-1 right-2 bg-[#0F172A] text-white p-2 rounded-full shadow-md border-2 border-white" title="Verified Medical Dossier">
            <HeartPulse className="w-4 h-4 text-white" />
          </div>
        </motion.div>
        </div>

        <div>
        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          id="hero-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-sans-display font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-4"
        >
          {profile.name}
          <span className="block text-xl sm:text-2xl font-normal font-sans-display text-[#475569] mt-2">
            A personal path into medicine
          </span>
        </motion.h1>

        {/* Subtitle / Statement Deck */}
        <motion.p
          variants={itemVariants}
          id="hero-subtitle"
          className="text-base sm:text-lg font-serif-editorial text-[#475569] max-w-2xl leading-relaxed mb-10"
        >
          I am a medical student, researcher, and volunteer who wants to make care more thoughtful and more useful for the people who need it. My work brings together clinical learning, brain research, and service.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
          <button
            id="read-my-story-cta"
            onClick={scrollToChapter1}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E293B] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Read my story</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            id="google-scholar-hero-link"
            href="https://scholar.google.com/citations?user=bPlVQPMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0F172A] border border-[#CBD5E1] text-xs sm:text-sm font-semibold hover:bg-[#F1F5F9] transition-all duration-200 cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-[#0F172A]" />
            <span>View my research</span>
          </a>
        </motion.div>

        {/* Key Thematic Badges Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl text-left">
          <div className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl shadow-2xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold block mb-1">
              Publications
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">33+ Studies</p>
            <p className="text-xs text-[#64748B] mt-0.5">Stroke, ALS & Neurology</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl shadow-2xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold block mb-1">
              AHA Scholar
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">Paul Dudley White</p>
            <p className="text-xs text-[#64748B] mt-0.5">Top Abstract from Jordan</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl shadow-2xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold block mb-1">
              RSNA Honors
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">Trainee Prize</p>
            <p className="text-xs text-[#64748B] mt-0.5">Pediatric Imaging Research</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl shadow-2xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold block mb-1">
              Global Fellow
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">EAN & MEPI</p>
            <p className="text-xs text-[#64748B] mt-0.5">1 of 15 selected globally</p>
          </div>
        </motion.div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};
