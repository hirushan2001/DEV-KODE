import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function MusicAndSoundPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-main-title, .hero-capcut-text, .hero-desc-block",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-person-wrapper",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.9, delay: 0.2, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      <div id="home" className="sticky top-0 z-10 w-full">
        <section
          id="home"
          className="relative w-full h-[650px] lg:h-[820px] bg-black text-white flex flex-col items-center justify-between select-none overflow-visible pb-0"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              alt="Music & Sound Background"
              decoding="async"
              data-nimg="fill"
              className="hero-bg-img-desktop hidden md:block object-cover object-center opacity-100"
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
              sizes="(min-width: 768px) 100vw, 1px"
              srcSet="/main/5/hero/bg.png"
              src="/main/5/hero/bg.png"
            />
            <img
              alt="Mobile Hero Background"
              decoding="async"
              data-nimg="fill"
              className="hero-bg-img-mobile block md:hidden object-cover opacity-100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
                transform: "translateY(120px) scale(1.3)",
                transformOrigin: "center center",
              }}
              sizes="(max-width: 767px) 100vw, 1px"
              srcSet="/main/5/hero/mobile-hero.png"
              src="/main/5/hero/mobile-hero.png"
            />
            <div
              className="absolute inset-0 z-10 pointer-events-none block md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.25) 55%, transparent 85%)",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, #000000 35%, rgba(0,0,0,0.6) 65%, transparent 100%)",
              }}
            ></div>
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto pt-10 sm:pt-12 lg:pt-14 px-4 flex flex-col items-center">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center pt-15 md:pt-0">
              <h1 className="hero-main-title lg:absolute lg:top-[155px] lg:right-[180px] text-2xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
                Music & Sound Effects in
              </h1>
              <div className="relative w-full max-w-4xl mx-auto mt-1 sm:mt-2 min-h-0 lg:h-[320px]">
                <h2 className="hero-capcut-text text-3xl sm:text-7xl lg:text-8xl font-bold sm:font-black tracking-tight leading-none text-center lg:text-right lg:absolute lg:right-12 lg:top-[167px]">
                  <span className="text-white sm:text-transparent sm:bg-gradient-to-r sm:from-[#EA3A47] sm:to-[#FD6837] sm:bg-clip-text">
                    CapCut
                  </span>
                </h2>
                <div className="hero-desc-block lg:absolute lg:right-12 lg:top-[274px] text-center lg:text-left max-w-xs space-y-1.5 mt-3 lg:mt-0 mx-auto">
                  <h3 className="lg:absolute lg:right-[72px] lg:top-0 text-xs sm:text-base lg:text-lg sm:font-bold text-white tracking-wide leading-snug text-center lg:text-left">
                    From Basic to Professional
                  </h3>
                  <p className="mt-4 sm:mt-7 mx-auto lg:ml-2.5 text-[9px] sm:text-sm text-[#D1D5DB] sm:text-[#EFEFEF] font-normal leading-relaxed opacity-75 text-center lg:text-left">
                    Learn how to find, edit, mix, and balance music perfectly
                    for your content. Master the art of sound design to create
                    immersive video experiences that captivate your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-30 w-full flex justify-center pointer-events-none mt-auto">
            <div className="hero-person-wrapper relative w-[340px] sm:w-[500px] lg:w-[640px] h-[340px] sm:h-[480px] lg:h-[580px] translate-y-19 sm:-translate-y-6 lg:-translate-y-12 mb-6 sm:mb-10 lg:mb-16">
              <img
                alt="3D Person Camera"
                decoding="async"
                data-nimg="fill"
                className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] scale-118 sm:scale-120 origin-bottom"
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
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 500px, 640px"
                srcSet="/main/5/hero/person.png"
                src="/main/5/hero/person.png"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-16 sm:pt-24 pb-7 sm:pb-14 px-4 sm:px-6 lg:px-8 select-none overflow-visible lg:overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center mt-2">
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
                <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                  What You'll Learn
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                  Everything you need to master audio in CapCut.
                </p>
              </div>
              <div className="block lg:hidden w-full max-w-[380px] sm:max-w-sm mx-auto mt-3">
                <div className="relative w-full h-[450px] sm:h-[420px] pt-4 overflow-visible">
                  <div
                    style={{ zIndex: "10", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0"
                  >
                    <div className="mobile-card-image relative w-full h-[62%] overflow-hidden rounded-t-3xl shrink-0">
                      <img
                        alt="Use Music"
                        loading="lazy"
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
                        sizes="(max-width: 768px) 100vw, 360px"
                        srcSet="/main/5/what/music-prof.png"
                        src="/main/5/what/music-prof.png"
                      />
                    </div>
                    <div className="mobile-card-text p-6 flex flex-col justify-start space-y-1.5 grow bg-transparent">
                      <h3 className="leading-tight text-white">
                        <span className="block text-lg font-semibold">
                          Use Music
                        </span>
                        <span className="font-bold text-xl text-[#FF5533]">
                          Professionally
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90">
                        Find and choose the perfect background music for any
                        type of video workflows.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "20", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0"
                  >
                    <div className="mobile-card-image relative w-full h-[62%] overflow-hidden rounded-t-3xl shrink-0">
                      <img
                        alt="Add Perfect"
                        loading="lazy"
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
                        sizes="(max-width: 768px) 100vw, 360px"
                        srcSet="/main/5/what/audio.png"
                        src="/main/5/what/audio.png"
                      />
                    </div>
                    <div className="mobile-card-text p-6 flex flex-col justify-start space-y-1.5 grow bg-transparent">
                      <h3 className="leading-tight text-white">
                        <span className="block text-lg font-semibold">
                          Add Perfect
                        </span>
                        <span className="font-bold text-xl text-[#FF5533]">
                          Sound Effects
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90">
                        Add the right sound effects that match every action &
                        moment.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "30", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0"
                  >
                    <div className="mobile-card-image relative w-full h-[62%] overflow-hidden rounded-t-3xl shrink-0">
                      <img
                        alt="Volume &"
                        loading="lazy"
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
                        sizes="(max-width: 768px) 100vw, 360px"
                        srcSet="/main/5/what/volume.png"
                        src="/main/5/what/volume.png"
                      />
                    </div>
                    <div className="mobile-card-text p-6 flex flex-col justify-start space-y-1.5 grow bg-transparent">
                      <h3 className="leading-tight text-white">
                        <span className="block text-lg font-semibold">
                          Volume &
                        </span>
                        <span className="font-bold text-xl text-[#FF5533]">
                          Audio Balance
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90">
                        Balance music, voice and SFX for clear and professional
                        audio.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "40", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0"
                  >
                    <div className="mobile-card-image relative w-full h-[62%] overflow-hidden rounded-t-3xl shrink-0">
                      <img
                        alt="Change the Feel"
                        loading="lazy"
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
                        sizes="(max-width: 768px) 100vw, 360px"
                        srcSet="/main/5/what/feel.png"
                        src="/main/5/what/feel.png"
                      />
                    </div>
                    <div className="mobile-card-text p-6 flex flex-col justify-start space-y-1.5 grow bg-transparent">
                      <h3 className="leading-tight text-white">
                        <span className="block text-lg font-semibold">
                          Change the Feel
                        </span>
                        <span className="font-bold text-xl text-[#FF5533]">
                          of Your Video
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90">
                        Use music and sound to create emotion, mood and strong
                        impact.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "50", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-4 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-neutral-900 flex flex-col justify-between p-0"
                  >
                    <div className="mobile-card-image relative w-full h-[62%] overflow-hidden rounded-t-3xl shrink-0">
                      <img
                        alt="Export Professional"
                        loading="lazy"
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
                        sizes="(max-width: 768px) 100vw, 360px"
                        srcSet="/main/5/what/quality.png"
                        src="/main/5/what/quality.png"
                      />
                    </div>
                    <div className="mobile-card-text p-6 flex flex-col justify-start space-y-1.5 grow bg-transparent">
                      <h3 className="leading-tight text-white">
                        <span className="block text-lg font-semibold">
                          Export Professional
                        </span>
                        <span className="font-bold text-xl text-[#FF5533]">
                          Quality
                        </span>
                      </h3>
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed opacity-90">
                        Export clean, high quality audio for any platform and
                        device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-full gap-4 h-[450px] items-stretch">
                <div className="learn-accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 bg-black text-white shadow-2xl">
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-2xl shrink-0">
                    <img
                      alt="Use Music"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
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
                      srcSet="/main/5/what/music-prof.png"
                      src="/main/5/what/music-prof.png"
                    />
                  </div>
                  <div className="learn-card-content-0 p-5 flex flex-col justify-start space-y-1.5 grow">
                    <h3 className="tracking-tight leading-tight">
                      <span className="block text-base sm:text-lg font-semibold">
                        Use Music
                      </span>
                      <span className="font-bold text-xl text-[#FF5533]">
                        Professionally
                      </span>
                    </h3>
                    <p className="leading-relaxed transition-opacity duration-300 text-xs opacity-90 max-w-sm text-neutral-300">
                      Find and choose the perfect background music for any type
                      of video workflows.
                    </p>
                  </div>
                </div>
                <div className="learn-accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 bg-[#F4F4F6] text-neutral-950 hover:bg-[#EBEBEF] shadow-sm">
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-2xl shrink-0">
                    <img
                      alt="Add Perfect"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
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
                      srcSet="/main/5/what/audio.png"
                      src="/main/5/what/audio.png"
                    />
                  </div>
                  <div className="learn-card-content-1 p-5 flex flex-col justify-start space-y-1.5 grow">
                    <h3 className="tracking-tight leading-tight">
                      <span className="block text-base sm:text-lg font-semibold">
                        Add Perfect
                      </span>
                      <span className="font-bold text-xl text-neutral-950">
                        Sound Effects
                      </span>
                    </h3>
                    <p className="leading-relaxed transition-opacity duration-300 text-[9px] opacity-70 text-[#6B7280] line-clamp-2">
                      Add the right sound effects that match every action &
                      moment.
                    </p>
                  </div>
                </div>
                <div className="learn-accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 bg-[#F4F4F6] text-neutral-950 hover:bg-[#EBEBEF] shadow-sm">
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-2xl shrink-0">
                    <img
                      alt="Volume &"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
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
                      srcSet="/main/5/what/volume.png"
                      src="/main/5/what/volume.png"
                    />
                  </div>
                  <div className="learn-card-content-2 p-5 flex flex-col justify-start space-y-1.5 grow">
                    <h3 className="tracking-tight leading-tight">
                      <span className="block text-base sm:text-lg font-semibold">
                        Volume &
                      </span>
                      <span className="font-bold text-xl text-neutral-950">
                        Audio Balance
                      </span>
                    </h3>
                    <p className="leading-relaxed transition-opacity duration-300 text-[9px] opacity-70 text-[#6B7280] line-clamp-2">
                      Balance music, voice and SFX for clear and professional
                      audio.
                    </p>
                  </div>
                </div>
                <div className="learn-accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 bg-[#F4F4F6] text-neutral-950 hover:bg-[#EBEBEF] shadow-sm">
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-2xl shrink-0">
                    <img
                      alt="Change the Feel"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
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
                      srcSet="/main/5/what/feel.png"
                      src="/main/5/what/feel.png"
                    />
                  </div>
                  <div className="learn-card-content-3 p-5 flex flex-col justify-start space-y-1.5 grow">
                    <h3 className="tracking-tight leading-tight">
                      <span className="block text-base sm:text-lg font-semibold">
                        Change the Feel
                      </span>
                      <span className="font-bold text-xl text-neutral-950">
                        of Your Video
                      </span>
                    </h3>
                    <p className="leading-relaxed transition-opacity duration-300 text-[9px] opacity-70 text-[#6B7280] line-clamp-2">
                      Use music and sound to create emotion, mood and strong
                      impact.
                    </p>
                  </div>
                </div>
                <div className="learn-accordion-card flex-1 min-w-0 relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-colors duration-300 bg-[#F4F4F6] text-neutral-950 hover:bg-[#EBEBEF] shadow-sm">
                  <div className="relative w-full h-[60%] overflow-hidden rounded-t-2xl shrink-0">
                    <img
                      alt="Export Professional"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
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
                      srcSet="/main/5/what/quality.png"
                      src="/main/5/what/quality.png"
                    />
                  </div>
                  <div className="learn-card-content-4 p-5 flex flex-col justify-start space-y-1.5 grow">
                    <h3 className="tracking-tight leading-tight">
                      <span className="block text-base sm:text-lg font-semibold">
                        Export Professional
                      </span>
                      <span className="font-bold text-xl text-neutral-950">
                        Quality
                      </span>
                    </h3>
                    <p className="leading-relaxed transition-opacity duration-300 text-[9px] opacity-70 text-[#6B7280] line-clamp-2">
                      Export clean, high quality audio for any platform and
                      device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="relative w-full bg-white text-neutral-900 pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="mood-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                How Music Changes the Feel of Your Video
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                The right music creates the right emotion.
              </p>
            </div>
            <div className="mood-grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Happy"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/happy.png"
                    src="/main/5/moods/happy.png"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Happy
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  Upbeat & Bright
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Uplifting music creates energy and happiness.
                </p>
              </div>
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Sad"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/sad.png"
                    src="/main/5/moods/sad.png"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Sad
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  Melancholic
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Soft and slow music creates emotion and connection.
                </p>
              </div>
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Exciting"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/exiting.png"
                    src="/main/5/moods/exiting.png"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Exciting
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  High Energy
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Fast paced music builds excitement and adrenaline.
                </p>
              </div>
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Cinematic"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/cinematic.png"
                    src="/main/5/moods/cinematic.png"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Cinematic
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  Epic & Grand
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Cinematic music creates a professional and dramatic feel.
                </p>
              </div>
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Relaxing"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/relaxing.jpg"
                    src="/main/5/moods/relaxing.jpg"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Relaxing
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  Calm & Chill
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Calm music creates peace and relaxing atmosphere.
                </p>
              </div>
              <div className="mood-card bg-[#F4F4F6] rounded-2xl p-1 pb-2 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-default">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden order-first sm:order-last">
                  <img
                    alt="Tension"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="mood-card-img object-cover object-center transition-transform duration-300"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    srcSet="/main/5/moods/tension.png"
                    src="/main/5/moods/tension.png"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5533] tracking-tight">
                  Tension
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-900">
                  Suspenseful
                </p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                  Dark and low music creates suspense and tension.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-white text-neutral-900 pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="tools-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                CapCut Audio Tools You'll Master
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto">
                All the tools and techniques to create stunning audio.
              </p>
            </div>
            <div className="tools-grid w-full grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Volume Control"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/volumne.png"
                    src="/main/5/tools/volumne.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Volume Control
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Precise control over audio levels and gain.
                  </p>
                </div>
              </div>
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Fade Curves"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/fade.png"
                    src="/main/5/tools/fade.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Fade Curves
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Smooth transitions with customizable fades.
                  </p>
                </div>
              </div>
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Split & Trim"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/split.png"
                    src="/main/5/tools/split.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Split & Trim
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Edit tracks with sample accurate precision.
                  </p>
                </div>
              </div>
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Speed Sync"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/speed.png"
                    src="/main/5/tools/speed.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Speed Sync
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Adjust pitch and timing for the perfect beat.
                  </p>
                </div>
              </div>
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Audio Ducking"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/audio duc.png"
                    src="/main/5/tools/audio duc.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Audio Ducking
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Auto-lower music when speech is detected.
                  </p>
                </div>
              </div>
              <div className="tool-card flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 cursor-default transition-shadow duration-300 hover:shadow-lg text-center sm:text-left">
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    alt="Noise Reduction"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain p-4"
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
                    sizes="64px"
                    srcSet="/main/5/tools/noise.png"
                    src="/main/5/tools/noise.png"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    Noise Reduction
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Clean up background hums and static.
                  </p>
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
                to="/editing-fundamentals"
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
                      01
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
              <Link
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/color-grading"
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
                      02
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 tracking-tight leading-tight">
                      Color Grading
                    </h3>
                  </div>
                  <p className="text-[10.5px] sm:text-sm text-gray-500 leading-snug font-normal">
                    Learn how to use color correction, LUTs and grading
                    techniques to set the mood and elevate the visual quality of
                    your videos.
                  </p>
                </div>
                <div className="relative w-[40%] min-h-[150px] sm:min-h-full overflow-hidden bg-neutral-950 shrink-0">
                  <img
                    alt="Color Grading"
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
                    srcSet="/main/5/course-click/color-2'.png"
                    src="/main/5/course-click/color-2'.png"
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
