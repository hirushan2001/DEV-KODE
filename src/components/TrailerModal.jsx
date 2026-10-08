import React from 'react';
import { X, Play, Sparkles } from 'lucide-react';

export default function TrailerModal({ isOpen, onClose, onOpenEnroll }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl relative p-6 space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center border border-neutral-800 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Editor.lk Official Masterclass Trailer
          </span>
          <h3 className="text-2xl font-extrabold text-white">Watch What You'll Achieve in 2 Minutes</h3>
        </div>

        {/* Video Player */}
        <div className="relative h-80 sm:h-[420px] rounded-2xl bg-neutral-950 overflow-hidden border border-neutral-800 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
            alt="Trailer Thumbnail"
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

          <div className="relative z-10 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mx-auto flex items-center justify-center shadow-2xl animate-pulse cursor-pointer">
              <Play className="w-9 h-9 fill-current ml-1" />
            </div>
            <div className="space-y-1">
              <span className="text-sm font-extrabold text-white block">CapCut Masterclass Overview 2026</span>
              <span className="text-xs text-neutral-400">Teal & Orange Color Grading • Sound Layering • Alex Hormozi Subtitles</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <span className="text-xs text-neutral-400">Ready to transform your editing skills?</span>
          <button
            onClick={() => { onClose(); onOpenEnroll(); }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-extrabold text-xs shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Enroll Now — LKR 4,900
          </button>
        </div>

      </div>
    </div>
  );
}
