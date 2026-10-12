import React from 'react';
import { Check, X, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPARISON_ROWS = [
  { feature: "Time to Kickoff", devkode: "⚡ 48 Hours", inhouse: "2 - 3 Months", agency: "3 - 4 Weeks" },
  { feature: "Senior Software Engineers Only", devkode: true, inhouse: false, agency: false },
  { feature: "100% Intellectual Property & Code Ownership", devkode: true, inhouse: true, agency: false },
  { feature: "Flexible Monthly Sprints & Pause Anytime", devkode: true, inhouse: false, agency: false },
  { feature: "Built-in AI & LLM Automation", devkode: true, inhouse: false, agency: false },
  { feature: "Guaranteed Sub-50ms Global Edge TTFB", devkode: true, inhouse: false, agency: false },
  { feature: "24/7 Dedicated Cloud Infrastructure Support", devkode: true, inhouse: false, agency: false },
];

export default function ComparisonMatrix() {
  return (
    <section className="w-full py-16 sm:py-24 bg-neutral-950 text-white select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Why Ambitious Brands <br className="hidden sm:block" />
            Choose DEV KODE.
          </h2>
          <p className="text-xs sm:text-base text-neutral-400 leading-relaxed font-normal">
            See how DEV KODE compares to expensive in-house hiring and slow traditional software agencies.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="p-4 sm:p-8 rounded-3xl bg-[#0F0F12] border border-white/10 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-neutral-400">
                  <th className="py-4 px-4 sm:px-6 w-2/5">Feature &amp; Deliverable</th>
                  <th className="py-4 px-4 sm:px-6 w-1/5 text-orange-400 font-extrabold bg-orange-500/10 rounded-t-2xl border-x border-t border-orange-500/30">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 fill-orange-400" />
                      DEV KODE
                    </div>
                  </th>
                  <th className="py-4 px-4 sm:px-6 w-1/5">In-House Team</th>
                  <th className="py-4 px-4 sm:px-6 w-1/5">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-200 group-hover:text-white transition-colors">
                      {row.feature}
                    </td>
                    
                    {/* DEV KODE Column */}
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-orange-400 bg-orange-500/10 border-x border-orange-500/20">
                      {typeof row.devkode === 'boolean' ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-white font-mono bg-orange-500/20 px-2.5 py-1 rounded-md border border-orange-500/40 text-xs">
                          {row.devkode}
                        </span>
                      )}
                    </td>

                    {/* In-House Column */}
                    <td className="py-4 px-4 sm:px-6 text-neutral-400">
                      {typeof row.inhouse === 'boolean' ? (
                        row.inhouse ? (
                          <Check className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-600" />
                        )
                      ) : (
                        row.inhouse
                      )}
                    </td>

                    {/* Agency Column */}
                    <td className="py-4 px-4 sm:px-6 text-neutral-400">
                      {typeof row.agency === 'boolean' ? (
                        row.agency ? (
                          <Check className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-600" />
                        )
                      ) : (
                        row.agency
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Action Bar inside Card */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Code Ownership &amp; IP Protection Guaranteed.</span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E93749] to-[#FE6936] text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Get Started In 48 Hours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
