import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 w-full max-w-[1920px] mt-2 mx-2 h-15 px-4 sm:px-6 lg:px-8 rounded-[15px] flex items-center justify-between ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md shadow-lg border border-white/20 text-black'
            : 'bg-transparent border border-transparent text-white'
        }`}
      >
        <div className="shrink-0 flex items-center">
          <a className="flex items-center gap-2" href="/">
            <span className={`font-bold text-xl tracking-tight font-sans transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
              Editor.lk
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-4 grow">
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/">
            Home
          </a>
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/#features">
            Course guide
          </a>
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/#projects">
            Projects
          </a>
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/#pricing">
            Pricing
          </a>
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/#comparison">
            Benefits
          </a>
          <a className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${scrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'}`} href="/#faq">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 shrink-0">
          <a
            className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-white'}`}
            href="https://lms.editor.lk/login"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>
          <a
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border shadow-md hover:scale-105 ${
              scrolled
                ? 'bg-black border-black text-white hover:bg-neutral-900'
                : 'bg-white border-white text-black hover:bg-neutral-100'
            }`}
            href="https://lms.editor.lk/payment"
            target="_blank"
            rel="noreferrer"
          >
            Enroll now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
              scrolled ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            href="https://lms.editor.lk/login"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>
          <button
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center justify-center p-1.5 rounded-lg focus:outline-none transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <svg aria-hidden="true" className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`pointer-events-auto fixed inset-x-2 top-18 rounded-2xl p-4 shadow-2xl space-y-3 md:hidden backdrop-blur-xl animate-in fade-in transition-all border ${
          scrolled ? 'bg-white/95 text-black border-neutral-200' : 'bg-black/95 text-white border-neutral-800'
        }`}>
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>Home</a>
            <a href="/#features" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>Course guide</a>
            <a href="/#projects" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>Projects</a>
            <a href="/#pricing" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>Pricing</a>
            <a href="/#comparison" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>Benefits</a>
            <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className={`px-3 py-2 rounded-lg ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-neutral-900'}`}>FAQ</a>
          </div>

          <div className={`pt-2 border-t flex flex-col gap-2 ${scrolled ? 'border-neutral-200' : 'border-neutral-800'}`}>
            <a
              href="https://lms.editor.lk/payment"
              target="_blank"
              rel="noreferrer"
              className={`w-full py-2.5 rounded-full font-semibold text-center text-sm shadow-md active:scale-95 transition-all ${
                scrolled ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              Enroll now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




