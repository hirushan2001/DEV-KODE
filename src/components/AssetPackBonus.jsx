import React from 'react';
import { ASSET_PACK_ITEMS } from '../data/courseData';
import { Gift, Volume2, Palette, Type, Keyboard, Users, Award, Download, ArrowRight, Check } from 'lucide-react';

const ICON_MAP = {
  Volume2: Volume2,
  Palette: Palette,
  Type: Type,
  Keyboard: Keyboard,
  Users: Users,
  Award: Award
};

export default function AssetPackBonus({ onOpenEnroll }) {
  return (
    <section id="assets" className="py-24 bg-neutral-900/40 relative border-t border-neutral-800">
      
      {/* Background Decor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest">
            <Gift className="w-4 h-4 animate-bounce" /> Free Mega Bonus Bundle Included
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LKR 25,000+ Asset Pack — Yours Free Today!
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            When you enroll in Editor.lk today, you get instant 1-click access to our entire professional sound FX library, 3D LUTs, fonts, and community access for life.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSET_PACK_ITEMS.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Gift;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl space-y-4 border border-neutral-800 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-emerald-400">
                  <Check className="w-4 h-4" /> Pre-packaged for CapCut 1-Click Import
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 glass-panel p-8 sm:p-12 rounded-3xl border border-orange-500/30 text-center space-y-6 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
          
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Limited Time Bonus Offer
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Get the Masterclass + LKR 25k Assets for Only LKR 4,900
          </h3>

          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            All files are 100% royalty-free for commercial client projects. No monthly subscription fees ever.
          </p>

          <button
            onClick={onOpenEnroll}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
          >
            <Download className="w-5 h-5" /> Claim Free Assets & Enroll Now
          </button>
        </div>

      </div>
    </section>
  );
}
