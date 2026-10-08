import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/courseData';
import { Scissors, Palette, Music, Type, ChevronDown, ChevronUp, Play, Download, Clock, CheckCircle2, Lock } from 'lucide-react';

const ICON_MAP = {
  Scissors: Scissors,
  Palette: Palette,
  Music: Music,
  Type: Type
};

export default function ModuleShowcase({ onOpenEnroll, onPreviewLesson }) {
  const [expandedModule, setExpandedModule] = useState("module-1");

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-24 bg-neutral-900/60 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
            Complete Step-by-Step Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What You'll Learn Inside Editor.lk
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From absolute beginner basics to advanced CapCut speed ramping, color grading, audio layering, and viral typography.
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {COURSE_MODULES.map((module) => {
            const IconComp = ICON_MAP[module.icon] || Scissors;
            const isExpanded = expandedModule === module.id;

            return (
              <div
                key={module.id}
                className={`glass-panel rounded-3xl overflow-hidden transition-all duration-300 border ${
                  isExpanded ? 'border-orange-500/50 shadow-2xl shadow-orange-500/10' : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-neutral-900 px-2.5 py-0.5 rounded-md border border-neutral-800">
                          {module.badge}
                        </span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1 font-semibold">
                          <Clock className="w-3.5 h-3.5" /> {module.duration} • {module.lessonsCount} Lessons
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {module.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 hidden sm:block">
                        {module.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 shrink-0 hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-neutral-800/80 space-y-6 animate-in fade-in duration-300">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {module.description}
                    </p>

                    {/* Module Highlights Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {module.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Lesson Items */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Lessons Breakdown</h4>
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-center justify-between gap-3 text-sm hover:border-neutral-700 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-xs flex items-center justify-center font-bold">
                                {lesson.id}
                              </span>
                              <span className="text-neutral-200 font-semibold">{lesson.title}</span>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <span className="text-xs text-neutral-400 font-mono">{lesson.duration}</span>
                              {lesson.freePreview ? (
                                <button
                                  onClick={() => onPreviewLesson(lesson)}
                                  className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1 hover:bg-emerald-500/30 transition-colors cursor-pointer"
                                >
                                  <Play className="w-3 h-3 fill-current" /> Free Preview
                                </button>
                              ) : (
                                <span className="text-xs text-neutral-500 flex items-center gap-1">
                                  <Lock className="w-3 h-3" /> Enrolled Only
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enrollment Footer CTA inside Module section */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenEnroll}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Unlock Full Access to All 57+ Lessons Now
          </button>
        </div>

      </div>
    </section>
  );
}
