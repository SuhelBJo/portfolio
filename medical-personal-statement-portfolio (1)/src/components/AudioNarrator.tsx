import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, FastForward, Check, Headphones, X } from 'lucide-react';
import { Chapter } from '../types';

interface AudioNarratorProps {
  isOpen: boolean;
  onClose: () => void;
  chapters: Chapter[];
  activeChapter: string;
}

const narrationScripts: Record<string, string> = {
  foundation: "Chapter One: The Crucible. Five years ago, I believed medicine was defined by perfect diagnostic knowledge. Learning from competitive chess in Jordan and unloading food bank crates in Delaware taught me that real healthcare begins by meeting patients where they are.",
  journey: "Chapter Two: The Transformation. On an inpatient neurology rotation at King Abdullah University Hospital, catching an evolving stroke through subtle bedside observation rather than automated labs proved that attentiveness and teamwork save lives.",
  vision: "Chapter Three: What I Bring to Your Team. Beyond scores, I bring unflappable composure under pressure, genuine team-first dedication, and deep humility. If there is one thing to remember: I am a resident who will always elevate the team and protect our patients."
};

export const AudioNarrator: React.FC<AudioNarratorProps> = ({
  isOpen,
  onClose,
  chapters,
  activeChapter,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState<number>(1.0);

  useEffect(() => {
    const idx = chapters.findIndex(c => c.id === activeChapter);
    if (idx !== -1) {
      setCurrentChapterIndex(idx);
    }
  }, [activeChapter, chapters]);

  // Handle SpeechSynthesis
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      const currentChapterId = chapters[currentChapterIndex]?.id || 'foundation';
      const textToRead = narrationScripts[currentChapterId] || narrationScripts.foundation;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = speechRate;
      utterance.pitch = 1.0;
      
      utterance.onend = () => {
        if (currentChapterIndex < chapters.length - 1) {
          setCurrentChapterIndex(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlaying, currentChapterIndex, speechRate, chapters]);

  if (!isOpen) return null;

  const currentChapter = chapters[currentChapterIndex] || chapters[0];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentChapterIndex(0);
  };

  const handleNext = () => {
    window.speechSynthesis.cancel();
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
    } else {
      setCurrentChapterIndex(0);
    }
    if (!isPlaying) setIsPlaying(true);
  };

  return (
    <div
      id="audio-narrator-widget"
      className="fixed bottom-6 right-6 z-40 bg-[#0F172A] text-white rounded-2xl p-4 shadow-2xl border border-slate-700 w-80 sm:w-96 animate-fade-in no-print"
    >
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-slate-800 text-slate-200">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold block text-white">
              Audio Statement Narrator
            </span>
            <span className="text-[10px] text-slate-400 font-mono-academic">
              {isPlaying ? 'Currently Reading' : 'Paused'}
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            setIsPlaying(false);
            window.speechSynthesis.cancel();
            onClose();
          }}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chapter Indicator */}
      <div className="bg-slate-900/80 rounded-xl p-3 mb-3 border border-slate-800">
        <span className="text-[10px] font-mono-academic uppercase tracking-wider text-slate-400 block mb-0.5">
          {currentChapter.number}
        </span>
        <p className="text-xs font-semibold text-white truncate">
          {currentChapter.title}
        </p>
        <p className="text-[11px] text-slate-400 font-serif-editorial truncate">
          {currentChapter.subtitle}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => setSpeechRate(prev => prev === 1.0 ? 1.25 : prev === 1.25 ? 0.9 : 1.0)}
          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-mono-academic text-slate-300 transition-colors cursor-pointer"
          title="Playback Speed"
        >
          {speechRate}x Speed
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            title="Restart Narration"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            id="audio-narrator-toggle-play"
            onClick={handleTogglePlay}
            className="p-3 bg-white hover:bg-slate-100 text-[#0F172A] rounded-full transition-transform active:scale-95 shadow-md cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play Narration'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            title="Next Chapter"
          >
            <FastForward className="w-4 h-4" />
          </button>
        </div>

        <span className="text-[10px] text-slate-400 font-mono-academic">
          {currentChapterIndex + 1} / {chapters.length}
        </span>
      </div>
    </div>
  );
};
