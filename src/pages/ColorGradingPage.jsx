import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ColorGradingPage() {
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
        "[class*='hero-asset-2-'], [class*='mobile-asset-2-']",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.25, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        "[class*='step-node-'], [class*='mobile-step-node-']",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
      gsap.fromTo(
        "[class*='step-arrow-'], [class*='mobile-step-arrow-']",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.4 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="color-grading-hero"
          className="relative w-full h-screen bg-white sm:bg-white text-white flex flex-col overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, #000000 20%, #000000 36%, #888888 75%, #FFFFFF 100%)",
            }}
          ></div>
          <div className="relative z-30 w-full grow flex flex-col items-center justify-between min-h-0 pt-14 sm:pt-18 lg:pt-20 pb-4 sm:pb-6">
            <div className="w-full max-w-4xl text-center space-y-1 sm:space-y-1.5 shrink-0 px-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                <span className="hero-text-item opacity-0 font-normal block text-base sm:text-2xl md:text-3xl lg:text-4xl text-neutral-200">
                  Color grading
                </span>
                <span className="hero-text-item opacity-0 font-extrabold block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  from basic to pro
                </span>
              </h1>
              <p className="hero-text-item opacity-0 text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-xs sm:max-w-md lg:max-w-lg mx-auto font-normal leading-relaxed pt-0.5">
                Learn professional color grading techniques to bring life, mood
                and cinematic quality to your videos using capcut.
              </p>
            </div>
            <div className="relative w-full grow min-h-0 flex lg:hidden flex-col items-center justify-center px-4 max-w-[340px] sm:max-w-md mx-auto space-y-2 sm:space-y-3 my-auto pt-4 pb-3 select-none">
              <div className="mobile-asset-2-3 opacity-0 relative w-full aspect-[933/525] rounded-xl overflow-hidden shadow-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                <img
                  alt="Color Grading Video Preview"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover object-center"
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
                  srcSet="/main/3/hero/seprate/2.3.png"
                  src="/main/3/hero/seprate/2.3.png"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="mobile-asset-2-1 opacity-0 relative w-full aspect-[367/423] rounded-xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Filters Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.1.png"
                    src="/main/3/hero/seprate/2.1.png"
                  />
                </div>
                <div className="mobile-asset-2-2 opacity-0 relative w-full aspect-[358/484] rounded-xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Curves Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.2.png"
                    src="/main/3/hero/seprate/2.2.png"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <div className="mobile-asset-2-4 opacity-0 relative w-full aspect-[492/184] rounded-xl overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <img
                    alt="Adjustment Toolbar"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.4.png"
                    src="/main/3/hero/seprate/2.4.png"
                  />
                </div>
                <div className="mobile-asset-2-5 opacity-0 absolute left-[1%] -top-[40%] -translate-y-1/2 w-[34%] aspect-square z-20 rounded-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
                  <img
                    alt="Color Wheel Picker"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    sizes="(max-width: 640px) 30vw, 140px"
                    srcSet="/main/3/hero/seprate/2.5.png"
                    src="/main/3/hero/seprate/2.5.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full grow min-h-0 hidden lg:flex items-center justify-center px-4 xl:px-8 overflow-visible my-auto pt-2 pb-4 sm:pb-6">
              <div className="relative w-[720px] xl:w-[640px] 2xl:w-[760px] aspect-[933/525] mx-auto select-none">
                <div className="hero-asset-2-3 opacity-0 absolute inset-0 w-full h-full z-10 rounded-xl overflow-hidden drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:scale-[1.015]">
                  <img
                    alt="Color Grading Video Preview"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.3.png"
                    src="/main/3/hero/seprate/2.3.png"
                  />
                </div>
                <div className="hero-asset-2-6 opacity-0 absolute left-0 right-0 top-[102%] w-full aspect-[934/84] z-10 rounded-md overflow-hidden drop-shadow-[0_15px_30px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    alt="Timeline Sequencer"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.6.png"
                    src="/main/3/hero/seprate/2.6.png"
                  />
                </div>
                <div className="hero-asset-2-1 opacity-0 absolute -left-[35%] -top-[2.5%] w-[33.33%] aspect-[367/423] z-20 rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Filters Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.1.png"
                    src="/main/3/hero/seprate/2.1.png"
                  />
                </div>
                <div className="hero-asset-2-2 opacity-0 absolute -right-[41%] -top-[1%] w-[38.37%] aspect-[278/384] z-20 rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Curves Modal"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    srcSet="/main/3/hero/seprate/2.2.png"
                    src="/main/3/hero/seprate/2.2.png"
                  />
                </div>
                <div className="hero-asset-2-4 opacity-0 absolute -left-[35%] top-[68%] w-[48.73%] aspect-[412/160] z-25 rounded-2xl overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
                  <img
                    alt="Adjustment Toolbar"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    srcSet="/main/3/hero/seprate/2.4.png"
                    src="/main/3/hero/seprate/2.4.png"
                  />
                </div>
                <div className="hero-asset-2-5 opacity-0 absolute -right-[8%] top-[56%] w-[25.19%] aspect-square z-30 rounded-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-110 hover:rotate-12 hover:z-40 cursor-pointer">
                  <img
                    alt="Color Wheel Picker"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain object-center"
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
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    srcSet="/main/3/hero/seprate/2.5.png"
                    src="/main/3/hero/seprate/2.5.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        <div id="features">
          <section className="relative w-full lg:min-h-screen pt-6 sm:pt-24 pb-8 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 rounded-t-4xl overflow-visible lg:overflow-hidden select-none">
            <div className="max-w-360 mx-auto flex flex-col items-center">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-1.5 sm:space-y-2">
                <h2 className="text-2xl sm:text-4xl font-normal text-neutral-900 tracking-tight leading-tight">
                  What you'll learn in
                </h2>
                <h3 className="text-3xl sm:text-5xl font-bold text-neutral-950 tracking-tight leading-none">
                  in color grading
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium leading-relaxed pt-1.5 max-w-md sm:max-w-none mx-auto">
                  Step by step, from basics to advanced professional
                  techniques.{" "}
                </p>
              </div>
              <div className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto">
                <div className="relative w-full h-[480px] sm:h-[500px] pt-2 overflow-visible">
                  <div
                    style={{
                      top: "0px",
                      zIndex: "10",
                      transformOrigin: "top center",
                    }}
                    className="mobile-stack-card absolute left-0 right-0 h-[380px] sm:h-[460px] rounded-[32px] overflow-hidden bg-linear-to-b from-[#0515FF] via-[#0515FF] to-[#FFFFFF] flex flex-col justify-between p-6 sm:p-7 border-t border-x border-white/20 will-change-transform"
                  >
                    <div className="absolute -top-4 -right-2 select-none pointer-events-none">
                      <span
                        style={{
                          WebkitMaskImage:
                            "linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%);mask-image:linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%)",
                        }}
                        className="font-bold leading-none tracking-tighter inline-block text-[140px] sm:text-[180px] text-white/35"
                      >
                        UC
                      </span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="z-10 text-left space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2 text-[#0a1882]">
                        Understand colors
                      </h4>
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-[#0a1882]/90">
                        Learn color theory, white balance, temperature, contrast
                        and more.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      top: "28px",
                      zIndex: "20",
                      transformOrigin: "top center",
                    }}
                    className="mobile-stack-card absolute left-0 right-0 h-[380px] sm:h-[460px] rounded-[32px] overflow-hidden bg-linear-to-b from-[#00FF99] via-[#00FF99] to-[#FFFFFF] flex flex-col justify-between p-6 sm:p-7 border-t border-x border-white/20 will-change-transform"
                  >
                    <div className="absolute -top-4 -right-2 select-none pointer-events-none">
                      <span
                        style={{
                          WebkitMaskImage:
                            "linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%);mask-image:linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%)",
                        }}
                        className="font-bold leading-none tracking-tighter inline-block text-[140px] sm:text-[180px] text-[#005c37]/35"
                      >
                        CS
                      </span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="z-10 text-left space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2 text-[#005c37]">
                        Create mood & Style
                      </h4>
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-[#005c37]/90">
                        Learn how to get the perfect mood for any type of video
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      top: "56px",
                      zIndex: "30",
                      transformOrigin: "top center",
                    }}
                    className="mobile-stack-card absolute left-0 right-0 h-[380px] sm:h-[460px] rounded-[32px] overflow-hidden bg-linear-to-b from-[#FF00CC] via-[#FF00CC] to-[#FFFFFF] flex flex-col justify-between p-6 sm:p-7 border-t border-x border-white/20 will-change-transform"
                  >
                    <div className="absolute -top-4 -right-2 select-none pointer-events-none">
                      <span
                        style={{
                          WebkitMaskImage:
                            "linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%);mask-image:linear-gradient(to top right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 90%)",
                        }}
                        className="font-bold leading-none tracking-tighter inline-block text-[140px] sm:text-[180px] text-white/40"
                      >
                        PW
                      </span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="z-10 text-left space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2 text-[#d800ad]">
                        Pro workflow
                      </h4>
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-[#d800ad]">
                        Professional workflow from start to finish color grading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-full max-w-[1250px] flex-col lg:flex-row gap-4 sm:gap-3 h-auto lg:h-140">
                <div className="accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out bg-linear-to-b from-[#0515FF] to-[#0515FF]/0 hover:opacity-95">
                  <div className="w-full flex justify-center items-center text-center select-none pointer-events-none transition-all duration-500 ease-out order-1 pt-2 pb-0">
                    <span className="font-bold leading-none text-white tracking-tighter inline-block text-center transition-all duration-500 ease-out text-[120px] xl:text-[160px]">
                      UC
                    </span>
                  </div>
                  <div className="card-content-0 z-10 text-center flex flex-col items-center justify-center transition-all duration-500 ease-out order-2 pb-45 px-5 w-full space-y-2">
                    <h4 className="font-bold tracking-tight border-b-2 pb-0.5 inline-block transition-all duration-500 text-lg text-[#0d1b82] border-[#0d1b82]/30">
                      Understand colors
                    </h4>
                    <p className="text-sm font-medium leading-relaxed transition-all duration-500 max-w-[170px] text-left text-[#0d1b82]/90">
                      Learn color theory, white balance, temperature, contrast
                      and more.
                    </p>
                  </div>
                </div>
                <div className="accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out bg-linear-to-t from-[#00FF99] to-[#E6FFF5] shadow-2xl scale-[1.01]">
                  <div className="w-full flex justify-center items-center text-center select-none pointer-events-none transition-all duration-500 ease-out order-2 pb-2 pt-0">
                    <span className="font-bold leading-none text-white tracking-tighter inline-block text-center transition-all duration-500 ease-out text-[120px] xl:text-[410px] -ml-5">
                      CS
                    </span>
                  </div>
                  <div className="card-content-1 z-10 text-center flex flex-col items-center justify-center transition-all duration-500 ease-out order-1 pt-10 px-6 space-y-2">
                    <h4 className="font-bold tracking-tight border-b-2 pb-0.5 inline-block transition-all duration-500 text-xl sm:text-4xl text-[#005c37] border-[#005c37]/30">
                      Create mood & Style
                    </h4>
                    <p className="text-base sm:text-lg font-medium leading-relaxed transition-all duration-500 max-w-xs text-center text-[#005c37]/90">
                      Learn how to get the perfect mood for any type of video
                    </p>
                  </div>
                </div>
                <div className="accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-out bg-linear-to-b from-[#FF00CC] to-[#FF00CC]/0 hover:opacity-95">
                  <div className="w-full flex justify-center items-center text-center select-none pointer-events-none transition-all duration-500 ease-out order-1 pt-2 pb-0">
                    <span className="font-bold leading-none text-white tracking-tighter inline-block text-center transition-all duration-500 ease-out text-[120px] xl:text-[160px]">
                      PW
                    </span>
                  </div>
                  <div className="card-content-2 z-10 text-center flex flex-col items-center justify-center transition-all duration-500 ease-out order-2 pb-45 px-5 w-full space-y-2">
                    <h4 className="font-bold tracking-tight border-b-2 pb-0.5 inline-block transition-all duration-500 text-lg text-[#7a005c] border-[#7a005c]/30">
                      Pro workflow
                    </h4>
                    <p className="text-sm font-medium leading-relaxed transition-all duration-500 max-w-[170px] text-left text-[#7a005c]/90">
                      Professional workflow from start to finish color grading
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="relative w-full pt-2 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 select-none">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto mt-8 sm:mt-6 mb-4 sm:mb-6 space-y-1">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold sm:font-extrabold text-neutral-950 tracking-tight leading-none">
                Color Grading
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                process step by step
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-normal pt-1">
                A clear workflow you will follow in every project
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center w-full max-w-5xl space-y-4 sm:space-y-6">
              <div className="grid grid-cols-4 gap-4 w-full items-center justify-items-center">
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-1 opacity-0 absolute top-10 sm:top-12 -right-1/2 w-full flex items-center justify-center z-0 pointer-events-none translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10H52M52 10L42 3M52 10L42 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-1 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      01
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Prepare
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Footage
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-2 opacity-0 absolute top-10 sm:top-12 -right-1/2 w-full flex items-center justify-center z-0 pointer-events-none translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10H52M52 10L42 3M52 10L42 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-2 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      02
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Basic
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Correction
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-3 opacity-0 absolute top-10 sm:top-12 -right-1/2 w-full flex items-center justify-center z-0 pointer-events-none translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10H52M52 10L42 3M52 10L42 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-3 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      03
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      White
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Balance
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-node-4 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      04
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      HSL
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Adjustment
                    </h4>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full py-2 sm:py-1">
                <div className="col-start-4 flex justify-center items-center">
                  <div className="step-arrow-4 opacity-0 flex flex-col items-center">
                    <svg
                      className="w-5 h-13 text-neutral-600"
                      viewbox="0 0 20 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2V52M10 52L3 42M10 52L17 42"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full items-center justify-items-center">
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-node-8 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      08
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Finishing
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Touch
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-7 opacity-0 absolute top-10 sm:top-12 -left-1/2 w-full flex items-center justify-center z-0 pointer-events-none -translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58 10H8M8 10L18 3M8 10L18 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-7 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      07
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Creative
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Grading
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-6 opacity-0 absolute top-10 sm:top-12 -left-1/2 w-full flex items-center justify-center z-0 pointer-events-none -translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58 10H8M8 10L18 3M8 10L18 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-6 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      06
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Curves &
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Tone
                    </h4>
                  </div>
                </div>
                <div className="relative flex flex-col items-center group w-full">
                  <div className="step-arrow-5 opacity-0 absolute top-10 sm:top-12 -left-1/2 w-full flex items-center justify-center z-0 pointer-events-none -translate-x-3">
                    <svg
                      className="w-14 h-5 text-neutral-600"
                      viewbox="0 0 60 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58 10H8M8 10L18 3M8 10L18 17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-node-5 opacity-0 relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-xl transition-all duration-300 group-hover:scale-108 group-hover:bg-neutral-950 group-hover:shadow-2xl">
                      05
                    </div>
                    <span className="text-xs font-medium text-neutral-500 tracking-wide mt-2">
                      Color
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                      Grading
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col items-center w-full max-w-[350px] mx-auto space-y-2.5 pt-10">
              <div className="flex items-center justify-between w-full">
                <div className="mobile-step-node-1 opacity-0 flex items-center space-x-2 w-[130px] shrink-0 ml-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    01
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Prepare
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Footage
                    </h4>
                  </div>
                </div>
                <div className="mobile-step-arrow-1 opacity-0 flex-1 flex items-center justify-center z-10 pointer-events-none px-1 -ml-2">
                  <svg
                    className="w-11 h-4 text-neutral-600"
                    viewbox="0 0 44 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8H38M38 8L28 2M38 8L28 14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mobile-step-node-2 opacity-0 flex items-center space-x-2 w-[130px] shrink-0">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    02
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Basic
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Correction
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full py-0.5">
                <div className="w-[130px] shrink-0"></div>
                <div className="flex-1"></div>
                <div className="w-[130px] shrink-0 flex justify-start pl-[13px]">
                  <div className="mobile-step-arrow-2 opacity-0">
                    <svg
                      className="w-4 h-7 text-neutral-600"
                      viewbox="0 0 16 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V26M8 26L2 18M8 26L14 18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="mobile-step-node-4 opacity-0 flex items-center space-x-2 w-[130px] shrink-0 ml-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    04
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      HSL
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Adjustment
                    </h4>
                  </div>
                </div>
                <div className="mobile-step-arrow-3 opacity-0 flex-1 flex items-center justify-center z-10 pointer-events-none px-1 -ml-2">
                  <svg
                    className="w-11 h-4 text-neutral-600"
                    viewbox="0 0 44 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 8H6M6 8L16 2M6 8L16 14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mobile-step-node-3 opacity-0 flex items-center space-x-2 w-[130px] shrink-0">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    03
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      White
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Balance
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full py-0.5">
                <div className="w-[130px] shrink-0 flex justify-start pl-[13px]">
                  <div className="mobile-step-arrow-4 opacity-0 ml-2">
                    <svg
                      className="w-4 h-7 text-neutral-600"
                      viewbox="0 0 16 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V26M8 26L2 18M8 26L14 18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1"></div>
                <div className="w-[130px] shrink-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="mobile-step-node-5 opacity-0 flex items-center space-x-2 w-[130px] shrink-0 ml-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    05
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Prepare
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Footage
                    </h4>
                  </div>
                </div>
                <div className="mobile-step-arrow-5 opacity-0 flex-1 flex items-center justify-center z-10 pointer-events-none px-1 -ml-2">
                  <svg
                    className="w-11 h-4 text-neutral-600"
                    viewbox="0 0 44 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8H38M38 8L28 2M38 8L28 14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mobile-step-node-6 opacity-0 flex items-center space-x-2 w-[130px] shrink-0 ml-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    06
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Curves &
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Tone
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full py-0.5">
                <div className="w-[130px] shrink-0"></div>
                <div className="flex-1"></div>
                <div className="w-[130px] shrink-0 flex justify-start pl-[13px]">
                  <div className="mobile-step-arrow-6 opacity-0">
                    <svg
                      className="w-4 h-7 text-neutral-600"
                      viewbox="0 0 16 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V26M8 26L2 18M8 26L14 18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="mobile-step-node-8 opacity-0 flex items-center space-x-2 w-[130px] shrink-0 ml-2">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    08
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Finishing
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Touch
                    </h4>
                  </div>
                </div>
                <div className="mobile-step-arrow-7 opacity-0 flex-1 flex items-center justify-center z-10 pointer-events-none px-1 -ml-2">
                  <svg
                    className="w-11 h-4 text-neutral-600"
                    viewbox="0 0 44 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 8H6M6 8L16 2M6 8L16 14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mobile-step-node-7 opacity-0 flex items-center space-x-2 w-[130px] shrink-0">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    07
                  </div>
                  <div className="text-left leading-tight min-w-0">
                    <span className="text-[11px] font-medium text-neutral-500 block truncate">
                      Creative
                    </span>
                    <h4 className="text-[13px] font-bold text-neutral-900 truncate">
                      Grading
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full pt-16 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 select-none">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <div className="showcase-header text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                What you can create
              </h2>
              <p className="italic text-gray-500 text-sm sm:text-base font-normal">
                Amazing color grading for any type of video.
              </p>
            </div>
            <div
              className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 w-full"
              style={{
                gridTemplateRows: "1fr 1fr 1fr",
                height: "clamp(500px, 85vw, 850px)",
              }}
            >
              <div className="showcase-card group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 row-span-2">
                <img
                  alt="Vlog style color grading"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  sizes="(max-width: 768px) 50vw, 40vw"
                  srcSet="/main/3/bento/Photographer portrait.png"
                  src="/main/3/bento/Photographer portrait.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-lg">
                    Vlog Edit
                  </span>
                </div>
              </div>
              <div className="showcase-card group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  alt="Travel cinematic color grading"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  sizes="(max-width: 768px) 50vw, 40vw"
                  srcSet="/main/3/bento/Top down shot.png"
                  src="/main/3/bento/Top down shot.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-lg">
                    Travel Edit
                  </span>
                </div>
              </div>
              <div className="showcase-card group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 row-span-2 col-start-2 row-start-2">
                <img
                  alt="Product commercial color grading"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  sizes="(max-width: 768px) 50vw, 40vw"
                  srcSet="/main/3/bento/Crazy about lighting silhouette.png"
                  src="/main/3/bento/Crazy about lighting silhouette.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-lg">
                    Product Edit
                  </span>
                </div>
              </div>
              <div className="showcase-card group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 col-start-1 row-start-3">
                <img
                  alt="Lifestyle color grading"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  sizes="(max-width: 768px) 50vw, 40vw"
                  srcSet="/main/3/bento/busy.png"
                  src="/main/3/bento/busy.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-lg">
                    Lifestyle Edit
                  </span>
                </div>
              </div>
            </div>
            <div className="showcase-description text-center sm:text-right max-w-6xl mx-auto space-y-4 px-2 mt-5">
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                Master the complete art of color grading in CapCut, from basic
                color correction to advanced cinematic grading techniques. Learn
                how to adjust exposure, contrast, highlights, shadows, white
                balance, saturation, and color temperature to build a strong
                foundation. Then dive deeper into professional tools like HSL,
                Curves, Color Wheels, LUTs, Filters, Vignettes, and Sharpening
                to create visually stunning, emotionally engaging videos.
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                You'll also learn how to match colors between clips, maintain
                consistency throughout your edits, develop your own signature
                color style, and confidently apply a professional workflow to
                content such as commercials, documentaries, travel films, real
                estate videos, social media content, and client projects.
              </p>
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
                to="/typography"
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
                      Typography
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Learn how to design clear titles, animate text and use
                    typography to strengthen your video's message and visual
                    style.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Typography"
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
                    srcSet="/main/1/explore-modules/typography.png"
                    src="/main/1/explore-modules/typography.png"
                  />
                </div>
              </Link>
              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/music-and-sound"
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
