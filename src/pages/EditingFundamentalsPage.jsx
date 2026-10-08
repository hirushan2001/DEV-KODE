import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_CARDS = [
  { id: 0, title: "Green PSP Editorial Edit", src: "/main/2/hero/03d06ee7f7ebf4413bc6fc5b8c6aaf6e.jpg.jpeg" },
  { id: 1, title: "Tennis Ball Head Edit", src: "/main/2/hero/176c1f1e4ead917c6f7c73bdc99527fb.jpg.jpeg" },
  { id: 2, title: "Red Lighting Woman Edit", src: "/main/2/hero/e14557eb7cb892a7cafd42165de721fb.jpg.jpeg" },
  { id: 3, title: "Build Your Future VR Edit", src: "/main/2/hero/434d852c4f47767d82a96a99e501c917.jpg.jpeg" },
  { id: 4, title: "High Speed Motion Blur", src: "/main/2/hero/ae1f104c5bfee9025a9035f3a9d49447.jpg.jpeg" },
  { id: 5, title: "Cinematic Lighting & Color", src: "/main/2/hero/282f9ac0a1f1f98969da9a7613156af7.jpg.jpeg" },
  { id: 6, title: "Surreal Graphic Portrait", src: "/main/2/hero/49cfcca5b7d42f4041e4d8a394f4b8c5.jpg.jpeg" },
  { id: 7, title: "Dynamic Perspective 3D", src: "/main/2/hero/f69490e74d73c09216092bfcf7b1897e.jpg.jpeg" },
  { id: 8, title: "Creative Composite Art", src: "/main/2/hero/fdccef552fe4a305d5aa734bdf3d1b27.jpg.jpeg" },
];

