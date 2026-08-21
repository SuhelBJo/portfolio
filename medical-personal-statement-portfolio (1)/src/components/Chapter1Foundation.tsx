import React from 'react';
import { motion } from 'motion/react';
import { Shield, Crown, HeartHandshake, Compass } from 'lucide-react';
import { academicPhotosList } from '../data/photosData';
import { PhotoSlotCard } from './PhotoSlotCard';

interface Chapter1FoundationProps {
  photosState?: Record<string, string>;
  onOpenLightbox?: (photoId: string) => void;
  onOpenPhotoManager?: () => void;
  onUpdatePhoto?: (photoId: string, dataUrl: string) => void;
}

export const Chapter1Foundation: React.FC<Chapter1FoundationProps> = ({
  photosState = {},
  onOpenLightbox,
  onUpdatePhoto = () => {},
}) => {
  const foundationPhotos = academicPhotosList.filter((p) => p.chapter === 'foundation');

  return (
    <article
      id="foundation"
      className="py-16 md:py-24 border-t border-[#E2E8F0] relative scroll-mt-20 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] mb-3 shadow-2xs">
            <span>Chapter I</span>
            <span>•</span>
            <span>The Crucible</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-normal text-[#0F172A] tracking-tight">
            The Crucible: What the Bass Guitar and Crates Taught Me About Medicine
          </h2>
          <p className="text-sm text-[#64748B] mt-2 font-medium">
            Estimated Reading Time: 3 minutes • The Lessons ERAS Cannot Measure
          </p>
        </motion.div>

        {/* Narrative Prose */}
        <div className="space-y-6 text-[#334155] font-serif-editorial text-base sm:text-lg leading-[1.8] text-justify">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Five years ago, I entered medical school with a simple belief. I thought that becoming a great doctor was just about memorizing information. I believed that if I learned every pathway, mastered every guideline, and studied harder than anyone else, the answers to patient suffering would appear automatically.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            That belief started to change not in a lecture hall, but in two very different places that shaped who I am before I even stepped into the hospital. These places were the deep rhythmic focus of playing the bass guitar and the warehouse floor of the Food Bank of Delaware.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For years, playing the bass guitar has been my primary creative outlet. Mastering the instrument taught me how to stay completely grounded and maintain a steady rhythm even when the tempo shifts unexpectedly. Playing music teaches you quickly that losing focus disrupts the whole group. You must listen closely, adapt to the other musicians in real time, and realize that every note carries weight. It taught me that true harmony requires a team, and you cannot create a complete sound alone.
          </motion.p>

          {/* Pivotal Growth Moment Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 pl-6 border-l-2 border-[#0F172A] italic text-lg sm:text-xl text-[#0F172A] font-serif-editorial bg-[#F8FAFC] py-4 pr-4 rounded-r-xl"
          >
            "Five years ago, I believed medicine was just about having perfect medical knowledge. Today, I understand that data without human connection is not enough. True calmness is not the lack of pressure, but the ability to listen with complete focus when everything is on the line."
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            That understanding of teamwork deepened when I was chosen for the U.S. Department of State MEPI Student Leaders Program at the University of Delaware. Spending weeks unloading emergency food, organizing supplies with local volunteers, and listening to families facing poverty in Newark showed me what healthcare looks like in the real world. A mother whose daughter had severe seizures was not struggling because the medications did not exist. She was struggling because she had to choose between buying medicine and buying food.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            It was a humbling lesson. I realized that medical skills do not mean much if you cannot connect with people in their actual lives. Working with those food crates in Delaware taught me teamwork, kindness, and the steady effort needed to solve real world problems. These are qualities that no test score or exam can truly measure.
          </motion.p>
        </div>

        {/* Curated Archival Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="my-12 p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl space-y-4 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F172A]">
                Archival Record: Community Action & Civic Fellowship
              </h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Food Bank of Delaware, MEPI Leadership, and Grassroots Outreach • Click any record to expand
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {foundationPhotos.map((photo) => (
              <PhotoSlotCard
                key={photo.id}
                photo={photo}
                customUrl={photosState[photo.id] || null}
                onUpload={onUpdatePhoto}
                onView={(id) => onOpenLightbox && onOpenLightbox(id)}
                themeColor="emerald"
              />
            ))}
          </div>

          <p className="text-[11px] text-[#64748B] text-center italic mt-2">
            Figure 1.1: Formative Groundwork. Hands-on community service with the Food Bank of Delaware, University of Delaware MEPI fellowship, and youth civic advocacy.
          </p>
        </motion.div>

        {/* Core Principles Table / Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 sm:p-7"
        >
          <h3 className="text-sm font-semibold text-[#0F172A] tracking-wider uppercase mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#0F172A]" />
            <span>Reflections Beyond the Score Sheet</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-xs">
              <span className="text-xs font-bold text-[#0F172A] block mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>01. Real Empathy</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Learned through community food banks and free clinics to see the human story and real life struggles behind every patient.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-xs">
              <span className="text-xs font-bold text-[#0F172A] block mb-1 flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>02. Rhythm Under Pressure</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Developed through years of playing the bass guitar: maintaining steady timing, listening actively, and adapting calmly when the pace shifts.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-xs">
              <span className="text-xs font-bold text-[#0F172A] block mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>03. Team Leadership</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Learning that the best resident is one who supports colleagues, communicates clearly, and values every team member's effort.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Chapter Transition Footer */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs font-medium text-[#64748B]">
            End of Chapter I
          </span>

          <button
            onClick={() => {
              const el = document.getElementById('journey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
          >
            <span>Continue to Chapter II</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
