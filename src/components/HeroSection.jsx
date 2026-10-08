import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO_DATA = [
  {
    id: 0,
    slug: '/editing-fundamentals',
    name: 'Editing Fundamentals',
    badge: 'Editing Fundamentals',
    title: <>Master the Cut <br/><span className="text-white">Tell Better Stories.</span></>,
    desc: 'Learn essential editing principles, timelines, trimming, speed ramping, keyframes, and pacing used in professional workflows.',
    webBg: '/main/1/hero/web/Funde-bg.png',
    mobileBg: '/main/1/hero/mobile/capcut-bg-mobile.png',
    alt: 'EDITING FUNDAMENTALS MODULE'
  },
  {
    id: 1,
    slug: '/color-grading',
    name: 'Color Grading',
    badge: 'Color Grading Module',
    title: <>Transform Color <br/><span className="text-white">Create Cinema.</span></>,
    desc: 'Master color correction, contrast adjustments, skin tone protection, and 3D LUT grading to give every video a polished film look.',
    webBg: '/main/1/hero/web/color-grad-new.png',
    mobileBg: '/main/1/hero/web/color-grad-new.png',
    alt: 'COLOR GRADING MODULE'
  },
  {
    id: 2,
    slug: '/music-and-sound',
    name: 'Music & Sound effects',
    badge: 'Capcut Masterclass',
    title: <>Create Emotion <br/><span className="text-white">Through Audio.</span></>,
    desc: 'Learn how to choose music, mix clean audio, and add sound effects that strengthen emotion, rhythm, and storytelling throughout every edit.',
    webBg: '/main/1/hero/web/music-bg.png',
    mobileBg: '/main/1/hero/mobile/music-bg-mobile.png',
    alt: 'Capcut Masterclass'
  },
  {
    id: 3,
    slug: '/typography',
    name: 'Typography',
    badge: 'Typography Module',
    title: <>Pop Subtitles <br/><span className="text-white">Engage Viewers.</span></>,
    desc: 'Learn how to create professional titles, captions, and animated text that make your videos more engaging, clear, and visually appealing.',
    webBg: '/main/1/hero/web/typo-bg.png',
    mobileBg: '/main/1/hero/mobile/typo-bg-mobile.png',
    alt: 'Typography Module'
  }
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(2); // Music & Sound effects default
  const heroRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 640px)", () => {
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: -10,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.3,
            refreshPriority: 10
          }
        });
      }
    });
  }, { scope: heroRef });

  useEffect(() => {
    let timer = null;

    const startTimer = () => {
      if (!timer) {
        timer = setInterval(() => {
          if (window.scrollY < 150) {
            setActiveTab(prev => (prev + 1) % HERO_DATA.length);
          }
        }, 5000);
      }
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 150) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    if (window.scrollY < 150) {
      startTimer();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      stopTimer();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeMod = HERO_DATA[activeTab];

  return (
    <div id="home" className="sticky top-0 z-10 w-full bg-black">
      <div id="about">
        <section ref={heroRef} id="home" className="relative w-full h-dvh bg-black text-white pt-14 sm:pt-20 flex flex-col justify-between overflow-hidden">
          
          {/* Background Images Layer */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            {HERO_DATA.map((item, index) => (
              <div
                key={item.id}
                className={`gsap-bg-target gsap-bg-${index} absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                  activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Mobile Image */}
                <div className="relative w-full h-full block sm:hidden">
                  <img
                    alt={item.alt}
                    src={item.mobileBg}
                    className="object-cover object-center brightness-110 contrast-105 w-full h-full"
                  />
                </div>
                {/* Desktop Image */}
                <div className="relative w-full h-full hidden sm:block">
                  <img
                    alt={item.alt}
                    src={item.webBg}
                    className="object-cover brightness-110 contrast-105 object-top sm:object-center w-full h-full"
                  />
                </div>
              </div>
            ))}

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black sm:via-black/80 sm:via-30% sm:to-transparent sm:to-65%"></div>
          </div>

          {/* Foreground Text */}
          <div className="relative z-30 max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 w-full grow flex flex-col justify-end sm:justify-center my-auto pt-12 sm:pt-16 lg:pt-12 pb-10 min-h-0">
            <div key={activeTab} className="max-w-xl lg:max-w-2xl 2xl:max-w-3xl space-y-3 sm:space-y-4 animate-text-in">
              
              <div>
                <div className="gsap-anim-item font-poppins tracking-wider inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-semibold uppercase text-white shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse"></span>
                  {activeMod.badge}
                </div>
              </div>

              <h1 className="gsap-anim-item text-[40px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-md">
                {activeMod.title}
              </h1>

              <p className="max-w-67.5 sm:max-w-full gsap-anim-item text-[9px] sm:text-sm lg:text-base 2xl:text-lg text-gray-300 lg:max-w-lg 2xl:max-w-xl font-normal tracking-tight leading-relaxed">
                {activeMod.desc}
              </p>

              {/* Action Buttons */}
              <div className="gsap-anim-item flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="hidden sm:inline-flex items-center gap-3 sm:gap-4">
                  <a
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700"
                    href="https://lms.editor.lk/payment"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <svg className="w-4 h-4 shrink-0 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer select-none px-5 py-3 hover:scale-105"
                    href="#curriculum"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <span>Explore</span>
                  </a>
                </div>

                <div className="sm:hidden flex flex-col gap-2 w-full">
                  <div className="flex gap-2 w-full">
                    <a
                      className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 active:scale-95 transition-all"
                      href="https://lms.editor.lk/payment"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Enroll Now</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </a>

                    <Link
                      to={activeMod.slug}
                      className="py-3 px-4 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-all"
                    >
                      <span>Page</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Student Proof */}
              <div className="gsap-anim-item flex items-center justify-between sm:justify-start gap-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img alt="Editor.lk Student" className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover shrink-0" src="/avatars/avatar-1.jpg" />
                    <img alt="Editor.lk Student" className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover shrink-0" src="/avatars/avatar-2.jpg" />
                    <img alt="Editor.lk Student" className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover shrink-0" src="/avatars/avatar-3.jpg" />
                  </div>

                  <div className="flex flex-col text-[11px] sm:text-xs text-white/90 font-medium">
                    <span>Join <strong className="text-white font-bold">5,000+</strong> students already learning</span>
                    <div className="flex text-amber-400 text-xs tracking-tighter">★★★★★</div>
                  </div>
                </div>

                <a aria-label="Explore curriculum" className="sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/15 border border-white/20 text-white shrink-0 active:scale-90 transition-transform" href="#curriculum">
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Module Pills Bar */}
          <div className="relative z-30 w-full bg-[#0a0a0c]/80 sm:bg-[#0a0a0c]/40 border-t border-white/10 pt-3 pb-6 sm:py-5 px-4 sm:px-6 lg:px-8 sm:backdrop-blur-md shrink-0">
            <div className="max-w-340 2xl:max-w-408 mx-auto flex items-center justify-between overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
              <div className="flex items-center gap-3 min-w-max">
                {HERO_DATA.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <div key={item.id} className="relative flex items-center gap-1">
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`relative overflow-hidden px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center justify-center ${
                          isActive
                            ? 'bg-white text-black shadow-xl scale-105'
                            : 'bg-[#1C1C1E] text-white/90 hover:bg-[#2A2A2E] hover:text-white border border-white/10 hover:scale-102'
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {isActive && (
                          <span key={`progress-${item.id}`} className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#F93B4E] to-[#FF6B35] rounded-b-2xl animate-[fillProgress_5s_linear_infinite]"></span>
                        )}
                      </button>

                      <Link
                        to={item.slug}
                        title={`Open full ${item.name} page`}
                        className={`p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                          isActive
                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 scale-105'
                            : 'bg-[#1C1C1E] text-white/70 hover:text-white hover:bg-[#2A2A2E] border border-white/10'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
