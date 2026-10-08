import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Sliders, Volume2, Type, Play, RefreshCw, Zap, CheckCircle } from 'lucide-react';

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState('color');

  // Color Grading Slider State
  const [splitPos, setSplitPos] = useState(50);
  const isDraggingRef = useRef(false);

  // Soundboard Web Audio API
  const playSoundEffect = (type) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === 'whoosh') {
        // White noise whoosh filter sweep
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(200, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.2);
        filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.4);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
      } else if (type === 'bass') {
        // Sine wave drop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.8, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } else if (type === 'pop') {
        // Pop click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.6, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'shutter') {
        // Fast click noise
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (e) {
      console.log('Audio playback error', e);
    }
  };

  // Typography Studio State
  const [subtitleText, setSubtitleText] = useState("CREATE EMOTION THROUGH AUDIO");
  const [activeFont, setActiveFont] = useState("Syne");
  const [activePreset, setActivePreset] = useState("neon");

  return (
    <section id="playground" className="py-20 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 animate-spin" /> Interactive CapCut Studio Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Try the Editing Magic Live
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Experience the actual tools and transformation techniques taught inside Editor.lk masterclass before you enroll!
          </p>

          {/* Playground Tabs Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 gap-2">
              <button
                onClick={() => setActiveTab('color')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'color' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4" /> 1. Color Grade Split Slider
              </button>

              <button
                onClick={() => setActiveTab('audio')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'audio' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Volume2 className="w-4 h-4" /> 2. Audio SFX Soundboard
              </button>

              <button
                onClick={() => setActiveTab('typo')}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'typo' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Type className="w-4 h-4" /> 3. Subtitle & Typography Studio
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: COLOR GRADING SPLIT SLIDER */}
        {activeTab === 'color' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-orange-500" /> RAW Log vs Editor.lk Color Grade
                </h3>
                <p className="text-xs text-neutral-400">Drag the slider left and right to inspect color restoration & skin tone balance.</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                Course Module 02 Teaser
              </span>
            </div>

            {/* Split Image Container */}
            <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-neutral-800 shadow-2xl">
              
              {/* Right Side: Graded Image */}
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                alt="Color Graded"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-150 brightness-105"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-emerald-500/90 text-white font-bold text-xs shadow-md">
                AFTER: Editor.lk LUT Grade
              </div>

              {/* Left Side: RAW Image (Clipped) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${splitPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                  alt="RAW Flat Footage"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-75 saturate-50 sepia-20"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-neutral-900/90 text-neutral-300 font-bold text-xs border border-neutral-700 shadow-md">
                  BEFORE: Flat Camera Log
                </div>
              </div>

              {/* Split Drag Line & Knob */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${splitPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black font-extrabold text-xs flex items-center justify-center shadow-xl border-2 border-orange-500">
                  ↔
                </div>
              </div>

              {/* Range Input Trigger */}
              <input
                type="range"
                min="0"
                max="100"
                value={splitPos}
                onChange={(e) => setSplitPos(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-neutral-300 pt-2">
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="block font-bold text-orange-400 text-sm">Contrast & Curves</span>
                <span>Deep shadows & highlight roll-off</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="block font-bold text-orange-400 text-sm">Skin Tone HSL</span>
                <span>Protected natural skin tones</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="block font-bold text-orange-400 text-sm">Teal & Orange</span>
                <span>Hollywood blockbuster contrast</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="block font-bold text-orange-400 text-sm">3D LUT Exports</span>
                <span>Apply to 1-click in CapCut</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUDIO SFX SOUNDBOARD */}
        {activeTab === 'audio' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-orange-500" /> Interactive SFX Audio Soundboard
                </h3>
                <p className="text-xs text-neutral-400">Click any sound pad below to test real synthesized sound design triggers!</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Included in Free LKR 25k Pack
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button
                onClick={() => playSoundEffect('whoosh')}
                className="p-6 rounded-2xl bg-neutral-900 hover:bg-orange-500/20 border border-neutral-800 hover:border-orange-500/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-white text-sm">Cinematic Whoosh</span>
                  <span className="text-[11px] text-neutral-400">Fast transition wipe</span>
                </div>
              </button>

              <button
                onClick={() => playSoundEffect('bass')}
                className="p-6 rounded-2xl bg-neutral-900 hover:bg-red-500/20 border border-neutral-800 hover:border-red-500/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-white text-sm">Sub Bass Drop</span>
                  <span className="text-[11px] text-neutral-400">Impact title drop</span>
                </div>
              </button>

              <button
                onClick={() => playSoundEffect('pop')}
                className="p-6 rounded-2xl bg-neutral-900 hover:bg-amber-500/20 border border-neutral-800 hover:border-amber-500/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-white text-sm">Text Pop Click</span>
                  <span className="text-[11px] text-neutral-400">Kinetic caption pop</span>
                </div>
              </button>

              <button
                onClick={() => playSoundEffect('shutter')}
                className="p-6 rounded-2xl bg-neutral-900 hover:bg-cyan-500/20 border border-neutral-800 hover:border-cyan-500/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-white text-sm">Camera Shutter</span>
                  <span className="text-[11px] text-neutral-400">Freeze frame cut</span>
                </div>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Over 500+ WAV audio files categorized in course bundle!
              </span>
              <span className="font-mono text-orange-400 font-bold">24-bit 48kHz WAV</span>
            </div>
          </div>
        )}

        {/* TAB 3: KINETIC SUBTITLE & TYPOGRAPHY STUDIO */}
        {activeTab === 'typo' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Type className="w-5 h-5 text-orange-500" /> Kinetic Subtitle & Typography Studio
                </h3>
                <p className="text-xs text-neutral-400">Type custom text below to see live pop caption styles used in viral TikToks & Shorts.</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Course Module 04 Teaser
              </span>
            </div>

            {/* Input Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Custom Text Input</label>
                <input
                  type="text"
                  value={subtitleText}
                  onChange={(e) => setSubtitleText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold focus:outline-none focus:border-orange-500"
                  placeholder="Type subtitle..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Style Preset</label>
                <select
                  value={activePreset}
                  onChange={(e) => setActivePreset(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold focus:outline-none focus:border-orange-500"
                >
                  <option value="neon">Neon Cyberpunk Glow</option>
                  <option value="hormozi">Alex Hormozi Yellow Pop</option>
                  <option value="fire">Fiery Red Gradient</option>
                  <option value="subtitle">Cinematic Subtitle Box</option>
                </select>
              </div>
            </div>

            {/* Live Canvas Preview */}
            <div className="h-56 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center p-6 text-center overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900/50 to-neutral-950"></div>
              
              <div className="relative z-10">
                {activePreset === 'neon' && (
                  <span className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-bounce">
                    {subtitleText || "TYPE SOMETHING..."}
                  </span>
                )}

                {activePreset === 'hormozi' && (
                  <span className="text-2xl sm:text-4xl font-black uppercase tracking-tight bg-yellow-400 text-black px-4 py-1.5 rounded-lg shadow-2xl rotate-[-2deg] inline-block animate-pulse">
                    {subtitleText || "TYPE SOMETHING..."}
                  </span>
                )}

                {activePreset === 'fire' && (
                  <span className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]">
                    {subtitleText || "TYPE SOMETHING..."}
                  </span>
                )}

                {activePreset === 'subtitle' && (
                  <span className="text-lg sm:text-2xl font-bold text-white bg-black/80 px-4 py-2 rounded-md border-b-2 border-orange-500">
                    {subtitleText || "TYPE SOMETHING..."}
                  </span>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
