import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Milestone } from '../types';
import { X, CheckCircle2, Bookmark, Copy, Check } from 'lucide-react';

interface AbstractModalProps {
  milestone: Milestone | null;
  onClose: () => void;
}

export const AbstractModal: React.FC<AbstractModalProps> = ({ milestone, onClose }) => {
  const [citationCopied, setCitationCopied] = React.useState(false);

  if (!milestone) return null;

  const copyCitation = () => {
    if (milestone.citationOrLink) {
      navigator.clipboard.writeText(milestone.citationOrLink);
      setCitationCopied(true);
      setTimeout(() => setCitationCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div
        id="abstract-modal-overlay"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          id="abstract-modal-card"
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#0F172A]/10 text-[#0F172A]">
                  {milestone.category} Dossier
                </span>
                <span className="text-xs font-medium text-[#64748B]">
                  {milestone.dateRange}
                </span>
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-[#0F172A] leading-tight">
                {milestone.title}
              </h3>
              <p className="text-xs text-[#64748B] font-medium mt-1">
                {milestone.institutionOrJournal} • {milestone.roleOrStatus}
              </p>
            </div>

            <button
              id="close-abstract-modal-btn"
              onClick={onClose}
              className="p-2 text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Extended Narrative / Abstract Content */}
          <div className="space-y-4 font-serif-editorial text-[#334155]">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-2">
                Executive Summary & Study Scope
              </h4>
              <p className="text-base leading-relaxed">
                {milestone.summary}
              </p>
            </div>

            {milestone.extendedDetails && (
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-1.5">
                  Clinical Context & In-Depth Reflection
                </h4>
                <p className="text-sm italic leading-relaxed text-[#475569]">
                  “{milestone.extendedDetails}”
                </p>
              </div>
            )}

            {/* Key Findings Checklist */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-2">
                Key Contributions & Outcomes
              </h4>
              <div className="space-y-2">
                {milestone.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0F172A] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation / DOI Box if exists */}
            {milestone.citationOrLink && (
              <div className="p-4 bg-[#F1F5F9] rounded-xl border border-[#CBD5E1] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Formal Academic Citation</span>
                  </span>
                  <button
                    onClick={copyCitation}
                    className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A] hover:underline cursor-pointer"
                  >
                    {citationCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{citationCopied ? 'Copied' : 'Copy Citation'}</span>
                  </button>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed bg-white p-2.5 rounded border border-[#E2E8F0]">
                  {milestone.citationOrLink}
                </p>
                {milestone.doi && (
                  <p className="text-[11px] text-[#64748B] font-medium">
                    DOI: <span className="text-[#0F172A] font-semibold">{milestone.doi}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-semibold text-[#334155] transition-colors cursor-pointer"
            >
              Close Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
