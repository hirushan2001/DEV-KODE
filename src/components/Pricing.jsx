import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, Clock, ArrowRight, Sparkles, CreditCard, Lock, Award } from 'lucide-react';

export default function Pricing({ onOpenEnroll }) {
  const [currency, setCurrency] = useState('LKR'); // LKR or USD
  
  // Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-600/20 via-orange-600/20 to-amber-600/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-orange-400 animate-spin" /> Limited Time 70% Discount
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One-Time Investment. Lifetime Access.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            No monthly subscription fees ever. Get the complete CapCut masterclass, LKR 25,000 asset pack, lifetime updates, and community access.
          </p>

          {/* Currency Switcher */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold">
              <button
                onClick={() => setCurrency('LKR')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  currency === 'LKR' ? 'bg-orange-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                }`}
              >
                🇱🇰 LKR (Sri Lanka)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  currency === 'USD' ? 'bg-orange-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                }`}
              >
                🌐 USD (Global)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border-2 border-orange-500/40 relative shadow-2xl space-y-8">
          
          {/* Top Discount Tag */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg border border-white/20">
            🔥 Special Flash Sale Offer
          </div>

          {/* Price Header */}
          <div className="text-center space-y-3 pt-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Full CapCut Masterclass Access</span>
            
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                {currency === 'LKR' ? 'LKR 4,900' : '$16.00'}
              </span>
              <span className="text-xl sm:text-2xl text-neutral-500 line-through font-bold">
                {currency === 'LKR' ? 'LKR 15,000' : '$49.00'}
              </span>
            </div>

            <p className="text-xs text-emerald-400 font-bold bg-emerald-500/10 inline-block px-3 py-1 rounded-full border border-emerald-500/20">
              Save {currency === 'LKR' ? 'LKR 10,100' : '$33.00'} (70% Off) • Promo Code Applied: MASTER30
            </p>
          </div>

          {/* Countdown Timer Bar */}
          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
              <Clock className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>Discount Offer Expires In:</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm font-black text-orange-400">
              <div className="bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                {String(timeLeft.hours).padStart(2, '0')}h
              </div>
              <span>:</span>
              <div className="bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </div>
              <span>:</span>
              <div className="bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </div>
            </div>
          </div>

          {/* Included Features Bullet Points */}
          <div className="space-y-3.5 text-sm text-neutral-200">
            <div className="font-bold text-white text-xs uppercase tracking-wider text-neutral-400">What's Included:</div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Complete 4 Core Modules</strong> (Editing, Color, Music, Typography)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>CapCut Mobile & CapCut PC Masterclasses</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Free LKR 25,000 Mega Asset Pack</strong> (500+ SFX, 50+ LUTs, Fonts)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Lifetime LMS Portal Access & Free Future Updates</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Private WhatsApp & Discord Student Community Access</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Verified Digital Certificate of Completion</strong></span>
            </div>
          </div>

          {/* Enroll CTA Button */}
          <div className="space-y-3 pt-2">
            <button
              onClick={onOpenEnroll}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white font-black text-lg shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Enroll Now — {currency === 'LKR' ? 'LKR 4,900' : '$16.00'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 font-semibold pt-1">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL Secure</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-400" /> 7-Day Money Back Guarantee</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="pt-4 border-t border-neutral-800 text-center space-y-2">
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Accepted Sri Lankan & Global Payment Methods</span>
            <div className="flex items-center justify-center gap-3 text-xs text-neutral-300 font-semibold flex-wrap">
              <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Visa / Mastercard</span>
              <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Direct Bank Deposit (Slip)</span>
              <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800">Koko PayLater</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
