import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Menu, X, User, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenEnroll, onOpenLMS }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 tracking-wide border-b border-orange-500/30">
        <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1 font-bold">
          <Sparkles className="w-3 h-3 text-yellow-300 animate-spin" /> Limited Offer
        </span>
        <span className="hidden sm:inline">Master CapCut & Video Editing with Sri Lanka's #1 Course!</span>
        <span className="sm:hidden">Get 70% Off + LKR 25,000 Bonus Pack!</span>
        <button 
          onClick={onOpenEnroll} 
          className="underline hover:text-yellow-200 transition-colors ml-1 font-bold inline-flex items-center gap-1"
        >
          Claim Discount <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                Editor<span className="text-orange-500">.lk</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 -mt-1">
                CapCut Masterclass
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Course Guide</a>
            <a href="#playground" className="hover:text-white transition-colors flex items-center gap-1 text-orange-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Demos
            </a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#assets" className="hover:text-white transition-colors">Free Assets</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenLMS}
              className="px-4 py-2 rounded-full text-sm font-semibold text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-neutral-500 bg-neutral-900/60 hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <User className="w-4 h-4 text-orange-400" /> LMS Login
            </button>
            <button
              onClick={onOpenEnroll}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenLMS}
              className="p-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
            >
              LMS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-800 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300 mt-3">
            <div className="flex flex-col space-y-3 font-medium text-neutral-300 text-base">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                Home
              </a>
              <a 
                href="#curriculum" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                Course Guide
              </a>
              <a 
                href="#playground" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg bg-orange-500/10 text-orange-400 font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Interactive Demos
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                Student Projects
              </a>
              <a 
                href="#assets" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                Free LKR 25k Asset Pack
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                Pricing & Discount
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 rounded-lg hover:bg-neutral-800/80 hover:text-white"
              >
                FAQ
              </a>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLMS(); }}
                className="w-full py-3 rounded-xl font-semibold bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-orange-400" /> Student LMS Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenEnroll(); }}
                className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg flex items-center justify-center gap-2"
              >
                Enroll Now (LKR 4,900) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
