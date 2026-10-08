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
                <div className="transform -skew-x-12 rounded-md bg-[#FF5A1F] w-full sm:w-60 h-7 sm:h-6 inline-flex items-center justify-center border border-white/10 shadow-md shrink-0">
                  <div className="transform skew-x-12 flex items-center gap-2 text-white text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" x2="7.01" y1="7" y2="7"></line>
                    </svg>
                    <span>Limited-Time Special Offer</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-normal">Complete CapCut Masterclass</p>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Get the <span className="text-white">Complete CapCut Masterclass</span> for <br className="hidden sm:inline" />
                  <span className="text-[#FF5A1F] text-3xl sm:text-4xl font-black block sm:inline mt-1 sm:mt-0">LKR 20,000</span>
                </h3>
                <p className="text-xs text-neutral-300 max-w-md leading-relaxed font-light">
                  Master editing fundamentals, color grading, music and sound effects, and professional typography through practical lessons and real projects.
                </p>

                <div className="pt-2 w-full">
                  <a
                    onClick={handleEnrollClick}
                    className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl sm:rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-100 transition-all duration-300 shadow-md text-center hover:scale-105 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent before:transition-transform before:duration-700"
                    href="https://lms.editor.lk/payment"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10">Sign Up and Get your discount</span>
                  </a>
                </div>
              </div>

              {/* Timer Box */}
              <div className="shrink-0 w-full lg:w-130 relative z-10 flex flex-col items-center pt-2 sm:pt-0">
                <div className="w-full rounded-3xl border border-[rgba(255,90,31,0.3)] text-center p-4 sm:p-5" style={{background: "linear-gradient(135deg, rgba(255,90,31,0.35) 0%, rgba(14,13,13,0.95) 100%)", boxShadow: "0 10px 40px rgba(255, 75, 75, 0.2), inset 0 10px 30px rgba(255, 75, 75, 0.25)"}}>
                  <span className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#ffffffd1] inline-flex items-center gap-2 mb-3">
                    <svg aria-hidden="true" className="lucide lucide-hourglass w-3.5 h-3.5 text-white/90 animate-spin" style={{animationDuration: '6s'}} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 22h14" />
                      <path d="M5 2h14" />
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                    </svg>
                    special offer price expires..
                  </span>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                    <div className="h-20 sm:h-20 rounded-2xl border border-[#ff5b1f4f] flex flex-col items-center justify-center text-white" style={{background: "rgba(20, 11, 10, 0.85)", boxShadow: "inset 0 1px 5px rgba(0, 0, 0, 0.5)"}}>
                      <span className="text-2xl sm:text-4xl font-bold leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Hours</span>
                    </div>
                    <div className="h-20 sm:h-20 rounded-2xl border border-[#ff5b1f4f] flex flex-col items-center justify-center text-white" style={{background: "rgba(20, 11, 10, 0.85)", boxShadow: "inset 0 1px 5px rgba(0, 0, 0, 0.5)"}}>
                      <span className="text-2xl sm:text-4xl font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Minutes</span>
                    </div>
                    <div className="h-20 sm:h-20 rounded-2xl border border-[#ff5b1f4f] flex flex-col items-center justify-center text-white" style={{background: "rgba(20, 11, 10, 0.85)", boxShadow: "inset 0 1px 5px rgba(0, 0, 0, 0.5)"}}>
                      <span className="text-2xl sm:text-4xl font-bold leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-semibold">Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid for Bonus Card & Main Pricing Card */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
              
              {/* Bonus Card */}
              <div ref={middleCardsRef} className="order-2 lg:order-1 lg:col-span-3 px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="middle-card lg:col-span-2 relative rounded-[28.26px] p-5 sm:p-8 border flex flex-col justify-between gap-5 sm:gap-6 overflow-hidden group shadow-lg lg:h-[180.84px]" style={{borderColor: "rgba(255, 255, 255, 0.05)"}}>
                  <div className="flex items-start justify-between relative z-10 w-full">
                    <div className="space-y-1 text-left">
                      <h4 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#FF5A1F]">FREE</h4>
                      <p className="text-lg sm:text-4xl font-bold tracking-tight text-white leading-tight">CapCut Pro Account</p>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-normal">Includes 1 Month of Premium Access</p>
                    </div>

                    <div className="block sm:hidden shrink-0 w-18 h-18 rounded-2xl bg-white shadow-xl transform rotate-6 border border-white/20">
                      <div className="relative w-full h-full">
                        <img alt="CapCut Logo" className="object-contain" src="/main/1/countdown/capcut-logo 1.png" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} />
                      </div>
                    </div>
                  </div>

                  <div className="block sm:hidden w-full relative z-10 pt-1">
                    <a onClick={handleEnrollClick} className="w-full h-11 rounded-2xl bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-500/20 active:scale-95 transition-all text-center" href="https://lms.editor.lk/payment" target="_blank" rel="noreferrer">
                      <span>EXCLUSIVE BONUS</span>
                    </a>
                  </div>

                  <div className="absolute right-20 -bottom-5 w-64 h-45 select-none hidden sm:block pointer-events-none">
                    <div className="absolute left-3 -bottom-4 w-27 h-27 z-0">
                      <img alt="CapCut Logo Back" className="object-contain transform rotate-60" src="/main/1/countdown/capcut-logo 1.png" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} />
                    </div>
                    <div className="absolute right-4 -bottom-3 w-44 h-44 z-10">
                      <img alt="CapCut Logo Front" className="object-contain transform transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" src="/main/1/countdown/capcut-logo 1.png" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} />
                    </div>
                  </div>
                </div>

                <div className="middle-card relative rounded-[28.26px] p-6 bg-[#212121] border border-white/5 hidden sm:flex flex-col justify-between shadow-lg lg:h-[180.84px]" style={{borderColor: "rgba(255, 255, 255, 0.05)"}}>
                  <div className="flex items-center gap-3">
                    <h4 className="text-4xl sm:text-[36px] font-semibold tracking-tight text-white leading-none">LKR 0.00</h4>
                    <div className="text-[9px] tracking-wider text-neutral-400 uppercase leading-normal">
                      <div>Free CapCut Account</div>
                      <div>For 1 Month</div>
                    </div>
                  </div>

                  <a onClick={handleEnrollClick} className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-full h-11 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md select-none before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700" href="https://lms.editor.lk/payment" target="_blank" rel="noreferrer">
                    <span className="relative z-10">Exclusive Bonus</span>
                  </a>

                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <div className="flex text-[#FF5B1F] tracking-tighter text-sm">★★★★★</div>
                      <span className="font-semibold text-white text-[9px]">4.9 / 5.0</span>
                    </div>
                    <p className="text-[8px] text-white/40 font-light leading-none">Rated by verified students</p>
                  </div>
                </div>
              </div>

              {/* Main Masterclass Pricing Box */}
              <div ref={bottomOfferRef} className="order-1 lg:order-2 lg:col-span-3 mx-4 sm:mx-0 relative rounded-[28.26px] p-5 sm:p-8 lg:p-10 h-auto overflow-hidden shadow-2xl flex flex-col justify-between" style={{background: "linear-gradient(225deg, rgba(255, 107, 56, 0.45) 0%, rgba(255, 107, 56, 0.12) 50%, #050505 85%)"}}>
                <div className="absolute -left-32 -bottom-32 w-96 h-96 pointer-events-none rounded-full" style={{background: "radial-gradient(circle, rgba(255, 92, 53, 0.12) 0%, transparent 70%)"}}></div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-4 relative z-10 select-none">
                  <div className="transform -skew-x-12 rounded-md bg-gradient-to-r from-[#FF4E27] to-[#FF723F] px-3 py-1 flex items-center justify-center border border-white/10 shadow-md animate-pulse">
                    <div className="transform skew-x-12 flex items-center gap-1 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <svg className="w-3 h-3 text-white shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" x2="7.01" y1="7" y2="7"></line>
                      </svg>
                      <span>20% OFF</span>
                    </div>
                  </div>

                  <div className="transform -skew-x-12 rounded-md bg-[#0091FF] px-3 py-1 flex items-center justify-center border border-white/10 shadow-md">
                    <div className="transform skew-x-12 flex items-center gap-1 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <svg className="w-3 h-3 text-white fill-white shrink-0" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>BEST VALUE</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-11 gap-5 lg:gap-10 items-start relative z-10">
                  <div className="lg:col-span-5 space-y-3.5">
                    <h3 className="text-xs sm:text-2xl tracking-tight text-white/70 font-medium">Complete Masterclass</h3>
                    
                    <div className="relative w-full h-75 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                      <img alt="Complete CapCut Editing Masterclass" className="object-center w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/main/1/countdown/complete-course.png" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-5">
                        <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                          <div>Complete</div>
                          <div>CapCut Editing</div>
                          <div>Master Class.</div>
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      <div className="space-y-0.5">
                        <div className="text-[10px] sm:text-[14px] font-bold text-[#E8344A] uppercase tracking-widest">REGULAR PRICE</div>
                        <div className="text-xl sm:text-3xl font-bold text-[#E8344A] line-through decoration-2">LKR 25,000</div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-[11px] sm:text-[16px] font-semibold text-white/60 uppercase tracking-wider">Limited-Time Price</div>
                        <div className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-none">LKR 20,000</div>
                        <div className="text-[10px] sm:text-[14px] text-white/50 pt-0.5">(One-time payment • Full course access)</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4 lg:pt-10 pt-2">
                    <div className="p-3 sm:pb-4 rounded-2xl sm:rounded-[20px] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 space-y-2">
                      <a onClick={handleEnrollClick} className="relative overflow-hidden w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] text-white font-bold text-base sm:text-xl uppercase flex items-center justify-center shadow-lg shadow-red-500/25 active:scale-95 transition-all text-center hover:scale-[1.02] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700" href="https://lms.editor.lk/payment" target="_blank" rel="noreferrer">
                        <span className="relative z-10">Enroll Now</span>
                      </a>
                      <p className="text-center text-[10px] sm:text-[11px] text-neutral-400 font-normal leading-none pt-0.5">
                        Enroll Now for <strong className="text-white font-semibold">LKR 20,000</strong> (Save 20% off)
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-3 border-t border-white/10">
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Editing Fundamentals</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Professional Color Grading</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Music and Sound Effects</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Typography and Text Animation</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Practical Project Files</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Client-Ready Portfolio Projects</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Final Project Evaluation</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">Verified Certificate of Completion</span></div>
                      <div className="flex items-start gap-1.5"><span className="text-white font-bold text-xs shrink-0 mt-0.5">✓</span><span className="text-[11px] sm:text-sm text-white/90 font-medium leading-tight">01 Month CapCut Pro Included</span></div>
                    </div>

                    <div className="pt-1">
                      <span className="inline-flex px-3 py-1 rounded-md bg-[#CCFF00] text-black font-extrabold text-[10px] sm:text-[12px] tracking-wider uppercase shadow-md">
                        25% CHEAPER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block mt-8 pt-6 border-t border-white/10 text-center space-y-2.5 relative z-10">
                  <h4 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">Ready to Start Editing Like a Pro?</h4>
                  <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-md mx-auto font-normal">Enroll today, secure the special course price, and receive valuable tools to accelerate your editing journey.</p>
                  <p className="text-xl sm:text-2xl font-bold italic text-[#FF5B1F] tracking-tight uppercase pt-2">Complete Masterclass + 1-Month CapCut Pro Bonus</p>
                </div>
              </div>

              <div className="order-3 block lg:hidden mx-4 relative rounded-3xl p-6 border border-white/10 text-center space-y-3 z-10 shadow-2xl overflow-hidden bg-gradient-to-b from-[#8C231E]/90 via-[#230C0A]/95 to-[#050505]/98">
                <h4 className="text-2xl font-extrabold tracking-tight text-white leading-tight">Ready to Start Editing <br/> Like a Pro?</h4>
                <p className="text-xs text-white/60 leading-relaxed max-w-md mx-auto font-normal">Enroll today, secure the special course price, and receive valuable tools to accelerate your editing journey.</p>
                <p className="text-xs font-bold italic text-[#FF5B1F] tracking-tight uppercase pt-1">Complete Masterclass + <br/> 1-Month CapCut Pro Bonus</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

