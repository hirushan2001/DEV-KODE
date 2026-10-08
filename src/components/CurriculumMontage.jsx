import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CurriculumMontage() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // 1. Fixed Curtain Reveal animation (scale + opacity scrub as white FAQ container lifts)
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0.96,
          opacity: 0.4,
          transformOrigin: "top center"
        },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "top 35%",
            scrub: 0.3
          }
        }
      );
    }

    // 2. Header text entrance animation
    if (contentRef.current) {
      const elements = contentRef.current.children;
      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // 3. Grid Columns Stagger & Parallax Scroll animation
    if (gridRef.current) {
      const columns = gridRef.current.children;
      
      // Initial staggered entrance
      gsap.fromTo(
        columns,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Subtle parallax shift between odd and even columns on scroll
      Array.from(columns).forEach((col, index) => {
        const speed = index % 2 === 0 ? -15 : 15;
        gsap.to(col, {
          y: speed,
          ease: "none",
          force3D: true,
          // scrollTrigger: {
          //   trigger: gridRef.current,
          //   start: "top bottom",
          //   end: "bottom top",
          //   scrub: 0.3
          // }
        });
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full py-12 sm:py-16 bg-[#08080A] overflow-hidden transform-gpu will-change-transform">
      
      {/* Header Banner Block */}
      <div className="relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center border-b border-white/5 min-h-[360px] sm:min-h-[440px]">
        
        {/* Background Montage banner */}
        <div className="absolute inset-0 w-full h-full opacity-90">
          <img
            alt="CapCut Masterclass Curriculum Background"
            className="object-cover object-top w-full h-full"
            src="/main/1/footer/ui-montage.png"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-black/40 to-[#0C0C0C] pointer-events-none"></div>

        {/* Text Foreground */}
        <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            All You’ll Learn Here.
          </h2>
          <p className="text-neutral-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            This is our complete curriculum - every skill, tool, and lesson from basics to mastery.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-44 h-12 text-base shadow-2xl"
              href="https://lms.editor.lk/payment"
              target="_blank"
              rel="noreferrer"
            >
              <span>Enroll Now</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Grid of UI montage feature cards */}
      <div className="relative w-full bg-[#08080A] pt-6 pb-4 sm:pt-8 sm:pb-6">
        <div className="w-full max-w-[1660px] mx-auto px-2 sm:px-6">
          <div ref={gridRef} className="grid grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-3.5 w-full items-start">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-24 sm:h-50 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Key Frame" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/keyframe2.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-16 sm:h-28 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Speed Panel" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/speed pannel.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-28 sm:h-52 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Frame 27" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/basic.png" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Compound Clip" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/compound.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Camera Moments" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/camera.png" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-24 sm:h-50 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Music" className="object-cover object-center transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/Frame 27.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-44 sm:h-82 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Effects & Transitions" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/effect.png" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Create your own Portfolio" className="object-cover object-top transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/protfolio.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="How to get Clients" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/hot to get cliens.png" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Col 5 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="How to Price Your Edit" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/mucis.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Color Grading" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/color.png" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Col 6 */}
            <div className="flex flex-col gap-2 sm:gap-3 transform-gpu will-change-transform">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Real time Client Projects" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/how to.png" loading="lazy" decoding="async" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Real time Client Projects" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/realtime.png" loading="lazy" decoding="async" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


