import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer } from 'lucide-react';
import { UserProfile } from '../types';

interface PrintStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
}

export const PrintStatementModal: React.FC<PrintStatementModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  if (!isOpen) return null;

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="print-statement-overlay"
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          id="print-statement-container"
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#CBD5E1] p-6 sm:p-10 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar (Hidden during actual print) */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8 no-print">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
                Academic Statement & CV Dossier Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleTriggerPrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-[#F1F5F9] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Container with Academic Letterhead */}
          <div className="font-serif-editorial text-[#0F172A] space-y-6 print:p-0">
            {/* Letterhead Header */}
            <div className="border-b-2 border-[#0F172A] pb-4 text-center">
              <h1 className="text-2xl sm:text-3xl font-serif-heading font-bold tracking-tight text-[#0F172A]">
                {profile.name}
              </h1>
              <p className="text-sm text-[#475569] font-medium mt-0.5">
                MD Candidate • {profile.institution} (Expected June 2027)
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#64748B] font-medium mt-2">
                <span>{profile.email}</span>
                {profile.secondaryEmail && <span>• {profile.secondaryEmail}</span>}
                <span>•</span>
                <span>AHA Scholar & RSNA Trainee Prize Recipient</span>
              </div>
            </div>

            {/* Document Title */}
            <div className="text-center py-2">
              <h2 className="text-xl font-serif-heading font-semibold text-[#0F172A]">
                Academic Personal Statement & Research Dossier
              </h2>
              <p className="text-xs text-[#64748B] italic font-serif-editorial mt-1">
                Translational Neuroscience, Evidence-Based Stroke Intervention & Global Health Advocacy
              </p>
            </div>

            {/* Statement Body Text */}
            <div className="space-y-4 text-base leading-[1.75] text-justify text-[#2D3748]">
              <p>
                Five years ago, I entered medical school believing that clinical excellence was purely an algorithmic challenge—that if I memorized every pathway, mastered every guideline, and studied longer than anyone else, the answers to patient suffering would present themselves neatly. That assumption began to unravel across two contrasting arenas that shaped who I am long before I stepped onto clinical wards: the quiet intensity of national chess championships and the warehouse floor of the Food Bank of Delaware.
              </p>

              <p>
                Ten years of competitive chess, culminating in finishing second in Jordan, taught me how to operate with absolute clarity under ticking clock pressure. In a tournament hall, panic is fatal; you calculate branching probabilities and accept responsibility for every move. Yet chess was fundamentally solitary. It was only while unloading emergency food crates alongside community volunteers as a MEPI fellow at the University of Delaware that I discovered healthcare’s true context: a mother cannot take optimal seizure medication if she must choose between prescriptions and dinner for her children. Clinical knowledge is meaningless without meeting patients where they are.
              </p>

              <p>
                That lesson crystallized at the bedside in King Abdullah University Hospital. When a 62-year-old gentleman presented with mild fatigue and normal laboratory values, it was not an automated alert that revealed his condition, but noticing a subtle pronator drift and speech hesitation during our conversation. Alerting my attending immediately allowed us to intervene on an evolving acute ischemic stroke within the therapeutic window. That moment taught me that research is not an abstract academic exercise; it is an urgent tool to resolve bedside dilemmas. Whether investigating surgical timing in the <em>European Stroke Journal</em>, pediatric radiation safety (earning the RSNA Trainee Research Prize), or receiving the AHA Paul Dudley White International Scholar Award, my work is driven by questions born at the bedside.
              </p>

              <p>
                Beyond scores and publications, what I bring to your residency program is unflappable poise when emergencies surge at 3:00 AM, an instinct to support struggling co-residents, and deep respect for every member of the care team. If you remember one thing about me, let it be this: I am a resident who will arrive prepared, listen with humility, and dedicate every ounce of my energy to elevating our team and protecting our patients.
              </p>
            </div>

            {/* Highlights & Key Recognitions Summary */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-xs text-[#475569] space-y-1.5">
              <p className="font-bold text-[#0F172A]">Key Distinctions:</p>
              <p>• <strong>American Heart Association:</strong> Paul Dudley White International Scholar Award (2024)</p>
              <p>• <strong>Radiological Society of North America:</strong> RSNA Trainee Research Prize (2024)</p>
              <p>• <strong>European Academy of Neurology:</strong> Student Trainee Program Fellow (15 selected globally)</p>
              <p>• <strong>Research Volume:</strong> Author of 33+ peer-reviewed publications and systematic reviews</p>
            </div>

            {/* Formal Closing Signature */}
            <div className="pt-6 border-t border-[#CBD5E1] mt-6 flex justify-between items-end">
              <div>
                <p className="text-sm font-bold font-serif-heading text-[#0F172A]">{profile.name}</p>
                <p className="text-xs text-[#64748B] font-medium">MD Candidate, Jordan University of Science and Technology</p>
              </div>
              <div className="text-right text-xs text-[#64748B] font-medium">
                <p>Official Academic Dossier</p>
                <p>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
