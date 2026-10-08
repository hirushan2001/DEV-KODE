import React from 'react';
import { TESTIMONIALS } from '../data/courseData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-900/50 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
            Student Reviews & Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by 5,000+ Creators & Editors
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Read how Editor.lk helped content creators, vloggers, and freelancers transform their editing quality and earn money.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl space-y-6 border border-neutral-800 relative hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-500/15 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/50"
                />
                <div>
                  <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    {t.role} • <MapPin className="w-3 h-3 text-orange-400" /> {t.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
