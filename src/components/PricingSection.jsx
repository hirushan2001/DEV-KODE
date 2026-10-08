import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 10, minutes: 40, seconds: 0 });
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);
  const topBannerRef = useRef(null);
  const middleCardsRef = useRef(null);
  const bottomOfferRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (parallaxRef.current && sectionRef.current) {
        gsap.fromTo(
          parallaxRef.current,
          { yPercent: -8, opacity: 0.85, force3D: true },
          {
            yPercent: 0,
            opacity: 1,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 10%",
              scrub: 0.3
            }
          }
        );
        gsap.to(parallaxRef.current, {
          scale: 0.97,
          opacity: 0.7,
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 90%",
            end: "bottom 10%",
            scrub: 0.3
          }
        });
      }
    });

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"
      },
      (context) => {
        if (!sectionRef.current) return;
        const { isDesktop } = context.conditions;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isDesktop ? "top 75%" : "top 85%",
            once: true
          }
        });

        if (topBannerRef.current) {
          tl.fromTo(
            topBannerRef.current,
            { opacity: 0, y: isDesktop ? 30 : 20, force3D: true },
            { opacity: 1, y: 0, duration: 0.5, force3D: true, ease: "power2.out" }
          );
        }

        if (middleCardsRef.current) {
          const cards = middleCardsRef.current.querySelectorAll(".middle-card");
          if (cards.length > 0) {
            tl.fromTo(
              cards,
              { opacity: 0, y: isDesktop ? 30 : 20, force3D: true },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, force3D: true, ease: "power2.out" },
              "-=0.2"
            );
          }
        }

        if (bottomOfferRef.current) {
          tl.fromTo(
            bottomOfferRef.current,
            { opacity: 0, y: isDesktop ? 30 : 20, force3D: true },
            { opacity: 1, y: 0, duration: 0.5, force3D: true, ease: "power2.out" },
            "-=0.2"
          );
        }
      }
    );
  }, { scope: sectionRef });

  const handleEnrollClick = (e) => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback silent
    }
  };

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
    <div className="relative z-10 w-full bg-neutral-950 pt-6 sm:pt-10" id="pricing">
      <div id="enroll">
        <section ref={sectionRef} className="relative z-10 w-full pt-16 sm:pt-20 pb-20 bg-neutral-950 text-white overflow-hidden">
          <div ref={parallaxRef} className="pricing-parallax-container max-w-340 2xl:max-w-408 mx-auto px-0 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 will-change-transform transform-gpu">
            
            {/* Top Banner Card */}
            <div ref={topBannerRef} className="relative rounded-none sm:rounded-4xl p-5 sm:p-8 lg:px-10 h-auto border-y sm:border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden shadow-xl" style={{backgroundRepeat: "repeat, no-repeat", boxShadow: "inset 0 1px 20px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.7)"}}>
              <div className="absolute -right-20 -top-20 w-80 h-80 pointer-events-none rounded-full" style={{background: "radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)"}}></div>
              
              <div className="space-y-3.5 max-w-2xl relative z-10 text-left w-full">
                <div className="transform -skew-x-12 rounded-md bg-[#FF5A1F] px-4 py-1.5 inline-flex items-center justify-center border border-white/10 shadow-md shrink-0">
                  <div className="transform skew-x-12 flex items-center gap-2 text-white text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" x2="7.01" y1="7" y2="7"></line>
                    </svg>
                    <span>Custom Development Solution</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-normal">DEV KODE Technical Consulting</p>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  <span className="text-white">Let's Build the Right Solution</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed font-light">
                  Every project is different. Tell us about your idea and we'll help you find the right technology and approach for your needs.
                </p>

                <div className="pt-2 w-full">
                  <a
                    onClick={handleEnrollClick}
                    className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl sm:rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-100 transition-all duration-300 shadow-md text-center hover:scale-105"
                    href="/#contact"
                  >
                    <span className="relative z-10">Discuss Your Project</span>
                  </a>
                </div>
              </div>

              {/* Consultation Highlight Box */}
              <div className="shrink-0 w-full lg:w-130 relative z-10 flex flex-col items-center pt-2 sm:pt-0">
                <div className="w-full rounded-3xl border border-[rgba(255,90,31,0.3)] text-center p-6" style={{background: "linear-gradient(135deg, rgba(255,90,31,0.35) 0%, rgba(14,13,13,0.95) 100%)", boxShadow: "0 10px 40px rgba(255, 75, 75, 0.2)"}}>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white inline-flex items-center gap-2 mb-3">
                    Fast Response • 24h Project Review
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Free Initial Consultation</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                    Get an estimate, architectural recommendation, and project roadmap for your custom web or software idea.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid for Value Propositions & Offer Box */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
              
              {/* Feature Highlights */}
              <div ref={middleCardsRef} className="order-2 lg:order-1 lg:col-span-3 px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="middle-card lg:col-span-2 relative rounded-[28.26px] p-5 sm:p-8 border flex flex-col justify-between gap-5 sm:gap-6 overflow-hidden group shadow-lg lg:h-[180.84px]" style={{borderColor: "rgba(255, 255, 255, 0.05)"}}>
                  <div className="flex items-start justify-between relative z-10 w-full">
                    <div className="space-y-1 text-left">
                      <h4 className="text-3xl sm:text-4xl font-bold tracking-tight leading-none text-[#FF5A1F]">TAILORED</h4>
                      <p className="text-lg sm:text-3xl font-bold tracking-tight text-white leading-tight">Software Engineering</p>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-normal">Designed Around Your Business Requirements & Goals</p>
                    </div>
                  </div>

                  <div className="w-full relative z-10 pt-1">
                    <a onClick={handleEnrollClick} className="inline-flex py-2.5 px-6 rounded-2xl bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] text-white font-bold text-xs uppercase tracking-wider items-center justify-center gap-2 shadow-md shadow-red-500/20 active:scale-95 transition-all text-center" href="/#contact">
                      <span>Get a Proposal</span>
                    </a>
                  </div>
                </div>

                <div className="middle-card relative rounded-[28.26px] p-6 bg-[#212121] border border-white/5 hidden sm:flex flex-col justify-between shadow-lg lg:h-[180.84px]" style={{borderColor: "rgba(255, 255, 255, 0.05)"}}>
                  <div className="flex items-center gap-3">
                    <h4 className="text-3xl font-semibold tracking-tight text-white leading-none">Agile</h4>
                    <div className="text-[9px] tracking-wider text-neutral-400 uppercase leading-normal">
                      <div>Transparent Sprints</div>
                      <div>Clear Milestones</div>
                    </div>
                  </div>

                  <a onClick={handleEnrollClick} className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md px-6 py-3 w-full h-11 rounded-2xl" href="/#contact">
                    <span className="relative z-10">Discuss Your Project</span>
                  </a>

                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <div className="flex text-[#FF5B1F] tracking-tighter text-sm">★★★★★</div>
                      <span className="font-semibold text-white text-[9px]">100% Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Solution Box */}
              <div ref={bottomOfferRef} className="order-1 lg:order-2 lg:col-span-3 mx-4 sm:mx-0 relative rounded-[28.26px] p-5 sm:p-8 lg:p-10 h-auto overflow-hidden shadow-2xl flex flex-col justify-between" style={{background: "linear-gradient(225deg, rgba(255, 107, 56, 0.45) 0%, rgba(255, 107, 56, 0.12) 50%, #050505 85%)"}}>
                <div className="absolute -left-32 -bottom-32 w-96 h-96 pointer-events-none rounded-full" style={{background: "radial-gradient(circle, rgba(255, 92, 53, 0.12) 0%, transparent 70%)"}}></div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-4 relative z-10 select-none">
                  <div className="transform -skew-x-12 rounded-md bg-gradient-to-r from-[#FF4E27] to-[#FF723F] px-3 py-1 flex items-center justify-center border border-white/10 shadow-md">
                    <div className="transform skew-x-12 flex items-center gap-1 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <span>ENTERPRISE GRADE</span>
                    </div>
                  </div>

                  <div className="transform -skew-x-12 rounded-md bg-[#0091FF] px-3 py-1 flex items-center justify-center border border-white/10 shadow-md">
                    <div className="transform skew-x-12 flex items-center gap-1 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <span>SCALABLE ARCHITECTURE</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-11 gap-5 lg:gap-10 items-start relative z-10">
                  <div className="lg:col-span-5 space-y-3.5">
                    <h3 className="text-xl sm:text-3xl tracking-tight text-white font-extrabold">Let's Build the Right Solution</h3>
                    
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      Every project is different. Tell us about your idea and we'll help you find the right technology and approach for your needs.
                    </p>

                    <div className="pt-2">
                      <a onClick={handleEnrollClick} className="relative overflow-hidden w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] text-white font-bold text-base sm:text-lg uppercase flex items-center justify-center shadow-lg shadow-red-500/25 active:scale-95 transition-all text-center" href="/#contact">
                        <span className="relative z-10">Discuss Your Project</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2.5 pt-3 border-t border-white/10">
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Tailored Software Architecture</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Modern Frontend & Backend Stack</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Scalable Cloud Infrastructure</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">UI/UX Design & Prototyping</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Agile Sprints & Clear Milestones</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Dedicated Technical Support</span></div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block mt-8 pt-6 border-t border-white/10 text-center space-y-2.5 relative z-10">
                  <h4 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">Have an Idea? Let's Build It.</h4>
                  <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-md mx-auto font-normal">Tell us what you're building and let's turn your idea into a digital product.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

