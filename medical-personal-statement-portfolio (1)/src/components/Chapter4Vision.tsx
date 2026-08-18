import React from 'react';
import { motion } from 'motion/react';
import { Microscope, FileCheck, Users, Flame } from 'lucide-react';
import { academicPhotosList } from '../data/photosData';
import { PhotoSlotCard } from './PhotoSlotCard';

interface Chapter4VisionProps {
  photosState?: Record<string, string>;
  onOpenLightbox?: (photoId: string) => void;
  onOpenPhotoManager?: () => void;
  onUpdatePhoto?: (photoId: string, dataUrl: string) => void;
}

export const Chapter4Vision: React.FC<Chapter4VisionProps> = ({
  photosState = {},
  onOpenLightbox,
  onUpdatePhoto = () => {},
}) => {
  const visionPhotos = academicPhotosList.filter((p) => p.chapter === 'vision');

  return (
    <article
      id="vision"
      className="py-16 md:py-24 border-t border-[#E2E8F0] relative scroll-mt-20 bg-[#F8FAFC]"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] mb-3 shadow-2xs">
            <span>Chapter III</span>
            <span>•</span>
            <span>The Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-normal text-[#0F172A] tracking-tight">
            What I Bring to Your Team: The Resident Behind the Record
          </h2>
          <p className="text-sm text-[#64748B] mt-2 font-medium">
            Estimated Reading Time: 3 minutes • Character, Work Ethic & The One Thing to Remember
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
            When program directors evaluate an application, scores and publication counts establish baseline competence. But when a ward is overwhelmed at 3:00 AM, when multiple high-acuity admissions arrive simultaneously, or when an exhausted co-resident is struggling through a personal emergency, what matters is not a Step score—it is character, reliability, and emotional poise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Here is what I bring to your residency program every single day:
          </motion.p>

          {/* Strategic Future Pillars Grid */}
          <div className="my-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#CBD5E1] rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#94A3B8] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#0F172A]/10 text-[#0F172A] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif-heading font-semibold text-[#0F172A] mb-1">
                    1. Unflappable Composure in High-Stakes Chaos
                  </h4>
                  <p className="text-sm text-[#475569] font-serif-editorial leading-relaxed">
                    Ten years of national tournament chess drilled a permanent habit: when the clock runs down, you breathe, analyze the board without panic, and execute the highest-probability decision. In the ICU or acute neurology bay, this means staying calm, structured, and focused on patient stabilization.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[#CBD5E1] rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#94A3B8] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#0F172A]/10 text-[#0F172A] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif-heading font-semibold text-[#0F172A] mb-1">
                    2. A Culture of Peer Support & Cross-Disciplinary Respect
                  </h4>
                  <p className="text-sm text-[#475569] font-serif-editorial leading-relaxed">
                    I believe great residency teams run on mutual respect and gratitude. From nursing staff and respiratory therapists to co-interns, I pride myself on clear communication, stepping in to take an extra admission when a colleague is drowning, and fostering a positive, blame-free learning atmosphere.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-[#CBD5E1] rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#94A3B8] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#0F172A]/10 text-[#0F172A] shrink-0">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif-heading font-semibold text-[#0F172A] mb-1">
                    3. Translational Inquisitiveness Without Ego
                  </h4>
                  <p className="text-sm text-[#475569] font-serif-editorial leading-relaxed">
                    Having led 33+ peer-reviewed meta-analyses across premier journals, I do not see research as academic decoration. I use it as a practical tool to question assumptions, evaluate clinical trials critically, and improve bedside clinical outcomes for our patients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* The One Thing to Remember Highlight Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 p-6 bg-slate-900 text-white rounded-2xl border border-slate-700 shadow-md"
          >
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              The One Thing to Remember
            </span>
            <h4 className="text-lg font-serif-heading font-semibold text-white mb-2">
              A Resident Who Combines Grandmaster Focus with Grassroots Humility
            </h4>
            <p className="text-sm sm:text-base text-slate-300 font-serif-editorial leading-relaxed">
              “If there is one thing you remember from my application, let it be this: I am a resident who will show up early, stay late to comfort an anxious family, support my co-residents unconditionally, and dedicate every ounce of my energy to advancing the standard of care for our patients.”
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Clinical medicine is the highest privilege I know. I am eager to bring my work ethic, analytical discipline, and deep-seated humanity to your residency family, growing into a clinician and academic leader your institution will be proud of.
          </motion.p>
        </div>

        {/* Curated United Nations & Health Diplomacy Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="my-12 p-5 bg-white border border-[#E2E8F0] rounded-2xl space-y-4 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F172A]">
                Global Health Diplomacy: United Nations Delegations
              </h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                UN Headquarters New York, SDG Sustainable Health Goals, and Plenary Sessions • Click any record to expand
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {visionPhotos.map((photo) => (
              <PhotoSlotCard
                key={photo.id}
                photo={photo}
                customUrl={photosState[photo.id] || null}
                onUpload={onUpdatePhoto}
                onView={(id) => onOpenLightbox && onOpenLightbox(id)}
                themeColor="indigo"
              />
            ))}
          </div>

          <p className="text-[11px] text-[#64748B] text-center italic mt-2">
            Figure 3.1 — Global Health Diplomacy & Policy: United Nations Headquarters New York, SDG 3 Sustainable Health Goals, and UN General Assembly Hall.
          </p>
        </motion.div>

        {/* Formal Closing Signature Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white p-6 rounded-2xl border"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block mb-1">
              Candidate Signature & Affirmation
            </span>
            <h4 className="text-lg font-serif-heading font-bold text-[#0F172A]">
              Suhel Fadi Batarseh
            </h4>
            <p className="text-xs text-[#64748B] font-medium">
              MD Candidate, Jordan University of Science and Technology (Expected June 2027)
            </p>
          </div>
          <div className="px-4 py-2 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-[#10B981]" />
            <span>Verified Academic Dossier</span>
          </div>
        </motion.div>

        {/* Chapter Transition Footer */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('journey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <span>← Previous: Chapter II — The Transformation</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
          >
            <span>View Contact & Scholar Profiles</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
