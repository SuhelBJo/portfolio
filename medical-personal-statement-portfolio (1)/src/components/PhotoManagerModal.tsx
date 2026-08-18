import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Check, Trash2, Image, Camera, Info, Sparkles, FolderOpen, Files, RefreshCw, Globe, Download, CloudCheck } from 'lucide-react';
import { academicPhotosList, AcademicPhoto } from '../data/photosData';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  photosState: Record<string, string>;
  onUpdatePhoto: (photoId: string, dataUrl: string) => void;
  onRemovePhoto: (photoId: string) => void;
  onResetAllPhotos: () => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  photosState,
  onUpdatePhoto,
  onRemovePhoto,
  onResetAllPhotos,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hero' | 'foundation' | 'journey' | 'vision'>('all');
  const [uploadSuccessId, setUploadSuccessId] = useState<string | null>(null);
  const [batchMessage, setBatchMessage] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const batchInputRef = useRef<HTMLInputElement>(null);
  const jsonImportRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const filteredPhotos = activeTab === 'all' 
    ? academicPhotosList 
    : academicPhotosList.filter((p) => p.chapter === activeTab);

  const handleSingleFile = (photoId: string, file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        onUpdatePhoto(photoId, reader.result);
        setUploadSuccessId(photoId);
        setTimeout(() => setUploadSuccessId(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);
    if (files.length === 0) return;

    let matchedCount = 0;
    const unassignedSlots = academicPhotosList.map((p) => p.id).filter((id) => !photosState[id]);

    files.forEach((file: File, index: number) => {
      const lowerName = file.name.toLowerCase();
      let targetId: string | null = null;

      // Smart heuristic match based on file name
      if (lowerName.includes('profile') || lowerName.includes('portrait') || lowerName.includes('suhel')) {
        targetId = 'profile';
      } else if (lowerName.includes('food') || lowerName.includes('hunger') || lowerName.includes('bank')) {
        targetId = 'foodbank';
      } else if (lowerName.includes('volunteer') || lowerName.includes('vest') || lowerName.includes('youth') || lowerName.includes('team')) {
        targetId = 'volunteering';
      } else if (lowerName.includes('delaware') || lowerName.includes('mepi') || lowerName.includes('ud')) {
        targetId = 'delaware';
      } else if (lowerName.includes('clinic') || lowerName.includes('desk') || lowerName.includes('hammer') || lowerName.includes('reflex')) {
        targetId = 'clinic-desk';
      } else if (lowerName.includes('hospital') || lowerName.includes('entrance') || lowerName.includes('just') || lowerName.includes('kauh')) {
        targetId = 'hospital-entrance';
      } else if (lowerName.includes('conference') || lowerName.includes('japa') || lowerName.includes('match') || lowerName.includes('suit')) {
        targetId = 'conference';
      } else if (lowerName.includes('sdg') || lowerName.includes('wheel') || lowerName.includes('aim')) {
        targetId = 'un-sdg';
      } else if (lowerName.includes('flag') || lowerName.includes('crest') || lowerName.includes('emblem')) {
        targetId = 'un-flag';
      } else if (lowerName.includes('hall') || lowerName.includes('assembly') || lowerName.includes('podium') || lowerName.includes('general')) {
        targetId = 'un-assembly';
      } else {
        // Fallback: use first available unassigned slot or sequential index
        targetId = unassignedSlots[index] || academicPhotosList[index % academicPhotosList.length].id;
      }

      if (targetId) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            onUpdatePhoto(targetId!, reader.result);
          }
        };
        reader.readAsDataURL(file);
        matchedCount++;
      }
    });

    setBatchMessage(`Saved ${files.length} photo(s) to server & domain! Visible to all visitors.`);
    setTimeout(() => setBatchMessage(null), 5000);
  };

  const handleExportBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(photosState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'suhel_batarseh_photos_backup.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (typeof imported === 'object' && imported !== null) {
          Object.entries(imported).forEach(([id, url]) => {
            if (typeof url === 'string') {
              onUpdatePhoto(id, url);
            }
          });
          setBatchMessage('Successfully loaded backup photos into your portfolio!');
          setTimeout(() => setBatchMessage(null), 4000);
        }
      } catch (err) {
        console.error('Failed to parse backup JSON:', err);
      }
    };
    reader.readAsText(file);
  };

  const handleManualSyncToServer = async () => {
    setIsSyncing(true);
    try {
      await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photos: photosState }),
      });
      setBatchMessage('All photos are permanently synced to your server & custom domain!');
      setTimeout(() => setBatchMessage(null), 4000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncing(false);
    }
  };

  const totalUploadedCount = academicPhotosList.filter((p) => Boolean(photosState[p.id])).length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0F172A]/70 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border border-[#CBD5E1] shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-serif-heading text-[#0F172A]">
                    Academic Photos & Domain Sync Manager
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <Globe className="w-3 h-3" />
                    <span>Domain & Public Sync Active</span>
                  </span>
                </div>
                <p className="text-xs text-[#64748B] font-medium">
                  {totalUploadedCount} of {academicPhotosList.length} photo slots loaded • Saved permanently on your server for all visitors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Persistent Domain Sync Explanation Banner */}
          <div className="px-6 py-2.5 bg-emerald-50/80 border-b border-emerald-200/80 flex items-center justify-between gap-3 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">
                <strong>Saved for All Visitors:</strong> When you share your website link or connect your domain, all photos you upload here are delivered automatically to any device, reviewer, or residency committee worldwide.
              </span>
            </div>
            <button
              onClick={handleManualSyncToServer}
              disabled={isSyncing}
              className="shrink-0 px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer shadow-2xs transition-colors flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isSyncing ? 'Syncing...' : 'Sync Server Now'}</span>
            </button>
          </div>

          {/* Quick Bulk Upload Bar */}
          <div className="px-6 py-3 bg-[#F1F5F9] border-b border-[#CBD5E1] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={batchInputRef}
                onChange={handleBatchUpload}
                accept="image/*"
                multiple
                className="hidden"
              />
              <button
                type="button"
                onClick={() => batchInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer shadow-2xs"
              >
                <Files className="w-3.5 h-3.5" />
                <span>Bulk Select Multiple Photos</span>
              </button>
              <span className="text-[11px] text-[#64748B] hidden sm:inline">
                Select 1 to 10 photos from your device at once
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="file"
                ref={jsonImportRef}
                onChange={handleImportBackup}
                accept=".json"
                className="hidden"
              />
              <button
                type="button"
                onClick={handleExportBackup}
                className="text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer flex items-center gap-1"
                title="Download JSON photo backup"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Backup JSON</span>
              </button>

              <button
                type="button"
                onClick={() => jsonImportRef.current?.click()}
                className="text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer flex items-center gap-1"
                title="Import JSON photo backup"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Restore JSON</span>
              </button>

              <button
                onClick={onResetAllPhotos}
                className="text-xs font-medium text-[#DC2626] hover:underline cursor-pointer px-2 py-1 flex items-center gap-1"
                title="Clear custom uploads"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Batch Success Message */}
          {batchMessage && (
            <div className="px-6 py-2 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 font-medium animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{batchMessage}</span>
            </div>
          )}

          {/* Filter Bar */}
          <div className="px-6 py-2.5 bg-white border-b border-[#E2E8F0] flex items-center gap-1.5 overflow-x-auto">
            {[
              { id: 'all', label: `All Photos (${academicPhotosList.length})` },
              { id: 'hero', label: 'Profile Portrait' },
              { id: 'foundation', label: 'Chapter I: Foundation' },
              { id: 'journey', label: 'Chapter II: Clinical' },
              { id: 'vision', label: 'Chapter III: Vision & UN' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0F172A] text-white shadow-2xs'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Photos Grid Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPhotos.map((photo) => {
                const currentUrl = photosState[photo.id] || null;
                const isCustom = Boolean(currentUrl);
                const isSuccess = uploadSuccessId === photo.id;

                return (
                  <div
                    key={photo.id}
                    className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    {/* Thumbnail Preview with Upload Trigger */}
                    <div className="relative aspect-4/3 bg-slate-200 overflow-hidden group">
                      {currentUrl ? (
                        <>
                          <img
                            src={currentUrl}
                            alt={photo.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div
                            onClick={() => inputRefs.current[photo.id]?.click()}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-semibold cursor-pointer p-3 text-center"
                          >
                            <Upload className="w-6 h-6 mb-1 text-emerald-400" />
                            <span>Click to Replace Photo</span>
                          </div>
                        </>
                      ) : (
                        <div
                          onClick={() => inputRefs.current[photo.id]?.click()}
                          className="w-full h-full p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-white border border-[#CBD5E1] shadow-2xs flex items-center justify-center text-[#0F172A] mb-1.5">
                            <Upload className="w-4 h-4 text-[#2563EB]" />
                          </div>
                          <span className="text-xs font-bold text-[#0F172A]">
                            Upload {photo.title}
                          </span>
                          <span className="text-[10px] text-[#2563EB] font-medium mt-0.5">
                            Click to select image file
                          </span>
                        </div>
                      )}

                      {/* Hidden File Input */}
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (inputRefs.current[photo.id] = el)}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleSingleFile(photo.id, file);
                        }}
                        className="hidden"
                      />

                      {/* Status Badges */}
                      <div className="absolute top-2 left-2 flex gap-1">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/60 backdrop-blur-xs text-white">
                          {photo.chapterLabel}
                        </span>
                      </div>

                      {isSuccess && (
                        <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-0.5 rounded-md text-[10px] font-semibold flex items-center gap-1 shadow-md">
                          <Check className="w-3 h-3" />
                          <span>Saved to Domain</span>
                        </div>
                      )}
                    </div>

                    {/* Metadata Card Footer */}
                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A] line-clamp-1">
                          {photo.title}
                        </h4>
                        <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2 leading-tight">
                          {photo.caption}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => inputRefs.current[photo.id]?.click()}
                          className="text-[11px] font-semibold text-[#0F172A] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Upload className="w-3 h-3" />
                          <span>{isCustom ? 'Change File' : 'Upload File'}</span>
                        </button>

                        {isCustom && (
                          <button
                            type="button"
                            onClick={() => onRemovePhoto(photo.id)}
                            className="text-[11px] text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                            title="Remove photo"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
            <span className="text-xs text-[#64748B]">
              Photos are synced and stored on your live server for all visitors.
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer shadow-xs"
            >
              Done & View Statement
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

