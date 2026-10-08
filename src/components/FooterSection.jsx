import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FooterSection() {
  const footerRef = useRef(null);

  useGSAP(() => {
    const fixedLayer = footerRef.current?.querySelector(".footer-fixed-layer");
    const curtainSpacer = footerRef.current?.querySelector(".footer-curtain-spacer");
    const signatureText = footerRef.current?.querySelector(".footer-signature-text");

    if (fixedLayer && curtainSpacer) {
      gsap.set(fixedLayer, { opacity: 0, visibility: "hidden" });
      ScrollTrigger.create({
        trigger: curtainSpacer,
        start: "top bottom",
        refreshPriority: -10,
        onEnter: () => {
          gsap.set(fixedLayer, { opacity: 1, visibility: "visible" });
        },
        onLeaveBack: () => {
          gsap.set(fixedLayer, { opacity: 0, visibility: "hidden" });
        }
      });
    }

    if (signatureText && curtainSpacer) {
      gsap.fromTo(
        signatureText,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: curtainSpacer,
            start: "top bottom",
            end: "bottom bottom",
            refreshPriority: -10,
            scrub: 0.3
          }
        }
      );
    }
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative w-full">
      <div className="relative z-20 w-full bg-[#0C0C0C] text-white border-t border-white/10 pt-1 pb-12 sm:pb-16 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          
          {/* Mobile Footer Header */}
          <div className="block lg:hidden space-y-3 pb-8 border-b border-white/5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Editor.lk</h3>
            <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed max-w-sm font-medium">
              Learn professional video editing with CapCut through practical lessons, real-world examples, and step-by-step guidance.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a aria-label="Instagram" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.instagram.com/editor.lk_" rel="noopener noreferrer" target="_blank">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a aria-label="TikTok" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.tiktok.com/@_editor.lk_" rel="noopener noreferrer" target="_blank">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 3.92.95V6.69z" />
                </svg>
              </a>

              <a aria-label="Facebook" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.facebook.com/profile.php?id=61589446140574" rel="noopener noreferrer" target="_blank">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a aria-label="YouTube" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://youtube.com/@itsmeaparna1" rel="noopener noreferrer" target="_blank">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-[#55555A] font-medium pt-1">© 2026 Editor.lk. All rights reserved.</p>
          </div>

          {/* Desktop Footer Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 pt-0 lg:pt-4">
            
            <div className="hidden lg:flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">Editor.lk</h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed max-w-xs">
                  Learn professional video editing with CapCut through practical lessons, real-world examples, and step-by-step guidance designed to help creators and editors grow faster.
                </p>
              </div>
              <p className="text-xs text-[#55555A] font-medium pt-2">© 2026 Editor.lk. All rights reserved.</p>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-4">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">Quick Links</h4>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <a className="text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 font-medium" href="/#about">About Course</a>
                <a className="text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 font-medium" href="/#curriculum">Curriculum</a>
                <a className="text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 font-medium" href="/#pricing">Pricing</a>
                <a className="text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 font-medium" href="/#testimonials">Testimonials</a>
                <a className="text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors duration-200 font-medium" href="/#faq">FAQ</a>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-4">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">Contact Us</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors font-medium group" href="tel:+94779503327">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1C1C1E] group-hover:bg-[#252528] flex items-center justify-center shrink-0 text-[#FF5B1F] transition-colors">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </div>
                  <span>077 950 3327</span>
                </a>

                <a className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors font-medium group" href="https://wa.me/94779503327" rel="noopener noreferrer" target="_blank">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1C1C1E] group-hover:bg-[#252528] flex items-center justify-center shrink-0 text-[#FF5B1F] transition-colors">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span>WhatsApp Support</span>
                </a>

                <a className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#8E8E93] hover:text-white transition-colors font-medium group" href="mailto:info@editor.lk">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1C1C1E] group-hover:bg-[#252528] flex items-center justify-center shrink-0 text-[#FF5B1F] transition-colors">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect height="16" rx="2" width="20" x="2" y="4" />
                    </svg>
                  </div>
                  <span>info@editor.lk</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h4 className="text-base font-bold text-white tracking-tight">Legal</h4>
                <div className="flex flex-col gap-3">
                  <a className="text-sm text-[#8E8E93] hover:text-[#FF5B1F] transition-colors duration-200" href="/privacy-policy">Privacy Policy</a>
                  <a className="text-sm text-[#8E8E93] hover:text-[#FF5B1F] transition-colors duration-200" href="/terms-and-conditions">Terms &amp; Conditions</a>
                  <a className="text-sm text-[#8E8E93] hover:text-[#FF5B1F] transition-colors duration-200" href="/refund-policy">Refund Policy</a>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">Follow Us</h5>
                <div className="flex items-center gap-2.5">
                  <a aria-label="Instagram" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.instagram.com/editor.lk_" rel="noopener noreferrer" target="_blank">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a aria-label="TikTok" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.tiktok.com/@_editor.lk_" rel="noopener noreferrer" target="_blank">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 3.92.95V6.69z" />
                    </svg>
                  </a>
                  <a aria-label="Facebook" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://www.facebook.com/profile.php?id=61589446140574" rel="noopener noreferrer" target="_blank">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a aria-label="YouTube" className="w-9 h-9 rounded-xl bg-[#1C1C1E] border border-neutral-800 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5B1F] hover:border-[#FF5B1F]/40 hover:bg-[#252528] transition-all cursor-pointer" href="https://youtube.com/@itsmeaparna1" rel="noopener noreferrer" target="_blank">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 sm:pt-10 border-t border-white/5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-[#8E8E93]">
              <a className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="/terms-and-conditions">Terms &amp; Conditions</a>
              <a className="hover:text-white transition-colors" href="/refund-policy">Refund Policy</a>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-1 rounded-full bg-[#FF5B1F]"></div>
                <div className="w-4 h-1 rounded-full bg-[#2C2C2E]"></div>
                <div className="w-4 h-1 rounded-full bg-[#2C2C2E]"></div>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-[#55555A] tracking-wider uppercase">SRI LANKA'S #1 VIDEO EDITING COMMUNITY</span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Curtain Spacer */}
      <div className="footer-curtain-spacer relative z-0 h-[28vh] sm:h-[42vh] lg:h-[48vh] w-full pointer-events-none"></div>

      {/* Footer Fixed Curtain Reveal Layer */}
      <div className="footer-fixed-layer fixed bottom-0 left-0 w-full h-[28vh] sm:h-[42vh] lg:h-[48vh] z-0 flex items-center justify-center overflow-hidden pointer-events-none border-t border-white/10 bg-black">
        <h1 className="footer-signature-text text-[25.8vw] sm:text-[25vw] lg:text-[25.2vw] font-black tracking-tighter select-none leading-none text-center whitespace-nowrap w-screen text-white drop-shadow-2xl flex items-center justify-center px-0 -ml-[0.03em]">
          Editor.lk
        </h1>
      </div>
    </footer>
  );
}

