import React, { useState } from 'react';
import { Eye, MapPin, Sparkles, BookOpen, Compass, Award, Stethoscope, Brain } from 'lucide-react';
import { AcademicPhoto } from '../data/photosData';

interface PhotoSlotCardProps {
  photo: AcademicPhoto;
  customUrl?: string | null;
  onUpload?: (photoId: string, dataUrl: string) => void;
  onView: (photoId: string) => void;
  themeColor?: 'emerald' | 'blue' | 'indigo' | 'slate';
}

export const PhotoSlotCard: React.FC<PhotoSlotCardProps> = ({
  photo,
  customUrl,
  onView,
}) => {
  const [imgLoadError, setImgLoadError] = useState(false);
  const hasPhoto = Boolean((customUrl || photo.defaultPath) && !imgLoadError);

  const getChapterIcon = (category: string) => {
    switch (category) {
      case 'foundation':
        return <Compass className="w-6 h-6 text-[#0F172A]" />;
      case 'journey':
        return <Brain className="w-6 h-6 text-[#0F172A]" />;
      case 'vision':
        return <Stethoscope className="w-6 h-6 text-[#0F172A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0F172A]" />;
    }
  };

  return (
    <div
      onClick={() => onView(photo.id)}
      className="bg-white rounded-xl border border-[#CBD5E1] transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:border-[#0F172A] hover:shadow-md cursor-pointer group"
    >
      {/* Top Visual Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100 flex items-center justify-center">
        {hasPhoto ? (
          <>
            <img
             src={customUrl || photo.defaultPath}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgLoadError(true)}
            />
            {/* Clean Viewer Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-white">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#0F172A] text-xs font-semibold shadow-sm backdrop-blur-xs">
                <Eye className="w-3.5 h-3.5" />
                <span>Expand Archival Photo</span>
              </span>
            </div>
          </>
        ) : (
          /* Refined Archival Catalogue Display */
          <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] group-hover:bg-[#F1F5F9] transition-colors">
            <div className="w-11 h-11 rounded-full bg-white border border-[#CBD5E1] shadow-2xs flex items-center justify-center text-[#0F172A] mb-2 group-hover:scale-110 transition-transform">
              {getChapterIcon(photo.category)}
            </div>
            <p className="text-xs font-bold text-[#0F172A]">
              {photo.title}
            </p>
            <span className="text-[10px] text-[#64748B] font-medium mt-0.5">
              {photo.location} • {photo.year}
            </span>
            <span className="text-[10px] text-[#0F172A] font-semibold mt-1 flex items-center gap-1 opacity-80 group-hover:opacity-100">
              <Eye className="w-3 h-3" />
              <span>Click to view details</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-3.5 space-y-1.5 bg-white">
        <div className="flex items-start justify-between gap-1">
          <h5 className="text-xs font-bold text-[#0F172A] group-hover:text-blue-900 transition-colors">
            {photo.title}
          </h5>
          <span className="text-[10px] text-[#64748B] font-medium shrink-0 bg-[#F1F5F9] px-1.5 py-0.5 rounded-md border border-[#E2E8F0]">
            {photo.year}
          </span>
        </div>

        <p className="text-[11px] text-[#64748B] leading-relaxed font-serif-editorial">
          {photo.caption}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9] text-[10px]">
          <div className="flex items-center gap-1 text-[#64748B]">
            <MapPin className="w-3 h-3 text-[#0F172A] shrink-0" />
            <span>{photo.location}</span>
          </div>

          <span className="text-[#0F172A] font-medium flex items-center gap-0.5 group-hover:underline">
            <span>Dossier Record</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
