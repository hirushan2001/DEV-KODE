import React from 'react';
import { Globe, Video, Share2, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenEnroll, onOpenLMS }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                E
              </div>
              <span className="text-xl font-black text-white">
                Editor<span className="text-orange-500">.lk</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sri Lanka's premier video editing masterclass. Master CapCut, color grading, sound design, and typography to create viral, cinematic videos.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-orange-400 flex items-center justify-center transition-colors">
                <Video className="w-4 h-4 text-orange-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-500 flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4 text-red-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-blue-500 flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#curriculum" className="hover:text-white transition-colors">Course Guide & Modules</a></li>
              <li><a href="#playground" className="hover:text-white transition-colors">Interactive Demos</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Student Projects</a></li>
              <li><a href="#assets" className="hover:text-white transition-colors">Free LKR 25k Asset Pack</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Discount</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Col 3: Student LMS Portal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Student Portal</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenLMS} className="hover:text-orange-400 transition-colors text-left">LMS Dashboard Login</button></li>
              <li><button onClick={onOpenEnroll} className="hover:text-white transition-colors text-left">Enrollment Portal</button></li>
              <li><a href="#assets" className="hover:text-white transition-colors">Asset Pack Download</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Certificate Verification</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Join Free Editing Tips</h4>
            <p className="text-xs text-neutral-400">Get weekly CapCut presets, LUT drops, and editing hotkeys in your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              />
              <button className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors shrink-0">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Editor.lk. All rights reserved. Built with ❤️ for Sri Lankan Creators.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <span>•</span>
            <button onClick={scrollToTop} className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
