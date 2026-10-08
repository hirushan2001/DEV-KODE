import React, { useState } from 'react';
import { Play, Sparkles, Star, ArrowRight, CheckCircle2, ShieldCheck, Video, Zap } from 'lucide-react';

const TRACKS = [
  {
    id: 0,
    name: "Editing Fundamentals",
    badge: "Master CapCut Timelines",
    title: "Master the Cut & Tell Stories That Hook",
    description: "Learn essential editing principles, timelines, trimming, speed ramping, keyframes, and pacing used in viral Reels and professional client projects.",
    gradient: "from-orange-500 to-red-600",
    glowColor: "rgba(255, 107, 53, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 1,
    name: "Color Grading",
    badge: "Cinematic Film Look",
    title: "Transform Flat Footage into Hollywood Visuals",
    description: "Master color correction, HSL adjustments, skin tone protection, curve wheels, and 3D LUTs for mobile and desktop video editing.",
    gradient: "from-rose-500 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    name: "Music & Sound Effects",
    badge: "Create Emotion Through Audio",
    title: "Layer Sound Effects That Make Videos Alive",
    description: "Learn how to choose tracks, beat-sync cuts, balance audio levels, clean background noise, and layer 3D whooshes, risers, and impact drops.",
    gradient: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    name: "Typography & Motion",
    badge: "Viral Text & Subtitles",
    title: "Pop Captions & Animated Motion Graphics",
    description: "Create high-retention subtitles (Hormozi style), 3D title tracking, neon glow text, and eye-catching lower thirds that keep viewers watching.",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80"
  }
];

export default function Hero({ onOpenEnroll, onOpenTrailer }) {
  const [activeTrack, setActiveTrack] = useState(2); // Default to Music & Sound as in editor.lk site
  const currentTrack = TRACKS[activeTrack];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-8 pb-12">
      
      {/* Dynamic Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden transition-all duration-700">
        <img
          src={currentTrack.bgImage}
          alt={currentTrack.name}
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125 transition-all duration-1000"
        />
        {/* Ambient Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent"></div>
        
        {/* Animated Glow Blob */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-40 transition-all duration-700"
          style={{ background: currentTrack.glowColor }}
        ></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow flex flex-col justify-center my-auto pt-8 pb-12">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="text-orange-400 font-extrabold">{currentTrack.badge}</span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-200">CapCut Masterclass</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            {currentTrack.title.split('&')[0]}
            {currentTrack.title.includes('&') && (
              <span className={`block bg-gradient-to-r ${currentTrack.gradient} bg-clip-text text-transparent`}>
                & {currentTrack.title.split('&')[1]}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl">
            {currentTrack.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenEnroll}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 hover:from-red-600 hover:to-orange-600 text-white font-extrabold text-base transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105 flex items-center gap-3 cursor-pointer group"
            >
              <span>Enroll Now — LKR 4,900</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenTrailer}
              className="px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold text-base transition-all duration-300 flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>Watch Trailer (2m)</span>
            </button>
          </div>

          {/* Student Trust Proof */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
            <div className="flex -space-x-3 overflow-hidden">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white text-base">4.9 / 5.0</span>
              </div>
              <span className="text-xs text-neutral-400">
                Join <strong className="text-white">5,000+ active students</strong> across Sri Lanka & Worldwide 🇱🇰
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Track Selector Tabs Bar */}
      <div className="relative z-20 w-full glass-panel border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center gap-3 min-w-max">
            {TRACKS.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-white text-black shadow-xl scale-105 font-bold'
                      : 'bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-orange-500 animate-ping' : 'bg-neutral-600'}`}></span>
                  <span>{track.name}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-400 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-800 shrink-0">
            <Zap className="w-3.5 h-3.5 text-orange-400" /> Click tracks to switch hero module
          </div>
        </div>
      </div>

    </section>
  );
}
