import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, Brain, Award } from 'lucide-react';
import { academicPhotosList } from '../data/photosData';
import { PhotoSlotCard } from './PhotoSlotCard';

interface Chapter2JourneyProps {
  photosState?: Record<string, string>;
  onOpenLightbox?: (photoId: string) => void;
  onOpenPhotoManager?: () => void;
  onUpdatePhoto?: (photoId: string, dataUrl: string) => void;
}

export const Chapter2Journey: React.FC<Chapter2JourneyProps> = ({
  photosState = {},
  onOpenLightbox,
  onUpdatePhoto = () => {},
}) => {
  const journeyPhotos = academicPhotosList.filter((p) => p.chapter === 'journey');

  return (
    <article
      id="journey"
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
            <span>Chapter II</span>
            <span>•</span>
            <span>The Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-normal text-[#0F172A] tracking-tight">
            The Shift at the Bedside: When Pathology Refused to Follow the Textbook
          </h2>
          <p className="text-sm text-[#64748B] mt-2 font-medium">
            Estimated Reading Time: 4 minutes • The Experience That Redefined My Clinical Instincts
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
            The moment that permanently altered my perspective occurred on a Tuesday evening during an inpatient neurology rotation at King Abdullah University Hospital (KAUH). 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            A 62 year old retired schoolteacher arrived with complaints of a mild, non specific headache and slight fatigue. His initial vital signs were stable, and preliminary laboratory values were completely unremarkable. On paper, he looked ready for routine observation. But as I sat by his bed to complete his cranial nerve exam, I asked him about his family. As he answered, I noticed something subtle: a faint hesitation when completing multisyllabic words, accompanied by an intermittent pronator drift in his left forearm that vanished when he focused.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            In that moment, textbook certainty dissolved. I resisted the temptation to dismiss it as tiredness. I immediately updated our senior resident and attending physician, articulating my specific physical exam findings. We expedited an urgent neurovascular assessment, catching an evolving acute ischemic stroke well within the therapeutic window for intervention. 
          </motion.p>

          {/* Clinical Vignette Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-8 bg-white border border-[#CBD5E1] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-2">
              <Brain className="w-4 h-4 text-[#0F172A]" />
              <span>The Bedside Realization • Beyond the Automated Numbers</span>
            </div>
            <h4 className="text-base sm:text-lg font-serif-heading font-semibold text-[#0F172A] mb-2">
              Why Research Became a Clinical Necessity, Not a Resume Item
            </h4>
            <p className="text-sm sm:text-base text-[#475569] font-serif-editorial leading-relaxed">
              “Watching that patient walk out of the hospital days later with his speech fully intact taught me that the central nervous system does not offer second chances. When clinicians face conflicting evidence, such as exact surgical timing for intracerebral hemorrhage or robotic stereotactic evacuation, the answers cannot be guessed. Co-authoring studies in the <strong className="text-[#0F172A] font-semibold">European Stroke Journal</strong>, <strong className="text-[#0F172A] font-semibold">Neurology</strong>, and <strong className="text-[#0F172A] font-semibold">Circulation</strong> was born directly from this urgency: turning bedside uncertainties into quantified, life saving evidence.”
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            This experience also cured me of another early mistake: the belief that asking for help was a sign of weakness. Clinical medicine is fundamentally a team sport. Whether collaborating with the RadSafe team at Massachusetts General Hospital (MGH), Harvard Medical School, training as one of 15 international fellows in the European Academy of Neurology (EAN) Student Trainee Program, or collecting manual pediatric ultrasound data at Queen Rania Hospital for Children (earning the RSNA Trainee Research Prize), I learned that the best clinician is the one who communicates with absolute clarity, invites peer scrutiny, and elevates everyone around them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            When the American Heart Association recognized our work from Jordan with the Paul Dudley White International Scholar Award, what mattered most was not the plaque itself, but the knowledge that four years of rigorous data synthesis could directly protect stroke patients in resource limited settings worldwide.
          </motion.p>
        </div>

        {/* Curated Clinical & Academic Photo Showcase */}
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
                Clinical Rotations, Bedside Examination & Academic Forums
              </h4>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Hospital Wards, Neurology Consultations, and Scientific Discussions • Click any record to expand
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {journeyPhotos.map((photo) => (
              <PhotoSlotCard
                key={photo.id}
                photo={photo}
                customUrl={photosState[photo.id] || null}
                onUpload={onUpdatePhoto}
                onView={(id) => onOpenLightbox && onOpenLightbox(id)}
                themeColor="blue"
              />
            ))}
          </div>

          <p className="text-[11px] text-[#64748B] text-center italic mt-2">
            Figure 2.1: Clinical & Academic Synthesis. Bedside reflex diagnostics, inpatient hospital clerkships at JUST, and peer-reviewed international scientific conferences.
          </p>
        </motion.div>

        {/* Clinical Competencies Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all hover:shadow-xs">
            <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm mb-2">
              <BookMarked className="w-4 h-4 text-[#0F172A]" />
              <span>Evidence Driven by Bedside Questions</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Synthesizing clinical trial data across stroke, epilepsy, and ALS not for academic volume, but to give attending teams actionable, life saving answers under time pressure.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all hover:shadow-xs">
            <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm mb-2">
              <Award className="w-4 h-4 text-[#0F172A]" />
              <span>Global Rigor, Grounded Humility</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Selected among 15 international fellows for EAN Europe and awarded the AHA Paul Dudley White Scholar award. Applying global gold standards to frontline patient care.
            </p>
          </div>
        </motion.div>

        {/* Chapter Transition Footer */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('foundation');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <span>← Previous: Chapter I</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('vision');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
          >
            <span>Next: Chapter III: What I Bring to Your Team</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
