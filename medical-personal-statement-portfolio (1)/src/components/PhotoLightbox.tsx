import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Tag, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { AcademicPhoto } from '../data/photosData';

interface PhotoLightboxProps {
  photo: AcademicPhoto | null;
  photoUrl: string | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photoUrl,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  const displaySrc = photoUrl || photo.defaultPath;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0F172A]/90 backdrop-blur-md">
        {/* Background Click to Dismiss */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0F172A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Close viewer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left / Navigation arrow buttons on image */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 md:right-[360px] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Image Canvas Container */}
          <div className="flex-1 min-h-[300px] md:min-h-[500px] bg-black/40 flex items-center justify-center p-4 relative">
            <img
              src={displaySrc}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              onError={(e) => {
                // Fallback display placeholder
                const target = e.currentTarget;
                target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>

          {/* Right Information Panel */}
          <div className="w-full md:w-88 p-6 md:p-8 bg-[#1E293B] flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-white/10">
            <div className="space-y-4">
              <div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-2">
                  {photo.chapterLabel}
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-white leading-snug">
                  {photo.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{photo.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{photo.year}</span>
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Context & Archival Description
                </p>
                <p className="text-sm text-slate-200 leading-relaxed font-serif-editorial">
                  {photo.caption}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {photo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-[11px] text-slate-300 border border-slate-700"
                  >
                    <Tag className="w-2.5 h-2.5 opacity-60" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-right">
              <span className="text-[11px] text-slate-400">
                Suhel Batarseh • Official Academic Archive
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
