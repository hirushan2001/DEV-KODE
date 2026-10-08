import React, { useState } from 'react';
import { STUDENT_PROJECTS } from '../data/courseData';
import { Play, Eye, Sparkles, Video, Award, ExternalLink, X } from 'lucide-react';

export default function StudentProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
              Real Student Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Projects Created by Students
            </h2>
            <p className="text-neutral-400 text-base">
              See what complete beginners achieved after taking the Editor.lk masterclass. Over 1.4M+ viral views generated on social media!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 bg-neutral-900 px-4 py-2 rounded-2xl border border-neutral-800 shrink-0">
            <Award className="w-4 h-4 text-amber-400" /> Verified CapCut Edits
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-orange-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5">
                  <Video className="w-3 h-3 text-pink-500" /> {proj.platform}
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 right-3 bg-orange-500/90 text-white px-2.5 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {proj.views}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">{proj.category}</span>
                  <span className="text-xs text-neutral-400 font-medium">By {proj.studentName}</span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors line-clamp-1">
                  {proj.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden border border-neutral-700 space-y-4 p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center border border-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-bold text-orange-400 uppercase">{selectedProject.category}</span>
                <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-xs text-neutral-400">Edited by {selectedProject.studentName} • {selectedProject.views}</p>
              </div>

              {/* Simulated Video Player */}
              <div className="relative h-80 rounded-2xl bg-neutral-950 overflow-hidden border border-neutral-800 flex items-center justify-center">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                <div className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white mx-auto flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="block text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full border border-white/20">
                    Playing Student CapCut Project Reel
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-neutral-400 pt-2">
                <span>Techniques: {selectedProject.tags.join(" • ")}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
