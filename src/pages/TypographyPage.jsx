import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TypographyPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        "[class*='hero-asset-1-'], [class*='mobile-asset-1-']",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.25, stagger: 0.08, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="typography-hero"
          className="relative w-full h-screen bg-white sm:bg-white text-white flex flex-col overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, #000000 20%, #000000 36%, #888888 75%, #FFFFFF 100%)",
            }}
          ></div>
          <div className="relative z-30 w-full grow flex flex-col items-center justify-between min-h-0 pt-18 sm:pt-18 lg:pt-20 pb-4 sm:pb-6">
            <div className="w-full max-w-4xl text-center space-y-1 sm:space-y-1.5 shrink-0 px-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="hero-text-item opacity-0 inline-block">
                  Typography in{" "}
                </span>
                <span className="hero-text-item opacity-0 text-[#FF5533] inline-block font-bold">
                  CapCut
                </span>
              </h1>
              <h2 className="hero-text-item opacity-0 text-xs sm:text-base md:text-lg font-semibold text-white tracking-wide pt-0.5">
                From Basic to Professional
              </h2>
              <p className="hero-text-item opacity-0 text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-xs sm:max-w-md lg:max-w-xl mx-auto font-normal leading-relaxed pt-0.5">
                Learn how to use typography perfectly in your videos. Choose the
                right fonts, match the mood, create hierarchy, animate text, and
                make your videos look professional.
              </p>
            </div>
            <div className="relative w-full grow min-h-0 flex lg:hidden flex-col items-center justify-center px-4 max-w-[360px] sm:max-w-md mx-auto space-y-2 sm:space-y-3 my-auto pt-10 pb-3 select-none">
              <div className="mobile-asset-1-2 opacity-0 relative w-full aspect-[3146/2015] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                <img
                  alt="Typography Canvas Preview"
                  decoding="async"
                  data-nimg="fill"
                  className="object-fill object-center"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  sizes="(max-width: 640px) 90vw, 420px"
                  srcSet="/main/4/hero/separate/1.2 new.png"
                  src="/main/4/hero/separate/1.2 new.png"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="mobile-asset-1-1 opacity-0 relative w-full aspect-[318/379] rounded-2xl overflow-hidden border border-white/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Text Style Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 45vw, 200px"
                    srcSet="/main/4/hero/separate/1.1.png"
                    src="/main/4/hero/separate/1.1.png"
                  />
                </div>
                <div className="mobile-asset-1-3 opacity-0 relative w-full aspect-[277/309] rounded-2xl overflow-hidden border border-white/20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Effects Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 45vw, 200px"
                    srcSet="/main/4/hero/separate/1.3.png"
                    src="/main/4/hero/separate/1.3.png"
                  />
                </div>
              </div>
              <div className="mobile-asset-1-4 opacity-0 relative w-full aspect-[952/182] rounded-sm overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                <img
                  alt="Timeline Toolbar"
                  decoding="async"
                  data-nimg="fill"
                  className="object-fill object-center"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  sizes="(max-width: 640px) 90vw, 420px"
                  srcSet="/main/4/hero/separate/1.4.png"
                  src="/main/4/hero/separate/1.4.png"
                />
              </div>
            </div>
            <div className="relative w-full grow min-h-0 hidden lg:flex items-center justify-center px-4 xl:px-8 overflow-visible my-auto -pt-1 pb-6 sm:pb-8">
              <div className="relative w-[720px] xl:w-[620px] 2xl:w-[700px] aspect-[3146/2015] mx-auto select-none rounded-sm">
                <div className="hero-asset-1-2 opacity-0 absolute inset-0 w-full h-full z-10 rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.015]">
                  <img
                    alt="Typography Canvas Preview"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    srcSet="/main/4/hero/separate/1.2 new.png"
                    src="/main/4/hero/separate/1.2 new.png"
                  />
                </div>
                <div className="hero-asset-1-1 opacity-0 absolute -left-[14%] top-[7%] w-[30%] aspect-[318/379] z-20 rounded-2xl overflow-hidden border border-white/70 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Text Styling Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    srcSet="/main/4/hero/separate/1.3.png"
                    src="/main/4/hero/separate/1.3.png"
                  />
                </div>
                <div className="hero-asset-1-3 opacity-0 absolute -right-[16%] top-[42%] w-[30%] aspect-[277/309] z-20 rounded-2xl overflow-hidden border border-white/70 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Font Library Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    srcSet="/main/4/hero/separate/1.1.png"
                    src="/main/4/hero/separate/1.1.png"
                  />
                </div>
                <div className="hero-asset-1-4 opacity-0 absolute -translate-x-1/2 top-[101%] w-[100%] aspect-[952/182] z-10 rounded-xs overflow-hidden drop-shadow-[0_15px_30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    alt="Timeline Toolbar"
                    decoding="async"
                    data-nimg="fill"
                    className="object-fill object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    srcSet="/main/4/hero/separate/1.4.png"
                    src="/main/4/hero/separate/1.4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none overflow-visible lg:overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center mt-6 md:mt-0">
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                  What You'll Learn
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                  Everything you need to master typography in CapCut.
                </p>
              </div>
              <div className="block lg:hidden w-full max-w-95 sm:max-w-sm mx-auto mt-3">
                <div className="relative w-full h-112 sm:h-100 pt-4 overflow-visible">
                  <div
                    style={{ zIndex: "10", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-[#0A0A0A] text-white border border-neutral-900 flex flex-col justify-between p-7 pb-10"
                  >
                    <div className="flex items-center gap-1.5 text-base font-bold tracking-tight shrink-0">
                      <span className="text-[#FF5533]">Typography</span>
                      <span className="text-white font-normal opacity-90">
                        Fundamentals
                      </span>
                    </div>
                    <div className="flex-grow w-full flex items-center justify-center overflow-hidden my-1">
                      <div className="relative w-full h-full bg-black flex flex-col items-center justify-center">
                        <div className="rounded-lg relative group transition-all duration-300">
                          <span className="anim-type-text font-manrope text-[64px] sm:text-[80px] lg:text-[100px] tracking-wider text-white select-none inline-block">
                            TYPE
                          </span>
                          <div className="anim-guide-top absolute top-2.5 sm:top-3.5 left-0 right-0 h-px bg-[#FF5533]/80 origin-center"></div>
                          <div className="anim-guide-top absolute bottom-2.5 sm:bottom-3.5 left-0 right-0 h-px bg-[#FF5533]/80 origin-center"></div>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 pt-0">
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                        Learn the basics of typography and how it affects your
                        video.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "20", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-[#0A0A0A] text-white border border-neutral-900 flex flex-col justify-between p-7 pb-10"
                  >
                    <div className="flex items-center gap-1.5 text-base font-bold tracking-tight shrink-0">
                      <span className="text-[#FF5533]">Typography</span>
                      <span className="text-white font-normal opacity-90">
                        Fonts
                      </span>
                    </div>
                    <div className="flex-grow w-full flex items-center justify-center overflow-hidden my-1">
                      <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 space-y-2 min-h-[160px]">
                        <span
                          className="anim-font-serif font-serif italic text-3xl sm:text-4xl text-[#FF5533] tracking-wide inline-block"
                          style={{
                            fontFamily:
                              '"Liberation Serif", var(--font-serif), Georgia, serif',
                          }}
                        >
                          Bold Stories
                        </span>
                        <span
                          className="text-xs sm:text-lg tracking-[0.3em] font-normal uppercase text-[#6F6F6F]"
                          style={{
                            fontFamily:
                              '"Nimbus Sans", "Helvetica Neue", Arial, sans-serif',
                          }}
                        >
                          Made Simple
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 pt-0">
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                        Pick the perfect fonts that match your video style and
                        mood.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "30", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-[#0A0A0A] text-white border border-neutral-900 flex flex-col justify-between p-7 pb-10"
                  >
                    <div className="flex items-center gap-1.5 text-base font-bold tracking-tight shrink-0">
                      <span className="text-[#FF5533]">Typography</span>
                      <span className="text-white font-normal opacity-90">
                        Styling
                      </span>
                    </div>
                    <div className="flex-grow w-full flex items-center justify-center overflow-hidden my-1">
                      <div className="w-full h-full bg-black p-5 flex items-center justify-center min-h-[160px]">
                        <div className="grid grid-cols-2 gap-3 w-full max-w-[260px]">
                          <div className="anim-chip-fill bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase transition-colors">
                            Fill
                          </div>
                          <div className="anim-chip-outline bg-[#141414] border border-[#FF5533]/80 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF5533] tracking-wider uppercase transition-colors">
                            Outline
                          </div>
                          <div className="bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase transition-colors">
                            Shadow
                          </div>
                          <div className="anim-chip-glow bg-[#3A1414] border border-[#FF5533]/40 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF6B55] tracking-wider uppercase shadow-[0_0_15px_rgba(255,85,51,0.25)]">
                            Glow
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 pt-0">
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                        Work with color, size, stroke, shadow, background and
                        more.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "40", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-[#0A0A0A] text-white border border-neutral-900 flex flex-col justify-between p-7 pb-10"
                  >
                    <div className="flex items-center gap-1.5 text-base font-bold tracking-tight shrink-0">
                      <span className="text-[#FF5533]">Typography</span>
                      <span className="text-white font-normal opacity-90">
                        Hierarchy
                      </span>
                    </div>
                    <div className="flex-grow w-full flex items-center justify-center overflow-hidden my-1">
                      <div className="w-full h-full bg-black p-5 flex flex-col items-center justify-center space-y-3 min-h-[160px]">
                        <div className="anim-title-box w-full max-w-[240px] bg-[#1a1a1a] border border-neutral-800 rounded-lg py-2 text-center relative transition-colors">
                          <span className="text-[11px] font-bold text-[#FF5533] tracking-wider">
                            MAIN TITLE
                          </span>
                          <div className="absolute inset-x-2 -bottom-1 h-px bg-[#FF5533]/50"></div>
                        </div>
                        <div className="anim-bar-1 w-[80%] max-w-[190px] h-3 bg-[#222222] rounded-full"></div>
                        <div className="anim-bar-2 w-[60%] max-w-[140px] h-2.5 bg-[#181818] rounded-full"></div>
                      </div>
                    </div>
                    <div className="shrink-0 pt-0">
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                        Organize text clearly using hierarchy, spacing, and
                        alignment.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "50", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-[#0A0A0A] text-white border border-neutral-900 flex flex-col justify-between p-7 pb-10"
                  >
                    <div className="flex items-center gap-1.5 text-base font-bold tracking-tight shrink-0">
                      <span className="text-[#FF5533]">Typography</span>
                      <span className="text-white font-normal opacity-90">
                        Animation
                      </span>
                    </div>
                    <div className="flex-grow w-full flex items-center justify-center overflow-hidden my-1">
                      <div className="w-full h-full bg-black p-5 flex items-center justify-center min-h-[160px]">
                        <div className="grid grid-cols-2 gap-3 w-full max-w-[260px]">
                          <div className="anim-seq-btn bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase">
                            Fill
                          </div>
                          <div className="anim-seq-btn bg-[#141414] border border-[#FF5533]/80 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF5533] tracking-wider uppercase">
                            Outline
                          </div>
                          <div className="anim-seq-btn bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase">
                            Shadow
                          </div>
                          <div className="anim-seq-btn bg-[#3A1414] border border-[#FF5533]/40 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF6B55] tracking-wider uppercase shadow-[0_0_15px_rgba(255,85,51,0.25)]">
                            Glow
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 pt-0">
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                        Learn what video editing is, key concepts, and how
                        digital video works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-12 gap-5 w-full items-stretch">
                <div className="col-span-4 bento-card bento-card-left bg-black text-white rounded-3xl p-7 flex flex-col justify-between border border-neutral-900 shadow-xl overflow-hidden min-h-[580px] will-change-transform">
                  <div className="space-y-3">
                    <h3 className="text-3xl xl:text-4xl font-semibold tracking-tight leading-tight">
                      Typography <br />
                      <span className="text-[#FF5533] font-bold text-5xl">
                        Fundamentals
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
                      Learn the basics of typography and how it affects your
                      video.
                    </p>
                  </div>
                  <div className="w-full grow mt-6 rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center">
                      <div className="rounded-lg relative group transition-all duration-300">
                        <span className="anim-type-text font-manrope text-[64px] sm:text-[80px] lg:text-[100px] tracking-wider text-white select-none inline-block">
                          TYPE
                        </span>
                        <div className="anim-guide-top absolute top-2.5 sm:top-3.5 left-0 right-0 h-px bg-[#FF5533]/80 origin-center"></div>
                        <div className="anim-guide-top absolute bottom-2.5 sm:bottom-3.5 left-0 right-0 h-px bg-[#FF5533]/80 origin-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8 grid grid-cols-2 gap-5">
                  <div className="bento-card bento-card-right bg-[#F4F4F4] text-neutral-900 rounded-3xl p-6 flex flex-col justify-between border border-neutral-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 min-h-[275px] will-change-transform">
                    <div className="space-y-1.5 mb-4">
                      <h3 className="text-2xl font-semibold text-[#727272] tracking-tight leading-snug">
                        Choosing the <br />
                        <span className="font-bold text-4xl text-[#111111]">
                          Right Font
                        </span>
                      </h3>
                      <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed">
                        Pick the perfect fonts that match your video style and
                        mood.
                      </p>
                    </div>
                    <div className="w-full grow rounded-2xl overflow-hidden border border-neutral-900">
                      <div className="w-full h-full bg-black flex flex-col items-center justify-center p-6 space-y-2 min-h-[160px]">
                        <span
                          className="anim-font-serif font-serif italic text-3xl sm:text-4xl text-[#FF5533] tracking-wide inline-block"
                          style={{
                            fontFamily:
                              '"Liberation Serif", var(--font-serif), Georgia, serif',
                          }}
                        >
                          Bold Stories
                        </span>
                        <span
                          className="text-xs sm:text-lg tracking-[0.3em] font-normal uppercase text-[#6F6F6F]"
                          style={{
                            fontFamily:
                              '"Nimbus Sans", "Helvetica Neue", Arial, sans-serif',
                          }}
                        >
                          Made Simple
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bento-card bento-card-right bg-[#F4F4F4] text-neutral-900 rounded-3xl p-6 flex flex-col justify-between border border-neutral-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 min-h-[275px] will-change-transform">
                    <div className="space-y-1.5 mb-4">
                      <h3 className="text-2xl font-semibold text-[#727272] tracking-tight leading-snug">
                        Text Styling & <br />
                        <span className="font-bold text-4xl text-[#111111]">
                          Customization
                        </span>
                      </h3>
                      <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed">
                        Work with color, size, stroke, shadow, background and
                        more.
                      </p>
                    </div>
                    <div className="w-full grow rounded-2xl overflow-hidden border border-neutral-900">
                      <div className="w-full h-full bg-black p-5 flex items-center justify-center min-h-[160px]">
                        <div className="grid grid-cols-2 gap-3 w-full max-w-[260px]">
                          <div className="anim-chip-fill bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase transition-colors">
                            Fill
                          </div>
                          <div className="anim-chip-outline bg-[#141414] border border-[#FF5533]/80 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF5533] tracking-wider uppercase transition-colors">
                            Outline
                          </div>
                          <div className="bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase transition-colors">
                            Shadow
                          </div>
                          <div className="anim-chip-glow bg-[#3A1414] border border-[#FF5533]/40 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF6B55] tracking-wider uppercase shadow-[0_0_15px_rgba(255,85,51,0.25)]">
                            Glow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bento-card bento-card-right bg-[#F4F4F4] text-neutral-900 rounded-3xl p-6 flex flex-col justify-between border border-neutral-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 min-h-[275px] will-change-transform">
                    <div className="space-y-1.5 mb-4">
                      <h3 className="text-2xl font-semibold text-[#727272] tracking-tight leading-snug">
                        Text Hierarchy <br />
                        <span className="font-bold text-4xl text-[#111111]">
                          & Layout
                        </span>
                      </h3>
                      <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed">
                        Organize text clearly using hierarchy, spacing, and
                        alignment.
                      </p>
                    </div>
                    <div className="w-full grow rounded-2xl overflow-hidden border border-neutral-900">
                      <div className="w-full h-full bg-black p-5 flex flex-col items-center justify-center space-y-3 min-h-[160px]">
                        <div className="anim-title-box w-full max-w-[240px] bg-[#1a1a1a] border border-neutral-800 rounded-lg py-2 text-center relative transition-colors">
                          <span className="text-[11px] font-bold text-[#FF5533] tracking-wider">
                            MAIN TITLE
                          </span>
                          <div className="absolute inset-x-2 -bottom-1 h-px bg-[#FF5533]/50"></div>
                        </div>
                        <div className="anim-bar-1 w-[80%] max-w-[190px] h-3 bg-[#222222] rounded-full"></div>
                        <div className="anim-bar-2 w-[60%] max-w-[140px] h-2.5 bg-[#181818] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bento-card bento-card-right bg-[#F4F4F4] text-neutral-900 rounded-3xl p-6 flex flex-col justify-between border border-neutral-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 min-h-[275px] will-change-transform">
                    <div className="space-y-1.5 mb-4">
                      <h3 className="text-2xl font-semibold text-[#727272] tracking-tight leading-snug">
                        Text Animation in <br />
                        <span className="font-bold text-4xl text-[#111111]">
                          CapCut
                        </span>
                      </h3>
                      <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed">
                        Learn what video editing is, key concepts, and how
                        digital video works.
                      </p>
                    </div>
                    <div className="w-full grow rounded-2xl overflow-hidden border border-neutral-900">
                      <div className="w-full h-full bg-black p-5 flex items-center justify-center min-h-[160px]">
                        <div className="grid grid-cols-2 gap-3 w-full max-w-[260px]">
                          <div className="anim-seq-btn bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase">
                            Fill
                          </div>
                          <div className="anim-seq-btn bg-[#141414] border border-[#FF5533]/80 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF5533] tracking-wider uppercase">
                            Outline
                          </div>
                          <div className="anim-seq-btn bg-[#141414] border border-white/10 rounded-xl py-3 text-center text-[11px] font-bold text-neutral-300 tracking-wider uppercase">
                            Shadow
                          </div>
                          <div className="anim-seq-btn bg-[#3A1414] border border-[#FF5533]/40 rounded-xl py-3 text-center text-[11px] font-bold text-[#FF6B55] tracking-wider uppercase shadow-[0_0_15px_rgba(255,85,51,0.25)]">
                            Glow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="relative w-full bg-white text-neutral-900 pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                How Typography Changes the Feel of Your Video
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                The right typography creates the right emotion.
              </p>
            </div>
            <div className="block lg:hidden w-full space-y-6 max-w-sm sm:max-w-sm mx-auto">
              <div className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-65 overflow-hidden rounded-t-3xl">
                  <img
                    alt="Luxury Brand"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    srcSet="/main/4/hero/how/energy.png"
                    src="/main/4/hero/how/energy.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-white font-bold text-xl sm:text-2xl tracking-tight drop-shadow-md">
                      Luxury Brand
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-1 bg-[#F4F4F6]">
                  <span className="text-xs text-neutral-500 font-medium tracking-wide block">
                    Serif Typography
                  </span>
                  <p className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                    Premium, Timeless Prestige.
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-65 overflow-hidden rounded-t-3xl">
                  <img
                    alt="Technology"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    srcSet="/main/4/hero/how/technologoy.png"
                    src="/main/4/hero/how/technologoy.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-white font-bold text-xl sm:text-2xl tracking-tight drop-shadow-md">
                      Technology
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-1 bg-[#F4F4F6]">
                  <span className="text-xs text-neutral-500 font-medium tracking-wide block">
                    Sans Serif Typography
                  </span>
                  <p className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                    Modern, Smart Innovation.
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-65 overflow-hidden rounded-t-3xl">
                  <img
                    alt="Gaming"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    srcSet="/main/4/hero/how/suspense.png"
                    src="/main/4/hero/how/suspense.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-white font-bold text-xl sm:text-2xl tracking-tight drop-shadow-md">
                      Gaming
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-1 bg-[#F4F4F6]">
                  <span className="text-xs text-neutral-500 font-medium tracking-wide block">
                    Display Typography
                  </span>
                  <p className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                    Bold, Intense Action.
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-65 overflow-hidden rounded-t-3xl">
                  <img
                    alt="Luxury Fashion"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    srcSet="/main/4/hero/how/modern and.jpg"
                    src="/main/4/hero/how/modern and.jpg"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-white font-bold text-xl sm:text-2xl tracking-tight drop-shadow-md">
                      Luxury Fashion
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-1 bg-[#F4F4F6]">
                  <span className="text-xs text-neutral-500 font-medium tracking-wide block">
                    Thin Elegant Typography
                  </span>
                  <p className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                    Sophisticated, High-End Style.
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4F6] rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full h-65 overflow-hidden rounded-t-3xl">
                  <img
                    alt="Documentary"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 768px) 100vw, 360px"
                    srcSet="/main/4/hero/how/attetion.png"
                    src="/main/4/hero/how/attetion.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-white font-bold text-xl sm:text-2xl tracking-tight drop-shadow-md">
                      Documentary
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-1 bg-[#F4F4F6]">
                  <span className="text-xs text-neutral-500 font-medium tracking-wide block">
                    Simple Sans Serif
                  </span>
                  <p className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                    Clear, Authentic Storytelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-full gap-4 h-110 items-stretch">
              <div className="how-accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 border bg-black text-white shadow-2xl border-neutral-800">
                <div className="z-10 px-6 pt-5 pb-3">
                  <h3 className="font-bold tracking-wide transition-colors duration-300 text-white text-sm sm:text-xl">
                    Luxury Brand
                  </h3>
                </div>
                <div className="relative w-full grow overflow-hidden my-1">
                  <img
                    alt="Luxury Brand"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-300 object-[50%_25%]"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    srcSet="/main/4/hero/how/energy.png"
                    src="/main/4/hero/how/energy.png"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black pointer-events-none"></div>
                </div>
                <div className="how-card-content-0 z-10 p-6 flex items-end justify-between gap-3 min-h-22">
                  <div className="space-y-1 max-w-[82%]">
                    <span className="font-medium tracking-wide block text-white text-[14px]">
                      Serif Typography
                    </span>
                    <p className="font-bold leading-tight text-[#FF5533] text-xl">
                      Premium, Timeless Prestige.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right w-5 h-5 stroke-[2.5]"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="how-accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 border bg-[#F3F3F5] text-neutral-900 border-neutral-200/80">
                <div className="z-10 px-6 pt-5 pb-3">
                  <h3 className="font-bold tracking-wide transition-colors duration-300 text-neutral-900 text-md">
                    Technology
                  </h3>
                </div>
                <div className="relative w-full grow overflow-hidden my-1">
                  <img
                    alt="Technology"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-300 object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    srcSet="/main/4/hero/how/technologoy.png"
                    src="/main/4/hero/how/technologoy.png"
                  />
                </div>
                <div className="how-card-content-1 z-10 p-6 flex items-end justify-between gap-3 min-h-22">
                  <div className="space-y-1 max-w-[82%]">
                    <span className="font-medium tracking-wide block text-neutral-500 text-[11px]">
                      Sans Serif Typography
                    </span>
                    <p className="font-bold leading-tight text-black text-[13px]">
                      Modern, Smart Innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 border bg-[#F3F3F5] text-neutral-900 border-neutral-200/80">
                <div className="z-10 px-6 pt-5 pb-3">
                  <h3 className="font-bold tracking-wide transition-colors duration-300 text-neutral-900 text-md">
                    Gaming
                  </h3>
                </div>
                <div className="relative w-full grow overflow-hidden my-1">
                  <img
                    alt="Gaming"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-300 object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    srcSet="/main/4/hero/how/suspense.png"
                    src="/main/4/hero/how/suspense.png"
                  />
                </div>
                <div className="how-card-content-2 z-10 p-6 flex items-end justify-between gap-3 min-h-22">
                  <div className="space-y-1 max-w-[82%]">
                    <span className="font-medium tracking-wide block text-neutral-500 text-[11px]">
                      Display Typography
                    </span>
                    <p className="font-bold leading-tight text-black text-[13px]">
                      Bold, Intense Action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 border bg-[#F3F3F5] text-neutral-900 border-neutral-200/80">
                <div className="z-10 px-6 pt-5 pb-3">
                  <h3 className="font-bold tracking-wide transition-colors duration-300 text-neutral-900 text-md">
                    Luxury Fashion
                  </h3>
                </div>
                <div className="relative w-full grow overflow-hidden my-1">
                  <img
                    alt="Luxury Fashion"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-300 object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    srcSet="/main/4/hero/how/modern and.jpg"
                    src="/main/4/hero/how/modern and.jpg"
                  />
                </div>
                <div className="how-card-content-3 z-10 p-6 flex items-end justify-between gap-3 min-h-22">
                  <div className="space-y-1 max-w-[82%]">
                    <span className="font-medium tracking-wide block text-neutral-500 text-[11px]">
                      Thin Elegant Typography
                    </span>
                    <p className="font-bold leading-tight text-black text-[13px]">
                      Sophisticated, High-End Style.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 border bg-[#F3F3F5] text-neutral-900 border-neutral-200/80">
                <div className="z-10 px-6 pt-5 pb-3">
                  <h3 className="font-bold tracking-wide transition-colors duration-300 text-neutral-900 text-md">
                    Documentary
                  </h3>
                </div>
                <div className="relative w-full grow overflow-hidden my-1">
                  <img
                    alt="Documentary"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all duration-300 object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    srcSet="/main/4/hero/how/attetion.png"
                    src="/main/4/hero/how/attetion.png"
                  />
                </div>
                <div className="how-card-content-4 z-10 p-6 flex items-end justify-between gap-3 min-h-22">
                  <div className="space-y-1 max-w-[82%]">
                    <span className="font-medium tracking-wide block text-neutral-500 text-[11px]">
                      Simple Sans Serif
                    </span>
                    <p className="font-bold leading-tight text-black text-[13px]">
                      Clear, Authentic Storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-white text-neutral-900 pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                What You'll Master in CapCut
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                All the tools and techniques to create stunning typography.
              </p>
            </div>
            <div className="block md:hidden w-full overflow-hidden">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-1 scrollbar-none scroll-smooth">
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Fonts</span>
                      <span className="text-[#FF5533] block">Library</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Use built-in fonts or import custom fonts.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl p-5 flex flex-col justify-center space-y-2.5 border border-white/5 shadow-inner">
                      <span className="master-font-item text-sm font-montserrat text-white tracking-wide opacity-60 inline-block origin-left">
                        Montserrat
                      </span>
                      <span className="master-font-item text-sm font-poppins text-white tracking-wide inline-block origin-left">
                        Poppins
                      </span>
                      <span className="master-font-item text-sm font-serif italic text-white tracking-wide opacity-60 inline-block origin-left">
                        Playfair Display
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Text</span>
                      <span className="text-[#FF5533] block">Tool</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Add, edit and manage text easily in CapCut.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center border border-white/5 shadow-inner p-4">
                      <div className="master-tool-badge px-4 py-2 border border-neutral-700 bg-neutral-900/80 rounded-md text-xs font-medium text-neutral-300 shadow-sm">
                        Default text
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Text</span>
                      <span className="text-[#FF5533] block">Styling</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Change color, size, stroke, shadow, background.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center space-x-3 border border-white/5 shadow-inner p-4">
                      <div className="master-color-swatch w-5 h-5 rounded-full bg-white shadow-md shadow-white/20"></div>
                      <div className="master-color-swatch w-5 h-5 rounded-full bg-[#FF5533] shadow-md shadow-orange-500/30"></div>
                      <div className="master-color-swatch w-5 h-5 rounded-full bg-[#2563EB] shadow-md shadow-blue-500/30"></div>
                    </div>
                  </div>
                </div>
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Text</span>
                      <span className="text-[#FF5533] block">Animation</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Apply in, out and loop animations with keyframes.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center space-x-2 border border-white/5 shadow-inner p-4">
                      <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-neutral-800 rounded text-[10px] text-neutral-400 font-medium inline-block">
                        Zoom In
                      </span>
                      <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-[#FF5533]/60 rounded text-[10px] text-[#FF5533] font-semibold inline-block">
                        Fade In
                      </span>
                      <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-neutral-800 rounded text-[10px] text-neutral-400 font-medium inline-block">
                        Pop Up
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Effects &</span>
                      <span className="text-[#FF5533] block">Presets</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Use effects, glow, blur and presets for pro text.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl p-3 flex flex-col justify-between border border-white/5 shadow-inner gap-2">
                      <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                          Glow
                        </div>
                        <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                          Shadow
                        </div>
                        <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                          Neon
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-carousel-card snap-center shrink-0 w-[84vw] max-w-[320px] bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs min-h-[340px]">
                  <div className="space-y-1.5 mb-6">
                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                      <span>Layer</span>
                      <span className="text-[#FF5533] block">& Timing</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Control order, duration and perfect timing.
                    </p>
                  </div>
                  <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-[#111622] rounded-2xl p-4 flex flex-col justify-end space-y-2 border border-white/5 shadow-inner">
                      <div className="master-timing-bar-1 w-[75%] h-3.5 bg-[#6366F1] rounded-sm shadow-sm"></div>
                      <div className="master-timing-bar-2 w-[55%] h-3.5 bg-[#2563EB] rounded-sm shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1.5 pt-1">
                <button
                  aria-label="Go to slide 1"
                  className="transition-all duration-300 rounded-full cursor-pointer w-6 h-1.5 bg-[#FF5533]"
                ></button>
                <button
                  aria-label="Go to slide 2"
                  className="transition-all duration-300 rounded-full cursor-pointer w-1.5 h-1.5 bg-neutral-300"
                ></button>
                <button
                  aria-label="Go to slide 3"
                  className="transition-all duration-300 rounded-full cursor-pointer w-1.5 h-1.5 bg-neutral-300"
                ></button>
                <button
                  aria-label="Go to slide 4"
                  className="transition-all duration-300 rounded-full cursor-pointer w-1.5 h-1.5 bg-neutral-300"
                ></button>
                <button
                  aria-label="Go to slide 5"
                  className="transition-all duration-300 rounded-full cursor-pointer w-1.5 h-1.5 bg-neutral-300"
                ></button>
                <button
                  aria-label="Go to slide 6"
                  className="transition-all duration-300 rounded-full cursor-pointer w-1.5 h-1.5 bg-neutral-300"
                ></button>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Fonts</span>
                    <span className="text-[#FF5533] block">Library</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Use built-in fonts or import custom fonts.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl p-5 flex flex-col justify-center space-y-2.5 border border-white/5 shadow-inner">
                    <span className="master-font-item text-sm font-montserrat text-white tracking-wide opacity-60 inline-block origin-left">
                      Montserrat
                    </span>
                    <span className="master-font-item text-sm font-poppins text-white tracking-wide inline-block origin-left">
                      Poppins
                    </span>
                    <span className="master-font-item text-sm font-serif italic text-white tracking-wide opacity-60 inline-block origin-left">
                      Playfair Display
                    </span>
                  </div>
                </div>
              </div>
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Text</span>
                    <span className="text-[#FF5533] block">Tool</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Add, edit and manage text easily in CapCut.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center border border-white/5 shadow-inner p-4">
                    <div className="master-tool-badge px-4 py-2 border border-neutral-700 bg-neutral-900/80 rounded-md text-xs font-medium text-neutral-300 shadow-sm">
                      Default text
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Text</span>
                    <span className="text-[#FF5533] block">Styling</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Change color, size, stroke, shadow, background.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center space-x-3 border border-white/5 shadow-inner p-4">
                    <div className="master-color-swatch w-5 h-5 rounded-full bg-white shadow-md shadow-white/20"></div>
                    <div className="master-color-swatch w-5 h-5 rounded-full bg-[#FF5533] shadow-md shadow-orange-500/30"></div>
                    <div className="master-color-swatch w-5 h-5 rounded-full bg-[#2563EB] shadow-md shadow-blue-500/30"></div>
                  </div>
                </div>
              </div>
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Text</span>
                    <span className="text-[#FF5533] block">Animation</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Apply in, out and loop animations with keyframes.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl flex items-center justify-center space-x-2 border border-white/5 shadow-inner p-4">
                    <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-neutral-800 rounded text-[10px] text-neutral-400 font-medium inline-block">
                      Zoom In
                    </span>
                    <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-[#FF5533]/60 rounded text-[10px] text-[#FF5533] font-semibold inline-block">
                      Fade In
                    </span>
                    <span className="master-anim-badge px-2.5 py-1.5 bg-[#1F2937] border border-neutral-800 rounded text-[10px] text-neutral-400 font-medium inline-block">
                      Pop Up
                    </span>
                  </div>
                </div>
              </div>
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Effects &</span>
                    <span className="text-[#FF5533] block">Presets</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Use effects, glow, blur and presets for pro text.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl p-3 flex flex-col justify-between border border-white/5 shadow-inner gap-2">
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                        Glow
                      </div>
                      <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                        Shadow
                      </div>
                      <div className="master-effect-block bg-black/50 border border-[#374151] rounded-lg flex items-center justify-center text-[10px] font-semibold text-neutral-300">
                        Neon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop-grid-card bg-[#F4F4F6] rounded-4xl p-7 flex flex-col justify-between border border-neutral-200/70 shadow-xs hover:shadow-md transition-all duration-300 min-h-[340px]">
                <div className="space-y-1.5 mb-6">
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight text-neutral-900">
                    <span>Layer</span>
                    <span className="text-[#FF5533] block">& Timing</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    Control order, duration and perfect timing.
                  </p>
                </div>
                <div className="w-full h-[170px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-[#111622] rounded-2xl p-4 flex flex-col justify-end space-y-2 border border-white/5 shadow-inner">
                    <div className="master-timing-bar-1 w-[75%] h-3.5 bg-[#6366F1] rounded-sm shadow-sm"></div>
                    <div className="master-timing-bar-2 w-[55%] h-3.5 bg-[#2563EB] rounded-sm shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-18 bg-transparent text-neutral-900 overflow-hidden select-none">
          <div className="comparison-parallax-container max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3 sm:space-y-5">
              <div className="inline-flex px-4 py-1.5 rounded-full border border-[#FF7A59] bg-white text-xs sm:text-sm font-semibold text-[#FF7A59]">
                Why Choose Our Course?
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191C1D] max-w-4xl mx-auto leading-[1.12]">
                See the Difference. <br className="sm:hidden" /> Choose What's
                Better <br className="sm:hidden" /> for You.
              </h2>
              <p className="text-[#717680] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
                Compare the learning experience and discover why our course is
                more practical, supportive, and results-focused.
              </p>
            </div>
            <div className="w-full max-w-6xl mx-auto rounded-[20px] sm:rounded-[15px] border border-[#FF7A59]/60 sm:border-[#FF5A1F] shadow-lg bg-white overflow-hidden">
              <div className="grid grid-cols-3 border-b border-[#FF7A59]/30">
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#191C1D] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Key Features
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-neutral-400 border-x border-neutral-100 bg-[#FAF9F9] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Typical <br className="sm:hidden" /> Courses
                </div>
                <div className="p-2.5 sm:p-6 text-xs sm:text-2xl font-bold text-[#FF5A1F] bg-[#FFF7F4] flex items-center justify-center sm:justify-start text-center sm:text-left leading-tight sm:pl-8">
                  Our Course
                </div>
              </div>
              <div className="divide-y divide-neutral-100 relative z-20">
                <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                    <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FFF2EE] items-center justify-center shrink-0 border border-[#FF5B1F]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-award w-5 h-5 text-[#FF5B1F]"
                        aria-hidden="true"
                      >
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                        <circle cx="12" cy="8" r="6" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">
                      Verified <br className="sm:hidden" /> Certificate
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x w-3 h-3 sm:w-4 sm:h-4 text-[#FF3B30] stroke-[2.5]"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">
                      Generic or No Certificate
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#22C55E] stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">
                      Verified Certificate <br className="sm:hidden" /> of
                      Completion
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                    <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FFF2EE] items-center justify-center shrink-0 border border-[#FF5B1F]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-folder-kanban w-5 h-5 text-[#FF5B1F]"
                        aria-hidden="true"
                      >
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                        <path d="M8 10v4" />
                        <path d="M12 10v2" />
                        <path d="M16 10v6" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">
                      Portfolio <br className="sm:hidden" /> Creation
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x w-3 h-3 sm:w-4 sm:h-4 text-[#FF3B30] stroke-[2.5]"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">
                      Basic Practice Exercises
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#22C55E] stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">
                      Create Client- <br className="sm:hidden" /> Ready
                      Portfolio <br className="sm:hidden" /> Projects
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                    <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FFF2EE] items-center justify-center shrink-0 border border-[#FF5B1F]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-rotate-ccw w-5 h-5 text-[#FF5B1F]"
                        aria-hidden="true"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">
                      Modern <br className="sm:hidden" /> Content
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x w-3 h-3 sm:w-4 sm:h-4 text-[#FF3B30] stroke-[2.5]"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">
                      Outdated or Generic Lessons
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#22C55E] stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">
                      Updated Practical <br className="sm:hidden" /> CapCut
                      Training
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 bg-white text-center sm:text-left sm:pl-8">
                    <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FFF2EE] items-center justify-center shrink-0 border border-[#FF5B1F]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-video w-5 h-5 text-[#FF5B1F]"
                        aria-hidden="true"
                      >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                        <rect x="2" y="6" width="14" height="12" rx="2" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-lg font-bold text-[#191C1D] leading-tight">
                      CapCut Pro <br className="sm:hidden" /> Access
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 border-x border-neutral-100 bg-[#FAF9F9] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#FFEAEB] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x w-3 h-3 sm:w-4 sm:h-4 text-[#FF3B30] stroke-[2.5]"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#8B95A5] leading-tight">
                      Not Included
                    </span>
                  </div>
                  <div className="p-2 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-[#F24D41] text-center sm:text-left sm:pl-8">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#22C55E] stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[9.5px] sm:text-base font-semibold text-white leading-tight max-w-[190px] sm:max-w-[220px]">
                      01 Month CapCut <br className="sm:hidden" /> Pro Access{" "}
                      <br className="sm:hidden" /> Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-y-5 pt-4">
              <p className="text-[#717680] text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal">
                Start learning practical CapCut skills with the course designed
                to help you grow faster than ever before.
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-56 sm:w-62 h-14 sm:h-17 text-lg md:text-xl font-bold shadow-xl shadow-red-500/30"
                  href="https://lms.editor.lk/payment"
                >
                  <span>Enroll Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-white text-neutral-900 py-12 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center space-y-2.5 sm:space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Explore More Course Modules
              </h2>
              <p className="text-xs sm:text-base text-gray-400 font-medium leading-relaxed max-w-xs sm:max-w-none mx-auto">
                Take your production skills to the next level by mastering the
                remaining core pillars of cinematic storytelling.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-[#FFF6F3] border-[#FF5B1F] shadow-orange-500/10 hover:shadow-orange-500/20"
                to="/music-and-sound"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-[#FF5B1F]">Next Module</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-[#FF5B1F]"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-[#FF5B1F] text-white">
                      03
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Music & Sound Effects
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Learn how to choose music, balance audio and use sound
                    effects to make every video more engaging and emotionally
                    powerful.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Music & Sound Effects"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 40vw, 250px"
                    srcSet="/main/3/bento/music.png"
                    src="/main/3/bento/music.png"
                  />
                </div>
              </Link>
              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/editing-fundamentals"
              >
                <div className="w-[60%] p-4 sm:p-7 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold">
                    <span className="text-gray-500">Explore After</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 text-gray-500"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 bg-neutral-300 text-neutral-600">
                      04
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Editing Fundamentals
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Master the core editing skills — cuts, transitions, pacing
                    and timeline management to build professional videos from
                    scratch.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Editing Fundamentals"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(max-width: 640px) 40vw, 250px"
                    srcSet="/main/5/course-click/editing-fundementals.png"
                    src="/main/5/course-click/editing-fundementals.png"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="relative w-full">
        <div className="relative z-0 w-full pointer-events-none"></div>
      </div>
    </div>
  );
}
