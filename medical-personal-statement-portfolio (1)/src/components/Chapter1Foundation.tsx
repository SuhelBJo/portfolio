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
            The Crucible: What Competitive Chess and Crates Taught Me About Medicine
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
            Five years ago, I entered medical school with a naive certainty: I believed that becoming an exceptional physician was simply a problem of computational bandwidth—that if I memorized every pathway, mastered every guideline, and studied longer than anyone else, the answers to patient suffering would reveal themselves automatically. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            That belief began to unravel not in a lecture hall, but across two vastly different arenas that shaped who I am long before I stepped onto the hospital wards: the silence of national chess championships and the warehouse floor of the Food Bank of Delaware.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For ten years, competitive chess was my primary intellectual home. Finishing second in Jordan taught me how to operate with absolute stillness under ticking clock pressure. In a tournament hall, you learn quickly that panic is fatal; you must calculate four branches ahead, absorb unexpected sacrifices, and accept that every move carries permanent consequence. But chess also harbored a limitation: it taught me to see problems in isolation, where victory belonged entirely to the individual on one side of the board.
          </motion.p>

          {/* Pivotal Growth Moment Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 pl-6 border-l-2 border-[#0F172A] italic text-lg sm:text-xl text-[#0F172A] font-serif-editorial bg-[#F8FAFC] py-4 pr-4 rounded-r-xl"
          >
            “Five years ago, I believed medicine was defined by perfect diagnostic knowledge. Today, I understand that data without human discernment is blind—and that true composure is not the absence of pressure, but the ability to listen with absolute focus when everything is on the line.”
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            That individualistic mindset was dismantled when I was selected for the U.S. Department of State’s MEPI Student Leaders Program at the University of Delaware. Spending weeks unloading emergency food supplies, organizing distributions alongside local volunteers, and listening to families navigating poverty in Newark showed me what healthcare looks like outside clinical ivory towers. A mother whose daughter had uncontrolled seizures was not struggling because the medications did not exist; she was struggling because she had to choose between filling a prescription and putting food on the table.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            It was a humbling transition. I realized that clinical excellence is meaningless if you cannot meet people where they are. Those crates in Delaware taught me teamwork, humility, and the quiet persistence required to solve real-world problems—qualities that no Step score or single examination can capture.
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
            Figure 1.1 — Formative Groundwork: Hands-on community service with the Food Bank of Delaware, University of Delaware MEPI fellowship, and youth civic advocacy.
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
                <span>01. Unmeasured Empathy</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Trained through direct community food banks and free clinics to see the human and socioeconomic context behind every vital sign.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-xs">
              <span className="text-xs font-bold text-[#0F172A] block mb-1 flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>02. Calm Under Fire</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Honed through 10+ years of national championship chess: calculating probability clearly and making composed decisions when time is critical.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-xs">
              <span className="text-xs font-bold text-[#0F172A] block mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>03. Team-First Leadership</span>
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                Learning that the best resident is one who supports colleagues, communicates with clarity, and values every team member's contribution.
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
