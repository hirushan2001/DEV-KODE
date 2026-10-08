import React, { useState } from 'react';
import { X, Play, CheckCircle, Download, Award, BookOpen, Volume2, Palette, FileText, User, Sparkles } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';

export default function LmsModal({ isOpen, onClose }) {
  const [activeLesson, setActiveLesson] = useState({
    title: "1.3 Speed Ramping & Smooth Optical Flow Motion",
    module: "Module 01: Editing Fundamentals",
    duration: "15:20",
    videoUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
  });

  const [activeTab, setActiveTab] = useState('lessons'); // 'lessons' or 'downloads'
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  if (!isOpen) return null;

  const handleDownloadAsset = (name) => {
    setDownloadSuccess(name);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl flex flex-col relative">
        
        {/* Top LMS Header */}
        <div className="bg-neutral-900 border-b border-neutral-800 p-4 sm:px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500 text-white font-black text-lg flex items-center justify-center">
              E
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base">Editor.lk Student LMS</span>
                <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">
                  LMS Account Active
                </span>
              </div>
              <span className="text-xs text-neutral-400">Student: Kasun Perera (kasun@example.com)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Overall Progress */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right text-xs">
                <span className="font-bold text-white block">Course Progress</span>
                <span className="text-neutral-400">38 / 57 Lessons Watched</span>
              </div>
              <div className="w-24 h-2.5 rounded-full bg-neutral-800 overflow-hidden border border-neutral-700">
                <div className="w-[68%] h-full bg-gradient-to-r from-orange-500 to-emerald-400"></div>
              </div>
              <span className="font-bold text-orange-400 text-xs font-mono">68%</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* LMS Body Split View */}
        <div className="grow grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
          
          {/* Left / Top: Video Player & Controls (2 Cols) */}
          <div className="lg:col-span-2 p-4 sm:p-6 overflow-y-auto space-y-4 border-r border-neutral-800 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Active Lesson Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{activeLesson.module}</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">{activeLesson.title}</h2>
                </div>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  Duration: {activeLesson.duration}
                </span>
              </div>

              {/* Simulated Video Player */}
              <div className="relative h-64 sm:h-96 rounded-2xl bg-neutral-950 overflow-hidden border border-neutral-800 flex items-center justify-center group">
                <img
                  src={activeLesson.videoUrl}
                  alt={activeLesson.title}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Big Play Overlay */}
                <div className="relative z-10 text-center space-y-3">
                  <button className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mx-auto flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-9 h-9 fill-current ml-1" />
                  </button>
                  <div className="space-y-1">
                    <span className="block text-xs font-bold text-white bg-black/60 px-4 py-1.5 rounded-full border border-white/20 inline-block">
                      1080p 60FPS High Quality CapCut Lesson Stream
                    </span>
                    <span className="block text-[11px] text-neutral-400">Subtitles in Sinhala & English available</span>
                  </div>
                </div>
              </div>

              {/* Download Success Alert */}
              {downloadSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4" /> Download started for: {downloadSuccess} (ZIP file downloaded)
                </div>
              )}
            </div>

            {/* Lesson Resources Footer */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-neutral-300 font-semibold">📁 Project Files for this lesson:</span>
              <button
                onClick={() => handleDownloadAsset('Lesson_1.3_CapCut_Project_Files.zip')}
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download Project ZIP (142 MB)
              </button>
            </div>
          </div>

          {/* Right Sidebar: Lessons & Assets Tabs (1 Col) */}
          <div className="p-4 sm:p-6 bg-neutral-900/50 flex flex-col justify-between overflow-y-auto space-y-4">
            
            {/* Sidebar Tabs */}
            <div className="flex rounded-xl bg-neutral-900 p-1 border border-neutral-800 text-xs font-bold">
              <button
                onClick={() => setActiveTab('lessons')}
                className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'lessons' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Course Modules
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'downloads' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                LKR 25k Asset Pack
              </button>
            </div>

            {/* TAB 1: LESSON LIST */}
            {activeTab === 'lessons' && (
              <div className="space-y-4 grow overflow-y-auto pr-1">
                {COURSE_MODULES.map((mod) => (
                  <div key={mod.id} className="space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400 block">
                      {mod.badge} • {mod.title}
                    </span>
                    <div className="space-y-1.5">
                      {mod.lessons.map((les) => {
                        const isCurrent = activeLesson.title.includes(les.title);
                        return (
                          <button
                            key={les.id}
                            onClick={() => setActiveLesson({
                              title: `${les.id} ${les.title}`,
                              module: `${mod.badge}: ${mod.title}`,
                              duration: les.duration,
                              videoUrl: mod.bgGradient ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80' : ''
                            })}
                            className={`w-full p-2.5 rounded-xl border text-left text-xs flex items-center justify-between transition-all cursor-pointer ${
                              isCurrent
                                ? 'bg-orange-500/20 border-orange-500 text-white font-bold'
                                : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="line-clamp-1">{les.id} {les.title}</span>
                            </div>
                            <span className="text-[10px] font-mono text-neutral-400 shrink-0">{les.duration}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: FREE ASSETS DOWNLOAD */}
            {activeTab === 'downloads' && (
              <div className="space-y-3 grow overflow-y-auto pr-1 text-xs">
                <span className="font-bold text-white text-xs block">Included Assets (Free Download):</span>
                
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-orange-400" /> 500+ SFX Audio Bundle
                    </span>
                    <span className="text-[10px] text-neutral-400">1.2 GB</span>
                  </div>
                  <button
                    onClick={() => handleDownloadAsset('EditorLK_500_SFX_Master_Pack.zip')}
                    className="w-full py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Download className="w-3 h-3" /> Download SFX Zip
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Palette className="w-4 h-4 text-purple-400" /> 50+ Cinematic 3D LUTs
                    </span>
                    <span className="text-[10px] text-neutral-400">340 MB</span>
                  </div>
                  <button
                    onClick={() => handleDownloadAsset('EditorLK_Cinematic_LUTs_Pack.zip')}
                    className="w-full py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Download className="w-3 h-3" /> Download LUTs Zip
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" /> Completion Certificate
                    </span>
                    <span className="text-[10px] text-neutral-400">PDF</span>
                  </div>
                  <button
                    onClick={() => handleDownloadAsset('Kasun_Perera_EditorLK_Certificate.pdf')}
                    className="w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Award className="w-3 h-3" /> Download Verified PDF
                  </button>
                </div>
              </div>
            )}

            {/* Certificate Quick Trigger */}
            <div className="pt-2">
              <button
                onClick={() => handleDownloadAsset('Verified_EditorLK_Master_Certificate.pdf')}
                className="w-full py-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500/30 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4" /> Download Certificate of Completion
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