export default function EditingFundamentalsPage() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [screenCategory, setScreenCategory] = useState("desktop");
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenCategory("mobile");
      else if (width < 1024) setScreenCategory("tablet");
      else setScreenCategory("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      // 1. Hero Load Entrance
      gsap.fromTo(
        ".hero-text-item",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-carousel-box",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.9, delay: 0.25, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-footer-item",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.55, ease: "power2.out" }
      );

      // 2. Hero Parallax Fade on Scroll
      gsap.to("#home-content", {
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -60,
        opacity: 0.35,
        scale: 0.95,
      });

      // 3. Feature Section Header & Desktop Feature Cards Reveal
      gsap.fromTo(
        ".feature-header-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#features",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-card-grid",
            start: "top 85%",
          },
        }
      );

      // 4. Core Skills Section Reveal
      gsap.fromTo(
        ".core-skills-img",
        { x: -40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#core-skills",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".core-skill-item",
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".core-skill-list",
            start: "top 85%",
          },
        }
      );

      // 5. Fundamentals Pillars (Practice, Observe, Experiment, Stay consistent)
      gsap.fromTo(
        ".pillar-card",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".pillar-grid",
            start: "top 85%",
          },
        }
      );

      // 6. Showcase Videos ("You'll create simple edits like this!")
      gsap.fromTo(
        ".showcase-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".showcase-grid",
            start: "top 80%",
          },
        }
      );

      // 7. Comparison Table Reveal
      gsap.fromTo(
        ".comparison-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".comparison-parallax-container",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".comparison-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".comparison-table-container",
            start: "top 85%",
          },
        }
      );

      // 8. Module Cards ("Explore More Course Modules")
      gsap.fromTo(
        ".module-card",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".module-grid",
            start: "top 85%",
          },
        }
      );
    }, heroRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  const getCardStyle = (index) => {
    const total = CAROUSEL_CARDS.length;
    let diff = index - activeIndex;

    // Circular wrap-around calculation so the arc is ALWAYS perfectly centered
    if (diff > Math.floor(total / 2)) {
      diff -= total;
    } else if (diff < -Math.floor(total / 2)) {
      diff += total;
    }

    const absDiff = Math.abs(diff);

    let spacing = 135;
    let maxVisible = 3;
    let baseScale = 1.15;
    let dropFactor = 22;

    if (screenCategory === "mobile") {
      spacing = 58;
      maxVisible = 2;
      baseScale = 0.95;
      dropFactor = 14;
    } else if (screenCategory === "tablet") {
      spacing = 95;
      maxVisible = 3;
      baseScale = 1.05;
      dropFactor = 18;
    }

    if (absDiff > maxVisible + 1) {
      return {
        opacity: 0,
        pointerEvents: "none",
        transform: `translate3d(${diff * spacing}px, 250px, -400px) scale(0.3)`,
        zIndex: 0,
      };
    }

    const translateX = diff * spacing;
    const translateY = Math.pow(absDiff, 1.62) * dropFactor;
    const translateZ = diff === 0 ? 140 : 100 - absDiff * 45;
    const rotateY = -diff * (screenCategory === "mobile" ? 12 : 15);
    const rotateZ = -diff * (screenCategory === "mobile" ? 4.5 : 7.2);
    const scale = diff === 0 ? baseScale : Math.max(0.6, (screenCategory === "mobile" ? 0.9 : 1.04) - absDiff * 0.08);
    const zIndex = diff === 0 ? 50 : 40 - absDiff * 5;
    const opacity = absDiff > maxVisible ? 0 : 1 - absDiff * 0.03;
    const brightness = diff === 0 ? 1.1 : Math.max(0.7, 1.0 - absDiff * 0.06);

    return {
      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      zIndex,
      opacity,
      filter: `brightness(${brightness}) ${diff === 0 ? "drop-shadow(0 30px 45px rgba(0,0,0,0.85))" : "drop-shadow(0 15px 25px rgba(0,0,0,0.65))"}`,
      transition: "transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.65s ease, filter 0.65s ease",
    };
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-neutral-950 font-sans text-white select-none">
      <div id="home" className="sticky top-0 z-10 h-[100dvh] w-full">
        <section
          id="home"
          className="relative w-full h-screen bg-black text-white pt-16 sm:pt-24 pb-4 sm:pb-8 flex flex-col justify-between overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 65% at 50% 85%, #353539 0%, #121215 55%, #000000 100%)",
            }}
          ></div>
          <div id="home-content" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow flex flex-col items-center justify-center gap-3 sm:gap-6 my-auto pt-0 sm:pt-2 pb-4">
            <div className="w-full max-w-4xl text-center space-y-2 sm:space-y-3">
              <h1 className="hero-text-item opacity-0 text-3xl sm:text-5xl md:text-6xl font-bold sm:font-semibold tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
                Editing fundamentals <br className="block sm:hidden" /> in
                CapCut.
              </h1>
              <h2 className="hero-text-item opacity-0 hidden sm:block text-sm sm:text-lg font-semibold text-white tracking-wide pt-0.5">
                From Basic to Professional
              </h2>
              <p className="hero-text-item opacity-0 text-xs sm:text-sm text-[#D1D5DB] sm:text-[#6B7280] max-w-xs sm:max-w-xl mx-auto font-normal leading-relaxed">
                Master the essential skills every professional video editor
                needs. Build a strong foundation before exploring advanced
                editing techniques.
              </p>
            </div>
            <div className="relative w-full max-w-6xl mt-4 sm:mt-6 flex flex-col items-center justify-center shrink">
              <div
                className="hero-carousel-box opacity-0 relative w-full h-[320px] xs:h-[350px] sm:h-[390px] md:h-[420px] lg:h-[450px] flex items-center justify-center"
                style={{ perspective: "1200px" }}
              >
                {CAROUSEL_CARDS.map((card, index) => {
                  const style = getCardStyle(index);
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveIndex(index)}
                      className="absolute cursor-pointer will-change-transform select-none hover:brightness-110"
                      style={{
                        transformStyle: "preserve-3d",
                        ...style,
                      }}
                      title={`Click to focus ${card.title}`}
                    >
                      <div className="relative w-[180px] xs:w-[200px] sm:w-[230px] md:w-[255px] lg:w-[275px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900">
                        <img
                          alt={card.title}
                          decoding="async"
                          className="object-cover pointer-events-none w-full h-full absolute inset-0"
                          src={card.src}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hero-footer-item opacity-0 hidden sm:block relative z-30 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-px bg-white/60"></div>
          </div>
          <div className="hero-footer-item opacity-0 hidden sm:block relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Step by step
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Beginner friendly
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Practical learning
              </div>
              <div className="text-xs sm:text-sm font-bold text-white sm:text-gray-800">
                Professional workflow
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="transform-gpu relative z-30 w-full bg-white text-neutral-900 force-rounded-t force-rounded-b rounded-t-[40px] sm:rounded-t-[56px] rounded-b-[40px] sm:rounded-b-[56px] shadow-[0_-10px_25px_rgba(0,0,0,0.5)] sm:shadow-[0_-25px_60px_rgba(0,0,0,0.8),0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden pb-4 sm:pb-8">
        <div id="features">
          <section className="relative w-full bg-white text-neutral-900 pt-0 sm:pt-20 pb-16 sm:pb-24 select-none overflow-visible lg:overflow-hidden">
            <div className="block sm:hidden w-full pt-5 mb-8">
              <div className="flex items-center justify-between text-[9px] font-medium text-gray-800 gap-1.5 whitespace-nowrap px-4 pb-3.5">
                <span>Step by Step</span>
                <span>Beginner friendly</span>
                <span>Practical learning</span>
                <span>Professional workflow</span>
              </div>
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-px bg-gray-200"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-1.5 sm:space-y-2">
                <h2 className="feature-header-item opacity-0 text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
                  What you'll learn in
                </h2>
                <h3 className="feature-header-item opacity-0 text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-950 tracking-tight leading-none">
                  Editing fundamentals
                </h3>
                <p className="feature-header-item opacity-0 text-xs sm:text-sm md:text-base text-gray-400 font-medium leading-relaxed pt-1.5 max-w-md sm:max-w-none mx-auto">
                  Master the Core Skills and Build a Strong Foundation for
                  Professional Editing.
                </p>
              </div>
              <div className="block lg:hidden w-full max-w-90 sm:max-w-md md:max-w-lg mx-auto">
                <div className="relative w-full h-[460px] sm:h-[560px] md:h-[620px] pt-12 overflow-visible">
                  <div
                    style={{ zIndex: "10", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Understand the basic
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Understand the basic"
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
                        sizes="(max-width: 640px) 340px, 384px"
                        srcSet="/main/2/what-you-will-learn/understand-basics.png"
                        src="/main/2/what-you-will-learn/understand-basics.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Understand the basic
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Learn what video editing is, key concepts, and how
                        digital video works.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "20", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Capcut interface
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Capcut interface"
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
                        sizes="(max-width: 640px) 340px, 384px"
                        srcSet="/main/2/what-you-will-learn/capcut.png"
                        src="/main/2/what-you-will-learn/capcut.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Capcut interface
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Explore the workspace, panels, and customize it for your
                        workflow.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "30", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Import & Organize
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Import & Organize"
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
                        sizes="(max-width: 640px) 340px, 384px"
                        srcSet="/main/2/what-you-will-learn/import-and-organize.png"
                        src="/main/2/what-you-will-learn/import-and-organize.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Import & Organize
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Import media, create folders, and organize your file
                        like a pro.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "40", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Timeline basic
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Timeline basic"
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
                        sizes="(max-width: 640px) 340px, 384px"
                        srcSet="/main/2/what-you-will-learn/timeline-basics.png"
                        src="/main/2/what-you-will-learn/timeline-basics.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Timeline basic
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Understand the timeline, tracks, playhead, zoom, and
                        basic navigation.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "50", transformOrigin: "top center" }}
                    className="mobile-stack-card absolute left-0 right-0 top-12 bottom-0 rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between will-change-transform transition-colors duration-300"
                  >
                    <div className="h-12 flex items-center px-5 bg-black border-b border-white/10 shrink-0">
                      <h3 className="font-bold text-base tracking-tight text-white">
                        Basic editing tools
                      </h3>
                    </div>
                    <div className="relative w-full flex-1 bg-neutral-950 overflow-hidden">
                      <img
                        alt="Basic editing tools"
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
                        sizes="(max-width: 640px) 340px, 384px"
                        srcSet="/main/2/what-you-will-learn/basic-editing.png"
                        src="/main/2/what-you-will-learn/basic-editing.png"
                      />
                    </div>
                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Basic editing tools
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        Cut, trim, split, delete, undo, redo and essential
                        editing techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card-grid hidden lg:grid grid-cols-5 gap-5 sm:gap-6 w-full">
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Understand the basic"
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
                      sizes="20vw"
                      srcSet="/main/2/what-you-will-learn/understand-basics.png"
                      src="/main/2/what-you-will-learn/understand-basics.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Understand the basic
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Learn what video editing is, key concepts, and how digital
                      video works.
                    </p>
                  </div>
                </div>
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Capcut interface"
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
                      sizes="20vw"
                      srcSet="/main/2/what-you-will-learn/capcut.png"
                      src="/main/2/what-you-will-learn/capcut.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Capcut interface
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Explore the workspace, panels, and customize it for your
                      workflow.
                    </p>
                  </div>
                </div>
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Import & Organize"
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
                      sizes="20vw"
                      srcSet="/main/2/what-you-will-learn/import-and-organize.png"
                      src="/main/2/what-you-will-learn/import-and-organize.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Import & Organize
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Import media, create folders, and organize your file like
                      a pro.
                    </p>
                  </div>
                </div>
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Timeline basic"
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
                      sizes="20vw"
                      srcSet="/main/2/what-you-will-learn/timeline-basics.png"
                      src="/main/2/what-you-will-learn/timeline-basics.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Timeline basic
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Understand the timeline, tracks, playhead, zoom, and basic
                      navigation.
                    </p>
                  </div>
                </div>
                <div className="feature-card flex flex-col space-y-3 group cursor-pointer">
                  <div className="relative w-full aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-md transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Basic editing tools"
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
                      sizes="20vw"
                      srcSet="/main/2/what-you-will-learn/basic-editing.png"
                      src="/main/2/what-you-will-learn/basic-editing.png"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Basic editing tools
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                      Cut, trim, split, delete, undo, redo and essential editing
                      techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="core-skills" className="relative w-full bg-[#F2F6FC] text-neutral-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
            <div className="block lg:hidden text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Core editing skills <br />
                step by step
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-xs mx-auto pt-1">
                Build your foundation with the essential <br />
                <strong className="text-gray-700 font-semibold">
                  editing techniques.
                </strong>
              </p>
            </div>
            <div className="hidden lg:block space-y-0.5">
              <h2 className="text-2xl sm:text-4xl font-medium text-neutral-900 tracking-tight">
                Core editing skills
              </h2>
              <h3 className="text-3xl sm:text-5xl font-black italic text-neutral-950 tracking-tight">
                step by step.
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="core-skills-img opacity-0 lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/50">
                <img
                  alt="CapCut Core Editing Interface"
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  srcSet="/main/2/side/step-by-step.png"
                  src="/main/2/side/step-by-step.png"
                />
              </div>
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 pl-0 lg:pl-2">
                <h4 className="hidden lg:block text-base sm:text-xl font-semibold text-neutral-600 leading-snug tracking-tight">
                  Build your foundation with <br />
                  the essential editing techniques.
                </h4>
                <ul className="core-skill-list grid grid-cols-2 lg:grid-cols-1 gap-y-3.5 gap-x-2 sm:gap-3">
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Cutting & Trimming clips
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Splitting & Merging clips
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Adding & Rearranging clips
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Using transitions simply
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Adjusting clip speed
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Working with audio basic
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Basic text & Effects
                    </span>
                  </li>
                  <li className="core-skill-item opacity-0 flex items-center gap-2 sm:gap-3 group">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 text-[#2563EB]">
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
                        className="lucide lucide-check w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-base font-semibold lg:font-medium lg:italic text-gray-700 lg:text-neutral-600 tracking-tight leading-snug">
                      Import & Export your videos
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-white text-neutral-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 select-none">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-neutral-950 tracking-tight">
                Editing fundamentals
              </h2>
              <div className="pillar-grid grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-8 pt-2">
                <div className="pillar-card opacity-0 flex flex-col md:flex-row items-center gap-3 md:gap-3.5 p-4 md:p-1 rounded-2xl md:rounded-none bg-[#F4F5F7] md:bg-transparent text-center md:text-left">
                  <div className="relative w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#1D1E22] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img
                      alt="Practice"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain p-2.5"
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
                      sizes="100vw"
                      srcSet="/main/2/showcase/practice.png"
                      src="/main/2/showcase/practice.png"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-0.5 min-w-0">
                    <h3 className="text-sm md:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                      Practice
                    </h3>
                    <p className="text-[11px] md:text-xs text-neutral-500 font-normal md:italic leading-snug line-clamp-3">
                      Edit more, practice makes you perfect.
                    </p>
                  </div>
                </div>
                <div className="pillar-card opacity-0 flex flex-col md:flex-row items-center gap-3 md:gap-3.5 p-4 md:p-1 rounded-2xl md:rounded-none bg-[#F4F5F7] md:bg-transparent text-center md:text-left">
                  <div className="relative w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#1D1E22] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img
                      alt="Observe"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain p-2.5"
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
                      sizes="100vw"
                      srcSet="/main/2/showcase/observe.png"
                      src="/main/2/showcase/observe.png"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-0.5 min-w-0">
                    <h3 className="text-sm md:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                      Observe
                    </h3>
                    <p className="text-[11px] md:text-xs text-neutral-500 font-normal md:italic leading-snug line-clamp-3">
                      Watch good edits, analyze and learn from them.
                    </p>
                  </div>
                </div>
                <div className="pillar-card opacity-0 flex flex-col md:flex-row items-center gap-3 md:gap-3.5 p-4 md:p-1 rounded-2xl md:rounded-none bg-[#F4F5F7] md:bg-transparent text-center md:text-left">
                  <div className="relative w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#1D1E22] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img
                      alt="Experiment"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain p-2.5"
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
                      sizes="100vw"
                      srcSet="/main/2/showcase/experiment.png"
                      src="/main/2/showcase/experiment.png"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-0.5 min-w-0">
                    <h3 className="text-sm md:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                      Experiment
                    </h3>
                    <p className="text-[11px] md:text-xs text-neutral-500 font-normal md:italic leading-snug line-clamp-3">
                      Try new techniques, effect and creative ideas.
                    </p>
                  </div>
                </div>
                <div className="pillar-card opacity-0 flex flex-col md:flex-row items-center gap-3 md:gap-3.5 p-4 md:p-1 rounded-2xl md:rounded-none bg-[#F4F5F7] md:bg-transparent text-center md:text-left">
                  <div className="relative w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#1D1E22] flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img
                      alt="Stay consistent"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain p-2.5"
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
                      sizes="100vw"
                      srcSet="/main/2/showcase/consistent.png"
                      src="/main/2/showcase/consistent.png"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-0.5 min-w-0">
                    <h3 className="text-sm md:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                      Stay consistent
                    </h3>
                    <p className="text-[11px] md:text-xs text-neutral-500 font-normal md:italic leading-snug line-clamp-3">
                      Consistency today professional editor tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-10 text-center pt-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight max-w-xs sm:max-w-none mx-auto">
                You'll create simple <br className="sm:hidden" /> edits like
                this!
              </h3>
              <div className="showcase-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-85 sm:max-w-none mx-auto">
                <div className="showcase-card opacity-0 flex flex-col items-center group cursor-pointer bg-[#F4F5F7] sm:bg-transparent rounded-3xl p-2.5 sm:p-0">
                  <div className="relative w-full aspect-[3/3.8] sm:aspect-9/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/40 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Travel edit"
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
                      sizes="(max-width: 640px) 100vw, 25vw"
                      srcSet="/main/2/showcase/Travel-edit.png"
                      src="/main/2/showcase/Travel-edit.png"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
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
                          className="lucide lucide-play w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5"
                          aria-hidden="true"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-base font-semibold text-neutral-900 tracking-tight pt-2.5 sm:pt-3 pb-1 sm:pb-0">
                    Travel edit
                  </span>
                </div>
                <div className="showcase-card opacity-0 flex flex-col items-center group cursor-pointer bg-[#F4F5F7] sm:bg-transparent rounded-3xl p-2.5 sm:p-0">
                  <div className="relative w-full aspect-[3/3.8] sm:aspect-9/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/40 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Lifestyle edit"
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
                      sizes="(max-width: 640px) 100vw, 25vw"
                      srcSet="/main/2/showcase/lifestyle-edit.png"
                      src="/main/2/showcase/lifestyle-edit.png"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
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
                          className="lucide lucide-play w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5"
                          aria-hidden="true"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-base font-semibold text-neutral-900 tracking-tight pt-2.5 sm:pt-3 pb-1 sm:pb-0">
                    Lifestyle edit
                  </span>
                </div>
                <div className="showcase-card opacity-0 flex flex-col items-center group cursor-pointer bg-[#F4F5F7] sm:bg-transparent rounded-3xl p-2.5 sm:p-0">
                  <div className="relative w-full aspect-[3/3.8] sm:aspect-9/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/40 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Product edit"
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
                      sizes="(max-width: 640px) 100vw, 25vw"
                      srcSet="/main/2/showcase/product-edit.png"
                      src="/main/2/showcase/product-edit.png"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
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
                          className="lucide lucide-play w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5"
                          aria-hidden="true"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-base font-semibold text-neutral-900 tracking-tight pt-2.5 sm:pt-3 pb-1 sm:pb-0">
                    Product edit
                  </span>
                </div>
                <div className="showcase-card opacity-0 flex flex-col items-center group cursor-pointer bg-[#F4F5F7] sm:bg-transparent rounded-3xl p-2.5 sm:p-0">
                  <div className="relative w-full aspect-[3/3.8] sm:aspect-9/15 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/40 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <img
                      alt="Vlog edit"
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
                      sizes="(max-width: 640px) 100vw, 25vw"
                      srcSet="/main/2/showcase/vlod-edit.png"
                      src="/main/2/showcase/vlod-edit.png"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-xs flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
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
                          className="lucide lucide-play w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5"
                          aria-hidden="true"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-base font-semibold text-neutral-900 tracking-tight pt-2.5 sm:pt-3 pb-1 sm:pb-0">
                    Vlog edit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-18 bg-transparent text-neutral-900 overflow-hidden select-none">
          <div className="comparison-parallax-container max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3 sm:space-y-5">
              <div className="comparison-header opacity-0 inline-flex px-4 py-1.5 rounded-full border border-[#FF7A59] bg-white text-xs sm:text-sm font-semibold text-[#FF7A59]">
                Why Choose Our Course?
              </div>
              <h2 className="comparison-header opacity-0 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191C1D] max-w-4xl mx-auto leading-[1.12]">
                See the Difference. <br className="sm:hidden" /> Choose What's
                Better <br className="sm:hidden" /> for You.
              </h2>
              <p className="comparison-header opacity-0 text-[#717680] text-xs sm:text-sm md:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
                Compare the learning experience and discover why our course is
                more practical, supportive, and results-focused.
              </p>
            </div>
            <div className="comparison-table-container w-full max-w-6xl mx-auto rounded-[20px] sm:rounded-[15px] border border-[#FF7A59]/60 sm:border-[#FF5A1F] shadow-lg bg-white overflow-hidden">
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
                <div className="comparison-row opacity-0 grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
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
                <div className="comparison-row opacity-0 grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
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
                <div className="comparison-row opacity-0 grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
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
                <div className="comparison-row opacity-0 grid grid-cols-3 items-stretch min-h-24 sm:min-h-24">
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
            <div className="module-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <Link
                className="module-card opacity-0 group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-[#FFF6F3] border-[#FF5B1F] shadow-orange-500/10 hover:shadow-orange-500/20"
                to="/color-grading"
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
                    srcSet="/main/1/explore-modules/color-grading.png"
                    src="/main/1/explore-modules/color-grading.png"
                  />
                </div>
              </Link>
              <Link
                className="module-card opacity-0 group relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row items-stretch border transition-all duration-300 shadow-md bg-white border-neutral-200/80 hover:border-neutral-300 shadow-neutral-200/50"
                to="/typography"
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
